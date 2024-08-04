import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/LoginPage"));
const MainPage = lazy(() => import("@/pages/MainPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

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
