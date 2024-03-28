import React, { PropsWithChildren } from "react";
import { ReactQueryProvider } from "./react-query-provider";

const ProvidersRoot = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default ProvidersRoot;
