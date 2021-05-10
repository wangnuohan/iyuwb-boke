# [JavaScript 高级程序设计]读书笔记

## 浏览器内核

- Chrome：Blink、V8
  > Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- Firefox：Gecko、SpiderMonkey
- Safari：Webkit、JavaScriptCore
- 微软：Trident、EdgeHtml、Chakra

## ECMAScript6

> ES6 正式支持了 类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多的新数据类型

## script 元素

asyncs 属性：

- 可选，表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待脚本加载，只对外部脚本有效
- 不能保证标记为 anync 的脚本按照出现次序执行

defer 属性：

- 可选，表示脚本可以延迟到文档完全被解析和显示之后再执行。同样只对外部文件有效、

## 关键字和保留字

> 关键字（es6）：

```txt
    break         do            in             typeof
    case          else          instanceof     var
    catch         export        new              void
    class         extends      return          while
    const         finally      super           with
    continue     for           switch          yield
    debugger     function     this
    default      if             throw
    delete        import        try

```

> 保留字（es6）：

```txt
    始终保留：
    enum
    严格模式下保留：
    implements   package      public
    interface    protected    static
    let           private
    模块代码中保留：
    await
```

## 变量

### let 和 var

- let 声明的范围是块作用域，var 声明的范围是函数作用域
- let 不允许同一个块作用域中出现多次声明，对多次声明的报错不会因为混用 let 和 var 而受影响

### 暂时性死区

let 声明的变量不会在作用域中被提升。

在 let 声明之前的执行瞬间被称为“暂时性死区”，在此阶段引用任何后面才声明的变量都会报错。

### 全局声明

var 在全局作用域中声明的变量会成为 window 的属性，而 let 声明的则不会。
