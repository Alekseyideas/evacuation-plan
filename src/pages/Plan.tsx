import * as React from 'react';
import { MainWrapperS } from '../global/styles';
import {
  PlanWrapperS,
  PlanS,
  PlanBodyS,
  RightColS,
  RightBtnsControls,
  ColorWrapperControlsS,
  BtnColorS,
  WRS,
} from './PlanStyle';
import { btnsLeft } from '../utils/constructorBtns';
import { useDrop, XYCoord } from 'react-dnd';
import { Box } from '../components/Box';
import update from 'immutability-helper';
import { snapToGrid as doSnapToGrid } from '../utils/snapToGrid';
import PlanHeader from '../components/PlanHeader';
import { svgTypes } from '../global/svgTypes';
import { usePdfGen } from '../hooks/usePdfGen';
import { PdfHeader } from '../components/PdfHeader';
import { PdfPlanInfo } from '../components/PdfPlanInfo';
import { PdfRightTop } from '../components/PdfRightTop';
import Loader from '../components/Loader';
// import { IStore } from '../store/types';
// import { Store } from '../store';

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
  // const { store } = React.useContext<IStore>(Store);
  // const { editedItem } = store;\\
  const [isPdfGen, setIsPdfGen] = React.useState(false);
  const [isBlackAndWhite, setIsBlackAndWhite] = React.useState(false);
  const { downloadHandler, loading: pdfGenLoading, setLoading } = usePdfGen(
    ['plan'],
    () => setIsPdfGen(false)
  );
  const [currentBtn, setCurrentBtn] = React.useState<
    typeof btnsLeft[0] | null
  >();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      const positionNumber: number = currentBtn
        ? currentBtn.positionLeft || 0
        : 0;
      [left, top] = doSnapToGrid(
        left || Math.round(delta.x + positionNumber),
        top || Math.round(delta.y - 25)
      );
      moveBox(
        item.id || `${new Date().getTime()}`,
        left,
        top,
        item.name as svgTypes['tp']
      );
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // React.useEffect(() => {
  //   if (!pdfGenLoading && isPdfGen) {
  //     setIsPdfGen(false);
  //   }
  // }, [isPdfGen, pdfGenLoading]);

  const [boxes, setBoxes] = React.useState<{
    [key: string]: {
      id: string;
      top: number;
      left: number;
      title: string;
      name: svgTypes['tp'];
    };
  }>({});

  const moveBox = (
    id: string,
    left: number,
    top: number,
    name: svgTypes['tp']
  ) => {
    let leftPos = left;
    let topPos = top;
    if (left > 1005) {
      leftPos = 905;
    }

    if (left < 0) {
      leftPos = 0;
    }
    if (top < 0) {
      topPos = 0;
    }
    if (top > 754) {
      topPos = 754;
    }

    if (boxes[id]) {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left: leftPos, top: topPos },
          },
        })
      );
    } else {
      setBoxes(
        update(boxes, {
          [id]: {
            $set: {
              top: topPos,
              left: leftPos,
              title: id,
              id,
              name,
            },
          },
        })
      );
    }
  };

  return (
    <MainWrapperS>
      {pdfGenLoading ? <Loader /> : null}
      <div
        className="container"
        id="plan"
        style={{
          position: 'relative',
        }}
      >
        <WRS>
          {isPdfGen ? <PdfHeader /> : null}
          <PlanWrapperS>
            <PlanS className="planWrapper">
              {!isPdfGen ? <PlanHeader setCurrentBtn={setCurrentBtn} /> : null}
              <PlanBodyS ref={drop} genPdf={isPdfGen}>
                {Object.keys(boxes).map((key) => {
                  const { left, top, name } = boxes[key];
                  return (
                    <Box
                      itm={boxes[key]}
                      key={key}
                      id={key}
                      left={left}
                      top={top}
                      name={name}
                      removeBox={() =>
                        setBoxes((oldBoxes) => {
                          delete oldBoxes[key];
                          return oldBoxes;
                        })
                      }
                      updatePosition={(newTop, newLeft) => {
                        moveBox(key, newTop, newLeft, name);
                      }}
                    />
                  );
                })}
              </PlanBodyS>
              {isPdfGen ? (
                <h2 style={{ fontSize: '30px', color: 'red' }}>
                  При пожежi зателефонуйте 101
                </h2>
              ) : null}
            </PlanS>

            <RightColS>
              {isPdfGen ? (
                <>
                  <PdfPlanInfo />
                </>
              ) : null}
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
              {!isPdfGen ? (
                <RightBtnsControls>
                  {/* <ColorWrapperControlsS>
                    <BtnColorS
                      active={!isBlackAndWhite}
                      onClick={() => setIsBlackAndWhite(false)}
                    >
                      Колiр
                    </BtnColorS>
                    <BtnColorS
                      active={isBlackAndWhite}
                      onClick={() => setIsBlackAndWhite(true)}
                    >
                      Чорно-бiлий
                    </BtnColorS>
                  </ColorWrapperControlsS> */}
                  <button
                    className="btn btn-def"
                    style={{ width: '100%', marginTop: '10px' }}
                    onClick={() => {
                      setLoading(true);
                      setIsPdfGen(true);
                      setTimeout(() => {
                        downloadHandler();
                      }, 500);
                    }}
                  >
                    Друкувати
                  </button>
                </RightBtnsControls>
              ) : null}
            </RightColS>
          </PlanWrapperS>
        </WRS>
      </div>
    </MainWrapperS>
  );
};
