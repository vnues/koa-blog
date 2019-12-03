> nodemon 还可以用于执行和监视其他程序。nodemon 将读取正在运行的脚本的文件扩展名并监视该扩展名，而不是.js 如果没有 nodemon.json

```javascript
 "dev": "cross-env NODE_ENV=dev nodemon --watch 'app/**/*' -e ts --exec 'ts-node' ./app/main.ts",
```

监控 `app/**/*`（app 下所有的目录）`-e ts`以.ts 结尾的文件后有变化了执行`ts-node' ./app/main.ts`命令 --exec 是执行的意思
