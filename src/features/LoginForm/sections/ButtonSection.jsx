import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";
import CreateAccountSection from "./CreateAccountSection";

export default function ButtonSection() {
  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Sign in" />
      <CreateAccountSection />
    </section>
  );
}
