import React from 'react'
import _ from 'lodash';
import S from './styled';
import SearchIcon from '~svg/Search';
import { useAppDispatch, useAppSelector } from '~hooks';
import { setContract } from '~store/modules/home';
import { useGetSearchMutation } from '~store/modules/home/api';
import Question from '~svg/Question';

const SearchSuggestion = ({ data, setData }) => {
    const dispatch = useAppDispatch();
    const handleItemClick = (contract) => () => {
        setData([]);
        dispatch(setContract(contract));
    }
    return (
        <S.Wrapper>
            {
                data?.map((d, i) => (
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
                                <S.Name>{`${d.name}(${d.symbol})`}</S.Name>
                                <S.holder>Holder: <span>{d.holder}</span></S.holder>
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