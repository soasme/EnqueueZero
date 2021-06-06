(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"count-distinct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-distinct"}},[t._v("#")]),t._v(" Count Distinct")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#problem"}},[t._v("Problem")])]),s("li",[s("a",{attrs:{href:"#solutions"}},[t._v("Solutions")]),s("ul",[s("li",[s("a",{attrs:{href:"#unix-commands"}},[t._v("Unix commands")])]),s("li",[s("a",{attrs:{href:"#python-script"}},[t._v("Python script")])]),s("li",[s("a",{attrs:{href:"#sql-database"}},[t._v("SQL Database")])]),s("li",[s("a",{attrs:{href:"#redis-hyperloglog-commands"}},[t._v("Redis HyperLogLog Commands")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem")]),t._v(" "),s("p",[t._v("Count-distinct problem is a problem of finding the number of distinct elements in a data set or data stream, within which you might possibly see some repeated elements. For example, "),s("code",[t._v("[1, 3, 2, 1, 5, 2, 4]")]),t._v(" has 5 distinct elements "),s("code",[t._v("[1, 2, 3, 4, 5]")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),s("h3",{attrs:{id:"unix-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix-commands"}},[t._v("#")]),t._v(" Unix commands")]),t._v(" "),s("p",[t._v("Sort input from stdin, and then count lines with unique values.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1\n3\n2\n1\n5\n2\n4'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" data.txt\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" data.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Advantage\n"),s("ul",[s("li",[t._v("Easy to use")])])]),t._v(" "),s("li",[t._v("Disadvantage\n"),s("ul",[s("li",[t._v("Poor performance when data set grows.")]),t._v(" "),s("li",[t._v("Huge memory usage when data set grows.")]),t._v(" "),s("li",[t._v("Limited data input types")]),t._v(" "),s("li",[t._v("Can't handle data set greater than 10^9  (Memory can store so many data).")])])])]),t._v(" "),s("h3",{attrs:{id:"python-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-script"}},[t._v("#")]),t._v(" Python script")]),t._v(" "),s("p",[t._v("Hold values into a Python "),s("code",[t._v("set")]),t._v(" data structure, and then count the size of the set.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dataset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" distinct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     distinct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distinct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Advantage\n"),s("ul",[s("li",[t._v("Easy to use")]),t._v(" "),s("li",[t._v("Good performance")]),t._v(" "),s("li",[t._v("Broad data input types")])])]),t._v(" "),s("li",[t._v("Disadvantage\n"),s("ul",[s("li",[t._v("Huge memory usage when data set grows.")]),t._v(" "),s("li",[t._v("Can't handle data set greater than 10^9 (Memory can store so many data).")])])])]),t._v(" "),s("p",[t._v("References")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.python.org/3/tutorial/datastructures.html#sets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python data structures - Set"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"sql-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-database"}},[t._v("#")]),t._v(" SQL Database")]),t._v(" "),s("p",[t._v("Counting distinct values from a table is a built-in feature for most SQL databases.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Advantage\n"),s("ul",[s("li",[t._v("Can handle huge data set (when index is properly set).")])])]),t._v(" "),s("li",[t._v("Disadvantage\n"),s("ul",[s("li",[t._v("Need to create connection to a database.")]),t._v(" "),s("li",[t._v("Limited use case")])])])]),t._v(" "),s("p",[t._v("Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.w3schools.com/sql/sql_distinct.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C School - SQL SELECT DISTINCT Statement"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"redis-hyperloglog-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-hyperloglog-commands"}},[t._v("#")]),t._v(" Redis HyperLogLog Commands")]),t._v(" "),s("p",[t._v("Applying dataset with HyperLogLog algorithm when inserting data. HyperLogLog can give estimated counting results.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("redis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PFADD dataset  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nredis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PFCOUNT dataset\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Advantage\n"),s("ul",[s("li",[t._v("Fast (O(1))")]),t._v(" "),s("li",[t._v("Memory efficient (a few KB in memory even counting 10^9 data set).")]),t._v(" "),s("li",[t._v("Can be paralleled.")])])]),t._v(" "),s("li",[t._v("Disadvantage\n"),s("ul",[s("li",[t._v("Only provide estimated counting, not accurate value.")])])])]),t._v(" "),s("p",[t._v("Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://redis.io/commands/pfadd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis command - PFADD"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://redis.io/commands/pfcount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis command - PFCOUNT"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);