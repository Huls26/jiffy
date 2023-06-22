import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import AppLayout from '@layout/AppLayout';
import MainPage from '@pages/MainPage';

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
    </Route>,
  ),
);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  );
}
