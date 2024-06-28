import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route key="main" path="/" element={<MainPage />} />,
      <Route
        key="login"
        path="login"
        // loader={loaderLoginPage}
        // action={actionLoginPage}
        element={<LoginPage />}
      />
    </Route>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
