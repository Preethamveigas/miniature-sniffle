import { lazy, useRef, useEffect } from 'react';
import { LazyComponents } from '@/utils';
import {
  Route,
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useParams,
  useLocation
} from 'react-router-dom';
import './dashboard.scss';
import { Button, Input } from '@/components/common'
import AtSymbol from '@/assets/icons/at-symbol.svg'
import Logo from '@/assets/icons/logo.svg';
import Paperclip from '@/assets/icons/paper-clip.svg';

const Session = lazy(async () => await import('@/container/session'));
const Chats = lazy(async () => await import('@/container/chats'));
const MessageInput = () => {
  return (<div className="chat-input-item-wrapper flex fixed bottom-4 items-center">
    <div className="chat-input-container flex items-center relative">
      <Input
        placeholder="Type your message"
        round="rounded-full py-3 px-6" border="border-0" bg="bg-gray-light" />
      <Paperclip className="chat-input-paper-clip rounded-full fill-current text-gray-400 cursor-pointer" />
    </div>
    <div className="flex items-center justify-between">
      <AtSymbol className="chatinput-at-symbol rounded-full ml-3 mr-3 fill-current text-primary cursor-pointer" />
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

export default () => {
  const { path, url, params } = useRouteMatch();
  console.log(path, url, params, ' path, url, params');

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  return (
    // <Router>
      <div
        className="flex max-h-full justify-center"
        style={{ height: window.innerHeight - 77 }}
      >
        <div className="w-1/4 h-full relative">
          {LazyComponents(Session, { history })}
        </div>
        <div className="w-3/4 bg-white h-auto relative chat-area">
          {/* <Router> */}
            <Switch>
              <Route
                path="/home/s/:sessionId"
                component={({ match, ...rest }) => {
                  let matched = useRouteMatch({ path: "/home/s/:sessionId", strict: true, sensitive: true });
                  const h = useParams()
                  const l = useLocation()
                  console.log(h, l, matched, 'chat match')
                  // useEffect(() => {
                  //   return () => h.replace({})
                  // }, [])
                  return <ChatsWrapper session_id={match?.params?.sessionId} />
                }}
              />
              <Route path={path}>
                <div className="flex items-center justify-center h-full">
                  <Logo
                    style={{
                      width: '9rem',
                      height: '9rem',
                    }}
                  />
                </div>
              </Route>
            </Switch>
          {/* </Router> */}
        </div>
      </div>
   );
};
