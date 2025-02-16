import request from '~/api/request'

// 查询组织架构树
export function getOrgTree(param: any) {
  return request({
    url: 'oa/org/tree',
    method: 'get',
    params: param,
  })
}

// 查询系统角色
export function getRole() {
  return request({
    url: 'oa/org/role',
    method: 'get',
  })
}

// 搜索人员
export function getUserByName(param: any) {
  return request({
    url: 'oa/org/tree/user/search',
    method: 'get',
    params: param,
  })
}

export default {
  getOrgTree,
  getUserByName,
  getRole,
}
