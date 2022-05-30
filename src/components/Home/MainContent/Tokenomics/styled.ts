import styled from "styled-components";
import breakpoints from "~breakpoints";

export const TokenomicsContent = styled.div`
    text-transform: capitalize;
    padding:0 1.8rem;
    line-height:2;
    background:#1C2740;
    font-size:1.8rem;
`;

export const TokenomicsContentCirculating = styled.div`
    border-bottom: 1px dashed #313B50;
    padding:1rem 0;
    &>div{
        display:flex;
        justify-content:space-between;
    }
    &>div:first-child, &>div>span:nth-child(2){
        color:#B6BBC3;
    }
`;

export const TokenomicsContentOther = styled.div`
    padding:1.5rem 0;
    &>div{
        display:flex;
        justify-content:space-between;
    }
    &>div>span:nth-child(1){
        color:#B6BBC3;
    }
`;
export const TokenomicsAudit = styled.div`
    display: flex;
    align-items: center;
    &>div {
        font-size: 1.6rem;
        font-weight: normal;
        padding-top: 0.1rem;
        @media ${breakpoints.xs}{
            padding-top: 0;
        }
        margin-right: 0.5rem;
    }
`;

export const TokenomicsAuditIconLink = styled.a`
    display:flex;
    background:#3775B7;
    border-radius:0.2rem;
    padding-right: 1.5rem;
    position:relative;
    margin-left:0.3rem;
    &>img{
        height:2rem;
        @media ${breakpoints.sm}{
            height:3.3rem;
        }
    }
    &>svg{
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        width: 1.5rem;
        @media ${breakpoints.xs}{
            top: 0.5rem;
        }
    }
`;