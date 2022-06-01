import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { Label, Tooltip } from 'sezy-design';
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
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="chart-info-icon">
                <path d="M10.8748 17.2963C11.8986 17.1158 12.8769 16.7354 13.7537 16.1768C14.6305 15.6182 15.3887 14.8923 15.985 14.0407C16.5813 13.1891 17.0041 12.2284 17.2291 11.2134C17.4541 10.1984 17.477 9.14904 17.2965 8.1252C17.1159 7.10137 16.7355 6.12311 16.1769 5.2463C15.6183 4.36948 14.8925 3.61127 14.0409 3.01496C13.1893 2.41866 12.2285 1.99593 11.2136 1.77091C10.1986 1.54589 9.1492 1.52299 8.12536 1.70352C7.10152 1.88405 6.12327 2.26448 5.24645 2.82307C4.36964 3.38166 3.61143 4.10749 3.01512 4.95911C2.41881 5.81072 1.99608 6.77145 1.77107 7.78644C1.54605 8.80143 1.52315 9.8508 1.70368 10.8746C1.88421 11.8985 2.26463 12.8767 2.82323 13.7535C3.38182 14.6304 4.10765 15.3886 4.95927 15.9849C5.81088 16.5812 6.77161 17.0039 7.7866 17.2289C8.80159 17.4539 9.85096 17.4768 10.8748 17.2963L10.8748 17.2963Z" stroke="#576B79" stroke-opacity="0.4" stroke-width="1.5"/>
                <path d="M9.5 8.63647L9.5 13.8183" stroke="#576B79" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M9.5 5.54175L9.5 4.75008" stroke="#576B79" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
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