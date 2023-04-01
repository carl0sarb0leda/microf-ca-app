import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom'
import {ProtectRoute} from './ProtectRoute'
import {LogIn, Dashboard} from 'containers'

const NotFound = () => {
  return <div>Not found</div>
}

function ErrorBoundary() {
  let error = useRouteError()
  console.error(error)
  let message
  if (error instanceof Error) message = error.message
  else message = 'Unexpected error, please try again'
  return <div>{message}</div>
}

const Routes = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <LogIn />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    {
      basename: '/portal', // Route defined for container app
    },
  )
  return <RouterProvider router={router} />
}

export default Routes
