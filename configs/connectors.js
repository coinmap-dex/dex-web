import { InjectedConnector } from '@web3-react/injected-connector';

export const supportedChainIds = [56]
export const injected = new InjectedConnector({ supportedChainIds: [1, 56, 97, 1337] })
export const injectedLogout = new InjectedConnector({ supportedChainIds: [] })
