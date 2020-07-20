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
// import { CheckIcon } from './svg/CheckIcon';
import { RotateIcon } from './svg/RotateIcon';
import { DeleteIcon } from './svg/Del';
const style: React.CSSProperties = {
  position: 'absolute',
};
const defPad = 0;
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
  // updatePosition,
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
  const wRef = React.useRef<any>(null);
  const [rotation, setRotation] = React.useState(0);
  const [deleted, setDeleted] = React.useState(false);
  const [minHeight, setMinHeight] = React.useState(10);
  const [minWidth, setMinWidth] = React.useState(10);
  const [maxHeight, setMaxHeight] = React.useState(0);
  const [maxWidth, setMaxWidth] = React.useState(0);
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
    setMinHeight(0);
    setMaxHeight(0);
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
      case 'vikV':
      case 'dvOtvirV':
      case 'vnutrStina':
        initialSet(100, 12);
        setMinHeight(12);
        setMaxHeight(12);
        break;
      case 'vikZ':
      case 'dvOtvirZ':
      case 'zovnStina':
        initialSet(100, 18);
        setMinHeight(18);
        setMaxHeight(18);
        break;
      case 'shodi':
        initialSet(100, 60);
        break;
      default:
        initialSet(90, 45);
    }
  }, [name]);

  const saveHandler = React.useCallback(() => {
    setEditMode(false);
    if (isVert) {
      console.log(top, left);
      // updatePosition(top + width, left + height);
    }
  }, [isVert, left, top]);

  React.useEffect(() => {
    const handleClick = (event: any) => {
      // console.log(wRef.current);
      if (wRef.current && !wRef.current.contains(event.target)) {
        saveHandler();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [wRef, saveHandler]);

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
  let isProportional = false;
  let isHalf = false;
  switch (name) {
    case 'dvOtvirZ':
    case 'dvOtvirV':
      renderSrc = <PrevDveri w={width} h={height} />;
      break;
    case 'exit':
      renderSrc = <PrevExit w={width} h={height} />;
      isProportional = true;
      isHalf = true;
      break;
    case 'zExit':
      renderSrc = <PrevZExit w={width} h={height} />;
      isProportional = true;
      isHalf = true;
      break;
    case 'nprDoVL':
      renderSrc = <PrevNapLeft w={width} h={height} />;
      isProportional = true;
      isHalf = true;
      break;

    case 'nprDoVP':
      renderSrc = <PrevNapLeft w={width} h={height} transform />;
      isProportional = true;
      isHalf = true;
      break;
    case 'evSh':
      renderSrc = <PrevEvShl w={width} h={height} />;
      isProportional = true;
      isHalf = true;
      break;
    case 'tel':
      renderSrc = <PrevPhone w={width} h={height} />;
      isProportional = true;
      isHalf = false;
      break;
    case 'vogn':
      renderSrc = <PrevVogn w={width} h={height} />;
      isProportional = true;
      isHalf = false;
      break;
    case 'pogSp':
      renderSrc = <PrevSpov w={width} h={height} />;
      isProportional = true;
      isHalf = false;
      break;
    case 'pogKran':
      renderSrc = <PrevKran w={width} h={height} />;
      isProportional = true;
      isHalf = false;
      break;
    case 'pogDrabina':
      renderSrc = <PrevDrabina w={width} h={height} />;
      isProportional = true;
      isHalf = false;
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
      isProportional = true;
      isHalf = false;
      break;

    case 'location':
      renderSrc = <PrevLocation w={width} h={height} />;
      isProportional = true;
      isHalf = false;
      break;
    default:
      renderSrc = null;
  }

  if (deleted) return null;
  if (isDragging) {
    return <div ref={drag} style={{ transform: `rotate(-${rotation}deg)` }} />;
  }

  if (editMode) {
    let maxH = maxHeight;
    let minH = minHeight;
    if (isProportional && !isHalf) {
      maxH = width;
      minH = width;
    }
    if (isProportional && isHalf) {
      maxH = width / 2;
      minH = width / 2;
    }
    return (
      <div ref={wRef}>
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
            boxShadow: '0 0 0 1px yellow',
            padding: '0',
            position: 'absolute',
            left,
            top,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          lockAspectRatioExtraHeight={2}
          minHeight={minH || undefined}
          minWidth={minWidth || undefined}
          maxHeight={isVert ? undefined : maxH || undefined}
          maxWidth={isVert ? maxHeight || undefined : undefined}
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
            {/* <button onClick={saveHandler}>
            <CheckIcon />
          </button> */}
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
      </div>
    );
  }
  const heightHalf = height / 2;
  const heightHalfx2 = height + height / 2;

  return (
    <div
      ref={drag}
      style={{
        ...style,
        left,
        top,
        width: isVert ? height : width,
        height: isVert ? width : height,
      }}
      onClick={() => {
        Action.setApply(false);
        Action.setEditMode(true);
        Action.setEditItem(itm);
        setEditMode(true);
      }}
    >
      <div
        style={{
          transform: `rotate(-${rotation}deg) ${
            isVert && rotation !== 270
              ? `translate(calc(-100% + ${heightHalf}px), 50%)`
              : rotation === 180
              ? `translate(-100%, calc(50% - ${heightHalf}px))`
              : isVert && rotation === 270
              ? `translate(calc(-100% + ${heightHalfx2}px), calc(-100% + ${heightHalf}px))`
              : ''
          }`,
          width,
          height,
          transformOrigin: 'left',
        }}
      >
        {renderSrc}
      </div>
    </div>
  );
};
