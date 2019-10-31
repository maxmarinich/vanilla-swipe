export function rotateByAngle(position: { x: number; y: number }, angle: number = 0): Value {
  if (angle === 0) {
    return position;
  }

  const { x, y } = position;

  const angleInRadians = (Math.PI / 180) * angle;
  const rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  const rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);

  return { x: rotatedX, y: rotatedY };
}

type Value = {
  x: number;
  y: number;
};
