import React from 'react';
import styled from 'styled-components';
import { Store } from '../store';
import { IStore } from '../store/types';

export const PdfHeader = () => {
  const { store } = React.useContext<IStore>(Store);
  return (
    <>
      <TitleS>ПЛАН ЕВАКУАЦІЇ</TitleS>
      <NameWrapperS>
        {store.namePid}, {store.namePrim}
        <span>назва підприємства, приміщення</span>
      </NameWrapperS>
    </>
  );
};

const TitleS = styled.h1`
  text-align: center;
`;
const NameWrapperS = styled.div`
  text-align: center;
  max-width: 600px;
  border-bottom: 1px solid grey;
  margin: auto;
  margin-top: 20px;
  position: relative;
  margin-bottom: 48px;

  span {
    position: absolute;
    top: 100%;
    left: 0;
    text-align: center;
    width: 100%;
    opacity: 0.5;
    font-size: 14px;
    font-style: italic;
  }
`;
