import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/routeConstants";

import { DefaultLayout } from "@layouts/DefaultLayout";

import { MainPage } from "@pages/mainpage/MainPage";
import { SignupPage } from "@pages/signuppage/SignupPage";
import { LoginPage } from "@pages/loginpage/LoginPage";

import { ApplyPage } from "@pages/applypage/ApplyPage";
import { SelectPage } from "@pages/selectpage/SelectPage";

import { HomePage } from "@pages/homepage/HomePage";
import { AboutPage } from "@pages/aboutpage/AboutPage";
import { NotFound } from "@pages/notfound/NotFound";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATHS.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATHS.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.APPLY,
        element: <ApplyPage />,
      },
      {
        path: ROUTE_PATHS.SELECT,
        element: <SelectPage />,
      },
      {
        path: ROUTE_PATHS.ABOUT,
        element: <AboutPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
