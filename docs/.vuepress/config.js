const htmlModules = require('./htmlModules.js');

const dayjs = require("dayjs");

module.exports = {
  base: "/",
  title: 'Java essay',
  // theme: require.resolve('../../theme/vdoing'),
  theme: 'vdoing',
  description: '后端技术网站,专注Java学习与总结，面试。Java基础，Spring,SpringBoot,SpringCloud,SpringCloudAlibaba,数据库设计,中间件,性能优化,开源技术等技术文章。',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Java essay",
      description: '后端技术网站,专注Java学习与总结，面试。Java基础，Spring,SpringBoot,SpringCloud,SpringCloudAlibaba,数据库设计,中间件,性能优化,开源技术等技术文章。',
    }
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  themeConfig: {
    logo: '/img/logo.png',
    lastUpdated: '最后更新时间',
    smoothScroll: true, //页面滚动
    sidebarDepth:2, //侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下。默认深度是1，提取h2标题；0禁用标题链接；最大值为2，同时提取h2和h3。
    nav:require("./nav.js"),
    // repo: 'FireHH/Java-essay',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    editLinks: false, // 启用编辑
    editLinkText: '编辑',
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring', 
    author: {
      name: 'Mr.Fire', // 必需
      link: 'https://github.com/FireHH', // 可选的
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/huge.jpg',
      name: 'Mr.Fire',
      slogan: '后端程序员一枚',
    },
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // bodyBgImg: [
    //   '/img/logo.jpg',
    //   '/img/header.jpg',
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 2, // body多张背景图时的切换间隔, 默认15，单位s

    // 社交图标 (显示于博主信息栏和页脚栏。)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:firelumf@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/FireHH/',
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/firegitspace/',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2021, // 博客创建年份
      copyrightInfo:
          'Mr.Fire | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Mr.Fire',
        link: 'https://gitee.com/firegitspace/'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'Java essay',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      "script",
      {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b4efcb3b959fd674ffa886696241c972";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    `
    ]     
  ],
  // 插件配置
  plugins: [

      // 'vuepress-plugin-baidu-autopush', // 百度自动推送
      //
      // [
      //   'vuepress-plugin-baidu-tongji', // 百度统计
      //   {
      //     hm: baiduCode,
      //   },
      // ],
    
      // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
      // 'fulltext-search',
    
      [
        'one-click-copy', // 代码块复制按钮
        {
          copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
          copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
          duration: 1000, // prompt message display time.
          showInMobile: false, // whether to display on the mobile side, default: false.
        },
      ],
        
      [
        'vuepress-plugin-zooming', // 放大图片
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
          options: {
            bgColor: 'rgba(0,0,0,0.6)',
          },
        },
      ],
      [
        'vuepress-plugin-comment', // 评论
        {
          choosen: 'valine',
          options: {
            el: '#valine-vuepress-comment',
            appId: 'DTvjv5hjkPB9OWpEQtm275gw-gzGzoHsz',
            appKey: 'yzMYgj5LDur92jlDvOSzcOql'
          },
        },
      ],
      [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
          transformer: (timestamp, lang) => {
            return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
          },
        },
      ],
   ],
    // 监听文件变化并重新构建
    extraWatchFiles: [
      '.vuepress/config.js',
      '.vuepress/config/htmlModules.js',
    ]

}