import React from 'react';
import * as  S from './styled';
import {useBreakpoint} from '~hooks';
import TelegramIcon from '~svg/TelegramIcon';
import TwitterIcon from '~svg/TwitterIcon';
import FacebookIcon from '~svg/FacebookIcon';
import DiscordIcon from '~svg/DiscordIcon';
import YoutubeIcon from '~svg/YoutubeIcon';

const Footer = () => {
    const breakpoint = useBreakpoint();
    return (
        <S.FooterSection>
            <S.FooterLeftWrapper>
                <S.FooterLogo src='https://i.ibb.co/WsHjXZ9/logo-2.png' />
                {breakpoint('md') && (
                    <S.FooterSocialIcons>
                        <a href="https://t.me/coinmapdextrading" target="_blank" rel="noreferrer">
                            <TelegramIcon/>
                        </a>
                        <a href="https://twitter.com/CoinmapDEX" target="_blank" rel="noreferrer">
                            <TwitterIcon/>
                        </a>
                        <a href="https://discord.gg/fEgg5jzNS9" target="_blank" rel="noreferrer">
                            <DiscordIcon/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCDGZIkyP-MpfhW11juVbsRg" target="_blank" rel="noreferrer">
                            <YoutubeIcon/>
                        </a>
                        <a href="https://www.facebook.com/CoinmapTrading" target="_blank" rel="noreferrer">
                            <FacebookIcon/>
                        </a>
                    </S.FooterSocialIcons>
                )}
            </S.FooterLeftWrapper>
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