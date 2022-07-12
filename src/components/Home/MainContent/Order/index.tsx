import React, { useEffect, useRef } from 'react'

import S from './styled';
import {useAppSelector, useAxios, useToken} from '~hooks';
import PlusIcon from '~svg/Plus';
import MinusIcon from '~svg/Minus';
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import core from "~configs/core";
import { useForm } from 'react-hook-form';
import OrderModal from './OrderModal';
import { amountToBN, formatAmount, increaseDecimalNumber } from '~utils';
import Web3 from 'web3';
import axios from 'axios';
import TokenListModal from './TokenListModal';
import ImportTokenModal from './ImportTokenModal';
import {
    useGetBalancesByAccountQuery, useGetOverviewQuery
} from '~store/modules/home/api';
import { Balance } from '../../../../models/balance.model';
import Chevron from 'sezy-design/components/icon/solid/chevron';
import {exponentialToDecimal, getFractionDigits} from '~utils/number.util';
import {Token} from '../../../../models/token.model';
import {mapTokenFromOverviewData} from '~utils/token.util';

const PRICE_INPUT_ID = 1;
const AMOUNT_INPUT_ID = 2;
const BUSD_ADDRESS = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const contract = useAppSelector(state => state.home.contract);
    const currentToken: Token = useAppSelector(state => state.home.currentToken);
    const { data: defaultPayTokenOverviewData, isLoading, error } = useGetOverviewQuery(BUSD_ADDRESS);
    const tokenSymbol: string = currentToken?.symbol;
    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentAmount, setCurrentAmount] = useState(0);

    const [payToken, setPayToken] = useState<Token>({} as Token);
    const [buyToken, setBuyToken] = useState<Token>({} as Token);

    useEffect(() => {
        setBuyToken(currentToken);
        refreshData();
    }, [currentToken]);

    useEffect(() => {
        setPayToken(mapTokenFromOverviewData(defaultPayTokenOverviewData));
    }, [defaultPayTokenOverviewData?.symbol]);

    useEffect(() => {
        initInputRef();
    }, []);

    const [isDisabledApproveButton, setDisabledApproveButton] = useState(true);

    // const { data, isLoading, error } = useGetVolumeQuery(contract);
    const totalRangeRef: any = React.useRef(null);
    const totalRangeLabelRef: any = React.useRef(null);
    const percentageInputRef: any = React.useRef(null);
    const totalInputRef: any = React.useRef(null);
    const priceInputRef: any = useRef(null);
    const amountInputRef: any = useRef(null);

    const [isBuyType, setBuyType] = useState(true);
    const [isOrderModalVisible, setOrderModalVisible] = useState(false);
    const [isTokenListModalVisible, setTokenListModalVisible] = useState(false);
    const [isImportTokenModalVisible, setImportTokenModalVisible] = useState(false);
    const [importedToken, setImportedToken] = useState<Balance>({});
    const [importTokenSearchKeyword, setImportTokenSearchKeyword] = useState<string>('');
    const [myBalance, setMyBalance] = useState<number>(0);

    const { response: priceResponse } = useAxios({
        method: 'get',
        url: `https://api.dextrading.io/api/v1/price/${currentToken?.address}/${isBuyType ? payToken?.address : buyToken?.address}`,
        headers: JSON.stringify({ accept: '*/*' }) as any,
    });

    useEffect(() => {
        updatePrice((priceResponse as any)?.price ?? 0);
    }, [priceResponse]);

    const context = useWeb3React();
    const { account, library } = context;

    // const [pay, setPayAmount] = useState(0);
    // const [buy, setBuyAmount] = useState(0);

    const { approve, isApproved } = useToken(payToken?.address ?? '');
    // TODO: recheck after demo
    // const { approve, isApproved, balance: walletBalance } = useToken(payToken?.address ?? '');
    // const myBalance = walletBalance ? walletBalance / 1e18 : 0;
    // const myBalance = 1.1232123123;
    const { data: balanceData } = useGetBalancesByAccountQuery(account);
    // const { data: balanceData } = useGetBalancesByAccountQuery('0xc25D94fc3f8D7bD1d88f89802fe075338F71dEC7');
    const accountBalances: Balance[] = balanceData?.balances ?? [];
    const [pendingTx, setPendingTx] = useState(false);

    useEffect(() => {
        const payBalance: Balance | undefined = accountBalances.find((balance: Balance) => {
            return balance?.token?.address?.toLowerCase() === payToken?.address?.toLowerCase();
        });
        const updatedMyAccount = +(payBalance?.balance ?? 0) / 1e18;
        setMyBalance(updatedMyAccount);
    }, [payToken]);

    const initInputRef = () => {
        const percentage = '0';
        totalRangeRef.current && (totalRangeRef.current.value = percentage);
        totalInputRef.current && (totalInputRef.current.value = 0);
        percentageInputRef.current && (percentageInputRef.current.value = percentage);
    }
    
    const refreshData = () => {
        amountInputRef.current.value = '';
        totalInputRef.current.value = '';
        percentageInputRef.current.value = '0';
        totalRangeRef.current.value = '0';
        setPercentageLabel(0);
        setCurrentAmount(0);
        updatePrice((priceResponse as any)?.price ?? 0);
    }

    const setPercentageLabel = (percentage) => {
        if (totalRangeLabelRef.current) {
            totalRangeLabelRef.current.textContent = `${percentage}%`;
            totalRangeLabelRef.current.style.left = `${percentage}%`;
        }
    }

    const handleApproveClick = async formData => {
        setPendingTx(true)
        await approve()
        setPendingTx(false)
    }

    const onInputChange = (inputTypeId) => () => {
        let inputRef;
        switch (inputTypeId) {
            case PRICE_INPUT_ID:
                inputRef = priceInputRef;
                break;
            case AMOUNT_INPUT_ID:
                inputRef = amountInputRef;
                break;
            default:
                break;
        }
        if (inputRef) {
            updateCurrentInputStateById(inputTypeId, inputRef.current.value);
            validateApproveButton(inputTypeId);
        }
    }

    const onInputClick = (inputRef) => () => {
        if (isNaN(inputRef.current.value)) {
            inputRef.current.value = 0;
        }
    }

    const onInputClickOut = (inputRef, inputTypeId) => () => {
        switch (inputTypeId) {
            case PRICE_INPUT_ID:
                inputRef.current.value = currentPrice;
                break;
            case AMOUNT_INPUT_ID:
                inputRef.current.value = currentAmount;
                break;
            default:
                break;
        }
    }

    const handlePlusClick = (inputRef, inputTypeId) => () => {
        if (!inputRef.current.value) {
            inputRef.current.value = 0;
        }
        inputRef.current.value = increaseDecimalNumber(+inputRef.current.value, 1);
        updateCurrentInputStateById(inputTypeId, inputRef.current.value);
        validateApproveButton(inputTypeId);
    }

    const handleMinusClick = (inputRef, inputTypeId) => () => {
        if (isNaN(inputRef.current.value)) {
            inputRef.current.value = 0;
        }
        else {
            const newValue = increaseDecimalNumber(+inputRef.current.value, -1);
            inputRef.current.value = newValue > 0 ? newValue : 0;
            updateCurrentInputStateById(inputTypeId, inputRef.current.value);
            validateApproveButton(inputTypeId);
        }
    }

    const updateCurrentInputStateById = (inputTypeId, newValue) => {
        switch (inputTypeId) {
            case PRICE_INPUT_ID:
                setCurrentPrice(Number(newValue));
                break;
            case AMOUNT_INPUT_ID:
                setCurrentAmount(Number(newValue));
                break;
            default:
                break;
        }
    }

    const validateApproveButton = (inputTypeId) => {
        const pay = amountInputRef.current.value;
        const buy = isBuyType ? amountInputRef.current.value / priceInputRef.current.value : amountInputRef.current.value * priceInputRef.current.value;
        totalInputRef.current.value = buy;

        if (myBalance) {
            const rate = pay / myBalance;
            const percentage = rate > 1 ? 100 : rate * 100;
            if (percentage === 100) {
                amountInputRef.current.value = percentage * myBalance / 100
            }

            percentageInputRef.current.value = percentage.toFixed(2);
            totalRangeRef.current.value = percentage;
            setPercentageLabel(percentage.toFixed(2));
        }
        setDisabledApproveButton(pay <= 0 || buy <= 0 || payToken?.address == buyToken?.address);
        setCurrentAmount(Number(amountInputRef.current.value));
        setCurrentPrice(Number(priceInputRef.current.value));
    }

    const handleBuyClick = () => {
        setBuyType(true);
        if (!isBuyType) {
            setBuyToken(payToken);
            setPayToken(buyToken);
            refreshData();
        }
    }

    const handleSellClick = () => {
        setBuyType(false);
        if (isBuyType) {
            setBuyToken(payToken);
            setPayToken(buyToken);
            refreshData();
        }
    }

    const updatePrice = (price) => {
        if (priceInputRef.current && !isNaN(price)) {
            priceInputRef.current.value = exponentialToDecimal(price);
            setCurrentPrice(price);
        }
    }

    return (
        <>
            <S.OrderTitleBox>
                <S.OrderOrderType {...{ active: true }}>spot</S.OrderOrderType>
                <S.OrderSlash>/</S.OrderSlash>
                <S.OrderOrderType>margin</S.OrderOrderType>
                <S.OrderTitleMarginRate>10x</S.OrderTitleMarginRate>
                <S.OrderSlash>/</S.OrderSlash>
                <S.OrderOrderType>pending order</S.OrderOrderType>
            </S.OrderTitleBox>
            <S.OrderPlaceTypes>
                <S.OrderPlaceType {...{ active: true }}>limit</S.OrderPlaceType>
                <S.OrderPlaceType onClick={() => setOrderModalVisible(true)}>your orders</S.OrderPlaceType>
            </S.OrderPlaceTypes>
            <S.OrderBox>
                <S.OrderBoxBuySell>
                    <S.OrderBoxBuyButton {...{ active: isBuyType }} onClick={handleBuyClick}>Buy {tokenSymbol}</S.OrderBoxBuyButton>
                    <S.OrderBoxSellButton {...{ active: !isBuyType }} onClick={handleSellClick}>Sell {tokenSymbol}</S.OrderBoxSellButton>
                </S.OrderBoxBuySell>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>
                        {/* Price {isBuyType ? payToken?.symbol : buyToken?.symbol}/{isBuyType ? buyToken?.symbol : payToken?.symbol} */}
                        Price
                    </S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        ref={priceInputRef}
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <div onClick={handleMinusClick(priceInputRef, PRICE_INPUT_ID)}>
                                    <MinusIcon />
                                </div>
                                <span />
                                <div onClick={handlePlusClick(priceInputRef, PRICE_INPUT_ID)}>
                                    <PlusIcon />
                                </div>
                            </S.OrderBoxPriceCounter>
                        )}
                        onChange={onInputChange(PRICE_INPUT_ID)}
                        onClick={onInputClick(priceInputRef)}
                        onBlur={onInputClickOut(priceInputRef, PRICE_INPUT_ID)}
                    />
                </S.OrderBoxInputWrapper>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInput
                        ref={amountInputRef}
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <div onClick={handleMinusClick(amountInputRef, AMOUNT_INPUT_ID)}>
                                    <MinusIcon />
                                </div>
                                <span />
                                <div onClick={handlePlusClick(amountInputRef, AMOUNT_INPUT_ID)}>
                                    <PlusIcon />
                                </div>
                            </S.OrderBoxPriceCounter>
                        )}
                        onChange={onInputChange(AMOUNT_INPUT_ID)}
                        onClick={onInputClick(amountInputRef)}
                        onBlur={onInputClickOut(amountInputRef, AMOUNT_INPUT_ID)}
                    />
                    <S.OrderBoxInputLabel className="pay-token" onClick={() => isBuyType && setTokenListModalVisible(true)}>
                        {payToken?.symbol}
                        {isBuyType && <Chevron size='s1' />}
                    </S.OrderBoxInputLabel>
                </S.OrderBoxInputWrapper>
                <S.OrderBoxDetail>
                    <S.Balance>
                        <span>My balance  </span>
                        <span>{myBalance.toFixed(getFractionDigits(myBalance))} {payToken?.symbol?.toUpperCase()}</span>
                    </S.Balance>
                </S.OrderBoxDetail>
                <S.OrderBoxRangeWrapper>
                    <S.OrderBoxInputRange
                        ref={totalRangeRef}
                        labelRef={totalRangeLabelRef}
                        min={0}
                        max={100}
                        onChange={(e) => {
                            const percentage = e.target.value / 100;
                            const payAmount = myBalance * percentage;
                            amountInputRef.current.value = Math.round(payAmount);
                            totalInputRef.current.value = isBuyType ? payAmount / priceInputRef.current.value : payAmount * priceInputRef.current.value;
                            percentageInputRef.current.value = e.target.value;
                            setPercentageLabel(e.target.value);
                        }}
                    />
                    <S.OrderBoxInput
                        ref={percentageInputRef}
                        valueType='number'
                        postfix={<S.OrderBoxInputRangePercentage>%</S.OrderBoxInputRangePercentage>}
                        onChange={(e) => {
                            const percentage = e.target.value / 100;
                            const payAmount = myBalance * percentage;
                            amountInputRef.current.value = Math.round(payAmount);
                            totalRangeRef.current.value = percentage;
                            totalInputRef.current.value = isBuyType ? payAmount / priceInputRef.current.value : payAmount * priceInputRef.current.value;
                            totalRangeRef.current.value = e.target.value;
                            setPercentageLabel(e.target.value);
                        }}
                    />
                </S.OrderBoxRangeWrapper>
                <S.OrderBoxInputWrapper
                    style={{
                        backgroundColor: '#0D172D',
                        borderRadius: 'var(--border-radius)'
                    }}
                >
                    <S.OrderBoxInput
                        isReadOnly={true}
                        ref={totalInputRef}
                        valueType='number'
                        size='l'
                        onChange={e => {
                            console.log(e);
                            // labelRef.current.textContent = '100px';
                            // labelRef.current.style.left = '100px';
                        }}
                    />
                    <S.OrderBoxInputLabel className="buy-token" onClick={() => !isBuyType && setTokenListModalVisible(true)}>
                        {buyToken?.symbol}
                        {!isBuyType && <Chevron size='s1' />}
                    </S.OrderBoxInputLabel>
                </S.OrderBoxInputWrapper>
                {
                    isApproved
                        ? (
                            <S.SubmitOrder
                                className={`button is-info is-fullwidth ${pendingTx ? "is-loading" : ""}`}
                                isLoading={pendingTx}
                                isDisabled={isDisabledApproveButton}
                                {...{ active: isBuyType }}
                                onClick={async () => {
                                    setPendingTx(true)
                                    const deadline = Math.round(Date.now() / 1000) + 7 * 24 * 60 * 60;
                                    const salt = Web3.utils.randomHex(32);
                                    const pay = amountInputRef.current.value;
                                    const buy = isBuyType ?  totalInputRef.current.value : 1/totalInputRef.current.value;
                                    // const payAmount = amountToBN(pay, payToken?.address, payToken?.decimals).toString();
                                    // const buyAmount = amountToBN(buy, buyToken?.address, buyToken?.decimals).toString();

                                    const payAmount = exponentialToDecimal(pay*1e18);
                                    const buyAmount = exponentialToDecimal(buy*1e18);
                                    console.log('=============');
                                    console.log(1/buy);
                                    console.log(buy);
                                    console.log(buy*1e18);
                                    console.log(buyAmount);
                                    // const sig = await library.provider.request(signData(account, payToken?.address, buyToken?.address, payAmount, buyAmount, deadline, salt))
                                    // await axios.post('https://api.dextrading.io/api/v1/limitorder/create', { maker: account, payToken: payToken?.address, buyToken: buyToken?.address, payAmount, buyAmount, deadline, salt, sig });
                                    setPendingTx(false)
                                }}>
                                {`${payToken?.symbol} -> ${buyToken?.symbol}`}
                            </S.SubmitOrder>
                        )
                        : (
                            <S.SubmitOrder
                                isDisabled={payToken?.symbol?.toLowerCase() === buyToken?.symbol?.toLowerCase()}
                                isLoading={pendingTx}
                                onClick={handleSubmit(handleApproveClick)}
                                {...{ active: isBuyType }}
                            >
                                {/* {['Sell', 'Buy'][+isBuyType]}  */}
                                {`${payToken?.symbol} -> ${buyToken?.symbol}`}
                                {/* {isBuyType ? `${payToken?.symbol} -> ${buyToken?.symbol}` : `${buyToken?.symbol} -> ${payToken?.symbol}`} */}
                            </S.SubmitOrder>
                        )
                }
            </S.OrderBox>
            {isOrderModalVisible && <OrderModal isVisible={isOrderModalVisible} setVisible={setOrderModalVisible} />}
            <TokenListModal
                accountBalances={accountBalances}
                isVisible={isTokenListModalVisible}
                setVisible={setTokenListModalVisible}
                setImportTokenModalVisible={setImportTokenModalVisible}
                setImportedToken={setImportedToken}
                isBuyType={isBuyType}
                setBuyToken={setBuyToken}
                setPayToken={setPayToken}
                searchKeyword={importTokenSearchKeyword}
                setSearchKeyword={setImportTokenSearchKeyword}
            />
            <ImportTokenModal
                isVisible={isImportTokenModalVisible}
                setVisible={setImportTokenModalVisible}
                importedToken={importedToken}
                setSearchKeyword={setImportTokenSearchKeyword} />
        </>
    );
}

const signData = (maker, payToken, buyToken, payAmount, buyAmount, deadline, salt) => ({
    method: 'eth_signTypedData_v4',
    params: [maker, JSON.stringify({
        domain: {
            name: "CoinmapDex",
            version: "1",
            chainId: 56,
            verifyingContract: core.contracts.CoinmapDex.address
        },
        primaryType: 'Order',
        message: {
            maker, payToken, buyToken, payAmount, buyAmount, deadline, salt
        },
        types: {
            EIP712Domain: [
                { name: "name", type: "string" },
                { name: "version", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "verifyingContract", type: "address" }
            ],
            Order: [
                { name: "maker", type: "address" },
                { name: "payToken", type: "address" },
                { name: "buyToken", type: "address" },
                { name: "payAmount", type: "uint256" },
                { name: "buyAmount", type: "uint256" },
                { name: "deadline", type: "uint256" },
                { name: "salt", type: "bytes32" },
            ]
        }
    })]
});

export default Order