module.exports = {
 title: '耶温博客',
 description: '小耶温学习笔记',
 themeConfig: {
  logo: 'http://iyuwb.cn/img/wenbo.jpg',
  // 导航栏可以下拉列表
  nav: [{
    text: 'Notes',
    link: '/Notes/面试题总结'
   }, {
    text: 'JavaScript',
    link: '/JavaScript/JavaScript笔记'
   },
   {
    text: 'HTMLCSS',
    link: '/HTMLCSS/HTML5CSS3'
   },

   {
    text: 'Vue',
    link: '/Vue/Vue进阶之旅'
   },
   {
    text: 'TypeScript',
    link: '/TypeScript/从0开始了解TypeScript'
   },
   {
    text: 'React',
    link: '/React/React'
   },
   {
    text: 'PHP',
    link: '/PHP/PHP'
   },
  ],
  sidebar: {
   '/JavaScript/': [
    'JavaScript笔记',
    'JavaScript深入理解-原型链',
    'JavaScript深入理解-正则表达式',
    'JavaScript深入理解-ECMAScript 6',
    'JavaScript深入理解-Promise',
    'JavaScript深入理解-PWA渐进式应用',
    'JavaScript深入理解-Set、Map、WeakSet和WeakMap',
    'H5离线储存-使用serverWorker实现'
   ],
   '/HTMLCSS/': [
    'HTML5CSS3',
    'H5端rem适配方案',
    'Canvas实现两张图片合成'
   ],
   '/Notes/': [
    '面试题总结',
    '前端笔记',
    '前端工程师进阶之手撕代码',
    'HTTP请求详解',
    'NPM和NPX区别',
    'WebSocket简单了解'
   ],
   '/PHP/': [
    'PHP',
   ],
   '/React/': [
    'React',
   ],
   '/TypeScript/': [
    '从0开始了解TypeScript',
   ],
   '/Vue/': [
    'Vue进阶之旅',
    '在Vue2.0中使用Less与Sass',
    'Vue相关面试题'
   ]
  },
  displayAllHeaders: true // 默认值：false 显示所有页面的标题链接
 }
}