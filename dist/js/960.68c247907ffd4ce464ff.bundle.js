(self.webpackChunkafya = self.webpackChunkafya || []).push([[960], {
  6725: (e, t, a) => {
    a.d(t, { Z: () => r }); const n = a(5893); const r = function (e) { const t = e.children; return (0, n.jsx)('table', { className: 'divide-gray-200 table-auto w-full', children: (0, n.jsx)('tbody', { className: 'bg-white divide-gray-200 overflow-y-scroll block min-h-full', style: { height: window.innerHeight - 120 }, children: t }) }); };
  },
  6960: (e, t, a) => {
    a.r(t), a.d(t, { default: () => u }); const n = a(8767); const r = a(9884); const s = a(5893); const i = function (e) { const t = e.item; const a = e.key; return (0, s.jsx)('tr', { children: (0, s.jsx)('td', { className: 'px-6 py-4 whitespace-nowrap', children: t.message }) }, a); }; const c = a(6725); const l = a(7294); const d = (a(5504), a(3986)); const u = function (e) { const t = e.session_id; const a = (0, n.useQuery)('chats+'.concat(t), (() => r.Z.getChats({ session_id: t })), { enabled: !1 }); const u = a.isLoading; const o = a.isFetching; const h = a.error; const f = a.data; const g = a.refetch; if (console.log(u, h, o), (0, l.useEffect)((() => { t && g(); }), [t]), o) return (0, s.jsx)(d.Z, {}); return (function () { if (f != null && f.data) { const e = f.data.length > 200 ? f.data.slice(0, f.data.length / 2 + 1) : f.data; return (0, s.jsx)(c.Z, { children: e.map(((e) => (0, s.jsx)(i, { item: e }, e.id))) }); } return 'No data'; }()); };
  },
}]);
