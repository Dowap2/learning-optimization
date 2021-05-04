import { createAction } from "redux-actions";

const SLIDESTATE = "SLIDESTATE";

export const ChangeSlideState = createAction(SLIDESTATE);

const initalState = {
  slideState: 600
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SLIDESTATE: {
      return { slideState: action.payload };
    }
    default: {
      return state;
    }
  }
}
