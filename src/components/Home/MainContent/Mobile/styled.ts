import { Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const MainContent= styled(Section)`
    background: #23304A;
    &>div{
        padding: 1.5rem 1rem 0 1rem;
        &>div{
            background:#0F1A30;
            display:flex;
            flex-direction:column;
            >div:nth-child(4) {
                >div:nth-child(2) {
                    @media ${breakpoints.xs}{
                        width: 90%;
                        overflow-x: scroll;
                        &::-webkit-scrollbar {
                          height: 0.2rem;
                        }
                    }
                }
            }
        }
    }
`;

export const ChartWrapper = styled.div`
    height: 30rem;
    margin-bottom: 0.5rem;
`;

export const TokenomicsPool = styled.div`
    padding-bottom: 0;
`;

export const TransactionWrapper = styled.div`
    height: 50rem;
    padding-bottom: 1.5rem;
`;

export const HolderWrapper = styled.div`
    height: 30rem;
    margin-top: 0.8rem;
`;

export const VolumeWrapper = styled.div`
    height: 30rem;
    margin-top: 0.8rem;
`;

export const SocialWrapper = styled.div`
    height: 30rem;
    margin-top: 0.8rem;
`;

export const GasWrapper = styled.div`
    height: 35rem;
    margin-top: 0.8rem;
`;

export const SharkWrapper = styled.div`
    height: 40rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
`;

export const RatingWrapper = styled.div`
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
`;

export const Wrapper = styled.div`
    height: 30rem;
`;
