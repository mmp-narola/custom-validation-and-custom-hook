import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { authRoutes, usePrivateRoutes } from './router/routes';
import AuthRoutes from './router/AuthRoutes'
import PrivateRoutes from './router/PrivateRoutes';

const App = () => {
  const [routes] = usePrivateRoutes()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<DefaultLayout />}
        >
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<PrivateRoutes>{route.element}</PrivateRoutes>}
                />
              )
            )
          })}
        </Route>
        <Route
          path='/'
        >
          {authRoutes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<AuthRoutes>{route.element}</AuthRoutes>}
                />
              )
            )
          })}
        </Route>

        <Route path='*' element={<PrivateRoutes><Navigate to="/" /></PrivateRoutes>} />

      </Routes>
    </BrowserRouter >
  );

}

export default App