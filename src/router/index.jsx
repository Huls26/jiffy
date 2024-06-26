/* eslint-disable import/order */
import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@/layout/AppLayout';

// login page
import LoginPage from '@/pages/LoginPage';
import loaderLoginPage from '@/pages/login/loader';
import actionLoginPage from '@/pages/login/action';
// main page
import MainPage from '@/pages/MainPage';
// profile page
import ProfilePage from '@/pages/ProfilePage';
import actionUserInfoEditForm from '@/features/ProfileEditForm/utils/editFormAction';
// signup page
import SignupPage from '@/pages/SignupPage';
import actionSignupPage from '@/pages/signup/action';
// view page
import ViewPage from '@/pages/ViewPage';

// loader
import { loader as loaderUserAuth } from '@/api/onSnapUserAuth';
import loaderProfilePage from '@/features/UserProfile/loader';

// // lazy loading
import loaderMainpage from '@/components/MainPage/utils/loaderMainPage';

const CreatePostPage = lazy(() => import('@/pages/CreatePostPage'));

// handle errors and not found page
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
// const ViewPage = lazy(() => import('@pages/ViewPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        key="main"
        path="/"
        element={<AppLayout />}
        errorElement={<ErrorPage />}
      >
        <Route path="*" element={<NotFoundPage />} />
        <Route
          index
          loader={loaderMainpage}
          element={<MainPage />}
        />
        <Route
         // protected routes
          path="view"
          element={<ViewPage />}
          loader={loaderUserAuth}
        />
        <Route
         // protected routes
          path="profile/:id"
          loader={loaderProfilePage}
          action={actionUserInfoEditForm}
          element={<ProfilePage />}
        />
        <Route
          // protected routes
          path="createpost"
          loader={loaderUserAuth}
          element={<CreatePostPage />}
        />
      </Route>
      ,
      <Route
        key="login"
        path="login"
        loader={loaderLoginPage}
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
