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
    padding-right: 6rem;
`;

export const FooterLeftWrapper = styled.div`
    display: flex;
`;

export const FooterSocialIcons = styled.div`
    border-left: #181E2F 1px solid;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    a {
        margin-right: 2rem;
    }
`;

export const FooterCopyright= styled.span`
    color: #858D9A;
    font-size: 1.2rem;
    text-align: center;
    @media ${breakpoints.sm}{
        font-size: 1.6rem;
    }
`;