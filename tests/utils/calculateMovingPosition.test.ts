import * as Helpers from '../helpers';
import { calculateMovingPosition } from '../../src/utils';

describe('calculateMovingPosition', () => {
  it('should return expected data if `changedTouches` property is presented', () => {
    const touchMoveEventObject = Helpers.createMoveTouchEventObject(2, 2);
    const data = calculateMovingPosition(touchMoveEventObject);

    expect(data).toEqual({ x: 2, y: 2 });
  });

  it('should return expected data if `changedTouches` property is not presented', () => {
    const mouseMoveEventObject = Helpers.createMoveTouchEventObject(2, 2);
    const data = calculateMovingPosition(mouseMoveEventObject);

    expect(data).toEqual({ x: 2, y: 2 });
  });
});
