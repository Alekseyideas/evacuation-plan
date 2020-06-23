import React from 'react';
import { useDrag } from 'react-dnd';
import { svgTypes } from '../global/svgTypes';
import { Resizable } from 're-resizable';
import { IStore, IBox } from '../store/types';
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
import { BoxBtnsS } from './styles';
import { CheckIcon } from './svg/CheckIcon';
import { RotateIcon } from './svg/RotateIcon';
import { DeleteIcon } from './svg/Del';
const style: React.CSSProperties = {
  position: 'absolute',
  // border: '1px dashed gray',
  // backgroundColor: 'white',
  // padding: '0.5rem 1rem',
  // cursor: 'move',
};
const defPad = 5;
export interface BoxProps {
  itm: IBox;
  id: any;
  left: number;
  top: number;
  name: svgTypes['tp'];
  hideSourceOnDrag?: boolean;
  updatePosition: (top: number, left: number) => void;
  removeBox: () => void;
}

export const Box: React.FC<BoxProps> = ({
  id,
  itm,
  left,
  top,
  hideSourceOnDrag,
  children,
  name,
  removeBox,
  updatePosition,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { dispatch } = React.useContext<IStore>(Store);
  // const { editMode } = store;
  const Action = new StoreAction(dispatch);
  const [oldWidth, setOldWidth] = React.useState(0);
  const [editMode, setEditMode] = React.useState(false);
  const [oldHeight, setOldHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<any>(null);
  const [rotation, setRotation] = React.useState(0);
  const [deleted, setDeleted] = React.useState(false);
  // const [resH, setResH] = React.useState(0);
  // const [resW, setResW] = React.useState(0);
  // const [resT, setResT] = React.useState(0);
  // const [resL, setResL] = React.useState(0);

  const [dirTop, setDirTop] = React.useState(false);

  const [dirRight, setDirRight] = React.useState(false);
  const isVert = rotation === 90 || rotation === 270;

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
        initialSet(100, 12);
        break;
      case 'vikV':
      case 'vikZ':
      case 'dvOtvirZ':
      case 'dvOtvirV':
        initialSet(100, 12);
        break;
      case 'shodi':
        initialSet(100, 60);
        break;
      default:
        initialSet(90, 45);
    }
  }, [isVert, name]);

  const saveHandler = () => {
    setEditMode(false);
  };

  const rotateHandler = () => {
    setRotation((oldVal) => {
      const newV = oldVal + 90;
      if (ref && ref.current) {
        if (newV === 90 || newV === 270) {
          ref.current.updateSize({
            width: height + defPad,
            height: width + defPad,
          });
        } else {
          ref.current.updateSize({
            width: width + defPad,
            height: height + defPad,
          });
        }
      }
      return newV === 360 ? 0 : newV;
    });
  };

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

  if (deleted) return null;
  if (isDragging) {
    return <div ref={drag} style={{ transform: `rotate(-${rotation}deg)` }} />;
  }

  if (editMode) {
    return (
      <Resizable
        className="31232131"
        ref={ref}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
        style={{
          border: '1px solid',
          padding: '1px',
          position: 'absolute',
          left,
          top,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // bottom: dirTop ? 745 - resH - resT : 'inherit',
          // top: !dirTop ? top : 'inherit',
          // right: !dirRight ? right : 'inherit',
          // left: dirRight ? 950 - right - resW : 'inherit',
        }}
        minHeight={10}
        minWidth={10}
        onResizeStop={(e, direction, ref, d) => {
          if (isVert) {
            setOldWidth((oldWidth2) => oldWidth2 + d.height);
            setOldHeight((oldHeight2) => oldHeight2 + d.width);
          } else {
            setOldWidth((oldWidth2) => oldWidth2 + d.width);
            setOldHeight((oldHeight2) => oldHeight2 + d.height);
          }
        }}
        onResize={(e, direction, ref, d) => {
          const dir = direction.toLocaleLowerCase();
          if (dir.includes('top')) {
            if (!dirTop) {
              setDirTop(true);
            }
          }
          if (dir.includes('bottom')) {
            if (dirTop) {
              setDirTop(false);
            }
          }

          if (dir.includes('left')) {
            if (dirRight) {
              setDirRight(false);
            }
          }
          if (dir.includes('right')) {
            if (!dirRight) {
              setDirRight(true);
            }
          }

          if (isVert) {
            // setResH(d.height + oldWidth);
            // setResW(d.width + oldHeight);
            setWidth(() => d.height + oldWidth);
            setHeight(() => d.width + oldHeight);
          } else {
            // setResH(d.width + oldWidth);
            // setResW(d.height + oldHeight);
            if (d.width + oldWidth > 10 && d.height + oldHeight > 10) {
              setWidth(() => d.width + oldWidth);
              setHeight(() => d.height + oldHeight);
            }
          }
        }}
        defaultSize={{
          width: isVert ? height + defPad : width + defPad,
          height: isVert ? width + defPad : height + defPad,
        }}
      >
        <BoxBtnsS
          style={{
            bottom: top >= 30 ? '100%' : 'initial',
            top: top < 30 ? '100%' : 'initial',
          }}
        >
          <button onClick={saveHandler}>
            <CheckIcon />
          </button>
          <button onClick={rotateHandler}>
            <RotateIcon />
          </button>
          <button
            onClick={() => {
              setEditMode(false);
              setDeleted(true);
              removeBox();
            }}
          >
            <DeleteIcon />
          </button>
        </BoxBtnsS>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(-${rotation}deg)`,
          }}
        >
          {renderSrc}
        </div>
      </Resizable>
    );
  }
  return (
    <div
      ref={drag}
      style={{
        ...style,
        left,
        top,
        // width,
        // height,
        width: isVert ? height : width,
        height: isVert ? width : height,
        // transform: `rotate(-${rotation}deg)`,\
        transform: `rotate(-${rotation}deg)`,
      }}
      onClick={() => {
        // setResH(height);
        // setResW(width);
        // setResT(top);
        // setResL(left);

        Action.setApply(false);
        Action.setEditMode(true);
        Action.setEditItem(itm);
        setEditMode(true);
      }}
    >
      <div
        style={{
          // transform: isVert
          // ? `rotate(-${rotation}deg)`
          // : `rotate(-${rotation}deg)`,
          // transform: `rotate(-${rotation - 90}deg)`,
          width,
          height,
          position: isVert ? 'absolute' : 'relative',
          top: '0',
          left: '0',
        }}
      >
        {renderSrc}
      </div>
    </div>
  );
};
