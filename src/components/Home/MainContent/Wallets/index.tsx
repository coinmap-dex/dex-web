import React from 'react'

import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { Label } from 'sezy-design';
import { t } from 'i18next';
import TotalTransaction from './TotalTransaction';
import ProfitableByUsd from './ProfitableByUsd';
import ProfitableByPercent from './ProfitableByPercent';

const Wallets = () => {
    return (
        <>
            <MS.MainContentTitleBox>
                <Label>
                    {t('wallets.title1')}
                </Label>
            </MS.MainContentTitleBox>
            <S.walletItems>
                <TotalTransaction />
            </S.walletItems>
            <MS.MainContentTitleBox {...{ style: { borderTop: '1px solid #2C3649' } }}>
                <Label>
                    {t('wallets.title2')}
                </Label>
            </MS.MainContentTitleBox>
            <S.walletItems>
                <ProfitableByUsd />
            </S.walletItems>
            <MS.MainContentTitleBox {...{ style: { borderTop: '1px solid #2C3649' } }}>
                <Label>
                    {t('wallets.title3')}
                </Label>
            </MS.MainContentTitleBox>
            <S.walletItems>
                <ProfitableByPercent />
            </S.walletItems>
        </>
    )
}


export default Wallets