// import {  useSelector } from "react-redux";
import CreateShipping from "../Components/CreateShipping";
import Error404 from "../Components/Error404";
import Home from "../Components/Home";
import Locations from "../Components/Location";
import Shipping from "../Components/Shipping";
import { useSelector } from "react-redux";

const usePrivateRoutes = () => {
    const permissions = useSelector((state) => state.permissions);
    console.log('permissions', permissions)
    return [
        {
            path: '',
            name: 'Home',
            // isRouteAccessible: true,
            element: <Home />
        },
        {
            path: 'shipping',
            name: 'Shipping',
            // isRouteAccessible: true,
            element: <Shipping />
        },
        {
            path: 'shipping/create',
            name: 'Create',
            // isRouteAccessible: true,
            element: <CreateShipping />
        },

        //Equipment
        {
            path: '/equipment',
            name: 'Equipment',
            // isRouteAccessible: true,
            element: <Shipping />,
        },
        {
            name: 'Create',
            path: '/equipment/create',
            // isRouteAccessible: true,
            element: <Shipping />,
        },
        {
            name: 'Details',
            path: '/equipment/details/:equipmentId',
            // isRouteAccessible: true,
            isID: true,
            cruxPath: '/equipment/details',
            element: <Shipping />,
        },
        {
            name: 'Update',
            path: '/equipment/update/:equipmentId',
            // isRouteAccessible: true,
            isID: true,
            cruxPath: '/equipment/update',
            element: <Shipping />,
        },

        // report routes
        {
            path: '/srom-report',
            name: 'SROM Report',
            element: <Shipping />,
            // isRouteAccessible: true
        },
        {
            name: 'General Report',
            path: '/general-report',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            name: 'Upload Report',
            path: '/upload-report',
            element: <Shipping />,
            // isRouteAccessible: true,
        },

        // location routes
        {
            path: '/location',
            name: 'Location',
            element: <Locations />,
            // isRouteAccessible: true
        },
        {
            path: '/location/create',
            name: 'Create',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            name: 'Update',
            path: '/location/update/:locationId',
            isID: true,
            cruxPath: '/location/update',
            element: <Shipping />,
            // isRouteAccessible: true,
        },

        // company routes
        {
            path: '/company',
            name: 'Company',
            element: <Shipping />,
            // isRouteAccessible: true
        },
        {
            name: 'Details',
            path: '/company/details/:companyId',
            isID: true,
            cruxPath: '/company/details',
            element: <Shipping />,
            // isRouteAccessible: true,
        },

        // division routes
        {
            path: '/division',
            name: 'Division',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            path: '/division/details/:divisionId',
            name: 'Division',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            path: '/division/create',
            name: 'Create',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            path: '/division/update/:divisionId',
            name: 'Update',
            element: <Shipping />,
            // isRouteAccessible: true,
        },

        // division: company nested routes
        {
            path: '/company/:companyId/division/details/:divisionId',
            name: 'Division',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            name: 'Create',
            path: '/company/:companyId/division/create',
            isID: true,
            cruxPath: '/company/division/create',
            element: <Shipping />,
            // isRouteAccessible: true,
        },
        {
            name: 'Update',
            path: '/company/:companyId/division/update/:divisionId',
            isID: true,
            cruxPath: '/company/division/update',
            element: <Shipping />,
            // isRouteAccessible: true,
        },

        // user routes
        {
            path: '/users',
            name: 'Users',
            element: <Shipping />,
            // isRouteAccessible: true
        },

        {
            path: '/error',
            name: 'Error',
            // isRouteAccessible: true,
            element: <Error404 />,
        },
    ]
}


export default usePrivateRoutes;