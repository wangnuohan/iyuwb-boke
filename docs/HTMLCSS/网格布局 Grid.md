### Grid 网格布局
> `display:grid;`  开启Gird布局（现在浏览器内置grid布局，但是存在兼容性问题）
-   采用 `grid` 布局的区域，称为容器，内部的子元素，称为项目。
-   比如下面例子中 `div.grid` 为容器，里面的 `div.demo` 为项目

### 1. `display`

`display:grid`或者`display:inline-gird`表示块级或者行内元素。


css代码：
```css
.grid {
    display: grid; 
    /* or display:inlie-gird; */
    grid-template-rows: 100px 100px 100px ;
    grid-template-columns: 100px 100px 100px ;
}

.demo {
    background-color: #eee;
}
```
html代码：
```html
<body>
    <span class="left">left</span>
    <div class="grid">
        <div class="demo">1</div>
        <div class="demo">2</div>
        <div class="demo">3</div>
        <div class="demo">4</div>
        <div class="demo">5</div>
        <div class="demo">6</div>
        <div class="demo">7</div>
        <div class="demo">8</div>
        <div class="demo">9</div>
    </div>
    <span class="right">right</span>
</body>
```


块级元素：

![块级元素](https://iyuwb.gitee.io/notes/images/grid-01.png)

行内块元素：

![行内级元素](https://iyuwb.gitee.io/notes/images/grid-02.png)



### 2. `grid-template-rows`和`grid-template-columns`

-   `grid-template-columns`：定义每一列的列宽(可以使用绝对单位，也可以使用百分比)

-   `grid-template-rows`：定义每一行的行高

```css
//定义三行三列宽高一百的盒子
.grid {
    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
}
```
-   `repeat()`：重复值，可以使用语法repeat(重复次数，重复的值)

    -    在`repeat`中可以使用`auto-fill`,根据容器大小，自动填充满单元格
```css
.grid {
    display: grid;
    grid-template-rows: repeat(3,100px);
    grid-template-columns: repeat(3,100px)
}
```
以上两种方式，可以创建一个3*3的宽高100的盒子

![grid盒子项目](https://iyuwb.gitee.io/notes/images/grid-01.png)
```css
.grid {
        display: grid;
        grid-template-rows: repeat(4, 100px);
        /* 自适应 充满行或者列 */
        grid-template-columns: repeat(auto-fill, 200px) 
}
```
使用`auto-fill`，创建，会根据屏幕尺寸，自适应列的数目：

![auto-fill](https://iyuwb.gitee.io/notes/images/grid-03.png)


![auto-fill](https://iyuwb.gitee.io/notes/images/grid-04.png)


-   `fr`关键字：表示倍数关系
```css
.grid {
    display: grid;
    grid-template-rows: 200px 200px;
    grid-template-columns: 1fr 2fr;
}
```

-   `minmax()`：表示长度范围，接受两个参数，最大值和最小值


-   `auto`：自动


-   网格线中名称
### `gird-row-gap`,`gird-columu-gap`,`gird-gap`
> 设置行列之间的间距 `gird-gap`为以上两个属性的缩写

-   `gird-row-gap`：设置行与行之间的间距，行间距
-   `gird-columu-gap`：设置列与列之间的间距，列间距
-   `gird-gap`：合并简写 `gird-gap: <gird-row-gap>  <gird-columu-gap>`

::: tip 注意
根据最新标准，以上属性前缀已经删除，现在可以写为： `row-gap`, `columu-gap`和 `gap`
:::

### `gird-template-areas`

`gird-template-areas`：自定义区域


### `gird-auto-flow`
`gird-auto-flow`：设置先行后列还是先列后行