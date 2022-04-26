import React from 'react'

import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '~hooks';
import { useGetWalletProfitableByUsdQuery } from '~store/modules/home/api';
import { setContract } from '~store/modules/home';
import { getWalletContracts } from './common';

const ProfitableByUsd = () => {
    const dispatch = useAppDispatch();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetWalletProfitableByUsdQuery(contract);
    return (
        <>
            {
                getWalletContracts(dispatch, setContract)('ProfitableByUsd',data, isLoading)
            }
        </>
    )
}

export default ProfitableByUsd