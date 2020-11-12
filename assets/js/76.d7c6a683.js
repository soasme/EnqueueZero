(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{419:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"programming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#programming"}},[e._v("#")]),e._v(" Programming")]),e._v(" "),r("h2",{attrs:{id:"_2pl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2pl"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/2PL.html"}},[e._v("2PL")])],1),e._v(" "),r("p",[e._v("The 2PL or Two-Phase Locking is a method to reach serializability.\nThe 2PL is straightforward like its name - it has two phases.")]),e._v(" "),r("ul",[r("li",[e._v("Phase 1, growing phase.\n"),r("ul",[r("li",[e._v("New locks may be acquired.")]),e._v(" "),r("li",[e._v("None of them can be released.")])])]),e._v(" "),r("li",[e._v("Phase 2, shrinking phase.\n"),r("ul",[r("li",[e._v("Existing locks may be released.")]),e._v(" "),r("li",[e._v("No new locks can be acquired.")])])])]),e._v(" "),r("h2",{attrs:{id:"actor-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actor-model"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/actor-model.html"}},[e._v("Actor Model")])],1),e._v(" "),r("p",[e._v("The actor is an isolated concurrent unit scheduled by the programming language.  The actor model is yet another concurrency solution. The benefit is lock-free. The downside is only a few tools or framework support it. Either way, if you're stuck at lock when doing concurrent programming, try actor model.")]),e._v(" "),r("h2",{attrs:{id:"asgi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asgi"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/asgi.html"}},[e._v("ASGI")])],1),e._v(" "),r("p",[e._v("ASGI is the next kin of WSGI. The specification defines a two-callable API in between web servers and asynchronous web applications. Its primary goal is to support HTTP, WebSocket, and more web standard protocols.")]),e._v(" "),r("h2",{attrs:{id:"asynchronous-and-synchronous"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-and-synchronous"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/async-and-sync.html"}},[e._v("Asynchronous and Synchronous")])],1),e._v(" "),r("p",[e._v("The major difference between synchronous and asynchronous is how they handle tasks.")]),e._v(" "),r("p",[e._v("Executing synchronously describes the sequence of code execution in one-by-one order. The execution of code must wait until previous operation finish, and won't execute next operation until itself finish.")]),e._v(" "),r("p",[e._v("Executing asynchronously refers to as submitting a task to a runner, and then immediately running next task without knowing the result of previous task. The submitted task will be completed or aborted at a certain time later.")]),e._v(" "),r("h2",{attrs:{id:"coroutine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coroutine"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/coroutine.html"}},[e._v("Coroutine")])],1),e._v(" "),r("p",[e._v("Coroutines implement multi-tasking by consuming less resource. The downside is that it introduces yield / resume into your code. If thread or process cannot meet your multi-tasking requirements, try coroutine, although it also means rewrite you application very likely.")]),e._v(" "),r("h2",{attrs:{id:"ffi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ffi"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/ffi.html"}},[e._v("FFI")])],1),e._v(" "),r("p",[e._v("If you have performance bottleneck when running the CPU-intensive calculation in VM language, and ALSO feels VM interpreter runs so slow, take a look at FFI! If you want to write your own interpreter language, also try to integrate libffi as a bonus!")]),e._v(" "),r("h2",{attrs:{id:"file-access-permission"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-access-permission"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/file-access-permission.html"}},[e._v("File Access Permission")])],1),e._v(" "),r("p",[e._v('This article describes File Access Permissions in UNIX. Here, file means regular file, directory file, block special file, character special file, FIFO, Socket, and Symbolic Link. As "Everything is a file" in UNIX, it\'s import to understand the File Access Permissions. Different from other articles, this one is going to explain the design of the File Access Permissions.')]),e._v(" "),r("p",[e._v("When we talk about File Access Permissions, people always think of the nine permission bits of each file - "),r("code",[e._v("rwxrwxrwx")]),e._v(". However, these permission bits are not the whole thing. The missing part are file IDs and process IDs. To complete the analysis of File Access Permissions,  we need both file and process. In this article, we describe file IDs, permission bits, and process IDs, and finally introduce a typical example.")]),e._v(" "),r("h2",{attrs:{id:"fuzzy-search"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-search"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/fuzzy-search.html"}},[e._v("Fuzzy Search")])],1),e._v(" "),r("p",[e._v("Fuzzy search can be applied whenever there is a search box. Under the hood, the fuzzy\nsearch requires approximate string matching. Among all algorithms, the Bitap algorithm\nis perhaps the best-known for approximate string matching.  However, it doesn't\nfit the case in which the searching dataset is huge since it requires a full scanning.\nPython function "),r("code",[e._v("get_close_matches")]),e._v(" in standard lib "),r("code",[e._v("difflib")]),e._v(" is the handiest tool\nready to use.")]),e._v(" "),r("p",[e._v("Installing fuzzy search plugin or utilities save a few seconds every time and thus several\nhours and days in your work and life.")]),e._v(" "),r("h2",{attrs:{id:"heat-maps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heat-maps"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/heatmap.html"}},[e._v("Heat Maps")])],1),e._v(" "),r("p",[e._v("Heat Map is a powerful tool for visualizing three-dimensional data. When performing analysis on latency, offset, utilization over time, don't forget Heat Maps!")]),e._v(" "),r("h2",{attrs:{id:"language-grammar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#language-grammar"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/language-grammar.html"}},[e._v("Language Grammar")])],1),e._v(" "),r("p",[e._v("Implement your own language might sound crazy but it's very doable. With these mature libraries, you don't necessarily need to understand complicated parser theory but still can create something! If you're interested in create a grammar syntax of specification and protocols, learn these libraries and try to build a tiny prototype to demonstrate your ideas.")]),e._v(" "),r("h2",{attrs:{id:"lock-free-queues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lock-free-queues"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/lock-free-queues.html"}},[e._v("Lock-free Queues")])],1),e._v(" "),r("p",[e._v("Lock-Free queues provides us better performance for concurrent queue which is non-blocking and linearizable. Although it introduces ABA problem, we have some workaround solutions for it. In general, if if don't want to lock your queue in concurrent programming, try lock-free queue algorithm.")]),e._v(" "),r("h2",{attrs:{id:"markdown-parser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#markdown-parser"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/markdown-parser.html"}},[e._v("Markdown Parser")])],1),e._v(" "),r("p",[e._v("In practice, most Markdown parser programs use regular expression or regex for parsing. There are some more options like "),r("a",{attrs:{href:"https://github.com/jgm/peg-markdown",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEG"),r("OutboundLink")],1),e._v(", etc. In this post, we'll write a simple but extensive markdown parser in nim-lang that can perform basic parsing. Beyond that, we'll also discuss how to improve the code to support more Markdown notations and dialects.")]),e._v(" "),r("h2",{attrs:{id:"pseudo-random-numbers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-random-numbers"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/pseudo-random-numbers.html"}},[e._v("Pseudo-Random Numbers")])],1),e._v(" "),r("p",[e._v("PRNG or Pseudo-random number generators are used for generating numbers distributed randomly.")]),e._v(" "),r("ul",[r("li",[e._v('The PRNG generates "random" numbers which would recur eventually over a period.')]),e._v(" "),r("li",[e._v("The Mersenne Twister and LCG are the two popular PRNG algorithms.")]),e._v(" "),r("li",[e._v("Don't use PRNG for cryptographic operations.")])]),e._v(" "),r("h2",{attrs:{id:"raft-and-stream-paradigm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raft-and-stream-paradigm"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/raft-and-stream-paradigm.html"}},[e._v("Raft and Stream Paradigm")])],1),e._v(" "),r("p",[e._v("Have you ever think about implement Raft in Stream data structure? It's so fun.")]),e._v(" "),r("h2",{attrs:{id:"secure-socks5-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secure-socks5-proxy"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/secure-socks5-proxy.html"}},[e._v("Secure SOCKS5 Proxy")])],1),e._v(" "),r("p",[e._v("By secretly deploying a secure SOCKS5 proxy server and choosing a strong cipher algorithm, people can break through severe network blockade. Shadowsocks could be your first choice.")]),e._v(" "),r("h2",{attrs:{id:"the-difference-between-sli-slo-and-sla"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-difference-between-sli-slo-and-sla"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/the-difference-between-sli-slo-and-sla.html"}},[e._v("The Difference between SLI, SLO, and SLA")])],1),e._v(" "),r("p",[e._v("The SLA, SLO, and SLI are related concepts though they're different concepts.")]),e._v(" "),r("ul",[r("li",[e._v("SLA or service level agreement is a contract that the service provider promises customers on service availability, performance, etc.")]),e._v(" "),r("li",[e._v("SLO or service level object is a goal that service provider wants to reach.")]),e._v(" "),r("li",[e._v("SLI or service level indicator is a measurement the service provider uses for the goal.")])]),e._v(" "),r("h2",{attrs:{id:"timezone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/timezone.html"}},[e._v("Timezone")])],1),e._v(" "),r("p",[e._v("As the earth is a sphere, different places in the world will have different clocks. Human invented timezone to split the globe into 24 areas by regions. The UTC or Coordinated Universal Time is the primary time standard by which the world regulates clocks and time.")]),e._v(" "),r("p",[e._v("Programmers need to be aware of the timezone and what it means to the time they handle. In this case, the timezone libraries can help to ease the problem.")]),e._v(" "),r("h2",{attrs:{id:"url-dispatcher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url-dispatcher"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/url-dispatcher.html"}},[e._v("URL Dispatcher")])],1),e._v(" "),r("p",[e._v("Most modern web frameworks provide a component called "),r("code",[e._v("Router")]),e._v(" or "),r("code",[e._v("URLDispatcher")]),e._v(" to resolve a function or method to handle requests to URLs.")]),e._v(" "),r("p",[e._v("There are many means to determine which function to execute for an URL.")]),e._v(" "),r("ul",[r("li",[e._v("Regex Resolution")]),e._v(" "),r("li",[e._v("Template Resolution")]),e._v(" "),r("li",[e._v("Directory Resolution")]),e._v(" "),r("li",[e._v("Function Resolution")])]),e._v(" "),r("h2",{attrs:{id:"wsgi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wsgi"}},[e._v("#")]),e._v(" "),r("RouterLink",{attrs:{to:"/concepts/wsgi.html"}},[e._v("WSGI")])],1),e._v(" "),r("p",[e._v("WSGI or Web Server Gateway Interface is a specification of "),r("a",{attrs:{href:"https://www.python.org/dev/peps/pep-3333",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEP 3333"),r("OutboundLink")],1),e._v(" that defines how the web server communicates with Python web applications.")]),e._v(" "),r("ul",[r("li",[e._v("WSGI is a contract of the HTTP application API in Python world.")]),e._v(" "),r("li",[e._v("WSGI is not an application, a server, or a software.")]),e._v(" "),r("li",[e._v("WSGI has application side and server side.\n"),r("ul",[r("li",[e._v("Application-side provides a function and return a value.")]),e._v(" "),r("li",[e._v("Server-side sends the function parameters in and handle the returned value.")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.python.org/dev/peps/pep-3333",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEP 3333"),r("OutboundLink")],1),e._v(" defines all aspects on WSGI.\n"),r("ul",[r("li",[e._v("However, you don't necessarily need to read the full spec just for knowing what it is.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);