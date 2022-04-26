import styled from "styled-components";
import { Col, Drawer } from 'sezy-design/index';

export const LeftMenuSideBarWrapper = styled(Drawer)`
    &>div:last-child{
        background: #000010;
    }
`;

export const MenuHeader = styled(Col)`
    text-align:center;
    width: auto;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    &>img {
        padding: 0.2rem 0;
        height: 4rem;
    }
    &>svg {
        margin-top: 1rem;
    }
`;

export const MenuList = styled.div`
`;

export const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2rem;
    text-transform: capitalize;
    color: #A8BCDE;
    padding: 1.75rem 1.8rem;
    border-bottom: 0.063rem solid #23304A;
    cursor: pointer;
    &>svg {
        margin-top: 0.5rem;
        &>path {
            fill: #A8BCDE;
        }
    }
`;

export const MenuFooter = styled.div`
    width: -webkit-fill-available;
    margin: 0 1rem 2rem 1rem;
    position: absolute;
    bottom: 0;
`;

export const Advertisement = styled.div`
    border: 0.063rem solid rgba(168, 188, 222, 0.4);
    box-sizing: border-box;
    border-radius: 0.3rem;
    margin-top: 1.5rem;
    padding: 1.5rem 0.8rem 1.5rem 1.4rem;
`;

export const AdTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AdTitle = styled.div`
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2rem;
    text-transform: capitalize;
    color: #D9E6FC;
`;

export const AdButton = styled.div`
    text-align: center;
    background: linear-gradient(123.77deg, #993381 29.96%, #BB5387 78.97%);
    border-radius: 1.544rem;
    padding: 0.4rem 1.35rem;
    font-weight: 400;
    line-height: 1.167rem;
`;

export const AdDescription = styled.div`
    color: #D9E6FC;
    margin-top: 0.652rem;
`;
