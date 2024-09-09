import { reducerContext } from "@/contexts/ReducerContextProvider";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";

export default function LogoutButton() {
	const [globalStateContext, dispatch] = useContext(reducerContext);

	const handleLogout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Update the global state to reflect the user is logged out
				dispatch({
					type: "UPDATE_USERLOGIN",
					isUserLoggedIn: false,
					email: null,
					username: null,
					fullName: null,
				});
				dispatch({ type: "UPDATE_LOADING", isLoading: false });
				console.log("User signed out successfully.");
			})
			.catch((error) => {
				// Handle any errors during sign out
				console.error("Error signing out: ", error);
				dispatch({ type: "UPDATE_LOADING", isLoading: false });
			});
	};

	return (
		<button
			type="button"
			onClick={handleLogout}
			disabled={globalStateContext.isLoading}
		>
			{"<Logout />"}
		</button>
	);
}
