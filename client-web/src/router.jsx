import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Redux from "./pages/Redux";
import Dashboard from "./pages/Organization/Dashboard";
import HomePage from "./pages/Homepage";
import DetailEvent from "./pages/DetailEvent";
import RegisterOrganization from "./pages/Organization/RegisterOrganization";
import RegisterUser from "./pages/User/RegisterUser";
import Login from "./pages/Login";
import FormAddEvent from "./pages/Organization/FormAddEvent";
import ProfileUser from "./pages/User/ProfileUser";
import FormEditProfile from "./pages/User/FormEditProfile";
import FormEditAccount from "./pages/User/FormEditAccount";

import Sidebar from "./components/Sidebar";
import Events from "./pages/Organization/Events";
import ListUser from "./pages/Organization/ListUser";
import UserDetail from "./pages/Organization/UserDetail";
import TodoList from "./pages/User/TodoList";
import MyAccount from "./pages/User/MyAccount";
import UpdateConfirm from "./pages/User/UpdateConfirm";
import FormEditEvent from "./pages/Organization/FormEditEvent";

import Chats from "./pages/Organization/Chats";
import MyEvents from "./pages/User/MyEvents";

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
        loader: () => {
          if (!localStorage.access_token || localStorage.role !== "Organizer")
            return redirect("/login");
          return null;
        },
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
            path: "/dashboard/chats",
            element: <Chats />,
          },
          {
            path: "/dashboard/events/:id/users",
            element: <ListUser />,
          },
          {
            path: "/dashboard/events/:id/users/:userId",
            element: <UserDetail />,
          },
          {
            path: "/dashboard/events/add",
            element: <FormAddEvent />,
          },
          {
            path: "/dashboard/events/:id/edit",
            element: <FormEditEvent />,
          },
        ],
      },
      {
        path: "/events/:id",
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
        path: "/user/account/edit",
        element: <FormEditAccount />,
      },
      {
        path: "/profile",
        element: <ProfileUser />,
      },
      {
        path: "/profile/edit",
        element: <FormEditProfile />,
      },
      {
        path: "/register/organization",
        element: <RegisterOrganization />,
      },
      {
        path: "/register/user",
        element: <RegisterUser />,
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => {
          if (localStorage.access_token) return redirect("/");
          return null;
        },
      },
      {
        path: "/myevents",
        element: <MyEvents />,
        loader: () => {
          if (!localStorage.access_token || localStorage.role !== "Volunteer")
            return redirect("/login");
          return null;
        },
      },
    ],
  },
]);

export default router;
