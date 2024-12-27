import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Component/Home/Home";
import MainAbout from "../Component/About/MainAbout";
import Details from "../Component/Details/Details";
import Login from "../Component/Security/Login";
import Regisetr from "../Component/Security/Regisetr";
import Private from "../Private/Private";
import Profile from "../Component/Profile/Profile";
import Error from "../Component/Error/Error";
import Contract from "../Component/Contract/Contract";
import Class from "../Component/Class/Class";
import Forget from "../Component/Security/Forget";
import SuccessEmailSent from "../Component/Security/SuccessEmailSent";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`../Service.json`)
        },
        {
          path:'/about',
          element:<MainAbout></MainAbout>
        },
        {
          path:'/details/:id',
          element:<Private><Details></Details></Private>,
          loader: async({params})=>{
            const response=await fetch(`../Service.json`)
            const dataService=await response.json()
            const singleData=dataService.find(service=>service.slug===params.id)
            
            
            return singleData
          }
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Regisetr></Regisetr>
        },
        {
          path:'/profile',
          element:<Private><Profile></Profile></Private>
        },
        {
          path:'/contact',
          element:<Contract></Contract>
        },
        {
          path:'/class',
          element:<Private><Class></Class></Private>
        },
        {
          path:'/forget',
          element:<Forget></Forget>
        },
        {
          path:'sForget',
          element:<SuccessEmailSent></SuccessEmailSent>
        }
      ]
    },
  ]);

export default router