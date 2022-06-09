import React from 'react'

import _ from 'lodash';
import { Shimmer } from 'sezy-design';

export const WalletShimmer = (walletIndex) => {
    return _.range(10).map((v, i) => <Shimmer isLoading={true} key={`wallet${walletIndex}_${i}`}>
        <a />
    </Shimmer>)
}

export const getWalletContracts = (dispatch, setContract) => (key, data, isLoading) => {
    return isLoading
        ? <WalletShimmer />
        : data?.map((d, index) =>
            <a key={`wallet_${key}_${index}`}
               // onClick={() => d.address && dispatch(setContract(d.address))}
               href={`https://bscscan.com/address/${d.address}`}
               target="_blank"
               rel="noreferrer"
            >
                {d.address}
            </a>
        )
}

