(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{482:function(e,r,t){"use strict";t.r(r);var o=t(42),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"enqueuezero-techshack-2019-05"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enqueuezero-techshack-2019-05"}},[e._v("#")]),e._v(" EnqueueZero Techshack 2019-05")]),e._v(" "),t("p",[e._v("新春快乐，这是 EnqueueZero Techshack 第 2019-05 期。以下内容存档于 "),t("a",{attrs:{href:"https://enqueuezero.com/techshack.weekly/2019-05-CN.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2019-05 CN"),t("OutboundLink")],1),e._v("; 其英文版笔记存档于"),t("a",{attrs:{href:"https://enqueuezero.com/techshack.weekly/2019-05.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2019-05"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("这篇关于系统依赖的文章介绍的非常到位 - 系统依赖确实让问题解决地更好了，但是问题没有消失，还会引入新的问题。我们需要了解这些问题并了解潜在的风险。 "),t("a",{attrs:{href:"https://research.swtch.com/deps",target:"_blank",rel:"noopener noreferrer"}},[e._v("swtch.com"),t("OutboundLink")],1),e._v("。另外一篇将系统的文章分析了设计一个“系统”应该注意些什么 Selecting a Software Architecture。")]),e._v(" "),t("p",[e._v('Systemd 的设计哲学有人喜爱有人呕吐，它作为一个 Monolithic 的什么都管的应用虽然违反了 Unix 的哲学，但是很多系统都预装了它 - 它其实也工作地很好。这篇讨论贴从历史和设计的角度探讨了 Systemd 到底是不是一个 "悲剧" '),t("a",{attrs:{href:"https://lwn.net/SubscriberLink/777595/a71362cc65b1c271/",target:"_blank",rel:"noopener noreferrer"}},[e._v("lwn.net"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("一篇小白文章 - 几种现代的软件架构 -  layered architecture, microservices, SOA, event sourcing "),t("a",{attrs:{href:"https://www.javacodegeeks.com/2019/01/selecting-software-architecture.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.javacodegeeks.com"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("根据 "),t("a",{attrs:{href:"https://blog.acolyer.org/2019/01/25/programming-paradigms-for-dummies-what-every-programmer-should-know/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog.acolyer.org"),t("OutboundLink")],1),e._v(" 的归纳，编程语言的范式总结起来大约有 20 来种。有志于学习新编程语言的可以来根据这个总结来选择。")]),e._v(" "),t("p",[e._v("Dropbox 工程博客更新了一篇关于探究 Kafka 吞吐率极限的文章，方法其实很简单，根据不同配置起的集群订阅 topics，然后发不同的流量过去，查看系统的性能指标。"),t("a",{attrs:{href:"https://blogs.dropbox.com/tech/2019/01/finding-kafkas-throughput-limit-in-dropbox-infrastructure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blogs.dropbox.com"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("GitLab 为啥用了 Ruby on Rails 作为主力开发框架呢？从商业上来看，生态好，依赖多，性能不行的部分用 Go 和 Vue 来补。"),t("a",{attrs:{href:"https://about.gitlab.com/2018/10/29/why-we-use-rails-to-build-gitlab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("about.gitlab.com"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Serverless 类别有两篇文章：weather.com 的工程师团队用 Azure Functions 每 3 分钟发 500000 个请求，"),t("a",{attrs:{href:"https://madeofstrings.com/2019/01/09/scaling-azure-functions-to-make-500000-requests-to-weather-com-in-under-3-minutes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("madeofstrings.com"),t("OutboundLink")],1),e._v("；另外一位同学使用 Lambda 测试一个 StackOverflow 类似的站点用 Serverless 开发的体验。")]),e._v(" "),t("p",[e._v("关于数据库，本周我们看到了 WePay 的工程博客介绍了如何设计高可用的 MySQL 集群 "),t("a",{attrs:{href:"https://wecode.wepay.com/posts/highly-available-mysql-clusters-at-wepay",target:"_blank",rel:"noopener noreferrer"}},[e._v("wecode.wepay.com"),t("OutboundLink")],1),e._v("；CockroachDB 如何在强一致性模型的约束下做 TradeOff "),t("a",{attrs:{href:"https://www.cockroachlabs.com/blog/consistency-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cockroachlabs.com"),t("OutboundLink")],1),e._v("；是时候该停用两段提交了 - 这货性能太低 "),t("a",{attrs:{href:"http://dbmsmusings.blogspot.com/2019/01/its-time-to-move-on-from-two-phase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("dbmsmusings.blogspot.com"),t("OutboundLink")],1),e._v("\n；如何把 PostgreSQL 数据库扩展到每个月能承受 12 亿行数据，文章中提到了各家 PG 数据库的优缺点 "),t("a",{attrs:{href:"https://medium.com/@gajus/lessons-learned-scaling-postgresql-database-to-1-2bn-records-month-edc5449b3067",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),t("OutboundLink")],1),e._v("；以及一个两篇关于 PostgreSQL 在 Kubernetes 中应该如何正确使用的姿势，文章讨论的比较宽泛，但点提得很好 "),t("a",{attrs:{href:"https://medium.com/@gajus/lessons-learned-scaling-postgresql-database-to-1-2bn-records-month-edc5449b3067",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("一些零碎的知识点：Python memoryview 可以有效减少内存的使用 "),t("a",{attrs:{href:"https://julien.danjou.info/high-performance-in-python-with-zero-copy-and-the-buffer-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("julien.danjou.info"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("有意思的工具：websocketd 可以将任何脚本转为 websocket 的服务端程序，有点像 WebSockets 的 CGI。"),t("a",{attrs:{href:"https://github.com/joewalnes/websocketd",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com"),t("OutboundLink")],1)]),e._v(" "),t("hr"),e._v(" "),t("SubscribeCNList"),e._v(" "),t("TechshackHeader")],1)}),[],!1,null,null,null);r.default=n.exports}}]);