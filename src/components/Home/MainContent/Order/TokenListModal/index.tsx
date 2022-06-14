import React, {useState} from 'react';
import TokenModalWrapper from '~components/Home/MainContent/Order/TokenModalWrapper';
import TokenSearchBar from '~components/Home/MainContent/Order/TokenListModal/TokenSearchBar';
import TokenItem from '~components/Home/MainContent/Order/TokenListModal/TokenItem';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../constants/order.constants';
import {useWeb3React} from '@web3-react/core';
import {useGetBalancesByAccountQuery} from '~store/modules/home/api';
import {Balance} from '../../../../../models/balance.model';
import {getStoredBalances, getTokenFromList} from '~utils/order.util';
import _ from 'lodash';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
    setImportTokenModalVisible: (boolean) => void,
    setSelectedImportToken: (token) => void,
    setPayToken: (paySymbol) => void,
    searchKeyword: string,
    setSearchKeyword: (keyWord) => void,
}

const TokenListModal = ({
    isVisible,
    setVisible,
    setImportTokenModalVisible,
    setSelectedImportToken,
    setPayToken,
    searchKeyword,
    setSearchKeyword
}: IActionConfirmModalProps) => {
    const [searchResultTokens, setSearchResultTokens] = useState<Balance[]>([]);
    const isSearching = !!searchKeyword;
    const context = useWeb3React();
    const { account } = context;
    // const { data: balanceData } = useGetBalancesByAccountQuery(account);
    const { data: balanceData } = useGetBalancesByAccountQuery('0x6924C22Ad6cf7b2b89291A1aEfD5eb8476E78E04');

    const mergeAccountBalancesWithStoredBalances = (
        accountBalances: Balance[],
        storedBalances: Balance[]
    ): Balance[] => {
        storedBalances.forEach((storedBalance: Balance, index: number) => {
            accountBalances.forEach((accountBalance: Balance) => {
                if (storedBalance?.token?.address === accountBalance?.token?.address) {
                    storedBalances[index] = {...accountBalance};
                }
            })
        });
        return _.uniqBy([...accountBalances, ...storedBalances], (balance: Balance) => balance.token?.address);
    }

    const getBalances = (): Balance[] => {
        const accountBalances = balanceData?.balances ?? []
        const storedBalances = getStoredBalances();
        return mergeAccountBalancesWithStoredBalances(accountBalances, storedBalances);
    }

    const balances: Balance[] = getBalances();

    const handleTokenItemClick = (paySymbol) => {
        setPayToken(getTokenFromList(paySymbol));
        setVisible(false);
    }

    return (
        <TokenModalWrapper
            isVisible={isVisible}
            setVisible={setVisible}
            title="select a token"
        >
            <>
                <TokenSearchBar setSearchResultTokens={setSearchResultTokens} setSearchKeyword={setSearchKeyword} />
                <S.ItemContainer>
                    {isSearching && searchResultTokens.map((resultToken: Balance) => {
                        return (
                            <TokenItem
                                key={resultToken?.token?.address}
                                type={TOKEN_ITEM_TYPE.SEARCH}
                                balance={resultToken}
                                setSelectedImportToken={setSelectedImportToken}
                                setImportTokenModalVisible={setImportTokenModalVisible} />
                        );
                    })}
                    {!isSearching && balances.map((balance: Balance) => {
                        return (
                            <TokenItem
                                onClick={() => handleTokenItemClick(balance?.token?.symbol)}
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
