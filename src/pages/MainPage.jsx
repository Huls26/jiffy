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
      {globalState.userLogin && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80"
          width="100"
          height="100"
          className="block mx-auto"
        />
      )}
      <MainPageTimeline />
      <MainPageSidebar />
    </main>
  );
}
