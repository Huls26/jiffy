import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

export default function MainPageHeader() {
  const [globalStateContext] = useContext(reducerContext);

  // to do
  // add navigation
  // add logout button
  // display username
  console.log(globalStateContext);

  return <div>MainPageHeader</div>;
}
