import React from 'react'
import { Col, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~hooks';
import { useGetTransactionQuery } from '~store/modules/home/api';
import ArrowIcon from '~svg/arrow';

const TokenTransaction = () => {
    const { t } = useTranslation();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetTransactionQuery(contract, {
        pollingInterval: +(process.env.POLLING_INTERVAL || 0),
    });

    const tableColumns = getTableColumns(t('price'), t('amount'), t('total'));
    return <>
        {/* <S.Title size='l'>{t('token')} {t('transaction')}</S.Title> */}
        <MS.MainContentTitleBox>
            <Label>
                {t('token')} {t('transaction')}
            </Label>
        </MS.MainContentTitleBox>
        <S.HeaderTable type='nude' columns={tableColumns as any} />
        <S.HighLightDataWrapper>
            <S.HighlightData>
                <S.HighlightDataMain data-type='up' >
                    <Label>${data?.price?.toFixed(5)}</Label>
                    <Arrow size='s' direction='up' />
                </S.HighlightDataMain>
                <S.HighlightDataSub>${data?.price?.toFixed(5)}</S.HighlightDataSub>
            </S.HighlightData>
            <S.MoreWrapper>
                <Label>More</Label>
                <ArrowIcon/>
            </S.MoreWrapper>
        </S.HighLightDataWrapper>
        <S.DataTable1 type='nude' columns={tableColumns as any} data={data?.buyOrder} hasHeader={false} />
        <S.DataTable2 type="nude" columns={tableColumns as any} data={data?.sellOrder} hasHeader={false} />
    </>
}

const getTableColumns = (price, amount, total) => [
    {
        index: 'price',
        label: `${price}(USDT)`,
    },
    {
        index: 'amount',
        label: `${amount}(BTC)`,
    },
    {
        index: 'total',
        label: total,
        align: 'right'
    }
];

const tableData = [
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
];

export default TokenTransaction