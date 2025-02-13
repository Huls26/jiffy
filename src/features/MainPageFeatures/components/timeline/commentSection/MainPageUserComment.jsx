import UserProfile from "@/components/UserProfile";
import useFetchUserData from "../../../hooks/commentSection/useFetchUserData";
import MainPageCommentItem from "./MainPageCommentItem";
import { UserCommentContext } from "@/features/MainPageFeatures/context/MainPageUserCommentDataContext"

import { useContext } from "react";

export default function MainPageUserComment() {
  const { userId } = useContext(UserCommentContext);
  const userInfo = useFetchUserData(userId)

  return (
    <div className="mb-4 flex items-center space-x-2">
      <UserProfile
        photoURL={userInfo.photoURL}
        addedClassName={'w-10 h-10 hover:scale-110 shrink-0'}
      />
      <MainPageCommentItem
        username={userInfo.username}
      />
    </div>
  )
}