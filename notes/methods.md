---
sidebar: auto
---

## 前端常用方法合集

### 返回输入值的数据类型

```js
function type(data) {
  return Object.prototype.toString.call(data);
}
```

### 数组去重

```js
function unique1(arr) {
  return [...new Set(arr)];
}

function unique2(arr) {
  var obj = {};
  return arr.filter((ele) => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  });
}

function unique3(arr) {
  var result = [];
  arr.forEach((ele) => {
    if (result.indexOf(ele) == -1) {
      result.push(ele);
    }
  });
  return result;
}
```

### 字符串去重

```js
String.prototype.unique = function () {
  var obj = {},
    str = "",
    len = this.length;
  for (var i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i];
      obj[this[i]] = true;
    }
  }
  return str;
};

function unique(str) {
  return str.replace(/(\w)\1+/g, "$1");
}
```

### 深拷贝 深克隆

```js
// 无法复制函数
var newObj = JSON.parse(JSON.stringify(obj));

//深克隆
function deepClone(obj, result) {
  var result = result || {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] == "object" && obj[prop] !== null) {
        // 引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) == "[object Object]") {
          // 对象
          result[prop] = {};
        } else {
          // 数组
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop]);
      } else {
        // 原始值或func
        result[prop] = obj[prop];
      }
    }
  }
  return result;
}

// 深浅克隆是针对引用值
function deepClone(target) {
  if (typeof target !== "object") {
    return target;
  }
  var result;
  if (Object.prototype.toString.call(target) == "[object Array]") {
    // 数组
    result = [];
  } else {
    // 对象
    result = {};
  }
  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      result[prop] = deepClone(target[prop]);
    }
  }
  return result;
}
```

### reverse 底层原理和扩展

> reverse 颠倒数组中元素的顺序

```js
Array.prototype.myReverse = function () {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    var temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
```

### 找出字符串中第一次只出现一次的字母

```js
String.prototype.firstAppear = function () {
    var obj = {},
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (obj[this[i]]) {
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }
    for (var prop in obj) {
       if (obj[prop] == 1) {
         return prop;
       }
    }

```

### 找出元素的第 N 级父元素

```js
function parents(ele, n) {
  while (ele && n) {
    ele = ele.parentElement ? ele.parentElement : ele.parentNode;
    n--;
  }
  return ele;
}
```

### 返回元素的第 N 个兄弟节点

```js
function retSibling(e, n) {
  while (e && n) {
    if (n > 0) {
      if (e.nextElementSibling) {
        e = e.nextElementSibling;
      } else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
      }
      n--;
    } else {
      if (e.previousElementSibling) {
        e = e.previousElementSibling;
      } else {
        for (
          e = e.previousElementSibling;
          e && e.nodeType !== 1;
          e = e.previousElementSibling
        );
      }
      n++;
    }
  }
  return e;
}
```

### 判断元素有没有子元素

```js
function hasChildren(e) {
  var children = e.childNodes,
    len = children.length;
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true;
    }
  }
  return false;
}
```

### 封装 mychildren，解决浏览器的兼容问题

```js
function myChildren(e) {
  var children = e.childNodes,
    arr = [],
    len = children.length;
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i]);
    }
  }
  return arr;
}
```

### 在一个元素后面插入元素

```js
Element.prototype.insertAfter = function (target, elen) {
  var nextElen = elen.nextElenmentSibling;
  if (nextElen == null) {
    this.appendChild(target);
  } else {
    this.insertBefore(target, nextElen);
  }
};
```

### 返回当前的时间 年月日 时分秒

```js
function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours() + 1,
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return (
    "" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    hour +
    "时" +
    minute +
    "分" +
    second +
    "秒"
  );
}
```

### 获得滚动条的滚动距离

```js
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}
```

### 获得视口的尺寸

```js
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
```

### 获取任一元素的任意属性

```js
function getStyle(elem, prop) {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop];
}
```

### 绑定事件的兼容代码

```js
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    //非ie和非ie9
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) {
    //ie6到ie8
    elem.attachEvent("on" + type, function () {
      handle.call(elem);
    });
  } else {
    elem["on" + type] = handle;
  }
}
```

### 解绑事件

```js
function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) {
    //非ie和非ie9
    elem.removeEventListener(type, handle, false);
  } else if (elem.detachEvent) {
    //ie6到ie8
    elem.detachEvent("on" + type, handle);
  } else {
    elem["on" + type] = null;
  }
}
```

