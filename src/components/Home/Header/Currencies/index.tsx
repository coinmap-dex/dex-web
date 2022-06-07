import React from 'react'
import * as  S from './styled';
import { Line, LineChart } from 'recharts';
import CurrencyDownIcon from '~svg/CurrencyDown'
import CurrencyUpIcon from '~svg/CurrencyUp'
import { useGetFavoriteListQuery } from '~store/modules/home/api';
import {Favorite} from '../../../../models/favorite.model';
import {thousandSeparator} from '~utils';
import BitcoinIcon from '~svg/BitcoinIcon';
import EthereumIcon from '~svg/EthereumIcon';
import BinanceCoinIcon from '~svg/BinanceCoinIcon';

const COLOR_CURRENCY_UP_ID = 'colorCurrencyUp';
const COLOR_CURRENCY_DOWN_ID = 'colorCurrencyDown';
const BTC_USDT = 'BTCUSDT';
const ETH_USDT = 'ETHUSDT';
const BNB_USDT = 'BNBUSDT';

const Currencies = () => {
    const { data, isLoading, error } = useGetFavoriteListQuery(null);
    const favouriteList: Favorite[] = (data && [...data]) ?? [];
    return (
        <S.Currencies>
            {favouriteList.map((favorite: Favorite) => {
                const priceChangePercent = Number(favorite?.priceChangePercent) ?? 0;
                const isPriceChangeUp = priceChangePercent >= 0;
                const colorCurrencyId = isPriceChangeUp ? COLOR_CURRENCY_UP_ID : COLOR_CURRENCY_DOWN_ID;
                const lastPrice = parseFloat(favorite?.lastPrice) ?? 0;
                return (
                    <S.Currency key={lastPrice}>
                        {getCoinIcon(favorite?.symbol)}
                        <div>
                            <div>
                                <S.CurrencyPrice>{thousandSeparator(lastPrice)}</S.CurrencyPrice>
                                <S.CurrencySymbol>{getCurrencyUnit(favorite?.symbol)}</S.CurrencySymbol>
                            </div>
                            <S.CurrencyLineChart>
                                <S.CurrencyLineWrapper>
                                    <LineChart width={30} height={20} data={data}>
                                        <defs>
                                            <linearGradient id={colorCurrencyId} x1="0%" y1="0" x2="100%" y2="0">
                                                <stop offset="0%" stopColor="#A330FF" stopOpacity={0.1} />
                                                <stop offset="100%" stopColor={isPriceChangeUp ? '#50E3C2' : '#BC3DCB'} />
                                            </linearGradient>
                                        </defs>
                                        <Line type="monotone" dataKey="pv" stroke={`url(#${colorCurrencyId})`} strokeWidth={2} dot={false}
                                        />
                                    </LineChart>
                                </S.CurrencyLineWrapper>
                                <S.CurrencyDownIconWrapper>
                                    {isPriceChangeUp ? <CurrencyUpIcon/> : <CurrencyDownIcon/>}
                                </S.CurrencyDownIconWrapper>
                                <S.CurrencyRate {...{rate: priceChangePercent}}>{priceChangePercent}%</S.CurrencyRate>
                            </S.CurrencyLineChart>
                        </div>
                    </S.Currency>
                );
            })}
            <S.AddCurrency>+ Add Currency</S.AddCurrency>
        </S.Currencies>
    )
}

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const getCurrencyUnit = (symbol: string) => {
    switch (symbol) {
        case BTC_USDT:
            return 'BCT';
        case ETH_USDT:
            return 'ETH';
        case BNB_USDT:
            return 'BNB';
    }
    return '';
}

const getCoinIcon = (symbol: string) => {
    switch (symbol) {
        case BTC_USDT:
            return <BitcoinIcon/>;
        case ETH_USDT:
            return <EthereumIcon/>;
        case BNB_USDT:
            return <BinanceCoinIcon/>;
    }
    return <></>;
}

export default Currencies