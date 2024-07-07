import { LoginContext } from "@/pages/LoginPage";
import { useContext } from "react";

export default function InputPassword() {
  const [state, dispatch] = useContext(LoginContext);

  function handleChange(event) {
    dispatch({
      type: "UPDATE_PASSWORD",
      payload: `${event.target.value}`,
    });
  }
  console.log(state);
  return (
    <input
      type="password"
      name="password"
      id="password"
      value={state.password}
      onChange={handleChange}
      autoComplete="current-password"
      placeholder="*****"
      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
    />
  );
}
