import { Col, Input, Label, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const HeaderSection = styled(Section)`
    padding: 0 1rem;
    @media ${breakpoints.sm} {
        padding: 0 4.5rem;
    }
`;
export const HeaderRow= styled(Row)`
    align-items:center;
`;
export const HeaderLogoCol= styled(Col)`
    text-align:center;
    & img{
        padding:0.2rem 0;
        height:5rem;
        @media ${breakpoints.sm} {
            height:8rem;
        }
    }
`;
export const HeaderUserWalletCol= styled(Col)`
    
`;