import {NUMBER} from '../constants/number.constants';

export const getFractionDigits = (num: number): number => {
    let fractionDigits = NUMBER.DEFAULT_FRACTION_DIGITS;
    const convertedNumber = exponentialToDecimal(num);
    const [wholePart, decimalPart] = convertedNumber.toString().split('.');
    if (+wholePart === 0 && decimalPart) {
        for (let i = 0; i < decimalPart.length; i++) {
            if (decimalPart.charAt(i) === '0') {
                fractionDigits++;
            } else {
                break;
            }
        }
    }
    return fractionDigits;
}

export const exponentialToDecimal = (exponentialNumber: number | string): number | string => {
    const sign = +exponentialNumber < 0 ? "-" : "",
        toStr = exponentialNumber.toString();
    if (!/e/i.test(toStr)) {
        return exponentialNumber;
    }
    const [lead, decimal, pow] = exponentialNumber.toString()
        .replace(/^-/, "")
        .replace(/^([0-9]+)(e.*)/, "$1.$2")
        .split(/e|\./);
    return +pow < 0 ?
        sign + "0." + "0".repeat(Math.max(Math.abs(+pow) - 1 || 0, 0)) + lead + decimal :
        sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)));
}
