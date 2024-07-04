import CreateAccountSection from "./components/CreateAccountSection";
import ForgotPassword from "./components/ForgotPassword";
import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import SignInButton from "./components/SignInButton";

export default function index() {
  return (
    <form noValidate="" action="" className="space-y-12">
      <section className="space-y-4">
        <InputEmail />
        <div>
          <ForgotPassword />
          <InputPassword />
        </div>
      </section>
      <section className="space-y-2">
        <SignInButton />
        <CreateAccountSection />
      </section>
    </form>
  );
}
