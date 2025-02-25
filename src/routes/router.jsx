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
import Historypage from "@pages/historypage/Historypage";
import HistoryDetailPage from "@pages/historypage/HistoryDetailPage";
import HistoryUpload from "@pages/historypage/HistoryUpload";
import RecapPage from "@pages/historypage/RecapPage";
import HomeCheck from "@pages/homecheck/HomeCheck";
import HomeWrite from "@pages/homecheck/HomeWrite";
import HomeCheckFix from "@pages/homecheck/HomeCheckFix";
import Splash from "@pages/onboarding/Splash";
import Mypage from "@pages/profile/Mypage";
import Onboarding from "@pages/onboarding/Onboarding";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <Onboarding />,
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
      {
        path: ROUTE_PATHS.HISTORY,
        element: <Historypage />,
      },
      {
        path: ROUTE_PATHS.HISTORYDETAIL,
        element: <HistoryDetailPage/>,
      },
      {
        path: ROUTE_PATHS.RECAP,
        element: <RecapPage/>,
      },
      {
        path: ROUTE_PATHS.HOMECHECK,
        element: <HomeCheck/>,
      },
      {
        path: ROUTE_PATHS.HOMECHECKFIX,
        element: <HomeCheckFix/>,
      },
      {
        path: ROUTE_PATHS.HOMEWRITE,
        element: <HomeWrite/>,
      },
      {
        path: ROUTE_PATHS.SPLASH,
        element: <Splash/>,
      },
      {
        path: ROUTE_PATHS.ONBOARDING,
        element: <Onboarding/>,
      },
      {
        path: ROUTE_PATHS.MYPAGE,
        element: <Mypage/>,
      },
      {
        path: ROUTE_PATHS.HISTORYMY,
        element: <HistoryUpload/>,
      },
    ],
    errorElement: <NotFound />,
  },
]);
