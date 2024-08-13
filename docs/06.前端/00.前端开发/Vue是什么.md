---
title: Vue基础
date: 2023-12-25 16:34:44
permalink: /pages/49f7d3/
categories:
  - 前端
  - 前端开发
tags:
  - Vue
author: 
  name: Mr.Fire
  link: https://gitee.com/firegitspace/
---
## 什么是Vue
是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。

无论是简单还是复杂的界面，Vue 都可以胜任。

## Hello World
```vue
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      msg: 'Hello World!'
    }
  }
}).mount('#app')
```

```vue
<div id="app">
  <h1>
    {{ msg }}
  </h1>
</div>
```
 
以上是一个简单的Vue程序，在id为app的div上显示msg对应的内容：Hello World!


