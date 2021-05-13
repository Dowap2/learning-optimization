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
  AD: false,
  AP: false,
  HP: false,
  MANA: false,
  CSC: false
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case AD: {
      return { ...state, AD: action.payload };
    }
    case AP: {
      return { ...state, AP: action.payload };
    }
    case HP: {
      return { ...state, HP: action.payload };
    }
    case MANA: {
      return { ...state, MANA: action.payload };
    }
    case CSC: {
      return { ...state, CSC: action.payload };
    }
    default: {
      return state;
    }
  }
}
