import { createAction } from "redux-actions";

const AD = "FILTER/AD";
const AP = "FILTER/AP";
const HP = "FILTER/HP";
const MANA = "FILTER/MANA";
const CSC = "FILTER/CSC";

export const ChangeAD = createAction(AD);
export const ChangeAP = createAction(AP);
export const ChangeHP = createAction(HP);
export const ChangeMANA = createAction(MANA);
export const ChangeCSC = createAction(CSC);

const initalState = {
  ad: false,
  ap: false,
  hp: false,
  mana: false,
  csc: false
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case AD: {
      return { ...state, ad: action.payload };
    }
    case AP: {
      return { ...state, ap: action.payload };
    }
    case HP: {
      return { ...state, hp: action.payload };
    }
    case MANA: {
      return { ...state, mana: action.payload };
    }
    case CSC: {
      return { ...state, csc: action.payload };
    }
    default: {
      return state;
    }
  }
}
