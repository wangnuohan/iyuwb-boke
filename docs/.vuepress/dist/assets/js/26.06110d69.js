(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{382:function(v,_,t){"use strict";t.r(_);var a=t(44),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"计算机基础-浏览器是运作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机基础-浏览器是运作原理"}},[v._v("#")]),v._v(" 计算机基础-浏览器是运作原理")]),v._v(" "),t("h2",{attrs:{id:"浏览器发展史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器发展史"}},[v._v("#")]),v._v(" 浏览器发展史")]),v._v(" "),t("ul",[t("li",[v._v("1991 Berners Lee(互联网发明者之一) 建立了第一代网络浏览器 WordWideWeb（显示文本图片）")]),v._v(" "),t("li",[v._v("1994 网景浏览器发布")]),v._v(" "),t("li",[v._v("1995 IE 浏览器发布")]),v._v(" "),t("li",[v._v("1996 IE 浏览器和 window 操作系统绑定")]),v._v(" "),t("li",[v._v("1998 Mozilla 基金会")]),v._v(" "),t("li",[v._v("1999 IE 浏览器占据市场份额 99%")]),v._v(" "),t("li",[v._v("2003 Safari 浏览器发布")]),v._v(" "),t("li",[v._v("2004 火狐浏览器发布")]),v._v(" "),t("li",[v._v("2005 苹果开源了 Safari 内核，webkit")]),v._v(" "),t("li",[v._v("2006 谷歌已 webkit 作为内核创建了一个新的 Chromium（发布浏览器 Chrome）")]),v._v(" "),t("li",[v._v("至今 Chrome 占据市场份额 99%")])]),v._v(" "),t("h2",{attrs:{id:"浏览器内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[v._v("#")]),v._v(" 浏览器内核")]),v._v(" "),t("ul",[t("li",[v._v("IE Trident")]),v._v(" "),t("li",[v._v("Firefox Gecko")]),v._v(" "),t("li",[v._v("Safari Webkit")]),v._v(" "),t("li",[v._v("Chrome/Opera/Edge Blink（基于 Webkit 改造优化，也是开源的）")])]),v._v(" "),t("h2",{attrs:{id:"进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[v._v("#")]),v._v(" 进程和线程")]),v._v(" "),t("p",[v._v("进程：")]),v._v(" "),t("ul",[t("li",[v._v("应用启动会创建一个进程执行任务，同时为该进程申请内存空间，来用保存该进程的状态。当应用关闭时，该内存空间会被回收。")]),v._v(" "),t("li",[v._v("一个应用可以创建多个进程。（很多应用程序都是多进程的，防止进程崩溃，应用卡死）")]),v._v(" "),t("li",[v._v("多个进程之间相互独立，一个进程崩溃不会影响到其他进程。")]),v._v(" "),t("li",[v._v("进程之间通信，需要使用进程间通信管道 IPC。")])]),v._v(" "),t("p",[v._v("线程：")]),v._v(" "),t("ul",[t("li",[v._v("进程可以将任务分成多个细小的任务，通过创建多个线程并行执行不同的任务")]),v._v(" "),t("li",[v._v("统一进程下的线程之间共享进程的内存空间")])]),v._v(" "),t("h2",{attrs:{id:"浏览器结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器结构"}},[v._v("#")]),v._v(" 浏览器结构")]),v._v(" "),t("h3",{attrs:{id:"用户界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户界面"}},[v._v("#")]),v._v(" 用户界面")]),v._v(" "),t("blockquote",[t("p",[v._v("展示除标签外的其他用户内容")])]),v._v(" "),t("h3",{attrs:{id:"浏览器引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器引擎"}},[v._v("#")]),v._v(" 浏览器引擎")]),v._v(" "),t("blockquote",[t("p",[v._v("用于渲染引擎和用户界面中间传递数据")])]),v._v(" "),t("h3",{attrs:{id:"渲染引擎-核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎-核心"}},[v._v("#")]),v._v(" 渲染引擎（核心）")]),v._v(" "),t("blockquote",[t("p",[v._v("负责渲染用户请求的页面内容\n渲染引擎是浏览器的核心（内核），不同浏览器的内核也不一样")])]),v._v(" "),t("h3",{attrs:{id:"网络模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络模块"}},[v._v("#")]),v._v(" 网络模块")]),v._v(" "),t("h3",{attrs:{id:"javascript-解析器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-解析器"}},[v._v("#")]),v._v(" JavaScript 解析器")]),v._v(" "),t("h3",{attrs:{id:"数据存储持久层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据存储持久层"}},[v._v("#")]),v._v(" 数据存储持久层")]),v._v(" "),t("h2",{attrs:{id:"浏览器进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程"}},[v._v("#")]),v._v(" 浏览器进程")]),v._v(" "),t("p",[v._v("单进程浏览器")]),v._v(" "),t("ul",[t("li",[v._v("不稳定，当一个线程或者进程卡死，浏览器就会崩溃，无法正常运行。")]),v._v(" "),t("li",[v._v("不安全，因为进程间数据共享，js 可以随意访问浏览器进程内的所有数据。")]),v._v(" "),t("li",[v._v("不流畅，一个进程负责太多东西，会导致效率问题，运行不流畅")])]),v._v(" "),t("h3",{attrs:{id:"多进程浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器"}},[v._v("#")]),v._v(" 多进程浏览器")]),v._v(" "),t("p",[v._v("现在浏览器基本上都是多进程结构。（以 Chrome 为例）")]),v._v(" "),t("h4",{attrs:{id:"浏览器进程-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程-2"}},[v._v("#")]),v._v(" 浏览器进程")]),v._v(" "),t("blockquote",[t("p",[v._v("控制除标签页外的用户界面，包括地址，书签，后退，前进按钮等，以及负责与浏览器其他进程负责协调工作")])]),v._v(" "),t("h4",{attrs:{id:"缓存进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存进程"}},[v._v("#")]),v._v(" 缓存进程")]),v._v(" "),t("h4",{attrs:{id:"网络进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络进程"}},[v._v("#")]),v._v(" 网络进程")]),v._v(" "),t("blockquote",[t("p",[v._v("发起接受网络请求")])]),v._v(" "),t("h4",{attrs:{id:"渲染器进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染器进程"}},[v._v("#")]),v._v(" 渲染器进程")]),v._v(" "),t("blockquote",[t("p",[v._v("渲染器进程的核心任务就是 html，js，css，img 等资源渲染成用户可以交互的 web 页面")])]),v._v(" "),t("blockquote",[t("p",[v._v("默认情况下（Chorme 浏览器）会为每一个标签页都创建一个渲染器进程")])]),v._v(" "),t("h5",{attrs:{id:"chromium-官方文档上-说明有-4-中进程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chromium-官方文档上-说明有-4-中进程模型"}},[v._v("#")]),v._v(" Chromium 官方文档上，说明有 4 中进程模型")]),v._v(" "),t("ul",[t("li",[v._v("Process-per-site-instance 默认，每个标签页都创建一个新的渲染器进程")]),v._v(" "),t("li",[v._v("Process-per-site 同一站点使用同一进程")]),v._v(" "),t("li",[v._v("Process-per-tab 一个 Tab 里的所有站点使用一个进程")]),v._v(" "),t("li",[v._v("Single-process 浏览器引擎和渲染引擎公用一个进程")])]),v._v(" "),t("h5",{attrs:{id:"渲染进程的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程的流程"}},[v._v("#")]),v._v(" 渲染进程的流程")]),v._v(" "),t("h5",{attrs:{id:"主线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主线程"}},[v._v("#")]),v._v(" 主线程")]),v._v(" "),t("ul",[t("li",[v._v("DOM 树 主线程将 html 解析构造 DOM 树")]),v._v(" "),t("li",[v._v("style 样式计算")]),v._v(" "),t("li",[v._v("layoutTree - 根据 DOM 树和计算好的样式 style 生成 layout Tree")]),v._v(" "),t("li",[v._v("paint -绘制 通过遍历 Layout Tree 生成绘制顺序表")]),v._v(" "),t("li",[v._v("laryer Tree -接着遍历 layout Tree 生成 Layer Tree")])]),v._v(" "),t("p",[v._v("然后根据主进程将 layoutTree 和绘制信息表传给合成器线程")]),v._v(" "),t("h5",{attrs:{id:"合成器线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合成器线程"}},[v._v("#")]),v._v(" 合成器线程")]),v._v(" "),t("ul",[t("li",[v._v("合成器线程 - 按规则进行分层")]),v._v(" "),t("li",[v._v("tiles - 并将图层分成更小的图块传给栅格线程")])]),v._v(" "),t("h5",{attrs:{id:"栅格线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栅格线程"}},[v._v("#")]),v._v(" 栅格线程")]),v._v(" "),t("ul",[t("li",[v._v("栅格线程 - 将合成器线程传来的图块进行栅格化")]),v._v(" "),t("li",[v._v("raster - 将更小的图块进行栅格化 raster，返还给合成器线程")]),v._v(" "),t("li",[v._v("draw quads：- 图块信息，这些信息里记录了图块在内存中的位置和在页面的那个位置绘制图块的信息")])]),v._v(" "),t("h5",{attrs:{id:"合成器线程-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合成器线程-2"}},[v._v("#")]),v._v(" 合成器线程")]),v._v(" "),t("ul",[t("li",[v._v("当图块栅格完成后，合成器线程将收集为 draw quads 的图块信息")]),v._v(" "),t("li",[v._v("根据这些信息。合成器线程合成一个合成器帧，将该合成器帧通过 IPC 传回给浏览器进程")])]),v._v(" "),t("p",[v._v("然后浏览器进程在传到 GPU 进行渲染展示。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("重排：改变样式大小等")]),v._v(" "),t("ul",[t("li",[v._v("会重新进行样式计算。重新进行布局(layout)绘制(Paint)以及后面所有的流程")])]),v._v(" "),t("p",[v._v("重绘：改变样式颜色等")]),v._v(" "),t("ul",[t("li",[v._v("不会重新触发布局，但是会重新进行样式计算和绘制")])]),v._v(" "),t("p",[v._v("重排和重绘都会占用主线程，同时 JavaScript 也是运行在主线程的")])]),v._v(" "),t("p",[v._v("当在一帧的时间内布局和绘制结束后，还有剩余时间，js 就会拿到主线程的使用权，如果 JS 执行时间过长，就会导致下一帧开始时 js 没有归还主线程，导致下一帧动画没有及时渲染，就会出现页面的卡顿。")]),v._v(" "),t("p",[v._v("解决方法")]),v._v(" "),t("p",[t("code",[v._v("requestAnimationFrame()")]),v._v("会在每一帧被调用，在每一帧时间用完前暂停 js 执行。归还主线程。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("React 最新的渲染引擎 React Fiber 就是用到该 api 做了很多优化")])]),v._v(" "),t("p",[v._v("第二个解决方法")]),v._v(" "),t("p",[t("code",[v._v("transform")]),v._v(" 只会占用合成器线程和栅格线程不会占用主线程")]),v._v(" "),t("h4",{attrs:{id:"gpu-进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-进程"}},[v._v("#")]),v._v(" GPU 进程")]),v._v(" "),t("blockquote",[t("p",[v._v("负责整个浏览器界面的渲染")])]),v._v(" "),t("h4",{attrs:{id:"插件进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件进程"}},[v._v("#")]),v._v(" 插件进程")]),v._v(" "),t("blockquote",[t("p",[v._v("负责控制网站使用的所有插件，内置插件，是不是拓展中心的拓展。（Flash 之类）")])]),v._v(" "),t("h2",{attrs:{id:"浏览器完整渲染页面过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器完整渲染页面过程"}},[v._v("#")]),v._v(" 浏览器完整渲染页面过程")]),v._v(" "),t("p",[v._v("以 Chrome 为例:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器进程的 UI 线程会捕捉输入内容")])]),v._v(" "),t("li",[t("p",[v._v("如果输入的是网址，UI 线程会启动网络线程来请求 DNS 进行域名解析（如果输入的不是相关网址，回启动默认的搜索引擎进行搜索内容）")])]),v._v(" "),t("li",[t("p",[v._v("接着连接服务器获取数据")])]),v._v(" "),t("li",[t("p",[v._v("网络线程获取到数据后会通过 SafeBrowsing 检查站点是否安全，弹出警告页面")])]),v._v(" "),t("li",[t("p",[v._v("当返回数据准备完毕，网络线程会通知 UI 线程准备完成")])]),v._v(" "),t("li",[t("p",[v._v("UI 线程会创建一个渲染器进程（Renderer Process）渲染页面")])]),v._v(" "),t("li",[t("p",[v._v("浏览器进程将通过 IPC 管道将数据传递给渲染器进程，正式进入渲染流程")])]),v._v(" "),t("li",[t("p",[v._v("渲染器进程接收到数据(也就是 html)")])]),v._v(" "),t("li",[t("p",[v._v("渲染器进程的核心任务就是 html，js，css，img 等资源渲染成用户可以交互的 web 页面")])]),v._v(" "),t("li",[t("p",[v._v("渲染器进程的主线程将 html 进行解析，构造 DOM 数据结构（DOM 文档对象模型）")])]),v._v(" "),t("li",[t("p",[v._v("HTML 首先通过 Tokeniser 标记化，通过词法分析将输入的 html 内容，解析成多个标记")])]),v._v(" "),t("li",[t("p",[v._v("根据识别后的标记进行 DOM 树构造，在 DOM 树构造过程中会构建 document 对象")])]),v._v(" "),t("li",[t("p",[v._v("然后以 document 的为根节点的 DOM 树不断进行修改，添加元素")])]),v._v(" "),t("li",[t("p",[v._v("如果遇到 script 标签，则不会继续解析而是转而去加载解析并且执行 js")])]),v._v(" "),t("li",[t("p",[v._v("在 html 解析完成后，会获得一个 DOM 树")])]),v._v(" "),t("li",[t("p",[v._v("主线程需要解析 css，并确定每个 DOM 节点的计算样式（没有提供也会有默认的样式表）")])]),v._v(" "),t("li",[t("p",[v._v("layout 布局，主线程通过 DOM 树和计算好的样式来生成 Layout 树")])]),v._v(" "),t("li",[t("p",[v._v("layout 树的每个节点都记录了元素的 x,y 坐标和边框尺寸")])]),v._v(" "),t("li",[t("p",[v._v("注意点 layout 中和 DOM 并不是一一对应的，设置了 display:none 的不会显示在 layout 树中，在 before 伪类中添加的有 content 内容的元素，content 的内容不会出现在 DOM 树上但是会出现在 layout 树上")])]),v._v(" "),t("li",[t("p",[v._v("为了元素显示正确的层级，主线程遍历 layout 树创建一个 Paint Record（绘制记录表），记录绘制的顺序。这个阶段叫做绘制。")])]),v._v(" "),t("li",[t("p",[v._v("主线程遍历 layout 树生成 layer(图层) 树")])]),v._v(" "),t("li",[t("p",[v._v("当 layer 生成完毕和绘制顺序确定后，主线程讲这些信息传递给合成器线程")])]),v._v(" "),t("li",[t("p",[v._v("栅格化，合成器。合成是一种将页面的各个部分分成多个图层，分别对其进行栅格化，并在合成器线程中单独进行合成页面的技术")])]),v._v(" "),t("li",[t("p",[v._v("合成器线程将每个图层栅格化，由于每层可能像页面的整个长度一样大，因此合成器线程将他们切分为很多图块。将每个图块发送给栅格化线程")])]),v._v(" "),t("li",[t("p",[v._v("栅格线程栅格化每个图块，并将其存储在 GPU 内存中 ，当图块栅格完成后，合成器线程将收集为 draw quads 的图块信息，这些信息里记录了图块在内存中的位置和在页面的那个位置绘制图块的信息")])]),v._v(" "),t("li",[t("p",[v._v("根据这些信息合成器线程生成了一个合成器帧，然后合成器帧通过 IPC 传送给浏览器进程")])]),v._v(" "),t("li",[t("p",[v._v("浏览器进程将合成帧传送给 GPU")])]),v._v(" "),t("li",[t("p",[v._v("然后 GPU 渲染展示到屏幕上")])]),v._v(" "),t("li",[t("p",[v._v("当页面发生变化，比如滚动页面，则会生成一个新的合成器帧，新的帧传给 GPU 再次渲染展示")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);