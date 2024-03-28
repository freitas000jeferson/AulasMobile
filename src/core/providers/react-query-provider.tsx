import React, { PropsWithChildren } from "react";
import { ReactQuery } from "../react-query";

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQuery.Provider>
      {/* <ReactQuery.Devtools /> */}
      {children}
    </ReactQuery.Provider>
  );
};
