# refined-minapp-sdk

A helper wrapped on the top of wechat-minapp sdk to make it more developer-friendly.

## Principles

- Typed all api based on TypeScript
- Promisify all api
- flatten key params like `wx.getStorage({ key: '' })` => `wx.getStorage('key')`

## Example

Original:

```js
wx.getStorage({
  key: 'local_token',
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err.errMsg)
  },
})
```

Now:

```js
wx.getStorage('local_token')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err.errMsg)
  })
```

### With VSCode IntelliSense

![](./static/intellisense.png)
