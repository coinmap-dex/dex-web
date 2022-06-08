import React from "react";
import * as S from "./styled";
import * as MS from '../styled';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ComposedChart,
    Area,
    Label as ChartLabel
} from "recharts";
import {Label, Tooltip as SezyTooltip} from 'sezy-design';
import { t } from "i18next";
import { formatDateXAxis, formatYAxisNumber, thousandSeparator } from "~utils";
import { useGetSocialNetworkQuery } from "~store/modules/home/api";
import {useAppSelector, useBreakpoint} from '~hooks';
import ChartInfoIcon from '~svg/ChartInfoIcon';

const chartLegend = t => {
    return (
        <MS.TitleLengend>
            <MS.TitleLengendItem>
                <svg height="15" width="33">
                    <line x1="0" y1="7.5" x2="33" y2="7.5" stroke="#E935ED" strokeWidth="1" />
                </svg>
                <span>{t('social.twitter')}</span>
            </MS.TitleLengendItem>
            <MS.TitleLengendItem>
                <svg height="15" width="33">
                    <line x1="0" y1="7.5" x2="33" y2="7.5" stroke="#3751FF" strokeWidth="1" />
                </svg>
                <span>{t('social.telegram')}</span>
            </MS.TitleLengendItem>
        </MS.TitleLengend>
    )
}

const chartHeader = (t, breakpoint) => {
    const isDisplayLegendItemInInfoIcon = (breakpoint('xs') && !breakpoint('sm')) || (breakpoint('lg') && !breakpoint('xl'));
    return (
        <>
            {!isDisplayLegendItemInInfoIcon && chartLegend(t)}
            {/*{!isDisplayLegendItemInInfoIcon && (*/}
            {/*    <ChartInfoIcon/>*/}
            {/*)}*/}
            {isDisplayLegendItemInInfoIcon && (
                <S.TooltipWrapper>
                    <SezyTooltip content={chartLegend(t)}>
                        <ChartInfoIcon/>
                    </SezyTooltip>
                </S.TooltipWrapper>
            )}
        </>
    );
}

const Shark = () => {
    const breakpoint = useBreakpoint();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetSocialNetworkQuery(contract);

    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('social.title')}
                </Label>
                {chartHeader(t, breakpoint)}
            </MS.MainContentTitleBox>
            {
                data &&
                <S.SocialChartWrapper>
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <defs>
                            <linearGradient id="colorSocialNetworkArea1" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#3751FF" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#3751FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="colorSocialNetworkArea2" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#E935ED" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#E935ED" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeWidth={1} strokeOpacity={0.18} />
                        <XAxis
                            dataKey="date"
                            dy={10}
                            color="red"
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatDateXAxis}
                        />
                        <YAxis
                            yAxisId="pool-y-left"
                            orientation="left"
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        >
                            <ChartLabel
                                offset={-2}
                                angle={270}
                                position='insideLeft'
                                style={{
                                    fill: '#F4F7FC',
                                    fontSize: '1.15rem'
                                }}
                                value="Telegram" />
                        </YAxis>
                        <YAxis
                            yAxisId="pool-y-right"
                            orientation="right"
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        >
                            <ChartLabel
                                offset={-8}
                                angle={90}
                                position='insideRight'
                                style={{
                                    fill: '#F4F7FC',
                                    fontSize: '1.15rem'
                                }}
                                value="Twitter" />
                        </YAxis>
                        <Tooltip
                            contentStyle={{ backgroundColor: "#1C2740", border: '0' }}
                            labelStyle={{ display: 'none' }}
                            itemStyle={{ color: "#7C8491" }}
                            formatter={function (value, name) {
                                return thousandSeparator(value);
                            }}
                        />
                        <Area
                            yAxisId="pool-y-left"
                            type="monotone"
                            dataKey="telegram"
                            stroke="#3751FF"
                            fill="url(#colorSocialNetworkArea1)"
                            dot={false}
                        />
                        <Area
                            yAxisId="pool-y-right"
                            type="monotone"
                            dataKey="twitter"
                            stroke="#E935ED"
                            fill="url(#colorSocialNetworkArea2)"
                            dot={false}
                        />
                    </ComposedChart>
                </S.SocialChartWrapper>
            }
        </>
    );
}

export default Shark