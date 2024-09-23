import MainPageFeatures from "@/features/MainPageFeatures";
// import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");
  // const globalState = useAuthListener();

  // console.log(globalState);

  return (
    <main className="text-white text-center">
      <MainPageFeatures />
    </main>
  );
}

MainPage.whyDidYouRender = true;
