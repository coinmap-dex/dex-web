import React from 'react'
import { Col, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~hooks';
import { useGetTokenomicsQuery, useGetTransactionQuery } from '~store/modules/home/api';
import { thousandSeparator } from '~utils';
import AuditIcon from '~svg/audit';
import ExpandBar from '~components/Home/MainContent/Mobile/ExpandBar';
import CollapseBar from '~components/Home/MainContent/Mobile/CollapseBar';

const Tokenomics = () => {
    const { t } = useTranslation();
    const contract = useAppSelector(state => state.home.contract)
    const tokenSymbol = useAppSelector(state => state.home.tokenSymbol)
    const { data, isLoading, error } = useGetTokenomicsQuery(contract);

    return <div>
        <MS.MainContentTitleBox>
            <Label>
                {tokenSymbol}
            </Label>
            <S.TokenomicsAudit>
                <div>Audits:</div>
                <S.TokenomicsAuditIconLink href={data?.audits}>
                    <img src="./images/audit.png" />
                    <AuditIcon />
                </S.TokenomicsAuditIconLink>
            </S.TokenomicsAudit>
        </MS.MainContentTitleBox>
        <S.TokenomicsContent>
            <S.TokenomicsContentCirculating>
                <div>{t('tokenomics.circulatingSupply')}</div>
                <div>
                    <span>{thousandSeparator(data?.circulatingSupply)} BNB</span>
                    <span>100%</span>
                </div>
            </S.TokenomicsContentCirculating>
            <S.TokenomicsContentOther>
                <div>
                    <span>{t('tokenomics.maxSupply')}</span>
                    <span>{thousandSeparator(data?.maxSupply)}</span>
                </div>
                <div>
                    <span>{t('tokenomics.totalSupply')}</span>
                    <span>{thousandSeparator(data?.totalSupply)}</span>
                </div>
            </S.TokenomicsContentOther>
        </S.TokenomicsContent>
    </div>;
}

export default Tokenomics
