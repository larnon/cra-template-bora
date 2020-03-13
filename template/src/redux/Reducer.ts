import actionTypes from "./ActionTypes";
import I from "immutable";

type Action = {
  type: string;
  data: any;
};

export default function(state = I.Map(), action: Action) {
  switch (action.type) {
    case actionTypes.SET_COUNTER: {
      return state.set("counter", action.data);
    }
    default:
      return state;
  }
}
