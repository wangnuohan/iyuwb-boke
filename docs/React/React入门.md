# React 入门

> 包括 React 基础、React-Router、PubSub、Redex、Ant-Design

## React 基础

> [React 中文官网](https://react.docschina.org/)

> 用于构建用户页面(视图)的 JavaScript 库(将数据渲染成 HTML 页面的 JavaScript 库)

由 FaceBook 开发，且开源

优点：

- 不用频繁操作 DOM，效率低(重绘，重排效率低，严重影响性能)
- 原生 JavaScript 没有组件化编码方案。代码复用率低，维护不方便

特点：

- 采用组件化模式，声明式编码，提高开发效率以及组件服用率，维护方便
- 在 React Native 中可以适用 React 语法进行移动端开发
- 适用虚拟 DOM 以及 Diff 算法，减少与真实 DOM 的交互，较少重绘重排。

学习前置

- class
- ES6 相关
- npm 包管理
- 模块化
- 原型、原型链

## React 入门

### React 的基本适用

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 加载 React。-->
    <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
    <script
      src="https://unpkg.com/react@16/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div class="test"></div>

    <script type="text/babel">
      const vDom = <h1>Hello world</h1>;
      ReactDOM.render(vDom, document.querySelector(".test"));
    </script>
  </body>
</html>

```
