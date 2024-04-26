/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

export default function InputEmail({ emailBorder, isErrorEmail, email }) {
  return (
    <input
      className={`         
              ${emailBorder} border border-r-2 border-b-2
              mb-3 p-1
              w-full
              rounded
              outline-none
              focus:border-blue
          `}
      type="email"
      placeholder={isErrorEmail ? 'Enter Email' : 'Email'}
      name="email"
      defaultValue={email}
      data-testid="login-email-border"
    />
  );
}

InputEmail.propTypes = {
  emailBorder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  isErrorEmail: PropTypes.any,
  email: PropTypes.any.isRequired,
};
