import { LoginContext } from "@/pages/LoginPage";
import { useContext } from "react";

export default function InputEmail() {
  const [state, dispatch] = useContext(LoginContext);

  function handleChange(event) {
    dispatch({
      type: "UPDATE_EMAIL",
      payload: `${event.target.value}`,
    });
  }

  return (
    <section>
      <label htmlFor="email" className="block mb-2 text-sm">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={state.email}
        onChange={handleChange}
        placeholder="leroy@jenkins.com"
        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
      />
    </section>
  );
}
