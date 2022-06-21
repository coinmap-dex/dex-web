import { Modal } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export default {
    Modal: styled(Modal)`
        &>div:last-child{
            max-width:1369px;
            width: 80%;
            padding-top: 37px;
            padding-bottom: 64px;
            background: #0F1A30;
            border: 1px solid rgba(44, 54, 73, 0.3);
            border-radius: 20px;
            text-align: center;
            overflow:hidden;
        }
    `,
    LogoWrapper: styled.div`
        &>svg{
            display:block;
            text-align: center;
            margin:auto;
        }
        &>svg:first-child{
            margin-bottom:10px;
            width: 44px;
        }
    `,
    Pro: styled.div`
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 60px;
        letter-spacing: 0.5em;
        color: #A8BCDE;
        text-align: center;
        @media ${breakpoints.xs}{
          font-size: 10px;
        }
    `,
    Title1: styled.div`
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 130%;
        text-align: center;
        letter-spacing: 2px;
        color: #FFFFFF;
        @media ${breakpoints.xs}{
            font-size: 22px;
        }
    `,
    Title2: styled.div`

        @keyframes textclip {
            to {
                background-position: 200% center;
            }
        }
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 130%;
        text-align: center;
        letter-spacing: 2px;
        color: #FFFFFF;


		color: #fff;
		background: linear-gradient(to right,#095fab 10%, #25abe8 50%, #57d75b 60%);
		background-size: auto auto;
		background-clip: border-box;
		background-size: 200% auto;
		color: #fff;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 1.5s linear infinite;
		display: inline-block;

        @media ${breakpoints.xs}{
            font-size: 22px;
        }
    `,
    Title3: styled.div`
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 180%;
        text-align: center;
        color: #B6BBC3;
        margin-top:38px;
        @media ${breakpoints.xs}{
            font-size: 8.5px;
        }
    `,
    Button: styled.button`
        width: 245.14px;
        height: 88px;
        background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
        border-radius: 50px;
        border:0;

        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 100%;
        text-align: center;
        color: #FFFFFF;
        margin-top:38px;
        cursor: pointer;
        @media ${breakpoints.xs}{
            font-size: 14px;
            width: 122.75px;
            height: 44px;
        }
        &:hover {
            background: #4B5780;
            cursor: not-allowed;
        }
    `,
    Exit: styled.div`
    position:absolute;
    top:30px;
    right:30px;
    cursor: pointer;
    `,
    Background1: styled.div`
        @keyframes background1 {
            0% {
                transform: translateX(0%);
            }
            25% {
                transform: translateX(-50%);
            }
            50% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
        z-index:-1;
        position:absolute;
        top:63px;
        left:0;
        animation: background1 100s infinite;
        opacity:0.2;
        transform: translateX(0%);
    `,
    Background2: styled.img`
        @keyframes background2 {
            0% {
                transform: translate(0%, 0%);
            }
            25% {
                transform: translate(10%,-10%);
            }
            50% {
                transform: translate(0%,0%);
            }
            100% {
                transform: translate(10%,-10%);
            }
        }
        z-index:-1;
        position:absolute;
        right:0;
        top:0;
        animation: background2 45s infinite;
    `,
    Background3: styled.img`
        @keyframes background3 {
            0% {
                transform: translate(0%, 0%);
            }
            25% {
                transform: translate(-10%,10%);
            }
            50% {
                transform: translate(0%,0%);
            }
            100% {
                transform: translate(-10%,10%);
            }
        }
        z-index:-1;
        position:absolute;
        left:0;
        bottom:0;
        animation: background3 60s infinite;
    `,
    Background4: styled.img`
    @keyframes background4 {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(359deg);
        }
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    }
        z-index:-1;
        position:absolute;
        right:20px;
        bottom:20px;
        animation: background4 30s infinite;
    `,
    Background5: styled.img`
        @keyframes background5 {
            0% {
                transform: translate(0%, 0%);
            }
            25% {
                transform: translate(100%, 0%);
            }
            50% {
                transform: translate(0%,0%);
            }
            100% {
                transform: translate(100%,0%);
            }
        }
        z-index:-1;
        position:absolute;
        top:40%;
        left:20%;
        animation: background5 40s infinite;
    `,
}