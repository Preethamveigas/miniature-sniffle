(self.webpackChunkafya = self.webpackChunkafya || []).push([[706], {
  5680: (e, r, n) => {
    n.d(r, { Z: () => a }); const t = n(5504); const o = n(9884); const i = n(4010); const s = n(5893); const a = function () {
      const e = (0, t.I0)(); const r = (0, t.K1)().user; return console.log(r), (0, s.jsx)('a', {
        href: '#', className: 'md:mt-0 ml-8 flex whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700', onClick() { let n; o.Z.Logoutuser({ id: r == null || (n = r.data) === null || void 0 === n ? void 0 : n.user_id }), i.h.interceptors.request.use(((e) => { let r; let n; return e != null && (r = e.headers) !== null && void 0 !== r && r.auth && (e == null || ((n = e.headers) === null || void 0 === n || delete n.auth)), e; })), e({ type: 'LOGIN', logged: null, data: null }); }, children: 'Logout',
      });
    };
  },
  6706: (e, r, n) => {
    n.r(r), n.d(r, { default: () => p }); const t = n(7565); const o = n(5893); const i = function (e) {
      const r = e.item; const n = e.visible; return void 0 === n || n ? (0, o.jsx)('button', {
        type: 'button', className: 'text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', 'aria-expanded': 'false', children: (0, o.jsx)(t.Z, { to: '/'.concat(r.toLowerCase()), children: (0, o.jsx)('span', { className: 'font-medium', children: r }) }),
      }) : null;
    }; const s = function () { return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(i, { item: 'Chats' }), (0, o.jsx)(i, { item: 'Switch Roles' }), (0, o.jsx)(i, { item: 'Switch Organization' }), (0, o.jsx)(i, { item: 'Profile' })] }); }; const a = n(7294); const l = n(6010); const c = n(5680); const u = function (e) {
      const r = e.open; const n = e.set; return (0, o.jsx)('div', {
        className: (0, l.Z)('absolute top-0 inset-x-0 p-2 '.concat(r ? 'transition transform origin-top-right' : '', ' md:hidden')),
        children: (0, o.jsx)('div', {
          className: 'rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50',
          children: (0, o.jsxs)('div', {
            className: 'pt-5 pb-6 px-5',
            children: [(0, o.jsxs)('div', {
              className: 'flex items-center justify-between',
              children: [(0, o.jsx)('div', { children: (0, o.jsx)('img', { className: 'h-8 w-auto', src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg', alt: 'Workflow' }) }), (0, o.jsx)('div', {
                className: '-mr-2',
                children: (0, o.jsxs)('button', {
                  onClick() { return n(((e) => !e)); },
                  type: 'button',
                  className: 'bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                  children: [(0, o.jsx)('span', { className: 'sr-only', children: 'Close menu' }), (0, o.jsx)('svg', {
                    className: 'h-6 w-6',
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    'aria-hidden': 'true',
                    children: (0, o.jsx)('path', {
                      strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M6 18L18 6M6 6l12 12',
                    }),
                  })],
                }),
              })],
            }), (0, o.jsxs)('div', { className: 'mt-6', children: [(0, o.jsx)('nav', { className: 'grid gap-y-8', children: (0, o.jsx)(s, {}) }), (0, o.jsx)(c.Z, {})] })],
          }),
        }),
      });
    }; function d(e, r) { return (function (e) { if (Array.isArray(e)) return e; }(e)) || (function (e, r) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(e))) return; const n = []; let t = !0; let o = !1; let i = void 0; try { for (var s, a = e[Symbol.iterator](); !(t = (s = a.next()).done) && (n.push(s.value), !r || n.length !== r); t = !0); } catch (e) { o = !0, i = e; } finally { try { t || a.return == null || a.return(); } finally { if (o) throw i; } } return n; }(e, r)) || (function (e, r) { if (!e) return; if (typeof e === 'string') return f(e, r); let n = Object.prototype.toString.call(e).slice(8, -1); n === 'Object' && e.constructor && (n = e.constructor.name); if (n === 'Map' || n === 'Set') return Array.from(e); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, r); }(e, r)) || (function () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function f(e, r) { (r == null || r > e.length) && (r = e.length); for (var n = 0, t = new Array(r); n < r; n++)t[n] = e[n]; return t; } const h = function () {
      const e = d(a.useState(null), 2); const r = e[0]; const n = e[1]; return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)('div', {
          className: '-mr-2 -my-2 md:hidden',
          children: (0, o.jsxs)('button', {
            type: 'button',
            className: 'bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
            'aria-expanded': 'false',
            onClick() { n(((e) => !e)); },
            children: [(0, o.jsx)('span', { className: 'sr-only', children: 'Open menu' }), (0, o.jsx)('svg', {
              className: 'h-6 w-6',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              stroke: 'currentColor',
              'aria-hidden': 'true',
              children: (0, o.jsx)('path', {
                strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M4 6h16M4 12h16M4 18h16',
              }),
            })],
          }),
        }), r ? (0, o.jsx)(u, { open: r, set: n }) : null],
      });
    }; const m = n(767); const g = n(7409); const p = function () { return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('div', { className: 'flex justify-start lg:w-0 lg:flex-1', children: (0, o.jsxs)(g.rU, { to: '/home', children: [(0, o.jsx)('span', { className: 'sr-only', children: 'Afya' }), (0, o.jsx)('span', { className: 'h-8 w-8 sm:h-10', children: (0, o.jsx)(m.Z, {}) })] }) }), (0, o.jsx)(h, {}), (0, o.jsx)('nav', { className: 'hidden md:flex space-x-10', children: (0, o.jsx)(s, {}) })] }); };
  },
  7565: (e, r, n) => {
    n.d(r, { Z: () => d }); const t = n(7409); const o = n(7294); const i = function () { const e = document.location.pathname.split('/')[1] || 'home'; return (0, o.useMemo)((() => e), [e]); }; const s = n(5893); function a(e, r) { const n = Object.keys(e); if (Object.getOwnPropertySymbols) { let t = Object.getOwnPropertySymbols(e); r && (t = t.filter(((r) => Object.getOwnPropertyDescriptor(e, r).enumerable))), n.push.apply(n, t); } return n; } function l(e) { for (let r = 1; r < arguments.length; r++) { var n = arguments[r] != null ? arguments[r] : {}; r % 2 ? a(Object(n), !0).forEach(((r) => { c(e, r, n[r]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); })); } return e; } function c(e, r, n) {
      return r in e ? Object.defineProperty(e, r, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : e[r] = n, e;
    } function u(e, r) { if (e == null) return {}; let n; let t; const o = (function (e, r) { if (e == null) return {}; let n; let t; const o = {}; const i = Object.keys(e); for (t = 0; t < i.length; t++)n = i[t], r.indexOf(n) >= 0 || (o[n] = e[n]); return o; }(e, r)); if (Object.getOwnPropertySymbols) { const i = Object.getOwnPropertySymbols(e); for (t = 0; t < i.length; t++)n = i[t], r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]); } return o; } const d = function (e) { const r = e.children; const n = e.to; const o = (e.from, u(e, ['children', 'to', 'from'])); const a = i(); const c = ['/resetpassword', '/login'].includes(n) ? n : '/'.concat(a + n); return console.log(a + n, c, 'pathname'), (0, s.jsx)(t.rU, l(l({ to: c }, o), {}, { children: r })); };
  },
  6010: (e, r, n) => {
    function t(e) { let r; let n; let o = ''; if (typeof e === 'string' || typeof e === 'number')o += e; else if (typeof e === 'object') if (Array.isArray(e)) for (r = 0; r < e.length; r++)e[r] && (n = t(e[r])) && (o && (o += ' '), o += n); else for (r in e)e[r] && (o && (o += ' '), o += r); return o; } function o() { for (var e, r, n = 0, o = ''; n < arguments.length;)(e = arguments[n++]) && (r = t(e)) && (o && (o += ' '), o += r); return o; }n.d(r, { Z: () => o });
  },
}]);
