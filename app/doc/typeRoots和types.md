默认所有可见的”@types“包会在`编译过程`中被包含进来。 node_modules/@types文件夹下以及它们子文件夹下的所有包都是可见的； 
也就是说，./node_modules/@types/，…/node_modules/@types/和…/…/node_modules/@types/等等。


如果指定了typeRoots，只有typeRoots下面的包才会被包含进来。 比如：

```javascript
{
   "compilerOptions": {
       "typeRoots" : ["./typings"]
   }
}

{
   "compilerOptions": {
        "types" : ["node", "lodash", "express"]
   }
}
```
这个tsconfig.json文件将仅会包含 ./node_modules/@types/node，./node_modules/@types/lodash和./node_modules/@types/express。/@types/。 
node_modules/@types/*里面的其它包不会被引入进来。

`指定"types": []来禁用自动引入@types包。`    禁用自动引入  我们自己手动引入

注意，自动引入只在你使用了全局的声明（相反于模块）时是重要的。 如果你使用import "foo"语句，TypeScript仍然会查找node_modules和node_modules/@types文件夹来获取foo包。

那么node_modules?怎么办


`编译`:ts文件 是指运行`tsc`命令 进行编译


前端ts配置不需要在编译时候引入node_modules/@types，而后端需要
```javascript
 // 前端
{
  "compilerOptions": {
    "target": "es6",
    "strict": true,
    "module": "esnext",
    "typeRoots": ["./src/types"],
    "moduleResolution": "node",
    "types": [
      "node",
      "webpack-env"
    ],
    "sourceMap": true,
    "noImplicitAny": true,
    "jsx": "preserve",
    "lib": ["dom", "es6"],
    "baseUrl": "./",
    "allowSyntheticDefaultImports": true,
    "paths": {
      "@/*": ["src/*"],
      "@store/*": ["src/store/*"],
      "@library/*": ["src/library/*"],
      "@modules/*": ["src/modules/*"],
      "@style/*": ["src/style/*"],
      "@components/*": ["src/components/*"]
      // "@common/*": ["src/common/*"]
    }
  },
  "include": ["./src/**/*"]
}

```

我猜是这样子的：前端编译阶段由webpack做，webpack做了操作的 所以前端是不需要引入node_modules/@types

而后端还是用ts做编译


## typeRoots

> 所以这个字段的功能是`按需引入`的意思


# tsconfig

注意了`tsconfig`是ts走编译的时候需要的

如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。 tsconfig.json文件中指定了用来编译这个项目的根文件和`编译选项`。 一个项目可以通过以下方式之一来编译：



