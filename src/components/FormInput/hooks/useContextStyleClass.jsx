import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

/**
 * A function to generate a style class based on the context provided by the reducer.
 *
 * @function useContextStyleClass
 * @param {string} defaultStyle - The default style class to be applied when there is no error.
 * @param {string} errorStyle - The style class to be applied when there is an error.
 * @returns {string} The combined style class based on the error state.
 */
export default function useContextStyleClass(defaultStyle, errorStyle) {
  const [stateReducer] = useContext(reducerContext);

  // Ensure stateReducer and isErrorAuth are defined
  const isError = stateReducer?.isErrorAuth || false;

  const inputStyleClasses = !isError
    ? defaultStyle
    : `${defaultStyle} ${errorStyle}`;

  return inputStyleClasses;
}
