import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import _ from 'lodash';
import S from './styled';
import { useBreakpoint } from '~hooks';
import SearchBar from '../SearchBar';
import NavigationIcon from '~svg/Navigation';
import LeftMenu from '../LeftMenu';
import MenuPopup from './MenuPopup';

const Menu = () => {
    const grid = 4;
    const breakpoint = useBreakpoint();
    const [isLeftMenuActive, setLeftMenuActive] = React.useState(false);
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const navigateToHome = () => {
        window.open('/home', '_self');
    }
    return (
        <>
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
                            <Col grid={grid}><div onClick={navigateToHome}>Home</div></Col>
                            <Col grid={grid}><div onClick={()=>setPopupVisible(true)}>Data</div></Col>
                            <Col grid={grid}><div onClick={()=>setPopupVisible(true)}>Trade</div></Col>
                            <Col grid={grid}><div onClick={()=>setPopupVisible(true)}>Shark - Trader</div></Col>
                            <Col grid={grid}><div onClick={()=>setPopupVisible(true)}>Bot</div></Col>
                            <Col grid={grid}><div onClick={()=>setPopupVisible(true)}>More</div></Col>
                        </S.MenuRow>

                }
            </S.MenuSection>
            {
                isPopupVisible && <MenuPopup isVisible={isPopupVisible} setVisible={setPopupVisible} />
            }
        </>
    )
}


export default Menu