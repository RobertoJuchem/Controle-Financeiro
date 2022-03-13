import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "../pages/Signin";

const AppRoutes: React.FC = () => {
   return (   
         <Router>
            <Routes>
               <Route path='/' element={<Signin/>}/>
               <Route path='Signin' element={<Signin/>}/>
            </Routes>
         </Router>
   )
}

export default AppRoutes