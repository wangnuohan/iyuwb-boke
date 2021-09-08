(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{515:function(t,s,a){"use strict";a.r(s);var n=a(53),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"find-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-up"}},[t._v("#")]),t._v(" find-up "),a("a",{attrs:{href:"https://travis-ci.org/sindresorhus/find-up",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/sindresorhus/find-up.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Find a file or directory by walking up parent directories")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install find-up\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/\n└── Users\n    └── sindresorhus\n        ├── unicorn.png\n        └── foo\n            └── bar\n                ├── baz\n                └── example.js\n")])])]),a("p",[a("code",[t._v("example.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" findUp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'find-up'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus/unicorn.png'")]),t._v("\n\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rainbow.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus/unicorn.png'")]),t._v("\n\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("directory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasUnicorns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" findUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hasUnicorns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'directory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"findup-name-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-name-options"}},[t._v("#")]),t._v(" findUp(name, options?)")]),t._v(" "),a("h3",{attrs:{id:"findup-matcher-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-matcher-options"}},[t._v("#")]),t._v(" findUp(matcher, options?)")]),t._v(" "),a("p",[t._v("Returns a "),a("code",[t._v("Promise")]),t._v(" for either the path or "),a("code",[t._v("undefined")]),t._v(" if it couldn't be found.")]),t._v(" "),a("h3",{attrs:{id:"findup-name-options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-name-options-2"}},[t._v("#")]),t._v(" findUp([...name], options?)")]),t._v(" "),a("p",[t._v("Returns a "),a("code",[t._v("Promise")]),t._v(" for either the first path found (by respecting the order of the array) or "),a("code",[t._v("undefined")]),t._v(" if none could be found.")]),t._v(" "),a("h3",{attrs:{id:"findup-sync-name-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-sync-name-options"}},[t._v("#")]),t._v(" findUp.sync(name, options?)")]),t._v(" "),a("h3",{attrs:{id:"findup-sync-matcher-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-sync-matcher-options"}},[t._v("#")]),t._v(" findUp.sync(matcher, options?)")]),t._v(" "),a("p",[t._v("Returns a path or "),a("code",[t._v("undefined")]),t._v(" if it couldn't be found.")]),t._v(" "),a("h3",{attrs:{id:"findup-sync-name-options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-sync-name-options-2"}},[t._v("#")]),t._v(" findUp.sync([...name], options?)")]),t._v(" "),a("p",[t._v("Returns the first path found (by respecting the order of the array) or "),a("code",[t._v("undefined")]),t._v(" if none could be found.")]),t._v(" "),a("h4",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Name of the file or directory to find.")]),t._v(" "),a("h4",{attrs:{id:"matcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matcher"}},[t._v("#")]),t._v(" matcher")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("Function")])]),t._v(" "),a("p",[t._v("A function that will be called with each directory until it returns a "),a("code",[t._v("string")]),t._v(" with the path, which stops the search, or the root directory has been reached and nothing was found. Useful if you want to match files with certain patterns, set of permissions, or other advanced use-cases.")]),t._v(" "),a("p",[t._v("When using async mode, the "),a("code",[t._v("matcher")]),t._v(" may optionally be an async or promise-returning function that returns the path.")]),t._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("object")])]),t._v(" "),a("h5",{attrs:{id:"cwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cwd"}},[t._v("#")]),t._v(" cwd")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("string")]),a("br"),t._v("\nDefault: "),a("code",[t._v("process.cwd()")])]),t._v(" "),a("p",[t._v("Directory to start from.")]),t._v(" "),a("h5",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("string")]),a("br"),t._v("\nDefault: "),a("code",[t._v("'file'")]),a("br"),t._v("\nValues: "),a("code",[t._v("'file'")]),t._v(" "),a("code",[t._v("'directory'")])]),t._v(" "),a("p",[t._v("The type of paths that can match.")]),t._v(" "),a("h5",{attrs:{id:"allowsymlinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowsymlinks"}},[t._v("#")]),t._v(" allowSymlinks")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("boolean")]),a("br"),t._v("\nDefault: "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("Allow symbolic links to match if they point to the chosen path type.")]),t._v(" "),a("h3",{attrs:{id:"findup-exists-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-exists-path"}},[t._v("#")]),t._v(" findUp.exists(path)")]),t._v(" "),a("p",[t._v("Returns a "),a("code",[t._v("Promise<boolean>")]),t._v(" of whether the path exists.")]),t._v(" "),a("h3",{attrs:{id:"findup-sync-exists-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-sync-exists-path"}},[t._v("#")]),t._v(" findUp.sync.exists(path)")]),t._v(" "),a("p",[t._v("Returns a "),a("code",[t._v("boolean")]),t._v(" of whether the path exists.")]),t._v(" "),a("h4",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Path to a file or directory.")]),t._v(" "),a("h3",{attrs:{id:"findup-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findup-stop"}},[t._v("#")]),t._v(" findUp.stop")]),t._v(" "),a("p",[t._v("A "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Symbol")]),a("OutboundLink")],1),t._v(" that can be returned by a "),a("code",[t._v("matcher")]),t._v(" function to stop the search and cause "),a("code",[t._v("findUp")]),t._v(" to immediately return "),a("code",[t._v("undefined")]),t._v(". Useful as a performance optimization in case the current working directory is deeply nested in the filesystem.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" findUp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'find-up'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("directory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("basename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'work'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" findUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related"}},[t._v("#")]),t._v(" Related")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/find-up-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("find-up-cli"),a("OutboundLink")],1),t._v(" - CLI for this module")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/pkg-up",target:"_blank",rel:"noopener noreferrer"}},[t._v("pkg-up"),a("OutboundLink")],1),t._v(" - Find the closest package.json file")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/pkg-dir",target:"_blank",rel:"noopener noreferrer"}},[t._v("pkg-dir"),a("OutboundLink")],1),t._v(" - Find the root directory of an npm package")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/resolve-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("resolve-from"),a("OutboundLink")],1),t._v(" - Resolve the path of a module like "),a("code",[t._v("require.resolve()")]),t._v(" but from a given path")])]),t._v(" "),a("hr"),t._v(" "),a("div",{attrs:{align:"center"}},[a("b",[a("a",{attrs:{href:"https://tidelift.com/subscription/pkg/npm-find-up?utm_source=npm-find-up&utm_medium=referral&utm_campaign=readme"}},[t._v("Get professional support for 'find-up' with a Tidelift subscription")])]),t._v(" "),a("br"),t._v(" "),a("sub",[t._v("\n\t\tTidelift helps make open source sustainable for maintainers while giving companies"),a("br"),t._v("assurances about security, maintenance, and licensing for their dependencies.\n\t")])])])}),[],!1,null,null,null);s.default=e.exports}}]);