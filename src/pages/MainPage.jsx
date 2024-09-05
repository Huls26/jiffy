import MainPageHeader from "@/features/MainPageFeatures/sections/MainPageHeader";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import usePageTitle from "@/hooks/usePageTitle";
import MainPageSidebar from "../features/MainPageFeatures/sections/MainPageSidebar";

export default function MainPage() {
  usePageTitle("J I F F Y");

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
