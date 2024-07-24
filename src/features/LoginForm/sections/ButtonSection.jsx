import AuthPrompt from "@/components/AuthPrompt";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";

export default function ButtonSection() {
  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Sign in" />
      <AuthPrompt
        message="Don't have an account yet?"
        url="/signup"
        linkText="Sign up."
      />
    </section>
  );
}
