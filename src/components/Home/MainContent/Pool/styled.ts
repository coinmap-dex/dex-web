import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const lengend = styled.div`
    width:calc(100% - 50px);
    margin-left:50px;
    margin-top:2rem;
    display:flex;
`;

export const lengendItem = styled.span`
    margin-right: 3rem;
    color: #000;
    &>*{
        vertical-align:middle;
    }
    &>span{
        font-size: 0.8rem;
        margin-left: 0.4rem;
        color: #fff;
        white-space: nowrap;
        @media ${breakpoints.xxl}{
            margin-left: 0.8rem;
        }
    }
    >svg.recharts-surface {
        background: linear-gradient(180deg, #2D149D 0%, #411185 100%);
        opacity: 0.8;
        border: 1px solid #284C8B;
        border-radius: 3px;
    }
`;

export const TitleTotalSupply = styled.div`
    font-size: 1.44rem;
    text-transform: uppercase;
    margin-left: 2rem;
    &>span{
        color: orange;
    }
`;
export const Pools = styled.div`
    padding:0 1.8rem;
    font-size:1.5rem;
    text-transform:uppercase;
    margin-bottom:3.5rem;
    @media ${breakpoints.sm}{
      margin-bottom: auto;
    }
`;
export const Pool = styled.div`
    margin:2rem 0;
    line-height:2.7rem;
    @media ${breakpoints.sm}{
        margin:2rem 0;
    }
    & a{
        color:#50B6D4;
    }
    & span{
        color:#04fae0;
    }
`;

export const PoolChart = styled(ResponsiveContainer)`
    height: 30rem !important;
    .recharts-wrapper {
        .recharts-cartesian-axis-ticks {
            .recharts-cartesian-axis-tick {
                text {
                    fill: #F4F7FC;
                    font-size: 1.15rem;
                }
            }
        }
        .recharts-surface {
            path.recharts-curve.recharts-tooltip-cursor {
                visibility: hidden;
            }
        }
        .recharts-tooltip-wrapper {
            .recharts-default-tooltip {
                .recharts-tooltip-item {
                    .recharts-tooltip-item-name {
                        color: #B6BBC3;
                    }
                    .recharts-tooltip-item-separator {
                        color: #B6BBC3;
                    }
                    .recharts-tooltip-item-value {
                        color: #f3aa3c;
                    }
                }
            }
        }
    }
    @media ${breakpoints.sm} {
        height: 100% !important;
        max-height: 28rem;
    }
`;
