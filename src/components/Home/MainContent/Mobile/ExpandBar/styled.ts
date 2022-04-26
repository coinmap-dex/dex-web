import styled from 'styled-components';

export const ExpandContent = styled.div`
    background: #0F1A30;
    padding: 0.5rem;
    border: 0.1rem solid #2E3A52;
    display: flex;
`;

export const ExpandIconContainer = styled.div`
    background: #152442;
    width: 3rem;
    height: 3rem;
    &>svg {
        &>path {
            stroke: #B9C2D0;
        }
    }
`;

export const ExpandTitle = styled.div`
    position: absolute;
    left: 50%;
    font-weight: 500;
    font-size: 1.62119rem;
    line-height: 1.172rem;
    color: #848C99;
    margin-top: 1rem;
    text-transform: uppercase;
    &>div {
        position: relative;
        left: -50%;
    }
`;

export const ExpandContainer = styled.div`
    background: #23304A !important;
    padding-bottom: 0.5rem;
    &:active {
        &>${ExpandContent} {
            background: #50B6D4;
            border-radius: 2rem;
            &>${ExpandIconContainer} {
                background: #FFFFFF;
                border-radius: 5rem;
                &>svg {
                    &>path {
                        stroke: #50B6D4;
                    }
                }
            }
            &>${ExpandTitle} {
                margin-top: 0.6rem;
                font-weight: 500;
                font-size: 1.62119rem;
                line-height: 1.9rem;
                color: #FFFFFF;
            }
        }
    }
`;
