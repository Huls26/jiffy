import FormInput from "@/components/FormInput";
import handleChange from "@/utils/handleChange";
import PropTypes from "prop-types";

/**
 * This component renders an input field for forms, specifically for login purposes.
 * It manages the input state using a context reducer.
 *
 * @returns {JSX.Element} - The JSX representation of the input field.
 */
export default function FormInputField({
  label,
  type = "text",
  name,
  id,
  dispatchType,
  autoComplete,
  placeholder,
  ariaLabel = "",
  state,
  dispatch,
}) {
  return (
    <section>
      <label htmlFor={id} className="block mb-2 text-sm">
        {label}
      </label>
      <FormInput
        aria-label={ariaLabel}
        type={type}
        name={name}
        id={id}
        value={state[name]}
        onChange={(event) => handleChange(event, dispatch, dispatchType)}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </section>
  );
}

FormInputField.propTypes = {
  ariaLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "tel"]), // Specify accepted types
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dispatchType: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
