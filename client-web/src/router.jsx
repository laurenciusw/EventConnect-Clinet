import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Redux from "./pages/Redux";
import Dashboard from "./pages/Organization/Dashboard";
import HomePage from "./pages/HomePage";
import DetailEvent from "./pages/DetailEvent";
import RegisterOrganization from "./pages/Organization/RegisterOrganization";
import LoginOrganization from "./pages/Organization/LoginOrganization";
import RegisterUser from "./pages/User/RegisterUser";
import LoginUser from "./pages/User/LoginUser";
import FormAddEvent from "./pages/FormAddEvent";
import ProfileUser from "./pages/User/ProfileUser";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/redux",
        element: <Redux />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/detail/:id",
        element: <DetailEvent />,
      },
      {
        path: "/profile",
        element: <ProfileUser />,
      },
      {
        path: "/form-add-event",
        element: <FormAddEvent />,
      },
      {
        path: "/register/organization",
        element: <RegisterOrganization />,
      },
      {
        path: "/login/organization",
        element: <LoginOrganization />,
      },
      {
        path: "/register/user",
        element: <RegisterUser />,
      },
      {
        path: "/login/user",
        element: <LoginUser />,
      },
    ],
  },
]);

export default router;
