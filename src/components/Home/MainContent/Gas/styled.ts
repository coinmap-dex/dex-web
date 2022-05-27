import styled from "styled-components";
import breakpoints from "~breakpoints";

export const GasChartWrapper = styled.div`
    padding: 1rem 1.8rem;
    // margin-top: 2rem;
    display:flex;
    align-items:center;
    position:relative;
    height: 65%;
    @media ${breakpoints.xxl}{
        height:80%;
    }
    &>svg:first-child{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        height:85%;
        text {
            fill: #F4F7FC;
        }
    }
    &>svg:nth-child(2){
        margin: auto;
        display: block;
        height:70%;
    }
`;
