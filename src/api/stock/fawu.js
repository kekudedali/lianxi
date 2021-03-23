import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/ruoyi";

// 查询用户列表
export function listUser(query) {
    return request({
        url: '/materiel/deliver/list',
        method: 'get',
        params: query
    })
}

// 查询用户详细
export function getUser(userId) {
    return request({
        url: '/materiel/deliver/' + praseStrEmpty(userId),
        method: 'get'
    })
}

// 新增用户
export function addUser(data) {
    return request({
        url: '/materiel/deliver',
        method: 'post',
        data: data
    })
}

// 修改用户
export function updateUser(data) {
    return request({
        url: '/materiel/deliver',
        method: 'put',
        data: data
    })
}

// 删除用户
export function delUser(userId) {
    return request({
        url: '/materiel/deliver/' + userId,
        method: 'delete'
    })
}

// 导出用户
export function exportUser(query) {
    return request({
        url: '/materiel/deliver/export',
        method: 'get',
        params: query
    })
}

// 用户密码重置
export function resetUserPwd(userId, password) {
    const data = {
        userId,
        password
    }
    return request({
        url: '/materiel/deliver/resetPwd',
        method: 'put',
        data: data
    })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
    const data = {
        userId,
        status
    }
    return request({
        url: '/materiel/deliver/changeStatus',
        method: 'put',
        data: data
    })
}

// 查询用户个人信息
export function getUserProfile() {
    return request({
        url: '/materiel/deliver/profile',
        method: 'get'
    })
}

// 修改用户个人信息
export function updateUserProfile(data) {
    return request({
        url: '/materiel/deliver/profile',
        method: 'put',
        data: data
    })
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
    const data = {
        oldPassword,
        newPassword
    }
    return request({
        url: '/materiel/deliver/profile/updatePwd',
        method: 'put',
        params: data
    })
}

// 用户头像上传
export function uploadAvatar(data) {
    return request({
        url: '/materiel/deliver/profile/avatar',
        method: 'post',
        data: data
    })
}

// 下载用户导入模板
export function importTemplate() {
    return request({
        url: '/materiel/deliver/importTemplate',
        method: 'get'
    })
}

// 查询单位地址列表
export function listAddress(query) {
    return request({
        url: '/materiel/deliver/list',
        method: 'get',
        params: query
    })
}

// 查询单位地址详细
export function getAddress(addressId) {
    return request({
        url: '/materiel/deliver/' + addressId,
        method: 'get'
    })
}

// 新增单位地址
export function addAddress(data) {
    return request({
        url: '/materiel/deliver',
        method: 'post',
        data: data
    })
}

// 修改单位地址
export function updateAddress(data) {
    return request({
        url: '/materiel/deliver',
        method: 'put',
        data: data
    })
}

// 删除单位地址
export function delAddress(addressId) {
    return request({
        url: '/materiel/deliver/' + addressId,
        method: 'delete'
    })
}

// 导出单位地址
export function exportAddress(query) {
    return request({
        url: '/materiel/deliver/export',
        method: 'get',
        params: query
    })
}