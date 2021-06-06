(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{441:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("A correctly configured index can make the SQL query fast. An index is a data structure in the database that created by "),a("code",[e._v("CREATE INDEX")]),e._v(" statement.")]),e._v(" "),a("p",[e._v("The theory is that finding from an ordered dataset is faster than from unordered. SQI index is some ordered rows.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/static/images/sql-index-ordered-is-fast.jpg",alt:"Ordered"}})]),e._v(" "),a("p",[e._v("The data structures for an index are Doubly LinkedList plus B-Tree.")]),e._v(" "),a("p",[e._v("Using Doubly LinkedList rather than ArrayList mainly because it's inefficient to make rooms sequential when you "),a("code",[e._v("INSERT")]),e._v(" data. In Doubly LinkedList, every node has two links referring to preceding and the following node.  Each leaf node is in a database block, which is in the same size.")]),e._v(" "),a("p",[e._v("An index B-Tree data structure can find a leaf node quickly by traversing from the root as less block as possible. A nice feature of B-Tree is that even with huge nodes the tree depth grows slowly.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/static/images/sql-index-data-structure.jpg",alt:"Ordered"}})]),e._v(" "),a("h2",{attrs:{id:"advantage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantage"}},[e._v("#")]),e._v(" Advantage")]),e._v(" "),a("p",[e._v("Run the WHERE clause faster if you do it right.")]),e._v(" "),a("p",[e._v("Queries with unique field detected like "),a("code",[e._v("WHERE id = 123345")]),e._v(" can be faster If you set a PRIMARY KEY for it.")]),e._v(" "),a("p",[e._v("Queries with concatenated unique fields detected like "),a("code",[e._v("WHERE category_id=1 and sub_category_id=2")]),e._v(" can be faster if you set a concatenated Index.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> CREATE UNIQUE INDEX category_pk ON products (category_id, sub_category_id);\n> SELECT name FROM product where category_id=1 and sub_category_id=2;\n")])])]),a("p",[e._v("Although we've created an index with two more fields, the index itself is still a B-tree index, only storing multiple field values in one leaf node. More importantly, order matters. Creating an index with "),a("code",[e._v("(category_id, sub_category_id)")]),e._v(" can help you run query "),a("code",[e._v("where category_id=1 and sub_category_id=2")]),e._v(" and query "),a("code",[e._v("where category_id=1")]),e._v(" faster, but not query "),a("code",[e._v("where sub_category_id=2")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"disadvantage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disadvantage"}},[e._v("#")]),e._v(" Disadvantage")]),e._v(" "),a("p",[e._v("After introducing the index, the speed of "),a("code",[e._v("INSERT")]),e._v(", "),a("code",[e._v("DELETE")]),e._v(", and "),a("code",[e._v("UPDATE")]),e._v(" gets slower.")]),e._v(" "),a("p",[e._v("The more indexes you created, the slower the "),a("code",[e._v("INSERT")]),e._v(" statement takes, for the simple reason that it needs to write more index data to disk, not to mention it also needs to keep index order and tree balance.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("DELETE")]),e._v(" statement is the happy one, for it shares the benefit of the boosted where clause querying unless you are querying without where clause. Think of it as a "),a("code",[e._v("SELECT")]),e._v(" plus deletions. The actual deletion is a reverse operation of "),a("code",[e._v("INSERT")]),e._v(": remove references in the index and keep tree balance.")]),e._v(" "),a("p",[e._v("Modification of values of indexed fields impacts the performance of The "),a("code",[e._v("UPDATE")]),e._v(" statement. Usually, the database removes old entry and adds a new one into the index, which is similar to "),a("code",[e._v("DELETE")]),e._v(" + "),a("code",[e._v("INSERT")]),e._v(".")]),e._v(" "),a("p",[e._v("The performance of all three statements is somewhat related to the number of indexes.")]),e._v(" "),a("h2",{attrs:{id:"inspect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspect"}},[e._v("#")]),e._v(" Inspect")]),e._v(" "),a("p",[e._v("We might have created multiple indexes on a table but have no clue which index to use. Apply with a wrong index might get the query slower than expected, as database will possibly scan much more rows. In MySQL, we can prefix a query with "),a("code",[e._v("EXPLAIN")]),e._v(" to check if the engine chooses the index we want. Redesign the indexes or optimize the query if it doesn't match.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("EXPLAIN SELECT name FROM product where category_id=1 and sub_category_id=2;\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);