import FormInputField from "@/components/componentContainers/FormInputField";
import ForgotPassword from "../components/ForgotPassword";
import InputPassword from "../components/InputPassword";

/**
 * This function represents a section containing various input components for a user login form.
 * It includes an email input field, a forgot password link, and a password input field.
 *
 * @returns {JSX.Element} - A JSX element representing the input section.
 */
export default function InputSection() {
  return (
    <section className="space-y-4">
      <FormInputField
        ariaLabel="Enter Email"
        label="Email address"
        type="email"
        name="email"
        id="email"
        dispatchType="UPDATE_EMAIL"
        autoComplete="email"
        placeholder="aquino@mail.com"
      />
      <section>
        <ForgotPassword />
        <InputPassword />
      </section>
    </section>
  );
}
