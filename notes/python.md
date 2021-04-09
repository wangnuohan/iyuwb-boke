---
sidebar: auto
---

# Python

## 输出

- 文本内容   `print()`
- 新建文本  外部输出文件

```python
text = 'hello world'
ftp = open('H:/demo.txt', 'a+')
#a+   文件 不存在就创建  存在就在后面追加
print(a, file=text)
ftp.close()
```

## 输入

- `input()`函数

```python
present =input('你叫什么名字')
#你叫什么名字？（--输入）yewen
#yewen
a = input('加数：')
b = input('第二个加数')
print(int(a)+int(b))
```

## 转义字符

- `\n  ` 转行  -->   newline
- `\t ` 空格 table
- `\r ` 回车 
- `\b `  退一格
- `\ ` 转义字符

## 二进制语字符编码

- 统一字符编码 Unicode 
  - ASCII码
  - GB2312
  - GBK
  - UTF-8

**字符编码转换**

```python
print(chr(20056))	#乘
print(ord('乘'))		#20056
```

## 标识符和保留字

### 标识符

- 变量  函数 类 模块 和其他对象的名字就叫 标识符
- 规则：
  - 字母数字下划线
  - 不能数字开头
  - 区分大小写
  - 不能是保留字

### 保留字

```python
#输出打印 保留字
import keyword
print(keyword.kwlist)
```

```python
['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

## 变量

三部分：

- 标识：储存内存地址，使用内置函数`id(obj)`获取
- 类型：数据类型，使用内置函数type`(obj)`获取
- 值：变量多次赋值之后 ，变量会重新指向新的空间

```python
name = '于文博'
print(name, id(name), type(name))
name = '于文博1'
print(name, id(name), type(name))

#于文博 1777235516464 <class 'str'>
#于文博1 1777235685072 <class 'str'>
```

## 数据类型

### 常用的数据类型

- 整数类型:  `int` : `10`
- 浮点数类型：`float` :   `1.22`
- 布尔类型：`bool` :`True false`
- 字符串类型：`str`: ` '123,heihei,haha'`

### 整数类型

- 可以表示整数，负数和0
- 整数可以表示为二进制，十进制，八进制，16进制
  - 十进制：`1690`
  - 二进制：以`0b`开头`0b10101012`
  - 八进制：以`0o`开头`0o176`
  - 十六进制：以`0x`开头`0x14ef`

### 浮点类型

- 存在不精确

```python
#存在不精确
print(1.1+2.2)
#3.3000000000000003

#调整不精确
from decimal import Decimal
print(Decimal('1.1')+Decimal('1.2'))

#3.3
```

### 布尔类型

- 用来表示真假的值 `True False`  
- 布尔值可以转化成整数   `True+1`   `2`   `False+1`  `1`

### 字符串类型

```python
str = '哈哈哈哈哈1'
str1 = "哈哈哈哈哈哈2"
str2 = """哈啊哈哈3
哈哈哈啊"""
print(str, str1, str2)
# 三个双引号  可以换行

#哈哈哈哈哈1 哈哈哈哈哈哈2 哈啊哈哈3
#哈哈哈啊
```

### 数据类型转换

- `str(int)`  转换成字符串类型   
- `int(str)`  转成乘整数类型   
  - 转float类型，取整数部分，舍掉小数部分
  - 可以转str整数数字串
  - 不可以转str小数串
- `float(str)`   转成浮点数类型
  - 数字型字符串可以转成浮点类型
  - 文字类字符串无法转成浮点类型
  - 整数类型转换成浮点类型 `10.0`

```python
name = 'yewen'
age = 18
print('姓名：'+name+'年龄'+age+'岁')
#会报错   can only concatenate str (not "int") to str

#正确写法 =============================
name = 'yewen'
age = 18
print('姓名：'+name+'年龄'+str(age)+'岁')

#yewen年龄18岁
```

## 注释

### 单行注释

- 以`#`开头，直到换行为止

