import React, { useEffect, useState } from 'react'
import S from './styled';
import { useWeb3React } from '@web3-react/core';
import { useAxios, useCoinmapDex } from '~hooks';
import { formatAmount, getTokenName } from '~utils';
import PopupTableWrapper from '~components/Partials/PopupTableWrapper';
import SharkCoinIcon from '~svg/SharkCoinIcon';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
}

const tableColumns = [
    {
        index: 'type',
        label: 'Type',
        styles: {
            width: '8.5rem',
            paddingLeft: '3.2rem'
        }
    },
    {
        index: 'date',
        label: 'Date',
        styles: {
            width: '17rem'
        }
    },
    {
        index: 'priceUSD',
        label: 'Price USD',
        styles: {
            width: '12rem'
        }
    },
    {
        index: 'amountDEXT',
        label: 'Amount DEXT',
        styles: {
            width: '12rem'
        }
    },
    {
        index: 'totalBNB',
        label: 'Total BNB',
        styles: {
            width: '12rem'
        }
    },
    {
        index: 'maker',
        label: 'Maker',
        styles: {
            width: '14rem'
        }
    },
    {
        index: 'others',
        label: 'Others',
        styles: {
            width: '12.5rem'
        }
    }
];

const TradeHistoryModal = ({
    isVisible,
    setVisible
}: IActionConfirmModalProps) => {
    // TODO: Test data - Please remove when complete this task
    const tableData = [1, 2, 3, 4, 5].map((v) => {
        return {
            type: 'buy',
            date: '2021-12-14 14:15:26',
            priceUSD: '$0.41093846',
            amountDEXT: '1,213.3726',
            totalBNB: '0.95384304',
            maker: '0x8e43e8...e767',
            others: {
                children: <>
                    <SharkCoinIcon/>
                    <SharkCoinIcon/>
                    <SharkCoinIcon/>
                </>
            }
        }
    });

    return (
        <PopupTableWrapper
            title="TRADE HISTORY"
            isVisible={isVisible}
            setVisible={setVisible}
        >
            <S.Table columns={tableColumns as any} data={tableData} />
        </PopupTableWrapper>
    )
}

export default TradeHistoryModal;