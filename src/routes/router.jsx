import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddToFindRoommate from "../pages/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import PrivateRoute from "../provider/PrivateRoute";
import Details from "../pages/Details";
import UpdateListing from "../pages/UpdateListing";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
     {
       path: '/',
       Component: Home,

     },
        {
        path: '/login',
        Component: Login,
      },
      {
        path: '/signup',
        Component: Signup,
      },
      {
        path: '/addToFind',
        element: 
        <PrivateRoute>
          <AddToFindRoommate></AddToFindRoommate>
        </PrivateRoute>
      },
       {
        path: '/browseListing',
        loader: ()=>fetch("http://localhost:3000/listings"),
        Component: BrowseListing,
      },
       {
        path: '/myListing',
        element: 
        <PrivateRoute>
          <MyListing></MyListing>
        </PrivateRoute>
      },

      {
        path: '/listing/:id',
        loader: ({params})=>fetch(`http://localhost:3000/listings/${params.id}`),
        element:
        <PrivateRoute>
          <Details></Details>
        </PrivateRoute>
      },
       {
        path: '/updateListing/:id',
        loader: ({params})=>fetch(`http://localhost:3000/listings/${params.id}`),
        element:
        <PrivateRoute>
          <UpdateListing></UpdateListing>
        </PrivateRoute>
      }
    ]
  },
   {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

  export default router;