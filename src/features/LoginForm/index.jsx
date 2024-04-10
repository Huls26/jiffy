import PropTypes from 'prop-types';
import {
  Link,
  Form,
  useNavigation,
} from 'react-router-dom';

import InputEmail from './components/InputEmail';
import LoginBtn from './components/LoginBtn';
import emailPasswordBorderColor from './utils/emailPasswordBorder';

export default function LoginForm({ actionData }) {
  const { state } = useNavigation();
  const { error, email } = actionData || {};
  const {
    emailBorder, passwordBorder, isErrorEmail, isErrorPassword,
  } = emailPasswordBorderColor(error);
  const isLoading = state === 'idle' ? '' : 'opacity-90';

  return (
    <Form
      method="post"
      className={`
        bg-purple
        border-dark-2 border border-r-2 border-b-2
          px-8 py-6
          max-w-[22em]
          rounded-xl
          ${isLoading}
        `}
      replace
    >
      <fieldset disabled={isLoading}>
        <InputEmail
          emailBorder={emailBorder}
          isErrorEmail={isErrorEmail}
          email={email}
        />
        {/* <input
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
        /> */}
        <input
          className={`
                    ${passwordBorder} border border-r-2 border-b-2
                    mb-3 p-1
                    w-full
                    rounded
                    outline-none
                    focus:border-blue
                  `}
          type="password"
          placeholder={isErrorPassword ? 'Enter Password' : 'Password'}
          name="password"
          autoComplete="on"
        />
        {/* link react router dom */}
        <div>
          <Link
            to="../signup"
            className="
          text-gray-dark text-lg font-bold
            underline-offset-2
            decoration-2
            hover:underline
          "
          >
            Create Account
          </Link>
          <LoginBtn />
        </div>

        <Link
          to=".."
          relative="path"
          className="
          text-gray-dark text-base font-semibold
            underline-offset-2
            decoration-2
            hover:underline
          "
        >
          Forgot password?
        </Link>

      </fieldset>
    </Form>
  );
}

LoginForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    resMessage: PropTypes.string,
    isInvalid: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    error: PropTypes.object,
  }),
};
