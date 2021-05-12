import { createAction } from "redux-actions";

const DICTIONARYSTATE = "DICTIONARYSTATE";
const FILTERSTATE = "FILTERSTATE";

export const ChangeDictionaryState = createAction(DICTIONARYSTATE);
export const ChangeFilterState = createAction(FILTERSTATE);

const initalState = {
  filterState: []
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FILTERSTATE: {
      return { filterState: action.payload };
    }
    default: {
      return state;
    }
  }
}
