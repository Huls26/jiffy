import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/SignUpPage";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route key="main" path="/" element={<MainPage />} />
      ,
      <Route
        key="login"
        path="login"
        // loader={loaderLoginPage}
        // action={actionLoginPage}
        element={<LoginPage />}
      />
      ,
      <Route
        key="signup"
        path="signup"
        // loader={loaderSignUpPage}
        // action={actionSignUpPage}
        element={<SignUpPage />}
      />
      ,
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
