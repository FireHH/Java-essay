(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{487:function(t,e,s){"use strict";s.r(e);var a=s(7),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"分布式锁特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁特性"}},[t._v("#")]),t._v(" 分布式锁特性")]),t._v(" "),e("ul",[e("li",[t._v("互斥（线程独享）：即同一时刻只有一个线程能够获取锁")]),t._v(" "),e("li",[t._v("避免死锁：获得锁的线程崩溃后，不会影响后续线程获取锁，操作共享资源")]),t._v(" "),e("li",[t._v("隔离性：A获取的锁，不能让B去解锁（解铃还须系铃人）")]),t._v(" "),e("li",[t._v("原子性：加锁和解锁必须保证为原子操作")])]),t._v(" "),e("h2",{attrs:{id:"实现方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现方案"}},[t._v("#")]),t._v(" 实现方案")]),t._v(" "),e("h3",{attrs:{id:"数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),e("p",[t._v("通过唯一索引的方式实现，创建not null union的索引，数据库中有相同记录会报错，没有则成功，插入成功获取锁，删除释放锁")]),t._v(" "),e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),e("p",[t._v("setnx + set expire +lua\n或者\nhsetnx + set expire +lua")]),t._v(" "),e("h3",{attrs:{id:"zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[t._v("#")]),t._v(" Zookeeper")]),t._v(" "),e("p",[t._v("方案一：创建临时顺序节点node_n（编号不可重复），对节点进行排序，是最小号则获取锁成功，通过watch机制监听节点的删除事件")]),t._v(" "),e("ul",[e("li",[t._v("每个线程抢占锁之前，先尝试创建自己的 ZNode。")]),t._v(" "),e("li",[t._v("同样，释放锁的时候需要删除创建的 Znode。创建成功后，如果不是序号最小的节点， 就处于等待通知的状态。")]),t._v(" "),e("li",[t._v("每一个等通知的 Znode 节点，需要监视（watch）序号在自己前面的那个 Znode，以获取其删除事件。")]),t._v(" "),e("li",[t._v("只要上一个节点被删除了，就进行再一次判断，看看自己是不是序号最小的那个节点，如果是，自己就获得锁。就这样不断地通知后一个 ZNode 节点。")]),t._v(" "),e("li",[t._v("获得锁的客户端出现网络异常失联情况下，节点会自动删除，其他节点可获取锁。")])]),t._v(" "),e("p",[t._v("方案二：创建相同key的临时节点，创建成功获取到锁，失败则获取不到，通过watch机制监听节点的删除事件")]),t._v(" "),e("h3",{attrs:{id:"redisson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redisson"}},[t._v("#")]),t._v(" Redisson")]),t._v(" "),e("p",[t._v("基于redis实现")])])}),[],!1,null,null,null);e.default=r.exports}}]);