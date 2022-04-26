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
    ResponsiveContainer
} from "recharts";
import { Label } from "sezy-design";
import moment from "moment";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { formatDateXAxis } from "~utils";
import { useAppSelector } from "~hooks";
import { useGetSharkQuery } from "~store/modules/home/api";
import { formatYAxisNumber } from "~utils";

const data = [
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1643673600
    },
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1643760000
    },
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1643846400
    },
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1643932800
    },
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1644019200
    },
    {
        "totalBalance": 50213123.5,
        "totalTransaction": 324792364,
        "totalTransactionHighValue": 234234234,
        "date": 1644105600
    }
];

const CustomizedDot: FunctionComponent<any> = (props: any) => {
    const { cx, cy, value } = props;
    if (value > 2500) {
    }

    return (
        // <circle {...props} />
        <rect
            // {...props}
            width="10"
            height="10"
            x={cx - 5}
            y={cy - 5}
            fill='#6E14D7'
        />
    );
};

const renderCusomizedLegend = (props) => {
    const { payload } = props;
    return (
        <S.lengend gaps={[0.5, 1]}>
            {payload.map((entry, index) => {
                const { dataKey, color } = entry;
                return (
                    <S.lengendItem
                        key={`shark_legend_${index}`}
                    >
                        {
                            index === 0 && <Surface width={20} height={20} >
                                <Symbols cx={10} cy={10} type="square" size={500} fill={color} />
                            </Surface>
                        }
                        {
                            index === 1 && <svg height="20" width="30">
                                <line x1="0" y1="10" x2="30" y2="10" stroke={color} strokeWidth="1" />
                                <rect x="10" y="5" width="10" height="10" fill={color} />
                            </svg>
                        }
                        {
                            index === 2 && <svg height="20" width="30">
                                <line x1="0" y1="10" x2="30" y2="10" stroke={color} strokeWidth="1" />
                                <circle cx="15" cy="10" r="5" stroke={color} strokeWidth="1" fill='#fff' />
                            </svg>
                        }
                        <span>{t(`shark.${dataKey}`)}</span>
                    </S.lengendItem>
                );
            })}
        </S.lengend>
    );
};

const Shark = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetSharkQuery(contract);
    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('shark.title')}
                </Label>
            </MS.MainContentTitleBox>
            {
                data &&
                <S.SharkChartWrapper>
                    <ComposedChart
                        data={convertSharkData(data)}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid vertical={false} strokeWidth={1} strokeOpacity={0.18} />
                        <XAxis
                            dataKey="date"
                            dy={10}
                            color="red"
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatDateXAxis}
                        />
                        <YAxis
                            yAxisId="shark-y-left"
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        />
                        <YAxis
                            yAxisId="shark-y-right"
                            orientation="right"
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
                                if (name === t('shark.totalBalance'))
                                    return `${value.toFixed(2)}%`;
                                return value;
                            }}
                        />
                        <Legend
                            align="center"
                            verticalAlign="bottom"
                            content={renderCusomizedLegend}
                        />
                        <Bar
                            yAxisId="shark-y-right"
                            type="linear"
                            dataKey={'' + t(`shark.totalBalance`)}
                            fill="#C9A506"
                            stroke="#FEE929"
                            opacity={0.8}
                        />
                        <Line
                            yAxisId="shark-y-left"
                            type="linear"
                            dataKey={'' + t(`shark.totalTransactionHighValue`)}
                            stroke="#6E14D7"
                            dot={<CustomizedDot />}
                        />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={{ stroke: 'red', strokeWidth: 1, r: 4, strokeDasharray: '' }} /> */}
                        <Line
                            yAxisId="shark-y-left"
                            type="linear"
                            dataKey={'' + t(`shark.totalTransaction`)}
                            stroke="#B33524"
                            dot={{ stroke: 'red', strokeWidth: 1, r: 4, strokeDasharray: '' }}
                        />
                    </ComposedChart>
                </S.SharkChartWrapper>
            }
        </>
    );
}

const convertSharkData = (data) => {
    const max = data.reduce(function (p, v) {
        return (p.totalBalance > v.totalBalance ? p : v);
    })

    return data.map((d, i) => ({
        ...d,
        totalBalance: d.totalBalance / max.totalBalance * 100,
    })).map((d, i) => ({
        d: d.date,
        ['' + t(`shark.totalBalance`)]: d.totalBalance,
        ['' + t(`shark.totalTransaction`)]: d.totalTransaction,
        ['' + t(`shark.totalTransactionHighValue`)]: d.totalTransactionHighValue,
    }));
}
export default Shark