class Vue {
 //构造函数
 constructor(option) {
  //获取到传入的对象，没有默认为空对象
  this.$option = option || {}
  //获取 el
  this.$el = typeof option.el === 'string' ? document.querySelector(option.el) : option.el
  //获取data
  this.$data = option.data || {}
  //调用proxyData处理data数据
  this.proxyData(this.$data)
 }
 //把data数据注册到vue  可以使用代理proxy也可以使用defineProperty
 proxyData(data) {
  Object.keys(data).forEach((key) => {
   //进行数据劫持
   //循环遍历data数据，添加到Vue转化成getter和setter方法
   Object.defineProperty(this, key, {
    // 设置可以枚举
    enumerable: true,
    // 设置可以配置
    configurable: true,
    //设置数据
    set(val) {
     //判断新值是否相等
     if (val === data[key]) return
     //设置新值
     data[key] = val
    },
    //获取数据
    get() {
     return data[key]
    }
   })
  })
 }
}