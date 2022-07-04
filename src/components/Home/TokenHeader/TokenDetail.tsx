import React, { useEffect, useState } from 'react'
import {Shimmer, Tooltip as SezyTooltip} from 'sezy-design'
import * as  S from './styled';
import { useGetOverviewQuery } from '~store/modules/home/api';
import { useAppSelector, useBreakpoint } from '~hooks';
import Star from '~svg/Star';
import {setCurrentToken, setTokenSymbol} from '~store/modules/home';
import { useDispatch } from 'react-redux';
import OrderModal from './OrderModal';
import {Token} from '../../../models/token.model';
import {mapTokenFromOverviewData} from '~utils/token.util';

const COPY_MESSAGE = 'Copy';
const COPIED_MESSAGE = 'Copied!';

const TokenDetail = () => {
    const dispatch = useDispatch();
    const breakpoint = useBreakpoint();
    const contract = useAppSelector(state => state.home.contract)
    const { data: overviewData, isLoading, error } = useGetOverviewQuery(contract);
    const [isOrderVisible, setOrderVisible] = useState(false);
    const [copyMessage, setCopyMessage] = useState<string>(COPY_MESSAGE);

    useEffect(() => {
        dispatch(setTokenSymbol(overviewData?.symbol));
        dispatch(setCurrentToken(mapTokenFromOverviewData(overviewData)));
    }, [overviewData?.symbol]);

    const onContractCopyIconClick = () => {
        navigator.clipboard.writeText(contract);
        setCopyMessage(COPIED_MESSAGE);
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
                                    <S.TokenInfoDetailContract>Token contract{breakpoint('sm') ? `: ${contract}` : ''}</S.TokenInfoDetailContract>
                                    <SezyTooltip size="s" content={copyMessage} className="copy-token-icon">
                                        <div
                                            onMouseLeave={() => setCopyMessage(COPY_MESSAGE)}
                                            onClick={onContractCopyIconClick}>
                                            <S.TokenInfolContractCopyIcon />
                                        </div>
                                    </SezyTooltip>
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
