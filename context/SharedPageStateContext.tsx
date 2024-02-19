import React from "react";
import { SharedPageState } from "../utils/types";

const SharedPageStateContext = React.createContext<SharedPageState | null>(
  null
);

export default SharedPageStateContext;
