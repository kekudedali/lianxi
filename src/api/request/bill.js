import request from '@/utils/request'

// 查询请领单列表
export function listBill(query) {
    return request({
        url: '/request/bill/list',
        method: 'get',
        params: query
    })
}

// 查询请领单详细
export function getBill(requestId) {
    return request({
        url: '/request/bill/' + requestId,
        method: 'get'
    })
}

// 新增请领单
export function addBill(data) {
    return request({
        url: '/request/bill',
        method: 'post',
        data: data
    })
}

// 修改请领单
export function updateBill(data) {
    return request({
        url: '/request/bill',
        method: 'put',
        data: data
    })
}

// 删除请领单
export function delBill(requestId) {
    return request({
        url: '/request/bill/' + requestId,
        method: 'delete'
    })
}

// 导出请领单
export function exportBill(query) {
    return request({
        url: '/request/bill/export',
        method: 'get',
        params: query
    })
}

// 请领单上报
export function reportBill(requestId) {
    return request({
        url: '/request/bill/report/' + requestId,
        method: 'get',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
    })
}

// 请领单撤销
export function recallBill(requestId) {
    return request({
        url: '/request/bill/' + requestId,
        method: 'put',
    })
}

// 师部请领单提交
export function approval1(data) {
    return request({
        url: '/request/approval1',
        method: 'post',
        data: data,

    })
}

// 军部请领单提交
export function approval2(data) {
    return request({
        url: '/request/approval2',
        method: 'post',
        data: data,

    })
}

// 联勤请领单提交
export function approval3(data) {
    return request({
        url: '/request/approval3',
        method: 'post',
        data: data,

    })
}


// 师部请领单查询
export function getApproval1(data) {
    return request({
        url: '/request/approval',
        method: 'get',
        params: data,

    })
}

// 军部请领单查询
export function getApproval2(data) {
    return request({
        url: '/request/approval2',
        method: 'get',
        params: data,

    })
}

// 联勤请领单查询
export function getApproval3(data) {
    return request({
        url: '/request/approval3',
        method: 'get',
        params: data,

    })
}


// 请领单通用查询
export function getApprovalCommon(data) {
  return request({
    url: '/request/approval',
    method: 'get',
    params:data,
  })
}

// 请领同意审批追踪
export function approval1Common(data) {
  return request({
    url: '/request/approval',
    method: 'post',
    data:data,
  })
}
