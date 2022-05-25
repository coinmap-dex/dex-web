import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import S from './styled';
import { Modal } from 'sezy-design';
import { useWeb3React } from '@web3-react/core';
import { useAxios, useCoinmapDex } from '~hooks';
import { formatAmount, getTokenName } from '~utils';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
}

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

    const tableColumns = [
        {
            index: 'payToken',
            label: 'Pay Token',
            styles: {
                width: '100px'
            }
        },
        {
            index: 'payAmount',
            label: 'Pay Amount',
            styles: {
                width: '100px'
            }
        },
        {
            index: 'buyToken',
            label: 'Buy Token',
            styles: {
                width: '100px'
            }
        },
        {
            index: 'buyAmount',
            label: 'Buy Amount',
            styles: {
                width: '100px'
            }
        },
        {
            index: 'deadline',
            label: 'Deadline',
        },
        {
            index: 'status',
            label: 'Status',
            styles: {
                width: '100px'
            }
        },
    ];

    const tableData = data.map((v) => {
        return {
            payToken: getTokenName(v.payToken),
            payAmount: formatAmount(v.payAmount, v.payToken),
            buyToken: getTokenName(v.buyToken),
            buyAmount: formatAmount(v.buyAmount, v.buyToken),
            deadline: new Date(v.deadline * 1000),
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

    return (
        <Modal isVisible={isVisible} setVisible={setVisible}>
            <S.Wrapper>
                <S.Title>YOUR ORDERS</S.Title>
                <S.Table columns={tableColumns as any} data={tableData} />
            </S.Wrapper>
        </Modal>
    )
}

export default OrderModal