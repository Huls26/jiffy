import ForgotPassword from "../components/ForgotPassword";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";

export default function InputSection() {
  return (
    <section className="space-y-4">
      <InputEmail />
      <ForgotPassword />
      <InputPassword />
    </section>
  );
}
