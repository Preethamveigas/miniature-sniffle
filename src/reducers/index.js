import sessionReduce from './sessionReduce';
import chatReducer from './chatReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';
import { APP } from '@/constants/storage'
// import { decryptMessage, str2ab, importSecretKey } from '@/utils'

const ivs = JSON.parse(sessionStorage.getItem(APP.login ?? {}))
// const key = JSON.parse(localStorage.getItem(APP.aeskey ?? {}))
// if (ivs) {

  // var uint8array = new TextEncoder().encode(ivs);
  // console.log(uint8array)
  // let uint8Array = new Uint8Array(uint8array);

  // const d = new TextDecoder()
  // const v = d.decode(ivs)
  // console.log(v)
  // debugger
  // const iv = str2ab(ivs)
  // const k = str2ab(key)
  // const message = JSON.parse(localStorage.getItem(APP.login ?? {}))
  // const messagek = str2ab(message)

  // importSecretKey(k).then(kk => {

  //   console.log(kk, 'kk')
  //   console.log(iv, 'kk')

  //   decryptMessage(kk, iv, messagek).
  //     then(e => console.log(e, 'dec reducer ')).
  //     catch(er => console.log(er, 'dec reducer'))
  // })
// }


const rootReducer = ({
  session, app, chats, user,
}, action) =>
// middleware goes here, i.e calling analytics service, etc.
({
  session: sessionReduce(session, action),
  chats: chatReducer(chats, action),
  user: userReducer(user, action),
  app: appReducer(app, action),
});

export const initialState = {
  chats: {
    session: [],
    active: [],
    chat: [],
  },
  user: {
    logged: ivs,
    role: null,
    data: null,
  },
  app: {
    loader: false,
    logo: require('@/assets/icons/logo.svg')
  },
};

export default rootReducer;

