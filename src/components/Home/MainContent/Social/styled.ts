import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const SocialChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
    width:98% !important;
    .recharts-wrapper {
        .recharts-cartesian-axis-ticks {
            .recharts-cartesian-axis-tick {
                text {
                    fill: #F4F7FC;
                    font-size: 1.15rem;
                }
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

export const TooltipWrapper = styled.div`
    margin-left: 3rem;
    margin-top: 1.5rem;
    cursor: pointer;
    >div>div>div {
        padding-left: 0;
        >span:first-child {
            margin-left: 1rem;
        }
        >span:nth-child(2) {
            margin-right: 1rem;
        }
    }
`;
