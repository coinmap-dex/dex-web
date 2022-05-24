import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { Label } from 'sezy-design';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ComposedChart,
    Bar,
} from "recharts";
import { formatDateXAxis, formatYAxisNumber, thousandSeparator } from '~utils';
import { t } from 'i18next';
import { useGetVolumeQuery } from '~store/modules/home/api';
import { useAppSelector } from '~hooks';

const chartLegend = t => {
    return (
        <MS.TitleLengend>
            <MS.TitleLengendItem>
                <svg height="15" width="20">
                    <rect width="20" height="15" stroke="#FA3BFE" fill="url(#colorTotalTransaction)" />
                </svg>
                <span>{t('volume.totalTransaction')}</span>
            </MS.TitleLengendItem>
            <MS.TitleLengendItem>
                <svg height="15" width="20">
                    <rect width="20" height="15" stroke="#4BDDFD" fill="url(#colorTotalAmountBuyByNewWallet)" />
                </svg>
                <span>{t('volume.totalAmountBuyByNewWallet')}</span>
            </MS.TitleLengendItem>
            <MS.TitleLengendItem>
                <svg height="15" width="20">
                    <rect width="20" height="15" stroke="#fff" fill="url(#colorTotalAmountSell)" />
                </svg>
                <span>{t('volume.totalAmountSell')}</span>
            </MS.TitleLengendItem>
        </MS.TitleLengend>
    )
}

const Volume = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetVolumeQuery(contract);
    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('volume.title')}
                </Label>
                {chartLegend(t)}
            </MS.MainContentTitleBox>
            {
                data &&
                <S.VolumeChartWrapper>
                    <ComposedChart
                        barGap={-30}
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <defs>
                            <linearGradient id="colorTotalTransaction" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#6316C2" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#D22082" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="colorTotalAmountBuyByNewWallet" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#3A11DE" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#620BAC" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="colorTotalAmountSell" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#BCE7FF" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2461FF" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeWidth={1} strokeOpacity={0.18} />
                        {/* <XAxis dataKey="name" /> */}
                        <XAxis
                            dataKey="date"
                            dy={10}
                            color="red"
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatDateXAxis}
                        />
                        <XAxis dataKey="date" dy={10} xAxisId={1} hide />
                        <XAxis dataKey="date" dy={10} xAxisId={2} hide />
                        <YAxis
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#1C2740", border: '0' }}
                            labelStyle={{ display: 'none' }}
                            itemStyle={{ color: "#7C8491" }}
                            formatter={function (value, name) {
                                return thousandSeparator(value);
                            }}
                        />
                        {/* <Legend
                        align="center"
                        verticalAlign="bottom"
                        content={renderCusomizedLegend}
                    /> */}
                        <Bar
                            type="linear"
                            dataKey="totalTransaction"
                            fill="url(#colorTotalTransaction)"
                            stroke="#FA3BFE"
                            maxBarSize={45}
                            xAxisId={0}
                        />
                        <Bar
                            type="linear"
                            dataKey="totalAmountBuyByNewWallet"
                            fill="url(#colorTotalAmountBuyByNewWallet)"
                            stroke="#4BDDFD"
                            maxBarSize={35}
                            xAxisId={1}
                        />
                        <Bar
                            type="linear"
                            dataKey="totalAmountSell"
                            fill="url(#colorTotalAmountSell)"
                            stroke="#fff"
                            maxBarSize={20}
                            xAxisId={2}
                        >
                        </Bar>
                    </ComposedChart>
                </S.VolumeChartWrapper>
            }
        </>
    );
}

export default Volume