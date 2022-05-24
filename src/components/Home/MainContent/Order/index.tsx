import React, { useEffect, useRef } from 'react'

import _ from 'lodash';
import S from './styled';
import { t } from 'i18next';
import { useAppSelector, useToken } from '~hooks';
import { Input, Option, Select } from 'sezy-design';
import PlusIcon from '~svg/Plus';
import MinusIcon from '~svg/Minus';
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import tokenList from "~configs/list";
import core from "~configs/core";
import Web3 from 'web3';
import { amountToBN } from '~utils';
import axios from "axios";
import { useForm } from 'react-hook-form';
import OrderModal from './OrderModal';

const getTokenFromList = (symbol) => {
    if (!symbol)
        return {}
    const upperCaseSymbol = symbol.toUpperCase();
    return tokenList.tokens.find(v => v.symbol === upperCaseSymbol);
}

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const contract = useAppSelector(state => state.home.contract);
    const tokenSymbol = useAppSelector(state => state.home.tokenSymbol);
    const orderToken = useAppSelector(state => state.home.orderToken);
    // const [buyTokenName, setBuyTokenName] = useState(orderToken);
    // const [payTokenName, setPayTokenName] = useState(orderToken);
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
        totalInputRef.current && (amountInputRef.current.value = 0);
        priceInputRef.current && (priceInputRef.current.value = 0);
        amountInputRef.current && (amountInputRef.current.value = 0);
        percentageInputRef.current && (percentageInputRef.current.value = percentage);
    }, []);

    const [isBuyType, setBuyType] = useState(true);
    const [isOrderModalVisible, setOrderModalVisible] = useState(false);

    const context = useWeb3React();
    const { account, library } = context;

    // const [pay, setPayAmount] = useState(0);
    // const [buy, setBuyAmount] = useState(0);
    const [payToken, setPayToken] = useState<any>({});
    const [buyToken, setBuyToken] = useState<any>({});

    const { approve, isApproved, balance: walletBalance } = useToken(payToken.address);
    const balance = walletBalance ?? 0;
    const [pendingTx, setPendingTx] = useState(false);
    // const [balance, setBalance] = useState(0)

    // useEffect(() => {
    //     library?.getBalance(account).then((result) => {
    //         setBalance(result / 1e18)
    //     })
    // });
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

    const handleMinusClick = (inputRef) => () => {
        const newValue = +inputRef.current.value - 1;
        inputRef.current.value = newValue > 0 ? newValue : 0;
        validateApproveButton();
    }

    const handlePlusClick = (inputRef) => () => {
        inputRef.current.value = +inputRef.current.value + 1;
        validateApproveButton();
    }

    const validateApproveButton = () => {
        const pay = amountInputRef.current.value;
        const buy = amountInputRef.current.value / priceInputRef.current.value;
        totalInputRef.current.value = buy;

        const percentage = buy / balance * 100;
        percentageInputRef.current.value = percentage.toFixed(2);
        totalRangeRef.current.value = percentage;
        setPercentageLabel(percentage.toFixed(2));
        setDisabledApproveButton(pay <= 0 || buy <= 0 || payToken?.address == buyToken?.address);
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
                <S.OrderPlaceType {...{ active: true }}>market</S.OrderPlaceType>
                <S.OrderPlaceType>limit</S.OrderPlaceType>
                <S.OrderPlaceType>stop-limit</S.OrderPlaceType>
            </S.OrderPlaceTypes>
            <S.OrderBox>
                <S.OrderBoxBuySell>
                    <S.OrderBoxBuyButton {...{ active: isBuyType }} onClick={() => setBuyType(true)}>Buy</S.OrderBoxBuyButton>
                    <S.OrderBoxSellButton {...{ active: !isBuyType }} onClick={() => setBuyType(false)}>Sell</S.OrderBoxSellButton>
                </S.OrderBoxBuySell>
                <div
                    onClick={() => setOrderModalVisible(true)}
                >
                    YOUR ORDERS
                </div>
                <S.OrderBoxDetail>
                    <div>
                        <span>Avbl - </span>
                        <S.TokenSelect
                            placeholder='Select'
                            type='nude'
                            onChange={v => {
                                // console.log(v);
                                setPayToken(getTokenFromList(v));
                            }}
                        >
                            {
                                tokenList?.tokens?.map((v, k) => (
                                    <Option value={v.symbol} active={v.symbol === orderToken}>{v.symbol}</Option>
                                ))
                            }
                        </S.TokenSelect>
                    </div>
                    <S.Balance>
                        <span>My balance  </span>
                        <span>{balance} {payToken?.symbol}</span>
                    </S.Balance>
                </S.OrderBoxDetail>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Price {buyToken?.symbol}/COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        ref={priceInputRef}
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <div onClick={handleMinusClick(priceInputRef)}>
                                    <MinusIcon />
                                </div>
                                <span />
                                <div onClick={handlePlusClick(priceInputRef)}>
                                    <PlusIcon />
                                </div>
                            </S.OrderBoxPriceCounter>
                        )}
                        onChange={() => validateApproveButton()}
                    />
                </S.OrderBoxInputWrapper>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Amount COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        ref={amountInputRef}
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <div onClick={handleMinusClick(amountInputRef)}>
                                    <MinusIcon />
                                </div>
                                <span />
                                <div onClick={handlePlusClick(amountInputRef)}>
                                    <PlusIcon />
                                </div>
                            </S.OrderBoxPriceCounter>
                        )}
                        onChange={() => validateApproveButton()}
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
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Total {buyToken?.symbol}</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
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
                                isLoading={pendingTx}
                                onClick={handleSubmit(handleApproveClick)}
                            >
                                {['Sell', 'Buy'][+isBuyType]} {payToken?.symbol} -&gt; {buyToken?.symbol}
                            </S.SubmitOrder>
                        )
                }
            </S.OrderBox>
            <OrderModal isVisible={isOrderModalVisible} setVisible={setOrderModalVisible} />
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