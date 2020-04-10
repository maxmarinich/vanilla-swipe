import * as Helpers from '../helpers';
import { checkIsMoreThanSingleTouches } from '../../src/lib/utils';

describe('checkIsMoreThanSingleTouches', () => {
  it('should return expected data if has more than single touches', () => {
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(2, 2, 2);
    const data = checkIsMoreThanSingleTouches(touchMoveEventObject);

    expect(data).toEqual(true);
  });

  it('should return expected data if has not more than single touches', () => {
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(2, 2);
    const data = checkIsMoreThanSingleTouches(touchMoveEventObject);

    expect(data).toEqual(false);
  });
});
