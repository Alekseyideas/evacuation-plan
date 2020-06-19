const s = 10;
export function snapToGrid(x: number, y: number): [number, number] {
  const snappedX = Math.round(x / s) * s;
  const snappedY = Math.round(y / s) * s;
  return [snappedX, snappedY];
}
