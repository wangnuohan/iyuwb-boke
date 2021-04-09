---
sidebar: auto
---

# JavaScript深入理解call，apply以及bind的区别和用法

## call和apply的共同点

> 都能改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行

注意：调用`call`和`apply`的对象，必须是一个`Function`是个函数。

## call和apply的区别

两者的区别，主要体现在参数的写法：

### call的写法

```javascript
Function.call(obj,params,params1,params2...)
```

注意：

- 调用`call`的对象，必须是个函数`Function`

- `call`的第一个参数，是一个对象，`Function`的调用者，将会指向这个对象，如果不穿，则默认认为全局对象`window`。

- 第二个参数开始，可以接受任意个参数，每个参数会映射到相应位置的`Function`的参数上，但是如果将所有参数作为数据传入，只会映射到`Function`对应的第一个参数上，之后的参数都为空。

  

```javascript
function func(a,b,c){
}

func.call(Obj,1,2,3)
//func 接收到参数 1，2,3
func.call(Obj,[1,2,3])
//func 接收到参数 [1,2,3],undefined,undefined
```

### apply的写法

```js
Function.call(Obj,[params,params1,params2])
```

注意：

- 调用`apply`的对象，必须是个函数`Function`
- `apply`的第一个参数，是一个对象，`Function`的调用者，将会指向这个对象，如果不穿，则默认认为全局对象`window`。和`call`的第一个参数规则一样。
- 第二个参数，必须是数组或者是类数组，它们会被转换成类数组，传入`Function`中，并且会被映射到`function`对应的参数上。和`call`之间最大的区别就是这里。

```javascript
function func(a,b,c){
}

func.apply(Obj,[1,2,3]) //接收到参数实际上是1,2,3

fun.apply(Obj,{
	0:1,
    1:2,
    2:3,
    length:3
})
// 接收到实际参数是 1,2,3
```

## 类数组(arrayLike)

> 具有与数组特征类似的对象
>
> 1.可以通过角标调用。比如`array[0]`
>
> 2.具有长度属性length。
>
> 3.可以通过`for`循环 ，进行遍历



```javascript
let arrayLike={
	0:1,
	1:2,
	2:3,
	length:3
}
```

常见的类数组：

​	获取DOM节点的方法，返回值是一个类数组

​	在一个方法中适用arguments获取到的所有所有参数，也是一个类数组

注意：

> ​	类数组无法适用 `forEach` `splice` `push` 等数组原型链上的方法

## call和apply的用途

### call的适用场景

**对象的继承**

```js
function Person() {
 this.type = 'ren'
 this.say = function () {
  console.log('i am ' + this.type)
 }
}

function Child() {
 Person.call(this)
}
let a = new Child()
a.say()
console.log(a.type)
```

child通过call方法，集成了



​	

​	

