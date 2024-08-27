import LoadingSkeleton from "@/components/LoadingSkeleton";
import InputSkeleton from "@/components/LoadingSkeleton/components/InputSkeleton";
import SubmitBtnSkeleton from "@/components/LoadingSkeleton/components/SubmitBtnSkeleton";
import ModalHeaderText from "@/components/ModalHeaderText";

import { Suspense, lazy } from "react";
const LoginForm = lazy(() => import("@/features/LoginForm"));

export default function LoginFeatures() {
  return (
    <Suspense
      fallback={
        <LoadingSkeleton>
          <InputSkeleton />
          <InputSkeleton />
          <SubmitBtnSkeleton />
        </LoadingSkeleton>
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
