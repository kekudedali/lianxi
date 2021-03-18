import request from '@/utils/request'

// 查询外部增量请领单列表
export function listOutside(query) {
    return request({
        url: '/system/outside/list',
        method: 'get',
        params: query
    })
}

// 查询外部增量请领单详细
export function getOutside(requestId) {
    return request({
        url: '/system/outside/' + requestId,
        method: 'get'
    })
}

// 新增外部增量请领单
export function addOutside(data) {
    return request({
        url: '/system/outside',
        method: 'post',
        data: data
    })
}

// 修改外部增量请领单
export function updateOutside(data) {
    return request({
        url: '/system/outside',
        method: 'put',
        data: data
    })
}

// 删除外部增量请领单
export function delOutside(requestId) {
    return request({
        url: '/system/outside/' + requestId,
        method: 'delete'
    })
}

// 导出外部增量请领单
export function exportOutside(query) {
    return request({
        url: '/system/outside/export',
        method: 'get',
        params: query
    })
}

// 删除外部采购计划审批
export function check(data) {
    return request({
        url: '/system/outside/check',
        method: 'post',
        data: data
    })
}
// 删除外部采购计划撤销审批
export function uncheck(data) {
    return request({
        url: '/system/outside/uncheck',
        method: 'post',
        data: data
    })
}