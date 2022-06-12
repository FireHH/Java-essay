module.exports = {
  base: "/",
  title: 'Java essay',
  description: '一个学习成长的Java杂文站点',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.jpg',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.jpg',
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '分类',
        items: [
          {
            text: '文章',
            link: '/pages/article.md',
          },
          {
            text: '笔记',
            link: '/pages/note.md',
          },
        ],
      },
      {
        text: '关于',
        link: '/pages/about.md',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/FireHH/Java-essay',
      },
    ],
  },
}