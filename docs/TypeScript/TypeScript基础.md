# TypeScript 基础
> JavaScript的超集，在JS的基础上，做了一些限制并添加了类型。
- 所有`TypeScript`需要被转换成`js`执行
- 支持ES一些不具备的新特性

## 基础类型
基本语法：
```ts
//定义变量
let 变量名:类型 = 变量值;

//定义方法
function 方法名(参数1:类型,参数2:类型,...):返回值类型{

}
```


### 布尔值
需要使用关键字`boolean`创建
```ts
let isShow:boolean = false
```
### 数字
需要使用关键字`number`创建，可以创建十六进制，二进制，八进制
```ts
let num:number = 6 //十进制
let num1:number=Oxf00d //十六进制
let num1:number=Oo377 //八进制
```
### 字符串
需要使用关键字`string`创建
```ts
let name:string = 'name' 
```

### 数组
定义具体数据类型的数组
```ts
let arr: number[] = [1, 2, 3]
//or
let arr1: Array<number> = [1, 2, 3]
```

### 元组
-   一个已知数量和类型的数组
```ts
let arr:[string,number] = ['1', 2]
```

### 枚举
`enum`枚举是对JavaScript标准数据类型的一个补充
```ts
enum Color { Red, Pink }
console.log(Color.Red) //0
console.log(Color.Pink) //1

//or
enum Color { Red = 1, Pink }
console.log(Color.Red) //1
console.log(Color.Pink) //2

//or
enum Color { Red = 1, Pink = 3 }
console.log(Color.Red) //1
console.log(Color.Pink) //3
```

### 任意值
不清楚变量的具体类型时，可以使用任意值
```js
let demo: any = 'yewen'
demo = false
demo = 123456
console.log(demo) //123456    不会报错
```