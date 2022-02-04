import { SAME_COL, DIFF_COL } from "./actionTypes";

export const ModifyDiffCol = (payload) => {
  return {
    type: DIFF_COL,
    payload,
  };
};

export const ModifySameCol = (payload) => {
  return {
    type: SAME_COL,
    payload,
  };
};
