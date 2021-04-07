import { lazy } from 'react';

export const Login = lazy(() => import('@/Pages/Login'));
export const PasswordReset = lazy(() => import('@/Pages/PasswordReset'));
export const Dashboard = lazy(() => import('@/Pages/Dashboard'));
export const Profile = lazy(() => import('@/Pages/Profile'));
export const Dsh = lazy(() => import('@/dsh'));
export const DshTheme = lazy(() => import('@/dsh/theme'));
export const Header = lazy(() => import('@/components/Header'));
export const Menu = lazy(() => import('@/components/Menus/'));
export const HeaderRightbar = lazy(() => import('@/components/HeaderRightbar'));

