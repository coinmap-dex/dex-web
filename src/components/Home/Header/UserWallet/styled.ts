import styled from "styled-components";
import breakpoints from "~breakpoints";

export const HeaderUserWalletWrapper = styled.div`
    display:flex;
`;

export const HeaderUnionIconWrapper = styled.div`
    &>svg{
        width:1.9rem;
        height:100%;
        cursor:pointer;
        display:none;
        @media ${breakpoints.sm} {
            display:block;
        }
    }
`;

export const HeaderUserWalletButton = styled.div`
    width:100%;
    height: 2.8rem;
    line-height: 2.8rem;
    text-align:center;
    background: linear-gradient(123.77deg, #993381 29.96%, #BB5387 78.97%);
    border-radius: 5rem;
    font-size:1.2rem;
    cursor:pointer;
    @media ${breakpoints.sm} {
        width: 17rem;
        height: 5.5rem;
        font-size:2.2rem;
        margin-left:2rem;
        line-height: 5.5rem;
    }
`;