import ProvidersRoot from "./src/core/providers";
import { Router } from "./src/core/routes";

export default function App() {
  return (
    <ProvidersRoot>
      <Router />
    </ProvidersRoot>
  );
}
