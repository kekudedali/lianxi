import request from '@/utils/request'

// 查询单位地址列表
export function listAddress(query) {
    return request({
        url: '/system/address/list',
        method: 'get',
        params: query
    })
}

// 查询单位地址详细
export function getAddress(addressId) {
    return request({
        url: '/system/address/' + addressId,
        method: 'get'
    })
}

// 新增单位地址
export function addAddress(data) {
    return request({
        url: '/system/address',
        method: 'post',
        data: data
    })
}

// 修改单位地址
export function updateAddress(data) {
    return request({
        url: '/system/address',
        method: 'put',
        data: data
    })
}

// 删除单位地址
export function delAddress(addressId) {
    return request({
        url: '/system/address/' + addressId,
        method: 'delete'
    })
}

// 导出单位地址
export function exportAddress(query) {
    return request({
        url: '/system/address/export',
        method: 'get',
        params: query
    })
}