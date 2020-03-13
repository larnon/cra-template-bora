import actionTypes from "./ActionTypes";

export type ISetCounter = (count: number) => object;
export const setCounter: ISetCounter = (count) => ({
  type: actionTypes.SET_COUNTER,
  data: count
});
