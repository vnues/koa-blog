为什么需要to方法，想想一个问题
我们在写golang的时候，是不是一个异步操作都会返回结果和err

如果单单写成
```js
const res =await getUsers(xxx)

```

那么res可能是正确✅的结果也有可能是err，所以我们不知道具体如何 你可能会说try catch去捕捉不就行了 ，其实这也是一种实现方法，也是可以的
不管怎么样我们要拿到err值、result值，`所以to写法比较优雅吧`



- 为什么promise有类型
- Promise有catch,可以捕获错误
- async await可以通过try catch
- 想想await a().catch()的写法有点怪怪的，所以支持try catch写法
- 但是我推荐用to的写法


# 规定

❗️❗️所以异步操作最好要有err值和结果值 不用try catch来  当然try、catch是第二种实现方式