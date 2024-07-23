import FormInput from "@/components/FormInput";
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
              dispatchType="UPADATE_EMAIL"
              autoComplete="username"
              placeholder="aquino@mail.com"
            />
            <section>
              <label htmlFor="username" className="block mb-2 text-sm">
                Username
              </label>
              <FormInput
                type="username"
                name="username"
                id="username"
                // value={state.email}
                // onChange={(event) => handleChange(event, dispatch, "UPDATE_EMAIL")}
                autoComplete="username"
                placeholder="Kiki Aquino"
              />
            </section>
            <section>
              {/* create a component for reusable purposes same a the login component */}
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <FormInput
                type="password"
                name="password"
                id="password"
                // value={state.email}
                // onChange={(event) => handleChange(event, dispatch, "UPDATE_EMAIL")}
                autoComplete="password"
                placeholder="********"
              />
            </section>
            <section>
              {/* create a component for reusable purposes same a the login component */}
              <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <FormInput
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                // value={state.email}
                // onChange={(event) => handleChange(event, dispatch, "UPDATE_EMAIL")}
                autoComplete="confirmPassword"
                placeholder="********"
              />
            </section>
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
