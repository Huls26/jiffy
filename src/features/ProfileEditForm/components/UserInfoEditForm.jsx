import PropTypes from 'prop-types';
import ContentBtn from '@components/Btn/ContentBtn';
import SignupFormInput from '@features/SignupForm/components/SignupFormInput';

export default function UserInfoEditForm({ handleButton }) {
  console.log(handleButton);
  return (
    <form className="px-6 py-3 font-PS font-semibold text-base text-gray-dark">
      <fieldset>
        <SignupFormInput label="first name" name="firstname" placeholder="First name" required="false" />
        <SignupFormInput label="last name" name="lastname" placeholder="Last name(optional)" required="false" />
        <SignupFormInput label="username" name="username" placeholder="Username" required="false" />
        <SignupFormInput label="email" name="email" type="email" placeholder="Email" required="false" />

        <div>
          <SignupFormInput label="password" name="password" type="password" placeholder="Update Password" required="false" />
          <SignupFormInput label="confirm password" name="confirmPassword" type="password" placeholder="Confirm Password" required="false" />
        </div>

        <div className="mb-3 px-4 py-2 bg-white border rounded-md">
          <label htmlFor="textContent" className="sr-only">Your comment</label>
          <textarea
            maxLength="252"
            name="textContent"
            id="textContent"
            rows="4"
            className="
            w-full
            text-lg font-A text-gray-dark
            bg-white
            rounded-md outline-none
          "
            placeholder="Update Description..."
            disabled={() => console.log('change when loading')}
          />
        </div>

        <div className="space-x-1">
          <ContentBtn text="update info" bg="bg-green" />
          <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
        </div>
      </fieldset>
    </form>
  );
}

UserInfoEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
