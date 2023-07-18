import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/App.context";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { token } = useContext(AppContext);

  const validate = async () => {
    console.log('entra')
  };

  useEffect(() => {
    (async() => {
        await validate()
    })();
  }, [])

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
