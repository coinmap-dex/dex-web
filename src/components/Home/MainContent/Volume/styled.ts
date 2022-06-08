import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const VolumeChartWrapper = styled(ResponsiveContainer)`
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
    @media ${breakpoints.sm}{
        height:100% !important;
        max-height: 46rem;
    }
`;

export const TooltipWrapper = styled.div`
    margin-top: 1.5rem;
    cursor: pointer;
    >div>div {
        @media ${breakpoints.xs}{
            left: -12.5rem;
            top: 13rem;
            &:before {
                display: none;
            }
            &:after{
                content: "";
                position: absolute;
                height: 0;
                width: 0;
                left: 100%;
                top: 48%;
                border: 5px solid transparent;
                border-left: 5px solid #181818;
            }
        }
        >div {
            @media ${breakpoints.xs}{
                display: block;
            }
            padding-left: 0;
            >span:first-child {
                margin-left: 1rem;
                @media ${breakpoints.xs}{
                    margin-left: 3rem;
                }
            }
            >span:nth-child(3) {
              margin-right: 1rem;
            }
        }
    }
`;