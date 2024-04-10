import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type TAppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
  const renderWithWrapper = useCallback(
    (route: TAppRoutesProps) => {
      const element = (
        <>{route.element}</>
      )

      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.authOnly
              ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
              : element

          }
        />
      )
    },
    []
  )

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
}

export default memo(AppRouter);
