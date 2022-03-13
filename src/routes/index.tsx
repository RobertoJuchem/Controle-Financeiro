import React from "react";
import Auth from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {

   const { logged } = useAuth()

   return logged ? <AppRoutes /> : <Auth />
   
}

export default Routes