import GlobalAuthContextProvider from "@/contexts/GlobalAuthContextProvider";
import GlobalContextProvider from "@/contexts/GlobalContextProvider";
import Router from "@/router";
import { Suspense } from "react";
import reducerMethod, {
  INITIAL_STATE,
} from "./contexts/AppGlobalContextReducer";

function App() {
  console.log("create loading component");

  return (
    <Suspense
      fallback={
        <h1 className="flex justify-center items-center h-svh text-3xl text-white">
          ...Loading...
        </h1>
      }
    >
      <GlobalContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <GlobalAuthContextProvider>
          <Router />
        </GlobalAuthContextProvider>
      </GlobalContextProvider>
    </Suspense>
  );
}

export default App;