### 多行注释

`"""    """`  三个双引号

### 编码声明

`#coding:gbk`  默认是   `utf-8`

## 运算符

### 算术运算符

#### 标准算术运算符

- 加`+`
- 减`-`
- 乘`*`
- 除`/`
- 整除运算`//`  运算结果为整数（不会四舍五入）

```python
print(14//5)  #2
print(-14//5) #-3 一正一负 向下取整
print(-14//-5) #2  
```

#### 取余运算符

- `%`

```python
print(14 % 5)  # 4
print(14 % -5)  # -1
print(-14 % -5)  # -4

#公式 余数=被除数-除数*商
```

#### 幂运算符

`**`

- 执行顺序 从右到左
- 链式赋值 `a=b=c=20`
- 参数赋值  
  - `+=   a+=1 --> a=a+1`
  - `-=  a-=1 --> a=a-1`
  - `*=  a*=1 --> a=a*1`
  - `/=  a/=1 --> a=a/1`
  - `//=`
  - `%=`

- 解包赋值
  - `a,b,c=10,20,30`

- 交换赋值
  - `a,b=b,a`

### 比较运算符

- 比较运行算的结果为 布尔类型 `True False`
  - `<,>,<=,>=,==,!=,===`
  - `==`：比较两个对象的值
  - `is`：比较两个对象的标识 （内存地址）
  - `is not`：比较两个对象的标识（内存地址） 和`is`相反

```python
a = 10
b = 10
print(a == b)
print(a is b)
print(a is not b)
print(id(a), id(b))

#True
#True
#False
#2130663270992 2130663270992
```

### 布尔运算符

- `and`： 与运算  都为True才为True
- `or`：  或运算  一个为 True即为True
- `not`： 对bool类型的操作数 取反
- `in`：  是否存在于
- `not in`：是否不存在于

### 位运算符

- 将数据转为2进制
- `&`：对应数都为1才为1，否则为0
- `|`：对应数都为0才为1，否则为1
- `<<`：高位溢出设计，低位补0  （1位相当于乘于2）
- `>>`：低位溢出设计，高位补0 （1位相当于除于2）

### 运算符优先级

- 算术运算

  - `**`
  - `*，/，//，%`
  - `+，-`

- 位运算

  - `<<，>>`
  - `&`
  - `|`

- 比较运算

  - `>,<,>=,<=,==,!=`

- 布尔运算

  - `and`
  - `or`

- 赋值运算符

  - `=`

    

## 对象的布尔值

- 内置函数` bool() `获取对象的布尔值
- 对象的布尔值为False:

- - False
  - 数值0
  - None
  - 空字符串
  - 空列表 
  - 空元组 
  - 空字典
  - 空集合

## 组织结构

计算机的流程控制

### 顺序结构  

- 从上到下顺序执行代码，之间无任何判断和跳转，直到程序结束

### 选择结构

- 根据判断条件选择性执行部分代码

- 90<=demo<=100 （条件表达式可以简写）

- `if 条件表达式：`
  - `条件执行体`
  - `elif 条件表达式：`
  - `条件执行体`
  - `else`
  - `条件执行体 `

- 可以嵌套 `if`判断
- 需要注意 同一级` if elif else `需要格式化代码对齐
- 简写：

- - `条件执行体  if 条件 else 条件执行体`

- - `a if a > b else `

```python
#正常写法
a = int(input('请输入第一个数字：'))
b = int(input('请输入第二个数字：'))
if a > b:
    print('a>b')
else:
    print('a<b')
#简化写法
print(a if a > b else b)
```

#### pass语句

- pass语句，什么都不做，占位符

### 循环结构

`while`

​	`	while` `条件表达式`：

​		`循环执行体`

```python
a = 1
num = 0
while a < 10:
    a += 1
    num += a
print(num)
# 54
```

`for in `

​	`for` `自定义的变量` `in` `可迭代对象`：

​		`循环执行体`

