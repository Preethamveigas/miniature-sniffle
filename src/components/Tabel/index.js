export default ({ children }) => (
  <table className="divide-gray-200 table-auto w-full">
    <tbody className="bg-white divide-gray-200 overflow-y-scroll block min-h-full p-8" style={{ height: window.innerHeight - 120 }}>
      {children}
    </tbody>
  </table>
);
