import { Form, Link } from 'react-router-dom';
import LoginBtn from '@components/Btn/LoginBtn';

import SignupFormTitle from './components/SignupFormTitle';
import SignupBtn from './components/SignupBtn';
import SignupFormInput from './components/SignupFormInput';
import SignupSelectMonth from './components/SignupSelectMonth';
import SignupFormDateYear from './components/SignupFormDateYear';

export default function SignupForm() {
  return (
    <Form
      method="post"
      className="
        bg-orange
        text-base font-bold text-dark-2
        px-9 py-5
        max-w-[22em]
        m-auto
        border-dark-2 border border-b-2 border-r-2
        rounded-lg
      "
    >
      <SignupFormTitle />

      <SignupFormInput label="first name" name="firstname" placeholder="First name" />
      <SignupFormInput label="last name" name="lastname" placeholder="Last name(optional)" required="false" />
      <SignupFormInput label="username" name="username" placeholder="Username" />
      <SignupFormInput label="email" name="email" type="email" placeholder="Email" />

      <div>
        <h1 className="block font-bold text-lg">Birth Date</h1>
        <SignupSelectMonth />
        <SignupFormDateYear />
      </div>

      <div>
        <SignupFormInput label="password" name="password" type="password" placeholder="Password" />
        <SignupFormInput label="confirm password" name="confirmPassword" type="password" placeholder="Confirm Password" />
      </div>
      <SignupBtn />
      <Link to="/login">
        <LoginBtn />
      </Link>
    </Form>
  );
}
