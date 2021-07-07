import test from 'ava'

import { promisify } from './promisify'

const mockSuccess = (data: Record<string, any>): void => {
  const count = Object.keys(data).length - 2

  data.success(count)
}

const mockFail = (data: Record<string, any>): void => {
  data.fail(new Error('mock error'))
}

test('promisify with resolved', async (t) => {
  const fn = promisify(mockSuccess)

  const action = fn({ a: 1, b: 2 })

  t.true(action instanceof Promise)

  const result = await action

  t.is(result, 2)
})

test('promisify with success callback', async (t) => {
  const fn = promisify(mockSuccess)

  const result = await fn({
    a: 1,
    b: 2,
    success: () => {
      t.true(true)
    },
  })

  t.is(result, 2)
})

test('promisify with rejected', async (t) => {
  const fn = promisify(mockFail)

  try {
    const action = fn({ a: 1, b: 2 })

    t.true(action instanceof Promise)

    await action
  } catch (err) {
    t.is(err.message, 'mock error')
  }
})

test('promisify with fail callback', async (t) => {
  const fn = promisify(mockFail)

  try {
    await fn({
      a: 1,
      b: 2,
      fail: () => {
        t.true(true)
      },
    })
  } catch (err) {
    t.is(err.message, 'mock error')
  }
})
