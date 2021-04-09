---
sidebar: auto
---



# Vue3.0

## Vue优点

- **性能快**

  - diff优化

  - 新增静态标记，只比较有静态标志

- 静态提升（hoistStatic）

  - vue2中无论元素是否更新都会重新创建，渲染
  - vue3中对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时复用

- 事件监听器缓存（cacheHandlers）

  - Vue2 onClick会被视为动态绑定，每次都会追踪变化
  - Vue3因为事件是同一个函数，直接复用事件

- SSR渲染

- **按需编译，体积更小**
- **组合API**
  - 入口函数 `setup(){  //main }`
  - 定义变量变量 `let count = ref(0)`
  - 暴露函数 `return {count }`
  - `ref` 函数只能监听简单类型的变化
  - `reactive` 监听复杂类型的变化、
  - `setup()` 执行时机：
    - 执行`setup `函数时候,还没有执行`created`生命周期方法
    - 因此无法使用  `data` 和`methods` 中的变量和方法
    - Vue为了避免错误使用`data`和`methods`中的变量和方法 直接把`setup`函数中`this`改为 `undefined`
  - `setup()`不能是异步的

```vue
<template>
  <h1 @click="wenbo">{{ count }}</h1>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let count = ref(0);
    function wenbo() {
      count.value++;
    }
    return { count, wenbo };
  },
};
</script>


<template>
  <ul>
    <li @click="add" v-for="item in state.stus" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    const state = reactive({
      stus: [
        { id: 1, name: "wenbo", age: 10 },
        { id: 2, name: "yueno", age: 20 },
        { id: 3, name: "zhijian", age: 30 },
      ],
    });
    function add() {
      state.stus.pop();
    }
    return { state, add };
  },
};
</script>
```

- 组合API
  - Composition API
  - Option API

- **更好的Ts支持**
- **暴露自定义渲染API**
- **更先进的组件**

## Vue快速入手

**创建Vue的三种方式**

- **Vue-CLI**
- **Webpack**
- **Vite**
  - Vue 作者开发的一款意图取代webpack的工具
  - 原理是利用ES6的import会发送请求去加载文件的特性，拦截这些请求，做预编辑，省去Webpack冗长的打包时间
  - 安装Vite 
    - `npm i -g create-vite-app`

  - 创建Vue3项目

    - `create-vite-app projectName`

  - 安装依赖运行

    - `cd projectName`
    - `npm i`
    - `npm run dev`



## Vue生命周期

- `beforeCreate` 组件刚被创建，组件的data和methods还没有初始化
- `created`       组件刚被创建，组件的data和methods已经初始化好



## Reactive和Ref

### Reactive概要

- `reactive`是Vue3中提供的实现响应式数据的方法

  - 在Vue2中是通过`defineProperty`来实现的
  - 在Vue3中响应式数据是通过ES6的`Proxy`来实现的
  - 创建一个响应式数据
  - 本质：把传入的数据包装成一个Proxy对象

- **注意点：**

  - `reactive`参数必须是对象`(json/arr)`
    - 如果给`reactive`传递了其他对象
    - 默认情况下修改对象，界面不会更新
    - 想更新，可以通过重新赋值

### Ref概要

- 和`reactive`一样用来实现响应式数据的方法
- `ref`本质：其实还是`reactive`，当我们给`ref`函数传递一个值之后，`ref`函数底层会自动将`ref`转成`reactive` ， `ref(xx)->reactive({value:xx})`

  - 更改数据：`age.value=666`

- 注意：

  - 在`Vue`中使用`ref`的值不需要通过`value`获取
  - 在`JS`中使用`ref`的值必须通过`value`获取

```vue
setup() {
    let a = ref(0);
    function wenbo() {
      a.value = 666;
      //赋值需要 使用变量的 value属性进行赋值
    }
    return { wenbo, a };
  },
  methods: {
    clickWenbo() {
      this.wenbo();
    },
  },
   
```

### reactive和ref的区别

- 如果在`template`里使用的 是`ref`类型的数据，`vue`会自动添加 `.value`

  - `Vue`根据 **数据** 的` __v_isRef`属性判断是否添加 `.value`

- 如果在`template`里使用的 是`reactive`类型的数据，`vue`不会自动添加 `.value`

## 递归监听

- **递归监听**

  - 默认情况下，无论是ref还是reactive都是递归监听
  - 存在的问题

    - 如果数据量很大，非常消耗性能

- **非递归监听**