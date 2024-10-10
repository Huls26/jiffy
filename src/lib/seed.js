import { auth } from "@/lib/fb";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function seedDatabase(db) {
  const users = [
    {
      userId: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      username: "karl",
      fullName: "Karl Hadwen",
      email: "karlhadwen@gmail.com",
      password: "123456",
      following: { 2: "2" }, // No change needed here
      followers: { 2: "2", 3: "3", 4: "4" },
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
      following: {}, // No users followed yet
      followers: {
        NvPY9M9MzFTARQ6M816YAzDJxZ72: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      },
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
      following: { 4: "4" }, // Updated from array to object
      followers: {
        NvPY9M9MzFTARQ6M816YAzDJxZ72: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      }, // Updated from array to object
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
      following: {}, // Updated from array to object
      followers: {
        NvPY9M9MzFTARQ6M816YAzDJxZ72: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      }, // Updated from array to object
      followersCount: 1,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "5",
      username: "vanGogh",
      fullName: "Vincent van Gogh",
      email: "vincent@vangogh.com",
      password: "123456",
      following: { 3: "3" }, // Updated from array to object
      followers: { 2: "2", 4: "4" }, // Updated from array to object
      followersCount: 2,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "6",
      username: "hemingway",
      fullName: "Ernest Hemingway",
      email: "ernest@hemingway.com",
      password: "123456",
      following: { 4: "4" }, // Updated from array to object
      followers: { 1: "1" }, // Updated from array to object
      followersCount: 1,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "7",
      username: "shakespeare",
      fullName: "William Shakespeare",
      email: "william@shakespeare.com",
      password: "123456",
      following: {}, // Updated from array to object
      followers: { 1: "1", 2: "2" }, // Updated from array to object
      followersCount: 2,
      dateCreated: Date.now(),
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    },
    {
      userId: "8",
      username: "austen",
      fullName: "Jane Austen",
      email: "jane@austen.com",
      password: "123456",
      following: { 2: "2", 6: "6" }, // Updated from array to object
      followers: { 1: "1" }, // Updated from array to object
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
          displayName: currentUser.username,
          photoURL: currentUser.photoURL,
        });
        await signOut(auth);
        const userId = userCredential.user.uid;
        const { password, ...updateUserID } = { ...currentUser, userId };
        await setDoc(doc(db, "users", userId), updateUserID);
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
