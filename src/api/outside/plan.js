import request from '@/utils/request'

// 查询外部采购计划维护列表
export function listPlan(query) {
    return request({
        url: '/outside/plan/list',
        method: 'get',
        params: query
    })
}

// 查询外部采购计划维护详细
export function getPlan(procurementId) {
    return request({
        url: '/outside/plan/' + procurementId,
        method: 'get'
    })
}

// 新增外部采购计划维护
export function addPlan(data) {
    return request({
        url: '/outside/plan/add',
        method: 'post',
        data: data
    })
}

// 修改外部采购计划维护
export function updatePlan(data) {
    return request({
        url: '/outside/plan/edit',
        method: 'post',
        data: data
    })
}

// 删除外部采购计划维护
export function delPlan(data) {
    return request({
        url: '/outside/plan/delete',
        method: 'post',
        data: data
    })
}
// 删除外部采购计划审批
export function check(data) {
    return request({
        url: '/outside/plan/check',
        method: 'post',
        data: data
    })
}
// 删除外部采购计划撤销审批
export function uncheck(data) {
    return request({
        url: '/outside/plan/uncheck',
        method: 'post',
        data: data
    })
}

// 导出外部采购计划维护
export function exportPlan(query) {
    return request({
        url: '/outside/plan/export',
        method: 'get',
        params: query
    })
}

// 导出外部采购计划维护
export function choiceManufactor(query) {
    return request({
        url: '/outside/plan/choiceManufactor',
        method: 'get',
        params: query
    })
}

// 查询外部采购计划维护详细
export function getbdqk(procurementId) {
    return request({
        url: '/outside/plan/queryPlanChange?procurementId=' + procurementId,
        method: 'get',
    })
}