import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { Label } from 'sezy-design';
import GasChartCirle from '~svg/gasChartCircle';
import GasChartNumber from '~svg/gasChartNumber';
import { useAppSelector } from 'src/hooks';
import { useGetGasFeeQuery } from '~store/modules/home/api';
import { t } from 'i18next';
import InfoIcon from '~svg/Info';


const chartLegend = t => {
    return (
        <MS.TitleLengend>
            <MS.TitleLengendItem>
                <svg height="15" width="20">
                    <rect width="20" height="15" stroke="#D22082" fill="#D22082" />
                </svg>
                <span>USDT</span>
            </MS.TitleLengendItem>
            <MS.TitleLengendItem>
                <svg height="15" width="20">
                    <rect width="20" height="15" stroke="#6E14D7" fill="#6E14D7" />
                </svg>
                <span>GWEI</span>
            </MS.TitleLengendItem>
            {/* <InfoIcon/> */}
        </MS.TitleLengend>
    )
}

const Gas = () => {
    const { data, isLoading, error } = useGetGasFeeQuery(null);

    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    Gas
                </Label>
                {chartLegend(t)}
            </MS.MainContentTitleBox>
            <S.GasChartWrapper>
                <GasChartNumber d={data} />
                <GasChartCirle d={data?.proposeGasPrice} />
            </S.GasChartWrapper>
        </>
    )
}

export default Gas