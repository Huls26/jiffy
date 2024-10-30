import { db, storage } from "@/lib/fb";
import { collection, doc } from "firebase/firestore";
import { ref } from "firebase/storage";

export default function postStoreRef(globalState) {
  const postRef = doc(collection(db, "userPosts"));
  const storageRef = ref(
    storage,
    `contentImages/${globalState.userId}/${postRef.id}`,
  );

  return { postRef, storageRef };
}
