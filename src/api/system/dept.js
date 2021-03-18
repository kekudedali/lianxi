import request from '@/utils/request'

// 查询部门列表
export function listDept(query) {
    return request({
        url: '/system/dept/list',
        method: 'get',
        params: query
    })
}

// 新增仓库
export function addWarehouse(data) {
    return request({
        url: '/system/dept/warehouse',
        method: 'post',
        data: data
    })
}
// 修改仓库
export function editWarehouse(data) {
    return request({
        url: '/system/dept/warehouse',
        method: 'put',
        data: data
    })
}
// 删除仓库
export function delWarehouse(deptId) {
    return request({
        url: '/system/dept/warehouse' + deptId,
        method: 'delete',
    })
}

// 查询仓库部门列表
export function listWarehouse(query) {
    return request({
        url: '/system/dept/listDept',
        method: 'get',
        params: query
    })
}

export function queryArmyDept(query) {
    return request({
        url: '/system/dept/queryArmyDept',
        method: 'get',
        params: query
    })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId) {
    return request({
        url: '/system/dept/list/exclude/' + deptId,
        method: 'get'
    })
}

// 查询部门详细
export function getDept(deptId) {
    return request({
        url: '/system/dept/' + deptId,
        method: 'get'
    })
}

// 查询部门下拉树结构
export function treeselect(query) {
    return request({
        url: '/system/dept/treeselect',
        method: 'get',
        params: query
    })
}

// 查询部门下拉树结构
export function organTreeselect(query) {
    return request({
        url: '/system/dept/treeselect?' + encodeURI('params[deptTypes]=') + query,
        method: 'get',
    })
}

// 根据角色ID查询部门树结构
export function roleDeptTreeselect(roleId) {
    return request({
        url: '/system/dept/roleDeptTreeselect/' + roleId,
        method: 'get',
    })
}

// 新增部门
export function addDept(data) {
    return request({
        url: '/system/dept',
        method: 'post',
        data: data
    })
}

// 修改部门
export function updateDept(data) {
    return request({
        url: '/system/dept',
        method: 'put',
        data: data
    })
}

// 删除部门
export function delDept(deptId) {
    return request({
        url: '/system/dept/' + deptId,
        method: 'delete'
    })
}

// 部队机构管理-> 导入模板
export function importOrg() {
    return request({
        url: '/system/init/import_org/template',
        method: 'get'
    })
}

// 联勤中心维护-> 导入模板
export function importJoint() {
    return request({
        url: '/system/init/import_joint/template',
        method: 'get'
    })
}

// 油料厂家维护-> 导入模板
export function importOilfactory() {
    return request({
        url: '/system/init/import_oilfactory/template',
        method: 'get'
    })
}

// 省
export function getaddress(url) {
    return request({
        url: url,
        method: 'get',
    })
}
// 查全部地址
export function getalladdress(data) {
    return request({
        url: '/division/one/' + data,
        method: 'get',
    })
}