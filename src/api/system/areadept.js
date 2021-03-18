import request from '@/utils/request'

// 辖区列表
export function listareaDept(query) {
    return request({
        url: '/system/area_dept/list',
        method: 'get',
        params: query
    })
}

// 辖区列表
export function areaDeptexport(query) {
    return request({
        url: '/system/area_dept/export',
        method: 'get',
        params: query
    })
}