import React from 'react'
import _ from 'lodash';
import * as  S from './styled';
import {useBreakpoint} from '~hooks';

const Footer = () => {
    const breakpoint = useBreakpoint();
    return (
        <S.FooterSection>
            <S.FooterLogo src='https://i.ibb.co/WsHjXZ9/logo-2.png' />
            <S.FooterCopyright>
                {(breakpoint('xs') && !breakpoint('sm')) ? (
                    ['© 2021 CoinMap. All rights reserved', <br key={0}/>, 'Ads & Marketing: marketing@coinmap.tech']
                ): (
                    '© 2021 CoinMap. All rights reserved | Ads & Marketing: marketing@coinmap.tech'
                )}
            </S.FooterCopyright>
        </S.FooterSection>
    )
}

export default Footer