(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{542:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"常用函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用函数"}},[s._v("#")]),s._v(" 常用函数")]),s._v(" "),t("ul",[t("li",[s._v("coalesce ( expression [ ,...n ] ) ：返回其参数中第一个非空表达式")]),s._v(" "),t("li",[s._v("row_number() over(partition by field order by field)  : 每个分组内对行进行排序并编号")]),s._v(" "),t("li",[s._v("split(str,exp) ： 拆分字符串")]),s._v(" "),t("li",[s._v("size(ary)  ：求数组长度")]),s._v(" "),t("li",[s._v("concat_ws( Separator,field [ ,...n ]) ：连接字符串的函数")]),s._v(" "),t("li",[s._v("collect_list(field) ：对某一列进行合并")]),s._v(" "),t("li",[s._v("collect_set(field) ：对某一列进行合并（去重）")]),s._v(" "),t("li",[s._v("get_json_object(str,'$.field') ：解析json字符串，获取对应key的value值")]),s._v(" "),t("li",[s._v("date_add(timestamp, num)  ：时间计算，如添加固定天数")]),s._v(" "),t("li",[s._v("date_format(timestamp|str,formatStr) ：时间格式化")]),s._v(" "),t("li",[s._v("from_unixtime(unix_time, format)： 将一个时间戳转换为指定的格式")]),s._v(" "),t("li",[s._v("unix_timestamp(date[, pattern])：返回日期对应的时间戳")])]),s._v(" "),t("h2",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[s._v("#")]),s._v(" SQL")]),s._v(" "),t("ol",[t("li",[s._v("创建表")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" external "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    name String "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path String "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    title String "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    icon String "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    visible "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\nstored "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" orcfile\nlocation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/warehouse/my.db/table_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建临时表")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" external "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table_name stored "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" orcfile location "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/warehouse/my.db/table_name'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("创建临时视图")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("ss"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("createOrReplaceTempView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"table_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("删除视图")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("ss"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("catalog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dropTempView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"table_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("分区表插入")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v("  overwrite "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分区字段"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("查询分区表")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2024-01-01'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("json字符串解析")])]),s._v(" "),t("ul",[t("li",[s._v("正常json字符串")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" get_json_object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$.attr"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" attr "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2024-01-01'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("去掉字符串首尾的引号，替换转义字符")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" get_json_object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexp_replace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(\"*+)$|^(\"*+)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\\\\\\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.attr'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" attr "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2024-01-01'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("解析json中的数组")])]),s._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[s._v("explode 炸裂函数: explode函数能够将array及map类型的数据炸开，实现一行变多行")])]),s._v(" "),t("li",[t("p",[s._v("lateral view侧视图: Lateral 也是用来对数组进行列转行的，Lateral View主要解决在select使用UDTF（如explode）做查询的过程中查询只能包含单个UDTF，不能包含其它字段以及多个UDTF的情况（及不能添加额外的select列的问题）")])])])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# explode就是将hive一行中复杂的array或者map结构拆分成多行。配合 lateral view一起使用，能够将array或者map结构的数据展开并且添加额外的列。")]),s._v("\n\nlateral "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" explode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GET_JSON_OBJECT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("get_json_object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.query'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.objectInfo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ARRAY<STRUCT<objectCode: STRING,objectName: STRING>>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);