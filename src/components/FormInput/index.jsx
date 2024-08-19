import PropTypes from "prop-types";
import useContextStyleClass from "./hooks/useContextStyleClass";

/**
 * A reusable component for rendering an input field in a login form.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.type - The type of the input field (e.g., 'text', 'password').
 * @param {string} props.name - The name of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to be called when the input value changes.
 * @param {string} [props.autoComplete] - The autocomplete attribute of the input field.
 * @param {string} [props.placeholder] - The placeholder text of the input field.
 *
 * @returns {JSX.Element} - The JSX element representing the input field.
 */
export default function FormInput({
  type,
  name,
  id,
  value,
  onChange,
  autoComplete,
  placeholder,
  ariaLabel,
}) {
  // fix only the error input element should have the errorStyle
  const defaultStyle =
    "w-full px-2 py-1 sm500:px-3 sm500:py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-blue-500";
  const errorStyle = "outline outline-red-500";
  const inputStyleClasses = useContextStyleClass(defaultStyle, errorStyle);

  return (
    <input
      aria-label={ariaLabel}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={inputStyleClasses}
    />
  );
}

/**
 * The PropTypes for the FormInput component.
 */
FormInput.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
};
