import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const lengend = styled.div`
    width:calc(100% - 5rem);
    margin-left:5rem;
    margin-top:2rem;
    display:flex;
    justify-content:space-between;
`;

export const lengendItem = styled.span`
    margin-right: 2rem;
    color: #000;
    display:flex;
    align-items:center;
    &>*{
        vertical-align:middle;
    }
    &>span{
        font-size:0.8rem;
        margin-left:0.8rem;
        color:#fff;
        line-height:0.9rem;
    }
`;

export const HolderChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
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
                        color: #50b6d4;
                    }
                }
            }
        }
    }
    @media ${breakpoints.sm} {
        max-height: 30rem;
    }
`;
