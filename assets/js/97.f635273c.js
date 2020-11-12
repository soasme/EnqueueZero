(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{437:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"lock-free-queues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lock-free-queues"}},[t._v("#")]),t._v(" Lock-free Queues")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#context"}},[t._v("Context")])]),e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#solutions"}},[t._v("Solutions")]),e("ul",[e("li",[e("a",{attrs:{href:"#compare-swap"}},[t._v("Compare & Swap")])]),e("li",[e("a",{attrs:{href:"#linked-list-based"}},[t._v("Linked-List based")])]),e("li",[e("a",{attrs:{href:"#array-based"}},[t._v("Array based")])]),e("li",[e("a",{attrs:{href:"#retry-loop"}},[t._v("Retry-Loop")])]),e("li",[e("a",{attrs:{href:"#aba-problem"}},[t._v("ABA problem")])])])]),e("li",[e("a",{attrs:{href:"#conclusions"}},[t._v("Conclusions")])]),e("li",[e("a",{attrs:{href:"#references"}},[t._v("References")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("FIFO queue is an important data structure. Queues are also being implemented in many other algorithms, such as quick-sort.")]),t._v(" "),e("p",[t._v("Applying queue data structure to concurrency is important. This data structure enables us to distribute information from one execution unit to another. However, it enforces us to make sure data in queue are well synchronized without being overwritten by another process or thread.")]),t._v(" "),e("p",[t._v("Other than trivial and tedious locking solution, there is another way to do it. It's called Lock-Free Queue.")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Lock-free queue is a queue applying to concurrency but without locking. When using lock-free queue, slow or stopped processes do not prevent other processes from accessing data in it.")]),t._v(" "),e("p",[t._v("Lock-free queue has two main interfaces just like normal queue:")]),t._v(" "),e("ul",[e("li",[t._v("Enqueue. Append a new data to the end of the queue.")]),t._v(" "),e("li",[t._v("Dequeue. Pop out the first data in the head of the queue.")])]),t._v(" "),e("p",[t._v("Lock-free queue has below advantages and disadvantages:")]),t._v(" "),e("ul",[e("li",[t._v("Advantage\n"),e("ul",[e("li",[t._v("Faster")]),t._v(" "),e("li",[t._v("No dead-lock")]),t._v(" "),e("li",[t._v("Reentrant")])])]),t._v(" "),e("li",[t._v("Disadvantage\n"),e("ul",[e("li",[t._v("Hard to set priority.")]),t._v(" "),e("li",[t._v("Need CPU support CAS.")])])])]),t._v(" "),e("h2",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),e("h3",{attrs:{id:"compare-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compare-swap"}},[t._v("#")]),t._v(" Compare & Swap")]),t._v(" "),e("p",[t._v("Compare & Swap, or CAS, is among one of modern CPU instruction set. It's used as an atom operation to change a value in memory if it's not modified.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ram"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" expect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        ram"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" current\n")])])]),e("p",[t._v("It's the fundamental instruction of lock-free queue algorithm. Without this, we have to apply a lock onto the queue.")]),t._v(" "),e("h3",{attrs:{id:"linked-list-based"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linked-list-based"}},[t._v("#")]),t._v(" Linked-List based")]),t._v(" "),e("p",[t._v("The linked-list-based lock-free queue algorithm appears below.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("Enqueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  q "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new record\n  q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n  q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null\n\n  repeat\n    p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail\n    ok "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CAS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  until ok\n\n  CAS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n")])])]),e("p",[t._v("Dequeue:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("Dequeue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  repeat\n    p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERR_EMPTY\n  until "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" CAS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n")])])]),e("h3",{attrs:{id:"array-based"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-based"}},[t._v("#")]),t._v(" Array based")]),t._v(" "),e("p",[t._v("Array-based lock-free queue is simpler than linkedlist-based. It requires a ring array. The rules are described below:")]),t._v(" "),e("ul",[e("li",[t._v("Each element can have for possible values: HEAD, TAIL, EMPTY, and data.")]),t._v(" "),e("li",[t._v("When initialized, all elements are EMPTY except two of them are HEAD and TAIL. It means this is an empty ring array.")]),t._v(" "),e("li",[t._v("Enqueue operation is to update (TAIL, EMPTY) to (data, TAIL) via CAS. The queue is full if (TAIL, EMPTY) is not found.")]),t._v(" "),e("li",[t._v("Dequeue operation is to update (HEAD, data) to (EMPTY, HEAD) via CAS. The queue is empty if (HEAD, TAIL) is found.")])]),t._v(" "),e("h3",{attrs:{id:"retry-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retry-loop"}},[t._v("#")]),t._v(" Retry-Loop")]),t._v(" "),e("p",[t._v("In linkedlist-based solution, "),e("code",[t._v("p = tail")]),t._v(" has a potential problem. If other threads are hanging after CAS operation but before executing "),e("code",[t._v("p = tail")]),t._v(", then current thread will be blocked.")]),t._v(" "),e("p",[t._v("The solution can be introducing a retry-loop:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("Enqueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  q "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new record\n  q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n  q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null\n\n  repeat\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n    ok "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CAS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  until ok\n\n  CAS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n")])])]),e("h3",{attrs:{id:"aba-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aba-problem"}},[t._v("#")]),t._v(" ABA problem")]),t._v(" "),e("p",[t._v("CAS instruction introduces one problem: if one value is being modified twice and back to its origin value at the second time, then CAS cannot find it's being modified.")]),t._v(" "),e("p",[t._v("We have at least two solutions:")]),t._v(" "),e("ul",[e("li",[t._v("Double-CAS: add a counter in parallel with data. When the data is modified, the counter has to being increased.")]),t._v(" "),e("li",[t._v("Ref-Count: we keep track of when it is safe to recycle a node by assigning each node a reference count, and not reusing a node until its reference count has gone to zero.")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("RefCount_SafeRead "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  loop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p\n    fetch_add"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refcnt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    goto loop\n")])])]),e("h2",{attrs:{id:"conclusions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[t._v("#")]),t._v(" Conclusions")]),t._v(" "),e("p",[t._v("Lock-Free queues provides us better performance for concurrent queue which is non-blocking and linearizable. Although it introduces ABA problem, we have some workaround solutions for it. In general, if if don't want to lock your queue in concurrent programming, try lock-free queue algorithm.")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.53.8674&rep=rep1&type=pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implementing Lock-Free Queues"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);