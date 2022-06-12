import React from 'react'
import S from './styled';

type TokenSearchBarProps = {
    setSearchInput: (string) => void;
}

const TokenSearchBar = ({setSearchInput}: TokenSearchBarProps) => {
    const onSearchInputKeyUp = (event) => {
        const keyword: string = event?.target?.value ?? '';
        console.log('bbbbbbbb keyword', keyword);
        setSearchInput(keyword);
    }
    return (
        <S.Wrapper>
            <S.Search
                placeholder='Search name or paste address'
                postfix={<S.SearchIcon />}
                onKeyUp={onSearchInputKeyUp}
            />
        </S.Wrapper>
    )
}

export default TokenSearchBar;