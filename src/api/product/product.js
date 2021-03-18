import request from '@/utils/request'

// 查询商品目录维护列表
export function listProduct(query) {
  return request({
    url: '/product/product/list',
    method: 'get',
    params: query
  })
}

// 查询商品目录维护详细
export function getProduct(productId) {
  return request({
    url: '/product/product/' + productId,
    method: 'get'
  })
}

// 新增商品目录维护
export function addProduct(data) {
  return request({
    url: '/product/product',
    method: 'post',
    data: data
  })
}

// 修改商品目录维护
export function updateProduct(data) {
  return request({
    url: '/product/product',
    method: 'put',
    data: data
  })
}

// 删除商品目录维护
export function delProduct(productId) {
  return request({
    url: '/product/product/' + productId,
    method: 'delete'
  })
}

// 导出商品目录维护
export function exportProduct(query) {
  return request({
    url: '/product/product/export',
    method: 'get',
    params: query
  })
}

// 导入模板
export function importProduct() {
    return request({
        url: '/system/init/import_product/template',
        method: 'get'
    })
}
// 商品目录库存查询
export function stockList(query) {
  return request({
    url: '/product/product/list/stock',
    method: 'get',
    params: query
  })
}
//
// 图片获取
export function getPicture(query) {
  return request({
    url: '/product/product/picture/'+query,
    method: 'get',

  })
}


// 发布状态
export function publish(query) {
  return request({
    url: '/product/product/publish/'+query.productIds,
    method: 'put',

  })
}

// 未发布状态
export function unpublish(query) {
  return request({
    url: '/product/product/publish/'+query.productIds,
    method: 'put',

  })
}
