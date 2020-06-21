import React from 'react';
import { IProps } from './types';
import styled from 'styled-components';
import { WrapperLinesS } from './styles';

export const PrevVikno = ({ w, h, transform }: IProps) => {
  return (
    <WrapperLinesS style={{ width: `${w}px`, height: `${h}px` }}>
      <InnerWrapperS zov={!!transform} />
    </WrapperLinesS>
  );
};

const InnerWrapperS = styled.div<{ zov: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid;
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
  ${({ zov }) =>
    zov
      ? `
	&:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: white;
    display: block;
    width: 33%;
    height: 20%;
    background: black;
  }`
      : null}
`;
