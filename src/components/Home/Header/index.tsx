import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import _ from 'lodash';
import * as  S from './styled';
import Currencies from './Currencies';
import UserWallet from './UserWallet';

const Header = () => {
    const grid = 3;
    return (
        <S.HeaderSection>
            <S.HeaderRow>
                <S.HeaderLogoCol grid={3}>
                    <img src='https://i.ibb.co/HrMKdPK/coinmap-logo.png' />
                </S.HeaderLogoCol>
                <Col grid={1} />
                <Col grid={15} gutter={{ sm: 16 }}>
                    <Currencies />
                </Col>
                <S.HeaderUserWalletCol grid={5} gutter={{ sm: 4 }}>
                    {/* <UserWallet /> */}
                </S.HeaderUserWalletCol>
            </S.HeaderRow>
        </S.HeaderSection>
    )
}


export default Header