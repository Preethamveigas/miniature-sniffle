import { lazy } from 'react';
import { LazyComponents } from '@/utils';
import {
  Route,
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './dashboard.scss';
import { Button, Input } from '@/components/common'
import AtSymbol from '@/assets/icons/at-symbol.svg'
const Session = lazy(async () => await import('@/container/session'));
const Chats = lazy(async () => await import('@/container/chats'));

const MessageInput = () => {
  return (<div className="w-3/4 flex fixed bottom-4 items-center">
    <div className="chat-input-container">
      <Input
        placeholder="Type your message"
        round="rounded-full py-3 px-6" border="border-0" bg="bg-gray-light" />
    </div>
    <div className="flex item-center justify-between">
      <AtSymbol
        className="chatinput-at-symbol mr-3 fill-current text-primary cursor-pointer" />
      <Button size="input-send-button" rounded="rounded-full" />
    </div>
  </div>
  )
}

const ChatsWrapper = ({ session_id }) => {
  return LazyComponents(() => {
    return (<div className="relative block">
      <Chats session_id={session_id} />
      <MessageInput />
    </div>)

  })
}

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
            render={({ match }) => <ChatsWrapper session_id={match?.params?.sessionId} />}
          />
          <Route path={path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
