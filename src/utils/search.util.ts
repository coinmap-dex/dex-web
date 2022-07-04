import {SearchResult} from '../models/search-result.model';
import {getStoredBalances} from '~utils/order.util';
import {Balance} from '../models/balance.model';
import {Token} from '../models/token.model';

export const isSearchResultImported = (searchResult: SearchResult) => {
    const storedBalances = getStoredBalances();
    for (let i = 0; i < storedBalances.length; i++) {
        if (storedBalances[i]?.token?.address === searchResult?.address) {
            return true;
        }
    }
    return false;
}

export const mapBalancesFromSearchResults = (searchResults: SearchResult[]): Balance[] => {
    return searchResults.map((result: SearchResult) => {
        return {
            token: {
                address: result.address ?? '',
                decimals: +result.decimals ?? 0,
                logo: result.logo ?? '',
                name: result.name ?? '',
                symbol: result?.symbol ?? '',
            } as Token,
        } as Balance;
    });
}

export const mapTokenFromSearchResult = (searchResult: SearchResult): Token => {
    return {
        address: searchResult.address ?? '',
        decimals: +searchResult.decimals ?? 0,
        logo: searchResult.logo ?? '',
        name: searchResult.name ?? '',
        symbol: searchResult?.symbol ?? '',
    } as Token;
}


const priorityBalanceAddresses = [
    '0x242a1fF6eE06f2131B7924Cacb74c7F9E3a5edc9'
];

export const isPrioritySearchResult = (searchResult: SearchResult) => {
    return priorityBalanceAddresses.includes(searchResult.address);
}
