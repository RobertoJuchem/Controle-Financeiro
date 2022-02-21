import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
   return (
      <Layout>      
         <Router>
            <Routes>
               <Route path='/Dashboard' element={<Dashboard/>}/>
               <Route path="/List/:type" element={<List/>}/>
            </Routes>
         </Router>
      </Layout>
   )
}

export default AppRoutes