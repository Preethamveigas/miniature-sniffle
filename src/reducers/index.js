import sessionReduce from './sessionReduce';
import chatReducer from './chatReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';
import { APP } from '@/constants/storage'
// import { decryptMessage, str2ab, importSecretKey } from '@/utils'

const ivs = JSON.parse(sessionStorage.getItem(APP.login ?? {}))
let user = JSON.parse(localStorage.getItem(APP.user ?? {}))
if (typeof user == 'string') {
  user = JSON.parse(user)
}

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

function handleActions(action) {

  switch (action?.type) {
    case 'APP_SET_FILTER_ACTIVE':
      switch (type?.payload) {
        case 'x001':

          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
}

const rootReducer = ({
  session, app, chats, user,
}, action) => {
  // handleActions(action)
  return ({
    session: sessionReduce(session, action),
    chats: chatReducer(chats, action),
    user: userReducer(user, action),
    app: appReducer(app, action),
  });
}

export const initialState = {
  chats: {
    session: [],
    active: [],
    chat: [],
  },
  user: {
    logged: ivs,
    role: null,
    data: user,
  },
  app: {
    loader: false,
    logo: require('@/assets/icons/logo.svg'),
    activeTab: 'x001'
  },
};

export default rootReducer;

