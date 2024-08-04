import Router from "@/router";
import { Suspense } from "react";

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
      <Router />
    </Suspense>
  );
}

export default App;
