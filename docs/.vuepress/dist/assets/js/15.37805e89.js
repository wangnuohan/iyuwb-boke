(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-深入理解之-set、map、weakset-和-weakmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-深入理解之-set、map、weakset-和-weakmap"}},[t._v("#")]),t._v(" JavaScript 深入理解之 Set、Map、WeakSet 和 WeakMap")]),t._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),a("blockquote",[a("p",[t._v("Set 对象允许储存任何类型的唯一值，无论是原始值或者是对象引用\n本质：构造函数，用来生成 Set 数据结构")])]),t._v(" "),a("p",[a("strong",[t._v("描述")])]),t._v(" "),a("blockquote",[a("p",[t._v("Set 对象是值的集合,你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 元素是唯一的。\n相当于集合，可以进行并集交集运算。")])]),t._v(" "),a("p",[a("strong",[t._v("值的相等")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于原始数据类型（boolean，number，string，null，undefined），如果储存相同值则只保存一个，对于引用类型,引用地址完全相同则只会存一个。")])]),t._v(" "),a("ul",[a("li",[t._v("+0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。")]),t._v(" "),a("li",[t._v("undefined 和 undefined 是恒等的，所以不可以重复。")]),t._v(" "),a("li",[t._v("NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个不能重复。")])]),t._v(" "),a("p",[a("strong",[t._v("属性方法")])]),t._v(" "),a("ul",[a("li",[t._v("size 属性：返回集合元素个数（类似于数组的长度 length）")]),t._v(" "),a("li",[t._v("add(value)方法：想集合中添加一个元素。如果添加的元素已存在，则不会进行操作。")]),t._v(" "),a("li",[t._v("delete(value)方法：从集合中删除元素 value")]),t._v(" "),a("li",[t._v("has(value)方法：判断 value 是否在合集中，返回 true 或者 false")]),t._v(" "),a("li",[t._v("clear()方法：清空集合")]),t._v(" "),a("li",[t._v("forEach()方法：根据集合中元素的插入顺序，依次执行提供的回调函数")])]),t._v(" "),a("p",[a("strong",[t._v("应用场景")]),t._v("\n数组去重，交集，并集，差集等等")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数组去重")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//并集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//交集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" set1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" set2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nset1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" newArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//差集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" set1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" set2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nset1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nset2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),a("blockquote",[a("p",[t._v("Map 对象保存键值对，并且能够记住键的原始插入顺序，任何值（对象或者原始值）都可以左右一个键或者一个值")])]),t._v(" "),a("p",[a("strong",[t._v("描述：")])]),t._v(" "),a("blockquote",[a("p",[t._v("一个 Map 对象在迭代时会根据对象中元素的插入顺序来进行，一个"),a("code",[t._v("for of")]),t._v(" 循环在每次迭代后会返回一个形式为"),a("code",[t._v("[key,value]")]),t._v("的数组")])]),t._v(" "),a("p",[a("strong",[t._v("键的相等")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于原始数据类型（boolean，number，string，null，undefined），如果储存相同值则只保存一个，对于引用类型,引用地址完全相同则只会存一个。")])]),t._v(" "),a("ul",[a("li",[t._v("+0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。")]),t._v(" "),a("li",[t._v("undefined 和 undefined 是恒等的，所以不可以重复。")]),t._v(" "),a("li",[t._v("NaN 与 NaN 是不恒等的，但是只能存一个不能重复。")])]),t._v(" "),a("p",[a("strong",[t._v("Map 和 Object 的区别")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Map")]),t._v(" "),a("th",[t._v("Object")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("额外的键")]),t._v(" "),a("td",[t._v("Map 默认情况下不包含任何键，只包含插入的键")]),t._v(" "),a("td",[t._v("一个 Object 有一个原型，原型链上的键名有可能和自己在对象上设置的键名产生冲突,ES5 可以适用 "),a("code",[t._v("Object.create(null)")]),t._v(",创建一个没有原型的对象")])]),t._v(" "),a("tr",[a("td",[t._v("键的类型")]),t._v(" "),a("td",[t._v("一个 Map 的键可以是任意值，包括函数，对象或者任意基本类型")]),t._v(" "),a("td",[t._v("一个 Object 的键必需是一个 String 或者 Symbol")])]),t._v(" "),a("tr",[a("td",[t._v("键的顺序")]),t._v(" "),a("td",[t._v("Map 中的 key 是有序的，因此当迭代的时候，一个 Map 对象以插入的顺序返回键值")]),t._v(" "),a("td",[t._v("一个 Object 的键是无序的")])]),t._v(" "),a("tr",[a("td",[t._v("Size")]),t._v(" "),a("td",[t._v("通过 size 属性获取")]),t._v(" "),a("td",[t._v("Objec 的键值只能手动计算")])]),t._v(" "),a("tr",[a("td",[t._v("迭代")]),t._v(" "),a("td",[t._v("可迭代，可以直接被迭代")]),t._v(" "),a("td",[t._v("需要某种方式获取到键才能被迭代")])]),t._v(" "),a("tr",[a("td",[t._v("性能")]),t._v(" "),a("td",[t._v("在频繁增删键值对的场景下表现更好")]),t._v(" "),a("td",[t._v("未作出优化")])])])]),t._v(" "),a("p",[a("strong",[t._v("属性方法")])]),t._v(" "),a("ul",[a("li",[t._v("size 属性：返回字典长度（类似于数组的长度 length）")]),t._v(" "),a("li",[t._v("values()方法：返回一个可迭代对象，包含按顺序插入 Map 对象中每个元素的 value 值")]),t._v(" "),a("li",[t._v("set(key,value)方法：向字典中添加新元素")]),t._v(" "),a("li",[t._v("get(key)方法：通过键查找特定数值并返回")]),t._v(" "),a("li",[t._v("has(key)方法：判断字典中是否存在键 key")]),t._v(" "),a("li",[t._v("delete(key)方法：通过键 key 从字典中移出对应的数据")]),t._v(" "),a("li",[t._v("clear()方法：清空字典")]),t._v(" "),a("li",[t._v("forEach()方法：根据集合中元素的插入顺序，依次执行提供的回调函数")])]),t._v(" "),a("p",[a("strong",[t._v("遍历")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" myMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmyMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("转换")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Map { 1 => 2, 3 => 4, 5 => 6 }")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]")]),t._v("\n")])])]),a("p",[a("strong",[t._v("复制")]),t._v(" "),a("code",[t._v("let mapV=newMap(map)")])]),t._v(" "),a("h2",{attrs:{id:"weakset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakset"}},[t._v("#")]),t._v(" WeakSet")]),t._v(" "),a("blockquote",[a("p",[t._v("WeakSet 对象允许将弱引用对象存在一个集合中")])]),t._v(" "),a("p",[a("strong",[t._v("WeakSet 和 Set 区别：")])]),t._v(" "),a("ul",[a("li",[t._v("WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以")]),t._v(" "),a("li",[t._v("WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果没有其他的变量或者属性引用这个对象值，则这个对象将会被垃圾回收掉。（不考虑该对象还存在与 WeakSet 中），所以 WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到，被垃圾回收了。因此 ES6 规定，WeakSet 对象是无法被遍历的，也没有办法拿到它包含的所有元素。")])]),t._v(" "),a("p",[a("strong",[t._v("属性：")]),t._v("\nconstructor：构造函数\n"),a("strong",[t._v("方法：")])]),t._v(" "),a("ul",[a("li",[t._v("add(value)方法：在 WeakSet 中添加一个元素。如果添加的元素已存在，则不会进行操作。")]),t._v(" "),a("li",[t._v("delete(value)方法：删除元素 value")]),t._v(" "),a("li",[t._v("has(value)方法：判断 WeakSet 对象中是否包含 value")]),t._v(" "),a("li",[t._v("clear()方法：清空所有元素")])]),t._v(" "),a("h2",{attrs:{id:"weakmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakmap"}},[t._v("#")]),t._v(" WeakMap")]),t._v(" "),a("blockquote",[a("p",[t._v("WeakMap 对象是一组键值得集合，其中的键是弱引用。注意：键必需是弱引用，而值可以是任意。\n注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。")])]),t._v(" "),a("p",[a("strong",[t._v("WeakMap 和 Map 区别：")]),t._v("\nWeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收，相对应的 key 则变成无效的，所以，WeakSet 的 key 是不可枚举的。\n"),a("strong",[t._v("属性：")]),t._v("\nconstructor：构造函数\n"),a("strong",[t._v("方法：")])]),t._v(" "),a("ul",[a("li",[t._v("set(key,value)方法：设置一组 key 关联对象")]),t._v(" "),a("li",[t._v("delete(key)方法：移出 key 的关联对象")]),t._v(" "),a("li",[t._v("has(value)方法：判断 WeakSet 对象中是否包含 value")]),t._v(" "),a("li",[t._v("get(key)方法：返回 key 关联对象，没有则返回 undefined")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("Set\n"),a("ul",[a("li",[t._v("成员唯一，无序且不会重复")]),t._v(" "),a("li",[t._v("类似于数组集合，键值和键名是一致的（只有键值。没有键名）")]),t._v(" "),a("li",[t._v("可以遍历，方法有 add，delete，has")])])]),t._v(" "),a("li",[t._v("WeakSet\n"),a("ul",[a("li",[t._v("只能存储对应引用，不能存放值")]),t._v(" "),a("li",[t._v("成员都是弱引用，会被垃圾回收机制回收")]),t._v(" "),a("li",[t._v("不能遍历，方法有 add，delete，has")])])]),t._v(" "),a("li",[t._v("Map\n"),a("ul",[a("li",[t._v("键名唯一不可重复")]),t._v(" "),a("li",[t._v("类似于集合，键值对的集合，任何值都可以作为一个键或者一个值")]),t._v(" "),a("li",[t._v("可以遍历，可以转换各种数据格式，方法 get，set，has，delet")])])]),t._v(" "),a("li",[t._v("WeakMap\n"),a("ul",[a("li",[t._v("只接受对象为键名，不接受其他类型的值作为键名，键值可以是任意")]),t._v(" "),a("li",[t._v("键名是拖引用，键名所指向的对象，会被垃圾回收机制回收")]),t._v(" "),a("li",[t._v("不能遍历，方法 get，set，has，delete")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);