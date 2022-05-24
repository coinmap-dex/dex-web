import { Link } from "react-router-dom";
import { Button, Input, Table } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import Search from "~svg/Search";

export default {
    Wrapper: styled.div`
        width: 928px;
        height: 559px;
        border-radius: 8px;
        display:flex;
        flex-direction: column;
        background-color: #0F1A30;
        padding: 38px;
    `,
    Title: styled.div`
        font-size: 28px;
        line-height: 28px;
        margin-bottom:18px;
    `,
    Table: styled(Table)`
        & th{
            background:transparent;
        }
    `,
}