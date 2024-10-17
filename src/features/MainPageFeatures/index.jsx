import MainPageSidebar from "./sections/MainPageSidebar";
import MainPageTimeline from "./sections/MainPageTimeline";

export default function MainPageFeatures() {
  return (
    <main className="max-w-6xl m-auto sm:pr-2 flex flex-col-reverse sm:flex-row">
      <MainPageTimeline />
      <MainPageSidebar />
    </main>
  );
}

MainPageFeatures.whyDidYouRender = true