import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePrivateRoutes } from '../router/routes';


const getRouteName = (pathname, routes) => {
  const pathSplit = pathname.split('/');
  const currentRoute = routes.find((route) => {
    const routeSplit = route.path.split('/');
    if (route.path === pathname) {
      return true;
    }

    if (
      pathSplit.length === routeSplit.length &&
      route?.isID &&
      pathSplit[route?.position - 1] === routeSplit[route?.position - 1]
    ) {
      if (!route?.isMidVal) {
        route.name = pathSplit[route?.position];
      }
      return true;
    }
    return false;
  });
  return currentRoute ? currentRoute : false;
};

const getBreadcrumbs = (location, routesArray) => {
  const breadcrumbs = [];
  const locationParts = location.split('/');

  locationParts.reduce((prev, curr, index, array) => {
    const currentPathname = `${prev}/${curr}`;
    const currentRoute = getRouteName(currentPathname, routesArray);

    if (currentRoute) {
      breadcrumbs.push({
        pathname: currentPathname,
        name: currentRoute.name,
        active: index + 1 === array.length,
        isID: currentRoute.isID,
        isPath: currentRoute.isPath ?? false,
      });
    }
    return currentPathname;
  });

  return breadcrumbs;
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const [routes] = usePrivateRoutes()
  const currentLocation = pathname;
  const breadcrumbs = getBreadcrumbs(currentLocation, routes);
  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      separator={<NavigateNextIcon fontSize='small' />}
    >
      <Link to='/dashboard' className='text-blue-900 hover:text-blue-700 ms-2'>
        Home
      </Link>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div key={index}>
            {breadcrumb?.active || breadcrumb?.isPath ? (
              <span className='text-base'>{breadcrumb.name}</span>
            ) : (
              <Link className='text-blue-900 hover:text-blue-700' to={breadcrumb.pathname}>
                {breadcrumb.name}
              </Link>
            )}
          </div>
        );
      })}
    </Breadcrumbs>
  );
};

export default React.memo(Breadcrumb);
