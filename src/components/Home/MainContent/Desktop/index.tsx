import React from 'react'
import { Col, Row } from 'sezy-design'

import _ from 'lodash';
import TokenTransaction from '../TokenTransaction';
import * as  S from './styled';
import Gas from '../Gas';
import Holder from '../Holder';
import SharkMoves from '../Shark';
import Volume from '../Volume';
import Contact from '../Contact';
import SocialNetwork from '../Social';
import Rating from '../Rating';
import Pool from '../Pool';
import Tokenomics from '../Tokenomics';
import Wallets from '../Wallets';
import Inflattion from '../Inflation';
import Order from '../Order';
import TVChartContainer from '../TradingView';

const Desktop = () => {
    return (
        <S.MainContentDesktop>
            <S.MainContentRow gaps={[0.8, 0.8]}>
                <Col grid={24} gutter={{ sm: 24, lg: 8, xl: 6 }}>
                    <TokenTransaction />
                </Col>
                <Col grid={24} gutter={{ sm: 24, lg: 8, xl: 12 }}>
                    {/* <TVChartContainer /> */}
                </Col>
                <Col grid={24} gutter={{ sm: 24, lg: 8, xl: 6 }}>
                    <Order />
                </Col>
            </S.MainContentRow>
            <Row gaps={[0.8, 0.8]} {...{ style: { alignItems: "stretch" } }}>
                <Col grid={24} gutter={{ sm: 24, lg: 16, xl: 18 }}>
                    <S.MainContentRow gaps={[0.8, 0.8]} {...{ height: { sm: 40, lg: 40 } }}>
                        <Col grid={24} gutter={{ sm: 24, lg: 12, xl: 8 }}>
                            <Gas />
                        </Col>
                        <Col grid={24} gutter={{ sm: 24, lg: 12, xl: 16 }}>
                            <Holder />
                        </Col>
                    </S.MainContentRow>
                    <S.MainContentRow gaps={[0.8, 0.8]} >
                        <Col grid={24} gutter={{ sm: 24, lg: 12, xl: 8 }}>
                            <SharkMoves />
                        </Col>
                        <Col grid={24} gutter={{ sm: 24, lg: 12, xl: 16 }}>
                            <Volume />
                        </Col>
                    </S.MainContentRow>
                </Col>
                <S.Pool grid={24} gutter={{ sm: 24, lg: 8, xl: 6 }}>
                    <Tokenomics />
                    <Pool />
                </S.Pool>
            </Row>

            <S.MainContentRow gaps={[0.8, 0]} {...{ height: { sm: "auto", lg: "81.5" } }}>
                <Col grid={24} gutter={{ sm: 24, lg: 8, xl: 6 }}>
                    <Wallets />
                </Col>

                <Col grid={24} gutter={{ sm: 24, lg: 16, xl: 18 }}  {...{ style: { background: 'transparent' } }}>
                    <S.MainContentRow gaps={[0.8, 0]} {...{ height: { sm: 40, lg: 40 } }}>
                        <Col grid={24} gutter={{ sm: 24, lg: 12, xl: 16 }}>
                            <SocialNetwork />
                        </Col>
                        <S.RatingColumn grid={24} gutter={{ sm: 24, lg: 12, xl: 8 }}>
                            <Rating />
                            <Inflattion />
                        </S.RatingColumn>
                    </S.MainContentRow>
                    <S.MainContentRow {...{ height: { sm: 'auto', lg: 40 } }}>
                        <Contact />
                    </S.MainContentRow>
                </Col>
            </S.MainContentRow>
        </S.MainContentDesktop>
    );
}

export default Desktop
