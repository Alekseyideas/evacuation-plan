import React from 'react';
import { IProps } from './types';
import styled from 'styled-components';
import { WrapperLinesS } from './styles';
import Icon from '../../assets/images/planIcons/next.svg';
export const PrevShodi = ({ w, h, transform }: IProps) => {
  return (
    <WrapperLinesS
      style={{ width: `${w}px`, height: `${h}px`, position: 'relative' }}
    >
      <InnerWrapperS zov={!!transform}>
        <LineS />
        <LineS />
        <LineS />
        <LineS />
        <LineS />
        <LineS />
        <LineS />
      </InnerWrapperS>

      <ArrowWrapperS>
        <svg version="1.1" id="Capa_1" viewBox="0 0 31.49 31.49">
          <path
            style={{ fill: '#1E201D' }}
            d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
	C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
	c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        {/* <ArS /> */}
        {/* <img src={Icon} alt="Icon" /> */}
      </ArrowWrapperS>
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
  background: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LineS = styled.div`
  height: 100%;
  width: 1px;
  min-width: 1px;
  margin: 0;
  background: #000;
  &:last-child,
  &:first-child {
    opacity: 0;
  }
`;
const ArS = styled.div`
  position: absolute;
  height: 100%;
  width: 10%;
  right: 0;
  transform: translateX(20%);
  &::before {
    width: 100%;
    height: 18%;
    content: '';
    transform: rotate(45deg) skew(-45deg);
    background: #00ad97;
    display: block;
  }
`;

const ArrowWrapperS = styled.div`
  position: absolute;
  width: 95%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 30%;
  display: flex;
  align-items: center;
  svg {
    width: 30%;
    margin: 0 auto;
    path {
      fill: #00ad97 !important;
    }
  }
  /* &:after {
    content: '';
    display: block;
    height: 10%;
    min-height: 2px;
    margin-top: -1px;
    background: #00ad97;
    width: 100%;
  } */
  img {
    position: absolute;
    right: 0;
    margin-right: -7px;
    width: auto;
    height: 100%;
  }
`;
