import MainPageHeader from "@/features/MainPageFeatures/sections/MainPageHeader";
import MainPageTimeline from "@/features/MainPageFeatures/sections/MainPageTimeline";
import usePageTitle from "@/hooks/usePageTitle";
import { useContext } from "react";
import { reducerContext } from "../contexts/ReducerContextProvider";
import MainPageSidebar from "../features/MainPageFeatures/sections/MainPageSidebar";

export default function MainPage() {
  usePageTitle("J I F F Y");
  const context = useContext(reducerContext);

  console.log(context);

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
