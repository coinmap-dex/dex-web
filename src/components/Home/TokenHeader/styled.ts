import { Col, Label, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import CopyIconComponent from 'sezy-design/components/icon/light/copy'

export const TokenHeaderSection = styled(Section)`
    background: #0C122A;
`;
export const TokenHeaderRow = styled(Row)`
    padding:0.8rem 1rem;
    @media ${breakpoints.sm} {
        padding:1.5rem 2rem;
    }
    @media ${breakpoints.xl} {
        padding:1.5rem 2.5rem;
    }
`;

export const TokenInfoDetailData = styled(Col)`
    width:calc(100% - 5rem);
    padding-left: 0.5rem;
    @media ${breakpoints.xl} {
        padding-left: 2rem;
    }
    @media ${breakpoints.xl} {
        width:calc(100% - 10rem);
    }
`;
export const TokenInfoDetailCol = styled(Col)`
    margin-bottom: 0.2rem;
    flex: 0 0 35%;
  margin-right: 2rem;
    &>div{
        display:flex;
        align-items:center;
        line-height:0;
    }
    @media ${breakpoints.xs} {
        max-width: 65%;
    }
    @media ${breakpoints.xxl} {
        flex: 0 0 28%;
    }
`;

export const TokenLogoWrapper = styled.div`
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    border: 0;
    overflow: hidden;
    @media ${breakpoints.sm}{
        width: 5rem;
        height: 5rem;
    }
    &>img{
        background:#EDF0F4;
        width:100%;
        height:100%;
        padding:0.5rem;
        box-sizing:border-box;
        @media ${breakpoints.sm}{
            padding:1rem;
        }
    }
    &>img:not([src]){ 
        display:none; 
    }
`;

export const TokenInfoSymbolWrapper = styled.div`
    width:100%;
    height:1.8rem;
    line-height:1.8rem;
    margin-bottom:0.2rem;
    display:flex;
    align-items:center;
    white-space: nowrap;
    @media ${breakpoints.sm}{
        // width:35rem;
        height:2.4rem;
        line-height:2.4rem;
        margin-bottom:0.4rem;
    }
`;

export const TokenInfoDetailName1 = styled(Label)`
    font-size:1.4rem;
    margin-right:0.2rem;
    text-transform:uppercase;
    @media ${breakpoints.sm}{
        font-size:2.4rem;
    }
`; 

export const TokenInfoDetailName2 = styled(Label)`
    font-size:1.6rem;
    font-weight:bold;
    @media ${breakpoints.sm}{
        font-size:2.6rem;
    }
`;

export const TokenInfoBSCScan = styled.a`
    margin-left: 0.8rem;
    width: 1.4rem;
    height: 1.4rem;
    @media ${breakpoints.sm}{
        width:  2.4rem;
        height: 2.4rem;
        margin-left: 1rem;
    }
    &>img{
        width: 100%;
        height: 100%;
    }
`;

export const TokenInfoMore = styled.a`
    margin-left:0.8rem;
    height: 2.2rem;
    line-height: 3rem;
    font-style: italic;
    font-size: 0.8rem;
    text-align: center;
    color: #69A7EF;
    text-decoration:underline;
    cursor:pointer;
    @media ${breakpoints.sm}{
        font-size: 1.2rem;
        margin-left: 1rem;
    }
`;

export const TokenInfoStar = styled.span`
    margin-left:0.8rem;
    width: 2.5rem;
    height: 1.6rem;
    line-height: 1.8rem;
    background: #3775B7;
    border-radius: 2px;
    text-align:center;
    cursor:pointer;
    @media ${breakpoints.sm}{
        width: 3.1rem;
        height: 2.2rem;
        line-height: 2.8rem;
        margin-left: 1rem;
    }
    &>svg{
        width:1rem;
        height:1rem;
        @media ${breakpoints.sm}{
            width:1.2rem;
            height:1.2rem;
        }
        fill:transparent;
    }
`;

export const TokenInfoContractWrapper= styled.div`
    width:100%;
    height:1.6rem;
    line-height:1.6rem;
    white-space: nowrap;
    @media ${breakpoints.sm}{
        // width:38rem;
        height:2.4rem;
        line-height:2.4rem;
    }
`;

export const TokenInfoDetailFullname = styled(Label)`
    font-size:0.9rem;
    @media ${breakpoints.sm}{
        font-size:1.6rem;
    }
`;

export const TokenInfoDetailContract = styled(Label)`
    color:#8E9195;
    margin: 0 0.2rem;
    font-size:0.7rem;
    @media ${breakpoints.sm}{
        font-size:1.2rem;
        margin-left: 0.5rem;
    }
`;

export const TokenInfolContractCopyIcon = styled(CopyIconComponent)`
    height:0.8rem;
    width:0.8rem;
    fill:transparent;
    cursor:pointer;
    @media ${breakpoints.sm}{
        height:1.3rem;
        width:1.3rem;
        padding-left: 0.5rem;
    }
`;

export const TokenInfoContractCopy = styled(CopyIconComponent)`
    color:#8E9195;
    margin: 0 0.3rem;
`;

export const TokenInfoPriceCol = styled(Col)`
    border-left:1px solid #1D222C;
    padding-left:1rem;
    flex: 0 0 26.5%;
    &>div:first-child{
        display:flex;
    }
    @media ${breakpoints.sm}{
        padding-left: 2.4rem;
        padding-top: 0.5rem;
    }
    @media ${breakpoints.xs}{
        padding-left: 5%;
    }
    @media ${breakpoints.xl}{
        flex: 0 0 25.5%;
    }
    @media ${breakpoints.xxl}{
        flex: 0 0 32.5%;
    }
`;
export const TokenInfoPriceData = styled(Label)`
    margin-right: 0.5rem;
    line-height: 0;
    @media ${breakpoints.sm}{
        width: 14rem;
    }
    @media ${breakpoints.xs}{
        margin-right: 2rem;
    }
`;

export const TokenInfoPriceData1 = styled(Label)`
    font-size:1.2rem;
    display:block;
    color:#26E1CD;
    font-weight: 500;
    height: 1.6rem;
    font-style: normal;
    line-height: 1.6rem;
    width: 4rem;
    margin-bottom:0.4rem;
    @media ${breakpoints.sm}{
        font-size:2.4rem;
        height: 2.6rem;
        line-height: 2.6rem;
        width: 10rem;
    }
`;

export const TokenInfoPriceData2 = styled(Label)`
    font-size:0.9rem;
    font-style: normal;
    font-weight: 500;
    height: 1.3rem;
    line-height: 1.3rem;
    width: 4rem;
    @media ${breakpoints.sm}{
        font-size:1.4rem;
        height: 2rem;
        line-height: 2rem;
        width: 10rem;
    }
`;

export const TokenInfoPrice24label = styled(Label)`
    font-size:0.7rem;
    color:#858D9A;
    display:block;
    @media ${breakpoints.sm}{
        font-size:1.4rem;
    }
`;

export const TokenInfoPrice24Data = styled(Label)`
    font-size:0.7rem;
    font-weight: 500;
    color:${props=>props['changeRate'] > 0?'#26E1CD':'#EC6649'};
    height:1.3rem;
    line-height:1.3rem;
    width:4rem;
    @media ${breakpoints.sm}{
        font-size:1.4rem;
        height:2rem;
        line-height:2rem;
        width:7rem;
    }
`;

