import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import useUser from '@/hooks/useUser';

import Layout from '@/layouts/Main';
import Home from '@/pages/Home';

const Medicaments = lazy(() => import('@/pages/Medicaments'));
const Calender = lazy(() => import('@/pages/Calender'));
const Records = lazy(() => import('@/pages/Records'));
const SideEffects = lazy(() => import('@/pages/SideEffects'));
const Login = lazy(() => import('@/pages/Login'));
const Error404 = lazy(() => import('@/pages/Errors/Error404'));

const Router = () => {
    const { user } = useUser();
//   const user = true;
  return useRoutes([
    {
      path: '/',
      element: user ? <Layout /> : <Navigate to="/auth/login" />,
      children: [
        { path: '', element: <Home /> },
        { path: 'medciaments', element: <Medicaments /> },
        { path: 'calendar', element: <Calender /> },
        { path: 'records', element: <Records /> },
        { path: 'side-effects', element: <SideEffects /> },
      ],
    },
    {
      path: '/auth/login',
      element: user ? <Navigate to="/" /> : <Login />,
    },
    { path: '*', element: <Error404 /> },
  ]);
};
export default Router;
