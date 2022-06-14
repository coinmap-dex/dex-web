import React from 'react'
import * as  S from './styled';
import { useBreakpoint } from '~hooks';
import ClosedMenuIcon from '~svg/ClosedMenuIcon';
import TokenHeader from '~components/Home/TokenHeader';
import VectorIcon from '~svg/VectorIcon';
import SearchBar from '~components/Home/SearchBar';
import MenuPopup from '~components/Home/Menu/MenuPopup';

const menuElements = [
    { title: 'Data' },
    { title: 'Trade' },
    { title: 'Shark Trader' },
    { title: 'Bot' },
    { title: 'More' },
    { title: 'Settings' }
];

const LeftMenu = ({
    isActive = false,
    setActive,
}) => {
    const breakpoint = useBreakpoint();
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const onClickClose = ()=>setActive(false);
    const navigateToHome = () => {
        window.open('/', '_self');
    }
    return breakpoint('xs') && !breakpoint('sm') ? (
        <>
            <S.LeftMenuSideBarWrapper isActive={isActive} onClickClose={onClickClose}>
                <S.MenuHeader grid={3}>
                    <img alt="coinmap-logo" src='https://i.ibb.co/HrMKdPK/coinmap-logo.png' />
                    <ClosedMenuIcon onClick={onClickClose}/>
                </S.MenuHeader>
                <TokenHeader isLeftMenu={true}/>
                <S.MenuList>
                    <S.MenuItem onClick={navigateToHome}>
                        <div>Home</div>
                        <VectorIcon />
                    </S.MenuItem>
                    {menuElements.map((element) => (
                        <S.MenuItem key={element.title} onClick={()=>setPopupVisible(true)}>
                            <div>{element.title}</div>
                            <VectorIcon />
                        </S.MenuItem>
                    ))}
                </S.MenuList>
                <S.MenuFooter>
                    <SearchBar />
                    <S.Advertisement>
                        <S.AdTitleContainer>
                            <S.AdTitle>Keu Goi Hanh Dong</S.AdTitle>
                            <S.AdButton>Connect</S.AdButton>
                        </S.AdTitleContainer>
                        <S.AdDescription>Sed ut mauris ac at non metus eget velns.</S.AdDescription>
                    </S.Advertisement>
                </S.MenuFooter>
            </S.LeftMenuSideBarWrapper>
            {
                isPopupVisible && <MenuPopup isVisible={isPopupVisible} setVisible={setPopupVisible} />
            }
        </>
    ) : null
}

export default LeftMenu;
