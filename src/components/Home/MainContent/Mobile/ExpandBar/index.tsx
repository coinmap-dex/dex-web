import React from 'react';
import * as  S from './styled';
import Plus from '~svg/Plus';

type ExpandBarProps = {
    title: string;
    onClick?: () => void;
}

const ExpandBar = (props: ExpandBarProps) => {
    const title = props?.title ?? '';
    const onClick = props?.onClick;
    return (
        <S.ExpandContainer onClick={onClick}>
            <S.ExpandContent>
                <S.ExpandIconContainer>
                    <Plus />
                </S.ExpandIconContainer>
                <S.ExpandTitle><div>{title}</div></S.ExpandTitle>
            </S.ExpandContent>
        </S.ExpandContainer>
    )
}

export default ExpandBar;
