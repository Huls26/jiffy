import MainPageFeatures from "@/features/MainPageFeatures";
// import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");

  // remainders:
  // dont remove text-center className
  // it will affect some buttons
  return (
    <main className="text-center">
      <MainPageFeatures />
    </main>
  );
}

MainPage.whyDidYouRender = true;
