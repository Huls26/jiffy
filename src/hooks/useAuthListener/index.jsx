import { reducerContext } from "@/contexts/ReducerContextProvider";
import { auth } from "@/lib/fb";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";

export default function useAuthListener() {
  const [globalStateContext, dispatch] = useContext(reducerContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "UPDATE_USERLOGIN",
          isUserLoggedIn: true,
          email: user.email,
          username: user.displayName,
          fullName: "",
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return globalStateContext;
}
