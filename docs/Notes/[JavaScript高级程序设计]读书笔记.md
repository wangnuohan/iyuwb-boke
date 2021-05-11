# [JavaScript 高级程序设计]读书笔记

## 浏览器内核

- Chrome：Blink、V8
  > Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- Firefox：Gecko、SpiderMonkey
- Safari：Webkit、JavaScriptCore
- 微软：Trident、EdgeHtml、Cha kra

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

### let 和 var 和 const

let

- let 声明的范围是块作用域，var 声明的范围是函数作用域
- let 不允许同一个块作用域中出现多次声明，对多次声明的报错不会因为混用 let 和 var 而受影响
- let 每次迭代声明一个变量实例的行为适用于所有风格的 for 循环 包括 for in 和 for of

const

- const 声明限制只适用于他指向的变量引用。简单来说就是只限制简单数据类型，不限制引用类型数据的修改，只限制引用类型的引用地址不可改变
- const 不能用来声明迭代变量，因为迭代变量会自增

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

let 声明的变量不会在作用域中被提升。

在 let 声明之前的执行瞬间被称为“暂时性死区”，在此阶段引用任何后面才声明的变量都会报错。

### 全局声明

var 在全局作用域中声明的变量会成为 window 的属性，而 let 声明的则不会。

## 数据类型

简单数据类型（原始类型）：undefined，Null，Boolean，Number，String 和 Symbol（符号），以及后面 ES 标准加的 bigint。

复杂数据类型：Object

### typeof 操作符

会返回以下字符串之一（typeof 不能区分 object 和 null，并且不能细致区分 object）：

- undefined 表示值未定义
- boolean 表示布尔值
- string 表示字符串
- number 表示数值
- object 表示对象或者 null
- function 表示函数
- symbol 表示符号

> null 被认为是一个空对象的引用，所以为 object

### undefined

> 表示使用 var 或 let 声明了变量但是没有初始化值，就相当于给变量赋值了 undefined。

::: tip 注意
undefined 值是由 null 值派生而来的，表面相等
:::
::: details 点击显示代码

```js
console.log(undefined == null); //true
```

:::

### null

> 任何时候，变量保存对象，而当时又没有值可以保存是，就可以用 null 来填充变量

### Boolean

将一个其他类型的值转换为布尔值时，可以调用特定的 `Boolean()` 转型函数

::: tip 注意
转换规则：除了布尔类型的 false ，"" (空字符串)，0，NaN，null，undefined 会转换成 false 之外，其他数值皆转换为 true
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
最小为 Number.MIN_VALUE,最大为 Nunber.MAX_VALUE
超出范围会转为特殊值，征服无穷大（infinity），无法进行任何运算

### NaN

> 特殊值，意思是不是数值。用于表示本来要返回数值的操作失败了

> 可以用`isNaN`判断是否是 NaN

::: tip 注意
NaN 不等于包括自己本身在内的任何值
:::

### 数值转换

`Number()`转换规则：

- 布尔值：false 为 0，true 为 1
- 数值，直接返回
- null，返回 0
- undefined，返回 NaN
- 字符串，空字符串返回 0，其他只返回数字型字符串，带有正负号与小数点的都可以返回数值
- 对象，调用 valueOf()方法，在按照上述对比
- 除此之外的字符返回 NaN

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

`parseFloat()`与 parseInt 规则基本一直，唯一区别为前者可以检测到第一个小数点返回浮点数，但是检测到第二个小数点的时候就会无效了直接返回值。

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

`toString()`：可以将数值布尔值对象和字符串值转成字符串。可接收传值，转换数字的进制。但是不能转 null 和 undefined
可以适用`String()`来转换 unll 和 undefined

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

## 操作符

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
- 有一个操作数为 null,NaN 或者 undefined，则返回 null，NaN 或者 undefined

#### 逻辑与（||）

当操作数是布尔值：两个操作数有一个为真则为真

当操作数不是布尔值：

- 当第一个操作数位对象，返回第一个操作数
- 当第一个操作数求值为 false，则返回第二个操作数
- 当二个操作数是对象，则返回第一个操作数
- 有一个操作数为 null,NaN 或者 undefined，则返回 null，NaN 或者 undefined

### 关系操作符

::: tip 注意

如果操作数都是数值，则执行数值比较。

如果操作数都是字符串，则逐个比较字符串中对应字符的编码。

如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。

如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。

如果有任一操作数是布尔值，则将其转换为数值再执行比较

:::

### 相等操作符

::: tip 注意 （==）

如果任一操作数是布尔值，则将其转换为数值再比较是否相等。false 转换为 0, true 转换为 1。

如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。

如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较。在进行比较时，这两个操作符会遵循如下规则。

- null 和 undefined 相等。

- null 和 undefined 不能转换为其他类型的值再进行比较。

- 如果有任一操作数是 NaN，则相等操作符返回 false，不相等操作符返回 true。记住：即使两个操作数都是 NaN，相等操作符也返回 false，因为按照规则，NaN 不等于 NaN。

如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true。否则，两者不相等。

:::

## 语句

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

## 函数

函数返回值
:::tip 注意
最佳实践是函数要么返回值，要么不返回值。只在某个条件下返回值的函数会带来麻烦。

不指定返回值的函数实际上会返回特殊值 undefined。
:::

### 严格模式下对函数有一些限制

:::tip 注意

- 函数不能以 eval 或 arguments 作为名称；
- 函数的参数不能叫 eval 或 arguments；
- 两个命名参数不能拥有同一个名称。

:::

:::tip 注意
ECMAScript 中函数的参数就是局部变量。
:::

## 变量作用域和内存

instanceof 判断类型
