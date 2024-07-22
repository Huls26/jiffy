import FormInput from "@/components/FormInput";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import handleChange from "@/utils/handleChange";

import PropTypes from "prop-types";
import { useContext } from "react";
/**
 * This component renders an email input field for the login form.
 * It uses the LoginContext to manage the form state.
 *
 * @returns {JSX.Element} - The JSX representation of the email input field.
 */
export default function InputLabelContainer({
  label,
  type,
  name,
  id,
  dispatchType,
  autoComplete,
  placeholder,
}) {
  /**
   * The state and dispatch function from the LoginContext.
   * @type {Array}
   */
  const [state, dispatch] = useContext(reducerContext);

  return (
    <section>
      <label htmlFor="email" className="block mb-2 text-sm">
        {label}
      </label>
      <FormInput
        type={type}
        name={name}
        id={id}
        value={state[type]}
        onChange={(event) => handleChange(event, dispatch, dispatchType)}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </section>
  );
}

InputLabelContainer.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dispatchType: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
