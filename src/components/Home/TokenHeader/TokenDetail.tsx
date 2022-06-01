import React, { useEffect, useState } from 'react'
import { Shimmer } from 'sezy-design'
import * as  S from './styled';
import { useGetOverviewQuery } from '~store/modules/home/api';
import { useAppSelector, useAxios, useBreakpoint, useCoinmapDex } from '~hooks';
import Star from '~svg/Star';
import { setTokenSymbol } from '~store/modules/home';
import { useDispatch } from 'react-redux';
import OrderModal from './OrderModal';

const TokenDetail = () => {
    const dispatch = useDispatch();
    const breakpoint = useBreakpoint();
    const contract = useAppSelector(state => state.home.contract)
    const { data: overviewData, isLoading, error } = useGetOverviewQuery(contract);
    const [isOrderVisible, setOrderVisible] = useState(false);

    useEffect(() => {
        dispatch(setTokenSymbol(overviewData?.symbol));
    }, [overviewData?.symbol]);

    const onContractCopyIconClick = () => {
        navigator.clipboard.writeText(contract);
    }

    return (
        <S.TokenInfoDetailCol grid={18} gutter={{ sm: 12, lg: 8, xl: 6 }}>
            <div>
                <Shimmer isLoading={isLoading}>
                    <S.TokenLogoWrapper>
                        <img src={overviewData?.image?.small} />
                    </S.TokenLogoWrapper>
                </Shimmer>
                <S.TokenInfoDetailData>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoSymbolWrapper>
                            {
                                !isLoading && <>
                                    <S.TokenInfoDetailName>{overviewData?.symbol}</S.TokenInfoDetailName>

                                    <S.TokenInfoBSCScan href=''>
                                        <img src="https://i.ibb.co/ygdN0m8/bscscan-2.png" />
                                    </S.TokenInfoBSCScan>
                                    {
                                        breakpoint('sm') && (
                                            <>
                                                <S.TokenInfoStar>
                                                    <Star />
                                                </S.TokenInfoStar>
                                                <S.TokenInfoMore >View more info</S.TokenInfoMore>
                                                {/* <S.TokenInfoMore onClick={() => setOrderVisible(true)}>View more info</S.TokenInfoMore> */}
                                            </>
                                        )
                                    }
                                </>
                            }
                        </S.TokenInfoSymbolWrapper>
                    </Shimmer>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoContractWrapper>
                            {
                                !isLoading && <>
                                    <S.TokenInfoDetailFullname>({overviewData?.name})</S.TokenInfoDetailFullname>
                                    <S.TokenInfoDetailContract>Token contract{breakpoint('sm') ? `: ${contract?.slice(0, 8)}...${contract?.slice(-4)}` : ''}</S.TokenInfoDetailContract>
                                    <S.TokenInfolContractCopyIcon onClick={onContractCopyIconClick} />
                                </>
                            }
                        </S.TokenInfoContractWrapper>
                    </Shimmer>
                </S.TokenInfoDetailData>
            </div>
            <OrderModal isVisible={isOrderVisible} setVisible={setOrderVisible} />
        </S.TokenInfoDetailCol>
    )
}


export default TokenDetail
