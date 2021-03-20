import { useQuery } from 'react-query';
import apiservice from '@/service/apis';
import Chats from '@/components/Chats';
import List from '@/components/Tabel';
import { useEffect } from 'react';
import { useDispatch } from '@/store/configureStore';
import Spin from '@/components/Spin';

export default ({ session_id }) => {
  const {
    isLoading, isFetching, error, data, refetch,
  } = useQuery(
    `chats+${session_id}`,
    () => apiservice.getChats({ session_id }),
    {
      enabled: false,
    },
  );
  console.log(isLoading, error, isFetching);
  useEffect(() => {
    if (session_id) {
      refetch();
    }
  }, [session_id]);

  if (isFetching) {
    return <Spin />;
  }
  const getView = () => {
    if (data?.data) {
      const list = data.data.length > 200
        ? data.data.slice(0, data.data.length / 2 + 1)
        : data.data;
      return (
        <List>
          {list.map((item) => (
            <Chats key={item.id} item={item} />
          ))}
        </List>
      );
    }
    return 'No data';
  };
  return getView();
};