### 取消冒泡事件的兼容代码

```js
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}
```

### 检验字符串是否是回文

```js
function isPalina(str) {
  if (Object.prototype.toString.call(str) !== "[object String]") {
    return false;
  }
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  console.log(str);
  return str == str.split("").reverse().join("");
}
```

### 兼容 getElementsByClassName 方法

```js
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (
  _className
) {
  var allDomArray = document.getElementsByTagName("*");
  var lastDomArray = [];
  function trimSpace(strClass) {
    var reg = /\s+/g;
    return strClass.replace(reg, " ").trim();
  }
  for (var i = 0; i < allDomArray.length; i++) {
    var classArray = trimSpace(allDomArray[i].className).split(" ");
    for (var j = 0; j < classArray.length; j++) {
      if (classArray[j] == _className) {
        lastDomArray.push(allDomArray[i]);
        break;
      }
    }
  }
  return lastDomArray;
};
```

### 运动函数

```js
function animate(obj, json, callback) {
  clearInterval(obj.timer);
  var speed, current;
  obj.timer = setInterval(function () {
    var lock = true;
    for (var prop in json) {
      if (prop == "opacity") {
        current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
      } else {
        current = parseInt(window.getComputedStyle(obj, null)[prop]);
      }
      speed = (json[prop] - current) / 7;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (prop == "opacity") {
        obj.style[prop] = (current + speed) / 100;
      } else {
        obj.style[prop] = current + speed + "px";
      }
      if (current != json[prop]) {
        lock = false;
      }
    }
    if (lock) {
      clearInterval(obj.timer);
      typeof callback == "function" ? callback() : "";
    }
  }, 30);
}
```

### 弹性运行

```js
function ElasticMovement(obj, target) {
  clearInterval(obj.timer);
  var iSpeed = 40,
    a,
    u = 0.8;
  obj.timer = setInterval(function () {
    a = (target - obj.offsetLeft) / 8;
    iSpeed = iSpeed + a;
    iSpeed = iSpeed * u;
    if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
      console.log("over");
      clearInterval(obj.timer);
      obj.style.left = target + "px";
    } else {
      obj.style.left = obj.offsetLeft + iSpeed + "px";
    }
  }, 30);
}
```

### 封装 myForEach 方法

```js
Array.prototype.myForEach = function (func, obj) {
  var len = this.length;
  var _this = arguments[1] ? arguments[1] : window;
  // var _this=arguments[1]||window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this);
  }
};
```

### 封装 myFilter 方法

```js
Array.prototype.myForEach = function (func, obj) {
  var len = this.length;
  var arr = [];
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
};
```

### 封装 myMap 方法

```js
Array.prototype.myMap = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
};
```

### 封装 myEvery 方法

```js
Array.prototype.myEvery = function (func) {
  var flag = true;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    if (func.apply(_this, [this[i], i, this]) == false) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

### 封装 myReduce 方法

```js
Array.prototype.myReduce = function (func, initialValue) {
  var len = this.length,
    nextValue,
    i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
};
```

### 获取 url 中的参数

```js
function getWindonHref() {
  var sHref = window.location.href;
  var args = sHref.split("?");
  if (args[0] === sHref) {
    return "";
  }
  var hrefarr = args[1].split("#")[0].split("&");
  var obj = {};
  for (var i = 0; i < hrefarr.length; i++) {
    hrefarr[i] = hrefarr[i].split("=");
    obj[hrefarr[i][0]] = hrefarr[i][1];
  }
  return obj;
}
```

### 数组排序

```js
// 快排 [left] + min + [right]
function quickArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [],
    right = [];
  var pIndex = Math.floor(arr.length / 2);
  var p = arr.splice(pIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickArr(left).concat([p], quickArr(right));
}

// 冒泡
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### 原生 js 封装 ajax

```js
function ajax(method, url, callback, data, flag) {
  var xhr;
  flag = flag || true;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHttp");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  };
  if (method == "GET") {
    var date = new Date(),
      timer = date.getTime();
    xhr.open("GET", url + "?" + data + "&timer" + timer, flag);
    xhr.send();
  } else if (method == "POST") {
    xhr.open("POST", url, flag);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }
}
```

### 异步加载 Script

