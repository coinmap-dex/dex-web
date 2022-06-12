import styled from 'styled-components';

export default {
    ItemWrapper: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2.8rem 0;
      padding-right: 2.5rem;
    `,
    ItemContent: styled.div`
      display: flex;
      align-items: center;
      >img {
        width: 3rem;
      }
    `,
    ItemInfo: styled.div`
      font-size: 1.7rem;
      padding-left: 1.3rem;
    `,
    Balance: styled.span`
      color: #FEFEFE;
    `,
    Symbol: styled.span`
      color: #50B6D4;
    `,
    Name: styled.span`
      color: #868890;
    `,
    ImportButton: styled.div`
      width: 8.718rem;
      height: 3.428rem;
      background: #50B6D4;
      border-radius: 0.685666rem;
      font-size: 1.56724rem;
      text-align: center;
      line-height: 3.3rem;
      cursor: pointer;
    `,
}