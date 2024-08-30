import LoadingSkeleton from "@/components/LoadingSkeleton";
import InputSkeleton from "@/components/LoadingSkeleton/components/InputSkeleton";
import SubmitBtnSkeleton from "@/components/LoadingSkeleton/components/SubmitBtnSkeleton";

/**
 * This component renders a loading skeleton for the sign-up process.
 *
 * @param {boolean} isLoading - Indicates whether the loading skeleton should be shown.
 **/
export default function SignUpLoadingSkeleton() {
  return (
    <LoadingSkeleton>
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <SubmitBtnSkeleton />
    </LoadingSkeleton>
  );
}
