import React from 'react';
import { useDrag } from 'react-dnd';

const style: React.CSSProperties = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

export interface BoxProps {
  id: any;
  left: number;
  top: number;
  hideSourceOnDrag?: boolean;
}

export const Box: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  );
};
