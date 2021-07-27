class Observer {
 //构造函数
 constructor(data) {
  //遍历data 转换成响应式
  this.walk(data)
 }
 //遍历data 转换成响应式
 walk(data) {
  //判断data类型
  if (!data || typeof data !== 'object') return
  //遍历data
  Object.keys(data).forEach((key) => {
   this.defineReactive(data, key, data[key])
  })
 }
 //把data数据注册到为响应式
 defineReactive(obj, key, value) {
  //如果value是对象 也变成响应式，如果不是直接return
  this.walk(value)
  //保存this
  const _this = this
  Object.defineProperty(obj, key, {
   // 设置可以枚举
   enumerable: true,
   // 设置可以配置
   configurable: true,
   //设置数据
   set(val) {
    //判断新值是否相等
    if (val === value) return
    //设置新值
    value = val
    //复制val如果是对象也要设置为响应式
    _this.walk(val)
   },
   //获取数据
   get() {
    return value
   }
  })
 }
}