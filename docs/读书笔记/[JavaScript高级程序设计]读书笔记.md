# [JavaScript 高级程序设计]读书笔记

## 语言基础

### 浏览器内核

- Chrome：Blink、V8
  > Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- Firefox：Gecko、SpiderMonkey
- Safari：Webkit、JavaScriptCore
- 微软：Trident、EdgeHtml、Cha kra

### ECMAScript6

> ES6 正式支持了 类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多的新数据类型

### script 元素

#### asyncs 属性：

- 可选，表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待脚本加载，只对外部脚本有效
- 不能保证标记为 `anync` 的脚本按照出现次序执行

#### defer 属性：

- 可选，表示脚本可以延迟到文档完全被解析和显示之后再执行。同样只对外部文件有效、

### 关键字和保留字

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

### 变量

### let 和 var 和 const

#### let

- `let` 声明的范围是块作用域，`var` 声明的范围是函数作用域
- `let` 不允许同一个块作用域中出现多次声明，对多次声明的报错不会因为混用 `let` 和 `var` 而受影响
- let 每次迭代声明一个变量实例的行为适用于所有风格的 `for` 循环 包括 `for in` 和 `for of`

#### const

- `const` 声明限制只适用于他指向的变量引用。简单来说就是只限制简单数据类型，不限制引用类型数据的修改，只限制引用类型的引用地址不可改变
- `const` 不能用来声明迭代变量，因为迭代变量会自增

::: details 点击显示代码

```js
// 使用var
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5
  }, 0);
}

// 适用let
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2 3 4
  }, 0);
}
```

:::

### 暂时性死区

`let` 声明的变量不会在作用域中被提升。

在 `let` 声明之前的执行瞬间被称为“暂时性死区”，在此阶段引用任何后面才声明的变量都会报错。

### 全局声明

`var` 在全局作用域中声明的变量会成为 `window` 的属性，而 let 声明的则不会。

### 数据类型

简单数据类型（原始类型）：`undefined`，`Null`，`Boolean`，`Number`，`String` 和 `Symbol`（符号），以及后面 ES 标准加的 `bigint`。

原始值大小固定，保存在栈内存上

复杂数据类型（引用类型）：`Object`

引用值是对象，存储在堆内存上

### typeof 操作符

会返回以下字符串之一（`typeof` 不能区分 `object` 和 `null`，并且不能细致区分 `object`）：

- `undefined` 表示值未定义
- `boolean` 表示布尔值
- `string` 表示字符串
- `number` 表示数值
- `object` 表示对象或者 `null`
- `function` 表示函数
- `symbol` 表示符号

> `null` 被认为是一个空对象的引用，所以为 object

### undefined

> 表示使用 `var` 或 `let` 声明了变量但是没有初始化值，就相当于给变量赋值了 `undefined。`

::: tip 注意
`undefined` 值是由 `null` 值派生而来的，表面相等
:::
::: details 点击显示代码

```js
console.log(undefined == null); //true
```

:::

### null

> 任何时候，变量保存对象，而当时又没有值可以保存是，就可以用 `null` 来填充变量

### Boolean

将一个其他类型的值转换为布尔值时，可以调用特定的 `Boolean()` 转型函数

::: tip 注意
转换规则：除了布尔类型的 `false` ，`""` (空字符串)，`0，NaN，null，undefined` 会转换成 `false` 之外，其他数值皆转换为 `true`
:::

### Number

Number 使用 IEEE754 格式表示 整数和浮点值，双精度值。

整数值：

可以使用八进制或者十六进制字面量表示

- 八进制：第一个数必需为 0，如：070
- 十六进制：前缀为 0x，如：0x1f

::: tip 注意
在严格模式下，字面量八进制是无效的 会报错
:::

浮点值：因为浮点值使用内存是整数的两倍，所以 ECMAScript 总是想法吧浮点值转成整数
::: details 点击显示代码

```js
//比如：
let a = 1.0;
//会被当成整数1处理;
```

:::
浮点值还可以用科学计数法表示

- 3.124e7 表示 31240000
- 3.124e-7 表示 0.0000003124

值得范围：
最小为 `Number.MIN_VALUE`,最大为 `Nunber.MAX_VALUE`
超出范围会转为特殊值，征服无穷大（`infinity`），无法进行任何运算

### NaN

> 特殊值，意思是不是数值。用于表示本来要返回数值的操作失败了

> 可以用`isNaN`判断是否是 `NaN`

