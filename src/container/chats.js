import { useState, useEffect } from 'react'
import apiservice from '@/service/apis';
import Chats from '@/components/Chats';
import List from '@/components/Tabel';
 import Spin from '@/components/Spin';

const requestChats = (session_id) => apiservice.getChats({ session_id })



const useChatdata = (session_id) => {
  const [state, set] = useState({ error: false, data: null, status: false, isFetching: false })
  const callApi = () => {
    set({ ...state, isFetching: true })
    requestChats(session_id).then(res => {
       set({ ...state, isFetching: false, data: res.data })

    }).catch(error => set({ ...state, isFetching: false, data: null, error: true }))
  }
  useEffect(() => {
    callApi()
  }, [])
 
  return state
}

export default ({ session_id }) => {


  if (!session_id) return ''
  const { error, data, isFetching } = useChatdata(session_id);
  if (isFetching) {
    return <Spin />;
  }
  if (error) {
    return 'Facing technical issue please try later.'
  }
  const getView = () => {
    if (data) {
      const list = data.length > 200
        ? data.slice(0, data.length / 2 + 1)
        : data;
      return (
        <List>
          {list.map((item) => (
            <Chats key={item.id} item={item} />
          ))}
        </List>
      );
    }
    return <div className="relative flex items-center justify-center h-16">No data</div>
  };
  return getView();
};
