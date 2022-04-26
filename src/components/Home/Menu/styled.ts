import { Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export default {
    MenuSection: styled(Section)`
        background: #23304A;
        padding: 1.2rem 1rem;
        color:#A8BCDE;
        border-top: 1px solid rgba(191, 201, 221, 0.2);
        border-bottom: 1px solid rgba(191, 201, 221, 0.2);
        @media ${breakpoints.sm}{
            padding: 0 5rem;
            margin-bottom: 1.3rem;
        }
    `,
    MenuRow: styled(Row)`
        width:100%;
        &>div{
            text-align: center;
            font-size: 2.4rem;
            height: 7.8rem;
            line-height: 7.8rem;
            white-space: nowrap;
            flex: 0 0 12%;
            @media ${breakpoints.sm}{
                
            }
        }
    `,
    NavigationWrapper: styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
    `,
    NavigationIconWrapper: styled(Row)`
        width:1.8rem;
        height:1.8rem;
    `
}