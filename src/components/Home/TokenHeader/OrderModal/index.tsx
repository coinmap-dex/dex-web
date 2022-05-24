import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import S from './styled';
import { Modal } from 'sezy-design';
import { useWeb3React } from '@web3-react/core';
import { useAxios, useCoinmapDex } from '~hooks';

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
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);


    
    // const tableColumns = [
    //     {
    //         index: 'index',
    //         label: t('no'),
    //         align: 'center',
    //         styles: {
    //             width: '48px'
    //         }
    //     },
    //     {
    //         index: 'name',
    //         label: t('name'),
    //     },
    //     {
    //         index: 'date',
    //         label: t('date'),
    //         styles: {
    //             width: '150px'
    //         }
    //     },
    //     {
    //         index: 'time_from',
    //         label: t('startingTime'),
    //         styles: {
    //             width: '128px'
    //         }
    //     },
    //     {
    //         index: 'duration',
    //         label: t('duration'),
    //         styles: {
    //             width: '96px'
    //         }
    //     },
    //     {
    //         index: 'setting',
    //         label: '',
    //         align: 'center',
    //         styles: {
    //             width: '48px'
    //         }
    //     },
    // ];

    // const tableData = data.map((d) => {
    //     return {
    //         index: ,
    //     }
    // });

    return (
        <Modal isVisible={isVisible} setVisible={setVisible}>
            <S.Wrapper>
                aaaaaaaaaaaaaaaaaa
            </S.Wrapper>
        </Modal>
    )
}

export default OrderModal