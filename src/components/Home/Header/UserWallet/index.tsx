import React, { useEffect, useState } from 'react';
import * as  S from './styled';
import UnionIcon from '~svg/Union';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect, useInactiveListener } from '~hooks';

import { injected, supportedChainIds } from "~configs/connectors";
import { InjectedConnector } from '@web3-react/injected-connector';

const UserWallet = () => {
  const context = useWeb3React();
  const {
    connector,
    account,
    activate,
    deactivate,
    chainId = 0,
    library
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<InjectedConnector>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  const supportedChain = supportedChainIds.includes(chainId)

  return (
    <S.HeaderUserWalletWrapper>
      <S.HeaderUnionIconWrapper>
        <UnionIcon />
      </S.HeaderUnionIconWrapper>
      <S.HeaderUserWalletButton
        onClick={() => {
          setActivatingConnector(injected);
          activate(injected);
        }}
      >
        Connect
      </S.HeaderUserWalletButton>
    </S.HeaderUserWalletWrapper >
  )
}

export default UserWallet
