const handleSubmit = async (dispatch) => {
  dispatch({ type: "SET_IS_LOADING", payload: true });

  try {
    const userId = globalContextState.userId;
    const userDocRef = doc(db, "users", userId);
    let imageUrl = null;

    // Upload profile picture to Firebase Storage and update user's profile picture in Firestore
    if (state.profilePic) {
      // upload profile picture to Firebase Storage
      const storageRef = ref(storage, `userProfile/${userId}`);
      await uploadBytes(storageRef, state.profilePic);
      imageUrl = await getDownloadURL(storageRef);
      // update auth photoURL
      await updateProfile(auth.currentUser, {
        photoURL: imageUrl,
      });

      // update Firestore document
      await updateDoc(userDocRef, { photoURL: imageUrl });
    }

    // Update username
    if (state.username && state.username !== globalContextState.username) {
      await updateDoc(userDocRef, { username: state.username });
      await updateProfile(auth.currentUser, {
        displayName: state.username,
      });
    }

    // Update email address
    if (state.email && state.email !== auth.currentUser.email) {
      await updateEmail(auth.currentUser, state.email);
      await updateDoc(userDocRef, { email: state.email });
    }

    if (state.fullName) {
      await updateDoc(userDocRef, { fullName: state.fullName });
    }

    if (state.password) {
      await updatePassword(auth.currentUser, state.password);
    }
  } catch (e) {
    console.error(e);
    return;
  } finally {
    dispatch({ type: "SET_IS_LOADING", payload: false });
  }
};

export default handleSubmit;
