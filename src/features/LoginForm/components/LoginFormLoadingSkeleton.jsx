import LoadingSkeleton from "@/components/LoadingSkeleton";
import InputSkeleton from "@/components/LoadingSkeleton/components/InputSkeleton";
import SubmitBtnSkeleton from "@/components/LoadingSkeleton/components/SubmitBtnSkeleton";

export default function LoginFormLoadingSkeleton() {
  return (
    <LoadingSkeleton>
      <InputSkeleton />
      <InputSkeleton />
      <SubmitBtnSkeleton />
    </LoadingSkeleton>
  );
}
