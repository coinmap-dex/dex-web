import React from 'react';
import * as  S from './styled';
import DoublePlus from '~svg/DoublePlus';

interface MoreInfoExpandBarProps {
    onClick: () => void;
}

const MoreInfoExpandBar = (props: MoreInfoExpandBarProps) => {
    const onClick = props?.onClick;
    return <S.MoreInfoExpandContainer onClick={onClick}>
        <S.MoreInfoExpandIconContainer>
            <DoublePlus />
        </S.MoreInfoExpandIconContainer>
    </S.MoreInfoExpandContainer>
}

export default MoreInfoExpandBar;
