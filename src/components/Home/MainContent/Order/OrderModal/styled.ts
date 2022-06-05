import { Link } from "react-router-dom";
import { Button, Input, Table } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import Search from "~svg/Search";

export default {
    Table: styled(Table)`
      thead {
        tr {
          th:first-child {
            text-align: left;
          }
          th {
            text-align: right;
          }
        }
      }
      tbody {
        tr {
          td:first-child {
            text-align: left;
          }
          td {
            padding-top: 1.6rem;
            padding-bottom: 1.6rem;
            padding-left: 3rem;
            text-align: right;
          }
        }
      }
      & th{
        background:transparent;
      }
    `,
}