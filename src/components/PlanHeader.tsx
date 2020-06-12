import * as React from 'react';
import {
  PlanHeaderS,
  LeftBtnsWrapperS,
  ButtonIconS,
  RightBtnsWrapperS,
  ButtonTitleS,
} from '../pages/PlanStyle';
import { btnsLeft, btnsRight } from '../utils/constructorBtns';
import { useDrag, DragSourceMonitor, useDrop, XYCoord } from 'react-dnd';

interface IPlanHeaderProps {
  setCurrentBtn: (btn: typeof btnsLeft[0] | null) => void;
}

const PlanHeader: React.FunctionComponent<IPlanHeaderProps> = ({
  setCurrentBtn,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: 'Banana', type: 'box' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${}!`);
        console.log(dropResult);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <PlanHeaderS>
      <LeftBtnsWrapperS>
        {btnsLeft.map((btn, i) => {
          if (i !== 0) return null;
          return (
            <ButtonIconS
              ref={drag}
              onMouseEnter={() => {
                setCurrentBtn(btn);
              }}
              onMouseLeave={() => {
                setCurrentBtn(null);
              }}
              key={btn.id}
            >
              {typeof btn.icon === 'string' ? (
                <img src={btn.icon} alt="icon" />
              ) : (
                <btn.icon />
              )}
              <ButtonTitleS>{btn.title}</ButtonTitleS>
            </ButtonIconS>
          );
        })}
      </LeftBtnsWrapperS>
      <RightBtnsWrapperS>
        {btnsRight.map((btn) => {
          return (
            <ButtonIconS
              onMouseEnter={() => {
                setCurrentBtn(btn);
              }}
              onMouseLeave={() => {
                setCurrentBtn(null);
              }}
              key={btn.id}
            >
              {typeof btn.icon === 'string' ? (
                <img src={btn.icon} alt="icon" />
              ) : (
                <btn.icon />
              )}
              <ButtonTitleS>{btn.title}</ButtonTitleS>
            </ButtonIconS>
          );
        })}
      </RightBtnsWrapperS>
    </PlanHeaderS>
  );
};

export default PlanHeader;
