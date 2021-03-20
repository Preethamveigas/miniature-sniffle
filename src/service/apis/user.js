import request from '@/service';

import {
  CURRENT_USER_ENDPOINT, LOGIN_ENDPOINT, GEN_AGORA_TOKEN, FORGOT_PASSWORD, SEARCH, CREATE_PASSWORD, GET_USER_STATUS, EARNING_DASHBOARD, RATING_ALIGNMENT, LOGOUT,
} from '@/service/api_path';

export async function Login(params) {
  return request(LOGIN_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}

export async function ProviderRoleList(params) {
  return request(PROVIDER_ROLE_LIST, {
    method: 'POST',
    data: params,
  });
}

export async function GetStaffMap(params) {
  return request(PROVIDER_STAFF_MAP_VIEW, {
    method: 'POST',
    data: params,
  });
}

export async function GetGeneralist(params) {
  return request(AT_GENERALIST, {
    method: 'POST',
    data: params,
  });
}

export async function getParticipants() {
  return request(PARTICIPANTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function getUserStatus(params) {
  return request(GET_USER_STATUS, {
    method: 'POST',
    data: params,
  });
}

export async function queryCurrent(params) {
  return request(CURRENT_USER_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}

export async function forGotPassword(params) {
  return request(FORGOT_PASSWORD, {
    method: 'POST',
    data: params,
  });
}

export async function createPassword(params) {
  return request(CREATE_PASSWORD, {
    method: 'POST',
    data: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function Logoutuser(params) {
  return request(LOGOUT, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function RequestDoctordashboard(params) {
  return request(EARNING_DASHBOARD, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function RatingAlignment(params) {
  return request(RATING_ALIGNMENT, {
    method: 'POST',
    data: params,
  });
}
export function searchPatient(patams) {
  return request(SEARCH, {
    method: 'POST',
    data: patams,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export function genAgoraToken(patams) {
  return request(GEN_AGORA_TOKEN, {
    method: 'POST',
    data: patams,
  });
}
