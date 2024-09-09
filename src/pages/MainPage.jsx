import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");

  // highlight dark:bg-gray-900
  return (
    <main className="text-white">
      <section>
        <MainPageTimeline />
        <MainPageSidebar />
      </section>
    </main>
  );
}
