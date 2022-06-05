import React, {useState} from 'react'
import { Col, Dropdown, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import S from './styled';
import * as MS from '../styled';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~hooks';
import { useGetTransactionQuery } from '~store/modules/home/api';
import ArrowIcon from '~svg/arrow';
import TradeHistoryModal from '~components/Home/MainContent/TokenTransaction/TradeHistoryModal';

const TokenTransaction = () => {
    const { t } = useTranslation();
    const [isTradeHistoryModalVisible, setTradeHistoryModalVisible] = useState(false);
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetTransactionQuery(contract, {
        pollingInterval: 3000,
    });
    console.log('aaaaa data', data);

    const tableColumns = getTableColumns(t('price'), t('amount'), t('total'));

    const transactionData = [...(data?.transaction || [])]?.reverse();
    const lastPrice = transactionData?.[0];
    const secondPrice = transactionData?.[1];

    const openTradeHistoryTable = () => {
        setTradeHistoryModalVisible(true);
    }

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
                <S.HighlightDataMain data-type={priceDirectionMapper[+(lastPrice?.price > secondPrice?.price)]} >
                    <Label>${lastPrice?.price?.toFixed(5)}</Label>
                    <Arrow size='s' direction={priceDirectionMapper[+(lastPrice?.price > secondPrice?.price)] as any} />
                </S.HighlightDataMain>
                <S.HighlightDataSub>${secondPrice?.price?.toFixed(5)}</S.HighlightDataSub>
            </S.HighlightData>
            <S.MoreWrapper>
                <Dropdown placement='tl' trigger='click'>
                    <S.MoreLabel>More</S.MoreLabel>
                    <div onClick={openTradeHistoryTable}>TRADE HISTORY</div>
                </Dropdown>
                <ArrowIcon />
            </S.MoreWrapper>
        </S.HighLightDataWrapper>
        <S.DataTable type='nude' columns={tableColumns as any} data={convertTransactionData(transactionData)} hasHeader={false} />
        <TradeHistoryModal isVisible={isTradeHistoryModalVisible} setVisible={setTradeHistoryModalVisible}/>
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

const convertTransactionData = (transactionData) => transactionData?.map(d => ({
    ...d,
    price: {
        children: d.price,
        style: {
            color: transactionPriceColorMapper[d.type],
        },
    }
}));

const transactionPriceColorMapper = {
    SELL: '#EC6649',
    BUY: '#26E1CD',
}

const priceDirectionMapper = ['down', 'up']

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