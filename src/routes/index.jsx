import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@layout/AppLayout';

import MainPage, { loader as loaderMainpage } from '@pages/MainPage';
import LoginPage, { action as actionLoginPage } from '@pages/LoginPage';
import SignupPage, { action as actionSignupPage } from '@pages/SignupPage';
import ViewPage from '@pages/ViewPage';
import ProfilePage from '@pages/ProfilePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
    >
      <Route
        index
        loader={loaderMainpage}
        element={<MainPage />}
      />
      <Route
        path="login"
        action={actionLoginPage}
        element={<LoginPage />}
      />
      <Route
        path="signup"
        action={actionSignupPage}
        element={<SignupPage />}
      />
      <Route
        path="view"
        element={<ViewPage />}
      />
      <Route
        path="profile/:id"
        element={<ProfilePage />}
      />
    </Route>,
  ),
);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  );
}
