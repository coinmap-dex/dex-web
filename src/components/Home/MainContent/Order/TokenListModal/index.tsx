import React, {useState} from 'react';
import TokenModalWrapper from '~components/Home/MainContent/Order/TokenModalWrapper';
import TokenSearchBar from '~components/Home/MainContent/Order/TokenListModal/TokenSearchBar';
import TokenItem from '~components/Home/MainContent/Order/TokenListModal/TokenItem';
import S from './styled';
import {TOKEN_ITEM_TYPE} from '../../../../../constants/order.constants';
import {useWeb3React} from '@web3-react/core';
import {Balance} from '../../../../../models/balance.model';
import {getStoredBalances} from '~utils/order.util';
import _ from 'lodash';

interface IActionConfirmModalProps {
    accountBalances: Balance[],
    isVisible: boolean,
    setVisible: (boolean) => void,
    setImportTokenModalVisible: (boolean) => void,
    setSelectedImportToken: (token) => void,
    isBuyType: boolean,
    setPayToken: (paySymbol) => void,
    setBuyToken: (buySymbol) => void,
    searchKeyword: string,
    setSearchKeyword: (keyWord) => void,
}

const TokenListModal = ({
    accountBalances,
    isVisible,
    setVisible,
    setImportTokenModalVisible,
    setSelectedImportToken,
    isBuyType,
    setPayToken,
    setBuyToken,
    searchKeyword,
    setSearchKeyword
}: IActionConfirmModalProps) => {
    const [searchResultTokens, setSearchResultTokens] = useState<Balance[]>([]);
    const isSearching = !!searchKeyword;

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
        const storedBalances = getStoredBalances();
        return mergeAccountBalancesWithStoredBalances(accountBalances, storedBalances);
    }

    const balances: Balance[] = getBalances();

    const handleTokenItemClick = (balance: Balance) => {
        const token = balance?.token;
        if (isBuyType) {
            setPayToken(token);
        } else {
            setBuyToken(token)
        }
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
                                onClick={() => handleTokenItemClick(balance)}
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
