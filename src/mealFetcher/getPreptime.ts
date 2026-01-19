import { PrepTime } from "../types";

export const getPreptime = (preptime: PrepTime) => {
  let preptimeParam: string;
  if (preptime !== null) {
    preptimeParam = `p${preptime}`;
  } else {
    preptimeParam = "";
  }
  return preptimeParam;
};
