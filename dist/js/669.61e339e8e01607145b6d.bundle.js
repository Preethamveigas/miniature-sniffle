(self.webpackChunkafya = self.webpackChunkafya || []).push([[669], {
  9669: (e, t, r) => { e.exports = r(1609); },
  5448: (e, t, r) => {
    const n = r(4867); const o = r(6026); const s = r(4372); const i = r(5327); const a = r(4097); const u = r(4109); const c = r(7985); const f = r(5061); e.exports = function (e) {
      return new Promise(((t, r) => {
        let p = e.data; const d = e.headers; n.isFormData(p) && delete d['Content-Type']; let l = new XMLHttpRequest(); if (e.auth) { const h = e.auth.username || ''; const m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''; d.Authorization = `Basic ${btoa(`${h}:${m}`)}`; } const y = a(e.baseURL, e.url); if (l.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function () {
          if (l && l.readyState === 4 && (l.status !== 0 || l.responseURL && l.responseURL.indexOf('file:') === 0)) {
            const n = 'getAllResponseHeaders' in l ? u(l.getAllResponseHeaders()) : null; const s = {
              data: e.responseType && e.responseType !== 'text' ? l.response : l.responseText, status: l.status, statusText: l.statusText, headers: n, config: e, request: l,
            }; o(t, r, s), l = null;
          }
        }, l.onabort = function () { l && (r(f('Request aborted', e, 'ECONNABORTED', l)), l = null); }, l.onerror = function () { r(f('Network Error', e, null, l)), l = null; }, l.ontimeout = function () { let t = `timeout of ${e.timeout}ms exceeded`; e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(f(t, e, 'ECONNABORTED', l)), l = null; }, n.isStandardBrowserEnv()) { const g = (e.withCredentials || c(y)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0; g && (d[e.xsrfHeaderName] = g); } if ('setRequestHeader' in l && n.forEach(d, ((e, t) => { void 0 === p && t.toLowerCase() === 'content-type' ? delete d[t] : l.setRequestHeader(t, e); })), n.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), e.responseType) try { l.responseType = e.responseType; } catch (t) { if (e.responseType !== 'json') throw t; } typeof e.onDownloadProgress === 'function' && l.addEventListener('progress', e.onDownloadProgress), typeof e.onUploadProgress === 'function' && l.upload && l.upload.addEventListener('progress', e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(((e) => { l && (l.abort(), r(e), l = null); })), p || (p = null), l.send(p);
      }));
    };
  },
  1609: (e, t, r) => {
    const n = r(4867); const o = r(1849); const s = r(321); const i = r(7185); function a(e) { const t = new s(e); const r = o(s.prototype.request, t); return n.extend(r, s.prototype, t), n.extend(r, t), r; } const u = a(r(5655)); u.Axios = s, u.create = function (e) { return a(i(u.defaults, e)); }, u.Cancel = r(5263), u.CancelToken = r(4972), u.isCancel = r(6502), u.all = function (e) { return Promise.all(e); }, u.spread = r(8713), u.isAxiosError = r(6268), e.exports = u, e.exports.default = u;
  },
  5263: (e) => {
    function t(e) { this.message = e; }t.prototype.toString = function () { return `Cancel${this.message ? `: ${this.message}` : ''}`; }, t.prototype.__CANCEL__ = !0, e.exports = t;
  },
  4972: (e, t, r) => {
    const n = r(5263); function o(e) { if (typeof e !== 'function') throw new TypeError('executor must be a function.'); let t; this.promise = new Promise(((e) => { t = e; })); const r = this; e(((e) => { r.reason || (r.reason = new n(e), t(r.reason)); })); }o.prototype.throwIfRequested = function () { if (this.reason) throw this.reason; }, o.source = function () { let e; return { token: new o(((t) => { e = t; })), cancel: e }; }, e.exports = o;
  },
  6502: (e) => {
    e.exports = function (e) { return !(!e || !e.__CANCEL__); };
  },
  321: (e, t, r) => {
    const n = r(4867); const o = r(5327); const s = r(782); const i = r(3572); const a = r(7185); function u(e) { this.defaults = e, this.interceptors = { request: new s(), response: new s() }; }u.prototype.request = function (e) { typeof e === 'string' ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = 'get'; const t = [i, void 0]; let r = Promise.resolve(e); for (this.interceptors.request.forEach(((e) => { t.unshift(e.fulfilled, e.rejected); })), this.interceptors.response.forEach(((e) => { t.push(e.fulfilled, e.rejected); })); t.length;)r = r.then(t.shift(), t.shift()); return r; }, u.prototype.getUri = function (e) { return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, ''); }, n.forEach(['delete', 'get', 'head', 'options'], ((e) => { u.prototype[e] = function (t, r) { return this.request(a(r || {}, { method: e, url: t, data: (r || {}).data })); }; })), n.forEach(['post', 'put', 'patch'], ((e) => { u.prototype[e] = function (t, r, n) { return this.request(a(n || {}, { method: e, url: t, data: r })); }; })), e.exports = u;
  },
  782: (e, t, r) => {
    const n = r(4867); function o() { this.handlers = []; }o.prototype.use = function (e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1; }, o.prototype.eject = function (e) { this.handlers[e] && (this.handlers[e] = null); }, o.prototype.forEach = function (e) { n.forEach(this.handlers, ((t) => { t !== null && e(t); })); }, e.exports = o;
  },
  4097: (e, t, r) => {
    const n = r(1793); const o = r(7303); e.exports = function (e, t) { return e && !n(t) ? o(e, t) : t; };
  },
  5061: (e, t, r) => {
    const n = r(481); e.exports = function (e, t, r, o, s) { const i = new Error(e); return n(i, t, r, o, s); };
  },
  3572: (e, t, r) => {
    const n = r(4867); const o = r(8527); const s = r(6502); const i = r(5655); function a(e) { e.cancelToken && e.cancelToken.throwIfRequested(); }e.exports = function (e) { return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], ((t) => { delete e.headers[t]; })), (e.adapter || i.adapter)(e).then(((t) => (a(e), t.data = o(t.data, t.headers, e.transformResponse), t)), ((t) => (s(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)))); };
  },
  481: (e) => {
    e.exports = function (e, t, r, n, o) {
      return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
        return {
          message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code,
        };
      }, e;
    };
  },
  7185: (e, t, r) => {
    const n = r(4867); e.exports = function (e, t) { t = t || {}; const r = {}; const o = ['url', 'method', 'data']; const s = ['headers', 'auth', 'proxy', 'params']; const i = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding']; const a = ['validateStatus']; function u(e, t) { return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t; } function c(o) { n.isUndefined(t[o]) ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o])) : r[o] = u(e[o], t[o]); }n.forEach(o, ((e) => { n.isUndefined(t[e]) || (r[e] = u(void 0, t[e])); })), n.forEach(s, c), n.forEach(i, ((o) => { n.isUndefined(t[o]) ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o])) : r[o] = u(void 0, t[o]); })), n.forEach(a, ((n) => { n in t ? r[n] = u(e[n], t[n]) : n in e && (r[n] = u(void 0, e[n])); })); const f = o.concat(s).concat(i).concat(a); const p = Object.keys(e).concat(Object.keys(t)).filter(((e) => f.indexOf(e) === -1)); return n.forEach(p, c), r; };
  },
  6026: (e, t, r) => {
    const n = r(5061); e.exports = function (e, t, r) { const o = r.config.validateStatus; r.status && o && !o(r.status) ? t(n(`Request failed with status code ${r.status}`, r.config, null, r.request, r)) : e(r); };
  },
  8527: (e, t, r) => {
    const n = r(4867); e.exports = function (e, t, r) { return n.forEach(r, ((r) => { e = r(e, t); })), e; };
  },
  5655: (e, t, r) => {
    const n = r(4867); const o = r(6016); const s = { 'Content-Type': 'application/x-www-form-urlencoded' }; function i(e, t) { !n.isUndefined(e) && n.isUndefined(e['Content-Type']) && (e['Content-Type'] = t); } let a; const u = {
      adapter: ((typeof XMLHttpRequest !== 'undefined' || typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') && (a = r(5448)), a), transformRequest: [function (e, t) { return o(t, 'Accept'), o(t, 'Content-Type'), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (i(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString()) : n.isObject(e) ? (i(t, 'application/json;charset=utf-8'), JSON.stringify(e)) : e; }], transformResponse: [function (e) { if (typeof e === 'string') try { e = JSON.parse(e); } catch (e) {} return e; }], timeout: 0, xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN', maxContentLength: -1, maxBodyLength: -1, validateStatus(e) { return e >= 200 && e < 300; },
    }; u.headers = { common: { Accept: 'application/json, text/plain, */*' } }, n.forEach(['delete', 'get', 'head'], ((e) => { u.headers[e] = {}; })), n.forEach(['post', 'put', 'patch'], ((e) => { u.headers[e] = n.merge(s); })), e.exports = u;
  },
  1849: (e) => {
    e.exports = function (e, t) { return function () { for (var r = new Array(arguments.length), n = 0; n < r.length; n++)r[n] = arguments[n]; return e.apply(t, r); }; };
  },
  5327: (e, t, r) => {
    const n = r(4867); function o(e) {
      return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
    }e.exports = function (e, t, r) { if (!t) return e; let s; if (r)s = r(t); else if (n.isURLSearchParams(t))s = t.toString(); else { const i = []; n.forEach(t, ((e, t) => { e != null && (n.isArray(e) ? t += '[]' : e = [e], n.forEach(e, ((e) => { n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), i.push(`${o(t)}=${o(e)}`); }))); })), s = i.join('&'); } if (s) { const a = e.indexOf('#'); a !== -1 && (e = e.slice(0, a)), e += (e.indexOf('?') === -1 ? '?' : '&') + s; } return e; };
  },
  7303: (e) => {
    e.exports = function (e, t) { return t ? `${e.replace(/\/+$/, '')}/${t.replace(/^\/+/, '')}` : e; };
  },
  4372: (e, t, r) => {
    const n = r(4867); e.exports = n.isStandardBrowserEnv() ? { write(e, t, r, o, s, i) { const a = []; a.push(`${e}=${encodeURIComponent(t)}`), n.isNumber(r) && a.push(`expires=${new Date(r).toGMTString()}`), n.isString(o) && a.push(`path=${o}`), n.isString(s) && a.push(`domain=${s}`), !0 === i && a.push('secure'), document.cookie = a.join('; '); }, read(e) { const t = document.cookie.match(new RegExp(`(^|;\\s*)(${e})=([^;]*)`)); return t ? decodeURIComponent(t[3]) : null; }, remove(e) { this.write(e, '', Date.now() - 864e5); } } : { write() {}, read() { return null; }, remove() {} };
  },
  1793: (e) => {
    e.exports = function (e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e); };
  },
  6268: (e) => {
    e.exports = function (e) { return typeof e === 'object' && !0 === e.isAxiosError; };
  },
  7985: (e, t, r) => {
    const n = r(4867); e.exports = n.isStandardBrowserEnv() ? (function () {
      let e; const t = /(msie|trident)/i.test(navigator.userAgent); const r = document.createElement('a'); function o(e) {
        let n = e; return t && (r.setAttribute('href', n), n = r.href), r.setAttribute('href', n), {
          href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, '') : '', host: r.host, search: r.search ? r.search.replace(/^\?/, '') : '', hash: r.hash ? r.hash.replace(/^#/, '') : '', hostname: r.hostname, port: r.port, pathname: r.pathname.charAt(0) === '/' ? r.pathname : `/${r.pathname}`,
        };
      } return e = o(window.location.href), function (t) { const r = n.isString(t) ? o(t) : t; return r.protocol === e.protocol && r.host === e.host; };
    }()) : function () { return !0; };
  },
  6016: (e, t, r) => {
    const n = r(4867); e.exports = function (e, t) { n.forEach(e, ((r, n) => { n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]); })); };
  },
  4109: (e, t, r) => {
    const n = r(4867); const o = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']; e.exports = function (e) { let t; let r; let s; const i = {}; return e ? (n.forEach(e.split('\n'), ((e) => { if (s = e.indexOf(':'), t = n.trim(e.substr(0, s)).toLowerCase(), r = n.trim(e.substr(s + 1)), t) { if (i[t] && o.indexOf(t) >= 0) return; i[t] = t === 'set-cookie' ? (i[t] ? i[t] : []).concat([r]) : i[t] ? `${i[t]}, ${r}` : r; } })), i) : i; };
  },
  8713: (e) => {
    e.exports = function (e) { return function (t) { return e.apply(null, t); }; };
  },
  4867: (e, t, r) => {
    const n = r(1849); const o = Object.prototype.toString; function s(e) { return o.call(e) === '[object Array]'; } function i(e) { return void 0 === e; } function a(e) { return e !== null && typeof e === 'object'; } function u(e) { if (o.call(e) !== '[object Object]') return !1; const t = Object.getPrototypeOf(e); return t === null || t === Object.prototype; } function c(e) { return o.call(e) === '[object Function]'; } function f(e, t) { if (e != null) if (typeof e !== 'object' && (e = [e]), s(e)) for (let r = 0, n = e.length; r < n; r++)t.call(null, e[r], r, e); else for (const o in e)Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e); }e.exports = {
      isArray: s, isArrayBuffer(e) { return o.call(e) === '[object ArrayBuffer]'; }, isBuffer(e) { return e !== null && !i(e) && e.constructor !== null && !i(e.constructor) && typeof e.constructor.isBuffer === 'function' && e.constructor.isBuffer(e); }, isFormData(e) { return typeof FormData !== 'undefined' && e instanceof FormData; }, isArrayBufferView(e) { return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer; }, isString(e) { return typeof e === 'string'; }, isNumber(e) { return typeof e === 'number'; }, isObject: a, isPlainObject: u, isUndefined: i, isDate(e) { return o.call(e) === '[object Date]'; }, isFile(e) { return o.call(e) === '[object File]'; }, isBlob(e) { return o.call(e) === '[object Blob]'; }, isFunction: c, isStream(e) { return a(e) && c(e.pipe); }, isURLSearchParams(e) { return typeof URLSearchParams !== 'undefined' && e instanceof URLSearchParams; }, isStandardBrowserEnv() { return (typeof navigator === 'undefined' || navigator.product !== 'ReactNative' && navigator.product !== 'NativeScript' && navigator.product !== 'NS') && (typeof window !== 'undefined' && typeof document !== 'undefined'); }, forEach: f, merge: function e() { const t = {}; function r(r, n) { u(t[n]) && u(r) ? t[n] = e(t[n], r) : u(r) ? t[n] = e({}, r) : s(r) ? t[n] = r.slice() : t[n] = r; } for (let n = 0, o = arguments.length; n < o; n++)f(arguments[n], r); return t; }, extend(e, t, r) { return f(t, ((t, o) => { e[o] = r && typeof t === 'function' ? n(t, r) : t; })), e; }, trim(e) { return e.replace(/^\s*/, '').replace(/\s*$/, ''); }, stripBOM(e) { return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e; },
    };
  },
}]);
