import React from 'react';
import TokenModalWrapper from '~components/Home/MainContent/Order/TokenModalWrapper';
import S from './styled';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
}

const ImportTokenModal = ({
    isVisible,
    setVisible
}: IActionConfirmModalProps) => {
    return (
        <TokenModalWrapper
            isVisible={isVisible}
            setVisible={setVisible}
            title="import token"
        >
            <S.ImportTokenWrapper>
                <S.Description>
                    <p>Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.</p>
                    <p>If you purchase an arbitrary token, you may be unable to sell it back.</p>
                </S.Description>
                <S.BscScanContainer>
                    <S.BscTitle>
                        <img alt="icon" src="https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"/>
                        View on BscScan
                    </S.BscTitle>
                    <S.BscTokenTile>
                        <p>StakHolders (SH)</p>
                        <p>0x0A...3e52354565454535455</p>
                    </S.BscTokenTile>
                    <S.BscButtonContainer>
                        <S.CheckboxContainer>
                            <input type="checkbox"/>
                            <span>View on BscScan</span>
                        </S.CheckboxContainer>
                        <S.ImportButton>Import</S.ImportButton>
                    </S.BscButtonContainer>
                </S.BscScanContainer>
            </S.ImportTokenWrapper>
        </TokenModalWrapper>
    )
}

export default ImportTokenModal;
