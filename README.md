# refined-minapp-sdk

对微信小程序 API 的封装，对开发更友好。

## 核心原则

- 基于 TypeScript 进行类型补全。
- 全部 Promise 化
- 将部分关键参数扁平化提取，例如 `wx.getStorage({ key: '' })` => `wx.getStorage('key')`
- 使用 JS 内置的标准 `Error` 对象替换掉微信小程序的错误对象。

## 例如

官方原始调用方式：

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

现在：

```js
wx.getStorage('local_token')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err.message)
  })
```

### VSCode 代码提示展示

![](./static/intellisense.png)

## TODO

- [ ] 基础
- [ ] 路由
- [ ] 跳转
- [ ] 转发
- [ ] 界面
- [ ] 网络
- [ ] 支付
- [ ] 数据缓存
- [ ] 数据分析
- [ ] 画布
- [ ] 媒体
- [ ] 位置
- [ ] 文件
- [ ] 开放接口
- [ ] 设备
- [ ] Worker
- [ ] WXML
- [ ] 第三方平台
- [ ] 广告
