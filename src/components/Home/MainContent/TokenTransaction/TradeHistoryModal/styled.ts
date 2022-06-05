import { Table } from "sezy-design";
import styled from "styled-components";

export default {
    Table: styled(Table)`
      tbody {
        tr:first-child {
          td {
            padding-top: 3rem;
          }
        }
        tr {
          td {
            padding-top: 1.15rem;
            padding-bottom: 1.15rem;
          }
        }
      }
    `,
}