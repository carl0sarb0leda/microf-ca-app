import React from 'react'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useRouteError,
} from 'react-router-dom'
import {ProtectRoute} from './ProtectRoute'
import {LogIn, Dashboard} from 'containers'
import {useAuth} from 'utils/auth-context'

const NotFound = () => {
  return <div>Not found</div>
}

const ErrorBoundary = () => {
  let error = useRouteError()
  console.error(error)
  let message
  if (error instanceof Error) message = error.message
  else message = 'Unexpected error, please try again'
  return <div>{message}</div>
}

const Routes = () => {
  const {token} = useAuth()
  //Redirect to dashboard if token is present
  const loginLoader = async () => {
    if (token) return redirect('/dashboard')
    return null
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <LogIn />,
        errorElement: <ErrorBoundary />,
        loader: loginLoader,
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
      basename: '/portal', // Basename defined for container app
    },
  )
  return <RouterProvider router={router} />
}

export default Routes
