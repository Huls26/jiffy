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
import ProfilePage from '@pages/ProfilePage';
import SignupPage, { action as actionSignupPage } from '@pages/SignupPage';
// import CreatePostPage from '@pages/CreatePostPage';
import ViewPage from '@pages/ViewPage';
import { loader as loaderUserAuth } from '@api/onSnapUserAuth';
import { loader as loaderProfilePage } from '@features/UserProfile/components/Header';
// // lazy loading

import { action as actionUserInfoEditForm } from '@features/ProfileEditForm/components/UserInfoEditForm';

const CreatePostPage = lazy(() => import('@pages/CreatePostPage'));
// const ViewPage = lazy(() => import('@pages/ViewPage'));

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
          loader={loaderUserAuth}
          // protected routes
        />
        <Route
          path="profile/:id"
          loader={loaderProfilePage}
          action={actionUserInfoEditForm}
          element={<ProfilePage />}
           // protected routes
        />
        <Route
          path="createpost"
          // protected routes
          loader={loaderUserAuth}
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
