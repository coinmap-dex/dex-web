import { ResponsiveContainer } from "recharts";
import { Row } from "sezy-design";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const lengend = styled(Row)`
    width:calc(100% - 5rem);
    justify-content:space-between;
    align-items:stretch;
    margin-top:2rem;
    margin-left:5rem !important;
`;

export const lengendItem = styled.div`
    color: #000;
    align-items:center;
    display:flex;
    &>*{
        align-items:center;
        display:flex;
    }
    & span{
        font-size:0.8rem;
        margin-left:0.8rem;
        color:#fff;
        line-height:0.9rem;
        flex:1;
    }
    &>div {
        >svg.recharts-surface {
            background: #C9A506;
            opacity: 0.8;
            border: 1px solid rgba(254, 233, 41, 0.8);
            border-radius: 3px;
        }
    }
`;

export const SharkChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
    @media ${breakpoints.sm} {
        max-height: 46rem;
    }
`;
