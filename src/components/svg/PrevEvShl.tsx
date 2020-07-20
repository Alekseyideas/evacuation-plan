import React from 'react';
import { IProps } from './types';
import styled from 'styled-components';

export const PrevEvShl = ({ w, h }: IProps) => {
  return (
    <WrapperS style={{ width: `${w}px`, height: `${h}px` }}>
      <InnerWrapperS />
    </WrapperS>
  );
};

const WrapperS = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.15); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const InnerWrapperS = styled.div`
  width: 100%;
  height: 100%;
  background: #00a651;
  border-radius: 5px;
`;
