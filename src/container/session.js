import React, { useEffect, createRef, useMemo, useState, memo, useCallback, useRef } from 'react';
import apiservice from '@/service/apis';
import { connect, useStateValue, useDispatch, UserSelector, sessionSelector, appSelector } from '@/store/configureStore';
import Session from '@/components/Session';
import List from '@/components/Tabel';
import Data from '@/data/filter';
import Search from '@/components/Search';
import SessionTabs from '@/components/SessionTabs';
import useLocalStorageState from 'use-local-storage-state'


const reqestSession = (filter) => {
  if (!filter || !filter.user_id) return Promise.reject()
  return apiservice.filterSession(filter)
}

const useSessions = async (filter) => {
  const [state, set] = useState({ error: false, data: null, status: false, isfetching: false })
  const callApi = () => {
    set({ ...state, isfetching: true })
    reqestSession(filter).then(res => {
      console.log(res, 'res')
    }).catch(error => console.log(error))
  }
  useEffect(() => {
    callApi()
  }, [])

  return state
}

export default connect(({ history, app, user }) => {


  const active = useCallback(() => {
    return app.activeTab
  }, [app])
  const usr = useCallback(() => {
    return user?.data
  }, [user])
  const dispatch = useDispatch()

  const [search, setSearch] = useState('');
  const searchRef = createRef()
  const [filter, set] = React.useState()

  const payload = {
    user_id: usr().user_id,
    org_id: '',
    sort_recent_opened: '',
    filter_live: '',
    filter_close: '',
    filter_unread: '',
    filter_unanswered: '',
  }

  React.useEffect(() => {
    console.log(filter, 'filterfilter')
  }, [search, filter]);





  const RequestSessionData = (key) => {
    if (key) {
      Object.keys(payload).forEach(k => k == 'user_id' || k == 'org_id' ? null : payload[k] = '')
      switch (key) {
        case 'x001':
          payload.filter_unanswered = '1'
          break;
        case 'x002':
          // n.filter_unanswered = '1'
          break
        case 'x003':
          payload.filter_close = '1'
          break
        case 'x004':
          payload.filter_unread = '1'
          break
        case 'x005':
          payload.filter_live = '1'
          break
        default:
          break;
      }
      set(payload)
      dispatch({ type: 'APP_SET_FILTER_ACTIVE', payload: key })
      // alert('asd')
    }
  }

  const handleFilter = (type) => {
    // history.push('/home')
    RequestSessionData(type)
    dispatch({ type: 'APP_SET_FILTER_ACTIVE', active: type })
  }


  return <div className="relative h-full flex flex-col">
    <SessionTabs handleFilter={handleFilter} active={active()} />
    <Search handleFilter={handleFilter} ref={searchRef} setSearch={setSearch} />
    <SessionLists dispatch={dispatch} filter={filter} search={search} />
  </div>;
}, [appSelector, UserSelector]);



const createSessionStore = (data) => {
  const [sessions, setSession] = useLocalStorageState('sessions')
  useEffect(() => { if (data) { setSession(JSON.stringify(data)) } }, [data])
  return sessions
}

const SessionLists = connect(React.memo(({ filter, dispatch, search, }) => {
  const { rest } = useSessions(filter)
   // const Data = JSON.parse(createSessionStore(data?.data) ?? 'null')
  let sessions = Data
  let error;
  if (error) {
    return 'n'
  }

 
  if (sessions && Array.isArray(sessions)) {
    // dispatch({ type: 'SESSION_LIST', payload: data?.data })
    return (
      <>
        <List>
          {sessions.map((item) => {
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
  return <div className="relative flex items-center justify-center h-full bg-gray-50">No data</div>
}), sessionSelector)