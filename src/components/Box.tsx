import React from 'react';
import { useDrag } from 'react-dnd';
import { svgTypes } from '../global/svgTypes';
import exit from '../assets/images/planIcons/exit.svg';
import { Resizable } from 're-resizable';
import { IStore } from '../store/types';
import { Store } from '../store';
import StoreAction from '../store/StoreAction';
import { PrevExit } from './svg/PrevExit';
import { PrevZExit } from './svg/PrevZExit';
import { PrevEvShl } from './svg/PrevEvShl';
import { PrevNapLeft } from './svg/PrevNapLeft';
import { PrevPhone } from './svg/PrevPhone';
import { PrevVogn } from './svg/PrevVogn';
import { PrevSpov } from './svg/PrevSpov';
import { PrevKran } from './svg/PrevKran';
import { PrevDrabina } from './svg/PrevDrabina';
import { PrevLocation } from './svg/PrevLocation';
import { PrevStina } from './svg/PrevStina';
import { PrevDveri } from './svg/PrevDveri';
import { PrevVikno } from './svg/PrevVikno';
import { PrevShodi } from './svg/PrevShodi';
const style: React.CSSProperties = {
  position: 'absolute',
  // border: '1px dashed gray',
  // backgroundColor: 'white',
  // padding: '0.5rem 1rem',
  // cursor: 'move',
};

export interface BoxProps {
  id: any;
  left: number;
  top: number;
  name: svgTypes['tp'];
  hideSourceOnDrag?: boolean;
  updatePosition: (top: number, left: number) => void;
}

export const Box: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  name,
  updatePosition,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { store, dispatch } = React.useContext<IStore>(Store);
  // const { editMode } = store;
  const Action = new StoreAction(dispatch);
  const [oldWidth, setOldWidth] = React.useState(0);
  const [editMode, setEditMode] = React.useState(false);
  const [oldHeight, setOldHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const initialSet = (w: number, h: number) => {
      setOldWidth(w);
      setOldHeight(h);
      setWidth(w);
      setHeight(h);
    };
    switch (name) {
      case 'exit':
      case 'zExit':
      case 'nprDoVL':
      case 'nprDoVP':
        initialSet(90, 45);
        break;
      case 'evSh':
        initialSet(90, 13);
        break;
      case 'pogSp':
      case 'pogKran':
      case 'pogDrabina':
      case 'vogn':
      case 'location':
      case 'tel':
        initialSet(40, 40);
        break;
      case 'vnutrStina':
      case 'zovnStina':
        initialSet(40, 15);
        break;
      case 'vikV':
      case 'vikZ':
      case 'dvOtvirZ':
      case 'dvOtvirV':
        initialSet(100, 15);
        break;
      case 'shodi':
        initialSet(100, 60);
        break;
      default:
        initialSet(90, 45);
    }
  }, [name]);
  React.useEffect(() => {
    if (editMode) {
      document.querySelector('#rightBtn-2')?.addEventListener('click', () => {
        console.log(132);
        setEditMode(false);
        // updatePosition(745 - oldHeight - oh, left);
      });
    }
  }, [editMode]);

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  let renderSrc: any = null;

  switch (name) {
    case 'dvOtvirZ':
    case 'dvOtvirV':
      renderSrc = <PrevDveri w={width} h={height} />;
      break;
    case 'exit':
      renderSrc = <PrevExit w={width} h={height} />;
      break;
    case 'zExit':
      renderSrc = <PrevZExit w={width} h={height} />;
      break;
    case 'nprDoVL':
      renderSrc = <PrevNapLeft w={width} h={height} />;
      break;

    case 'nprDoVP':
      renderSrc = <PrevNapLeft w={width} h={height} transform />;
      break;
    case 'evSh':
      renderSrc = <PrevEvShl w={width} h={height} />;
      break;
    case 'tel':
      renderSrc = <PrevPhone w={width} h={height} />;
      break;
    case 'vogn':
      renderSrc = <PrevVogn w={width} h={height} />;
      break;
    case 'pogSp':
      renderSrc = <PrevSpov w={width} h={height} />;
      break;
    case 'pogKran':
      renderSrc = <PrevKran w={width} h={height} />;
      break;
    case 'pogDrabina':
      renderSrc = <PrevDrabina w={width} h={height} />;
      break;
    case 'vnutrStina':
      renderSrc = <PrevStina w={width} h={height} />;
      break;
    case 'zovnStina':
      renderSrc = <PrevStina w={width} h={height} />;
      break;
    case 'vikV':
    case 'vikZ':
      renderSrc = (
        <PrevVikno w={width} h={height} transform={name === 'vikZ'} />
      );
      break;
    case 'shodi':
      renderSrc = <PrevShodi w={width} h={height} />;
      break;

    case 'location':
      renderSrc = <PrevLocation w={width} h={height} />;
      break;
    default:
      renderSrc = null;
  }

  if (isDragging) {
    return <div ref={drag} />;
  }
  if (editMode) {
    return (
      <Resizable
        className="31232131"
        ref={ref}
        style={{
          border: '1px solid',
          padding: '10px',
          position: 'absolute',
          left,
          top,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // bottom: !t ? oh : 'inherit',
        }}
        minHeight={33}
        minWidth={40}
        onResizeStop={(e, direction, ref, d) => {
          // if (!editMode) seOhL(745 - oldHeight - top);
          setOldWidth((oldWidth) => oldWidth + d.width);
          setOldHeight((oldHeight) => oldHeight + d.height);
        }}
        onResize={(e, direction, ref, d) => {
          if (
            direction === 'bottomLeft' ||
            direction === 'bottom' ||
            direction === 'bottomRight'
          ) {
          }
          if (
            direction === 'top' ||
            direction === 'topLeft' ||
            direction === 'topRight'
          ) {
          }
          if (d.width + oldWidth > 10 && d.height + oldHeight > 10) {
            setWidth(() => d.width + oldWidth);
            setHeight(() => d.height + oldHeight);
          }
        }}
        defaultSize={{
          width: width + 20,
          height: height + 20,
        }}
      >
        {renderSrc}
      </Resizable>
    );
  }

  return (
    <div
      ref={drag}
      style={{ ...style, left, top, width, height }}
      onClick={() => {
        Action.setApply(false);
        Action.setEditMode(true);
        setEditMode(true);
      }}
    >
      {renderSrc}
    </div>
  );
};
