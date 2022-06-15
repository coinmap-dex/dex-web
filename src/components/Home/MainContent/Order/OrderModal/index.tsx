import React, { useEffect, useState } from 'react'
import S from './styled';
import { useWeb3React } from '@web3-react/core';
import { useAxios, useCoinmapDex } from '~hooks';
import { formatAmount, getTokenName } from '~utils';
import PopupTableWrapper from '~components/Partials/PopupTableWrapper';
import moment from 'moment';

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
    const { cancelOrder } = useCoinmapDex();
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    const tableData = data.map((v) => {
        return {
            // payToken: getTokenName(v.payToken),
            // payAmount: formatAmount(v.payAmount, v.payToken),
            // buyToken: getTokenName(v.buyToken),
            // buyAmount: formatAmount(v.buyAmount, v.buyToken),
            type: 'limit',
            payToken: getTokenName(v.payToken),
            buyToken: getTokenName(v.buyToken),
            amount: formatAmount(v.payAmount, v.payToken),
            total: formatAmount(v.buyAmount, v.buyToken),
            price: +formatAmount(v.payAmount, v.payToken) / +formatAmount(v.buyAmount, v.buyToken),
            deadline: moment.unix(v.deadline * 1000).format("DD/MM/YYYY"),
            status: {
                children: <>
                    {v.status == 0 &&
                        <span>
                            Open <button
                                onClick={async () => {
                                    await cancelOrder(account, v.salt)
                                }}>x</button>
                        </span>}
                    {v.status == 1 && <span >Filled</span>}
                    {v.status == 2 && <span >Canceled</span>}
                </>

            }
        }
    });

    // TODO: Test data - Please remove when complete this task
    // const tableData = [1, 2, 3, 4, 5].map((v) => {
    //     return {
    //         payToken: 'BUSD',
    //         buyToken: 'BNB',
    //         type: 'Sell Limit',
    //         price: '50.00 ≈$50 (BUSD)',
    //         amount: '28.0000/0.0000 0.00% (BNB)',
    //         total: '1400.00/$ 1400 ≈0.00/≈$ 0 (BUSD)',
    //         deadline: '21-09-30',
    //         status: {
    //             children: <>
    //                 <span>Success</span>
    //             </>
    //         }
    //     }
    // });

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