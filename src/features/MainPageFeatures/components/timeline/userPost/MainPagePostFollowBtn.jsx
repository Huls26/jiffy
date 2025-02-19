import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { useContext } from "react";

export default function MainPagePostFollowBtn({ postData }) {
  const [globalState] = useContext(GlobalContext);

  if (postData.userId !== globalState.userId) {
    return (
      <button
        type="button"
        className="text-gray-200 font-semibold hover:text-gray-400"
      >
        Follow
      </button>
    );
  }

  return null;
}
