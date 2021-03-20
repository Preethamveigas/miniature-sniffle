import request from '@/service';

import {
  CREATE_CALL_LIST,
  CLOSE_CODES,
  GET_ALL_SESSION,
  GET_CHATS_ENDPOINT,
  CHAT_DATA_ENDPOINT,
  SPECIALITY_MASTER_ENDPOINT,
  AUTO_ASSIGN_ENDPOINT,
  CREATE_SESSION,
  FILTER_SESSION,
  CURRENT_USER_ENDPOINT,
  INSURENCE,
  ADDPATIENT,
  PROVIDERORGLIST,
  EARNINGS,
  ADDSTAFF_TO_SESSION,
  SESSION_DETAILS,
  SEND_NOTIFICATION,
  IOS_VOIP,
  GET_SESSION_MEDIA,
  READ_BY,
  STAFF_TO_PROVIDER,
  UPDATE_LIVE_STATUS,
  GENERATE_PDF,
  ORG_CLOSE_CODE,
  ORG_PERMISSION,
  ORG_SPEC,
  GENEREATE_ORG_EMAIL,
  UPDATE_FIRE_TOKEN,
  SESSION_TIMEOUT,
  MISSED_CALLS,
  DISSMISS_MISSED_CALLS,
  CALL_RECORD,
  ARCHIVE_CHAT,
} from '@/service/api_path';

export function getOrgEmail(params) {
  return request(GENEREATE_ORG_EMAIL, {
    method: 'POST',
    data: params,
  });
}

export function getOrgClosecode(params) {
  return request(ORG_CLOSE_CODE, {
    method: 'POST',
    data: params,
  });
}
export function getOrgPermission(params) {
  return request(ORG_PERMISSION, {
    method: 'POST',
    data: params,
  });
}

export function generatePdf(params) {
  return request(GENERATE_PDF, {
    method: 'POST',
    timeout: 10000,
    data: params,
  });
}

export function updateLiveStatus(params) {
  return request(UPDATE_LIVE_STATUS, {
    method: 'POST',
    data: params,
  });
}

export function staffToProvider(params) {
  return request(STAFF_TO_PROVIDER, {
    method: 'POST',
    data: params,
  });
}

export function readBy(params) {
  return request(READ_BY, {
    method: 'POST',
    data: params,
  });
}

export function createCalllist(params) {
  return request(CREATE_CALL_LIST, {
    method: 'POST',
    data: params,
  });
}

export function getSessionMedia(params) {
  return request(GET_SESSION_MEDIA, {
    method: 'POST',
    data: params,
  });
}

const errorHandler = ({ ...props }) => new Promise((res, rej) => {
  const { tag, error, ...rest } = props;
  const store = getDvaApp()._store;
  const { dispatch } = store;
  const { response } = error;

  if (response && response.status) {
    if (tag === 'Voip') {
      if (response.status === 701) {
        rej(701);
        // return notification.error({
        //     description: 'User is not reachable.',
        //     message: 'User is not reachable.',
        // });
      }
    }
    const { status } = response;
    if (!status) {
      rej(response);
    }
    if (response.status === 702) {
      return rej(response.status);
    }

    if (response.status === 401) {
      sessionStorage.clear();
      logoutHandler();
      dispatch({
        type: 'global/changeDialog',
        payload: {
          node: React.createElement(Loggedout, {}),
          open: true,
          header: <> </>,
        },
      });
    }
  } else if (!response) {
  }
  rej(response.status);
  // throw new Error(response.status);
});

export function sendIosVoip(params) {
  return request(IOS_VOIP, {
    method: 'POST',
    data: params,
    errorHandler: (error) => errorHandler({ error, tag: 'Voip' }),
  });
}
export function sendChatNotification(params) {
  return request(SEND_NOTIFICATION, {
    method: 'POST',
    data: params,
  });
}

export async function autoAssign(params) {
  return request(AUTO_ASSIGN_ENDPOINT, {
    method: 'POST',
    data: params,
    timeout: 4000,
  });
}

export async function queryCurrent(params) {
  return request(CURRENT_USER_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}
export async function createSession(params) {
  return request(CREATE_SESSION, {
    method: 'POST',
    data: params,
  });
}

export async function fetchSpecilaity() {
  return request(SPECIALITY_MASTER_ENDPOINT);
}

export async function queryList(params) {
  return request(GET_ALL_SESSION, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function postChat(params) {
  return request(CHAT_DATA_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}

export async function getChats(params) {
  return request(GET_CHATS_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}

export async function Insurence(params) {
  return request(INSURENCE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function addPatient(params) {
  return request(ADDPATIENT, {
    method: 'POST',
    data: params,
  });
}

export async function filterSession(params) {
  return request(FILTER_SESSION, {
    method: 'POST',
    data: params,
  });
}

export function getCloseCode() {
  return request(CLOSE_CODES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export function getProviderOrgList(params) {
  return request(PROVIDERORGLIST, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function UserEarnings(params) {
  return request(EARNINGS, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function addStaff(params) {
  return request(ADDSTAFF_TO_SESSION, {
    method: 'POST',
    data: params,
  });
}

export async function getSessionDeails(params, cb) {
  const controller = new AbortController();
  const { signal } = controller;

  return request(SESSION_DETAILS, {
    method: 'POST',
    data: params,
    signal,
  });
}

export async function UpdateFireToken(params) {
  return request(UPDATE_FIRE_TOKEN, {
    method: 'POST',
    data: params,
  });
}

export async function SessionTimeout(params) {
  return request(SESSION_TIMEOUT, {
    method: 'POST',
    data: params,
  });
}

export async function MissedCalls(params) {
  return request(MISSED_CALLS, {
    method: 'POST',
    data: params,
  });
}

export async function DissmissMissedCalls(params) {
  return request(DISSMISS_MISSED_CALLS, {
    method: 'POST',
    data: params,
  });
}

export async function CallRecord(params) {
  return request(CALL_RECORD, {
    method: 'POST',
    data: params,
  });
}

export async function ArchiveChat(params) {
  return request(ARCHIVE_CHAT, {
    method: 'POST',
    data: params,
  });
}
