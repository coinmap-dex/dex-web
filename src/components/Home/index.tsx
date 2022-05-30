import React from 'react'
import { Col, Row, Section } from 'sezy-design'

import _ from 'lodash';
// import { Logo } from '~components/icon';
import MainContent from '~components/Home/MainContent';
import * as  S from './styled';
import '~css/default';
import '~css/fonts';
import '~css/variables';
import TokenHeader from './TokenHeader';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import '../../../polyfills';
import { useParams } from 'react-router-dom';
import { setContract } from '~store/modules/home';
import { useAppDispatch } from '~hooks';

const Home = () => {
    const { address } = useParams();
    const dispatch = useAppDispatch();
    address && dispatch(setContract(address));
    return (
        <>
            <S.HeaderWrapper>
                <Header />
                <Menu />
            </S.HeaderWrapper>
            <TokenHeader />
            <MainContent />
            <Footer />
        </>
    )
}


export default Home
