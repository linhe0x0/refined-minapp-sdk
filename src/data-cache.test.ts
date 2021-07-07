import test from 'ava'

import {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
} from './data-cache'

/**
 * Mock
 */
if (!global.wx) {
  global.wx = {}
}

wx.setStorageSync = (key: string, data: any): void => {
  if (key && data) {
    // nothing
  }
}

wx.setStorage = (data: any) => {
  setTimeout(() => {
    data.success()
  }, 500)
}

wx.getStorageSync = (key: string): string => {
  return key
}

wx.getStorage = (data: any) => {
  setTimeout(() => {
    data.success({
      data: data.key,
    })
  }, 500)
}

test('setStorageSync', (t) => {
  const result = setStorageSync('a', 1)

  t.is(result, undefined)
})

test('setStorage', async (t) => {
  const result = await setStorage('a', 1)

  t.is(result, undefined)
})

test('getStorageSync', (t) => {
  const result = getStorageSync('a')

  t.is(result, 'a')
})

test('getStorage', async (t) => {
  const result = await getStorage('a')

  t.is(result.data, 'a')
})
