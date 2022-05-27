import { ResponsiveContainer } from "recharts";
import { Row } from "sezy-design";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const lengend = styled(Row)`
    width:calc(100% - 5rem);
    justify-content:space-between;
    align-items:stretch;
    margin-top:2rem;
    margin-left:5rem !important;
`;

export const lengendItem = styled.div`
    color: #000;
    align-items:center;
    display:flex;
    &>*{
        align-items:center;
        display:flex;
    }
    & span{
        font-size:0.8rem;
        margin-left:0.8rem;
        color:#fff;
        line-height:0.9rem;
        flex:1;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &>div {
        >svg.recharts-surface {
            background: #C9A506;
            opacity: 0.8;
            border: 1px solid rgba(254, 233, 41, 0.8);
            border-radius: 3px;
        }
    }
`;

export const SharkChartWrapper = styled(ResponsiveContainer)`
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
                        color: #f3aa3c;
                    }
                }
            }
        }
    }
    @media ${breakpoints.sm} {
        max-height: 46rem;
    }
`;
