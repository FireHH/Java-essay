(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{551:function(t,D,v){"use strict";v.r(D);var _=v(7),s=Object(_.a)({},(function(){var t=this,D=t._self._c;return D("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[D("p",[t._v("前不久，某音<前端盼哥>发布了个人的项目格子桌面，由于粉丝量比较多，热度还是比较大的，一大波程序员赶来凑热闹，网站内测阶段就遭到DDOS攻击，上线更是被狂刷CDN流量，\n先不说产品怎么样，不予评价，每个努力的人都值得被尊重！今天主要来说说如何防DDOS攻击？")]),t._v(" "),D("h2",{attrs:{id:"什么是ddos攻击"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#什么是ddos攻击"}},[t._v("#")]),t._v(" 什么是DDOS攻击？")]),t._v(" "),D("p",[t._v("分布式拒绝服务攻击(英文意思是Distributed Denial of Service，简称DDOS)是指处于不同位置的多个攻击者同时向一个或数个目标发动攻击，或者一个攻击者控制了位于不同位置的多台机器并利用这些机器对受害者同时实施攻击。由于攻击的发出点是分布在不同地方的，这类攻击称为分布式拒绝服务攻击，其中的攻击者可以有多个。")]),t._v(" "),D("p",[t._v("DDoS攻击是一种常见的应用层攻击手段，攻击者借助代理服务器生成指向目标系统的合法请求，造成服务器资源耗尽，一直到宕机崩溃。")]),t._v(" "),D("p",[t._v("黑客发起DDoS攻击大多会选择代理服务器，因为这样既可以隐藏身份，还可以绕过防火墙，因为基本上所有的防火墙都会检测并发的TCP/IP连接数目，超过一定数目一定频率就会被认为是Connection-Flood。有些也会使用肉鸡来发动DDoS攻击，很多公司在受到DDoS攻击时，会选择用一些防火墙来进行防御，或者选择机房进行流量迁移和清洗，这种两种方法对于小流量攻击的确有效，而且价格也便宜。但是当攻击者使用大流量DDoS攻击时，这两种方法就完全防御不住了。")]),t._v(" "),D("h2",{attrs:{id:"如何防ddos攻击"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#如何防ddos攻击"}},[t._v("#")]),t._v(" 如何防DDOS攻击？")]),t._v(" "),D("p",[t._v("1、限速：就像你们所理解的那样，对每个IP做速率限制。(只能对少量DDOS攻击有 效，但不推荐，很容易影响正常用户的访问速度)")]),t._v(" "),D("p",[t._v("2、限制访问：对可疑来源一刀切，限制区域访问，只针对用户集中的地区提供服务。降低服务器的压力(不推荐，流量本身就比较少，又要限制地区，流量则会进一步减少)")]),t._v(" "),D("p",[t._v("3、检查异常访问：对异常的行为进行分析，检查到异常进行封禁或者做一些验证逻辑。")]),t._v(" "),D("p",[t._v("4、增加带宽：提高服务器带宽也可以防御DDOS攻击，但要想通过带宽来完全抵御攻击，成本会很高。")]),t._v(" "),D("p",[t._v("5、使用负载均衡技术 ：负载均衡技术主要针对DDOS攻击中的CC攻击进行防护，CC攻击使web服务器或其他类型的服务器由于大量的网络传输而过载，一般这些网络流量是针对某一个页面或一个链接而产生的。减少单个web服务器负担，加快网站访问速度。")]),t._v(" "),D("p",[t._v("6、CDN：CDN节点可以有 效的降低服务器压力，也有一定防御DDOS攻击的能力(隐藏服务器IP，与反向代理服务器类似)。")]),t._v(" "),D("p",[t._v("7、高防IP：购买高仿iP接入；")]),t._v(" "),D("p",[t._v("8、高防服务：购买高仿服务器，当然价格也是昂贵的。专门针对服务器被DDOS攻击服务，可以很好的帮助服务器抵御DDOS/CC攻击。")]),t._v(" "),D("h2",{attrs:{id:"总结"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),D("p",[t._v("比如高防IP、高防服务器和提升带宽这些方法都需要付出大量成本，对于企业网站来说，每月上千的费用，boss也会为难，这也是为什么大多数企业公司都不注重网络安全，\n其次，这个防御费用对个人站长也是难上加难，而较好的防御办法则是采用CDN节点或反向代理服务器来隐藏服务器真实IP，让攻击者找不到攻击目标，而无从下手。")])])}),[],!1,null,null,null);D.default=s.exports}}]);