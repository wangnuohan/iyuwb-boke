# NPM 和 NPX 区别

## NPM

> Node Package Manager

> npm 是 Node.js 的软件包管理器，其目标是自动化的依赖性和软件包管理

## NPX

> npx 是执行 Node 软件包的工具，它从 npm5.2 版本开始，与 npm 捆绑在一起。

> 1.默认情况下，首先检查路径中是否存在要执行的包（即在项目中）；

> 2.如果存在，它将执行；

> 3.若不存在，意味着尚未安装该软件包，npx 将安装其最新版本，然后执行它；

> npx 还可以直接调用项目中安装的模块

注意：npx 可以用来避免全局安装，使用 npx 命令时。会让全局安装的模块下载到临时目录，使用之后会删除。下次使用需要重新安装。
