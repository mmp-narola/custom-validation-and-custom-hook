import React from 'react'
import Home from '../Components/Home'
import Shipping from '../Components/Shipping'
import CreateShipping from '../Components/CreateShipping'
import Locations from '../Components/Location'
import Login from '../Components/Login'
import Error404 from '../Components/Error404'
import { useSelector } from 'react-redux'
import PasswordGenerate from '../Components/PasswordGenerate'
import RegistrationForm from '../Components/RegistrationForm'

export const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        isRouteAccessible: true,
        element: <Login />,
    },
    {
        path: '/error',
        name: 'Error',
        isRouteAccessible: true,
        element: <Error404 />,
    },
]

export const usePrivateRoutes = () => {
    const { permissions } = useSelector((state) => state.permission);

    const routes = [
        {
            path: '',
            name: 'Home',
            exact: true,
            isRouteAccessible: permissions?.shipping?.view,
            element: <Home />
        },
        {
            path: '/shipping',
            name: 'Shipping',
            exact: true,
            isRouteAccessible: permissions?.shipping?.view,
            element: <Shipping />
        },
        {
            path: '/shipping/create',
            name: 'Shipping Create',
            exact: true,
            isRouteAccessible: permissions?.shipping?.view,
            element: <CreateShipping />
        },
        {
            path: '/shipping/create/:id',
            name: 'Shipping Create with Id',
            exact: true,
            isRouteAccessible: permissions?.shipping?.view,
            element: <CreateShipping />,
            isID: true,
            position: 3

        },
        {
            path: '/generate-password',
            name: 'Password Generator',
            exact: true,
            element: <PasswordGenerate />,
            // isRouteAccessible: true
        },
        {
            path: '/custom-validation',
            name: 'Custom Validation',
            exact: true,
            element: <RegistrationForm />,
            // isRouteAccessible: true
        },
        {
            path: '/error',
            name: 'Error',
            exact: true,
            // isRouteAccessible: true,
            element: <Error404 />,
        },
    ]

    return [routes, permissions]
}