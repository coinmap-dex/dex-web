import React from 'react';
import S from './styled';
import { useAppDispatch } from '~hooks';
import { setContract, setCurrentToken } from '~store/modules/home';
import ThreeDotsLoader from 'sezy-design/components/icon/solid/threeDotsLoader';
import { thousandSeparator } from '~utils';
import {Token} from '../../../models/token.model';
import {mapTokenFromSearchResult} from '~utils/search.util';

const SearchSuggestion = ({ data, setData, setVisible, isLoading }) => {
    const dispatch = useAppDispatch();
    const handleItemClick = (token: Token) => () => {
        const contract: string = token.address ?? '';
        setVisible(false);
        setData([]);
        dispatch(setContract(contract));
        dispatch(setCurrentToken(token));
        window.history.pushState({ contract }, '', `/${contract}`);
    }

    return (
        <S.Wrapper>
            {
                isLoading
                    ? <ThreeDotsLoader />
                    : data?.length && [...data].sort((a, b) => b?.holder - a?.holder).map((d, i) => (
                        <S.Item key={`search_suggestion_item_${i}`} onClick={handleItemClick(mapTokenFromSearchResult(d))}>
                            {
                                d?.logo
                                    ? <S.Logo src={d.logo}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "/images/question.png";
                                        }}
                                    />
                                    : <S.Question />
                            }
                            <S.RightCol>
                                <S.RightColHead>
                                    <S.Name>{`${d.name}(${d?.symbol})`}</S.Name>
                                    <S.holder>Holder: <span>{thousandSeparator(d.holder)}</span></S.holder>
                                </S.RightColHead>
                                <S.Address>{d.address}</S.Address>
                            </S.RightCol>
                        </S.Item>
                    ))
            }

        </S.Wrapper>
    )
}


export default SearchSuggestion