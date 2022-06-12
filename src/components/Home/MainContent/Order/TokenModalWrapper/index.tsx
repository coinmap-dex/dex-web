import React from 'react';
import S from './styled';
import {Modal} from 'sezy-design';
import ClosePopupTableIcon from '~svg/ClosePopupTableIcon';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
    title: string,
    children: any,
}

const TokenModalWrapper = ({
    isVisible,
    setVisible,
    title,
    children
}: IActionConfirmModalProps) => {
    return (
        <Modal isVisible={isVisible} setVisible={setVisible}>
            <S.TokenListWrapper>
                <S.TitleContainer>
                    <S.Title>{title}</S.Title>
                    <div onClick={() => setVisible(false)}>
                        <ClosePopupTableIcon/>
                    </div>
                </S.TitleContainer>
                {children}
            </S.TokenListWrapper>
        </Modal>
    )
}

export default TokenModalWrapper;
