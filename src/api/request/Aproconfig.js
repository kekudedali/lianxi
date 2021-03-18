import request from '@/utils/request'

// 查询请领审批配置单列表
export function listconfig(query) {
    return request({
        url: '/request/config/list',
        method: 'get',
        params: query
    })
}


// 新增请领审批配置单
export function addconfig(data) {
    return request({
        url: '/request/config',
        method: 'post',
        data: data
    })
}

// 修改请领审批配置单
export function updateconfig(data) {
    return request({
        url: '/request/config',
        method: 'put',
        data: data
    })
}

// 删除请领审批配置单
export function delconfig(configNo) {
    return request({
        url: '/request/config/' + configNo,
        method: 'delete'
    })
}

// 导出请领审批配置单
export function exportconfig(query) {
    return request({
        url: '/request/config/export',
        method: 'get',
        params: query
    })
}