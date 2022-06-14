import React, {useRef, useState} from 'react';
import TokenModalWrapper from '~components/Home/MainContent/Order/TokenModalWrapper';
import S from './styled';
import {Balance} from '../../../../../models/balance.model';
import {setStoredBalances} from '~utils/order.util';

interface IActionConfirmModalProps {
    isVisible: boolean,
    setVisible: (boolean) => void,
    selectedImportToken: Balance
}

const DEFAULT_LOGO = '../../../images/default-token-logo.png';

const ImportTokenModal = ({
    isVisible,
    setVisible,
    selectedImportToken
}: IActionConfirmModalProps) => {
    const [logo, setLogo] = useState(selectedImportToken?.token?.logo || DEFAULT_LOGO);
    const address: string = selectedImportToken?.token?.address ?? '';
    const checkboxRef = useRef(null);

    const handleImportButtonClick = () => {
        setStoredBalances(selectedImportToken);
        const isViewOnBscScanChecked = !!(checkboxRef?.current as any)?.checked;
        if (isViewOnBscScanChecked) {
            navigateToBscScan();
        }
        setVisible(false);
    }
    const onLogoError = () => {
        setLogo(DEFAULT_LOGO);
    }
    const navigateToBscScan = () => {
        window.open(`https://bscscan.com/address/${address}`, '_blank');
    }

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
                    <S.BscTitle onClick={navigateToBscScan}>
                        <img alt="icon" src={logo} onError={onLogoError} />
                        View on BscScan
                    </S.BscTitle>
                    <S.BscTokenTile>
                        <p>StakHolders (SH)</p>
                        <p>{address.substring(0, 4)}...{address.substring(address.length - 19, address.length)}</p>
                    </S.BscTokenTile>
                    <S.BscButtonContainer>
                        <S.CheckboxContainer>
                            <input type="checkbox" ref={checkboxRef}/>
                            <span>View on BscScan</span>
                        </S.CheckboxContainer>
                        <S.ImportButton onClick={handleImportButtonClick}>Import</S.ImportButton>
                    </S.BscButtonContainer>
                </S.BscScanContainer>
            </S.ImportTokenWrapper>
        </TokenModalWrapper>
    )
}

export default ImportTokenModal;
