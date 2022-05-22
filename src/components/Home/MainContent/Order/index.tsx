import React, { useEffect } from 'react'

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

const getTokenFromList = (symbol)=>{
    if(!symbol)
        return {}
    const upperCaseSymbol = symbol.toUpperCase();
    return tokenList.tokens.find(v => v.symbol === upperCaseSymbol);
}

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const tokenSymbol = useAppSelector(state => state.home.tokenSymbol);
    const orderToken = useAppSelector(state => state.home.orderToken);
    // const [buyTokenName, setBuyTokenName] = useState(orderToken);
    // const [payTokenName, setPayTokenName] = useState(orderToken);
    useEffect(()=>{
        setPayToken(getTokenFromList(orderToken));
    },[orderToken]);
    useEffect(()=>{
        setBuyToken(getTokenFromList(tokenSymbol));
    },[tokenSymbol]);

    // const { data, isLoading, error } = useGetVolumeQuery(contract);
    const totalRangeRef = React.useRef<HTMLInputElement>(null);
    const totalRangeLabelRef = React.useRef<HTMLInputElement>(null);
    const totalInputRef = React.useRef<HTMLInputElement>(null);
    
    React.useEffect(() => {
        const percentage = '100';
        totalRangeRef.current && (totalRangeRef.current.value = percentage);
        if (totalRangeLabelRef.current) {
            totalRangeLabelRef.current.textContent = `${percentage}%`;
            totalRangeLabelRef.current.style.left = `${percentage}%`;
        }
        totalInputRef.current && (totalInputRef.current.value = percentage);
    }, []);

    const [isBuyType, setBuyType] = useState(true);

    const context = useWeb3React();
    const { account, library } = context;

    const [pay, setPayAmount] = useState(0);
    const [buy, setBuyAmount] = useState(0);
    const [payToken, setPayToken] = useState<any>({});
    const [buyToken, setBuyToken] = useState<any>({});
    
    const { approve, isApproved } = useToken(payToken);

    const [pendingTx, setPendingTx] = useState(false);
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        library?.getBalance(account).then((result) => {
            setBalance(result / 1e18)
        })
    });

    const handleApproveClick = async formData => {
        setPendingTx(true)
        await approve()
        setPendingTx(false)
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
                <S.OrderBoxDetail>
                    <div>
                        <span>Avbl - </span>
                        <S.TokenSelect
                            placeholder='Select'
                            type='nude'
                            onChange={v => {
                                // console.log(v);
                                // setPayTokenName(v);
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
                        <span>{balance} BNB</span>
                    </S.Balance>
                </S.OrderBoxDetail>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Price {buyToken?.symbol}/COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <MinusIcon />
                                <span />
                                <PlusIcon />
                            </S.OrderBoxPriceCounter>
                        )}
                    />
                </S.OrderBoxInputWrapper>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Amount COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        valueType='number'
                        size='l'
                        postfix={(
                            <S.OrderBoxPriceCounter>
                                <MinusIcon />
                                <span />
                                <PlusIcon />
                            </S.OrderBoxPriceCounter>
                        )}
                    />
                </S.OrderBoxInputWrapper>
                <S.OrderBoxRangeWrapper>
                    <S.OrderBoxInputRange
                        ref={totalRangeRef}
                        labelRef={totalRangeLabelRef}
                        min={0}
                        max={100}
                        onChange={(e) => {
                            if (totalRangeLabelRef.current) {
                                totalRangeLabelRef.current.textContent = `${e.target.value}%`;
                                totalRangeLabelRef.current.style.left = `${e.target.value}%`;
                            }
                            totalInputRef.current && (totalInputRef.current.value = e.target.value);
                        }}
                    />
                    <S.OrderBoxInput
                        ref={totalInputRef}
                        valueType='number'
                        postfix={<S.OrderBoxInputRangePercentage>%</S.OrderBoxInputRangePercentage>}

                        onChange={(e) => {
                            totalRangeRef.current && (totalRangeRef.current.value = e.value);
                        }}
                    />
                </S.OrderBoxRangeWrapper>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Total {buyToken?.symbol}</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
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
                                isDisabled={pay <= 0 || buy <= 0 || payToken?.address == buyToken?.address}
                                onClick={async () => {
                                    setPendingTx(true)
                                    const deadline = Math.round(Date.now() / 1000) + 7 * 24 * 60 * 60;
                                    const salt = Web3.utils.randomHex(32);
                                    const payAmount = amountToBN(pay, payToken?.address).toString();
                                    const buyAmount = amountToBN(buy, buyToken?.address).toString();
                                    const sig = await library.provider.request(signData(account, payToken?.address, buyToken?.address, payAmount, buyAmount, deadline, salt))
                                    await axios.post('https://api.dextrading.io/api/v1/limitorder/create', { maker: account, payToken:payToken?.address, buyToken:buyToken?.address, payAmount, buyAmount, deadline, salt, sig })
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