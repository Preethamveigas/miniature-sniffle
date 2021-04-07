import { Suspense } from 'react';

export function LazyComponents(Component) {
  return (
    <Suspense fallback="loading">
      <Component />
    </Suspense>
  );
}



export function getMessageEncoding(message) {
  let enc = new TextEncoder();
  let e = enc.encode(message);
 
  return e
}
export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

export function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
export async function encryptMessage(key, message) {
  let encoded = await getMessageEncoding(message);
  let iv = await window.crypto.getRandomValues(new Uint8Array(16));
  const ivStr = ab2str(iv)

  const result = await window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv
    },
    key,
    encoded
  );
  // let buffer = new Uint8Array(result, 0, 5);
  // console.log(`${buffer}...[${result.byteLength} bytes total]`)
  return { result, ivStr, iv }
}


export async function decryptMessage(key, iv, ciphertext) {
  let decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-CBC",
      iv
    },
    key,
    ciphertext
  );

  let dec = new TextDecoder();
  let d = dec.decode(decrypted)
  console.log(JSON.stringify(d), 'dec.decode(decrypted)')
  console.log(Object.values(d), 'dec.decode(decrypted).')
  return decrypted

}

export function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey(
    "raw",
    rawKey,
    "AES-CBC",
    true,
    ["encrypt", "decrypt"]
  );
}