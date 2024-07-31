import { INCREMENT, DECREMENT } from '../counter/constant';
const homeContainerReducer = require('../counter/reducer').default; //without ES6, need to add .default when trying to require a export default function

describe('counter service', () => {
  test('add 1', () => {
    const initialState = {
      counter: 4,
    };
    const newState = homeContainerReducer(initialState, { type: INCREMENT });
    expect(newState.counter).toEqual(5);
  });

  test('substract 1 when the value is more than 0', () => {
    const initialState = {
      counter: 4,
    };
    const newState = homeContainerReducer(initialState, { type: DECREMENT });
    expect(newState.counter).toEqual(3);
  });

  test('can not substract 1 when the value is 0', () => {
    const initialState = {
      counter: 0,
    };
    const newState = homeContainerReducer(initialState, { type: DECREMENT });
    expect(newState.counter).toEqual(0);
  });
})