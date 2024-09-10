import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");

  return (
    <main className="text-white">
      <MainPageTimeline />
      <MainPageSidebar />
    </main>
  );
}
