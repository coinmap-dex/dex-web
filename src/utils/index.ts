import moment from "moment";
import { formatEther, formatUnits } from '@ethersproject/units';
import tokenList from "~configs/list";
import { BigNumber } from '@ethersproject/bignumber'

export function thousandSeparator(v) {
    if (!v)
        return v;
    var numParts = v?.toString().replaceAll(',', '')?.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
}

export const formatDateXAxis = tickItem => {
    return moment.unix(tickItem).format('MMM DD')
}

export const formatYAxisNumber = (number) => {
    if (number > 1000000000)
        return (number / 1000000000).toString() + 'B';
    if (number > 1000000)
        return (number / 1000000).toString() + 'M';
    if (number > 1000)
        return (number / 1000).toString() + 'K';
    // return number.toString() + '%';
    return number.toString();
}

export function getTokenName(address) {
    return tokenList.tokens.filter(i => i.address == address)[0].symbol
}

export function amountToBN(amount, token) {
    const decimals = tokenList.tokens.filter(i => i.address == token)[0].decimals;
    return BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
}

export function formatAmount(x, token, f = 4) {
    const decimals = tokenList.tokens.filter(i => i.address == token)[0].decimals
    let s = formatUnits(x, decimals);
    const dot = s.indexOf(".");
    if (dot >= 0) s = s.substr(0, dot + 1 + f);
    return s;
}

export function formatBalance(x, f = 4) {
    let s = formatEther(x);
    const dot = s.indexOf(".");
    if (dot >= 0) s = s.substr(0, dot + 1 + f);
    return s;
}

export function numberWithCommas(x) {
    if (!x) return "0";
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}