import React from 'react';
import * as  S from './styled';
import Minus from '~svg/Minus';

type CollapseBarProps = {
    onClick?: () => void;
}

const CollapseBar = (props: CollapseBarProps) => {
    const onClick = props?.onClick;
    return <S.CollapseContainer onClick={onClick}>
        <S.CollapseIconContainer>
            <S.CollapseIcon>
                <Minus />
            </S.CollapseIcon>
        </S.CollapseIconContainer>
    </S.CollapseContainer>
}

export default CollapseBar;
