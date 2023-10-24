import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import{createBrowserRouter, RouterProvider } from "react-router-dom";
// import RestaurantCard from "./components/RestaurantCard";


const Applayout = () => {
 return(
    <>
    <Header />
     <Body />
    <Footer /> 
    </>
 )
}
const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <Applayout />
   },{
      path: '/about',
      element: <About />,
   },
     
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);