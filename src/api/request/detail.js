import request from '@/utils/request'

// 查询请领单明细列表
export function listDetail(query) {
    return request({
        url: '/request/detail/list',
        method: 'get',
        params: query
    })
}

// 查询请领单明细详细
export function getDetail(requestNo) {
    return request({
        url: '/request/detail/' + requestNo,
        method: 'get'
    })
}

// 查询调增请领单
export function getqldOutside(requestNo) {
    return request({
        url: '/request/detail/getInfoOutside/' + requestNo,
        method: 'get'
    })
}

// 新增请领单明细
export function addDetail(data) {
    return request({
        url: '/request/detail',
        method: 'post',
        data: data
    })
}

// 修改请领单明细
export function updateDetail(data) {
    return request({
        url: '/request/detail',
        method: 'put',
        data: data
    })
}

// 删除请领单明细
export function delDetail(requestNo) {
    return request({
        url: '/request/detail/' + requestNo,
        method: 'delete'
    })
}

// 导出请领单明细
export function exportDetail(query) {
    return request({
        url: '/request/detail/export',
        method: 'get',
        params: query
    })
}

// 审批追踪
export function trace(data) {
    return request({
        url: '/request/trace/list',
        method: 'get',
        params: data
    })
}