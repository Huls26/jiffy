import useAuthListener from "@/hooks/useAuthListener";
import usePageTitle from "@/hooks/usePageTitle";

export default function ProfilePage() {
  const { username } = useAuthListener();
  usePageTitle(`${username} 👀`);

  return (
    <div className="text-center text-3xl text-gray-50">
      ProfilePage
    </div>);
}
