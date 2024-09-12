import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");
  const globalState = useAuthListener();

  console.log(globalState);

  return (
    <main className="text-white text-center">
      {globalState.userLogin && <h1>...Display post here...</h1>}
      <MainPageTimeline />
      <MainPageSidebar />
    </main>
  );
}
