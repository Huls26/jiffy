import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

export default function MainPageHeader() {
  const [globalStateContext] = useContext(reducerContext);

  console.log(globalStateContext);

  return <div>MainPageHeader</div>;
}
