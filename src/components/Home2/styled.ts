import { Col, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export default {
    HeaderSection: styled(Section)`
        background-color:#E1EEFA;
        background: #1D2842;
        padding:24px 16px 0px;
        @media (max-width: 500px) {
            padding:12px;
        }
        &>div{
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
    `,
    Logo: styled.img`
        width: 52.41px;
        height: 54px;
        margin: 14px 0;
        @media (max-width: 500px) {
            margin:0;
        }
    `,
    Menu: styled.div`
        &>a{
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            margin-left:48px;
            color: #fff;
            &>button{
                background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
                box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
                border-radius: 2px;
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                border:none;
                height: 44px;
                color: #fff;
            }
        }

        @media (max-width: 500px) {
            display:none
        }
    `,
    Section1: styled(Section)`
        height:637px;
        position:relative;
        background:#0C122A;
        &>div{
            width:1200px;
            height:100%;
            display:flex;
            align-items: center;
            z-index:1;
            position:relative;
            @media (max-width: 500px) {
                padding: 12px;
            }
            @media (max-width: 1200px) {
                max-width:100%;
            }
        }
        &:before{
            content: '';
            display:block;
            background: url('/images/section1.png');
            background-blend-mode: color-dodge;
            height: 352px;
            width:100%;
            max-width:100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            opacity:0.15;
            z-index:0;
        }
    `,
    Section1Col1: styled(Col)`
        display:flex;
        align-items: center;
        justify-content: space-between;
        &>div>div:nth-child(1){
            font-weight: 700;
            font-size: 48px;
            line-height: 52px;

            /* sys-coral-gradient */

            background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom:8px;
            @media (max-width: 500px) {
                font-size: 36px;
            }
        }
        &>div>div:nth-child(2){
            font-weight: 600;
            font-size: 24px;
            line-height: 26px;
            color: #FFFFFF;
            @media (max-width: 500px) {
                font-size: 18px;
            }
        }
        &>div>div:nth-child(3){
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: #FFFFFF;
            margin-top:24px;
            width:370px;
            @media (max-width: 500px) {
                font-size: 16px;
                line-height: 24px;
            }
        }
        & button{
            width: 187px;
            height: 44px;
            left: 373px;
            top: 542px;
            background: linear-gradient(270deg, #5D3293 0%, #A23293 100%);
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
            border-radius: 2px;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
            border:0;
            margin-top:29px;
        }
    `,
    Section1Col2: styled(Col)`
        & img{
            width: 670px;
            max-width:100%;
            @media (max-width: 500px) {
                margin-top:40px;
            }
        }
    `,
    Section2: styled(Section)`
        height:637px;
        position:relative;
        background:#0C122A;
        @media (max-width: 500px) {
            padding: 12px;
            height:auto;
        }
        &>div{
            width:1200px;
            height:100%;
            display:flex;
            align-items: center;
            z-index:1;
            position:relative;
            @media (max-width: 1200px) {
                max-width:100%;
            }
        }
    `,
    Section2Col1: styled(Col)`
        & svg{
            max-width:100%;
        }
    `,
    Section2Col2: styled(Col)`
        &>div>div{
            display:flex;
            &>svg{
                margin-right:16px;
            }
            &>div{
                flex:1;
                &>div:nth-child(1){
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 26px;
                    color: #FFFFFF;
                }
                &>div:nth-child(2){
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 24px;
                    color: #FFFFFF;
                }
            }
        }
        &>div>div:nth-child(2){
            margin: 70px 0;
        }
    `,

    Section3: styled(Section)`
        position:relative;
        background:#0C122A;
        padding: 36px 0;
        @media (max-width: 500px) {
            padding: 12px;
        }
        &>div{
            width:1200px;
            height:100%;
            z-index:1;
            position:relative;
            @media (max-width: 1200px) {
                max-width:100%;
            }
        }
        &:before{
            content: '';
            display:block;
            background: url('/images/section1.png');
            background-blend-mode: color-dodge;
            height: 352px;
            width:100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            opacity:0.15;
            z-index:0;
            @media (max-width: 500px) {
                background: url('/images/section3.png');
                height: 100%;
                top:0;
                transform: translateY(0%)
            }
        }
    `,
    Section3Col1: styled(Col)`
        display:flex;
        align-items: center;
        &>div{
            max-width: 100%;
        }
        &>div>div:nth-child(1){
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            color: #FFFFFF;
            margin-bottom:8px;
            max-width: 100%;
            text-align: center;
        }
        &>div>div:nth-child(2){
            font-weight: 700;
            font-size: 48px;
            line-height: 130%;
            text-transform: uppercase;
            color: #FFFFFF;
            max-width: 100%;
            text-align: center;
            &>span{
                background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
            @media (max-width: 500px) {
                font-size: 36px;
                text-align:center;
            }
        }
        &>div>div:nth-child(3){
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: #FFFFFF;
            margin-top:13px;
            width:448px;
            max-width: 100%;
            text-align: justify;
            @media (max-width: 500px) {
                font-size: 18px;
            }
        }
        & button{
            width: 187px;
            height: 44px;
            left: 373px;
            top: 542px;
            background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
            border-radius: 2px;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
            border:0;
            margin-top:22px;
            @media (max-width: 500px) {
                display:none;
            }
        }
        `,
    Section3Col2: styled(Col)`
        & img{
            width: 570px;
            max-width:100%;
        }
    `,
    Section3Item: styled.div`
        background: #1D2842;
        border-radius: 12px;
        height: 470px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top:36px;
        &>div{
            padding:40px;
        }
        &>div>div:nth-child(1){
            font-weight: 700;
            font-size: 72px;
            line-height: 58px;
            background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            display: flex;
            &>span{
                line-height:32px;
                font-size: 32px; 
                margin-left:5px;
            }
        }
        &>div>div:nth-child(2){
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: #FFFFFF;
            margin-bottom:8px;
        }
        &>div>div:nth-child(3){
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;
            color: #56658A;
        }
        &>img{
            padding:16px;
            max-width:100%;
        }
    `,

    Section4: styled(Section)`
        position:relative;
        background:#0C122A;
        &>div{
            width:1200px;
            height:100%;
            z-index:1;
            position:relative;
            padding: 36px 0;
            @media (max-width: 500px) {
                padding: 12px;
            }
            @media (max-width: 1200px) {
                max-width:100%;
            }
        }
        &:before{
            content: '';
            display:block;
            background: url('/images/section4.png');
            background-blend-mode: color-dodge;
            height: 566px;
            width:100%;
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            z-index:0;
        }
    `,
    Section4Row: styled(Row)`
        justify-content: center;
    `,
    Section4Info: styled.div`
        margin-bottom:80px;
        padding:64px 0;
        &>div:nth-child(1){
            font-weight: 700;
            font-size: 48px;
            line-height: 52px;
            text-align: center;
            background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;  
            margin-bottom:18px;
        }
        &>div:nth-child(2){
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
        }
    `,
    Section4ColItem: styled(Col)`
        &>div{
            position:relative;
            &:before{
                content:'';
                display:block;
                position:absolute;
                border: 2px solid rgba(86, 101, 138, 0.5);
                border-radius:5px;
                width:100%;
                top:10px;
                z-index: 0;
            }
           &>div:nth-child(1){
                width: 85px;
                height: 28px;
                background: rgba(0, 123, 255, 0.8);
                border-radius: 2px;
                font-weight: 400;
                font-size: 16px;
                line-height: 29px;
                color: #FFFFFF;
                text-align: center;
                margin:auto;
                position:relative;
                z-index: 1;
           }
           &>div:nth-child(2){
                font-weight: 700;
                font-size: 20px;
                line-height: 29px;
                text-align: center;
                color: #FFFFFF;
                margin-top:44px;
                margin-bottom:10px;
           }
           &>div:nth-child(3){
                font-weight: 400;
                font-size: 16px;
                line-height: 29px;
                text-align: center;
                color: #56658A;
                padding: 0 15px;
           }
        }
    `,
    Section5: styled(Section)`
        position:relative;
        background:#0C122A;
        &>div{
            width:1200px;
            height:100%;
            z-index:1;
            position:relative;
            padding: 36px 0;
            @media (max-width: 500px) {
                padding: 12px;
            }
            @media (max-width: 1200px) {
                max-width:100%;
            }
        }
        &:before{
            content: '';
            display:block;
            background: url('/images/section5.png');
            background-blend-mode: color-dodge;
            height: 422px;
            width:100%;
            position: absolute;
            bottom: 0;
            z-index:0;
        }
    `,
    Section5Title:styled.div`
        font-weight: 700;
        font-size: 48px;
        line-height: 52px;
        text-align: center;
        background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom:48px;
    `,
    Section5ColItem: styled(Col)`
        position: relative;
        z-index:1;
       &>div{
            width: 170px;
            height: 128px;
            background: #1D2842;
            border-radius: 6px;
            margin-bottom:30px;
       }
    `,

    Section6: styled(Section)`
        background: linear-gradient(90.11deg, #01C3FE 7.73%, #45FAC5 99.39%);
        
        &>div{
            width:1200px;
            height:100%;
            z-index:1;
            position:relative;
            padding: 91px 0;
            @media (max-width: 500px) {
                padding: 12px;
            }
            @media (max-width: 1200px) {
                max-width:100%;
            }
            &>div{
                @media (max-width: 500px) {
                    margin:0 !important;
                }
                &>div{
                    @media (max-width: 500px) {
                        padding:0 !important;
                    }
                }
                &>div:last-child{
                    &>div{
                        @media (max-width: 500px) {
                            text-align:right;
                        }
                    }
                }
            }
        }
        & svg{
        }
    `,
    Section6Title: styled.span`
        font-weight: 700;
        font-size: 48px;
        line-height: 52px;
        text-align: center;
        color: #FFFFFF;
    `,
    Section6Des: styled.span`
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
    `,

    Section7: styled(Section)`
        background: #0C122A;
        &>div{
            height:100%;
            z-index:1;
            position:relative;
            padding-top:32px;
            @media (max-width: 500px) {
                padding: 40px 12px 12px;
            }
            &>div{
                /* width:300px; */
                margin:auto !important;
                &>div{
                    text-align: center;
                }
            }
        }
        & svg{
        }
    `,

    Section7Copyright: styled.div`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #56658A;
        padding:40px 0;
    `,

}