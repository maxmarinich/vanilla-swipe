import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: getPosition', function() {
  it('should return default data', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(0, 1);
    const position = VanillaSwipe.getPosition(touchMoveEventObject);

    expect(position.absX).toEqual(0);
    expect(position.absY).toEqual(1);
    expect(position.deltaX).toEqual(0);
    expect(position.deltaY).toEqual(-1);
    expect(position.duration > 0).toEqual(true);
  });

  it('should return default data if rotationAngle is passed', function() {
    const VanillaSwipe = new VS({ element: null, rotationAngle: 10 });
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(0, 1);
    const position = VanillaSwipe.getPosition(touchMoveEventObject);

    expect(position.absX > 0).toEqual(true);
    expect(position.absY > 0).toEqual(true);
    expect(position.deltaX < 0).toEqual(true);
    expect(position.deltaY < 0).toEqual(true);
    expect(position.duration > 0).toEqual(true);
  });
});
