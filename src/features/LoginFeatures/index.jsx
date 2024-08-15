import ModalHeaderText from "@/components/ModalHeaderText";
import { reducerContext } from "@/contexts/ReducerContextProvider";

import { Suspense, lazy, useContext } from "react";
const LoginForm = lazy(() => import("@/features/LoginForm"));

export default function LoginFeatures() {
  const [loginState] = useContext(reducerContext);
  const { isLoading } = loginState;
  console.log("rewrite login component");

  if (isLoading) {
    return (
      <h1 className="flex justify-center items-center h-svh text-3xl text-white">
        ...Loading...
      </h1>
    );
  }
  return (
    <Suspense
      fallback={
        <h1 className="flex justify-center items-center h-svh text-3xl text-white">
          ...Loading...
        </h1>
      }
    >
      <ModalHeaderText
        title={"Sign in"}
        body={"Sign in to access your account"}
      />
      <LoginForm />
    </Suspense>
  );
}
