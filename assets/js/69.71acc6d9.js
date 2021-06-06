(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{412:function(e,s,t){"use strict";t.r(s);var a=t(42),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"task-queues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-queues"}},[e._v("#")]),e._v(" Task Queues")]),e._v(" "),t("p",[e._v("In the previous example, we demonstrate a typical use case of using message queue to send and receive tasks from a message queue. This pattern has a name - task queues.")]),e._v(" "),t("p",[e._v("Task queues, a.k.a work queues, are message queues that distribute time-consuming tasks as messages among multiple workers.")]),e._v(" "),t("p",[e._v("The goal of task queues is to avoid time-consuming tasks from blocking the application by delaying the execution. The actual execution happens at a different component - worker. A worker process runs in the background, popping tasks from the queue and executing the job. The task is merely a message that has job definition as payload.")]),e._v(" "),t("p",[e._v("There is no limitation on the numbers of the publishers and workers. When there are multiple workers running,  worker processes compete with each other for getting new tasks. The task queue is able to dispatch tasks to different workers evenly.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" [publisher]                   [worker]\n              -> [||||||||] -> [worker]\n [publisher]                   [worker]\n                     ^ task queue\n")])])]),t("p",[e._v("It's pretty common multiple task queues are provisioned for processing different kinds of tasks. Some queue-as-a-service companies can have over thousands of task queues running in the production environment in practice. Such a pattern also serves as a solution for multi-tenanted applications.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n                           -> [worker]\n [publisher] -> [||||||||] \n                           -> [worker]\n                     ^ task queue for image cropping\n                     \n [publisher] -> [||||||||] -> [worker]\n                     ^ task queue for 3party service calls\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);