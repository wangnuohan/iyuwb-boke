(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{453:function(t,s,a){"use strict";a.r(s);var n=a(53),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-深入理解之原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-深入理解之原型链"}},[t._v("#")]),t._v(" JavaScript 深入理解之原型链")]),t._v(" "),a("h2",{attrs:{id:"构造函数创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数创建对象"}},[t._v("#")]),t._v(" 构造函数创建对象")]),t._v(" "),a("p",[t._v("构造函数创建一个"),a("code",[t._v("Person")]),t._v("对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yevin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出：Yevin")]),t._v("\n")])])]),a("p",[t._v("Person 为一个构造函数")]),t._v(" "),a("p",[t._v("person 为一个实例对象，使用构造函数 Person 创建的")]),t._v(" "),a("h2",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" "),a("code",[t._v("prototype")])]),t._v(" "),a("p",[t._v("每个函数都有一个"),a("code",[t._v("prototype")]),t._v("属性，指向该函数的原型对象")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("prototype")]),t._v(" 是函数才有的属性")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yevin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Yevin"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Yevin"')]),t._v("\n")])])]),a("p",[t._v("函数的"),a("code",[t._v("prototype")]),t._v(" 属性指向了一个对象，这个对象是调用该构造函数而创建的实例的原型。")]),t._v(" "),a("p",[t._v("也就是上面代码中 "),a("code",[t._v("person1")]),t._v(" 与 "),a("code",[t._v("person2")]),t._v(" 的原型")]),t._v(" "),a("p",[a("strong",[t._v("原型是什么：")])]),t._v(" "),a("blockquote",[a("p",[t._v("每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型继承属性")])]),t._v(" "),a("blockquote",[a("p",[t._v("继承：一般来说继承意味着复制操作，但是在Javascript中，继承并不会复制对象的属性，而是在两个对象中建立一个关联。相当于委托。")])]),t._v(" "),a("p",[a("strong",[t._v("用一张图表示构造函数和实例之间的关系：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yevin.gitee.io/yiran/img/01-1.png#align=left&display=inline&height=415&margin=%5Bobject%20Object%5D&originHeight=415&originWidth=848&status=done&style=none&width=848",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Person")]),t._v("：构造函数")]),t._v(" "),a("li",[a("code",[t._v("Person.prototype")]),t._v("：实例原型")])]),t._v(" "),a("h2",{attrs:{id:"proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" "),a("code",[t._v("__proto__")])]),t._v(" "),a("blockquote",[a("p",[t._v("每一个 JavaScript 对象(除了 null)都具有一个属性叫做"),a("code",[t._v("__proto__")]),t._v("，这个属性会指向该对象的原型")])]),t._v(" "),a("p",[t._v("通过代码证明：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nperson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 true")]),t._v("\n")])])]),a("p",[t._v("更新"),a("code",[t._v("person")]),t._v("与构造函数"),a("code",[t._v("Person")]),t._v("和实例原型"),a("code",[t._v("Person.prototype")]),t._v("的关系图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yevin.gitee.io/yiran/img/01-2.png#align=left&display=inline&height=505&margin=%5Bobject%20Object%5D&originHeight=505&originWidth=850&status=done&style=none&width=850",alt:""}})]),t._v(" "),a("p",[t._v("实例对象与构造函数都可以指向原型")]),t._v(" "),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" "),a("code",[t._v("constructor")])]),t._v(" "),a("p",[a("code",[t._v("constructor")]),t._v("：每一个原型都有一个"),a("code",[t._v("constructor")]),t._v("属性指向关联的构造函数")]),t._v(" "),a("p",[t._v("验证方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出  true")]),t._v("\n")])])]),a("p",[t._v("因此再次更新"),a("code",[t._v("person")]),t._v("与构造函数"),a("code",[t._v("Person")]),t._v("和实例原型"),a("code",[t._v("Person.prototype")]),t._v("的关系图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yevin.gitee.io/yiran/img/01-3.png#align=left&display=inline&height=458&margin=%5Bobject%20Object%5D&originHeight=458&originWidth=781&status=done&style=none&width=781",alt:""}})]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此可知")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为True")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为True")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("getPrototypeOf")]),t._v("：ES5 中的方法，可以获得对象的原型")]),t._v(" "),a("h2",{attrs:{id:"实例与原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例与原型"}},[t._v("#")]),t._v(" 实例与原型")]),t._v(" "),a("blockquote",[a("p",[t._v("当读取实例属性的时候，如果找不到该属性，就会自动查找与对象关联的原型中的属性，如果还查不到，就会去查找原型的原型，一直找到最顶层。")])]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wenbo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yevin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Yevin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wenbo")]),t._v("\n")])])]),a("p",[t._v("当"),a("code",[t._v("person")]),t._v("对象有"),a("code",[t._v("name")]),t._v("属性时，打印输出的为"),a("code",[t._v("person")]),t._v("对象中 "),a("code",[t._v("name")]),t._v("属性的值。")]),t._v(" "),a("p",[t._v("当删除掉"),a("code",[t._v("person")]),t._v("的"),a("code",[t._v("name")]),t._v("属性时，打印时"),a("code",[t._v("person")]),t._v("没有"),a("code",[t._v("name")]),t._v("属性就会通过"),a("code",[t._v("person")]),t._v("的原型也就是"),a("code",[t._v("person.__proto__")]),t._v("或者"),a("code",[t._v("Person.prototype")]),t._v("用来查找"),a("code",[t._v("name")]),t._v("属性。")]),t._v(" "),a("h2",{attrs:{id:"原型的原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型的原型"}},[t._v("#")]),t._v(" 原型的原型")]),t._v(" "),a("blockquote",[a("p",[t._v("原型也是一个对象，可以通过最原始的方法构建")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yevin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Yevin"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("原型对象就是通过"),a("code",[t._v("Object")]),t._v("构造函数生成的，结合上面所说，实例的"),a("code",[t._v("__proto__")]),t._v("指向构造函数的"),a("code",[t._v("prototype")])])]),t._v(" "),a("p",[t._v("更新关系图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yevin.gitee.io/yiran/img/01-4.png#align=left&display=inline&height=587&margin=%5Bobject%20Object%5D&originHeight=587&originWidth=850&status=done&style=none&width=850",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Object.prototype")]),t._v("的原型为"),a("code",[t._v("null")])])]),t._v(" "),a("p",[t._v("验证：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("null")]),t._v(" 标识'没有对象'，即该处不应该有值")])]),t._v(" "),a("p",[a("code",[t._v("Object.prototype.__proto__")]),t._v("的值为"),a("code",[t._v("null")]),t._v("，"),a("code",[t._v("Object.prototype")]),t._v(" 没有原型")]),t._v(" "),a("p",[t._v("说明查找属性时查到"),a("code",[t._v("Object.prototype")]),t._v(" 就可以停止查找了")]),t._v(" "),a("p",[t._v("最后更新关系图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yevin.gitee.io/yiran/img/01-5.png#align=left&display=inline&height=722&margin=%5Bobject%20Object%5D&originHeight=722&originWidth=803&status=done&style=none&width=803",alt:""}})]),t._v(" "),a("p",[t._v("图中相互关联的原型组成的链状结构就是原型链，也就是红色这条线")]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),a("p",[a("code",[t._v("constructor")]),t._v("属性：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),a("p",[t._v("如上代码所示：")]),t._v(" "),a("p",[t._v("原因是因为获取"),a("code",[t._v("person.constructor")]),t._v("时，"),a("code",[t._v("person")]),t._v("没有"),a("code",[t._v("constructor")]),t._v("属性，当不能读取到 constructor 属性时，会从"),a("code",[t._v("person")]),t._v("的原型中读取，因此：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("__proto__")]),t._v(":")]),t._v(" "),a("p",[t._v("绝大部分浏览器都支持这个非标准的方法访问原型，然后它并不存在于"),a("code",[t._v("Person.prototype")]),t._v("中，实际上，他是来自"),a("code",[t._v("Object.prototype")]),t._v(" ，与其说时一个属性，不如说是"),a("code",[t._v("getter/setter")]),t._v("，当使用"),a("code",[t._v("obj.__proto__")]),t._v("时，可以理解返回了"),a("code",[t._v("Object.getPrototypeOf(obj)")]),t._v("。")]),t._v(" "),a("p",[t._v("继承：")]),t._v(" "),a("blockquote",[a("p",[t._v("继承意味着复制操作，然后 JavaScript 默认并不会复制对象的属性，相反 JavaScript 只是在两个对象之间建立一个关联，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫做继承，委托的说法更准确些。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);