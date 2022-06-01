import { Row } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const MainContentTitleBox = styled.div`
    display:flex;
    border-bottom: 1px solid #2C3649;
    justify-content:space-between;
    align-items:center;
    padding: 0 1.8rem;
    font-weight: 500;
    height: 6.4rem;
    line-height: 6.4rem;
    &>div:first-child{
        font-size:1.6rem;
        padding: 1.4rem 0 1rem;
        display: block;
        text-transform: uppercase;
        white-space:nowrap;
        
        @media ${breakpoints.sm}{
            font-size: 1.5rem;
        }
        @media ${breakpoints.xxl}{
            font-size: 1.8rem;
        }
    }
    >svg {
        margin-left: 3rem;
    }
`;

export const MainContentContentBox = styled.div`
    padding: 0 1.8rem;
`;

export const TitleLengend = styled.div`
    display:none;
    align-items:center;
    padding-left:2rem;   
    flex:1;
    justify-content: flex-end;
    &>*{
        white-space:nowrap;
        margin-left:3rem;
    }
    >.chart-info-icon {
        cursor: pointer;
    }
    @media ${breakpoints.sm}{
        padding-left:3rem;   
        display:flex;
    }
`;

export const TitleLengendItem = styled.span`
    color: #000;
    & svg{
        vertical-align:middle;
    }
    & span{
        vertical-align:middle;
        font-size:0.8rem;
        margin-left:0.8rem;
        color:#fff;
        display:inline-block;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
`;