---
sidebar: auto
---

## 常用正则

### 昵称：能输入汉字数字字母

```js
/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test()
```

### 密码：只能为字母数字且必须包含字母数字

```javascript
/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test()
```

## 安卓 IOS 嵌入H5 相关

### 嵌入的H5页面调用 移动端原生方法

```javascript
if (navigator.userAgent.indexOf('house730') > -1) {
  let isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
  const isFlutter = navigator.userAgent.indexOf('flutter') > -1;
  if (isFlutter) {
    window.house730.postMessage(JSON.stringify({ type: 'jumpLogin', data: {} }));
  } else if (isAndroid) {
    window.house730.jumpLogin();
  } else {
    window.webkit.messageHandlers.jumpLogin.postMessage(JSON.stringify({});
  }
}
```

### 嵌入H5问题

#### WebView的下拉刷新与H5里的滚动冲突

- 解决方法：需要移动端重写WebView方法

#### H5嵌入APP时  Vue 中的返回点击无效

- 在app中使用vue搭建的h5项目的时候，在ios中正常后退，在android中无法路由后退，使用`this.$router.back()`或者`this.$router.go(-1)`都无效，需要使用`this.$router.push('/xxx')`方法跳转页面。

## 兼容问题

### IOS `new Date()` 兼容问题

```javascript
//win和安卓三种都能使用  ios中只能使用 / 方法
new Date('2016-01-01') 
new Date('2016:01:01')
new Date('2016/01/01') //ios中只能使用 / 方法
```

### IOS 不支持WEBP格式图片

### 三星手机自带浏览器 click事件无效

- 解决方法：使用封装的`tap`指令       

  - `tap`事件  轻击

  - `	jquery`的移动端库里 有`tap`事件

## Vue问题

### 使用Less

- 下载依赖：`npm install less less-loader`
- 在`mian.js` 中添加:

```javascript
import less from 'less'
Vue.use(less)
```

- 使用

```vue
<style lang="less"> 
</style>
```

### 使用Less时运行报错

- `this.getOptions is not a function`
- 原因：`less-loader`安装的的版本过高
- 解决：重新安装较低版本

  - `npm uninstall less-loader`

  - `npm install less-loader@5.0.0`

