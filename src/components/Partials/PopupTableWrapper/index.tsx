import React from 'react';
import S from './styled';
import {Modal} from 'sezy-design';
import ClosePopupTableIcon from '~svg/ClosePopupTableIcon';

interface IActionConfirmModalProps {
    title: string,
    isVisible: boolean,
    setVisible: (boolean) => void,
    children: any
}

const PopupTableWrapper = ({title, isVisible, setVisible, children}: IActionConfirmModalProps) => {
    return (
        <S.Modal isVisible={isVisible} setVisible={setVisible}>
            <S.TableWrapper>
                <S.TitleContainer>
                    <S.Title>{title}</S.Title>
                    <div onClick={() => setVisible(false)}>
                        <ClosePopupTableIcon/>
                    </div>
                </S.TitleContainer>
                {children}
            </S.TableWrapper>
        </S.Modal>
    )
}

export default PopupTableWrapper;
