import FormInput from "@/components/FormInput";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import handleChange from "@/utils/handleChange";

import PropTypes from "prop-types";
import { useContext } from "react";

/**
 * This component renders an email input field for the login form.
 * It uses the reducerContext to manage the form state.
 *
 * @returns {JSX.Element} - The JSX representation of the email input field.
 */
export default function FormInputField({
  label,
  type,
  name,
  id,
  dispatchType,
  autoComplete,
  placeholder,
  ariaLabel,
  maxLength,
}) {
  /**
   * The state and dispatch function from the LoginContext.
   * @type {Array}
   */
  const [state, dispatch] = useContext(reducerContext);

  if (!state) {
    // biome-ignore lint/nursery/noConsole: <explanation>
    console.error("ReducerContext not found!");
    return <h1>Sorry, page is not available. something went wrong.</h1>;
  }
  return (
    <section>
      <label htmlFor={id} className="block mb-2 text-sm">
        {label}
      </label>
      <FormInput
        ariaLabel={ariaLabel}
        type={type}
        name={name}
        id={id}
        value={state[name] || ""}
        onChange={(event) => handleChange(event, dispatch, dispatchType)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </section>
  );
}

FormInputField.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dispatchType: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
};
