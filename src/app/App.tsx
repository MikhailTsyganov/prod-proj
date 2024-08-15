import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { Counter } from '@/entities/Counter';

export default function App() {
  const dispatch = useDispatch()
  const isUserInited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Counter/>
          {isUserInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}
