import { createBrowserRouter } from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import PrivateRoute from "./privateRoute"
import Dashboard from "../pages/Dashboard"
import AllTask from "../pages/LandingPage/AllTask/AllTask"
import Done from "../pages/LandingPage/Done/Done"
import Progress from "../pages/LandingPage/Progress/Progress"
import MostTAsk from "../pages/LandingPage/MostTask/MostTAsk"
import MostDoneTask from "../pages/LandingPage/MostDoneTask/MostDoneTask"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import MainLayout from "../Components/common/MainLayout"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute>
            <HomeScreen />
        </PrivateRoute>
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <SignUp />
    },
   
  

    {
        path:"/dash/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }, 
            {
                path: "alltask",
                element: <AllTask />
            },
            {
                path: "done",
                element: <Done />
            },
            {
                path: "progress",
                element: <Progress />
            },
            {
                path: "mosttask",
                element: <MostTAsk />
            },
            {
                path: "MostDoneTask",
                element: <MostDoneTask />
            },
        ]
    }
]) 