import {Quotes} from './quotes.model';
import {Token} from './token.model';

export interface Balance {
    balance: string;
    quotes: Quotes;
    token: Token;
}
