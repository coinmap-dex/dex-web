import { Label } from "recharts";
import { Row } from "sezy-design";
import styled, { keyframes } from "styled-components";
import breakpoints from "~breakpoints";

export const RatingWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    flex:1;
`

export const RatingCharts = styled(Row)`
    flex: 1;
`;

const donutfadelong = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const DonutRing = styled.circle`
    stroke-width: 4;
`


const donut = (strokeDasharray)=>keyframes`
    0% {
        stroke-dasharray: 0, 100;
    }
    100% {
        stroke-dasharray: ${strokeDasharray};
    }
`;

export const DonutSegment = styled.circle`
    transform-origin: center;
    animation: ${props=> donut(props['stroke-dasharray'])} 2s;
    animation-fill-mode: forwards;
    stroke-width: 4;
    stroke-linecap:round;
`

export const DonutPercent = styled.text`
    &>tspan{
        font-size: 1rem;
        line-height: 1;
        font-weight: bold;
        text-align: center;
        text-anchor: middle;
    }
`

export const DonutData = styled.text`
    &>tspan{
        font-size: 0.42rem;
        line-height: 1;
        text-align: center;
        text-anchor: middle;
        fill: #B6BBC3;
        animation: ${donutfadelong} 1s;
        text-transform: capitalize;
        @media ${breakpoints.xxl}{
            font-size: 0.35rem;
        }
    }
`