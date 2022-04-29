import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const SocialChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
    width:98% !important;
    @media ${breakpoints.sm} {
        max-height: 30rem;
    }
`;
