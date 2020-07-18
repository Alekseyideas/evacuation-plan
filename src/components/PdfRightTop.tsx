import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
interface IProps {
  posada: string;
  pib: string;
  date: string;
}

export const PdfRightTop: React.FC<IProps> = ({ posada, pib, date }) => {
  const convertDate = moment(date || new Date()).format('DD.MM.YYYY');
  return (
    <WrapperS>
      <h2>Затверджено</h2>
      <BlockS style={{ marginTop: '10px' }}>
        <p>{posada}</p>
        <span>посада керiвника</span>
      </BlockS>
      <BlockS>
        <p>{pib}</p>
        <span>ПIБ</span>
      </BlockS>
      <BlockS>
        <p>{convertDate}</p>
        <span>дата</span>
      </BlockS>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  /* position: absolute; */
  /* bottom: 100%; */
  /* right: 0; */
  min-width: 100%;
  max-width: 240px;
  /* height: 100px; */
  h2 {
    font-size: 18px;
    margin: 0;
    text-align: right;
  }
`;

const BlockS = styled.div`
  position: relative;
  border-bottom: 1px solid grey;
  margin: 20px 0;
  padding-bottom: 0;
  input {
    width: 100%;
    text-align: right;
  }
  input,
  p {
    margin: 0;
    color: black;
    border: 0;
    padding: 0;
    /* white-space: nowrap; */
    text-align: right;
    font-size: 13px;
    line-height: 1em;
  }
  span {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: right;
    margin-top: 2px;
    opacity: 0.5;
    font-size: 12px;
    line-height: 1em;
    font-style: italic;
  }
`;
