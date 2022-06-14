import React from 'react'
import S from './styled';
import {useGetSearchMutation} from '~store/modules/home/api';
import _ from 'lodash';
import {Balance} from '../../../../../../models/balance.model';
import {SearchResult} from '../../../../../../models/search-result.model';
import {Token} from '../../../../../../models/token.model';
import {getStoredBalances} from '~utils/order.util';

type TokenSearchBarProps = {
    setSearchResultTokens: (balances) => void;
    setSearching: (boolean) => void;
}

const TokenSearchBar = ({setSearchResultTokens, setSearching}: TokenSearchBarProps) => {
    const [requestSearch, { isLoading: isSearchLoading }] = useGetSearchMutation();

    const filterDuplicatedStoredBalances = (searchResults: SearchResult[]) => {
        const storedBalances = getStoredBalances();
        return searchResults.filter((result: SearchResult) => {
            for (let i = 0; i < storedBalances.length; i++) {
                if (storedBalances[i]?.token?.address === result?.address) {
                    return false;
                }
            }
            return true;
        });
    }

    const mapBalancesFromSearchResults = (searchResults: SearchResult[]): Balance[] => {
        return searchResults.map((result: SearchResult) => {
            return {
                token: {
                    address: result.address ?? '',
                    decimals: +result.decimals ?? 0,
                    logo: result.logo ?? '',
                    name: result.name ?? '',
                    symbol: result.symbol ?? '',
                } as Token,
            } as Balance;
        });
    }
    return (
        <S.Wrapper>
            <S.Search
                placeholder='Search name or paste address'
                postfix={<S.SearchIcon />}
                onKeyUp={
                    _.debounce(async (e) => {
                        const keyword = e.target.value;
                        setSearching(!!keyword);
                        const searchResults: SearchResult[] = ((await requestSearch(keyword)) as any)?.data ?? [];
                        setSearchResultTokens(mapBalancesFromSearchResults(filterDuplicatedStoredBalances(searchResults)));
                    }, 500)
                }
            />
        </S.Wrapper>
    )
}

export default TokenSearchBar;