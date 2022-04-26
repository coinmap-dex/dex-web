import styled from 'styled-components';

export const CollapseContainer = styled.div`
    background: #23304A !important;
`;

export const CollapseIconContainer = styled.div`
    display: table;
    margin: 0.5rem auto 1rem auto;
    background: #152442;
    width: 11.2rem;
    border: 0.1rem solid #2E3A52;
    box-sizing: border-box;
    border-radius: 7rem;
`;

export const CollapseIcon = styled.div`
    display: table;
    margin: 0 auto;
    width: 1.5rem;
    &>svg {
        padding-top: 0.3rem;
    }
`;
