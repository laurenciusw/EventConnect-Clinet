import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Redux from "./pages/Redux";
import Dashboard from "./pages/Organization/Dashboard";
import HomePage from "./pages/Homepage";
import DetailEvent from "./pages/DetailEvent";
import RegisterOrganization from "./pages/Organization/RegisterOrganization";
import LoginOrganization from "./pages/Organization/LoginOrganization";
import RegisterUser from "./pages/User/RegisterUser";
import LoginUser from "./pages/User/LoginUser";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Organization/Events";
import ListUser from "./pages/Organization/ListUser";
import UserDetail from "./pages/Organization/UserDetail";
import TodoList from "./pages/User/TodoList";
import MyAccount from "./pages/User/MyAccount";
import UpdateConfirm from "./pages/User/UpdateConfirm"

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
        element: <Sidebar />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/events",
            element: <Events />,
          },
          {
            path: "/dashboard/events/:id/users",
            element: <ListUser />,
          },
          {
            path: "/dashboard/events/:id/users/:userId",
            element: <UserDetail />,
          },
        ],
      },
      {
        path: "/detail/:id",
        element: <DetailEvent />,
      },
      {
        path: "/event/:id/todolist",
        element: <TodoList />,
      },
      {
        path: "/user/account",
        element: <MyAccount />,
      },
      {
        path: "/user/account/confirm",
        element: <UpdateConfirm />,
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
