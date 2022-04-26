import React from 'react'
import { Col } from 'sezy-design'
import _ from 'lodash';
import * as  S from './styled';
import TokenDetail from './TokenDetail';
import TokenPrice from './TokenPrice';
import SearchBar from '../SearchBar';
import { useBreakpoint } from '~hooks';

const TokenHeader = () => {
    const breakpoint = useBreakpoint();
    return (
        <S.TokenHeaderSection>
            <S.TokenHeaderRow>
                <TokenDetail />
                <TokenPrice />
                <Col grid={0} gutter={{ sm: 12, lg: 8, xl: 9 }}>
                    {
                        breakpoint('sm') && <SearchBar />
                    }
                </Col>
            </S.TokenHeaderRow>
        </S.TokenHeaderSection>
    )
}


export default TokenHeader