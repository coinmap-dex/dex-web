import React, { useEffect, useState } from 'react';
import * as  S from './styled';
import UnionIcon from '~svg/Union';
import Web3 from 'web3';
import {
    useGetMetaMaskPublicAddressMutation,
    usePostMetaMaskAuthenticationMutation,
    usePostMetaMaskSignUpMutation
} from '~store/modules/home/api';
import { User } from '../../../../models/user.model';
import { SignMessage } from '../../../../models/sign-message.model';
import { Auth } from '../../../../models/auth.model';
import { META_MASK } from '../../../../constants/meta-mask.constants';

const UserWallet = () => {
    const [web3, setWeb3] = useState<Web3>();
    const [publicAddress, setPublicAddress] = useState<string>('');
    const [user, setUser] = useState<User>();
    const [getMetaMaskPublicAddress, getMetaMaskPublicAddressResult] = useGetMetaMaskPublicAddressMutation();
    const [postMetaMaskSignUp, postMetaMaskSignUpResult] = usePostMetaMaskSignUpMutation();
    const [postMetaMaskAuthentication, postMetaMaskAuthenticationResult] = usePostMetaMaskAuthenticationMutation();

    useEffect(() => {
        initializeWeb3();
    }, []);

    useEffect(() => {
        const { isSuccess, data } = getMetaMaskPublicAddressResult;
        if (isSuccess) {
            if (data.length) {
                setUser(data[0]);
            } else {
                handleMetaMaskSignup(publicAddress);
            }
        }
    }, [getMetaMaskPublicAddressResult]);

    useEffect(() => {
        const { isSuccess, data } = postMetaMaskSignUpResult;
        if (isSuccess) {
            setUser(data);
        }
    }, [postMetaMaskSignUpResult]);

    useEffect(() => {
        if (!!user) {
            handleSignMessage(user).then((signMessage: SignMessage) => {
                handleAuthenticate(signMessage);
            });
        }
    }, [user]);

    useEffect(() => {
        const { isSuccess, data } = postMetaMaskAuthenticationResult;
        if (isSuccess) {
            const accessToken: string = (data as Auth)?.accessToken ?? '';
            if (accessToken) {
                localStorage.setItem(META_MASK.ACCESS_TOKEN, accessToken);
            }
        }
    }, [postMetaMaskAuthenticationResult]);

    const onConnectButtonClick = async () => {
        setPublicAddress(await getPublicAddress());
        getMetaMaskPublicAddress(publicAddress);
    };

    const initializeWeb3 = async () => {
        // if (!(window as any).ethereum) {
        //     window.alert('Please install MetaMask first.');
        //     return;
        // }

        // if (!web3) {
        //     try {
        //         await (window as any).ethereum.enable();
        //         setWeb3(new Web3((window as any).ethereum));
        //     } catch (error) {
        //         window.alert('You need to allow MetaMask.');
        //         console.log('You need to allow MetaMask.')
        //         return;
        //     }
        // }
    }

    const getPublicAddress = async (): Promise<string> => {
        const coinbase = await web3?.eth?.getCoinbase();
        if (!coinbase) {
            window.alert('Please activate MetaMask first.');
            return '';
        }
        return coinbase.toLowerCase();
    }

    const handleMetaMaskSignup = (publicAddress: string) => {
        postMetaMaskSignUp(publicAddress);
    };

    const handleSignMessage = async ({ publicAddress, nonce }: User): Promise<SignMessage> => {
        try {
            const signature = await web3?.eth?.personal?.sign(
                `I am signing my one-time nonce: ${nonce}`,
                publicAddress,
                '' // MetaMask will ignore the password argument here
            );
            return { publicAddress, signature };
        } catch (err) {
            throw new Error('You need to sign the message to be able to log in.');
        }
    };

    const handleAuthenticate = ({ publicAddress, signature }: SignMessage) => {
        if (!!publicAddress && !!signature) {
            postMetaMaskAuthentication({ publicAddress, signature });
        }
    };

    return (
        <S.HeaderUserWalletWrapper>
            <S.HeaderUnionIconWrapper>
                <UnionIcon />
            </S.HeaderUnionIconWrapper>
            <S.HeaderUserWalletButton
                onClick={onConnectButtonClick}
            >
                Connect
            </S.HeaderUserWalletButton>
        </S.HeaderUserWalletWrapper>
    )
}

export default UserWallet
