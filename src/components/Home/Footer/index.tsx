import React from 'react'
import _ from 'lodash';
import * as  S from './styled';

const Footer = () => {
    return (
        <S.FooterSection>
            <S.FooterLogo src='https://i.ibb.co/WsHjXZ9/logo-2.png' />
            <S.FooterCopyright>
                © 2021 CoinMap. All rights reserved | Ads & Marketing: marketing@coinmap.tech
            </S.FooterCopyright>
        </S.FooterSection>
    )
}

export default Footer