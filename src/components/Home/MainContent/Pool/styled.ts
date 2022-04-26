import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const lengend = styled.div`
    width:calc(100% - 50px);
    margin-left:50px;
    margin-top:2rem;
    display:flex;
`;

export const lengendItem = styled.span`
    margin-right: 3rem;
    color: #000;
    &>*{
        vertical-align:middle;
    }
    &>span{
        font-size:8px;
        margin-left:8px;
        color:#fff;
        white-space:nowrap;
    }
`;

export const TitleTotalSupply = styled.div`
    font-size: 1.44rem;
    text-transform: uppercase;
    margin-left: 2rem;
    &>span{
        color: orange;
    }
`;
export const Pools = styled.div`
    padding:0 1.8rem;
    font-size:1.5rem;
    text-transform:uppercase;
    margin-bottom:3.5rem;
`;
export const Pool = styled.div`
    margin:2rem 0;
    line-height:2.7rem;
    @media ${breakpoints.sm}{
        margin:2rem 0;
    }
    & a{
        color:#50B6D4;
    }
    & span{
        color:#04fae0;
    }
`;

export const PoolChart = styled(ResponsiveContainer)`
    height:30rem !important;
    @media ${breakpoints.sm}{
        height:100% !important;
    }
`;
