import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import breakpoints from '~breakpoints';

export const VolumeChartWrapper = styled(ResponsiveContainer)`
    margin: 1.8rem 0;
    @media ${breakpoints.sm}{
        height:100% !important;
        max-height: 46rem;
    }
`;
