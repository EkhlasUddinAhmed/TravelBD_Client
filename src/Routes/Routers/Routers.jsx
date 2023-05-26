import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Components/Home/Home/Home";
import Blog from "../../Components/Blog/Blog";
import NotFound from "../../Components/NotFound/NotFound";
import News from "../../Components/News/News";
import Destination from "../../Components/Destination/Destination";
import Booking from "../../Components/Shared/Booking/Booking";
import StayRoom from "../../Components/Shared/StayRoom/StayRoom";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Terms from "../../Components/Terms/Terms";
import Protected from "../../Components/Protected/Protected";

export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/blog",
                element:<Protected><Blog/></Protected>
            },
            {
                path:"/news",
                element:<News></News>
            },
            {
                path:"/destination",
                element:<Protected><Destination/></Protected>
            },
            {
                path:"/booking/:name",
                element:<Protected><Booking/></Protected>
            },
            {
                path:"/stayroom/:id",
                element:<Protected><StayRoom></StayRoom></Protected>,
                loader:({params})=>{
                return fetch(`https://travel-bd-server-two.vercel.app/travel/stayroom/${params.id}`)
                
                }
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/terms",
                element:<Terms/>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    }
]);