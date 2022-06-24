const path = require('path');
const  autoGetSidebarOptionBySrcDir = require('./utils/sidebar');
module.exports = {
  // plugins: ['autobar'],
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
    sidebar: autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../pages")),
    // sidebarDepth:2,
    nav:require("./nav.js"),
  },
}