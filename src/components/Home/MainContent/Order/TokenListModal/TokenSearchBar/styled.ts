import styled from 'styled-components';
import {Input} from 'sezy-design';
import SearchIcon from '~svg/Search';

export default {
    Wrapper: styled.div`
      position: relative;
      height: 4.3rem;
    `,
    Search: styled(Input)`
      background: transparent;
      border: 0.1rem solid rgba(168, 188, 222, 0.4);
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 4rem;
      height: 4.3rem;
      margin: 1.3rem 1.1rem;
      &>input{
        color: #A8BCDE;
        opacity: 0.5;
        text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        font-size: 1.4rem;
      }
      &>svg {
        &>circle{
          stroke: #5B5A99;
        }
        &>path{
          stroke: #5B5A99;
        }
      }
    `,
    SearchIcon: styled(SearchIcon)`
      margin-right: 0 !important;
      width: 1.5rem;
      height: 100%;
      fill: transparent;
    `
}