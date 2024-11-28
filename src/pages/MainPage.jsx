import MainPageFeatures from "@/features/MainPageFeatures";
// import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");

  return (
    <main className="">
      <MainPageFeatures />
    </main>
  );
}

MainPage.whyDidYouRender = true;
