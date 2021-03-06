import { Modal, Table } from 'sezy-design';
import styled from 'styled-components';
import breakpoints from '~breakpoints';

export default {
  Modal: styled(Modal)`
  `,
  TableWrapper: styled.div`
      min-width: 92.8rem;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #0F1A30;
      border: 1px solid rgba(44, 54, 73, 0.3);
      div:nth-child(2) {
        @media ${breakpoints.xs}{
          overflow-x: hidden;
        }
        table {
          margin-bottom: 2.5rem;
          thead {
            background-color: #1C2740;
            tr {
              th:first-child {
                padding-left: 3.2rem;
              }
              th:last-child {
                padding-right: 3.2rem;
              }
              th {
                border: none;
                padding-top: 1.3rem;
                padding-bottom: 1.3rem;
                background:transparent;
              }
            }
          }
          tbody {
            color: #B6BBC3;
            tr {
              td:first-child {
                padding-left: 3.2rem;
              }
              td:last-child {
                padding-right: 3.2rem;
              }
              td {
                border: none;
              }
            }
          }
        }
      }
    `,
  TitleContainer: styled.div`
      display: flex;
      justify-content: space-between;
      >div>svg {
        margin: 2rem 1.5rem 1.5rem 0;
        cursor: pointer;
      }
    `,
  Title: styled.div`
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.1rem;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 3rem 0 1.8rem 3.4rem;
    `,
  TableContent: styled(Table)`
        & th{
            background:transparent;
        }
    `,
}
