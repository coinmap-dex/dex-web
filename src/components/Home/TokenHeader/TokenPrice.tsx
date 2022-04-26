import React from 'react'
import _ from 'lodash';
import * as  S from './styled';
import { useGetPriceQuery } from '~store/modules/home/api';
import { useAppSelector } from '~hooks';
import { Shimmer } from 'sezy-design';
import { thousandSeparator } from '~utils';

const TokenPrice = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetPriceQuery(contract, {
        pollingInterval: +(process.env.POLLING_INTERVAL || 0),
    });
    const changeRate = data && data.prices?.length ? ((data?.prices[0][1] - data?.prices[47][1]) / data?.prices[47][1] * 100) : '';
    return (
        <S.TokenInfoPriceCol  grid={6} gutter={{ sm: 12, lg: 8, xl: 9 }}>
            <div>
                <S.TokenInfoPriceData>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoPriceData1>{data && data.prices?.length && thousandSeparator(data?.prices[0][1]?.toFixed(2))}</S.TokenInfoPriceData1>
                    </Shimmer>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoPriceData2>{data && data.prices?.length && `$${thousandSeparator(data?.prices[0][1]?.toFixed(2))}`}</S.TokenInfoPriceData2>
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