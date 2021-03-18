import request from '@/utils/request'

// 查询机构 
export function listArea(query) {
    return request({
        url: '/stock/area/list',
        method: 'get',
        params: query
    })
}

// 新增分类
export function saveArea(data) {
    var url = '/stock/area/cleanAndSave?DeptId=' + data.DeptId + '&limitType=' + data.limitType
    if (data.categoryId) {
        url = '/stock/area/cleanAndSave?DeptId=' + data.DeptId + '&limitType=' + data.limitType + '&categoryId=' + data.categoryId
    } else if (data.productId) {
        url = '/stock/area/cleanAndSave?DeptId=' + data.DeptId + '&limitType=' + data.limitType + '&productId=' + data.productId
    }
    return request({
        url: url,
        method: 'post',
        data: data.List
    })
}

// 查询分类 
export function queryCategory(query) {
    return request({
        url: '/stock/area/queryCategory',
        method: 'get',
        params: query
    })
}

// 查询商品 
export function queryProduct(query) {
    return request({
        url: '/stock/area/queryProduct',
        method: 'get',
        params: query
    })
}