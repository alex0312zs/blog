(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{502:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"yaml语言教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml语言教程"}},[t._v("#")]),t._v(" yaml语言教程")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v('YAML 是 "YAML Ain\'t a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。')]),t._v(" "),s("p",[t._v("YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别"),s("strong",[t._v("适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲")]),t._v("（例如：许多电子邮件标题格式和YAML非常接近）。")]),t._v(" "),s("p",[t._v("YAML 的配置文件后缀为 "),s("strong",[t._v(".yml")]),t._v("，如："),s("strong",[t._v("runoob.yml")]),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[t._v("yaml常用来用作配置文件，和json类似")])]),t._v(" "),s("h2",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("大小写敏感")])]),t._v(" "),s("li",[s("p",[t._v("使用缩进表示层级关系")])]),t._v(" "),s("li",[s("p",[t._v("缩进不允许使用tab，只允许空格")])]),t._v(" "),s("li",[s("p",[t._v("缩进的空格数不重要，只要相同层级的元素左对齐即可")])]),t._v(" "),s("li",[s("p",[t._v("'#'表示注释")])])]),t._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("YAML 支持以下几种数据类型：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("对象")]),t._v("：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）")]),t._v(" "),s("li",[s("strong",[t._v("数组")]),t._v("：一组按次序排列的值，又称为序列（sequence） / 列表（list）")]),t._v(" "),s("li",[s("strong",[t._v("纯量")]),t._v("（scalars）：单个的、不可再分的值")])]),t._v(" "),s("h2",{attrs:{id:"yaml-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-对象"}},[t._v("#")]),t._v(" YAML 对象")]),t._v(" "),s("p",[t._v("对象的几种表示形式：")]),t._v(" "),s("p",[t._v("1、对象键值对使用冒号结构表示 "),s("strong",[t._v("key: value")]),t._v("，冒号后面要加一个空格。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value\n")])])]),s("p",[t._v("2、也可以使用 "),s("strong",[t._v("key:{key1: value1, key2: value2, ...}")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("3、还可以使用缩进表示层级关系；")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("child-key1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("child-key2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value2\n")])])]),s("p",[t._v("同2，只是表示形式不同。")]),t._v(" "),s("p",[t._v("4、较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" complexkey1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("complexkey2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" complexvalue1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" complexvalue2\n")])])]),s("p",[t._v("意思即对象的属性是一个数组 [complexkey1,complexkey2]，对应的值也是一个数组 [complexvalue1,complexvalue2]")]),t._v(" "),s("h2",{attrs:{id:"yaml-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-数组"}},[t._v("#")]),t._v(" YAML 数组")]),t._v(" "),s("p",[t._v("以 "),s("strong",[t._v("-")]),t._v(" 开头的行表示构成一个数组：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" A\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" B\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" C\n")])])]),s("p",[t._v("YAML 支持多维数组，可以使用行内表示：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" A\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" B\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" C\n")])])]),s("p",[t._v("一个相对复杂的例子：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("companies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" company1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("price")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200W\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" company2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("price")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500W\n")])])]),s("p",[t._v("意思是 companies 属性是一个数组，每一个数组元素又是由 id、name、price 三个属性构成。")]),t._v(" "),s("p",[t._v("数组也可以使用流式(flow)的方式表示：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("companies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" company1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("price")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" company2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("price")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"复合结构-对象和数组组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复合结构-对象和数组组合"}},[t._v("#")]),t._v(" 复合结构（对象和数组组合）")]),t._v(" "),s("p",[t._v("数组和对象可以构成复合结构，例：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Ruby\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Perl\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Python \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("websites")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("YAML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yaml.org \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Ruby")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruby"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lang.org \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Python")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" python.org \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Perl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" use.perl.org\n")])])]),s("p",[t._v("转换为 js 为：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ruby'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Perl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Python'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("websites")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("YAML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yaml.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Ruby")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ruby-lang.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Python")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'python.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Perl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use.perl.org'")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"纯量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯量"}},[t._v("#")]),t._v(" 纯量")]),t._v(" "),s("p",[t._v("纯量是最基本的，不可再分的值，包括：")]),t._v(" "),s("ul",[s("li",[t._v("字符串")]),t._v(" "),s("li",[t._v("布尔值")]),t._v(" "),s("li",[t._v("整数")]),t._v(" "),s("li",[t._v("浮点数")]),t._v(" "),s("li",[t._v("Null")]),t._v(" "),s("li",[t._v("时间")]),t._v(" "),s("li",[t._v("日期")])]),t._v(" "),s("p",[t._v("使用一个例子来快速了解纯量的基本使用：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 布尔值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("TRUE")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#true,True都可以")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("FALSE")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#false，False都可以")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浮点数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.8523015e+5")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以使用科学计数法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 0b1010_0111_0100_1010_1110    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#二进制表示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用~表示null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字符串")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 哈哈 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字符串默认不使用引号表示")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以使用双引号或者单引号包裹特殊字符")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" newline\n      newline2    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#字符串可以拆成多行，每一行会被转化成一个空格")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2018-02-17")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#日期必须使用ISO 8601格式，即yyyy-MM-dd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2018-02-17T15:02:31+08:00")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区")]),t._v("\n")])])]),s("p",[t._v("多行字符串可以使用"),s("code",[t._v("|")]),t._v("保留换行符，也可以使用"),s("code",[t._v(">")]),t._v("折叠换行。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  Foo\n  Bar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("that")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  Foo\n  Bar")]),t._v("\n")])])]),s("p",[t._v("转为js代码如下。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Foo\\nBar\\n'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Foo Bar\\n' "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("+")]),t._v("表示保留文字块末尾的换行，"),s("code",[t._v("-")]),t._v("表示删除字符串末尾的换行。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("s1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  Foo")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("s2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("+\n  Foo\n \n \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("s3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n  Foo\n")])])]),s("p",[t._v("转为json代码如下")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Foo\\n'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Foo\\n\\n\\n'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Foo' "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("字符串之中可以插入 HTML 标记。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n  <p style="color: red">\n    段落\n  </p>')]),t._v("\n")])])]),s("h2",{attrs:{id:"转换数据格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换数据格式"}},[t._v("#")]),t._v(" 转换数据格式")]),t._v(" "),s("p",[t._v("允许使用两个感叹号，强制转换数据类型。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!!str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!!str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("转换js结果同：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"锚点引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锚点引用"}},[t._v("#")]),t._v(" 锚点引用")]),t._v(" "),s("p",[s("strong",[t._v("&")]),t._v(' 锚点和< span class="marked">* 别名，可以用来引用:')]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&defaults")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加锚点")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  postgres\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     localhost\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("development")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp_development\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*defaults")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <<表示合并，*引用锚点")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp_test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*defaults")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <<表示合并，*引用锚点")]),t._v("\n")])])]),s("p",[t._v("相当于:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  postgres\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     localhost\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("development")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp_development\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  postgres\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     localhost\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp_test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  postgres\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     localhost\n")])])]),s("p",[s("strong",[t._v("&")]),t._v(" 用来建立锚点（defaults），"),s("strong",[t._v("<<")]),t._v(" 表示合并到当前数据，***** 用来引用锚点。")]),t._v(" "),s("p",[t._v("下面是另一个例子:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&showell")]),t._v(" Steve \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Clark \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Brian \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Oren \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*showell")]),t._v(" \n")])])]),s("p",[t._v("转为js代码如下:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Steve'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Clark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Brian'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Oren'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Steve'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("yaml官网："),s("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yaml.org/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("yaml与js的转换demo："),s("a",{attrs:{href:"http://nodeca.github.io/js-yaml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nodeca.github.io/js-yaml/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("菜鸟教程："),s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruanyifeng.com/blog/2016/07/yaml.html"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);