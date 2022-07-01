import React, {useState} from 'react';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../../constants/order.constants';
import {Balance} from '../../../../../../models/balance.model';
import {getFractionDigits} from '~utils/number.util';

type TokenItemProps = {
    onClick?: () => void,
    setImportedToken?: (token) => void,
    setImportTokenModalVisible?: (boolean) => void,
    type: TOKEN_ITEM_TYPE,
    balance?: Balance,
}

const DEFAULT_LOGO = '../../../images/default-token-logo.png';

const TokenItem = ({
    onClick,
    setImportedToken,
    setImportTokenModalVisible,
    type,
    balance
}: TokenItemProps) => {
    const isSearchType: boolean = type === TOKEN_ITEM_TYPE.SEARCH;
    const balanceValue: number = +(balance?.balance ?? 0) / 1e18;
    const token = balance?.token;
    const [logo, setLogo] = useState(token?.logo || DEFAULT_LOGO);
    const symbol: string = token?.symbol ?? '';
    const name: string = token?.name ?? '';
    const onLogoError = () => {
        setLogo(DEFAULT_LOGO);
    }
    const handleImportButtonClick = () => {
        setImportTokenModalVisible && setImportTokenModalVisible(true);
        setImportedToken && setImportedToken(balance);
    }
    return (
        <S.ItemWrapper style={{ cursor: isSearchType ? '' : 'pointer'}} onClick={onClick}>
            <S.ItemContent>
                <img alt={symbol} src={logo} onError={onLogoError}/>
                <S.ItemInfo style={{ width: isSearchType ? '20rem' : '100%'}}>
                    {!isSearchType && (<S.Balance>{!!balanceValue ? `${balanceValue.toFixed(getFractionDigits(balanceValue))} ` : ''}</S.Balance>)}
                    <S.Symbol>{symbol}</S.Symbol>
                    <S.Name> ({name})</S.Name>
                </S.ItemInfo>
            </S.ItemContent>
            {isSearchType && (
                <S.ImportButton onClick={handleImportButtonClick}>Import</S.ImportButton>
            )}
        </S.ItemWrapper>
    )
}

export default TokenItem;