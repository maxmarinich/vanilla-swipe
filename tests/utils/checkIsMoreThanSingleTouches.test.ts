import * as Helpers from '../helpers';
import { checkIsMoreThanSingleTouches } from '../../src/utils';

describe('checkIsMoreThanSingleTouches', () => {
  it('should return expected data if has more than single touches', () => {
    const touchMoveEventObject = Helpers.createMoveTouchEventObject(2, 2, 2);
    const data = checkIsMoreThanSingleTouches(touchMoveEventObject);

    expect(data).toEqual(true);
  });

  it('should return expected data if has not more than single touches', () => {
    const touchMoveEventObject = Helpers.createMoveTouchEventObject(2, 2);
    const data = checkIsMoreThanSingleTouches(touchMoveEventObject);

    expect(data).toEqual(false);
  });
});
