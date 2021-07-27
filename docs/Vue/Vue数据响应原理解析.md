# Vue 数据响应原理解析

## defineProperty 数据劫持

- 使用`defineProperty`劫持 `vm` 中的数据复制给 `data` 数据，同时更新到视图
- 可以在控制台，设置`vm.msg`的值查看视图更新，以及 `data` 值改变

```html
<div id="app">123</div>
<script>
  const data = {
    msg: "",
  };
  const vm = {};
  //数据劫持
  Object.defineProperty(vm, "msg", {
    //获取数据
    get() {
      return data.msg;
    },
    //设置数据
    set(val) {
      //数据没有改边不修改
      if (val === data.msg) return;
      //设置数据
      data.msg = val;
      //更新视图绑定数据
      document.querySelector("#app").textContent = val;
    },
  });
</script>
```

## defineProperty 劫持多个数据

```html
<div id="app">123</div>
<script>
  const data = {
    msg: "",
    name: "",
  };
  const vm = {};
  function proxyData(data) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(vm, key, {
        //获取数据
        get() {
          return data[key];
        },
        //设置数据
        set(val) {
          //数据没有该边不修改
          if (val === data[key]) return;
          //设置数据
          data[key] = val;
          //更新视图绑定数据
          document.querySelector("#app").textContent = val;
        },
      });
    });
  }
  proxyData(data);
</script>
```

## 使用代理 Proxy 实现

- 使用 Proxy 构造函数创建,构造函数接受两个参数：
  - 目标对象
  - 处理程序对象
- 两个参数缺一不可，不然会报错
- 如果创建空代理，可以传一个`{}`

```html
<div id="app">123</div>
<script>
  const data = {
    msg: "",
    name: "",
  };
  const vm = new Proxy(data, {
    //获取数据
    get(target, key) {
      return data[key];
      // return Reflect.get(...arguments);  //使用反射API
    },
    //设置数据
    set(target, key, val) {
      //数据没有该边不修改
      if (val === data[key]) return;
      //设置数据
      data[key] = val;
      //更新视图绑定数据
      document.querySelector("#app").textContent = val;
    },
  });
</script>
```

## 发布订阅模式

- 模仿 Vue 事件总线

```html
<script>
  class Vue {
    constructor() {
      //用来存储订阅者信息以及事件，即type类型以及所属函数事件
      this.subs = {};
    }
    $on(type, fn) {
      //添加订阅者以及事件
      if (!this.subs[type]) {
        this.subs[type] = [];
      }
      //添加函数事件
      this.subs[type].push(fn);
    }
    $emit(type) {
      //查看订阅者是否存在
      if (this.subs[type]) {
        //获取除去type之外的传参
        let [, ...args] = [...arguments];
        //循环调用函数
        this.subs[type].forEach((fn) => fn(...args));
      }
    }
  }
  const vm = new Vue();
  vm.$on("zhijian", function() {
    console.log("zhijian");
    console.log([...arguments]);
  });
  vm.$emit("zhijian", 1, 2, 3);
  //zhijian
  //(3) [1, 2, 3]
</script>
```

## 观察者模式

```html
<script>
  //观察者模式
  class Subject {
    constructor() {
      //存储观察者以及更新方法
      this.observerLists = [];
    }
    //添加观察者
    addObs(obs) {
      //判断是否存在观察者以及更新方法
      if (obs && obs.update) {
        this.observerLists.push(obs);
      }
    }
    //通知观察者
    notify(type) {
      this.observerLists.forEach((obs) => {
        obs.update();
      });
    }
    //清空观察者
    empty() {
      this.observerLists = [];
    }
  }
  //定义观察者
  class Observer {
    update() {
      //事件更新需要处理逻辑
      console.log("更新事件");
    }
  }

  let sub = new Subject();
  //新建观察者
  let o1 = new Observer();
  let o2 = new Observer();
  //添加观察者
  sub.addObs(o1);
  sub.addObs(o2);
  //通知观察者
  sub.notify();
</script>
```

## 模拟 Vue 响应原理

> 实现一个简洁版 vue

### vue.js

> 获取 `el`,`data`。通过`proxyData` 把 `data` 的属性注册到 `Vue`，并且监听 `setter` 和 `getter`

```js
```

### observer.js

> 把 data 中的属性变成响应式加在自己身上
