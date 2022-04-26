import { Input, Range } from "sezy-design";
import styled from "styled-components";

export const OrderTitleBox= styled.div`
    display:flex;
    align-items:center;
    padding: 0 1.8rem;
    position:relative;
    height:6.4rem;
    line-height:6.4rem;
`;

export const OrderOrderType = styled.div`
    font-size: 1.3rem;
    color: ${props=>props['active']?'#2BDBEA':'#FDF4F4'};
    text-transform:uppercase;
`;

export const OrderSlash = styled.div`
    color: #FDF4F4;
    margin:0 0.8rem 0 0.4rem;
`;

export const OrderTitleMarginRate = styled.div`
    font-size: 1rem;
    line-height: 1.2rem;
    width: 2.8rem;
    color: #BFE6FC;
    background: rgba(41, 219, 234, 0.4);
    text-align:center;
    margin-left:0.5rem;
    margin-top:-1rem;
`;

export const OrderPlaceTypes = styled.div`
    display:flex;
    align-items:center;
    padding: 1.5rem 1.8rem;
    background:#1C2740;
`;

export const OrderPlaceType = styled.div`
    font-size: 1.4rem;
    color: ${props=>props['active']?'#fff':'#B9C2D0'};
    text-transform: capitalize;
    margin-right:3rem;
`;

export const OrderBox = styled.div`
    padding: 1.8rem;
`;

export const OrderBoxBuySell = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const OrderBoxBuySellButton = styled.button`
    width:49%;
    height:4.2rem;
    line-height:1.8rem;
    font-size:1.8rem;
    color: ${props=>props['active']?'#fff':'#848C99'};
    border: 1px solid ${props=>props['active']?'#3775B7':'#2E3A52'};
    background: transparent;
`;

export const OrderBoxDetail = styled.div`
    display:flex;
    justify-content:space-between;
    color:#858D9A;
    font-size:1.4rem;
    margin-top:3rem;
`;

export const OrderBoxDetailCurrency = styled.span`
    color:orange;
    font-size:1.6rem;
`;

export const OrderBoxInputWrapper = styled.div`
    margin-top:0.8rem;
    position:relative;
`;

export const OrderBoxInput = styled(Input)`
    height:4.8rem !important;
    padding:0;
    &>input{
        font-size:1.3rem !important;
        color:#B9C2D0;
        text-align:right;
        height:4.8rem !important;
        line-height:4.8rem !important;
    }
`;

export const OrderBoxInputLabel = styled.span`
    font-size: 1.3rem;
    line-height: 4.8rem;
    color: #858D9A;
    width:25rem;
    z-index:0;
    position:absolute;
    left: 1rem;
`;

export const OrderBoxPriceCounter = styled.div`
    width:15rem;
    background: rgba(34, 59, 107, 0.3);
    display:flex;
    justify-content:space-between;
    &>svg{
        cursor:pointer;
        width:3rem;
        padding:0.8rem;
    }
    &>span{
        border-right:1px solid #5B5757;
        margin:0.8rem 0;
    }
`;

export const OrderBoxRangeWrapper = styled.div`
    margin-top:0.8rem;
    display:flex;
    align-items: center;
    justify-content:space-between;
    &>div:nth-child(2){
        width:18%;
        padding-right: 0.5rem;
    }
`;

export const OrderBoxInputRangePercentage = styled.span`
    line-height: 4.8rem;
    margin-left:-1rem;
    font-size: 1.4rem;
`;

export const OrderBoxInputRange = styled(Range)`
    width:75%; 
    box-sizing:border-box;
    margin-right:1.8rem;
    &>input{
        width:100%;  
        height:0.4rem;
        border:0;
        margin-top:1.8rem;
        cursor:pointer;
    }
    &>span{
        font-size:1.1rem;
    }
`;

export const OrderBoxSubmitButton = styled.button`
    width:100%;
    height: 5.6rem;
    background: #50B6D4;
    border:0;
    margin-top:3.2rem;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #FDFFFE;
    cursor:pointer;
`;