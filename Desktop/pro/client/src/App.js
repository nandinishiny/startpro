import React from "react";
import {createBrowserRouter,Outlet} from 'react-router-dom'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ErrorElement from "./components/ErrorElement";
import Body from "./components/Body";
const App = ()=>{
    return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>)
}
export const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorElement/>,
        children:[{
            path:"/",
            element:<Body/>
        },
       
        
    ]

    }

])
// export default App;