- 不需要自定义变量 可以将自定义变量写为 "_"
- `break`：结束循环结构 ，通常与分支结构`if`一起使用
- `continue`：结束当前循环，重新进入循环
- 在多重循环中，`break`和`continue`只作用于当前层的循环

循环可以和else连用

`for ···`

`else`



`while ···`
`else`

```python

for item in 'hello':
    print(item)

#  h e l  l  o

#
for item in range(10, 20, 3):
    print(item)
# 10 13 16 19

for _ in range(5):
    print('heihei')
    
#heihei
#heihei
#heihei
#heihei
#heihei

for item in range(5):
    if item >= 2:
        break
    print('heihei')
#heihei
#heihei

for item in range(20):
    if item % 5:
        continue
    print(item)

#0
#5
#10
#15

for item in range(20):
    if item % 5:
        continue
    print(item)
else:
    print('else')
#0
#5
#10
#15
#else

#双重循环 九九乘法表
i = 1
for item in range(1, 10):
    for it in range(1, i+1):
        print(str(it)+'*'+str(item)+'='+str(item*it), end='\t')
    else:
        print(' ')
        i += 1
        
#1*1=1    
#1*2=2   2*2=4
#1*3=3   2*3=6   3*3=9
#1*4=4   2*4=8   3*4=12  4*4=16
#1*5=5   2*5=10  3*5=15  4*5=20  5*5=25
#1*6=6   2*6=12  3*6=18  4*6=24  5*6=30  6*6=36
#1*7=7   2*7=14  3*7=21  4*7=28  5*7=35  6*7=42  7*7=49
#1*8=8   2*8=16  3*8=24  4*8=32  5*8=40  6*8=48  7*8=56  8*8=64
#1*9=9   2*9=18  3*9=27  4*9=36  5*9=45  6*9=54  7*9=63  8*9=72  9*9=81
```

## 内置函数

- `print() `：输出
- `input() `：输入
- `range(start,end,step) `：生成一个整数序列，返回值是一个迭代器对象
  - 从start开始，从end结束但是不包括end，步长为step
  - `range(end)`：只传一个参数
    - 创建一个（0，end）的整数序列，步长为1
  - `range(start,end)`：穿两个参数
    - 创建一个（start，end）的整数序列，步长为1
  - `range(start,end，step)`：穿两个参数
    - 创建一个（start，end）的整数序列，步长为step
  - `in`和`not in` 可判断整数序列中是否存在

```python
#内置函数  range
print(list(range(5)))
print(list(range(5, 10)))
print(list(range(5, 10, 2)))

#[0, 1, 2, 3, 4]
#[5, 6, 7, 8, 9]
#[5, 7, 9]
```

- `zip()`：打包，将两个可迭代对象作为参数，打包成一个元组，然后返回有这些元组组成的列表

```python
items = ['yewen', 'zhijian', 'wenbo']
id = ['18', '23', '25']
s = {item: price for item, price in zip(items, id)}
print(s)

#{'yewen': '18', 'zhijian': '23', 'wenbo': '25'}
```

## 列表

> `lst=['123','345',123,'哈哈']`

- 类似于JavaScript中的数组，储存的是一个对象的引用地址
- 列表特点：

- - 列表元素按顺序排序
  - 索引映射唯一数据
  - 列表可以储存重复数据
  - 任意的数据类型可以进行混存
  - 根据需要动态分配和回收内存

### 创建和删除

- 使用中括号： 
  - `lst=['123','345',123,'哈哈']`
- 使用内置函数`list()`：
  - `lst=lsit(['123','345',123,'哈哈'])`

### 列表查询

- 获取列表指定元素索引
  - `index()`
  - 如果列表中有相同元素，只返回第一个元素的索引
  - `lst.index('demo')`查找全部列表
  - `lst.index('demo',1,3)`在指定的索引下查找包括1不包括3

### 元素的增删改查

- 获取列表元素:
  - `列表名[索引数]`：正数从0开始，负数从-1开始
