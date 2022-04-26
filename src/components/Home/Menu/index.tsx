import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import _ from 'lodash';
import S from './styled';
import { useBreakpoint } from '~hooks';
import SearchBar from '../SearchBar';
import NavigationIcon from '~svg/Navigation';
import LeftMenu from '../LeftMenu';

const Menu = () => {
    const grid = 4;
    const breakpoint = useBreakpoint();
    const [isLeftMenuActive, setLeftMenuActive] = React.useState(false);
    return (
        <S.MenuSection>
            {
                breakpoint('xs') && !breakpoint('sm')
                    ? <S.NavigationWrapper>
                        <S.NavigationIconWrapper>
                            <NavigationIcon onClick={() => setLeftMenuActive(true)} />
                        </S.NavigationIconWrapper>
                        <LeftMenu isActive={isLeftMenuActive} setActive={setLeftMenuActive} />
                        <SearchBar />
                    </S.NavigationWrapper>
                    : <S.MenuRow>
                        <Col grid={grid}>Home</Col>
                        <Col grid={grid}>Data</Col>
                        <Col grid={grid}>Trade</Col>
                        <Col grid={grid}>Shark - Trader</Col>
                        <Col grid={grid}>Bot</Col>
                        <Col grid={grid}>More</Col>
                    </S.MenuRow>

            }
        </S.MenuSection>
    )
}


export default Menu