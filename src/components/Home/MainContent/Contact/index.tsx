import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import { Col } from 'sezy-design';
import WebIcon from '~svg/web';
import DocumentIcon from '~svg/document';
import ComputerIcon from '~svg/computer';
import CheckIcon from 'sezy-design/components/icon/solid/check';
import MailIcon from '~svg/MailIcon';
import DiscordIcon from '~svg/DiscordIcon';
import TwitterIcon from '~svg/TwitterIcon';
import TelegramIcon from '~svg/TelegramIcon';

const Contact = () => {
    return (
        <div>
            <S.ContactRow1>
                <Col grid={24} gutter={{ sm: 24, lg: 10, xl: 10 }}>
                    <S.ContactBackgroundImage src='https://i.ibb.co/YbBvYXY/contact-background.png' />
                    <S.ContactColLeftCoinmap>
                        <div>COINMAP</div>
                        <div>24</div>
                    </S.ContactColLeftCoinmap>
                </Col>
                <S.ContactInfo grid={24} gutter={{ sm: 24, lg: 14, xl: 14 }}>
                    <S.ContactInfoItem>
                        <WebIcon />
                        <span>Web: coinmap......</span>
                    </S.ContactInfoItem>
                    <S.ContactInfoItem>
                        <DocumentIcon />
                        <span>Sàn CEX đang niêm yết Token: Gate , huobi, Kucoin, binance, abc ....</span>
                    </S.ContactInfoItem>
                    <S.ContactInfoItem>
                        <ComputerIcon />
                        <span>Thông tin, tin tức mới nhất về Token</span>
                    </S.ContactInfoItem>
                </S.ContactInfo>
            </S.ContactRow1>

            <S.ContactRow2 {...{ background: '#1C2740' }}>
                <S.ContactInfo2 grid={24} gutter={{ sm: 24, lg: 10, xl: 10 }}>
                    <S.ContactInfoItem2>
                        <CheckIcon />
                        <span>Token chỉ mua, không bán được</span>
                    </S.ContactInfoItem2>
                    <S.ContactInfoItem2>
                        <CheckIcon />
                        <span>Có logo</span>
                    </S.ContactInfoItem2>
                    <S.ContactInfoItem2>
                        <CheckIcon />
                        <span>Ngày tạo token: 21/12/2021</span>
                    </S.ContactInfoItem2>
                </S.ContactInfo2>
                <S.ContactInfo2 grid={24} gutter={{ sm: 24, lg: 14, xl: 14 }}>
                    <S.ContactInfoItem2>
                        <CheckIcon />
                        <span>Khác.........</span>
                    </S.ContactInfoItem2>
                    <S.ContactInfoChannels>
                        <img src="https://i.ibb.co/ygdN0m8/bscscan-2.png" />
                        <img src="https://i.ibb.co/tD6PmKc/image-2.png" />
                        <img src="https://i.ibb.co/bsfwsSt/image-3.png" />
                        <TelegramIcon />
                        <TwitterIcon />
                        <DiscordIcon />
                        <MailIcon />
                    </S.ContactInfoChannels>
                    <S.ContactInfoMarketCap>
                        <span>Market Cap: (Includes locked, excludes burned)</span>
                        <span>$12,779,249</span>
                    </S.ContactInfoMarketCap>
                </S.ContactInfo2>
            </S.ContactRow2>
        </div>
    )
}

export default Contact