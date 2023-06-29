import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@layout/AppLayout';

import MainPage from '@pages/MainPage';
import LoginPage, { action as actionLoader } from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
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
        element={<MainPage />}
      />
      <Route
        path="login"
        action={actionLoader}
        element={<LoginPage />}
      />
      <Route
        path="signup"
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
