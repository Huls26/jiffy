import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@layout/AppLayout';

import LoginPage, { action as actionLoginPage } from '@pages/LoginPage';
import MainPage, { loader as loaderMainpage } from '@pages/MainPage';
import ProfilePage, { loader as loaderProfilePage } from '@pages/ProfilePage';
import SignupPage, { action as actionSignupPage } from '@pages/SignupPage';
import ViewPage from '@pages/ViewPage';

// lazy loading
const CreatePostPage = lazy(() => import('@pages/CreatePostPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        key="main"
        path="/"
        element={<AppLayout />}
      >
        <Route
          index
          loader={loaderMainpage}
          element={<MainPage />}
        />
        <Route
          path="view"
          element={<ViewPage />}
        />
        <Route
          path="profile/:id"
          loader={loaderProfilePage}
          element={<ProfilePage />}
        />
        <Route
          path="createpost"
          // action={actionCreatePostPage}
          element={<CreatePostPage />}
        />
      </Route>
      ,
      <Route
        key="login"
        path="login"
        action={actionLoginPage}
        element={<LoginPage />}
      />
      ,
      <Route
        key="signup"
        path="signup"
        action={actionSignupPage}
        element={<SignupPage />}
      />
      ,
    </Route>,
  ),
);

export default function Router() {
  return (
    <RouterProvider router={router} />
  );
}
