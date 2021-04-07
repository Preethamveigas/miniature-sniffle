export default ({ item, key }) => (
  <tr key={key}>
    <td className="px-0 py-4 whitespace-nowrap">{item.message}</td>
  </tr>
);
