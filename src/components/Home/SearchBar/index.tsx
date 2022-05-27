import React, { useState } from 'react'
import _ from 'lodash';
import S from './styled';
import SearchIcon from '~svg/Search';
import { useAppDispatch, useAppSelector } from '~hooks';
import { setContract } from '~store/modules/home';
import { useGetSearchMutation } from '~store/modules/home/api';
import SearchSuggestion from '../Suggestion';
import { useParams } from 'react-router-dom';

const SearchBar = () => {
    const [keyword, setKeyword] = useState<string>('');
    const dispatch = useAppDispatch();
    const { address } = useParams();
    const contract = useAppSelector(state => state.home.contract);
    const [requestSearch, { isLoading: isSearchLoading }] = useGetSearchMutation();
    const [suggetionData, setSuggestionData] = useState([]);
    const [suggetionVisible, setSuggestionVisible] = useState(false);
    const searchInputRef: any = React.useRef(null);

    React.useEffect(() => {
        searchInputRef.current && (searchInputRef.current.value = address ?? contract);
    }, []);

    const onSearchInputFocus = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    }

    const onSearchInputFocusOut = () => {
        if (keyword) {
            searchInputRef.current.value = keyword;
        } else if (searchInputRef.current) {
            searchInputRef.current.value = address ?? contract;
        }
    }

    return (
        <S.Wrapper>
            <S.Search
                placeholder='Search'
                ref={searchInputRef}
                postfix={<S.SearchIcon />}
                onFocus={onSearchInputFocus}
                onBlur={onSearchInputFocusOut}
                onKeyUp={_.debounce(async (e) => {
                    const keyword = e.target.value;
                    setKeyword(keyword);
                    const isToken = keyword.match(/^0x([A-Fa-f0-9]{40})$/);
                    if (isToken) {
                        dispatch(setContract(keyword));
                        window.history.replaceState({}, '', `/${keyword}`);
                    }

                    setSuggestionVisible(true);
                    const searchResult = ((await requestSearch(keyword)) as any).data;
                    setSuggestionData(searchResult);
                    !searchResult?.length && setSuggestionVisible(false);
                }, 500)}
            />
            {suggetionVisible && <SearchSuggestion data={suggetionData} setData={setSuggestionData} setVisible={setSuggestionVisible} isLoading={isSearchLoading} />}
        </S.Wrapper>
    )
}


export default SearchBar