::: tip 注意
NaN 不等于包括自己本身在内的任何值
:::

### 数值转换

`Number()`转换规则：

- 布尔值：`false` 为 0，`true` 为 1
- 数值，直接返回
- `null`，返回 0
- `undefined`，返回 `NaN`
- 字符串，空字符串返回 0，其他只返回数字型字符串，带有正负号与小数点的都可以返回数值
- 对象，调用 `valueOf()`方法，在按照上述对比
- 除此之外的字符返回 `NaN`

`valueOf()`：返回各种对象的原始值
::: details 点击显示代码

```js
let obj = {
  name: "Yevin",
  age: 18,
};
let arr = [12, 213, 123];
console.log(obj.valueOf());
console.log(arr.valueOf());

// { name: 'Yevin', age: 18 }
// [ 12, 213, 123 ]
```

:::
`parseInt()`转换规则：

从第一个非空格字符开始转换，如果第一个不是数字符号或者正负号，会立即返回 NaN。后续依次检测，到非数字字符则返回之前整数。`parseInt()`能识别十六进制八进制。第二个参数可以指定进制数。

`parseFloat()`与 `parseInt()`规则基本一直，唯一区别为前者可以检测到第一个小数点返回浮点数，但是检测到第二个小数点的时候就会无效了直接返回值。

### String

字符串可以用双引号("")单引号('')或者反引号(``)标示

::: tip 注意
ECMAScript 中的字符串是不可以改变的，一旦创建，值就不能修改了
:::

::: details 点击查看代码

```js
var s = "abc";
console.log(s[2]); // 'c'
s[2] = "a";
console.log(s); // 'abc'
```

`toString()`：可以将数值布尔值对象和字符串值转成字符串。可接收传值，转换数字的进制。但是不能转 `null` 和`undefined`
可以适用`String()`来转换 `unll` 和 `undefined`

### 模板字符串

> 模板字符串可以保留换行符号，可以跨行定义字符串

> 可以字符串差值

::: details 点击查看代码

```js
var a = "abc\nedf";
var b = `abc
edf`;
console.log(a === b); //true

var c = "Yevin";
var d = "Zhi";

var e = `hello:${c},${d}`;
console.log(e); // hello:Yevin,Zhi
```

:::

### Symbol

