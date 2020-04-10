import { rotateByAngle } from '../../src/lib/utils';

describe('rotateByAngle', () => {
  it('should return expected data if `angle` not passed', () => {
    const position = { x: 0, y: 0 };
    expect(rotateByAngle(position)).toEqual({ x: 0, y: 0 });
  });

  it('should return expected data if `angle` equal zero', () => {
    const position = { x: 0, y: 0 };
    expect(rotateByAngle(position, 0)).toEqual({ x: 0, y: 0 });
  });

  it('should return expected data if emppty position && `angle` passed', () => {
    const position = { x: 100, y: 100 };
    const value = { x: 81.11595753452778, y: -115.84559306791382 };
    expect(rotateByAngle(position, 100)).toEqual(value);
  });
});
