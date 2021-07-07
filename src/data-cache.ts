import { promisify } from './helpers/promisify'

import type { CommonSuccessResult } from './helpers/types'

/**
 * wx.setStorage 的同步版本
 *
 * @param key 本地缓存中指定的 key
 * @param data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 *
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html}
 */
export function setStorageSync(key: string, data: any): void {
  wx.setStorageSync(key, data)
}

/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 *
 * @param key 本地缓存中指定的 key
 * @param data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 *
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html}
 */
export function setStorage(key: string, data: any): Promise<void> {
  return promisify<void>(wx.setStorage)({
    key,
    data,
  })
}

/**
 * wx.getStorage 的同步版本
 *
 * @param key 本地缓存中指定的 key
 * @returns key 对应的内容
 *
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html}
 */
export function getStorageSync<T>(key: string): T {
  return wx.getStorageSync(key)
}

/**
 * 从本地缓存中异步获取指定 key 的内容。缓存相关策略请查看存储
 *
 * @param key 本地缓存中指定的 key
 * @returns key 对应的内容
 *
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html}
 */
export function getStorage<T>(key: string): Promise<CommonSuccessResult<T>> {
  return promisify<CommonSuccessResult<T>>(wx.getStorage)({
    key,
  })
}
