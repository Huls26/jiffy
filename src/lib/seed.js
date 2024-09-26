import { auth } from "@/lib/fb";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export function seedDatabase(db) {
  const users = [
    {
      userId: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      username: "karl",
      fullName: "Karl Hadwen",
      email: "karlhadwen@gmail.com",
      password: "123456",
      following: ["2"],
      followers: ["2", "3", "4"],
      followersCount: 3,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      email: "raphael@sanzio.com",
      password: "123456",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      email: "salvador@dali.com",
      password: "123456",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      email: "george@orwell.com",
      password: "123456",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
  ];

  const addUsersToFirestore = async (users) => {
    try {
      for (let k = 0; k < users.length; k++) {
        const currentUser = users[k];
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          currentUser.email,
          currentUser.password,
        );
        updateProfile(auth.currentUser, {
          photoURL: currentUser.photoURL,
        });
        await signOut(auth);
        const userId = userCredential.user.uid;
        const { password, ...updateUserID } = { ...currentUser, userId };
        await addDoc(collection(db, "users"), updateUserID);
      }
      // biome-ignore lint/nursery/noConsole: <explanation>
      console.log("Users added successfully!");
    } catch (error) {
      // biome-ignore lint/nursery/noConsole: <explanation>
      console.error("Error adding users: ", error);
    }
  };

  addUsersToFirestore(users);

  // replace imageSrc
  // for (let i = 1; i <= 5; ++i) {
  //   firebase
  //     .firestore()
  //     .collection("photos")
  //     .add({
  //       photoId: i,
  //       userId: "2",
  //       imageSrc: `/images/users/raphael/${i}.jpg`,
  //       caption: "Saint George and the Dragon",
  //       likes: [],
  //       comments: [
  //         {
  //           displayName: "dali",
  //           comment: "Love this place, looks like my animal farm!",
  //         },
  //         {
  //           displayName: "orwell",
  //           comment: "Would you mind if I used this picture?",
  //         },
  //       ],
  //       userLatitude: "40.7128°",
  //       userLongitude: "74.0060°",
  //       dateCreated: Date.now(),
  //     });
  // }
}
