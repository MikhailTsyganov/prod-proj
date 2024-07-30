import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { PageLoader } from '@/shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';
import { TAppRoutesProps } from '@/shared/types/router';

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
