import React from 'react'
import { Shimmer } from 'sezy-design'
import * as  S from './styled';
import { useGetOverviewQuery } from '~store/modules/home/api';
import { useAppSelector, useBreakpoint } from '~hooks';
import Star from '~svg/Star';

const TokenDetail = () => {
    const breakpoint = useBreakpoint();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetOverviewQuery(contract);
    return (
        <S.TokenInfoDetailCol grid={18} gutter={{ sm: 12, lg: 8, xl: 6 }}>
            <div>
                <Shimmer isLoading={isLoading}>
                    <S.TokenLogoWrapper>
                        <img src={data?.image?.small} />
                    </S.TokenLogoWrapper>
                </Shimmer>
                <S.TokenInfoDetailData>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoSymbolWrapper>
                            {
                                !isLoading && <>
                                    <S.TokenInfoDetailName1>{data?.symbol}</S.TokenInfoDetailName1>
                                    <S.TokenInfoDetailName1>/</S.TokenInfoDetailName1>
                                    <S.TokenInfoDetailName2>BNB</S.TokenInfoDetailName2>

                                    <S.TokenInfoBSCScan href=''>
                                        <img src="https://i.ibb.co/ygdN0m8/bscscan-2.png" />
                                    </S.TokenInfoBSCScan>
                                    {breakpoint('sm') && (
                                        <>
                                            <S.TokenInfoStar>
                                                <Star />
                                            </S.TokenInfoStar>
                                            <S.TokenInfoMore>View more info</S.TokenInfoMore>
                                        </>
                                    )}
                                </>
                            }
                        </S.TokenInfoSymbolWrapper>
                    </Shimmer>
                    <Shimmer isLoading={isLoading}>
                        <S.TokenInfoContractWrapper>
                            {
                                !isLoading && <>
                                    <S.TokenInfoDetailFullname>({data?.name})</S.TokenInfoDetailFullname>
                                    <S.TokenInfoDetailContract>Token contract{breakpoint('sm') ? `: ${contract?.slice(0, 8)}...${contract?.slice(-4)}` : ''}</S.TokenInfoDetailContract>
                                    <S.TokenInfolContractCopyIcon />
                                    <S.TokenInfoDetailContract> - Pair</S.TokenInfoDetailContract>
                                    <S.TokenInfolContractCopyIcon />
                                </>
                            }
                        </S.TokenInfoContractWrapper>
                    </Shimmer>
                </S.TokenInfoDetailData>
            </div>
        </S.TokenInfoDetailCol>
    )
}


export default TokenDetail
