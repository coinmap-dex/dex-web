import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { t } from 'i18next';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Label
} from "recharts";

// const data = [
//     { name: 'Group A', value: 5 },
//     { name: 'Group B', value: 10 },
// ];

const Donut = ({
    id,
    data,
    color,
    text,
}) => {
    return (

        <svg width="100%" height="100%" viewBox="0 0 42 42">
            <defs>
                <linearGradient id={`colorDonut_${id}_1`} x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#fff" stopOpacity={0.01} />
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id={`colorDonut_${id}_2`}  x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity={0.5} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.5} />
                </linearGradient>
            </defs>
            {/* <circle cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle> */}
            <S.DonutRing cx="50%" cy="50%" r="15.91549430918954" fill="transparent" stroke={`url(#colorDonut_${id}_1)`}></S.DonutRing>
            <S.DonutSegment cx="50%" cy="50%" r="15.91549430918954" fill="transparent" stroke={`url(#colorDonut_${id}_2)`} stroke-dasharray={`${data} ${100 - data}`} stroke-dashoffset="25"></S.DonutSegment>
            <g>
                <S.DonutPercent y="50%" x="50%" >
                    <tspan fill={color}>{data}</tspan>
                </S.DonutPercent>
                <S.DonutData y="53%" x="50%" transform="translate(0, 2)">
                    <tspan>{text}</tspan>
                </S.DonutData>
            </g>
        </svg>
    )
}

export default Donut