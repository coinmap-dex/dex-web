import {LOCAL_STORAGE} from '../constants/local-storage.constants';
import {Balance} from '../models/balance.model';
import _ from 'lodash';
import tokenList from '~configs/list';

export const getStoredBalances = (): Balance[] => {
    const storedBalanceString = localStorage.getItem(LOCAL_STORAGE.STORED_BALANCES);
    return storedBalanceString ? JSON.parse(storedBalanceString) : [];
}

export const setStoredBalances = (balances: Balance | Balance[]): void => {
    let receivedBalances: Balance[];
    if (!Array.isArray(balances)) {
        receivedBalances = [balances];
    } else {
        receivedBalances = [...balances];
    }
    const storedBalances = getStoredBalances();
    storedBalances.push(...receivedBalances);
    const filteredBalances = _.uniqBy(storedBalances, (balance: Balance) => balance.token?.address);
    localStorage.setItem(LOCAL_STORAGE.STORED_BALANCES, JSON.stringify(filteredBalances));
}

export const getTokenFromList = (symbol) => {
    if (!symbol)
        return {}
    const upperCaseSymbol = symbol.toUpperCase();
    return tokenList.tokens.find(v => v.symbol === upperCaseSymbol);
}
