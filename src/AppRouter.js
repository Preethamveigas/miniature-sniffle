import React, { lazy, Suspense } from 'react';
import d, {
  BrowserRouter as Router,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
  Switch,
} from 'react-router-dom';
import { useStateValue } from '@/store/configureStore';
import Spin from '@/components/Spin';

const Login = lazy(() => import('@/Pages/Login'));
const Dashboard = lazy(() => import('@/Pages/Dashboard'));
const Profile = lazy(() => import('@/Pages/Profile'));

const Header = lazy(() => import('@/components/Header'));
const Menu = lazy(() => import('@/components/Menus/'));
const HeaderRightbar = lazy(() => import('@/components/HeaderRightbar'));

const Chats = () => 'chats';
const Roles = () => 'Roles';
const Organization = () => 'Organization';

function LazyComponents(Component, prop) {
  return (
    <Suspense fallback="loading">
      <Component {...prop} />
    </Suspense>
  );
}

const Layout = () => {
  const { user } = useStateValue();
  const { path } = useRouteMatch();
  console.log(path, 'path from layout');
  if (!user?.token && !user?.logged) {
    return <Redirect to="/login" />;
  }

  return (
    <Router>
      {LazyComponents(() => (
        <Header>
          <Menu />
          <HeaderRightbar />
        </Header>
      ))}
      <Switch>
        <Route path="/home/profile" component={() => LazyComponents(Profile)} />
        <Route
          exact
          path="/home/s/:id?"
          component={() => LazyComponents(Dashboard)}
        />
        <Route path="/s/:id?" component={() => 'sis'} />

        <Route path="/" component={() => LazyComponents(Dashboard)} />
        {/* <Route
        path="/"
        component={() => LazyComponents(Dashboard)}
      /> */}
        {/* <Route path="/s/" render={() => LazyComponents(Dashboard)} /> */}
        <Route path="*" component={() => 'not found'} />
      </Switch>
    </Router>
  );
};

const AppRouter = ({ baseName }) => {
  const { path } = useRouteMatch();
  console.log(path, 'baseName');

  const { app } = useStateValue();
  if (app?.loader) {
    return <Spin />;
  }
  if (baseName === 'wise') {
    return (
      <div className="px-4 max-h-screen h-screen overflow-hidden">
        <Switch>
          <Route
            exact
            path="/"
            component={() => LazyComponents(Layout)}
          />
          <Route
            exact
            path="/login/:id?"
            component={() => LazyComponents(Login)}
          />
          <Route path="*" component={() => 'adsdd'} />
        </Switch>
      </div>
    );
  }
  return (
    <div className="px-4 max-h-screen h-screen overflow-hidden">
      <Switch>
        <Route
          exact
          path="/"
          component={() => LazyComponents(Layout)}
        />
        <Route
          exact
          path="/resetpassword/:id?"
          render={() => 'reset'}
        />
        <Route
          exact
          path="/login/:id?"
          component={() => LazyComponents(Login)}
        />
        <Route path="/" component={() => LazyComponents(Layout)} />
        <Route path="*" component={() => 'ads'} />
      </Switch>
    </div>
  );
};
export default AppRouter;
