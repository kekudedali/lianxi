import request from '@/utils/request'

// 查询发运物流单列表
export function listLogistics(query) {
  return request({
    url: '/system/logistics/list',
    method: 'get',
    params: query
  })
}

// 查询发运物流单详细
export function getLogistics(logisticsNo) {
  return request({
    url: '/system/logistics/' + logisticsNo,
    method: 'get'
  })
}

// 新增发运物流单
export function addLogistics(data) {
  return request({
    url: '/system/logistics',
    method: 'post',
    data: data
  })
}

// 修改发运物流单
export function updateLogistics(data) {
  return request({
    url: '/system/logistics',
    method: 'put',
    data: data
  })
}

// 删除发运物流单
export function delLogistics(logisticsNo) {
  return request({
    url: '/system/logistics/' + logisticsNo,
    method: 'delete'
  })
}

// 导出发运物流单
export function exportLogistics(query) {
  return request({
    url: '/system/logistics/export',
    method: 'get',
    params: query
  })
}