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
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}

const Home = () => {
    // const router = useRouter()
    return (
        <Provider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Header />
                <Menu />
                <TokenHeader />
                <MainContent />
                <Footer />
            </Web3ReactProvider>
        </Provider>
    )
}


export default Home
