# panda-ui
> 移动端Vue通用组件


## 使用


npm安装依赖

```shell
npm i -S panda-ui
```
1.直接引入

在入口文件main.js

```
import panda from 'panda-ui'
Vue.use(panda)
```

完成以上步骤就可以在全局范围内使用panda组件,如：

```
<v-button>确定</v-button>
```
2.按需引入

```
import {Style, VButton} from 'panda/src/module'
```
> 注意：按需引入需要单独引入Style


## 开发

### 技术栈
Vue、Vue-cli、ES6、Sass、Babel、Webpack、Eslint

### 环境准备
1. node、npm
2. git


### 开始开发

clone项目仓库

```shell
git clone
cd panda-ui
```
从develop开出新分支

```shell
git checkout develop
git branch feature-xxx
git checkout feature-xxx
```
安装依赖，查看示例

```shell
npm install
npm start //查看示例
```

### 构建

```shell
npm run build
```


### 发布

```shell
git add .
git commit -m '[build]: $VERSION'
git push origin master
npm publish
```


## 版本控制

git


## 风格指南

1. css样式遵循BEM（块、元素、修饰符）规范

例如：

```
.top-box { } //块
.top-box__item {} //元素
.top-box__item--disabled {} //修饰符

//todo 样式统加上前缀避免与业务代码样式冲突
如：.weui-cell  .weui-cell__access

```

BEM规范：http://getbem.com/introduction/
参考微信官方样式组件：https://weui.io/

2. 组件规范（参考Vue官方规范）

传送门：https://cn.vuejs.org/v2/style-guide/index.html

3. `Eslint`代码检测使用`airbnb`标准

## 目录结构

```
├── components                         通用组件
│   ├── button
│   │   ├── VButton.vue
│   │   └── VButtonBox.vue
│   ├── cell
│   │   ├── VCell.vue
│   │   ├── VCellGroup.vue
│   │   ├── VCellNote.vue
│   │   └── VCellTitle.vue
│   ├── icon
│   │   └── VIcon.vue
│   ├── input
│   │   └── VInput.vue
│   ├── switch
│   │   └── VSwitch.vue
│   └── tab
│       ├── VTab.vue
│       ├── VTabContainer.vue
│       └── VTabItem.vue
├── index.js
├── mixins
│   └── ellipsis.js
├── module.js
├── modules
│   ├── button
│   │   └── index.js
│   ├── cell
│   │   └── index.js
│   ├── icon
│   │   └── index.js
│   ├── input
│   │   └── index.js
│   ├── style
│   │   └── index.js
│   ├── switch
│   │   └── index.js
│   └── tab
│       └── index.js
└── style
    ├── base
    │   ├── fn.scss
    │   ├── mixinx.scss
    │   ├── skin
    │   │   ├── caiyun.scss
    │   │   └── hnm.scss
    │   └── variables.scss
    ├── global
    │   ├── animate.scss
    │   ├── common.scss
    │   ├── index.scss
    │   └── reset.scss
    ├── iconfont
    │   └── index.scss
    ├── ui.scss
    └── widget
        ├── button
        │   └── index.scss
        ├── cell
        │   ├── cell-global.scss
        │   └── cell-switch.scss
        ├── icon
        │   └── index.scss
        ├── index.scss
        └── tab
            └── index.scss
```


## Licensing

MIT

## Keywords

Vue UI Component Webapp





