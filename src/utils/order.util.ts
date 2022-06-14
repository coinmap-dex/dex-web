import {LOCAL_STORAGE} from '../constants/local-storage.constants';
import {Balance} from '../models/balance.model';
import _ from 'lodash';

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
