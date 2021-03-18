import request from '@/utils/request'

// 查询库存变动
export function listStockChange(query) {
  return request({
    url: '/stock/stock/change',
    method: 'get',
    params: query
  })
}

// 查询商品库存列表
export function listStock(query) {
  return request({
    url: '/stock/stock/list',
    method: 'get',
    params: query
  })
}

// 查询辖区库存列表
export function listStockRelation(query) {
  return request({
    url: '/stock/stock/list/relation',
    method: 'get',
    params: query
  })
}

// 查询商品库存详细
export function getStock(stockId) {
  return request({
    url: '/stock/stock/' + stockId,
    method: 'get'
  })
}

// 新增商品库存
export function addStock(data) {
  return request({
    url: '/stock/stock',
    method: 'post',
    data: data
  })
}

// 修改商品库存
export function updateStock(data) {
  return request({
    url: '/stock/stock',
    method: 'put',
    data: data
  })
}

// 删除商品库存
export function delStock(stockId) {
  return request({
    url: '/stock/stock/' + stockId,
    method: 'delete'
  })
}

// 导出商品库存
export function exportStock(query) {
  return request({
    url: '/stock/stock/export',
    method: 'get',
    params: query
  })
}

// 上传模板
export function exportStocktemplate(query) {
  return request({
    url: '/stock/stock/export/template',
    method: 'get',
    params: query
  })
}


// 变动查询
export function listChange(query) {
  return request({
    url: '/stock/stock/change',
    method: 'get',
    params: query
  })
}

// 查询过期库存
export function expiredList(query) {
  return request({
    url: '/stock/stock/list/expired',
    method: 'get',
    params: query
  })
}


// 检验库存质量情况
export function editQuality(query) {
  return request({
    url: '/stock/stock/'+query.stockIds+'/'+query.quality,
    method: 'put',
    params: query
  })
}

// 查询预警库存
export function advinceWarningList(query) {
  return request({
    url: '/stock/stock/list/advance/warning',
    method: 'get',
    params: query
  })
}

// 罐组号查询
export function listpageGz(query) {
  return request({
    url: '/stock/tank/list/all',
    method: 'get',
    params: query
  })
}

// 库存汇总
export function allCollect(query) {
  return request({
    url: '/stock/stock/all/collect',
    method: 'get',
    params: query
  })
}

// 库存汇总明细
export function collect(query) {
  return request({
    url: '/stock/stock/collect',
    method: 'get',
    params: query
  })
}
