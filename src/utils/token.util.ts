import {Token} from '../models/token.model';

export const mapTokenFromOverviewData = (overviewData: any): Token => {
    return {
        address: overviewData?.platforms?.['binance-smart-chain'] ?? '',
        decimals: +overviewData?.decimals ?? 0,
        logo: overviewData?.image?.thumb ?? '',
        name: overviewData?.name ?? '',
        symbol: overviewData?.symbol ?? '',
    } as Token;
}
