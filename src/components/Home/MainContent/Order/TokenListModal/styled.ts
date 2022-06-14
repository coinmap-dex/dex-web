import styled from 'styled-components';

export default {
    ItemContainer: styled.div`
      margin: 3.5rem 0 3.8rem 2.2rem;
      overflow-y: auto;
      max-height: 31rem;
      >div:first-child {
        margin-top: 0;
      }
      &::-webkit-scrollbar {
        width: 6px;
        height: 67px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(15, 10, 28, 0.5);
        border: 1px solid #3D3A42;
        border-radius: 3px;
      }
    `
}