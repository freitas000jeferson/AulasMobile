import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useRef } from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchIntervalInBackground: false, refetchInterval: false },
  },
});

const Devtools = () => {
  return <ReactQueryDevtools />;
};

const Provider = ({ children }: PropsWithChildren) => {
  const client = useRef(queryClient).current;

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export const ReactQuery = {
  Provider,
  Devtools,
};

export default ReactQuery;
