import { defHttp } from '@/utils/http/axios';

enum Api {
  page = '/class/list',
  detail = '/class/detail',
  add = '/class/add',
  update = '/class/update',
  del = '/class/del',
}

export const page = (params?: any) => defHttp.get<any>({ url: Api.page, params });
export const detail = (id: string) => defHttp.get<any>({ url: `${Api.detail}/${id}` });
export const add = (params: any) => defHttp.post<any>({ url: Api.add, params });
export const update = (params: any) => defHttp.put<any>({ url: `${Api.update}`, params });
export const del = (id: string) => defHttp.delete<any>({ url: `${Api.del}/${id}` });
