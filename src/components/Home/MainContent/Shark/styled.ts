import { ResponsiveContainer } from "recharts";
import { Row } from "sezy-design";
import styled from "styled-components";

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
`;

export const SharkChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
`;
