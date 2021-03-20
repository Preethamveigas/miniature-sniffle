import ListItem from '@/components/Tabel/Tr';

export default ({ item, key }) => (
  <ListItem
    id={item.id}
    img={item['owner1.image_url']}
    title={item?.member_details
      .map((user) => `${`${user.first_name} ${user.last_name}`},`)
      .join('')}
    subInfo={item.last_sent_message}
    Re={
        item['patient.first_name']
          ? `${item['patient.first_name']
          } ${
            item['patient.last_name']}`
          : null
      }
  >
    <span key={item.id}>{item.id}</span>
  </ListItem>
);
