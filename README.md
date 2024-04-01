TypeScript Vite React "linaria" Typed Components Demo
=================================

如果想使用css动态值，必须使用linaria的typed方法来定义一个组件，不能像emotion那样定义一个函数来生成动态class。

原理是，生成的css文件中会包含一些css变量，比如`font-size:var(--r1cshusu-0)`，同时在js里创建组件时，指定相应的变量值。

好消息是`linaria.typed`支持类型，可以自定义attribute名字，方便传入变量

```
npm install
npm run demo
```

It will open page on browser automatically.
