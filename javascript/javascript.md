---
sidebar: auto
---

# JavaScrpit

## ECMAScript6相关

###  var、let、const区别

- `var`：定义变量会挂载到`window`上，变量会被提升
- `let`：定义变量不会挂载到`window`上，变量虽然会被提升，但是不允许访问，访问受限
- `const`：与`let`基本一致，但声明后的变量不允许再次赋值

- - `Object.freeze()` 可以冻结一个对象，对象不能再被修改，添加和删除

### 变量提升

- 变量提升只会把声明挪到作用域顶部
- 为了解决函数间相互调用的情况
- 函数提升高于变量提升

### 暂时性死区

- 在使用 `let`和 `const`定义变量时，在声明之前是不可以使用变量的，在语法上称为暂时性死区

### 原型继承和Class继承

- `class`：本质还行是函数，`class`只是语法糖

```javascript
class Person {}
console.log(Person instanceof Function)   //true
```

- `instanceof`：用来判断一个构造函数的`property`属性所指向的对象是否在另一个要监测对象的原型链上

#### 组合继承-原型链继承

**核心：**

- - 在子类的构造函数中通过`Parent.call(this,)`继承父类的属性
  - 然后改变之类的原型为` new Parent() `来继承父类的函数

**缺点：**

- - 继承父类函数方法的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费

```javascript
function Parent(value) {
 this.name = value
}
Parent.prototype.sayName = function () {
 console.log('我是：' + this.name)
}

function Child(value) {
 Parent.call(this, value)
}
Child.prototype = new Parent()

zhangsan = new Parent('张三')
zhangxiaosan = new Child('张小三')
zhangsan.sayName()   //我是：张三
zhangxiaosan.sayName() //我是：张三
```

#### 寄生组合继承-原型链继承

**对组合继承的优化**

- `Object.create(proto，[propertiesObject])`：创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`

  - `proto`：新创建对象的原型对象

  - `propertiesObjec`： 可选，需要传入一个对象

```javascript
function Parent(value) {
 this.name = value
}
Parent.prototype.sayName = function () {
 console.log('我是：' + this.name)
}

function Child(value) {
 Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
 constructor: {
  value: Child,
  enumerable: false,
  writable: true,
  configurable: true,
 }
})
zhangsan = new Parent('张三')
zhangxiaosan = new Child('张小三')
zhangsan.sayName() //我是：张三
zhangxiaosan.sayName() //我是：张小三
```

#### Class继承

- `class`实现继承核心在于使用`extends`表明继承那个父类，并且在子构造函数中必须调用`super`，这段代码可以看成`Parent.call(this,value)`

## JavaScript内置函数

### escape()

`escape()`：函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

## JavaScript原型链

> 详细见：[JavaScript深入理解之原型链](https://yevin.gitee.io/yiran/boke/javascript-01.html)

## instanceof和typeof

`typeof`：

> 判断一个变量的类型，可以利用`typeof`,来判断`number`，`string`，`object`，`boolean`，function，`undefined`，`symbol`七种类型

- 注意：
  - `typeof`只能判断`object`数据类型为`object`，不能具体到是哪一种`object`
  - `typeof`不能判断`null`，会把`null`判定为`object`
    - 原因：第一版的JavaScript是用32位比特来存储值的，且是通过值的低1位或3位来识别类型的
    - 1：整型（int）
    - 000：引用类型（object）
    - 010：双精度浮点型（double）
    - 100：字符串（string）
    - 110：布尔型（boolean）
    - undefined：用整数−2^30（负2的30次方，不在整型的范围内）
    - null：机器码空指针（C/C++ 宏定义），低三位也是000，和`object`一样，但是在`typeof`源码中没有对`null`进行单独判断，因此出现错误

```javascript
console.log(typeof(null)) //object
```

`instanceof`：

`object instanceof constructor`

> `instanceof` 运算符用来检测 `constructor.prototype `是否存在于参数 `object` 的原型链上。

- 判定一个实例是否属于某种类型
- 判定一个实例是否是其父类型或者祖先类型的实例

```javascript
function Person(){
}
function Child(){
} 
Child.prototype=new Person()
var child=new Child()
var person=new Person()
console.log(person instanceof Person ) //true
console.log(child instanceof Person )  //true
```

`instanceof` 实现原理：

```javascript
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
```

`Object.prototype.toString`

> Object.prototype.toString.call()	一个不错的判断方法，可以对一个变量的类型来进行比较准确的判断

如下：

```javascript

Object.prototype.toString.call(1) // "[object Number]"

Object.prototype.toString.call('hi') // "[object String]"

Object.prototype.toString.call({}) // "[object Object]"

Object.prototype.toString.call([]) // "[object Array]"

Object.prototype.toString.call(true) // "[object Boolean]"

Object.prototype.toString.call(() => {}) // "[object Function]"

Object.prototype.toString.call(null) // "[object Null]"

Object.prototype.toString.call(undefined) // "[object Undefined]"

Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"

```

## call，apply和bind的区别和用法

> 详细见：[JavaScript深入理解call，apply以及bind的区别和用法](https://iyuwb.gitee.io/boke/javascript/javascript-02.html)