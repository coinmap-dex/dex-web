import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { Col, Label, Row } from 'sezy-design';
import { t } from 'i18next';
import { useGetRatingQuery } from '~store/modules/home/api';
import { useAppSelector } from '~hooks';
import Donut from './Donut';

const Rating = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetRatingQuery(contract);

    return (
        <S.RatingWrapper>
            <MS.MainContentTitleBox>
                <Label>
                    {t('rating.title')}
                </Label>
                <div>
                </div>
            </MS.MainContentTitleBox>
            {
                data && <S.RatingCharts >
                    <Donut
                        id='rating1'
                        data={data.coingeckoScore}
                        color='#FB49C0'
                        text={t('rating.coingecko')}
                    />
                    <Donut
                        id='rating2'
                        data={data.coinmarketcapScore}
                        color='#31AFD6'
                        text={t('rating.coinmarketcap')}
                    />
                    <Donut
                        id='rating3'
                        data={data.poolScore}
                        color='#F5A623'
                        text={t('rating.pool')}
                    />
                </S.RatingCharts>
            }
        </S.RatingWrapper>
    )
}

export default Rating