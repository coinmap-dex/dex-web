import React, { useState } from 'react'
import _ from 'lodash';
import S from './styled';
import SearchIcon from '~svg/Search';
import { useAppDispatch, useAppSelector } from '~hooks';
import { setContract } from '~store/modules/home';
import { useGetSearchMutation } from '~store/modules/home/api';
import SearchSuggestion from '../Suggestion';

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const contract = useAppSelector(state => state.home.contract);
    const [requestSearch, { error: searchError }] = useGetSearchMutation();
    const [suggetionData, setSuggestionData] = useState([]);
    const searchInputRef: any = React.useRef(null);
    React.useEffect(() => {
        searchInputRef.current && (searchInputRef.current.value = contract);
    }, [contract]);

    return (
        <S.Wrapper>
            <S.Search
                placeholder='Search'
                ref={searchInputRef}
                postfix={<S.SearchIcon/>}
                onKeyUp={_.debounce(async (e) => {
                    const keyword = e.target.value;
                    const isToken = keyword.match(/^0x([A-Fa-f0-9]{40})$/);
                    isToken && dispatch(setContract(keyword));
                    !isToken && setSuggestionData(((await requestSearch(keyword)) as any).data);
                }, 500)}
            />
            {suggetionData.length > 0 && <SearchSuggestion data={suggetionData} setData={setSuggestionData}/>}
        </S.Wrapper>
    )
}


export default SearchBar