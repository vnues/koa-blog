# lib 的作用

告诉 ts 编译我这个包使用的语言可能是 es6 啊等等

> 如果 .ts 文件中使用了某些高于 target 指定的语法特性，那么就需要在 lib 中指定这些语法特性所在的 ES 版本。
> 例如：tsconfig.json 中指定的 target 是 "es5"，在 index.ts 文件中使用了 ES2015 的 Set 会提示如下错误：error TS2583: Cannot find name 'Set'。
> 解决这个错误有三种办法：

作者：小被子
链接：https://juejin.im/post/5d2fd5eae51d45776031b08e
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://jack-cool.github.io/2019/08/05/tsconfig-json-%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3/
