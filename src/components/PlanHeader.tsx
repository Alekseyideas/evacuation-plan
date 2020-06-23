import * as React from 'react';
import {
  PlanHeaderS,
  LeftBtnsWrapperS,
  // ButtonIconS,
  // RightBtnsWrapperS,
  // ButtonTitleS,
} from '../pages/PlanStyle';
import { btnsLeft } from '../utils/constructorBtns';
import { DragIcon } from './DragIcon';
// import { Store } from '../store';
// import { IStore } from '../store/types';
// import StoreAction from '../store/StoreAction';

interface IPlanHeaderProps {
  setCurrentBtn: (btn: typeof btnsLeft[0] | null) => void;
}

const PlanHeader: React.FunctionComponent<IPlanHeaderProps> = ({
  setCurrentBtn,
}) => {
  // const { dispatch } = React.useContext<IStore>(Store);
  // const { editMode } = store;
  // const Action = new StoreAction(dispatch);

  // const [{ isDragging }, drag] = useDrag({
  //   item: { name: 'Banana', type: 'box', pos: 1 },
  //   end: (
  //     item: { name: string; pos?: number } | undefined,
  //     monitor: DragSourceMonitor
  //   ) => {
  //     const dropResult = monitor.getDropResult();
  //     if (item && dropResult) {
  //       // alert(`You dropped ${item.name} into ${}!`);
  //       console.log(dropResult);
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });
  return (
    <PlanHeaderS>
      <LeftBtnsWrapperS>
        {btnsLeft.map((btn, i) => {
          const posLeft = btnsLeft[1]
            ? btnsLeft[1].positionLeft &&
              btnsLeft[1].positionLeft * btn.id * 1.2
            : 0;

          // console.log(btn.id);
          return (
            <DragIcon
              setCurrentBtn={setCurrentBtn}
              btn={{
                ...btn,
                positionLeft: posLeft,
              }}
              key={btn.id}
            />
          );
        })}
      </LeftBtnsWrapperS>
      {/* <RightBtnsWrapperS>
        {btnsRight.map((btn) => {
          const clickFn = () => {
            if (btn.id === 2) {
              Action.setEditMode(false);
              return Action.setApply(true);
            }
            return null;
          };
          return (
            <ButtonIconS
              id={'rightBtn-' + btn.id}
              onClick={clickFn}
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
      </RightBtnsWrapperS> */}
    </PlanHeaderS>
  );
};

export default PlanHeader;
