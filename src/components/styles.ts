import styled from 'styled-components';

export const BoxBtnsS = styled.div`
  display: flex;
  position: absolute;
  bottom: 100%;
  left: 0;
  background: rgb(83, 83, 83);
  padding: 2px;
  button {
    width: 30px;
    &:hover {
      background: rgb(23, 23, 23);
    }

    &:last-child {
      svg {
        width: 15px !important;
        height: 15px !important;
      }
    }
  }
  svg {
    width: 20px !important;
    height: 20px !important;
    fill: #fff;
  }
`;
