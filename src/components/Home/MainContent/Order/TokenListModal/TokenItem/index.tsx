import React, {useState} from 'react';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../../constants/order.constants';
import {Balance} from '../../../../../../models/balance.model';

type TokenItemProps = {
    setSelectedImportToken?: (token) => void,
    setImportTokenModalVisible?: (boolean) => void,
    type: TOKEN_ITEM_TYPE,
    balance?: Balance,
}

const DEFAULT_LOGO = '../../../images/default-token-logo.png';

const TokenItem = ({
    setSelectedImportToken,
    setImportTokenModalVisible,
    type,
    balance
}: TokenItemProps) => {
    const isSearchType: boolean = type === TOKEN_ITEM_TYPE.SEARCH;
    const balanceOriginValue: number = +(balance?.balance ?? 0);
    const balanceValue: number = balanceOriginValue / 1e18;
    const token = balance?.token;
    const [logo, setLogo] = useState(token?.logo || DEFAULT_LOGO);
    const symbol: string = token?.symbol ?? '';
    const name: string = token?.name ?? '';
    const onLogoError = () => {
        setLogo(DEFAULT_LOGO);
    }
    const handleImportButtonClick = () => {
        setImportTokenModalVisible && setImportTokenModalVisible(true);
        setSelectedImportToken && setSelectedImportToken(balance);
    }
    return (
        <S.ItemWrapper>
            <S.ItemContent>
                <img alt={symbol} src={logo} onError={onLogoError}/>
                <S.ItemInfo style={{ width: isSearchType ? '20rem' : '100%'}}>
                    {!isSearchType && (<S.Balance>{!!balanceValue ? `${balanceValue} ` : ''}</S.Balance>)}
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