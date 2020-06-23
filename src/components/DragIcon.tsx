import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { ButtonIconS, ButtonTitleS } from '../pages/PlanStyle';
import { btnsLeft } from '../utils/constructorBtns';

interface Props {
  btn: typeof btnsLeft[0];
  setCurrentBtn: (btn: typeof btnsLeft[0] | null) => void;
}

export const DragIcon: React.FC<Props> = ({ btn, setCurrentBtn }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    item: { name: btn.name, type: 'box' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${}!`);
        // console.log(dropResult);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [showTitle, setShowTitle] = React.useState(true);

  return (
    <ButtonIconS
      ref={drag}
      onMouseEnter={() => {
        setShowTitle(true);
        setCurrentBtn(btn);
      }}
      onFocus={() => setShowTitle(false)}
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
      {showTitle ? <ButtonTitleS>{btn.title}</ButtonTitleS> : null}
    </ButtonIconS>
  );
};
