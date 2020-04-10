import * as Helpers from '../helpers';
import * as Utils from '../../src/lib/utils';

describe('calculateMovingPosition', () => {
  it('should return expected data if `changedTouches` property is presented', () => {
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(2, 3);
    const data = Utils.calculateMovingPosition(touchMoveEventObject);

    expect(data).toEqual({ x: 2, y: 3 });
  });

  it('should return expected data if `changedTouches` property is not presented', () => {
    const mouseMoveEventObject = Helpers.createMouseEventObject(2, 3);
    const data = Utils.calculateMovingPosition(mouseMoveEventObject);

    expect(data).toEqual({ x: 2, y: 3 });
  });

  it('should return expected data if `touches` property is presented', () => {
    const mouseMoveEventObject = Helpers.createTouchMoveEventObject(2, 3, 2);
    const data = Utils.calculateMovingPosition(mouseMoveEventObject);

    expect(data).toEqual({ x: 2, y: 3 });
  });
});
