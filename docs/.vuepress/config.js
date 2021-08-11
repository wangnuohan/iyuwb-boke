module.exports = {
  title: '耶温博客',
  description: '小耶温学习笔记',
  // icon
  head: [
    ['link', {
      rel: 'icon',
      href: 'http://iyuwb.cn/img/boke.ico'
    }]
  ],
  base: '/boke/',
  // theme: 'antdocs',
  themeConfig: {
    logo: 'http://iyuwb.cn/img/wenbo.jpg',
    //搜索
    // algolia: {
    //  apiKey: '<API_KEY>',
    //  indexName: '<INDEX_NAME>'
    // },
    // 导航栏可以下拉列表
    nav: [{
      text: 'Notes',
      link: '/Notes/个人简历'
    }, {
      text: 'JavaScript',
      link: '/JavaScript/JavaScript-常用方法'
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
      link: '/TypeScript/TypeScript基础'
    },
    {
      text: 'React',
      link: '/React/React入门'
    },
    {
      text: '读书笔记',
      link: '/读书笔记/[JavaScript高级程序设计]读书笔记'
    },
    ],
    sidebar: {
      '/JavaScript/': [
        'JavaScript笔记',
        'JavaScript-常用方法',
        'JavaScript深入理解-内置对象方法',
        'JavaScript深入理解-原型链',
        'JavaScript深入理解-正则表达式',
        'JavaScript深入理解-ECMAScript 6',
        'JavaScript深入理解-Promise',
        'JavaScript深入理解-PWA渐进式应用',
        'JavaScript深入理解-Set、Map、WeakSet和WeakMap',
        'JavaScript深入理解-H5离线储存',
        'JavaScript简单了解-WebSocket',
      ],
      '/HTMLCSS/': [
        'CSS选择器',
        'HTML5CSS3',
        'H5端rem适配方案',
        'Canvas实现两张图片合成'
      ],
      '/Notes/': [
        '前端学习路线',
        '个人简历',
        '前端笔记',
        'GIT相关操作方法',
        '计算机基础-浏览器是运作原理',
        'HTTPS原理解析',
        'HTTP请求详解',
        'NPM和NPX区别',
        '前端Vue代码格式'
      ],
      '/读书笔记/': [
        '[JavaScript高级程序设计]读书笔记',
        // '[HTTP图解]读书笔记'
      ],
      '/React/': [
        'React入门',
      ],
      '/TypeScript/': [
        'TypeScript基础',
      ],
      '/Vue/': [
        'Vue数据响应原理解析',
        'Vue进阶之旅',
        '在Vue2.0中使用Less与Sass',
        // 'Vue相关面试题'
      ],
      '/中原集团/': [
        '发版流程',
        '线上发版'
        // 'Vue相关面试题'
      ]
    },
    displayAllHeaders: true // 默认值：false 显示所有页面的标题链接
  }
}