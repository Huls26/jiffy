import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@layout/AppLayout';

import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';

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
        element={<LoginPage />}
      />
      <Route
        path="signup"
        element={<SignupPage />}
      />
    </Route>,
  ),
);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  );
}
