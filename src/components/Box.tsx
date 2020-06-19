import React from 'react';
import { useDrag } from 'react-dnd';
import { svgTypes } from '../global/svgTypes';
import exit from '../assets/images/planIcons/exit.svg';
import { Resizable } from 're-resizable';
import { IStore } from '../store/types';
import { Store } from '../store';
import StoreAction from '../store/StoreAction';
import { PrevExit } from './svg/PrevExit';
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
}

export const Box: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  name,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { store, dispatch } = React.useContext<IStore>(Store);
  const { editMode } = store;
  const Action = new StoreAction(dispatch);
  const defW = 90;
  const defH = 45;
  const [oldWidth, setOldWidth] = React.useState(defW);
  const [oldHeight, setOldHeight] = React.useState(defH);
  const [width, setWidth] = React.useState(defW);
  const [height, setHeight] = React.useState(defH);
  const [r, setR] = React.useState(false);
  const [t, setT] = React.useState(true);
  const [b, setB] = React.useState(false);
  const [l, setL] = React.useState(true);
  const [oh, seOhL] = React.useState(735 - oldHeight - top);
  const [ot, seOt] = React.useState(top);

  React.useEffect(() => {
    if (!editMode && !t) {
      seOt(795 - top - oh);
      seOhL(745 - oldHeight - top);
    }
  }, [editMode, t, l, oldHeight, top, oh]);
  React.useEffect(() => {
    setR(false);
    setT(true);
    setB(false);
    setL(true);
  }, [ot]);

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  let renderSrc: any = null;

  switch (name) {
    case 'exit':
      renderSrc = <PrevExit w={width} h={height} />;
      break;
    default:
      renderSrc = null;
  }
  if (editMode) {
    return (
      <Resizable
        style={{
          border: '1px solid',
          padding: '10px',
          position: 'absolute',
          left,
          top: t ? ot : 'inherit',
          bottom: !t ? oh : 'inherit',
        }}
        minHeight={40}
        minWidth={40}
        onResizeStop={(e, direction, ref, d) => {
          if (!editMode) seOhL(745 - oldHeight - top);
          setOldWidth((oldWidth) => oldWidth + d.width);
          setOldHeight((oldHeight) => oldHeight + d.height);
        }}
        onResize={(e, direction, ref, d) => {
          if (
            direction === 'bottomLeft' ||
            direction === 'bottom' ||
            direction === 'bottomRight'
          ) {
            if (b) {
              setB(false);
              setT(true);
            }
          }
          if (
            direction === 'top' ||
            direction === 'topLeft' ||
            direction === 'topRight'
          ) {
            if (t) {
              setB(true);
              setT(false);
            }
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
      style={{ ...style, left, top: ot, width, height }}
      onClick={() => {
        Action.setApply(false);
        Action.setEditMode(true);
      }}
    >
      {renderSrc}
      {/* <img src={renderSrc} style={{ width, height }} alt={name} /> */}
    </div>
  );
};
