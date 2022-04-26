import React, { useState } from 'react';
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
import CollapseBar from '~components/Home/MainContent/Mobile/CollapseBar';
import ExpandBar from '~components/Home/MainContent/Mobile/ExpandBar';
import MoreInfoExpandBar from '~components/Home/MainContent/Mobile/MoreInfoExpandBar';
import TVChartContainer from '~components/Home/MainContent/TradingView';

const Mobile = () => {
    const [isShownInfoSection, setShownInfoSection] = useState<boolean>(false);
    const [isShownTradeSection, setShownTradeSection] = useState<boolean>(false);
    const [isShownMoreInfoSection, setShownMoreInfoSection] = useState<boolean>(false);

    const onInfoExpandClick = (): void => {
        setShownInfoSection(true);
    }
    const onInfoCollapseClick = (): void => {
        setShownInfoSection(false);
    }
    const onTradeExpandClick = (): void => {
        setShownTradeSection(true);
    }
    const onTradeCollapseClick = (): void => {
        setShownTradeSection(false);
    }
    const onMoreInfoExpandClick = (): void => {
        setShownMoreInfoSection(true);
    }
    const onMoreInfoCollapseClick = (): void => {
        setShownMoreInfoSection(false);
    }
    return (
        <S.MainContent>
            {/* <Holder /> */}
            <S.ChartWrapper>
                <TVChartContainer />
            </S.ChartWrapper>
            {isShownInfoSection ? (
                <S.TokenomicsPool>
                    <Tokenomics />
                    <Pool />
                    <CollapseBar onClick={onInfoCollapseClick} />
                </S.TokenomicsPool>
            ): (
                <ExpandBar
                    title="Info"
                    onClick={onInfoExpandClick}
                />
            )}
            {isShownTradeSection ? (
                <div>
                    <Order />
                    <CollapseBar onClick={onTradeCollapseClick} />
                </div>
            ): (
                <ExpandBar
                    title="Trade"
                    onClick={onTradeExpandClick}
                />
            )}
            <S.TransactionWrapper>
                <TokenTransaction />
            </S.TransactionWrapper>
            {isShownMoreInfoSection ? (
                <>
                    <S.HolderWrapper>
                        <Holder />
                    </S.HolderWrapper>
                    <S.VolumeWrapper>
                        <Volume />
                    </S.VolumeWrapper>
                    <S.SocialWrapper>
                        <SocialNetwork />
                    </S.SocialWrapper>
                    <S.GasWrapper>
                        <Gas />
                    </S.GasWrapper>
                    <S.SharkWrapper>
                        <SharkMoves />
                    </S.SharkWrapper>
                    <div>
                        <Wallets />
                    </div>
                    <S.RatingWrapper>
                        <Rating />
                        <Inflattion />
                    </S.RatingWrapper>
                    <div>
                        <Contact />
                    </div>
                    <CollapseBar onClick={onMoreInfoCollapseClick} />
                </>
            ): (
                <MoreInfoExpandBar onClick={onMoreInfoExpandClick} />
            )}
        </S.MainContent>
    )
}


export default Mobile
