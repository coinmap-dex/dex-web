import React, { useEffect, useState } from 'react'
import S from './styled';
import { useWeb3React } from '@web3-react/core';
import {useAppSelector, useAxios, useCoinmapDex} from '~hooks';
import PopupTableWrapper from '~components/Partials/PopupTableWrapper';
import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import {Token} from '../../../../../models/token.model';
import {mapTokenFromOverviewData} from '~utils/token.util';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
}

const tableColumns = [
    {
        index: 'payToken',
        label: 'Pay Token',
        styles: {
            width: '10rem',
            paddingLeft: '3.2rem'
        }
    },
    {
        index: 'buyToken',
        label: 'Buy Token',
        styles: {
            width: '10rem'
        }
    },
    {
        index: 'type',
        label: 'Type',
        styles: {
            width: '11rem'
        }
    },
    {
        index: 'price',
        label: 'Price',
        styles: {
            width: '13rem'
        }
    },
    {
        index: 'amount',
        label: 'Amount',
        styles: {
            width: '15rem'
        }
    },
    {
        index: 'total',
        label: 'Total',
        styles: {
            width: '17rem'
        }
    },
    {
        index: 'deadline',
        label: 'Deadline',
        styles: {
            width: '13rem'
        }
    },
    {
        index: 'status',
        label: 'Status',
        styles: {
            width: '13rem'
        }
    },
];

const OrderModal = ({
    isVisible,
    setVisible
}: IActionConfirmModalProps) => {
    //refactor later
    const context = useWeb3React();
    const { account } = context;
    const { response } = useAxios({
        method: 'get',
        url: `https://api.dextrading.io/api/v1/limitorder?account=${account}`,
        headers: JSON.stringify({ accept: '*/*' }) as any,
    });
    const currentToken: Token = useAppSelector(state => state.home.currentToken);
    const currentTokenAddress = currentToken.address ?? '';
    const { cancelOrder } = useCoinmapDex();
    const [data, setData] = useState<any>([]);
    const [tableData, setTableData] = useState<any>([]);
    const [tokenList, setTokenList] = useState<Token[]>([]);

    const getTokenOverviewDataList = (response: any[]) => {
        const responseTokenAddresses: string[] = [];
        response.forEach(order => {
            responseTokenAddresses.push(order?.payToken ?? '');
            responseTokenAddresses.push(order?.buyToken ?? '');
        });
        const filterTokenAddresses: string[] = _.uniqBy(responseTokenAddresses).filter(address => !!address);
        axios.all(filterTokenAddresses.map((address) => axios.get(`https://api.dextrading.io/api/v1/overview/${address}`))).then(
            (responses) => {
                const tokens: Token[] = [];
                (responses as any[]).forEach(res => tokens.push(mapTokenFromOverviewData(res.data)));
                setTokenList(tokens);
            })
    };

    const getTokenName = (address: string): string => {
        return tokenList.filter(token => token.address.toLowerCase() === address.toLowerCase())[0]?.symbol.toUpperCase();
    }

    useEffect(() => {
        if (response !== null) {
            setData(response);
            getTokenOverviewDataList(response);
        }
    }, [response]);

    useEffect(() => {
        if (tokenList.length > 0) {
            setTableData(data.map((order) => {
                const isBuyType: boolean = order.isBuy !== undefined
                    ? order.isBuy
                    : order.buyToken?.toLowerCase() === currentTokenAddress.toLowerCase();
                const payAmount = +order.payAmount / 1e18;
                const buyAmount = +order.buyAmount / 1e18;
                const amount = payAmount;
                const total = isBuyType ? buyAmount : 1 / buyAmount;
                const price = isBuyType ? payAmount / total : total / payAmount;
                return {
                    type: {
                        children: isBuyType
                            ? <span style={{ color: '#26E1CD' }}>Buy Limit</span>
                            : <span style={{ color: '#EF505A' }}>Sell Limit</span>
                    },
                    payToken: getTokenName(order.payToken),
                    buyToken: getTokenName(order.buyToken),
                    amount,
                    total,
                    price,
                    deadline: moment.unix(order.deadline).format("DD/MM/YYYY"),
                    status: {
                        children: <>
                            {order.status == 0 &&
                                <span>
                            Open <button
                                    onClick={async () => {
                                        await cancelOrder(account, order.salt)
                                    }}>x</button>
                        </span>}
                            {order.status == 1 && <span >Filled</span>}
                            {order.status == 2 && <span >Canceled</span>}
                        </>

                    }
                }
            }));
        }
    }, [tokenList]);

    return (
        <PopupTableWrapper
            title="YOUR ORDERS"
            isVisible={isVisible}
            setVisible={setVisible}
        >
            <S.Table columns={tableColumns as any} data={tableData} />
        </PopupTableWrapper>
    )
}

export default OrderModal;