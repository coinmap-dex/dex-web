import styled from 'styled-components';

export default {
    ImportTokenWrapper: styled.div`
      margin: 1.3rem 2.5rem 3.5rem 2.5rem;
    `,
    Description: styled.div`
      margin-bottom: 2.8rem;
      font-size: 1.5rem;
      color: #A8BCDE;
      line-height: 2.2rem;
    `,
    BscScanContainer: styled.div`
      
    `,
    BscTitle: styled.div`
      display: flex;
      font-size: 1.5rem;
      color: #50B6D4;
      margin-bottom: 1.6rem;
      align-items: self-end;
      cursor: pointer;
      >img {
        width: 2.4rem;
        margin-right: 1rem;
      }
    `,
    BscTokenTile: styled.div`
      padding: 0.3rem 1.7rem;
      font-size: 1.6rem;
      border: 1px solid rgba(168, 188, 222, 0.4);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 2.4rem;
    `,
    BscButtonContainer: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    `,
    CheckboxContainer: styled.label`
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      position: relative;
      >input[type='checkbox'] {
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid rgba(238, 234, 244, 0.4);
        border-radius: 6px;
        background-color: #0F1A30;
        appearance: none;
        cursor: pointer;
        &:checked + span::before {
          content: '\\2713';
          display: block;
          text-align: center;
          color: #A8BCDE;
          position: absolute;
          left: 1rem;
          top: 0.8rem;
          cursor: pointer;
        }
      }
      >span {
        color: #A8BCDE;
        margin-left: 0.5rem;
      }
    `,
    ImportButton: styled.div`
      width: 10.8rem;
      height: 4.247rem;
      background: #50B6D4;
      border-radius: 0.849438rem;
      font-size: 1.94157rem;
      text-align: center;
      line-height: 4.2rem;
      cursor: pointer;
    `
}
