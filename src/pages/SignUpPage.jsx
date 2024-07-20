import FormInput from "@/components/FormInput";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";
import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";

export default function SignUpPage() {
  return (
    <LoginSignUpContainer
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      <ReducerContextProvider>
        <section className="mb-8 text-center cursor-not-allowed">
          <h1 className="my-3 text-4xl font-bold">Create account</h1>
          <p className="text-sm dark:text-gray-600">
            Create an account and connect with others.
          </p>
        </section>
        <form action="POST" className="space-y-12">
          <section className="space-y-4">
            <section>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <FormInput
                type="email"
                name="email"
                id="email"
                // value={state.email}
                // onChange={(event) => handleChange(event, dispatch, "UPDATE_EMAIL")}
                autoComplete="username"
                placeholder="aquino@mail.com"
              />
            </section>
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
