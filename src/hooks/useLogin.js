import createPersistedState from 'use-persisted-state';
import { APP } from '@/constants/storage'
import { encryptMessage, ab2str, decryptMessage } from '@/utils'

// export const useIv = createPersistedState(APP.iv, null)
// export const useKey = createPersistedState(APP.aeskey, null)

export default () => {
    const useLogin = createPersistedState(APP.login)
    const [login, setLogin] = useLogin()
    // const [_Iv, setIv] = useIv()
    // const [__key, setkey] = useKey()



    async function setToken(token) {
        try {
            // let enc = new TextEncoder();
            // let e = enc.encode(token);
            // console.log(e)
            sessionStorage.setItem(APP.login, JSON.stringify(token))
            // const key = await crypto.subtle.generateKey({
            //     name: "AES-CBC",
            //     length: 256
            // }, true, ['encrypt', 'decrypt']);

            // window.crypto.subtle.exportKey("raw", key)
            //     .then(e => {
            //         const d = ab2str(e)
            //         setkey(d)
            //     })
            //     .catch(e => console.log(e))

            // const { result, ivStr, iv } = await encryptMessage(key, token)
            // const crp = ab2str(result)
            // setLogin(crp)
            // setIv(ivStr)
            // console.log(iv, 'v')
        } catch (error) {
            console.log(error, 'error')
        }

    }




    return [login, setToken]
}