import PropTypes from 'prop-types';

export default function SignupFormInput({
  label, type, name, placeholder, required,
}) {
  return (
    <label htmlFor={name} className="capitalize">
      {label}
      <input
        type={type || 'text'}
        id={name}
        name={name}
        placeholder={placeholder}
        className="
            border-dark-2 border border-r-2 border-b-2
              mb-3 p-1
              w-full
              rounded
              outline-none
              focus:border-blue
            "
        required={required !== 'false'}
        autoComplete="off"
      />
    </label>
  );
}

SignupFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  required: PropTypes.string,
};
