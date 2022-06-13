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
  themeConfig: {
    logo: '/img/logo.jpg',
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Java基础',
        items: [
          {
            text: 'Java面向对象',
            link: '/pages/java-base.md',
          },
          {
            text: 'Java数据类型',
            link: '/pages/java-datatype.md',
          },
          {
            text: 'Java集合',
            link: '../pages/java-collection.md',
          },
          {
            text: 'Java常用类库',
            link: '../pages/java-tools.md',
          },
          {
            text: 'Java IO',
            link: '../pages/java-io.md',
          },
          {
            text: 'Java反射',
            link: '../pages/java-io.md',
          },
          {
            text: 'Java泛型',
            link: '../pages/java-io.md',
          },
          {
            text: 'Java并发多线程',
            link: '../pages/java-juc.md',
          },
          {
            text: 'Java你不知道的小事',
            link: '../pages/java-small-story.md',
          },
        ],
      },
      {
        text: 'Spring',
        items: [
          {
            text: 'Spring初识',
            link: '../pages/spring.md',
          },
          {
            text: 'Spring IOC',
            link: '../pages/spring-ioc.md',
          },
          {
            text: 'Spring AOP',
            link: '../pages/spring-aop.md',
          },
          {
            text: 'SpringMVC',
            link: '../pages/spring-mvc.md',
          },
        ],
      },
      {
        text: 'SpringBoot',
        items: [
          {
            text: 'SpringBoot基础',
            link: '../pages/spring-boot.md',
          },
          {
            text: 'SpringBoot自动装配原理',
            link: '../pages/spring-boot-autoconfig.md',
          },
          {
            text: 'SpringBoot启动原理',
            link: '../pages/spring-boot-start.md',
          },
          {
            text: 'SpringBoot自定义Starter',
            link: '../pages/spring-boot-starter.md',
          },
          {
            text: 'SpringBoot集成MyBatis',
            link: '../pages/spring-boot-mybatis.md',
          },
        ],
      },
      {
        text: '分布式微服务',
        items: [
          {
            text: 'SpringCloud初识',
            link: '../pages/spring-cloud.md',
          },
          {
            text: 'SpringCloud全家桶',
            link: '../pages/spring-cloud-all.md',
          },
          {
            text: 'SpringCloud Alibaba',
            link: '../pages/spring-cloud-alibaba.md',
          },
          {
            text: 'CAP及BASE理论',
            link: '../pages/cap-base.md',
          },
          {
            text: '分布式锁',
            link: '../pages/distribute-lock.md',
          },
          {
            text: '分布式事务',
            link: '../pages/distribute-trx.md',
            items:[
              {
                text: 'Alibaba Seata',
                link: '../pages/alibaba-seata.md',
              },
            ]
          },
          {
            text: '分布式缓存',
            link: '../pages/distribute-cache.md',
          },
        ],
      },
      {
        text: 'RPC',
        link: '../pages/rpc.md',
      },
      {
        text: '面试',
        items: [
          {
            text: '面试常见问题',
            link: '../pages/article.md',
          },
          {
            text: '面试笔记',
            link: '../pages/note.md',
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