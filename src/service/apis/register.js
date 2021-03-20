import { api as request } from '@/service/index';

import { REGISTER_ENDPOINT } from '@/constants/services';
import { getToken } from '@/utils/autoLogin';

const token = getToken() || '';
request.extendOptions({
  headers: { auth: token },
});
export async function AccountRegister(params) {
  return request(REGISTER_ENDPOINT, {
    method: 'POST',
    data: params,
  });
}
