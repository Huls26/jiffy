import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

export default function SignUpFormSection() {
  return (
    <form action="POST" className="space-y-12">
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
