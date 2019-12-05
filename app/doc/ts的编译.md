当运行`yarn run build` 我们可以在buid文件夹下看到types文件夹没了

这就是编译的效果  但是我们的node_module需要忽略掉




默认情况下 ts是不会去编译node_modules下的


## 显示的去编译node_modules下的
```JSON
{
  "compilerOptions": {
   // "strict": true,
    "module": "commonjs",
    "target": "ESNext",
    "noImplicitAny": true,
    // 按需引入 -- 最终.d.ts会被编译消失
    // "typeRoots": ["./app/types"],
    "moduleResolution": "node",
    "sourceMap": false,
    "esModuleInterop": true,
    "experimentalDecorators":true,
    "forceConsistentCasingInFileNames":true,
    "outDir": "build",
    "baseUrl": "./"
  },
  // 编译只经过app下的
  "include": ["./app/**/*","node_modules/"],
  // "exclude": ["node_modules", "./__tests__/*"]

}

```

