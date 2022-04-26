import React, { FunctionComponent } from 'react'

import _ from 'lodash';
import * as  S from './styled';
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
import { Label } from 'sezy-design';
import { t } from 'i18next';
import { formatDateXAxis, formatYAxisNumber, thousandSeparator } from '~utils';
import { useGetPoolQuery } from '~store/modules/home/api';
import { useAppSelector } from '~hooks';

const Pool = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetPoolQuery(contract);
    // const { pools, data } = object;
    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('pool.title')}
                </Label>
                <S.TitleTotalSupply>
                    Total Supply: <span>{thousandSeparator((data?.pools?.reduce((c, n) => c + n?.liquidity, 0).toFixed(2)))}</span>
                </S.TitleTotalSupply>
            </MS.MainContentTitleBox>
            <S.Pools>
                {
                    data?.pools?.map((pool, index) => {
                        const nameArray = pool?.name?.split('/');
                        return <S.Pool key={`pool_item_${index}`}>
                            <div>
                                <a>Pc v2</a> | {pool?.name} LP Holdings: <span>(${thousandSeparator(pool?.liquidity)})</span>
                            </div>
                            <div>{`${thousandSeparator(pool?.liquidity)} ${nameArray[1]}`}</div>
                        </S.Pool>
                    })
                }
            </S.Pools>
            {
                data?.data &&
                <S.PoolChart>
                    <ComposedChart
                        width={500}
                        height={300}
                        data={data.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <defs>
                            <linearGradient id="colorTotalAmount" x1="0" y1="0" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#3B11DD" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#610BAF" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeWidth={1} strokeOpacity={0.18} />
                        <XAxis
                            dataKey="date"
                            dy={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatDateXAxis}
                        />
                        <YAxis
                            yAxisId="pool-y-left"
                            width={50}
                            tickMargin={10}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxisNumber}
                        />
                        <YAxis
                            yAxisId="pool-y-right"
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
                        />
                        <Legend
                            align="center"
                            verticalAlign="bottom"
                            content={renderCusomizedLegend}
                        />
                        <Bar
                            yAxisId="pool-y-left"
                            type="linear"
                            dataKey="totalAmount"
                            fill="url(#colorTotalAmount)"
                            stroke="#4484EF"
                        />
                        <Line
                            yAxisId="pool-y-right"
                            type="linear"
                            dataKey="price"
                            stroke="#50B6D4"
                            fill="#50B6D4"
                            dot={<CustomizedDot />}
                        />
                    </ComposedChart>
                </S.PoolChart>
            }
        </>
    )
}


const CustomizedDot: FunctionComponent<any> = (props: any) => {
    const { cx, cy, value, r, fill } = props;
    if (value > 2500) {
    }
    return (
        // <circle {...props} />
        <circle
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
        />
    );
};

const renderCusomizedLegend = (props) => {
    const { payload } = props;
    return (
        <S.lengend>
            {payload.map((entry, index) => {
                const { dataKey, color } = entry;
                return (
                    <S.lengendItem
                        key={`shark_legend_${index}`}
                    >
                        {
                            index === 0 && <Surface width={20} height={20} >
                                <Symbols cx={10} cy={10} type="square" size={500} fill='#50B6D4' />
                                <Symbols cx={10} cy={10} type="square" size={320} fill={color} />
                            </Surface>
                        }
                        {
                            index === 1 && <svg height="20" width="30">
                                <line x1="0" y1="10" x2="30" y2="10" stroke={color} strokeWidth="1" />
                                <circle cx="15" cy="10" r="5" stroke={color} strokeWidth="1" fill={color} />
                            </svg>
                        }
                        <span>{t(`pool.${dataKey}`)}</span>
                    </S.lengendItem>
                );
            })}
        </S.lengend>
    );
};
export default Pool