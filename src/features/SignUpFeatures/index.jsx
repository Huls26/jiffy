import ModalHeaderText from "@/components/ModalHeaderText";
import SignUpFormSection from "@/features/SignUpFeatures/sections/SignUpFormSection";

export default function SignUpFeatures() {
  return (
    <>
      <ModalHeaderText
        title={"Create account"}
        body={"Create an account and connect with others."}
      />
      <SignUpFormSection />
    </>
  );
}
