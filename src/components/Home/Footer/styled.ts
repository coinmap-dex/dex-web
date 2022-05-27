import { Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const FooterSection = styled(Section)`
    background: #0F1A30;
    padding: 1.2rem 1rem;
    @media ${breakpoints.lg} {
        margin-top: -1.5rem;
    }
    &>div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        @media ${breakpoints.sm}{
            flex-direction:row;
        }
    }
`;

export const FooterLogo= styled.img`
    width: 20.2rem;
    height: 3.8rem;
`;

export const FooterCopyright= styled.span`
    color: #858D9A;
    font-size: 1.2rem;
    text-align: center;
    @media ${breakpoints.sm}{
        font-size: 1.6rem;
    }
`;