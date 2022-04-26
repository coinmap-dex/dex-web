import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import _ from 'lodash';
import * as  S from './styled';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import CurrencyDownIcon from '~svg/CurrencyDown'
import CurrencyUpIcon from '~svg/CurrencyUp'

const Currencies = () => {
    return (
        <S.Currencies>
            <S.Currency>
                <img src='https://i.ibb.co/gM8rRTQ/Bitcoin.png' />
                <div>
                    <div>
                        <S.CurrencyPrice>50.234</S.CurrencyPrice>
                        <S.CurrencySymbol>BTC</S.CurrencySymbol>
                    </div>
                    <S.CurrencyLineChart>
                        <S.CurrencyLineWrapper>
                            <LineChart width={30} height={20} data={data}>
                                <defs>
                                    <linearGradient id="colorCurrencyDown" x1="0%" y1="0" x2="100%" y2="0">
                                        <stop offset="0%" stopColor="#A330FF" stopOpacity={0.1} />
                                        <stop offset="100%" stopColor="#BC3DCB" />
                                    </linearGradient>
                                </defs>
                                <Line type="monotone" dataKey="pv" stroke="url(#colorCurrencyDown)" strokeWidth={2} dot={false}
                                />
                            </LineChart>
                        </S.CurrencyLineWrapper>
                        <S.CurrencyDownIconWrapper>
                            <CurrencyDownIcon />
                        </S.CurrencyDownIconWrapper>
                        <S.CurrencyRate {...{rate: -1}}>-5.23%</S.CurrencyRate>
                    </S.CurrencyLineChart>
                </div>
            </S.Currency>
            <S.Currency>
                <img src='https://i.ibb.co/gM8rRTQ/Bitcoin.png' />
                <div>
                    <div>
                        <S.CurrencyPrice>23.234</S.CurrencyPrice>
                        <S.CurrencySymbol>ETH</S.CurrencySymbol>
                    </div>
                    <S.CurrencyLineChart>
                        <S.CurrencyLineWrapper>
                            <LineChart width={30} height={20} data={data}>
                                <defs>
                                    <linearGradient id="colorCurrencyUp" x1="0%" y1="0" x2="100%" y2="0">
                                        <stop offset="0%" stopColor="#A330FF" stopOpacity={0.1} />
                                        <stop offset="100%" stopColor="#50E3C2" />
                                    </linearGradient>
                                </defs>
                                <Line type="monotone" dataKey="pv" stroke="url(#colorCurrencyUp)" strokeWidth={2} dot={false}
                                />
                            </LineChart>
                        </S.CurrencyLineWrapper>
                        <S.CurrencyDownIconWrapper>
                            <CurrencyUpIcon />
                        </S.CurrencyDownIconWrapper>
                        <S.CurrencyRate {...{rate: 1}}>15.12%</S.CurrencyRate>
                    </S.CurrencyLineChart>
                </div>
            </S.Currency>
            {/* <S.Currency>
                <img src='https://i.ibb.co/gM8rRTQ/Bitcoin.png' />
                <div>
                    <div>
                        <S.CurrencyPrice>23.234</S.CurrencyPrice>
                        <S.CurrencySymbol>BTC</S.CurrencySymbol>
                    </div>
                    <S.CurrencyLineChart>
                        <S.CurrencyLineWrapper>
                            <LineChart width={35} height={20} data={data}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                                        <stop offset="0%" stopColor="#A330FF" stopOpacity={0.1} />
                                        <stop offset="100%" stopColor="#BC3DCB" />
                                    </linearGradient>
                                </defs>
                                <Line type="monotone" dataKey="pv" stroke="url(#colorUv)" strokeWidth={2} dot={false}
                                />
                            </LineChart>
                        </S.CurrencyLineWrapper>
                        <S.CurrencyDownIconWrapper>
                            <CurrencyDownIcon />
                        </S.CurrencyDownIconWrapper>
                        <S.CurrencyRate>-5.23%</S.CurrencyRate>
                    </S.CurrencyLineChart>
                </div>
            </S.Currency> */}


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

export default Currencies