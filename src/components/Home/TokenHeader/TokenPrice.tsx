import React from 'react'
import _ from 'lodash';
import * as  S from './styled';
import { useGetPriceQuery, useGetTransactionQuery } from '~store/modules/home/api';
import { useAppSelector } from '~hooks';
import { Shimmer } from 'sezy-design';
import { thousandSeparator } from '~utils';

const TokenPrice = () => {
    const contract = useAppSelector(state => state.home.contract)
    // const { data, isLoading, error } = useGetPriceQuery(contract, {
    //     pollingInterval: +(process.env.POLLING_INTERVAL || 0),
    // });

    const { data, isLoading } = useGetTransactionQuery(contract, {
        pollingInterval: +(process.env.POLLING_INTERVAL || 0),
    });

    const transactionData = [...(data?.transaction || [])]?.reverse() as any;
    const lastPrice = transactionData?.[0];
    const secondPrice = transactionData?.[1];
    const changeRate = transactionData ? (((transactionData[0]?.price - transactionData[transactionData.length - 1]?.price) / transactionData[transactionData.length - 1]?.price) * 100) : '';
    return (
        <S.TokenInfoPriceCol grid={6} gutter={{ sm: 12, lg: 8, xl: 9 }}>
            <div>
                <S.TokenInfoPriceData>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoPriceData1>{lastPrice?.price}</S.TokenInfoPriceData1>
                    </Shimmer>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoPriceData2>{secondPrice?.price}</S.TokenInfoPriceData2>
                    </Shimmer>
                </S.TokenInfoPriceData>

                <div>
                    <S.TokenInfoPrice24label>24h Change</S.TokenInfoPrice24label>
                    <Shimmer isLoading={isLoading}> 
                        <S.TokenInfoPrice24Data {...{ changeRate }}>{(changeRate ? (changeRate > 0 ? `+${changeRate.toFixed(2)}%` : `${(+changeRate)?.toFixed(2)}%`) : '')}</S.TokenInfoPrice24Data>
                    </Shimmer>
                </div>
            </div>
        </S.TokenInfoPriceCol>
    )
}

export default TokenPrice