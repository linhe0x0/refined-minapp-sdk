# refined-minapp-sdk

A helper wrapped on the top of wechat-minapp sdk to make it more developer-friendly.

# Principles

- Typed all api based on TypeScript
- Promisify all api
- flatten key params like `wx.getStorage({ key: '' })` => `wx.getStorage('key')`
