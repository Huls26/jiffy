import MainPageHeader from "@/features/MainPageFeatures/sections/MainPageHeader";
import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");
  const globalStateContext = useAuthListener();

  console.log(globalStateContext);

  // highlight dark:bg-gray-900
  return (
    <main className="text-white">
      <MainPageHeader />
      <section>
        <MainPageTimeline />
        <MainPageSidebar />
      </section>
    </main>
  );
}
