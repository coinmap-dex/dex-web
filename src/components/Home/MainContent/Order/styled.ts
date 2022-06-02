import { Button, Input, Range, Select } from "sezy-design";
import styled from "styled-components";

export default {
    OrderTitleBox: styled.div`
        display:flex;
        align-items:center;
        padding: 0 1.8rem;
        position:relative;
        height:6.4rem;
        line-height:6.4rem;
    `,
    OrderOrderType: styled.div`
        font-size: 1.3rem;
        color: ${props => props['active'] ? '#2BDBEA' : '#FDF4F4'};
        text-transform: uppercase;
    `,
    OrderSlash: styled.div`
        color: #FDF4F4;
        margin:0 0.8rem 0 0.4rem;
    `,
    OrderTitleMarginRate: styled.div`
        font-size: 1rem;
        line-height: 1.2rem;
        width: 2.8rem;
        color: #BFE6FC;
        background: rgba(41, 219, 234, 0.4);
        text-align:center;
        margin-left:0.5rem;
        margin-top:-1rem;
    `,
    OrderPlaceTypes: styled.div`
        display: flex;
        align-items: center;
        padding: 1.5rem 1.8rem;
        background: #1C2740;
        cursor: pointer;
    `,
    OrderPlaceType: styled.div`
        font-size: 1.4rem;
        color: ${props => props['active'] ? '#fff' : '#B9C2D0'};
        text-transform: capitalize;
        margin-right:3rem;
    `,
    OrderBox: styled.div`
        padding: 1.8rem;
    `,
    OrderBoxBuySell: styled.div`
        display:flex;
        justify-content:space-between;
        margin-bottom:1rem;
        >button {
            text-transform: uppercase
        }
    `,
    OrderBoxBuyButton: styled.button`
        width:49%;
        height:4.2rem;
        line-height:1.8rem;
        font-size:1.8rem;
        color: ${props => props['active'] ? '#fff' : '#848C99'};
        border: 1px solid ${props => props['active'] ? '#3775B7' : '#2E3A52'};
        background: transparent;
        cursor:pointer;
    `,
    OrderBoxSellButton: styled.button`
        width:49%;
        height:4.2rem;
        line-height:1.8rem;
        font-size:1.8rem;
        color: ${props => props['active'] ? '#fff' : '#848C99'};
        border: 1px solid ${props => props['active'] ? '#D05841' : '#2E3A52'};
        background: transparent;
        cursor:pointer;
    `,
    OrderBoxDetail: styled.div`
        display:flex;
        justify-content:space-between;
        align-items: center;
        color:#858D9A;
        font-size:1.4rem;
        margin-top:1rem;
    `,
    TokenSelect: styled(Select)`
        width: 8rem;
        display: inline-block;
        background-color: #0D172D;
        margin-left: 2rem;
        >div:first-child {
          height: 2.8rem;
          & input{
            color: #E5A03B;
            font-size: 1.4rem;
            padding: 0 !important;
            text-align: center;
          }
          & svg{
              fill: #E5A03B;
          }
        }
    `,
    Balance: styled.div`
        white-space: nowrap;
    `,
    OrderBoxInputWrapper: styled.div`
        margin-top:0.8rem;
        position:relative;
    `,
    OrderBoxInput: styled(Input)`
        height:4.8rem !important;
        padding:0;
        border: 1px solid #2E3A52;
        &>input{
            font-size:1.3rem !important;
            color: #B9C2D0;
            text-align:right;
            height:4.8rem !important;
            line-height:4.8rem !important;
            &::placeholder {
                color: #B9C2D0;
            }
        }
    `,
    OrderBoxInputLabel: styled.span`
        font-size: 1.3rem;
        line-height: 4.8rem;
        color: #858D9A;
        width:25rem;
        z-index:0;
        position:absolute;
        left: 1rem;
    `,
    OrderBoxPriceCounter: styled.div`
        width:15rem;
        background: rgba(34, 59, 107, 0.3);
        display:flex;
        justify-content:space-between;
        &>div{
        }
        & svg{
            cursor:pointer;
            width:3rem;
            padding:0.8rem;
            cursor:pointer;
        }
        &>span{
            border-right:1px solid #5B5757;
            margin:0.8rem 0;
        }
    `,
    OrderBoxRangeWrapper: styled.div`
        margin-top:0.8rem;
        display:flex;
        align-items: center;
        justify-content:space-between;
        &>div:nth-child(2){
            width:18%;
            padding-right: 0.5rem;
        }
    `,
    OrderBoxInputRangePercentage: styled.span`
        line-height: 4.8rem;
        margin-left:-1rem;
        font-size: 1.4rem;
    `,
    OrderBoxInputRange: styled(Range)`
        width: 75%; 
        box-sizing: border-box;
        margin-top: 1.8rem;
        margin-right: 1.8rem;
        &>input{
            width: 100%;  
            height: 0.1rem;
            border: 0;
            cursor: pointer;
            background-color: #2E3A52;
        }
        &>span{
            font-size: 1.1rem;
            padding-bottom: 5px;
        }
    `,
    SubmitOrder: styled(Button)`
        width:100%;
        height: 5.6rem;
        background: ${props => props['active'] ? '#50B6D4' : '#EF6777'};
        border:0;
        margin-top:3.2rem;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: #FDFFFE;
        cursor:pointer;
        &:hover {
            background: ${props => props['active'] ? '#14B5E5' : '#FF5C70'};
        }
    `,
}