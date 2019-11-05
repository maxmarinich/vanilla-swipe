import Enzyme from 'enzyme';

import VS from '../src';
import * as Helpers from './helpers';
import * as Utils from '../src/utils';

describe('VanillaSwipe', function() {
  it('should return expected data from constructor', function() {
    const VanillaSwipe = new VS({ element: null });

    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
    expect(VanillaSwipe.props).toEqual(Utils.getInitialProps());
  });

  it('should call `init() method`', function() {
    const VanillaSwipe = new VS({ element: null });
    expect(VanillaSwipe.init()).toEqual(undefined);
  });

  it('should call new Instance', function() {
    const onSwiping = jest.fn();
    const onSwiped = jest.fn();

    document.body.innerHTML = '<div id="root" >Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, onSwiping, onSwiped });

    const options = Helpers.createStartTouchEventObject(1, 2);
    const event = Helpers.createCustomEvent('touchstart', options);

    expect(VanillaSwipe.init()).toEqual(undefined);

    element && element.dispatchEvent(event);

    expect(VanillaSwipe.props.element).toEqual(element);
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });
});
