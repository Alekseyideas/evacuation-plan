import * as React from 'react';
import { MainWrapperS } from '../global/styles';
import {
  PlanWrapperS,
  PlanHeaderS,
  PlanS,
  ButtonIconS,
  LeftBtnsWrapperS,
  PlanBodyS,
  RightBtnsWrapperS,
  RightColS,
  ButtonTitleS,
  RightBtnsControls,
  ColorWrapperControlsS,
  BtnColorS,
} from './PlanStyle';
import { btnsLeft, btnsRight } from '../utils/constructorBtns';
import { useDrag, DragSourceMonitor, useDrop, XYCoord } from 'react-dnd';
import { Box } from '../components/Box';
import update from 'immutability-helper';
import { snapToGrid as doSnapToGrid } from '../utils/snapToGrid';
import PlanHeader from '../components/PlanHeader';

export interface ContainerProps {
  hideSourceOnDrag: boolean;
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; title: string } };
}

export interface DragItem {
  type: string;
  name: string;
  id: string;
  top: number;
  left: number;
}

export const Plan: React.FunctionComponent = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      [left, top] = doSnapToGrid(left || 0, top || 0);
      moveBox(item.id || `${new Date().getTime()}`, left || 0, top || 0);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [boxes, setBoxes] = React.useState<{
    [key: string]: {
      top: number;
      left: number;
      title: string;
    };
  }>({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' },
  });

  const moveBox = (id: string, left: number, top: number) => {
    if (boxes[id]) {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    } else {
      setBoxes(
        update(boxes, {
          [id]: { $set: { top: 180, left: 20, title: id } },
        })
      );
    }
  };

  const [currentBtn, setCurrentBtn] = React.useState<
    typeof btnsLeft[0] | null
  >();
  return (
    // <DndProvider backend={HTML5Backend}>
    <MainWrapperS>
      <div className="container">
        <PlanWrapperS>
          <PlanS>
            <PlanHeader setCurrentBtn={setCurrentBtn} />
            <PlanBodyS ref={drop}>
              {Object.keys(boxes).map((key) => {
                const { left, top, title } = boxes[key];
                return (
                  <Box key={key} id={key} left={left} top={top}>
                    {title}
                  </Box>
                );
              })}
            </PlanBodyS>
          </PlanS>

          <RightColS>
            <div>
              <h2>{currentBtn?.title}</h2>
              <p>{currentBtn?.desc}</p>
              {currentBtn?.link ? (
                <p>
                  Детальна iнформацiя: <br />{' '}
                  <a
                    href={currentBtn.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {currentBtn.link}
                  </a>
                </p>
              ) : null}
            </div>
            <RightBtnsControls>
              <ColorWrapperControlsS>
                <BtnColorS active>Колiр</BtnColorS>
                <BtnColorS>Чорно-бiлий</BtnColorS>
              </ColorWrapperControlsS>

              <button
                className="btn btn-def"
                style={{ width: '100%', marginTop: '10px' }}
              >
                Друкувати
              </button>
            </RightBtnsControls>
          </RightColS>
        </PlanWrapperS>
      </div>
    </MainWrapperS>
    // </DndProvider>
  );
};
