import request from '@/utils/request'

// 查询仓库罐组详细信息列表
export function listpotlist(query) {
    return request({
        url: '/stock/tank/list',
        method: 'get',
        params: query
    })
}

// 查询仓库罐组详细信息详细
export function getpotlist(potlistId) {
    return request({
        url: '/product/potlist/' + potlistId,
        method: 'get'
    })
}

// 新增仓库罐组详细信息
export function addpotlist(data) {
    return request({
        url: '/stock/tank',
        method: 'post',
        data: data
    })
}

// 修改仓库罐组详细信息
export function updatepotlist(data) {
    return request({
        url: '/stock/tank',
        method: 'put',
        data: data
    })
}

// 删除仓库罐组详细信息
export function delpotlist(potlistId) {
    return request({
        url: '/stock/tank' + potlistId,
        method: 'delete'
    })
}

// 导出仓库罐组详细信息
export function exportpotlist(query) {
    return request({
        url: '/stock/tank/export',
        method: 'get',
        params: query
    })
}

// 获取仓库罐组详细信息
export function getquery() {
    return request({
        url: '/stock/tank/query',
        method: 'get',
    })
}