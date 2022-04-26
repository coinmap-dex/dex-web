import { Col, Input, Label, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Currencies = styled.div`
    display:inline-flex;
    aling-items:center;
    &>div{
        width: 30%;
        height:3rem;
        cursor:pointer;
        border-radius:0.9rem;
        @media ${breakpoints.sm} {
            width:13rem;
            height:5rem;
        }
    }
`;
export const Currency = styled.div`
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    padding: 0.3rem;
    border:1px solid #312F62;
    margin-right: 0.5rem;
    min-width: 8rem;
    @media ${breakpoints.sm} {
        margin-right: 1.2rem;
    }
    &>img{
        width:20%;
    }
    &>div{
        width: 78%;
    }
`;

export const CurrencyPrice = styled.span`
    font-size:1rem;
    line-height:1.2rem;
    color:#fff;
    margin:0.5rem 0.5rem 0 0;
    display:inline-block;
    @media ${breakpoints.sm} {
        font-size:1.5rem;
        line-height:1.8rem;
    }
`;

export const CurrencySymbol = styled.span`
    font-size:0.7rem;
    line-height:1.2rem;
    color: #312F62;
    font-weight:bold;
    @media ${breakpoints.sm} {
        font-size:1rem;
        line-height:1.8rem;
    }
`;
export const CurrencyLineChart = styled.div`
    display: flex;
    align-items:center;
`;

export const CurrencyLineWrapper = styled.div`
    display:inline-block;
`;

export const CurrencyDownIconWrapper = styled.span`
   &>svg{
        width:0.5rem;
        height:0.5rem;
        margin-bottom: 0.6rem;
        margin-right:0.5rem;
   }
`;
export const CurrencyRate = styled.span`
    color:${props=>props['rate'] > 0?'#50E3C2':'#E3507A'};
    font-size:0.6rem;
`;


export const AddCurrency = styled.div`
    line-height:3.2rem;
    border:1px dashed #312F62;
    color:#312F62;
    font-size:0.8rem;
    box-sizing:border-box;
    padding-left: 1rem;
    font-weight:bold;
    @media ${breakpoints.sm} {
        font-size:1.4rem;
        line-height:5rem;
    }
`;