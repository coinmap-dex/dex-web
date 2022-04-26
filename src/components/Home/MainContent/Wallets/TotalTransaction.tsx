import React from 'react'

import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '~hooks';
import { useGetWalletTotalTransactionQuery } from '~store/modules/home/api';
import { setContract } from '~store/modules/home';
import { getWalletContracts } from './common';

const TotalTransaction = () => {
    const dispatch = useAppDispatch();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetWalletTotalTransactionQuery(contract);
    return (
        <>
            {
                getWalletContracts(dispatch, setContract)('TotalTransaction', data, isLoading)
            }
        </>
    )
}

export default TotalTransaction