> 更多 Symbol 详细信息见 [Symbol 详细介绍](https://developer.mozilla.org/zh-cn/docs/web/javascript/reference/global_objects/symbol)

> Symbol 符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险

> Symbol()函数不能与 new 关键字一起作为构造函数使用。

```js
var a = Symbol();
var b = Symbol();
console.log(a == b); //false
```

注册全局符号注册表

使用`Symbol.for()`注册
使用`Symbol.keyFor()`查看全局注册表，该方法接收符号，返回该全局符号对应的字符串键

::: details 点击查看代码

```js
var a = Symbol.for("yevin");
var b = Symbol.for("yevin");
console.log(a === b); //true

console.log(Symbol.keyFor(a)); / yevin
```

:::

使用符号作为属性

> 凡是可以使用字符串或者数值作为属性的地方都可以使用符号,包括 `Object.defineProperty` 和 `Object.defineProperties()`定义的属性

```js
var name = Symbol("name");
var obj = {
  [name]: "yevin",
};
//或者可以 obj[name]='yevin'
console.log(obj); //{ [Symbol(name)]: 'yevin' }
console.log(obj[name]); // yevin
```

`Object.defineProperty`和`Object.defineProperties()`

> 这两个方法直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

::: details 点击查看代码

```js
var obj = {};
//defineProperty
Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

//defineProperties
Object.defineProperties(obj, {
  property2: {
    value: true,
    writable: true,
  },
  property3: {
    value: "Hello",
    writable: false,
  },
});
```

:::

`Object.getOwnPropertyNames()` 返回对象实例的常规属性数组

`Object.getOwnPropertySymbols()` 返回对象实例的符号属性数组

`Object.getOwnPropertyDescriptors()` 返回同时包含常规和符号属性描述符的对象

`Reflect.ownKeys()` 返回两种类型的键
::: details 点击查看代码

```js
var a = Symbol("a");
var b = Symbol("b");
var obj = {
  [a]: "aaa",
  [b]: "bbb",
  c: "ccc",
};

console.log(Object.getOwnPropertyNames(obj)); //[ 'c' ]
console.log(Object.getOwnPropertySymbols(obj));
//[ Symbol(a), Symbol(b) ]
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//   c: {
//     value: 'ccc',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   [Symbol(a)]: {
//     value: 'aaa',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   [Symbol(b)]: {
//     value: 'bbb',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
console.log(Reflect.ownKeys(obj));
//[ 'c', Symbol(a), Symbol(b) ]
```

:::

### Object

> ECMAScript 中的对象其实就是一组数据和功能的集合。

属性和方法

- `constructor`：用于创建当前对象的函数
- `hasOwnproperty(propertyname)`：用于判断当前对象实例上是否存在给定的属性
- `isPrototypeOf(object)`：用于判断当前对象是否为另一个对象的原型
- `propertyEnumerable(propertyname)` ：用于判定给的属性是否能够使用 for-in 语句枚举
- `toLocaleString()`：返回对象的字符串表示，该字符串反应对象所在的本地化执行环境
- `toString()`：返回对象的字符串表示
- `valueOf()`：返回对象对应的字符串，数值或者布尔表示

:::tip 主题
在 ECMAScript 中 Object 是所有对象的基类，所以任何对象中都有上述的属性和方法

:::

### 操作符

### 位运算

#### 按位非（~）

返回数值的补数（反码）

```js
let num1 = 10; // 二进制 0000 0000 0000 0000 0000 0000 0000 1010
let num2 = ~num1; //二进制 1111 1111 1111 1111 1111 1111 1111 0101

console.log(num2); // -11

//类似于 对num1取负值并减1
```

#### 按位与（&）

有两个操作数，将两个数的每一位对齐，只有两个位值都为 1 取 1，否则取 0 计算。

#### 按位与（|）

有两个操作数，将两个数的每一位对齐，只要有一个位值为 1 取 1，否则取 0 计算。

#### 按位异或（^）

有两个操作数，将两个数的每一位对齐，有且只有一个位值为 1 取 1，否则取 0 计算。（两个都为 1 或者 0 时取 0）

#### 左移（<<）

按照指定的位数将数值所有位向左移动，移位空出位置以 0 填充

```js
let a = 2; //二进制 10
let b = a << 5; // 二进制 1000000
console.log(b); //64
```

::: tip 注意
左移（<<）会保留它所操作数值的符号
:::

#### 有符号右移（>>）

按照指定的位数将数值所有位向右移动，移位空出位置以 0 填充，保存符号

#### 无符号右移

按照指定的位数将数值所有位向右移动，移位空出位置以 0 填充，不保存符号

### 布尔操作符

#### 逻辑与（\$\$）

当操作数是布尔值：两个操作数都为真是为真

当操作数不是布尔值：

- 当第一个操作数位对象，返回第二个操作数
- 当二个操作数是对象，则只有第二个操作数求值为 true 时才会返回该对象
- 两个操作都为对象，返回第二个操作数
- 有一个操作数为 `null`,`NaN` 或者 `undefined`，则返回 `null`，`NaN` 或者 `undefined`

#### 逻辑与（||）

当操作数是布尔值：两个操作数有一个为真则为真

当操作数不是布尔值：

- 当第一个操作数位对象，返回第一个操作数
- 当第一个操作数求值为 `false`，则返回第二个操作数
- 当二个操作数是对象，则返回第一个操作数
- 有一个操作数为 `null`,`NaN`或者 `undefined`，则返回 `null`，`NaN` 或者 `undefined`

### 关系操作符

::: tip 注意

如果操作数都是数值，则执行数值比较。

如果操作数都是字符串，则逐个比较字符串中对应字符的编码。

如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。

如果有任一操作数是对象，则调用其 `valueOf()`方法，取得结果后再根据前面的规则执行比较。如果没有 `valueOf()`操作符，则调用 `toString()`方法，取得结果后再根据前面的规则执行比较。

如果有任一操作数是布尔值，则将其转换为数值再执行比较

:::

### 相等操作符

::: tip 注意 （==）

如果任一操作数是布尔值，则将其转换为数值再比较是否相等。`false` 转换为 0, `true` 转换为 1。

如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。

如果一个操作数是对象，另一个操作数不是，则调用对象的 `valueOf()`方法取得其原始值，再根据前面的规则进行比较。在进行比较时，这两个操作符会遵循如下规则。

- `null` 和`undefined` 相等。

- `null` 和 `undefined` 不能转换为其他类型的值再进行比较。

- 如果有任一操作数是 `NaN`，则相等操作符返回 `false`，不相等操作符返回 `true`。记住：即使两个操作数都是 `NaN`，相等操作符也返回`false`，因为按照规则，`NaN` 不等于 `NaN`。

如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 `true`。否则，两者不相等。

:::

### 语句

### for-in 语句

> for-in 语句是一种严格的迭代语句，用于枚举对象中的非符号键属性(对象可以是非迭代对象)

### for-of 语句

> for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素

### switch

::: details 点击查看代码，也可以这样 实现

```js
var a = 76;

switch (true) {
  case a > 90:
    console.log("优秀");
    break;
  case a > 70:
    console.log("良好");
    break;
  case a > 60:
    console.log("及格");
    break;
  default:
    console.log("不及格");
}
```

:::

:::tip 注意
switch 语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型（比如，字符串"10"不等于数值 10）
:::

### 函数

函数返回值
:::tip 注意
最佳实践是函数要么返回值，要么不返回值。只在某个条件下返回值的函数会带来麻烦。

不指定返回值的函数实际上会返回特殊值 `undefined`。
:::

### 严格模式下对函数有一些限制

:::tip 注意

- 函数不能以 `eval` 或 `arguments` 作为名称；
- 函数的参数不能叫 `eval` 或 `arguments`；
- 两个命名参数不能拥有同一个名称。

:::

:::tip 注意
ECMAScript 中函数的参数就是局部变量。
:::

## 变量作用域和内存

### instanceof 判断类型

```js
var a = [1, 2, 3];
console.log(a instanceof Array); //true
console.log(a instanceof RegExp); //false
```

### 执行上下文

> 变量或函数的上下文决定了他们可以访问那些数据，以及他们的行为。每个上下文都有一个关联的变量对象（variable object），该上下文中定义的所有变量和函数都存在这个对象上。（该对象无法通过代码访问变量对象）

包括：全局上下文，函数上下文和块级上下文

代码执行流没进入一个新上下文，都会创建一个作用域链，用于搜索变量和函数

### 全局上下文

> 最外层的上下文，在浏览器中，全局上下文就是 window 对象（根据 ECMAScript 实现的宿主环境，便是全局上下文的对象可能不一样）。

::: tip 注意
上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数
全局上下文，会在应用程序退出前才会被销毁
:::

### 上下文栈

- 每个函数调用都有自己的上下文
- 当代码执行流进入函数时，函数的上下文被推到一个上下文栈上
- 当函数执行完之后，上下文栈会弹出该函数上下文
- 将控制权返还给之前的执行上下文

### 作用域链

> 上下文中的代码在执行的时候，会创建变量对象的一个作用域链。该作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。

::: tip 注意

代码正在执行的上下文的变量对象始终位于作用域链的最前端。

如果上下文是函数，则其活动对象（activation object）用作变量对象。
活动对象最初只有一个定义变量：arguments。（全局上下文中没有这个变量。）
作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文。以此类推直至全局上下文。

全局上下文的变量对象始终是作用域链的最后一个变量对象。

:::

### 作用域链增强

> 一些语句会导致在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删除。

- `try/catch` 语句的 `catch` 块：会创建一个新的变量对象，这个变量对象包含要抛出错误对象的声明。
- `with` 语句：会向作用域前端添加指定的对象

### 变量声明

- 使用 var 的声明变量，会被自动添加到最接近的上下文
- 在函数中，最接近的上下文就是函数上下文。
- 如果变量未经声明被初始化，会被自动添加到全局上下文

- let 声明变量，作用域是块级的（块级作用域由最近的一堆含花括号`{}`界定）

### 垃圾回收

> 通过自动内存管理实现内存分配和限制资源回收
> 基本思路：确定哪个变量不会再使用，然后释放它占用的内存,周期性，即垃圾回收程序每隔一定事件就会自动运行。

- 离开作用域的值会被自动标记为可回收，然后再垃圾回收期间被删除

### 标记清理

标记变量，没有被使用的，在上下文中的变量都访问不到的变量进行回收。

> 主流的垃圾回收算法是标记清理，即先给当前不适用的值加上标记，在回来回收他们的内存

### 引用计数

标记引用次数，每次被引用，标记引用次数就加 1，引用被覆盖的时候，减 1.当为 0 的时候说明，说明没有办法在访问到这个值了，就会被垃圾回收程序释放回收。

::: tip 注意
当出现循环引用的时候，就会出现一直无法被清理回收，因为引用数一直为 2

JavaScript 引擎不再使用这种算法，但某些旧版本的 IE 仍然会受这种算法的影响，原因是 JavaScript 会访问非原生 JavaScript 对象（如 DOM 元素）

解决：需要手动设置引用为 `null`
:::

::: warning 注意

在某些浏览器中是有可能（但不推荐）主动触发垃圾回收的。在 IE 中，`window. CollectGarbage()`方法会立即触发垃圾回收。在 Opera 7 及更高版本中，调用 `window.opera.collect()`也会启动垃圾回收程序。
:::

### 内存管理

优化内存占用

- 解除引用 不用的数据设置为`null`
- 通过 `const` 和 `let` 声明 提升性能
- 避免内存泄漏 意外声明全局变量

::: tip 注意
接触变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。为促进内存回收，全局对象，全局对象的属性和循环引用，都应该在不需要时解除引用。
:::

## 基本引用类型

引用类型：把数据和功能组织到一起的结构

::: tip 注意
函数也是一种引用类型
:::

### Date

`Date.parse()`：接收表示日期的字符串参数，转换为表示该日期的毫秒数

`Date.UTC()`

格式化日期方法

### RegExp

> 详情见 [正则表达式](http://iyuwb.cn/boke/JavaScript/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html)

### 原始值包装类型

Boolean，Number 和 String

```js
let s1 = "some text";
let s2 = s1.substring(2);

// 相当于
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;
```

> 以上行为可以让原始值拥有对象的行为（方法等等）。对于布尔值和数值而言，以上三步也会在后台发生，只不过使用 Boolean 和 Nunber 包装类型

::: details 点击查看代码

```js
// 使用new调用原始值包装类型的构造函数，与调用同名的转型函数不一样
let value = "25";
let number = Number(value); //转型函数
console.log(typeof number); //number

let obj = new Number(value); //构造函数
console.log(typeof obj); //object
```

:::

### Boolean

Boolean 的实例会重写 valueOf()方法，返回一个原始值 true 或者 false，toString() 方法被调用时也会被覆盖，返回字符串 true 或者 false。

```js
let obj = new Boolean(false);
console.log(obj && true); //true
```

### Number

Number 类型提供了几个用于将数值格式化为字符串的方法

- `toFixed()`:返回包含指定小数点位数的数值字符串，该方法会四舍五入。位数不够会自动填充 0。
- `toExponential()`：与`toFixed()`基本一直，但是返回科学计数法表示的数值字符串，接受一个参数表示结果中小数的位数。

::: details 点击查看代码

```js
var num = 123.126;
console.log(num.toFixed(2)); //123.13
console.log(num.toFixed(6)); //123.126000

console.log(num.toExponential(2)); //1.23e+2
console.log(num.toExponential(6)); //1.231260e+2
```

:::

`Number.isInteger()` （ES6 新增）：用来判断一个舒适是否保存整数

### String

> 每个 String 对象都有一个 length 属性，表示字符串中字符的数量
> JavaScript 字符串有 16 位 Code Unit 组成。每 16 位码元对应一个字符。

- `charAt()`：返回指定索引位置的字符。
- `charCodeAt()`：返回指定索引位置的字符的字符编码
- `fromCharCode()`：返回根据指定 UFT-16 码创建的字符串，可以接受多个数值

::: tip 注意

代理对(使用两个 16 位码元)编码字符：可以使用`codePointAt()`和`fromCodePoint()`代替
:::

字符串操作方法

- `concat()`：拼接多个字符串
- `slice()`：提取子字符串，第一个参数位开始，第二个参数位结束，可以为负数（从字符串尾部往前计数）
- `substring()`：与`slice()`一致，第二个参数为负值时，将转换成 0
- `substr()`：提取子字符串，第一个参数位开始，第二个参数用提取的长度

以上方法都不会更改原本字符串，只会返回一个新的字符串

字符串位置方法

- `indexOf()`从字符串开头开始搜索传入的字符串，并返回位置，没有找到返回-1
- `lastIndexOf()`：从字符串末尾开始搜索传入字符串，并返回位置，没有找到返回-1

字符串包含方法（ES6 新增）

用于判断字符串中是否包含另一个字符串的方法

- `startsWith()`：检查开始于索引 0 的匹配项，第二个参数表示开始搜索的位置
- `endsWith()`：检查开始于索引(string.length -substring.length)的匹配项
- `includes()`：检查整个字符串，第二个参数表示开始搜索的位置

::: details 点击显示代码

```js
var str = "qweasd";
console.log(str.startsWith("qwe")); //true
console.log(str.startsWith("qwe", 1)); //false
console.log(str.startsWith("we", 1)); //true

console.log(str.endsWith("asd")); //true

console.log(str.includes("we", 1)); //true
```

:::

去除字符串两端空格符

- `trim()`：去除字符串两端的空格，返回一个新的字符串
- `trimLeft()`：去除字符串中左边的空格
- `trimRight()`：去除字符串中右边的空格

字符串大小写转换

- `toLowerCase()`：转换小写
- `toLocaleLowerCase()`：转换小写
- `toUpperCase()`：转换大写
- `toLocaleUpperCase()`：转换大写

字符串正则匹配

> 详情见 正则方程式

其他方法

- `repeat()`：接受一个整数参数，将当前字符串复制多少次，并返回拼接字符串
- `padStart()`：接受一个整数参数，复制字符串，如果长度不够会填充字符，第二个参数为填充字符（默认为空格）
- `padEnd()`：与`padStart()`基本一致，填充字符是，一个填充在开始，一个填充在结束

- `localeCompare()`：两个字符串 对比字母表，字母表在前返回-1，在后返回 1，相等则返回 0

::: details 点击查看代码

```js
var str = "yewen";

console.log(str.padStart(10, "?")); //?????yewen
console.log(str.padEnd(10, "?")); //yewen?????
```

:::

字符串迭代与解构

> 字符串的原型上暴露了一个迭代器方法，表示可以迭代字符串中的每个字符

> 可以使用 for-of 语句

字符串可以使用解构语法

```js
let str = "abc";
console.log(...str); //a b c
console.log([...str]); //[ a , b , c ]
```

### 单例内置对象

> 内置对象：任何有 ECMAScritp 实现提供、与宿主环境无关，并在 ECMAScritp 程序开始执行时就存在的对象。

> 包括：Object，Array 和 String。以及 Global 和 Math

### Global

> 兜底对象：所针对的是不属于任何对象的属性和方法。

前面介绍的函数，包括 `isNaN()`、`isFinite()`、`parseInt()`和 `parseFloat()`，实际上都是 Global 对象的方法

URl 编码方法

- `encodeURI()`：对 URL 进行编码转换有效的 UTL 不能包含的字符，比如空格
- `encodeURIComponent()`：编码所有非标准字符
- `decodeURI()`
- `decodeURIComponent()`

eval()方法

> 一个完整的 ECMAScript 解释器，接收一个参数，即一个要执行的字符串

- eval() 定义的任何变量和函数都不会被提升

Global 对象属性

### window

> 浏览器将 window 对象实现为 Global 对象的代理，因此全局作用域中声明的变量和函数都变成了 window 属性

### Math

属性

方法

舍入方法

- `Math.ceil()` 向上舍入取整
- `Math.floor()` 向上舍入取整
- `Math.round()` 四舍五入取整
- `Math.fround()` 返回数值最接近的单精度浮点值表示

`random()`方法：返回 0~1 范围内的随机数，包括 0 但是不包括 1

## 集合引用类型

### Object

> 对象字面量`{}` 出现表达式上下文。表示期待返回值的上下文

> 语句上下文：if 等语句 `{}`中

### Array

> 一组有序的数据，每个曹伟可以存储任意类型的数据

`Array.from()`和 `Array.of()`(ES6 新增方法)

- `Array.from()`用于将类数据结构转换成为数组实例
  - 第二个参数可以是个增强函数，
  - 第三个参数为映射增强函数的 `this`指向
- `Array.of()`用于把一组参数转成数组

数组空位

创建空位数组：`let arr= [,,,,,]`

:::tip 注意
ES6 新增方法普遍将这些空位当成存在的元素，只不过值为 `undefined`

ES6 之前的方法则会忽略这个空位
:::

数组索引：可以修改

检测数组

- `value instanceof Array`
- `Array.isArray()`

迭代器方法

- `keys()` 返回数组索引的迭代器
- `values()` 返回数组元素的迭代器
- `entries()` 返回索引/值对的迭代器

可以适用 ES6 中的解构操作

```js
let arr = ["yewen", "yevin"];
for (let [index, item] of arr.entries()) {
  console.log(index);
  console.log(item);
}
```

复制和填充方法(ES6 新增)

- `copyWithin()` 批量复制
- `fill()` 填充数组
