// import "./styles.css";
import React, { FunctionComponent } from "react";
import * as S from "./styled";
import * as MS from '../styled';
import {
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Surface,
    Symbols,
    ComposedChart,
    Bar,
    ResponsiveContainer,
    Area
} from "recharts";
import { Label } from "sezy-design";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { formatDateXAxis, formatYAxisNumber } from "~utils";
import { useGetSocialNetworkQuery } from "~store/modules/home/api";
import { useAppSelector } from "~hooks";

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

const Shark = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetSocialNetworkQuery(contract);

    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('social.title')}
                </Label>
                {chartLegend(t)}
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
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#1C2740", border: '0' }}
                            labelStyle={{ display: 'none' }}
                            itemStyle={{ color: "#7C8491" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="telegram"
                            stroke="#3751FF"
                            fill="url(#colorSocialNetworkArea1)"
                            dot={false}
                        />
                        <Area
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