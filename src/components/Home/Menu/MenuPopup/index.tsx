import React from 'react';
import S from './styled';
import Logo from '~svg/logo';
import Coinmap from '~svg/coinmap';
import Times from '~svg/Times';
import Popup1 from '~svg/Popup1';

const MenuPopup = ({ isVisible, setVisible }) => {
    return (
        <S.Modal isVisible={isVisible} setVisible={setVisible}>
            <S.Background1><Popup1/></S.Background1>
            <S.Background2 src='/images/popup2.png'/>
            <S.Background3 src='/images/popup3.png'/>
            <S.Background4 src='/images/popup4.png'/>
            <S.Background5 src='/images/popup5.png'/>
            <S.Exit onClick={()=>setVisible(false)}><Times/></S.Exit>
            <S.LogoWrapper>
                <Logo />
                <Coinmap />
            </S.LogoWrapper>
            <S.Pro>PRO</S.Pro>
            <S.Title1>
                Gain a competitive advantage over<br />competitors with in-depth data and
            </S.Title1>
            <S.Title2>
                professional trading tools.
            </S.Title2>
            <S.Title3>
                CoinMap Pro is one hub for all your cryptocurrency data and research needs.
                <br />
                Optimize your portfolio and discover invisible market opportunities
            </S.Title3>
            <S.Button>
                Get Started
            </S.Button>
        </S.Modal>
    )
}


export default MenuPopup;