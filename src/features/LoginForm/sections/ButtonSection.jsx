import SignInButton from "../components/SignInButton";
import CreateAccountSection from "./CreateAccountSection";

export default function ButtonSection() {
  return (
    <section className="space-y-2">
      <SignInButton />
      <CreateAccountSection />
    </section>
  );
}
