import { db } from '@/lib/fb';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "userPosts"));

      console.log(querySnapshot.docs);
    }

    fetchData();
  }, [])

  return <div className="flex-1 border-white border-2">MainPageTimeline</div>;
}
