(self.webpackChunkafya = self.webpackChunkafya || []).push([[55], {
  1055: (e, t, r) => {
    r.r(t), r.d(t, { default: () => a }); const n = r(5680); const s = r(5893); const a = function () { return (0, s.jsxs)('div', { className: 'hidden md:flex items-center justify-end md:flex-1 lg:w-0', children: [(0, s.jsx)('a', { href: '#', className: 'whitespace-nowrap text-base font-medium text-gray-900 hover:text-gray-900', children: 'Profile' }), (0, s.jsx)(n.Z, {})] }); };
  },
  5680: (e, t, r) => {
    r.d(t, { Z: () => d }); const n = r(5504); const s = r(9884); const a = r(4010); const l = r(5893); const d = function () {
      const e = (0, n.I0)(); const t = (0, n.K1)().user; return console.log(t), (0, l.jsx)('a', {
        href: '#', className: 'md:mt-0 ml-8 flex whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700', onClick() { let r; s.Z.Logoutuser({ id: t == null || (r = t.data) === null || void 0 === r ? void 0 : r.user_id }), a.h.interceptors.request.use(((e) => { let t; let r; return e != null && (t = e.headers) !== null && void 0 !== t && t.auth && (e == null || ((r = e.headers) === null || void 0 === r || delete r.auth)), e; })), e({ type: 'LOGIN', logged: null, data: null }); }, children: 'Logout',
      });
    };
  },
}]);
