import { createAction } from "redux-actions";

const SLIDESTATE = "SLIDESTATE";

export const ChangeSlideState = createAction(SLIDESTATE);

const initalState = {
  slideState: "1"
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SLIDESTATE: {
      console.log("slider");
      return { slideState: action.payload };
    }
    default: {
      return state;
    }
  }
}
