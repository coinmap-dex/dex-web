import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const lengend = styled.div`
    width:calc(100% - 5rem);
    margin-left:5rem;
    margin-top:2rem;
    display:flex;
    justify-content:space-between;
`;

export const lengendItem = styled.span`
    margin-right: 2rem;
    color: #000;
    display:flex;
    align-items:center;
    &>*{
        vertical-align:middle;
    }
    &>span{
        font-size:0.8rem;
        margin-left:0.8rem;
        color:#fff;
        line-height:0.9rem;
    }
`;

export const HolderChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
`;
