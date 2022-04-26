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
import { Provider } from 'react-redux';
import { store } from '~store';
import Footer from './Footer';
import '../../../polyfills';

const Home = () => {
    // const router = useRouter()
    return (
        <Provider store={store}>
            <Header />
            <Menu />
            <TokenHeader />
            <MainContent />
            <Footer />
        </Provider>
    )
}


export default Home
