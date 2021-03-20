import { api as request } from '@/service/index';

import { VIEW_ORG } from '@/constants/services';

export async function RequestOrganizationDetail(params) {
  return request(VIEW_ORG, {
    method: 'POST',
    data: params,
  });
}
