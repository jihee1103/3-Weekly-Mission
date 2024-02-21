import React from "react";
import { FolderPageState } from "../utils/types";

const FolderPageStateContext = React.createContext<FolderPageState | null>(
  null
);

export default FolderPageStateContext;
