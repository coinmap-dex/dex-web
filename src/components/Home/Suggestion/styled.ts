import { Input, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import Question from "~svg/Question";
import SearchIcon from "~svg/Search";

export default {
    Wrapper: styled.div`
        position:absolute;
        top:calc(100% + 1rem);
        left:auto;
        right:0;
        width:75vw;
        background: #0D1329;
        border: 1px solid rgba(168, 188, 222, 0.4);
        box-sizing: border-box;
        border-radius: 10px;
        padding: 1rem 2.4rem;
        z-index: 999;
        max-height: 30rem;
        overflow: hidden auto;
        @media ${breakpoints.md}{
            border-radius: 10px;
            padding: 1rem 2.4rem;
            width:100%;
            left:0;
        }
    `,
    Item: styled.div`
        display:flex;
        align-items: center;
        height:5rem;
        cursor:pointer;
        @media ${breakpoints.md}{
            height:6rem;
        }
        &>svg, &>img{
            width: 2.5rem;
            height: 2.5rem;
            margin-right:0.8rem;
            fill:transparent;
            border-radius:50%;
            overflow:hidden;
            @media ${breakpoints.md}{
                width: 3.4rem;
                height: 3.4rem;
                margin-right:1.8rem;
            }
        }
    `,
    RightCol: styled.div`
        flex:1;
    `,
    RightColHead: styled.div`
        display:flex;
        align-items: center;
    `,
    Name: styled.div`
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.5rem;
        color: #FDF4F4;
        margin-bottom:2px;
        @media ${breakpoints.md}{
            font-size: 1.7rem;
            line-height: 2rem;
        }
    `,
    holder: styled.div`
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1.5rem;
        color: #FDF4F4;
        margin-bottom:2px;
        border-left:1px solid #4A5672;
        padding-left:8px;
        margin-left:8px;
        @media ${breakpoints.md}{
            font-size: 1.5rem;
            line-height: 2rem;
        }
        &>span{
            color:#858D9A;
        }
    `,
    Address: styled.div`
        font-weight: 400;
        font-size: 1rem;
        color: #858D9A;
        @media ${breakpoints.md}{
            font-size: 1.2rem;  
        }
    `,
    Question: styled(Question)`
    `,
    Logo: styled.img`
    `,
}