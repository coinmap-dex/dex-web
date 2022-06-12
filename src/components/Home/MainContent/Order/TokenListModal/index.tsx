import React, {useState} from 'react';
import TokenModalWrapper from '~components/Home/MainContent/Order/TokenModalWrapper';
import TokenSearchBar from '~components/Home/MainContent/Order/TokenListModal/TokenSearchBar';
import TokenItem from '~components/Home/MainContent/Order/TokenListModal/TokenItem';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../constants/order.constants';
import {useWeb3React} from '@web3-react/core';
import {useGetBalancesByAccountQuery} from '~store/modules/home/api';
import {Balance} from '../../../../../models/balance.model';
import {Token} from '../../../../../models/token.model';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
    setImportTokenModalVisible: (boolean) => void,
}

const TokenListModal = ({
    isVisible,
    setVisible,
    setImportTokenModalVisible
}: IActionConfirmModalProps) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const isSearching = !!searchInput;
    const context = useWeb3React();
    const { account } = context;
    // const { data: balanceData } = useGetBalancesByAccountQuery(account);
    const { data: balanceData } = useGetBalancesByAccountQuery('0x6924C22Ad6cf7b2b89291A1aEfD5eb8476E78E04');
    const balances: Balance[] = balanceData?.balances ?? [];
    return (
        <TokenModalWrapper
            isVisible={isVisible}
            setVisible={setVisible}
            title="select a token"
        >
            <>
                <TokenSearchBar setSearchInput={setSearchInput} />
                <S.ItemContainer>
                    {isSearching && (
                        <TokenItem type={TOKEN_ITEM_TYPE.SEARCH} setImportTokenModalVisible={setImportTokenModalVisible} />
                    )}
                    {!isSearching && balances.map((balance: Balance) => {
                        return (
                            <TokenItem
                                key={balance?.token?.address}
                                type={TOKEN_ITEM_TYPE.BALANCE}
                                balance={balance} />
                        );
                    })}
                </S.ItemContainer>
            </>
        </TokenModalWrapper>
    );
}

export default TokenListModal;