```js
function loadScript(url, callback) {
  var oscript = document.createElement("script");
  if (oscript.readyState) {
    // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (
        oscript.readyState === "complete" ||
        oscript.readyState === "loaded"
      ) {
        callback();
      }
    };
  } else {
    oscript.onload = function () {
      callback();
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}
```

### Cookie 管理

```js
var cookie = {
  set: function (name, value, time) {
    document.cookie = name + "=" + value + "; max-age=" + time;
    return this;
  },
  remove: function (name) {
    return this.setCookie(name, "", -1);
  },
  get: function (name, callback) {
    var allCookieArr = document.cookie.split("; ");
    for (var i = 0; i < allCookieArr.length; i++) {
      var itemCookieArr = allCookieArr[i].split("=");
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1];
      }
    }
    return undefined;
  },
};
```

### 实现 bind 方法

```js
Function.prototype.myBind = function (target) {
  var target = target || window;
  var _args1 = [].slice.call(arguments, 1);
  var self = this;
  var temp = function () {};
  var F = function () {
    var _args2 = [].slice.call(arguments, 0);
    var parasArr = _args1.concat(_args2);
    return self.apply(this instanceof temp ? this : target, parasArr);
  };
  temp.prototype = self.prototype;
  F.prototype = new temp();
  return F;
};
```

### 实现 call 方法

```js
Function.prototype.myCall = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  var result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};
```

### 实现 apply 方法

```js
Function.prototype.myApply = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  if (!arguments[1]) {
    var result = ctx.fn();
    delete ctx.fn;
    return result;
  }
  var result = ctx.fn(...arguments[1]);
  delete ctx.fn;
  return result;
};
```

### 防抖

```js
function debounce(handle, delay) {
  var timer = null;
  return function () {
    var _self = this,
      _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args);
    }, delay);
  };
}
```

### 节流

```js
function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
```

### 获取 url 上的参数

```js
function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val;
    } else {
      var temp = result[key];
      result[key] = [].concat(temp, val);
    }
  });
  if (!sKey) {
    return result;
  } else {
    return result[sKey] || "";
  }
}
```

### requestAnimFrame 兼容性方法

```js
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
```

### cancelAnimFrame 兼容性方法

```js
window.cancelAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id);
    }
  );
})();
```

### jsonp 底层方法

```js
function jsonp(url, callback) {
  var oscript = document.createElement("script");
  if (oscript.readyState) {
    // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (
        oscript.readyState === "complete" ||
        oscript.readyState === "loaded"
      ) {
        callback();
      }
    };
  } else {
    oscript.onload = function () {
      callback();
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}
```

### 格式化时间

```js
function formatDate(t, str) {
  var obj = {
    yyyy: t.getFullYear(),
    yy: ("" + t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: ("0" + (t.getMonth() + 1)).slice(-2),
    d: t.getDate(),
    dd: ("0" + t.getDate()).slice(-2),
    H: t.getHours(),
    HH: ("0" + t.getHours()).slice(-2),
    h: t.getHours() % 12,
    hh: ("0" + (t.getHours() % 12)).slice(-2),
    m: t.getMinutes(),
    mm: ("0" + t.getMinutes()).slice(-2),
    s: t.getSeconds(),
    ss: ("0" + t.getSeconds()).slice(-2),
    w: ["日", "一", "二", "三", "四", "五", "六"][t.getDay()],
  };
  return str.replace(/([a-z]+)/gi, function ($1) {
    return obj[$1];
  });
}
```

### 验证邮箱的正则表达式

```js
function isAvailableEmail(sEmail) {
  var reg = /^([\w+\.])+@\w+([.]\w+)+$/;
  return reg.test(sEmail);
}
```

### 函数柯里化

```js
//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术

function curryIt(fn) {
  var length = fn.length,
    args = [];
  var result = function (arg) {
    args.push(arg);
    length--;
    if (length <= 0) {
      return fn.apply(this, args);
    } else {
      return result;
    }
  };
  return result;
}
```

### 大数相加

```js
function sumBigNumber(a, b) {
  var res = "", //结果
    temp = 0; //按位加的结果及进位
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || temp) {
    //~~按位非 1.类型转换，转换成数字 2.~~undefined==0
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, "");
}
```

### 单例模式

```js
function getSingle(func) {
  var result;
  return function () {
    if (!result) {
      result = new func(arguments);
    }
    return result;
  };
}
```
