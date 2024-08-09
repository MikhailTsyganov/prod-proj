import { type EUserRoles, getUserAuthData, getUserRoles } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface IRequireAuth {
  children: JSX.Element
  roles?: EUserRoles[]
}

export function RequireAuth({ children, roles }: IRequireAuth) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  const userRoles = useSelector(getUserRoles)

  const accessAllowedByRole = useMemo(() => {
    if (!roles) {
      return true
    }
    return roles?.some(role => (userRoles?.includes(role)))
  }, [roles, userRoles])

  console.log(accessAllowedByRole);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!accessAllowedByRole) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  return children;
}
