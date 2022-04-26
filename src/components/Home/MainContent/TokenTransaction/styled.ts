import { Label, Table } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Title = styled(Label)`
    padding: 1.4rem 1.8rem 1rem;
    display:block;
    text-transform: uppercase;
`;

const tableScrollBarWidth = '6px';
const tableHeaderPaddingRight = '1.8rem';

const tableWrapperStyle = `
    & th{
        background:#1C2740;
        color:#B9C2D0;
        position: sticky;
        top: 0; /* Don't forget this, required for the stickiness */
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
        padding-top: 1.5rem;
        padding-bottom: 2rem;
    }

    & tr>td:first-child{
        width: 40%;
    }

    & tr>td:last-child{
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
`

export const HeaderTable = styled(Table)`
    ${tableWrapperStyle}
    overflow: hidden;
    padding-bottom: 1.5rem;
    & tbody{
        display:none;
    }
    & th{
        text-transform: capitalize;
    }
    & th:last-child{
        padding-right: calc(${tableHeaderPaddingRight} + ${tableScrollBarWidth}) !important;
    }
`;

export const DataTable1 = styled(Table)`
    ${tableWrapperStyle}
    max-height: calc(50% - 8rem);
    & tbody > tr > td:first-child{
        color:#EC6649;
    }
`;

export const DataTable2 = styled(Table)`
    ${tableWrapperStyle}
    max-height: calc(50% - 8rem);
    @media ${breakpoints.sm}{
        max-height: 20rem;
    }
    & tbody > tr > td:first-child{
        color: #26E1CD;
    }
`;

export const HighLightDataWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:2rem 2rem 1.6rem;
`;
export const HighlightData = styled.div`
    display:flex;
    align-items: flex-end;
    &>*:first-child[data-type=up]{
        margin-right:0.5rem;
    }
`;

export const HighlightDataMain = styled(Label)`
    ${props => dataType2Style(props['data-type'])}
    display:flex;
    align-items:center;
    &>*:first-child{
        font-weight:500;
        font-size:2.2rem;
        line-height:2.2rem;
    }
`;

export const HighlightDataSub = styled(Label)`
    font-size:1.2rem;
    line-height:1.2rem;
    color:#868E9B;
    font-weight: 400;
    margin-bottom:0.3rem;
`;

export const MoreWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:20%;
    cursor:pointer;
    &>div{
        font-size:1.3rem;
        font-weight: 400;
        color: #F3AA3C;
        margin-right:0.3rem;
    }
    &>svg{
        width:1.1rem;
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