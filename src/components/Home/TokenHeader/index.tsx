import React from 'react'
import { Col } from 'sezy-design'
import _ from 'lodash';
import * as  S from './styled';
import TokenDetail from './TokenDetail';
import TokenPrice from './TokenPrice';
import SearchBar from '../SearchBar';
import { useBreakpoint } from '~hooks';

type TokenHeaderProps = {
    isLeftMenu?: boolean;
}

const TokenHeader = (props: TokenHeaderProps) => {
    const breakpoint = useBreakpoint();
    const isLeftMenu = props.isLeftMenu;
    return (
        <S.TokenHeaderSection>
            <S.TokenHeaderRow>
                <TokenDetail />
                <TokenPrice isLeftMenu={isLeftMenu}/>
                <Col grid={0} gutter={{ sm: 12, lg: 8, xl: 9 }}>
                    {
                        breakpoint('sm') && <SearchBar />
                    }
                </Col>
            </S.TokenHeaderRow>
        </S.TokenHeaderSection>
    );
}


export default TokenHeader