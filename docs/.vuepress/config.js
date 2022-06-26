module.exports = {
  base: "/",
  title: 'Java essay',
  description: '一个Java程序员的成长记录',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/img/logo.jpg',
      },
    ],
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/img/logo.jpg',
    lastUpdated: '最后更新时间',
    sidebar: require("./sidebar"),
    sidebarDepth:2, //侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下。默认深度是1，提取h2标题；0禁用标题链接；最大值为2，同时提取h2和h3。
    nav:require("./nav.js"),
  },
}