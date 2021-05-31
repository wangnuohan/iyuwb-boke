# Git 日常使用

## Git 忽略文件

- 在仓库的根目录下创建一个 .gitignore 文件
- 将不需要被 git 管理的文件路径 写到 gitignore 文件中
- `idea.txt` 忽视 idea.txt 文件
- `.gitignore` 忽视.gitignore 文件
- `css/index.js` 忽视 css 下的 index.js
- `css/*.js` 忽视 css 下的所有 js 文件
- `css` 忽视 css 文件夹

## Tag 相关

### 创建 tag

```git
git tag tag名称 -m tag备注
```

### 推送 Tag

```git
git  push origin --tag

```

### 拉取 Tag

```git
git  pull origin --tag
```

### 根据 Tag 回退到之前版本

#### 查看所有 tag

```git
git tag
```

#### 查看指定 tag 找出打标签的那次提交 `commit id`

```git
git show tag名称
```

#### 版本回退，创建分支

```git
//版本回退

git reset --hard  提交commit-id

//创建分支并切换到新分支

git checkout -b 分支名称

```

:::tip 注意
通过标签回退版本后，需要创建一个新的分支，然后当前主干分支要立即回到原来的位置。在新的分支上修改代码
:::

#### 原分支立即回到原来的提交位置

```git
//切换到之前分支

git checkout 之前分支名称

//查看之前分支的原来位置提交id

git reflog

// 主分支回到原来提交位置
git reset --hard  原来提交commit-id

```

后续，切换分支，在新建分支上修改代码
