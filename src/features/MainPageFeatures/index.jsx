import MainPageSidebar from "./sections/MainPageSidebar";
import MainPageTimeline from "./sections/MainPageTimeline";

export default function MainPageFeatures() {
  return (
    <main className="max-w-6xl m-auto md:px-2 flex flex-col-reverse md:flex-row">
      <MainPageTimeline />
      <MainPageSidebar />
    </main>
  );
}

MainPageFeatures.whyDidYouRender = true