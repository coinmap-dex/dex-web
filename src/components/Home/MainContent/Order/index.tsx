import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import { t } from 'i18next';
import { useAppSelector } from '~hooks';
import { Input, Option, Select } from 'sezy-design';
import PlusIcon from '~svg/Plus';
import MinusIcon from '~svg/Minus';

const Order = () => {
    const contract = useAppSelector(state => state.home.contract)
    const orderToken = useAppSelector(state => state.home.orderToken)
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
                    <S.OrderBoxBuySellButton {...{ active: true }}>Buy</S.OrderBoxBuySellButton>
                    <S.OrderBoxBuySellButton>Sell</S.OrderBoxBuySellButton>
                </S.OrderBoxBuySell>
                <S.OrderBoxDetail>
                    <div>
                        <span>Avbl - </span>
                        <S.OrderBoxDetailCurrency>{orderToken}</S.OrderBoxDetailCurrency>

                        {/* <Select placeholder='Select' type='nude'>
                            
                            <Option value='111111' label='aaaaaaaaaaa'>{orderToken}</Option>
                            <Option value='111111' label='aaaaaaaaaaa1'>aaa</Option>
                        </Select> */}
                    </div>
                    <div>
                        <span>My balance  </span>
                        <span>1.3617{orderToken}</span>
                    </div>
                </S.OrderBoxDetail>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Price {orderToken}/COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        valueType='number'
                        size='l'
                        postfix={<S.OrderBoxPriceCounter>
                            <MinusIcon />
                            <span />
                            <PlusIcon />
                        </S.OrderBoxPriceCounter>}
                    />
                </S.OrderBoxInputWrapper>
                <S.OrderBoxInputWrapper>
                    <S.OrderBoxInputLabel>Amount COIN</S.OrderBoxInputLabel>
                    <S.OrderBoxInput
                        valueType='number'
                        size='l'
                        postfix={<S.OrderBoxPriceCounter>
                            <MinusIcon />
                            <span />
                            <PlusIcon />
                        </S.OrderBoxPriceCounter>}
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
                    <S.OrderBoxInputLabel>Total {orderToken}</S.OrderBoxInputLabel>
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
                <S.OrderBoxSubmitButton>Buy {orderToken} -&gt; BTC</S.OrderBoxSubmitButton>
            </S.OrderBox>
        </>
    );
}

export default Order