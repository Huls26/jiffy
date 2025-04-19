import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from "@/lib/fb";
import ProfilePageUpdateProfileModal from './ProfilePageUpdateProfileModal';

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import ProfilePageUpdateButton from "./ProfilePageUpdateButton";

export default function ProfilePageHeader() {
  const [globalState] = useContext(GlobalContext);
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // username is the Id of the user in the URL
  // and if user view there own profile, it will be the same as the globalState.username
  const {
    username
  } = useParams();

  useEffect(() => {
    let unsubscribe = null;

    const fetchUser = async () => {
      if (username === globalState.username) {
        const userRef = doc(db, "users", globalState.userId);
        unsubscribe = onSnapshot(userRef, (userSnapshot) => {
          setUserData(userSnapshot.data());
        });
      } else if (username) {
        try {
          const userRef = doc(db, "users", username);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            setUserData(userSnapshot.data());
          } else {
            setUserData(null);
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      }
    };

    fetchUser();

    return () => {
      if (unsubscribe) unsubscribe(); // Clean up Firestore subscription
    };
  }, [globalState.username, globalState.userId, username]);

  return (
    <header className="mb-5 flex items-center space-x-3 cursor-pointer">
      <UserProfile
        photoURL={userData?.photoURL}
        addedClassName={"w-15 h-15"}
      />
      <div className="space-y-1">
        <h1 className="text-xl text-sky-400 font-semibold">{userData?.fullName}</h1>
        <p className="text-sm text-gray-400 leading-3">{globalState.email}</p>
        <p className="font-semibold text-gray-300">{userData?.followersCount} Followers</p>
      </div>

      <ProfilePageUpdateProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ProfilePageUpdateButton
        isDisplay={globalState.username === username}
        onClick={() => setIsModalOpen(true)}
      />
    </header>
  )
}
