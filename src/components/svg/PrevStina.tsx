import React from 'react';
import { IProps } from './types';
import styled from 'styled-components';
import { WrapperLinesS } from './styles';

export const PrevStina = ({ w, h }: IProps) => {
  return (
    <WrapperLinesS style={{ width: `${w}px`, height: `${h}px` }}>
      <WrapperS />
    </WrapperLinesS>
  );
};

const WrapperS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
`;
