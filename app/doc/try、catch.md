有时候我们想捕获报错  `捕获报错`就是这个报错一旦发生 捕获（相当于解决）起来 不让他影响程序，
也即是控制台不会出现报错信息，因为被捕获起来了



中间件有些可能会捕获  所以要注意层次 有些需要捕获错误 我们写自己的中间件的时候记得抛出


```javascript
// 错误日志
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // catch捕获报错 中间件捕获错误的同时记得抛出错误❌
    app.use(morgan('combined', { stream: errorLogStream }))
    throw new Error(err) // 错误抛出
  }
})
```