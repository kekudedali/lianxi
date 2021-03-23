import request from '@/utils/request'

// 仓库单位选择
export function querydeptList(query) {
    return request({
        url: '/stock/queryproduct/querydept',
        method: 'get',
        params: query
    })
}

// 加载商品分配作为查询条件
export function getProductCategory(query) {
    return request({
        url: '/stock/queryproduct/getProductCategory',
        method: 'get',
        params: query
    })
}

// 加载商品规格分类作为查询条件
export function getProductSpec(query) {
    return request({
        url: '/stock/queryproduct/getProductSpec',
        method: 'get',
        params: query
    })
}

// 指定仓库单位商品加购
export function queryproductWithDept(query) {
    return request({
        url: '/stock/queryproduct/withDept',
        method: 'post',
        data: query
    })
}

// 不指定仓库单位商品加购
export function queryproductWithoutDept(query) {
    return request({
        url: '/stock/queryproduct/withoutDept',
        method: 'post',
        data: query
    })
}

// 商品图片加载
export function loadPictures(query) {
    return request({
        url: '/stock/queryproduct/loadPictures',
        method: 'post',
        data: query
    })
}

// 商品加购最终版本
export function queryProductRequest(query) {
    return request({
        url: '/stock/queryproduct/queryProductRequest',
        method: 'post',
        data: query
    })
}