import { addDoc, collection } from "firebase/firestore";
export function seedDatabase(db) {
  const users = [
    {
      userId: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      username: "karl",
      fullName: "Karl Hadwen",
      emailAddress: "karlhadwen@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      followersCount: 3,
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      followersCount: 1,
      dateCreated: Date.now(),
    },
  ];

  const addUsersToFirestore = async (users) => {
    try {
      for (let k = 0; k < users.length; k++) {
        await addDoc(collection(db, "users"), users[k]);
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
