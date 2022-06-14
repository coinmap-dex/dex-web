import React, { useEffect, useRef } from 'react'

import S from './styled';
import { useAppSelector, useToken } from '~hooks';
import PlusIcon from '~svg/Plus';
import MinusIcon from '~svg/Minus';
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import tokenList from "~configs/list";
import core from "~configs/core";
import { useForm } from 'react-hook-form';
import OrderModal from './OrderModal';
import { amountToBN, increaseDecimalNumber } from '~utils';
import Web3 from 'web3';
import axios from 'axios';
import TokenListModal from './TokenListModal';
import ImportTokenModal from './ImportTokenModal';
import {useGetPoolQuery} from '~store/modules/home/api';
import {Balance} from '../../../../models/balance.model';

const getTokenFromList = (symbol) => {
    if (!symbol)
        return {}
    const upperCaseSymbol = symbol.toUpperCase();
    return tokenList.tokens.find(v => v.symbol === upperCaseSymbol);
}

const PRICE_INPUT_ID = 1;
const AMOUNT_INPUT_ID = 2;

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const contract = useAppSelector(state => state.home.contract);
    const tokenSymbol = useAppSelector(state => state.home.tokenSymbol);
    const orderToken = useAppSelector(state => state.home.orderToken);
    // const [buyTokenName, setBuyTokenName] = useState(orderToken);
    // const [payTokenName, setPayTokenName] = useState(orderToken);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentAmount, setCurrentAmount] = useState(0);

    const [payToken, setPayToken] = useState<any>({});
    const [buyToken, setBuyToken] = useState<any>({});

    const { data: poolData } = useGetPoolQuery(contract);
    const firstPoolPriceUnit = poolData?.pools?.[0]?.name?.split('/')?.[1] ?? '';

    useEffect(() => {
        setPayToken(getTokenFromList(orderToken));
    }, [orderToken]);
    useEffect(() => {
        setBuyToken(getTokenFromList(tokenSymbol));
    }, [tokenSymbol]);

    const [isDisabledApproveButton, setDisabledApproveButton] = useState(true);

    // const { data, isLoading, error } = useGetVolumeQuery(contract);
    const totalRangeRef: any = React.useRef(null);
    const totalRangeLabelRef: any = React.useRef(null);
    const percentageInputRef: any = React.useRef(null);
    const totalInputRef: any = React.useRef(null);
    const priceInputRef: any = useRef(null);
    const amountInputRef: any = useRef(null);

    React.useEffect(() => {
        const percentage = '0';
        totalRangeRef.current && (totalRangeRef.current.value = percentage);
        totalInputRef.current && (totalInputRef.current.value = 0);
        // priceInputRef.current && (priceInputRef.current.value = 0);
        // amountInputRef.current && (amountInputRef.current.value = 0);
        percentageInputRef.current && (percentageInputRef.current.value = percentage);
    }, []);

    const [isBuyType, setBuyType] = useState(true);
    const [isOrderModalVisible, setOrderModalVisible] = useState(false);
    const [isTokenListModalVisible, setTokenListModalVisible] = useState(false);
    const [isImportTokenModalVisible, setImportTokenModalVisible] = useState(false);
    const [selectedImportToken, setSelectedImportToken] = useState<Balance>({});

    const context = useWeb3React();
    const { account, library } = context;

    // const [pay, setPayAmount] = useState(0);
    // const [buy, setBuyAmount] = useState(0);

    const { approve, isApproved, balance: walletBalance } = useToken(payToken.address);
    const balance = walletBalance ? walletBalance / 1e18 : 0;
    // const balance = 1.1232123123;
    // const balance = 100;
    const [pendingTx, setPendingTx] = useState(false);

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
        if (!Number(inputRef.current.value)) {
            inputRef.current.value = '';
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
        if (!inputRef.current.value) {
            inputRef.current.value = 0;
        }
        const newValue = increaseDecimalNumber(+inputRef.current.value, -1);
        inputRef.current.value = newValue > 0 ? newValue : 0;
        updateCurrentInputStateById(inputTypeId, inputRef.current.value);
        validateApproveButton(inputTypeId);
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
        const buy = amountInputRef.current.value / priceInputRef.current.value;
        totalInputRef.current.value = buy;

        if (balance) {
            const rate = pay / balance;
            const percentage = rate > 1 ? 100 : rate * 100;
            console.log(rate);
            if (percentage === 100) {
                amountInputRef.current.value = percentage * balance / 100
            }

            percentageInputRef.current.value = percentage.toFixed(2);
            totalRangeRef.current.value = percentage;
            setPercentageLabel(percentage.toFixed(2));
        }
        setDisabledApproveButton(pay <= 0 || buy <= 0 || payToken?.address == buyToken?.address);
        setCurrentAmount(Number(amountInputRef.current.value));
        setCurrentPrice(Number(priceInputRef.current.value));
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
                    <S.OrderBoxBuyButton {...{ active: isBuyType }} onClick={() => setBuyType(true)}>Buy</S.OrderBoxBuyButton>
                    <S.OrderBoxSellButton {...{ active: !isBuyType }} onClick={() => setBuyType(false)}>Sell</S.OrderBoxSellButton>
                </S.OrderBoxBuySell>
                <S.OrderBoxDetail>
                    <div>
                        <span>Avbl</span>
                        <S.TokenButton onClick={() => setTokenListModalVisible(true)}>{firstPoolPriceUnit}</S.TokenButton>
                    </div>
                    <S.Balance>
                        <span>My balance  </span>
                        <span>{balance.toFixed(3)} {payToken?.symbol}</span>
                    </S.Balance>
                </S.OrderBoxDetail>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>
                        Price {isBuyType ? payToken?.symbol : buyToken?.symbol}/{isBuyType ? buyToken?.symbol : payToken?.symbol}
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
                    <S.OrderBoxInputLabel>{isBuyType ? payToken?.symbol : buyToken?.symbol}</S.OrderBoxInputLabel>
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
                </S.OrderBoxInputWrapper>
                <S.OrderBoxRangeWrapper>
                    <S.OrderBoxInputRange
                        ref={totalRangeRef}
                        labelRef={totalRangeLabelRef}
                        min={0}
                        max={100}
                        onChange={(e) => {
                            const percentage = e.target.value / 100;
                            const payAmount = balance * percentage;
                            amountInputRef.current.value = Math.round(payAmount);
                            totalInputRef.current.value = payAmount / priceInputRef.current.value;
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
                            const payAmount = balance * percentage;
                            amountInputRef.current.value = Math.round(payAmount);
                            totalRangeRef.current.value = percentage;
                            totalInputRef.current.value = payAmount / priceInputRef.current.value;
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
                    <S.OrderBoxInputLabel>{isBuyType ? buyToken?.symbol : payToken?.symbol}</S.OrderBoxInputLabel>
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
                                    const buy = totalInputRef.current.value;
                                    const payAmount = amountToBN(isBuyType ? pay : buy, payToken?.address).toString();
                                    const buyAmount = amountToBN(isBuyType ? buy : pay, buyToken?.address).toString();
                                    const sig = await library.provider.request(signData(account, payToken?.address, buyToken?.address, payAmount, buyAmount, deadline, salt))
                                    await axios.post('https://api.dextrading.io/api/v1/limitorder/create', { maker: account, payToken: payToken?.address, buyToken: buyToken?.address, payAmount, buyAmount, deadline, salt, sig })
                                    setPendingTx(false)
                                }}>
                                Submit order
                            </S.SubmitOrder>
                        )
                        : (
                            <S.SubmitOrder
                                isDisabled={payToken?.symbol === buyToken?.symbol}
                                isLoading={pendingTx}
                                onClick={handleSubmit(handleApproveClick)}
                                {...{ active: isBuyType }}
                            >
                                {['Sell', 'Buy'][+isBuyType]} {isBuyType ? `${payToken?.symbol} -> ${buyToken?.symbol}` : `${buyToken?.symbol} -> ${payToken?.symbol}`}
                            </S.SubmitOrder>
                        )
                }
            </S.OrderBox>
            <OrderModal isVisible={isOrderModalVisible} setVisible={setOrderModalVisible} />
            <TokenListModal
                isVisible={isTokenListModalVisible}
                setVisible={setTokenListModalVisible}
                setImportTokenModalVisible={setImportTokenModalVisible}
                setSelectedImportToken={setSelectedImportToken}
            />
            <ImportTokenModal
                isVisible={isImportTokenModalVisible}
                setVisible={setImportTokenModalVisible}
                selectedImportToken={selectedImportToken} />
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