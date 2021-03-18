import request from '@/utils/request'

// 查询物料发运单列表
export function listWaybill(query) {
    return request({
        url: '/order/order/list',
        method: 'get',
        params: query
    })
}
export function listWaybdetail(query) {
    return request({
        url: '/order/detail/list/nopage',
        method: 'get',
        params: query
    })
}

export function getdeliver(query) {
    return request({
        url: '/system/waybill/list',
        method: 'get',
        params: query
    })
}

// 查询物料发运单详细
export function getWaybill(waybillNo) {
    return request({
        url: '/system/waybill/' + waybillNo,
        method: 'get'
    })
}

// 新增物料发运单
export function addWaybill(data) {
    return request({
        url: '/request/waybill',
        method: 'post',
        data: data
    })
}
// 订单签收
export function ordersign(data) {
    return request({
        url: '/order/order/sign',
        method: 'post',
        data: data
    })
}

// 修改物料发运单
export function updateWaybill(data) {
    return request({
        url: '/system/waybill',
        method: 'put',
        data: data
    })
}

// 删除物料发运单
export function delWaybill(waybillNo) {
    return request({
        url: '/system/waybill/' + waybillNo,
        method: 'delete'
    })
}

// 导出物料发运单
export function exportWaybill(query) {
    return request({
        url: '/system/waybill/export',
        method: 'get',
        params: query
    })
}