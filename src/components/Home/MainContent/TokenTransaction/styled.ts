import { Label, Table } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

const tableScrollBarWidth = '6px';
const tableHeaderPaddingRight = '1.8rem';

const tableWrapperStyle = `
    margin-bottom: 2rem;
    & th{
        background:#1C2740;
        color:#B9C2D0;
        position: sticky;
        top: 0; /* Don't forget this, required for the stickiness */
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
        padding-top: 1.5rem;
        padding-bottom: 2rem;
    }

    & tr>td:first-child,& th:first-child{
        width: 30%;
    }

    & tr>td:last-child,& th:last-child{
        width: 30%;
    }

    & tr>th:first-child, & tr>td:first-child{
        padding-left: 2rem;
    }

    & tr>th:last-child, & tr>td:last-child{
        padding-right: ${tableHeaderPaddingRight};
    }

    &::-webkit-scrollbar {
        width: ${tableScrollBarWidth};
    }
    
    & td{
        color: #B6BBC3;
    }
`;

const compactNumberStyle = `
    .compact-number-tooltip > .compact-number-tooltip {
        min-width: 7rem;
        top: 2.1rem;
        left: 11rem;
        &:before {
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 5px solid #181818;
            left: -7%;
            bottom: 2rem;
        }
    }
`;

const dataType2Style = type => (
    type === 'up'
        ? `
            {
                &>div{
                    color: #26E1CD;
                }
                &>svg{
                    fill: #26E1CD;
                }
            }
        `
        : `
            {
                &>div{
                    color: #EC6649;
                }
                &>svg{
                    fill: #EC6649;
                }
            }
        `
)

export default {
    Title: styled(Label)`
        padding: 1.4rem 1.8rem 1rem;
        display:block;
        text-transform: uppercase;
    `,
    HeaderTable: styled(Table)`
        ${tableWrapperStyle}
        overflow: hidden;
        padding-bottom: 2.6rem;
        & tbody{
            display:none;
        }
        & th{
            text-transform: capitalize;
        }
        & th:last-child{
            padding-right: calc(${tableHeaderPaddingRight} + ${tableScrollBarWidth}) !important;
        }
    `,
    DataTable: styled(Table)`
        ${tableWrapperStyle}
        ${compactNumberStyle}
    `,
    HighLightDataWrapper: styled.div`
        display:flex;
        justify-content:space-between;
        padding: 0 2rem 1.6rem 2rem;
    `,
    HighlightData: styled.div`
        display:flex;
        align-items: flex-end;
        &>*:first-child[data-type=up]{
            margin-right:0.5rem;
        }
        ${compactNumberStyle}
    `,
    HighlightDataMain: styled(Label)`
        ${props => dataType2Style(props['data-type'])}
        display:flex;
        align-items:center;
        &>*:first-child{
            font-weight:500;
            font-size:2.2rem;
            line-height:2.2rem;
            .compact-number-tooltip > .compact-number-tooltip {
                top: -0.8rem;
                left: 50%;
                &:before {
                    border-color: #181818 transparent transparent;
                    border-style: solid;
                    border-width: 5px 5px 0;
                    bottom: 0;
                    left: 50%;
                }
            }
        }
    `,
    HighlightDataSub: styled(Label)`
        font-size:1.2rem;
        line-height:1.2rem;
        color:#868E9B;
        font-weight: 400;
        margin-bottom:0.3rem;
    `,
    MoreWrapper: styled.div`
        display:flex;
        justify-content:flex-end;
        align-items:center;
        width:20%;
        cursor:pointer;
        &>svg{
            width:1.1rem;
        }
        >div {
            div:nth-child(2) {
                width: 12.8rem;
                height: 2.7rem;
                background: rgba(80, 182, 212, 0.6);
                border-radius: 0.2rem;
                text-align: center;
                transform: translate(-100%, -100%);
                @media ${breakpoints.lg}{

                    transform: translate(0%, -100%);
                    top: -0.5rem;
                    left: 2.5rem;
                }
                >div {
                    padding-top: 0.4rem;
                }
            }
        }
    `,
    MoreLabel: styled(Label)`
        font-size:1.3rem;
        font-weight: 400;
        color: #F3AA3C;
        margin-right:0.3rem;
    `
};

// export const DataTable2 = styled(Table)`
//     ${tableWrapperStyle}
//     max-height: calc(50% - 8rem);
//     @media ${breakpoints.sm}{
//         max-height: 20rem;
//     }
//     & tbody > tr > td:first-child{
//         color: #26E1CD;
//     }
// `;
