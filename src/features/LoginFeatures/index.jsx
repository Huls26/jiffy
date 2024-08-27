import ModalHeaderText from "@/components/ModalHeaderText";

import { Suspense, lazy } from "react";
const LoginForm = lazy(() => import("@/features/LoginForm"));
const LoadingSkeleton = lazy(() => import("@/components/LoadingSkeleton"));
const InputSkeleton = lazy(
  () => import("@/components/LoadingSkeleton/components/InputSkeleton"),
);
const SubmitBtnSkeleton = lazy(
  () => import("@/components/LoadingSkeleton/components/SubmitBtnSkeleton"),
);

/**
 * This function renders the login features, including a loading skeleton,
 * modal header text, and the lazy-loaded login form.
 *
 * @returns {JSX.Element} - The JSX element representing the login features.
 */
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
