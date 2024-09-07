import { lazy } from "react";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const MainPage = lazy(() => import("@/pages/MainPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route key="main" path="/" element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
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
