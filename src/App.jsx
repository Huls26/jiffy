import Router from "@/router";
import { Suspense } from "react";
import reducerMethod, {
	INITIAL_STATE,
} from "./contexts/AppGlobalContextReducer";
import ReducerContextProvider from "./contexts/ReducerContextProvider";

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
			<ReducerContextProvider
				reducerMethod={reducerMethod}
				INITIAL_STATE={INITIAL_STATE}
			>
				<Router />
			</ReducerContextProvider>
		</Suspense>
	);
}

export default App;
