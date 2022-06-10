import React, { useEffect, useState } from 'react';
import S from './styled';
import UnionIcon from '~svg/Union';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect, useInactiveListener } from '~hooks';

import { injected, supportedChainIds } from "~configs/connectors";
import { InjectedConnector } from '@web3-react/injected-connector';
import TokenUpIcon from '~svg/TokenUpIcon';

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

  const [isShownDisconnectButton, setShownDisconnectButton] = useState<boolean>(false);
  let shownDisconnectButtonTimeOut;

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  const isSupportedChain = supportedChainIds.includes(chainId);

  const onDisconnectButtonMouseEnter = () => {
    clearTimeout(shownDisconnectButtonTimeOut);
    setShownDisconnectButton(true);
  }

  const handleHiddenDisconnectButton = () => {
    shownDisconnectButtonTimeOut = setTimeout(() => {
        setShownDisconnectButton(false);
    }, 500);
  }

  return (
    <S.HeaderUserWalletWrapper>
      <S.HeaderUnionIconWrapper>
        <UnionIcon />
      </S.HeaderUnionIconWrapper>
      {
        +localStorage.getItem('isConnected')! && account && isSupportedChain
          ? (
            <S.UserAccount>
              <S.AccountAddress
                href={`https://bscscan.com/address/${account}`}
                target={"blank_"}
                onMouseEnter={() => setShownDisconnectButton(true)}
                onMouseOut={handleHiddenDisconnectButton}
              >{` ${account.substring(0, 6)}...${account.substring(
                account.length - 6
              )}`}<TokenUpIcon/>
              </S.AccountAddress>
              {isShownDisconnectButton && (
                  <S.Logout
                      onClick={()=>{
                        localStorage.setItem('isConnected', '0');
                        deactivate();
                      }}
                      onMouseEnter={onDisconnectButtonMouseEnter}
                      onMouseOut={handleHiddenDisconnectButton}
                      
                  >
                    Disconnect
                  </S.Logout>
              )}
            </S.UserAccount>
          )
          : (
            <S.HeaderUserWalletButton
              onClick={() => {
                setActivatingConnector(injected);
                activate(injected);

                localStorage.setItem('isConnected', '1');
              }}
            >
              Connect
            </S.HeaderUserWalletButton>
          )
      }
    </S.HeaderUserWalletWrapper >
  )
}

export default UserWallet
