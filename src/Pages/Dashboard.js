import { lazy } from 'react';
import { LazyComponents } from '@/utils';
import {
  Route,
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './dashboard.scss';

const Session = lazy(async () => await import('@/container/session'));
const Chats = lazy(async () => await import('@/container/chats'));

export default (...params) => {
  const { path, url } = useRouteMatch();
  const pathNmae = window.location.pathname.split('/')[1];
  console.log(pathNmae, 'path');
  console.log(path, 'paths');
  return (
    <div
      className="flex mb-4 max-h-full"
      style={{ height: window.innerHeight - 80 }}
    >
      <div className="w-1/4 bg-gray-400 h-auto relative">
        {LazyComponents(Session)}
      </div>
      <div className="w-3/4 bg-white h-auto relative chat-area">
        {/* {pathNmae != 'home' ()} */}
        <Switch>
          <Route
            path="/home/s/:sessionId"
            render={({ match }) => <Chats session_id={match?.params?.sessionId} />}
          />
          <Route path={path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
