import styled from "styled-components";

export const walletItems = styled.div`
    padding: 0 1.4rem;
    margin: 1.2rem 0.4rem;
    height: 25%;
    overflow:hidden auto;
    font-size:1.4rem;
    &>a{
        display: block;
        margin-bottom: 0.3rem;
        color: #B6BBC3;
        cursor: pointer;
        height: 2rem;
        width: 100%;
        line-height: 2rem;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    &>a:hover{
        color:#1DC7EC;
    }
`;


