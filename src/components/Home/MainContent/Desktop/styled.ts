import { Col, Label, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const MainContentDesktop = styled(Section)`
    background: #23304A;
    &>div{
        padding: 1.5rem 2rem;
    }
`;
export const MainContentMobile = styled(Section)`
    background: #23304A;
    &>div{
        padding: 1.5rem 2rem;
    }
`;

export const MainContentRow = styled(Row)`
    align-items: stretch;
    background: #23304A;
    &>*>*{
        background: #0F1A30;
        display:flex;
        flex-direction:column;
        height: ${props => props?.['height']?.['sm'] === 'auto' ? 'auto' : `${props?.['height']?.['sm'] || '56'}rem`};
        @media ${breakpoints.lg}{
            height: ${props => props?.['height']?.['lg'] === 'auto' ? 'auto' : `${props?.['height']?.['lg'] || '56'}rem`};
        }
    }
    &>div{
        padding-bottom: 1.5rem;
    }
`;

export const Pool = styled(Col)`
    padding-bottom: 1.6rem;
    &>div{
        box-sizing:border-box;
        display:flex;
        height:100%;
        flex-direction:column;
        padding-bottom:1.8rem;
        gap: 1rem 0;
        background: #0F1A30;
        @media ${breakpoints.sm}{
            // height:40rem;
        }
    }
`;

export const MainContentTitleBox = styled.div`
    display:flex;
    border-bottom: 1px solid #2C3649;
    justify-content:space-between;
    align-items:center;
    padding: 0 1.8rem;
    font-weight:bold;
    &>div:first-child{
        font-size:1.8rem;
        padding: 1.4rem 0 1rem;
        display: block;
        text-transform: uppercase;
    }
`;

export const MainContentContentBox = styled.div`
    padding: 0 1.8rem;
`;

export const RatingColumn = styled(Col)`
    &>div{
        gap: 0;
        padding:0;
        height:100%;
        justify-content:space-between;
    }
`;

