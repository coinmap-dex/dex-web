import styled from 'styled-components';

export const MoreInfoExpandContainer = styled.div`
    background: #23304A !important;
    position:relative;
`;

export const MoreInfoExpandIconContainer = styled.div`
    margin: 1.648rem auto;
    position:relative;
    display:inline-block;
    &>img:nth-child(1){
        position:absolute;
        top:-7px;
        right:-7px;
    }
    &>img:nth-child(2){
        position:relative;
    }
    &>img:nth-child(3){
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`;
