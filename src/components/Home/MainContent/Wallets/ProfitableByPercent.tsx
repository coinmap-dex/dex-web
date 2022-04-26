import React from 'react'

import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '~hooks';
import { useGetWalletProfitableByPercentQuery } from '~store/modules/home/api';
import { setContract } from '~store/modules/home';
import { getWalletContracts } from './common';

const ProfitableByPercent = () => {
    const dispatch = useAppDispatch();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetWalletProfitableByPercentQuery(contract);
    return (
        <>
            {
                getWalletContracts(dispatch, setContract)('ProfitableByPercent',data, isLoading)
            }
        </>
    )
}

export default ProfitableByPercent