import ModalHeaderText from "@/components/ModalHeaderText";
import SignUpFormSection from "@/features/SignUpFeatures/sections/SignUpFormSection";
import useSignUpState from "./hooks/useSignUpState";

export default function SignUpFeatures() {
  const { isLoading } = useSignUpState();

  console.log("update loading components");
  if (isLoading) {
    return <h1>...Loading</h1>; // Show a loading component while waiting for the API response.
  }

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
