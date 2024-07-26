import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import reducerMethod, {
	INITIAL_STATE,
} from "@/contexts/SignUpPageContextReducer";
import SignUpFeatures from "@/features/SignUpFeatures";

export default function SignUpPage() {
	return (
		<LoginSignUpContainer>
			<ReducerContextProvider
				reducerMethod={reducerMethod}
				INITIAL_STATE={INITIAL_STATE}
			>
				<SignUpFeatures />
			</ReducerContextProvider>
		</LoginSignUpContainer>
	);
}
