import { createContext } from "react";

const loginContext = createContext();
const LoginContextProvider = loginContext.Provider;

export default LoginContextProvider;
export { loginContext };
