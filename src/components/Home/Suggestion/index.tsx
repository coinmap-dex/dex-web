import React from 'react'
import _ from 'lodash';
import S from './styled';
import { useAppDispatch } from '~hooks';
import { setContract } from '~store/modules/home';
import ThreeDotsLoader from 'sezy-design/components/icon/solid/threeDotsLoader';
import { thousandSeparator } from '~utils';

const SearchSuggestion = ({ data, setData, setVisible, isLoading }) => {
    const dispatch = useAppDispatch();
    const handleItemClick = (contract) => () => {
        setVisible(false);
        setData([]);
        dispatch(setContract(contract));
        window.history.pushState({ contract }, '', `/${contract}`);
    }

    return (
        <S.Wrapper>
            {
                isLoading
                    ? <ThreeDotsLoader />
                    : data?.length && [...data].sort((a, b) => b?.holder - a?.holder).map((d, i) => (
                        <S.Item key={`search_suggestion_item_${i}`} onClick={handleItemClick(d.address)}>
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