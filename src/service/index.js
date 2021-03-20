import axios from 'axios';

const REACT_APP_ENV = 'stage';
export const api = axios.create({
  baseURL:
    REACT_APP_ENV === 'prod'
      ? 'https://backend.afya.chat'
      : REACT_APP_ENV === 'stage'
        ? 'https://staging.afya.chat'
        : REACT_APP_ENV === 'uat'
          ? 'https://uat.afya.chat'
          : 'https://staging.afya.chat',
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => ({
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  }),
  (error) => {
    console.log(error, 'error');
  },
);

export default (endpoint, { method, data }) => {
  switch (method) {
    case 'POST':
      return new Promise((resolve, reject) => api.post(endpoint, data).then((d) => resolve(d)).catch((e) => reject(e)));
      break;

    default:
      break;
  }
};
