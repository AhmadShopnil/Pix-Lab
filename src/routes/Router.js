import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditMyReviews from "../Pages/MyReviews/EditMyReviews";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://pix-lab-server.vercel.app/homeservices')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://pix-lab-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/editmyreviews/:id',
                element: <EditMyReviews></EditMyReviews>
            },
            {
                path: '/addservices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            }
        ]
    }
])

export default router