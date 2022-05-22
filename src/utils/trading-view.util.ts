import {TRADING_VIEW} from '../constants/trading-view.constants';

export const getNumberOnDecimalPartOfPriceAfterZero = (): string => {
    let zeroPart = '';
    for (let i = 0; i < TRADING_VIEW.DISPLAYED_NUMBER_ON_DECIMAL_PART_OF_PRICE_AFTER_ZERO; i++) {
        zeroPart += '0';
    }
    return zeroPart;
}