- 获取列表中的多个元素
  - 切片：返回值是一个剪切列表片段，一个新的列表
  - `列表名[start:end:step]`
    - `start`起始索引，`end`结束索引，`step`切片步数，包含`start`不包含`end`
    - 默认`step`为`1`
    - `step`为正数：从`start`开始往后切
    - `step`为负数：从`start`开始往前切

```python
lst = [11, 22, 33, 44, 55, 66, 77, 88]
print(lst[5:: -1])#逆序切割
print(lst[::-1]) #逆序排列
print(lst[2:4])
print(lst[2:8:2])
print(lst[8:2:-2])
#[66, 55, 44, 33, 22, 11]
#[88, 77, 66, 55, 44, 33, 22, 11]
#[33, 44]
#[33, 55, 77]
#[88, 66, 44]
```

- 判断元素在列表中是否存在
  - `元素 in 列表`
  - `元素 not in 列表`
  - 返回结果为布尔类型 `True` `False`

- 列表元素的增加操作
  - `append()` 在列表末尾添加一个元素
  - `extend()`  在列表末尾至少添加一个元素 
    - `lst.extend([123,123,'hello'])`
  - `insert(下标,元素)`  在列表任意位置上添加一个元素
    - `lst.insert(1,90)`
  - `切片`  在列表任意位置上添加至少一个元素
    - `lst[1:]=lst2`

- 列表元素的删除操作
  - `remove()`  从列表中移出一个元素，如果有多个，只移除第一个
  - `pop()`  根据索引移除元素
    - 不指定参数，删除列表中最后一个元素
  - `切片`  在列表任意位置上删除至少一个元素，但会产生额外的列表
    - `new_lst=lst[1:3]`
    - `lst[1:3]=[]`
  - `clear()`  清除列表
  - `del()`  删除列表

- 列表元素的修改操作
  - `lst[2]=100`  直接通过索引修改、
  - `lst[2:3]=[10,20]`

### 元素排序

- `sort()`  默认从小到大排序  在原本列表上操作
  - `sort(reverse=True)`    从大到小排序
- `sorted()` 默认从小到大排序  会产品一个新列表
  - `sorted(reverse=True)`

### 列表推导式

- 生成列表的公式
  - `lst=[i for i in range(1,10)]`
  - `st=[i*i for i in range(1,10)]`

## 字典

- 数据结构之一
- 以键值对的方式存储数据，字典是一个无序的序列
- `sores={'张三':'100','李四':'200','王武':'300'}`

### 创建字典

- 直接创建花括号
  - `sores={'张三':'100','李四':'200','王武':'300'}`
- 使用内置函数 `dict()`
  - `sores = dict(name='jack',age=20)`

### 字典操作

- 获取字典的值：
  - `[]`直接获取 `sores['name']`
    - 不存在会报错
  - `get()`方法  `sores.get('name')`
    - 不存在不会报错，会输出`None`
  - `sores.get('name','wenbo')`
    - 如果不存在给一个默认值`wenbo`

```python
s = {'张三': '1010', '耶温': '200'}
print(s)

s1 = dict(name=100, age=200)
print(s1)
print(s1['name'])
print(s.get('张三'))

#{'张三': '1010', '耶温': '200'}
#{'name': 100, 'age': 200}
#100
#1010
```

- 字典键的判断
  - `in `
    - `'张三' in s`
  - `not in `
    - `'张三' not in s`
- 删除字典指定的键值对 
  - `del scores['张三']`
- 清空字典的元素
  - `scores.clear()`
- 新增字典的元素
  - `scores['王五']='666'`
- 修改字典的元素
  - 与新增操作一样
  - `scores['王五']='666'`
- 获取字典视图
  - `keys()` 获取字典中所有的`key`
  - `alue()` 获取字典中所有的`value`
  - `items()` 获取字典中所有的`key`，`value`对

