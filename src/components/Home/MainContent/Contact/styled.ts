import { Col, Row } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
export default {
    Wrapper: styled.div`
        position:relative;
        &:after{
            display: flex;
            align-items: center;
            justify-content: center;
            content: 'Demo version';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            background: #0000008c;
            font-size:28px;
        }
    `,
    ContactRow1: styled(Row)`
        height:40rem;
        overflow:hidden;
        position:relative;
        line-height:3rem;
        flex-direction: row;
        background:${props => props['background']};
        padding:0;
        @media ${breakpoints.lg}{
            height:20rem;
        }
        &>div{
            position:relative;
            overflow:hidden;
        }
        &>div>div{
            padding-left:2.5rem;
            @media ${breakpoints.sm}{
                padding-left:8rem;
            }
        }
    `,
    ContactRow2: styled(Row)`
        overflow:hidden;
        position:relative;
        line-height:3rem;
        flex-direction: row;
        background:${props => props['background']};
        padding:2rem 0;
        @media ${breakpoints.lg}{
            height:20rem;
            padding:0
        }
        &>div{
            position:relative;
            overflow:hidden;
        }
        &>div>div{
            padding-left:2.5rem;
            @media ${breakpoints.sm}{
                padding-left:8rem;
            }
        }
    `,
    ContactBackgroundImage: styled.img`
        position:absolute;
        top:0;
        left:0;
    `,
    ContactColLeftCoinmap: styled.div`
        width:22rem;
        display:inline-block;
        padding-top:4rem;
        // padding-left:8rem;
        text-align:center;
        &>div:nth-child(1){
            font-size: 3.6rem;
            line-height: 3.6rem;
            color: #B4E0FF;
        }
        &>div:nth-child(2){
            font-size: 9.6rem;
            line-height: 9.6rem;
            color: #F5A623;
        }
    `,
    ContactInfo: styled(Col)`
        &>div{
            height:100%;
            display:flex;
            justify-content:center;
            flex-direction:column;
        }
    `,
    ContactInfoItem: styled.div`
        margin: 0.25rem 0;
        display: flex;
        align-items: center;
        &>svg{
            margin-right: 1rem;
            fill: #cdcdcd;
            width: 1.8rem;
            height: 1.8rem;
        }
        &>span{
            color: #F4F7FC;
            font-size: 1.376rem;
            flex:1;
        }
    `,
    ContactInfo2: styled(Col)`
        &>div{
            height:100%;
            display:flex;
            justify-content:center;
            flex-direction:column;
        }
    `,
    ContactInfoItem2: styled.div`
        display: flex;
        align-items: center;
        &>svg{
            margin-right: 1.6rem;
            fill: #cdcdcd;
            width: 0.7rem;
            height: 0.7rem;
            padding: 0.15rem;
            background: #0058ff;
            border-radius: 50%;
            @media ${breakpoints.md} {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        &>span {
            color: #B6BBC3;
            font-size: 1.53rem;
            @media ${breakpoints.sm} {
                font-size: 1.8rem;
            }
        }
    `,
    ContactInfoChannels: styled.div`
        margin:0.8rem 0;
        display:flex;
        align-items:center;
        &>svg, &>img{
            margin-right:1.5rem;
            fill: #cdcdcd;
            width:2.6rem;
            height:2.6rem;
        }
    `,
    ContactInfoMarketCap: styled.div`
        color:#B6BBC3;
        font-size:1.5rem;
        margin:0.8rem 0;
        @media ${breakpoints.sm}{
            font-size: 1.8rem;
        }
        &>span:last-child{
            color:#ffb733;
            margin-left:0.5rem;
        }
    `,
}