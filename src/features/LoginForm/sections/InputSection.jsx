import InputLabelContainer from "@/components/componentContainers/InputLabelContainer";
import ForgotPassword from "../components/ForgotPassword";
import InputPassword from "../components/InputPassword";

export default function InputSection() {
  return (
    <section className="space-y-4">
      <InputLabelContainer
        label="Email address"
        type="email"
        name="email"
        id="email"
        dispatchType="UPDATE_EMAIL"
        autoComplete="email"
        placeholder="aquino@mail.com"
      />
      <ForgotPassword />
      <InputPassword />
    </section>
  );
}
