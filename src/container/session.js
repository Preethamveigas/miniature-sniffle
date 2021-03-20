import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import apiservice from '@/service/apis';
import { useStateValue } from '@/store/configureStore';
import Session from '@/components/Session';
import List from '@/components/Tabel';
import Data from '@/data/filter';
import Search from '@/components/Search';

export default () => {
  const { user } = useStateValue();
  const [search, setSearch] = useState('');
  // 513e7490-a237-11ea-9acb-f9131e46c3ed
  const filter = React.useRef({
    // user_id: user.data.user_id,
    org_id: '',
    sort_recent_opened: '',
    filter_live: '',
    filter_close: '',
    filter_unread: '',
    filter_unanswered: '',
  });
  // const { isLoading, error, data, refetch } = useQuery(
  //   'sessions',
  //   () => apiservice.filterSession(filter.current)
  // )
  const data = {};
  data.data = Data;

  React.useEffect(() => {
    // console.log(search, 'search?.current')
  }, [search]);
  const getView = () => {
    if (data?.data) {
      return (
        <>
          <Search setSearch={setSearch} />
          <List>
            {data.data.map((item) => {
              if (search) {
                if (
                  item.last_sent_message
                    .toLowerCase()
                    .includes(search)
                  || item.last_sender_name
                    .toLowerCase()
                    .includes(search)
                  || item['owner1.first_name']
                    .toLowerCase()
                    .includes(search)
                  || item['owner1.last_name']
                    .toLowerCase()
                    .includes(search)
                  || item['owner2.first_name']
                    .toLowerCase()
                    .includes(search)
                  || item['owner2.last_name']
                    .toLowerCase()
                    .includes(search)
                ) {
                  return <Session key={item.id} item={item} />;
                }
              } else {
                return <Session key={item.id} item={item} />;
              }
            })}
          </List>
        </>
      );
    }
    return 'No data';
  };
  return getView();
};
