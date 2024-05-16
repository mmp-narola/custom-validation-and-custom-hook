import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


// routes config
import { userRoutes } from '../router/routes'

const AppContent = ({ children }) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {children.props.children}
        {/* {userRoutes.map((route, idx) => {
          console.log('route', route)
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          )
        })
        }
        */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />

      </Routes>
    </Suspense>
  )
}

export default React.memo(AppContent)
