import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { routes } from "config";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </Routes>
  );
};