```python
keys = s.keys()
print(keys, type(keys))
values = s.values()
print(values, type(values))
print(list(keys)[0], list(values))

#dict_keys(['张三', '耶温']) <class 'dict_keys'>
#dict_values(['1010', '200']) <class 'dict_values'>
#张三 ['1010', '200']

print(s.items(), list(s.items()))
#['张三', '耶温'] ['1010', '200']
#dict_items([('张三', '1010'), ('耶温', '200')]) [('张三', '1010'), ('耶温', '200')]
```

- 字典元素的遍历
  - `for item in scores:`
  - ``print(item)`

```python
s = {'张三': '1010', '耶温': '200'}
for item in s:
    print(item)
    print(s[item])
    
#张三
#1010
#耶温
#200
```

### 字典的特点

- 字典总所有元素都是`key-value`对，`key`值不允许重复，`value`值可以重复
  - `key`值复，会覆盖前面的
- 字典中元素是无序的
- 字典中key是不可变对象
- 字典可以根据需要动态伸缩
  - 会自动分配内存
- 字典会浪费较大的内存，是一种使用空间换时间的数据结构
  - 查询速度快

### 字典生成式

` {key:value  for key, value  in zip(items, id)}`

```python
items = ['yewen', 'zhijian', 'wenbo']
id = [18, 23, 25]
s = {item+'we': price+1 for item, price in zip(items, id)}
print(s)

#{'yewenwe': 19, 'zhijianwe': 24, 'wenbowe': 26}
```

## 元组和集合

### 元组

- `Python`内置数据之一，是一个不可变序列
  - 不可变序列：字符，元组
    - 没有增删改的操作
  - 可变序列：列表，字典
    - 可以堆序列执行增删改操作
- `t=('wenbo',123,456)`：元组
  - 创建方式：
    - 直接小括号：`t=('wenbo',123,456)`
      - 也可以直接 `t= 'wenbo',123,456` 省略小括号
    - 内置函数：`tuple()`
- 只包含一个元祖的元素需要使用逗号和小括号
  - `t=(10,)`
- 获取元组可以直接需要`[]`获取
  - `t[0]`
- 元组遍历
  - 元组是可迭代对象，所以可以遍历
- 为什么设计成不可变序列:
  - 在多任务环境下，同时操作对象时不需要加锁
  - 在程序中尽量使用不可变序列
- 注意：
  - 元组中储存的对象的引用
    - 如果元组中的对象本身不可变对象，则不能在引用其他对象
    - 如果元组的对象是可变对象，则可变对象的引用不可改变，但数据可以改变
- 空列表：`s=[]`
- 空字典：`s={}`
- 空元组：`s=()`

```python
t = ('ywen', 123, '123')
print(t, type(t))

t1 = tuple(('hiehie', 456, '789'))
print(t1)

t2 = (19,)
print(t2)
print(t[0])
#('ywen', 123, '123') <class 'tuple'>
#('hiehie', 456, '789')
#(19,)
#ywen

```

### 集合

- 内置数据结构,无序
- 与列表，字典一样都属于可变类型的序列
- 集合是没有`value`的字典

#### 集合创建

- 直接`{}` 创建
  - `s={'hello',123,456}`
  - 集合不能重复，重复会被覆盖
- 构造函数`set()`

```python
s=set(range(6))
s=set({1,2,3,4})
s=set([1,2,3,4])
s=set((1,2,3,4))
```

#### 操作集合

- 集合元素判断
  - `in `和` not in`  查看集合中是否存在指定的元素
- 集合元素新增
  - `add()`   `s.add(80)` 一次添加一个
  - `update()` 一次至少添加一个

```python
update({200,300})
update([200,300])
update((200,300))
```

#### 集合元素删除

-  `remove()` `s.remove(10)` 删除一个元素 不存在就报错
-  `discard()` `s.discard(10)` 删除一个元素，不存在不报错 无事发生
-  `pop()` `s.pop()` 随机删除一个元素，不能指定参数

#### 集合的数学操作

- 交集
- 并集
- 差集
- 对称差集