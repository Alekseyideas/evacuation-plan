import React from 'react';
import { IProps } from './types';
import styled from 'styled-components';
import { WrapperLinesS } from './styles';

export const PrevDveri = ({ w, h }: IProps) => {
  return (
    <WrapperLinesS style={{ width: `${w}px`, height: `${h}px` }}>
      <InnerWrapperS />
    </WrapperLinesS>
  );
};

const InnerWrapperS = styled.div`
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    display: block;
    width: 33%;
    height: 100%;
  }
`;
