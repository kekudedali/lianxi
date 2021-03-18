import request from '@/utils/request'

// 查询商品小类列表
export function listSubcategory(query) {
  return request({
    url: '/product/subcategory/list',
    method: 'get',
    params: query
  })
}

// 查询商品小类详细
export function getSubcategory(subId) {
  return request({
    url: '/product/subcategory/' + subId,
    method: 'get'
  })
}

// 新增商品小类
export function addSubcategory(data) {
  return request({
    url: '/product/subcategory',
    method: 'post',
    data: data
  })
}

// 修改商品小类
export function updateSubcategory(data) {
  return request({
    url: '/product/subcategory',
    method: 'put',
    data: data
  })
}

// 删除商品小类
export function delSubcategory(subId) {
  return request({
    url: '/product/subcategory/' + subId,
    method: 'delete'
  })
}

// 导出商品小类
export function exportSubcategory(query) {
  return request({
    url: '/product/subcategory/export',
    method: 'get',
    params: query
  })
}