import React from 'react'
import * as  S from './styled';
import { useBreakpoint } from '~hooks';
import ClosedMenuIcon from '~svg/ClosedMenuIcon';
import TokenHeader from '~components/Home/TokenHeader';
import VectorIcon from '~svg/VectorIcon';
import SearchBar from '~components/Home/SearchBar';
import { Drawer } from 'sezy-design';

const menuElements = [
    { title: 'Home' },
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
    const onClickClose = ()=>setActive(false);
    return breakpoint('xs') && !breakpoint('sm') ? (
        <S.LeftMenuSideBarWrapper isActive={isActive} onClickClose={onClickClose}>
            <S.MenuHeader grid={3}>
                <img alt="coinmap-logo" src='https://i.ibb.co/HrMKdPK/coinmap-logo.png' />
                <ClosedMenuIcon onClick={onClickClose}/>
            </S.MenuHeader>
            <TokenHeader />
            <S.MenuList>
                {menuElements.map((element, index) => (
                    <S.MenuItem key={index}>
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
    ) : null
}

export default LeftMenu;
