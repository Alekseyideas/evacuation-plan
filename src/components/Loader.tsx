import React, { ReactElement } from 'react';
import styled from 'styled-components';

export default function Loader(): ReactElement {
  return (
    <>
      <WrapperS className="laoder">
        <LoaderS>
          <span />
          <span />
          <span />
        </LoaderS>
      </WrapperS>
    </>
  );
}

const WrapperS = styled.div`
  position: fixed;
  z-index: 99999;
  background: rgba(255, 255, 255, 1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 999;
`;

const LoaderS = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #4791d2;
    margin: 35px 5px;
    opacity: 0;
    &:nth-child(1) {
      animation: opacitychange 1s ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: opacitychange 1s ease-in-out 0.33s infinite;
    }
    &:nth-child(3) {
      animation: opacitychange 1s ease-in-out 0.66s infinite;
    }
  }

  @keyframes opacitychange {
    0%,
    100% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }
  }
`;
