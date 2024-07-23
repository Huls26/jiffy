import ModalHeaderText from "@/components/ModalHeaderText";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";
import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import reducerMethod, {
  INITIAL_STATE,
} from "@/contexts/SignUpPageContextReducer";
import InputLabelContainer from "../components/componentContainers/InputLabelContainer";

export default function SignUpPage() {
  return (
    <LoginSignUpContainer
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <ModalHeaderText
          title={"Create account"}
          body={"Create an account and connect with others."}
        />
        <form action="POST" className="space-y-12">
          <section className="space-y-4">
            <InputLabelContainer
              label="Email address"
              type="email"
              name="email"
              id="email"
              dispatchType="UPDATE_EMAIL"
              autoComplete="username"
              placeholder="aquino@mail.com"
            />
            <InputLabelContainer
              label="Username"
              type="username"
              name="username"
              id="username"
              dispatchType="UPDATE_USERNAME"
              autoComplete="username"
              placeholder="Kiki Aquino"
            />
            <InputLabelContainer
              label="Password"
              type="password"
              name="password"
              id="password"
              dispatchType="UPDATE_PASSWORD"
              autoComplete="password"
              placeholder="********"
            />
            <InputLabelContainer
              label="Confirm Password"
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              dispatchType="UPDATE_CONFIRM_PASSWORD"
              autoComplete="confirmPassword"
              placeholder="********"
            />
          </section>
          <section className="space-y-2">
            <SubmitFullBtn text="Create Account" />
            <p className="px-6 text-sm text-center dark:text-gray-600 cursor-default">
              Already have an account?
              {/* create a component for reusable purposes same a the login component */}
              <a
                rel="noopener noreferrer"
                href="/signup"
                className="pl-1 hover:underline dark:text-blue-600"
              >
                Login.
              </a>
            </p>
          </section>
        </form>
      </ReducerContextProvider>
    </LoginSignUpContainer>
  );
}
