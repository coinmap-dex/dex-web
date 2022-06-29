import React from 'react'
import S from './styled';
import {useGetSearchMutation} from '~store/modules/home/api';
import _ from 'lodash';
import { SearchResult } from '../../../../../../models/search-result.model';
import {
    isPrioritySearchResult,
    isSearchResultImported,
    mapBalancesFromSearchResults
} from '~utils/search.util';

type TokenSearchBarProps = {
    setSearchResultTokens: (balances) => void;
    setSearchKeyword: (keyword) => void;
}

const TokenSearchBar = ({setSearchResultTokens, setSearchKeyword}: TokenSearchBarProps) => {
    const [requestSearch, { isLoading: isSearchLoading }] = useGetSearchMutation();

    const reorderBalances = (searchResults: SearchResult[]) => {
        const priorityResults: SearchResult[] = [];
        const importedResults: SearchResult[] = [];
        const unImportedResults: SearchResult[] = [];
        searchResults.forEach((result: SearchResult) => {
            if (isPrioritySearchResult(result)) {
                priorityResults.push(result)
            } else if (isSearchResultImported(result)) {
                importedResults.push(result);
            } else {
                unImportedResults.push(result);
            }
        });
        return [...priorityResults, ...importedResults, ...unImportedResults];
    }

    return (
        <S.Wrapper>
            <S.Search
                placeholder='Search name or paste address'
                postfix={<S.SearchIcon />}
                onKeyUp={
                    _.debounce(async (e) => {
                        const keyword = e.target.value;
                        setSearchKeyword(keyword);
                        const searchResults: SearchResult[] = ((await requestSearch(keyword)) as any)?.data ?? [];
                        setSearchResultTokens(mapBalancesFromSearchResults(reorderBalances(searchResults)));
                    }, 500)
                }
            />
        </S.Wrapper>
    )
}

export default TokenSearchBar;