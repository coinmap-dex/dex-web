import styled from 'styled-components';

export default {
    TokenListWrapper: styled.div`
      width: 40rem;
      height: 49rem;
      background: #0F1A30;
      border: 1px solid rgba(44, 54, 73, 0.3);
    `,
    TitleContainer: styled.div`
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(46, 58, 82, 0.3);
      >div>svg {
        margin: 1.5rem 1.5rem 1.5rem 0;
        cursor: pointer;
        width: 4rem;
      }
    `,
    Title: styled.div`
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.1rem;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 3rem 0 1.8rem 3.4rem;
    `,
}