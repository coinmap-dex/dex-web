import { Input, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import SearchIcon from "~svg/Search";

export default {
    Wrapper: styled.div`
        position:relative;
    `,
    Search: styled(Input)`
        background:transparent;
        border-radius:5rem;
        height:2.8rem;
        @media ${breakpoints.sm}{
            height:5.5rem;
        }
        &>input{
            height: 2.8rem !important;
            line-height: 2.8rem !important;
            padding-left: 0.5rem !important;
            font-size: 0.8rem !important;
            color: #A8BCDE;
            opacity: 0.5;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            @media ${breakpoints.sm}{
                height: 5.5rem !important;
                line-height: 5.5rem !important;
                padding-left: 1rem !important;
                font-size: 1.8rem !important;
            }
        }
        &>svg {
            &>circle{
                stroke: #5B5A99;
            }
            &>path{
                stroke: #5B5A99;
            }
        }
    `,
    SearchIcon: styled(SearchIcon)`
        margin-right:0 !important;
        width:1.5rem;
        height:100%;
        fill:transparent;
        @media ${breakpoints.sm}{
            margin-right:1rem !important;
            width:1.7rem;
        }
    `
}