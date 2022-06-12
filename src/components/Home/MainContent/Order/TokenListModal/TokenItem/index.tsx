import React from 'react';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../../constants/order.constants';
import {Balance} from '../../../../../../models/balance.model';

type TokenItemProps = {
    setImportTokenModalVisible?: (boolean) => void,
    type: TOKEN_ITEM_TYPE,
    balance?: Balance,
}

const TokenItem = ({setImportTokenModalVisible, type, balance}: TokenItemProps) => {
    const isSearchType: boolean = type === TOKEN_ITEM_TYPE.SEARCH;
    const balanceOriginValue: number = +(balance?.balance ?? 0);
    const balanceValue: number = balanceOriginValue / 1e18;
    const token = balance?.token;
    const logo: string = token?.logo || '../../../images/default-token-logo.png';
    const symbol: string = token?.symbol ?? '';
    const name: string = token?.name ?? '';
    return (
        <S.ItemWrapper>
            <S.ItemContent>
                <img alt={symbol} src={logo}/>
                <S.ItemInfo>
                    {!isSearchType && (<S.Balance>{balanceValue} </S.Balance>)}
                    <S.Symbol>{symbol}</S.Symbol>
                    <S.Name> ({name})</S.Name>
                </S.ItemInfo>
            </S.ItemContent>
            {isSearchType && (
                <S.ImportButton onClick={() => setImportTokenModalVisible && setImportTokenModalVisible(true)}>Import</S.ImportButton>
            )}
        </S.ItemWrapper>
    )
}

export default TokenItem;