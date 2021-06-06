(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{415:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"useful-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful-components"}},[e._v("#")]),e._v(" Useful Components")]),e._v(" "),t("p",[t("strong",[e._v("Virtual Private Cloud (VPC).")]),e._v(" The VPC is a virtual network that provides resource provisioning and allocations in a trusted environment. Within the VPC, it typically has several "),t("em",[e._v("Availability Zones")]),e._v(", each of which is a high-available offering that protects applications from data center failures. There are more network components inside an availability zone that does actual data transfering, such as internet gateway, NAT gateway, VPN gateway, etc.")]),e._v(" "),t("p",[t("strong",[e._v("Nodes.")]),e._v(" Nodes are the entities performing the actual computations. They can be physical hosts or a virtual machine that exists on top of a guest operating system. From a security perspective, it's recommended nodes runs inside a VPC.")]),e._v(" "),t("p",[t("strong",[e._v("Container.")]),e._v(' The container is a lightweight solution of operating system virtualization. Containers are in essential a collection of processes running in the same namespace, which shares the same host machine kernel, utilizing UnionFS, Cgroups, etc. All required files for an application are packaged into a single container. Unlike network gears and nodes, containers are "invisible", that is, only exists in the runtime.')]),e._v(" "),t("p",[t("strong",[e._v("Load Balancer.")]),e._v(" The load balancer handles requests from end-user or internal services, and then forwards them to one of the healthy backend instances in the pool. A proper load balancing algorithm is selected, ensuring traffic can be distributed over all backend instances evenly.")]),e._v(" "),t("p",[t("strong",[e._v("Web Service.")]),e._v(" The web service is any piece of software that is used for data exchanging over the internet. Popular data exchanging protocols include XML, JSON, gRPC, Thrift, etc.")]),e._v(" "),t("p",[t("strong",[e._v("Web App.")]),e._v(" The web app is any piece of software that is available over the internet. It's a superset of web services. People often relates the web app to those web services have GUI and user interations. Web frameworks were invented to distribute web apps more easily, for example, spring, django, ruby on rails, etc. In the modern era, frontend web frameworks derives a single-page-app design, which encourages implementing the entire user interface in one page by using JavaScript technology.")]),e._v(" "),t("p",[t("strong",[e._v("Storage.")]),e._v(" The storage provides data retrieving and saving. There are many types of storage engines, each of which is optimized for a specific problem domain, such as relational database, in-memory database, searching database, document-oriented database, key-value database, column-oriented database, object database, graph database, time series database, etc.")]),e._v(" "),t("p",[t("strong",[e._v("Cache.")]),e._v(" The cache is a software that caches results from the storage. It can return the result faster when calling next time by means of memoizing data in memory. Data in cache is supposed to be volatile; when cache instance goes away, data is lost.")]),e._v(" "),t("p",[t("strong",[e._v("Message Queue.")]),e._v(" The message queue is a form of asynchronous messaging for inter-process communication. Messages are stored on the queue until they are consumed and deleted. Normally each message is only processed exact once. The processes can be in the same node or different node. The message queue makes it possible that the senders and the receivers do not need to interact with each other directly.")]),e._v(" "),t("p",[t("strong",[e._v("Artifact Warehouse.")]),e._v(" The artifact warehouse is a repository of software for the programming language. It's in essence a database of libraries.")]),e._v(" "),t("p",[t("strong",[e._v("Logging Warehouse.")]),e._v(" The logging warehouse is a repository of logs. Without logging warehouse, logging records either eats all disk spaces in a node or lose due to the logging rotation. We can derive more useful data from logging records. This is where data science steps in!")])])}),[],!1,null,null,null);a.default=n.exports}}]);