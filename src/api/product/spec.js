import request from '@/utils/request'

// 查询商品规格列表
export function listSpec(query) {
    return request({
        url: '/product/spec/list',
        method: 'get',
        params: query
    })
}

// 查询商品规格详细
export function getSpec(specId) {
    return request({
        url: '/product/spec/' + specId,
        method: 'get'
    })
}

// 新增商品规格
export function addSpec(data) {
    return request({
        url: '/product/spec',
        method: 'post',
        data: data
    })
}

// 修改商品规格
export function updateSpec(data) {
    return request({
        url: '/product/spec',
        method: 'put',
        data: data
    })
}

// 删除商品规格
export function delSpec(specId) {
    return request({
        url: '/product/spec/' + specId,
        method: 'delete'
    })
}

// 导出商品规格
export function exportSpec(query) {
    return request({
        url: '/product/spec/export',
        method: 'get',
        params: query
    })
}

export function getcategorys() {
    return request({
        url: '/product/spec/categorys',
        method: 'get',
    })
}

//商品规格信息

export function specList(query) {
  return request({
    url: '/product/spec/list',
    method: 'get',
    params: query
  })
}
