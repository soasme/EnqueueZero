(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{502:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"concrete-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concrete-architecture"}},[e._v("#")]),e._v(" Concrete Architecture")]),e._v(" "),a("h2",{attrs:{id:"part-i-architecture-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-i-architecture-styles"}},[e._v("#")]),e._v(" Part I: Architecture Styles")]),e._v(" "),a("h3",{attrs:{id:"availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#availability"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/availability.html"}},[e._v("Availability")])],1),e._v(" "),a("p",[e._v("Availability measures the percentage of the time that the system is functional and working. It has a very simple formula:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   uptime\n------------  x 100%\n total time\n")])])]),a("p",[e._v("The availability clearly defines how well the system succeeds providing services to the customers. Improving the availability even a little bit needs a lot of men and efforts.")]),e._v(" "),a("h3",{attrs:{id:"maintainability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintainability"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/maintainability.html"}},[e._v("Maintainability")])],1),e._v(" "),a("p",[e._v("It's not surprising that more people are hired for maintaining a legacy system, instead of building from scratch. Improving the maintainability of a system reduces the cost and hence it's an over-going thing that most companies are thriving to achieve.")]),e._v(" "),a("p",[e._v("There is no easy way to measure the maintainability of a system, though we can take a lot of actions to make it simpler, make the life of operations easier, and make it easier to extend and grow.")]),e._v(" "),a("h3",{attrs:{id:"reliability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reliability"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/reliability.html"}},[e._v("Reliability")])],1),e._v(" "),a("p",[e._v("Reliability defines if the system continuous to work correctly.  To provide a reliable service, the system should be fault-tolerant, or resilient.")]),e._v(" "),a("p",[e._v("Providing a reliable service requires not to just do everything that keeps system available, but also introducing more thorough validations and reviews. A lot of engineering practises makes the service more reliable, for example, code review, continuous integration, security review, health checking, alerting, etc. By leveraging the monitoring & alerting system, we can reduce the time that system is deviated from spec. If necessary, degrade the surrounding features and let the service process only critical business logics.")]),e._v(" "),a("h3",{attrs:{id:"scalability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scalability"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/scalability.html"}},[e._v("Scalability")])],1),e._v(" "),a("p",[e._v("There are two ways of scaling.")]),e._v(" "),a("ul",[a("li",[e._v("Vertical scaling, or scaling up, by using more powerful machines with faster CPU, higher memory, and larger disk space.")]),e._v(" "),a("li",[e._v("Horizontal scaling, or scaling out, by adding more machines into a cluster. The performance of the cluster is the summary of all machines and the network in-between.")])]),e._v(" "),a("p",[e._v("Moore's law has reached the end, meaning the limit of vertical scaling is out there.\nAs a result, if you want your system continuously grow, do horizontal scale!")]),e._v(" "),a("h3",{attrs:{id:"layered-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layered-architecture"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/layered-architecture.html"}},[e._v("Layered Architecture")])],1),e._v(" "),a("p",[e._v("The layered architecture has several other names, such as onion architecture, the clean architecture, etc. The basic theory is, you organize the components layer by layer in which only the upstream layer can make calls to the downstream layers.")]),e._v(" "),a("h3",{attrs:{id:"microservices-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservices-architecture"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/microservices.html"}},[e._v("Microservices Architecture")])],1),e._v(" "),a("p",[e._v("Microservices architecture is an architectural style that structured applications as a set of loosely decoupled services. The advantage of microservices architecture is it enables large and complex application to continuously scale and evolve.")]),e._v(" "),a("h2",{attrs:{id:"part-ii-architecture-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-ii-architecture-blocks"}},[e._v("#")]),e._v(" Part II: Architecture Blocks")]),e._v(" "),a("h3",{attrs:{id:"access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-token"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/access-token.html"}},[e._v("Access Token")])],1),e._v(" "),a("p",[e._v("Access Token is a unique string that represents who is using an account browsing the internet.")]),e._v(" "),a("h3",{attrs:{id:"alerting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alerting"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/alerting.html"}},[e._v("Alerting")])],1),e._v(" "),a("p",[e._v('Alerts indicates the application deviates from a normal state.\nThe goal of alerting is to reach a human to remedy an issue.\nAlerting usually consists of two parts: setting rules and setting notification targets.\nAlerting rules defines when to trigger alerts, such as "average response time over last 5 minutes is greater than 2 seconds", "ping check failed over consecutive 3 times", etc.\nAlerting targets defines where to send alerts, such as IRC, Slack, Email, PagerDuty, etc.')]),e._v(" "),a("h3",{attrs:{id:"back-pressure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-pressure"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/back-pressure.html"}},[e._v("Back-pressure")])],1),e._v(" "),a("p",[e._v("Producer-consumer model is very helpful to decouple the system components. However, the situation is quite often in which producer produces jobs more rapidly than consumers can consume them. It's a challenge to manage a large number of unconsumed jobs.")]),e._v(" "),a("p",[e._v("Applying back-pressure is one effective technique to handle high-load. We tend to handle already accepted requests and transactions first, and reject those can't be handled. If you have many components and the producing-consuming speed might mismatch, consider back-pressure.")]),e._v(" "),a("h3",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container.html"}},[e._v("Container")])],1),e._v(" "),a("p",[e._v("A container is merely an OS process, except that it's being isolated, secured, and limited. All values added to the process make the container the dominant technology in the cloud era.")]),e._v(" "),a("h4",{attrs:{id:"container-and-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-clone"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container-and-clone.html"}},[e._v("Container and Clone")])],1),e._v(" "),a("p",[e._v("The most essential system call of creating a Linux container is "),a("code",[e._v("clone()")]),e._v(". With flags set to "),a("code",[e._v("CLONE_NEWNS|CLONE_NEWPID|CLONE_NEWUSER|...")]),e._v(",\nthe cloned process is placed into some dedicated namespaces, such as file system, pid, user, etc.")]),e._v(" "),a("h4",{attrs:{id:"container-and-cgroups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-cgroups"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container-and-cgroups.html"}},[e._v("Container and CGroups")])],1),e._v(" "),a("p",[e._v("CGroups is a Kernel feature that organizes processes into hierarchical groups to limit and monitor their system usage such as CPU, memory, disk, network and so on.")]),e._v(" "),a("h4",{attrs:{id:"container-and-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-namespace"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container-and-namespace.html"}},[e._v("Container and Namespace")])],1),e._v(" "),a("p",[e._v("One major use case of the namespace is to isolate processes belonging to a container from other containers or the system namespace.")]),e._v(" "),a("h4",{attrs:{id:"container-and-nsenter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-nsenter"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container-and-nsenter.html"}},[e._v("Container and NSEnter")])],1),e._v(" "),a("p",[e._v("NSEnter is a utility enters the namespaces of one or more other processes and then executes the specified program. In other words, we jump to the inner side of the namespace.")]),e._v(" "),a("h4",{attrs:{id:"container-and-unionfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-unionfs"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/container-and-unionfs.html"}},[e._v("Container and UnionFS")])],1),e._v(" "),a("p",[e._v("Union File System or UnionFS variants such as AUFS, btrfs, vfs, and devicemapper are the file system that used by most container engines.  It allows files and directories of separate file systems overlaid one by one, forming a final single coherent file system.")]),e._v(" "),a("h3",{attrs:{id:"circuit-breaker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circuit-breaker"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/circuit-breaker.html"}},[e._v("Circuit Breaker")])],1),e._v(" "),a("p",[e._v("Performance issue on upstream service often leads to downstream application crash. By applying with Circuit Breaker on downstream application side, we can prevent the entire system from cascading failure.  The state machine is in the core algorithm of Circuit Breaker. You can choose one of the listed library above and apply one of the listed API style above to improve your service.")]),e._v(" "),a("h3",{attrs:{id:"data-serialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-serialization"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/data-serialization.html"}},[e._v("Data Serialization")])],1),e._v(" "),a("ul",[a("li",[e._v("JSON is usually your first choice. It's simple, human readable, and has most widespread support.")]),e._v(" "),a("li",[e._v("Use MsgPack instead of JSON if performance is an issue.")]),e._v(" "),a("li",[e._v("Use Protobuf if type check and schema check is essential. gRPC is recommended as an RPC framework based on Protobuf.\n"),a("ul",[a("li",[e._v("Use Thrift if you're developing RPC services and don't like Protobuf syntax.")])])]),e._v(" "),a("li",[e._v("Use TOML if you're serializing some config files.")]),e._v(" "),a("li",[e._v("Use CSV if you're serializing data to non-technical people.\n"),a("ul",[a("li",[e._v("Use INI if you want something simpler.")]),e._v(" "),a("li",[e._v("Use YAML if you want something more complex.")])])]),e._v(" "),a("li",[e._v("Use language built-in serialization functions or methods if the use case is only limited in a single language, and you don't care security that much (not good).")])]),e._v(" "),a("h3",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/deployment.html"}},[e._v("Deployment")])],1),e._v(" "),a("p",[e._v("The goal of software deployment is to prepare a software application to run and operation in a specific environment. There are several deployment models but all of them have the same exit criteria, having a new version of application up and running and the old version retired.")]),e._v(" "),a("h3",{attrs:{id:"load-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balance"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/load-balance.html"}},[e._v("Load Balance")])],1),e._v(" "),a("p",[e._v("Load balancing is fundamental way to build a large distributed system, and hence knowing it well is important. To build a reliable system, a mature load balancer hardware or software is essential. If you have a lot of money, then buy a load balancing hardware. Otherwise, a load balancing software is recommended.")]),e._v(" "),a("h3",{attrs:{id:"dns-load-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-load-balancing"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/dns-load-balancing.html"}},[e._v("DNS Load Balancing")])],1),e._v(" "),a("p",[e._v("DNS load balancing distributes requests across multiple IP addresses by configuring various DNS A records. Modern tools enable programmatically updating DNS records. When the incident happens, some of them can even automatically update the DNS records. The downside of DNS load balancing is that it cannot distribute requests evenly to the backend servers.")]),e._v(" "),a("h3",{attrs:{id:"in-memory-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-memory-database"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/in-memory-database.html"}},[e._v("In-Memory Database")])],1),e._v(" "),a("p",[e._v("In-memory databases are faster than on-disk databases because disk access is slower than memory access. Meanwhile, to overcome the drawback of data losing from crashing, we have to introduce strategies like snapshotting, transaction logging, consistent hashing, high availability. Despite of all the complexity introduced, people love in-memory databases when response time is really a criterion since it's probably the best solution. And in most case, Redis could be the first choice.")]),e._v(" "),a("h3",{attrs:{id:"job-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-queue"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/job-queue.html"}},[e._v("Job Queue")])],1),e._v(" "),a("p",[e._v("Job queue is an essential component to extend request-response model for handling time-consuming jobs. Choose a Job Queue framework that has API and features you like, and make sure that you have solutions to overcome the disadvantages.")]),e._v(" "),a("h3",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/load.html"}},[e._v("Load")])],1),e._v(" "),a("p",[e._v("Load is a set of numbers that describe performance of system. The meaning of numbers depends on what system is running.")]),e._v(" "),a("p",[e._v("If you are maintaining a production system, the high load averages or percentiles are things to worry about. When they're high, either identify the bottleneck or simply assign more servers or instances.")]),e._v(" "),a("h3",{attrs:{id:"periodic-scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#periodic-scheduler"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/periodic-scheduler.html"}},[e._v("Periodic Scheduler")])],1),e._v(" "),a("p",[e._v("Using crontab is the easiest way to schedule periodic jobs. The limitation is that you can’t control the resource usage and it’s less flexible. To run periodic jobs in a fine-controlled environment, you might want to choose Kubernetes CronJob. To leverage the power of periodic scheduler, you might want to integrate a scheduler library into your application.")]),e._v(" "),a("h3",{attrs:{id:"raft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft"}},[e._v("#")]),e._v(" Raft")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/raft-and-unreliable-network.html"}},[e._v("Raft and Unreliable Network")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/raft-and-the-nature-of-time.html"}},[e._v("Raft and The Nature of Time")])],1)])]),e._v(" "),a("h3",{attrs:{id:"sharding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharding"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/sharding.html"}},[e._v("Sharding")])],1),e._v(" "),a("p",[e._v("Sharding is a type of database partitioning technique that manages the subsets of data on several server hosts. It solves SPOF problem and single server resource limitation but introduces sharding logic to be implemented. Data sharding can be simple or complex depending on the sharding strategy.")]),e._v(" "),a("h3",{attrs:{id:"sidecar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidecar"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/sidecar.html"}},[e._v("Sidecar")])],1),e._v(" "),a("p",[e._v("Sidecar is a term for a one-wheeled device attached to the side of a motorcycle. In engineering, it signifies a deployment model that one or more separate processes or containers deployed along with the application. The solution is:")]),e._v(" "),a("ul",[a("li",[e._v("Place peripheral tasks like logging, monitoring, proxy, circuit breaker inside a standalone process or container.")]),e._v(" "),a("li",[e._v("The independent process or container co-locate with the supporting application.")]),e._v(" "),a("li",[e._v("Provide a generic interface for sending data whatever the programming language of the app is.")])]),e._v(" "),a("h3",{attrs:{id:"status-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-site"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/status-site.html"}},[e._v("Status Site")])],1),e._v(" "),a("p",[e._v("The status site is an individual website listing the particular component statuses that make up the product.")]),e._v(" "),a("p",[e._v("It shows below two information:")]),e._v(" "),a("ul",[a("li",[e._v("Display the status of each function of the business.")]),e._v(" "),a("li",[e._v('Display A list of incidents organized on a daily basis. If nothing happens, show "No incidents reported.", otherwise, show the details of the incidents, such as when the incidents were detected, how the incidents were handled, and when the incidents were resolved.')])]),e._v(" "),a("p",[e._v("It has below goals:")]),e._v(" "),a("ul",[a("li",[e._v("Show how reliable the platform is.")]),e._v(" "),a("li",[e._v("Show how well the platform is recovering from failure.")]),e._v(" "),a("li",[e._v("Show how performance is as it evolves.")])]),e._v(" "),a("p",[e._v("The status site shows the statuses of components of the product. It's about to be transparent to users. Users know exactly where to look where there is downtime and staffs will be acting on the information they know is up-to-date.")]),e._v(" "),a("h3",{attrs:{id:"time-consuming-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-consuming-jobs"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/concepts/time-consuming-jobs.html"}},[e._v("Time-consuming Jobs")])],1),e._v(" "),a("p",[e._v("It's impossible to achieve both goals without changing the execution model, to keep the system responsive all the time and to complete the time-consuming jobs.")]),e._v(" "),a("p",[e._v("There are at least three solutions: slicing jobs, pre-executing jobs, post-executing jobs.")]),e._v(" "),a("h3",{attrs:{id:"time-series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-series"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/time-series.html"}},[e._v("Time Series")])],1),e._v(" "),a("p",[e._v("A time series is a series of data points indexed (or listed or graphed) in time order.")]),e._v(" "),a("p",[e._v("For example, A Linux system expose its load data by reading from "),a("code",[e._v("/proc/loadavg")]),e._v(". Then we could have such a metric that has "),a("code",[e._v("proc.loadavg.1m")]),e._v(" as metric name, "),a("code",[e._v("host=web-1.svc.prod.example.com")]),e._v(" as tag, "),a("code",[e._v("0.03")]),e._v(" as data point value. The time series is a sequence of floating value like "),a("code",[e._v("0.03")]),e._v(" that reflects system load over time.")]),e._v(" "),a("p",[e._v("It's also an interesting topic to perform "),a("a",{attrs:{href:"https://www.notion.so/soasme/666cc0233aca49a589fbc394611dcc4c",target:"_blank",rel:"noopener noreferrer"}},[e._v("time series analytics"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"part-iii-architecture-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-iii-architecture-examples"}},[e._v("#")]),e._v(" Part III: Architecture Examples")]),e._v(" "),a("h3",{attrs:{id:"sqlalchemy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlalchemy"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/sqlalchemy.html"}},[e._v("SQLAlchemy")])],1),e._v(" "),a("p",[e._v("SQLAlchemy might be the best ORM software in the Python world regardless of your taste. Though you need to learn several fundamental concepts, it's still easy to use. If you're writing a Web application and needs to manipulate data with databases, SQLAlchemy is always a strong candidate.")]),e._v(" "),a("h3",{attrs:{id:"apscheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apscheduler"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/apscheduler.html"}},[e._v("APScheduler")])],1),e._v(" "),a("p",[e._v("APScheduler is a job scheduling framework that executes code either one-off or periodically. People often integrate it into an existing Python application for running interval jobs.")]),e._v(" "),a("h3",{attrs:{id:"airbnb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airbnb"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/airbnb-architecture.html"}},[e._v("Airbnb")])],1),e._v(" "),a("p",[e._v("Airbnb is a website that operates an online marketplace and hospitality service for people to lease or rent short-term lodging. The challenges for the engineering team includes high-availability, quick-scaling, etc.")]),e._v(" "),a("h3",{attrs:{id:"skipper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipper"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/architecture/skipper.html"}},[e._v("Skipper")])],1),e._v(" "),a("p",[e._v("Skipper is an HTTP router and reverse proxy for service composition. The internal modules are well-decoupled and extendable.\nIt makes adding new data sources and new routing strategies without losing performance.")])])}),[],!1,null,null,null);t.default=r.exports}}]);