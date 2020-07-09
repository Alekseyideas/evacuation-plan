import React from 'react';
import styled from 'styled-components';
// import { EvShl } from './svg/EvShl';
import { PrevEvShl } from './svg/PrevEvShl';
import { PrevExit } from './svg/PrevExit';
import { PrevZExit } from './svg/PrevZExit';
import { PrevNapLeft } from './svg/PrevNapLeft';
import { PrevSpov } from './svg/PrevSpov';
import { PrevPhone } from './svg/PrevPhone';
import { PrevVogn } from './svg/PrevVogn';
import { PrevKran } from './svg/PrevKran';
import { PrevLocation } from './svg/PrevLocation';
import { PdfRightTop } from './PdfRightTop';
import { Store } from '../store';
import { IStore } from '../store/types';

export const PdfPlanInfo = () => {
  const { store } = React.useContext<IStore>(Store);
  return (
    <>
      <TextWrapperS>
        <PdfRightTop date={store.date} posada={store.posada} pib={store.pib} />
        <h4>ДІЇ ПІД ЧАС ПОЖЕЖІ</h4>
        <p>
          1. Зателефонуйте 101 і повідомте адресу об’єкта; місце виникнення
          пожежі; своє прізвище. <br />
          <br /> 2. Під час евакуації орієнтуйтеся по знаках напрямку руху;
          візьміть з собою постраждалих. <br />
          <br />
          3. По змозі вживайте заходи з гасіння пожежі: використовуйте засоби
          протипожежного захисту; за потреби знеструмте приміщення.
        </p>
        <h4>УМОВНІ ПОЗНАЧЕННЯ</h4>
        <WrapperPosS>
          <SvgWrapperS>
            <PrevEvShl w={50} h={10} />
          </SvgWrapperS>
          <span>Евакуаційний шлях</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '25px' }}>
            <PrevExit w={50} h={25} />
          </SvgWrapperS>
          <span>Евакуаційний вихід</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '25px' }}>
            <PrevZExit w={50} h={25} />
          </SvgWrapperS>
          <span>Запасний евакуаційний вихід</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '25px' }}>
            <PrevNapLeft w={50} h={25} />
          </SvgWrapperS>
          <span>Напрямок руху до виходу ліворуч</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '25px', transform: 'scale(-1, 1)' }}>
            <PrevNapLeft w={50} h={25} />
          </SvgWrapperS>
          <span>Напрямок руху до виходу праворуч</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '30px' }}>
            <PrevSpov w={30} h={30} />
          </SvgWrapperS>
          <span>Ручний пожежний сповіщувач</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '30px' }}>
            <PrevPhone w={30} h={30} />
          </SvgWrapperS>
          <span>Телефон</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '30px' }}>
            <PrevVogn w={30} h={30} />
          </SvgWrapperS>
          <span>Вогнегасник</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '30px' }}>
            <PrevKran w={30} h={30} />
          </SvgWrapperS>
          <span>Пожежний кран-комплект</span>
        </WrapperPosS>
        <WrapperPosS>
          <SvgWrapperS style={{ height: '30px' }}>
            <PrevLocation w={30} h={30} />
          </SvgWrapperS>
          <span>Ви перебуваєте тут</span>
        </WrapperPosS>
      </TextWrapperS>
    </>
  );
};
const SvgWrapperS = styled.div`
  width: 50px;
`;
const WrapperPosS = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-left: 10px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1em;
  }
`;
const TextWrapperS = styled.div`
  margin-top: -130px;
  h4 {
    margin: 0 0 10px;
  }
  p {
    color: black;
    font-size: 14px;
    line-height: 1.3em;
  }
`;
