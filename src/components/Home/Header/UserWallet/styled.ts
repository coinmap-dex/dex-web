import styled from "styled-components";
import breakpoints from "~breakpoints";
export default {
    HeaderUserWalletWrapper: styled.div`
        display:flex;
        align-items: center;
    `,
    HeaderUnionIconWrapper: styled.div`
        &>svg{
            width:1.9rem;
            height:100%;
            cursor:pointer;
            display:none;
            @media ${breakpoints.sm} {
                display:block;
            }
        }
    `,
    HeaderUserWalletButton: styled.div`
        width: 100%;
        height: 2.8rem;
        line-height: 2.8rem;
        text-align: center;
        background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
        border-radius: 5rem;
        font-size: 1.2rem;
        cursor: pointer;
        @media ${breakpoints.sm} {
            width: 17rem;
            height: 5.5rem;
            font-size:2.2rem;
            margin-left:2rem;
            line-height: 5.5rem;
        }
    `,
    UserAccount: styled.div`
        margin-left: 1.8rem;
        margin-top: 0.5rem;
    `,
    AccountAddress: styled.a`
        font-size: 2rem;
        line-height: 15px;
        color: #A8BCDE;
        @media ${breakpoints.xs}{
            width: 60px;
            display: inline-block;
            font-size: 12px;
        }
        >svg {
            margin-left: 1.1rem;
            padding-bottom: 0.3rem;
        }
    `,
    Logout: styled.a`
        position: absolute;
        display: block;
        width: 10rem;
        height: 3.235rem;
        background: linear-gradient(123.77deg, #993381 29.96%, #BB5387 78.97%);
        border-radius: 2.94118rem;
        text-align: center;
        line-height: 3rem;
        cursor: pointer;
        font-size: 1.29412rem;
        margin-top: 0.5rem;
        margin-left: 2%;
        @media ${breakpoints.xl}{
            margin-left: 1.6%;
        }
        @media ${breakpoints.xs}{
          width: 7rem;
          height: 2rem;
          line-height: 2rem;
          font-size: 1.1rem;
        }
    `,
}