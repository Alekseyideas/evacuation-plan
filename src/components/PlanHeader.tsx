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
import { DragIcon } from './DragIcon';
import { Store } from '../store';
import { IStore } from '../store/types';
import StoreAction from '../store/StoreAction';

interface IPlanHeaderProps {
  setCurrentBtn: (btn: typeof btnsLeft[0] | null) => void;
}

const PlanHeader: React.FunctionComponent<IPlanHeaderProps> = ({
  setCurrentBtn,
}) => {
  const { store, dispatch } = React.useContext<IStore>(Store);
  const { editMode } = store;
  const Action = new StoreAction(dispatch);

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
          return (
            <DragIcon setCurrentBtn={setCurrentBtn} btn={btn} key={btn.id} />
          );
        })}
      </LeftBtnsWrapperS>
      <RightBtnsWrapperS>
        {btnsRight.map((btn) => {
          const clickFn = () => {
            if (btn.id === 2) {
              Action.setEditMode(false);
              return Action.setApply(true);
            }
            return null;
          };
          return (
            <ButtonIconS onClick={clickFn} key={btn.id}>
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
