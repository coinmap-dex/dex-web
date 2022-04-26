// import "./styles.css";
import React, { FunctionComponent } from "react";
import * as S from "./styled";
import * as MS from '../styled';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ComposedChart,
    Bar,
    Cell
} from "recharts";
import { Label } from "sezy-design";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { formatDateXAxis, formatYAxisNumber } from "~utils";
import { useGetHolderQuery } from "~store/modules/home/api";
import { useAppSelector } from "~hooks";

const Holder = () => {
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetHolderQuery(contract);

    const baseNum = data ? data[0]?.num : 0;
    const chartData = convertRawDataToChartData(data, baseNum);
    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('holder.title')}
                </Label>
            </MS.MainContentTitleBox>
            {
                data &&
                <S.HolderChartWrapper>
                    <ComposedChart
                        data={chartData}
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
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatDateXAxis}
                        />
                        <YAxis
                            width={50}
                            tick={{ fill: "#fff" }}
                            tickFormatter={formatYAxis(baseNum)}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#1C2740", border: '0' }}
                            labelStyle={{ display: 'none' }}
                            itemStyle={{ color: "#7C8491" }}
                        />
                        <Bar
                            type="linear"
                            dataKey="num"
                            fill="#C9A506"
                            maxBarSize={12}
                        >
                            {chartData.map(mapBarCell)}
                        </Bar>
                    </ComposedChart>
                </S.HolderChartWrapper>
            }
        </>
    );
}

const mapBarCell = (entry, index) => {
    return <Cell key={`cell-${index}`} fill={entry?.num > 0 ? '#50B6D4' : '#EC6649'} />
}
const formatYAxis = baseNum => number => {
    return parseFloat(formatYAxisNumber(number + baseNum)).toFixed(2);
}

const convertRawDataToChartData = (data, baseNum) => {
    const chartData = data?.slice(1);
    return chartData?.map((d) => {
        return {
            ...d,
            num: d.num - baseNum
        };
    });
}

export default Holder