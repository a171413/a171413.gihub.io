(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{436:function(t,e,n){"use strict";var o={components:{BaseTable:n(45).h},data:function(){return{tableData:[{title:"Update the Documentation",description:"Dwuamish Head, Seattle, WA 8:47 AM",done:!1},{title:"GDPR Compliance",description:"The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",done:!0},{title:"Solve the issues",description:"Fifty percent of all respondents said they would be more likely to shop at a company",done:!1},{title:"Release v2.0.0",description:"Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM",done:!1},{title:"Export the processed files",description:"The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.",done:!1},{title:"Arival at export process",description:"Capitol Hill, Seattle, WA 12:34 AM",done:!1}]}}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-table",{attrs:{data:t.tableData,"thead-classes":"text-primary"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("td",[n("base-checkbox",{model:{value:o.done,callback:function(e){t.$set(o,"done",e)},expression:"row.done"}})],1),t._v(" "),n("td",[n("p",{staticClass:"title"},[t._v(t._s(o.title))]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v(t._s(o.description))])]),t._v(" "),n("td",{staticClass:"td-actions text-right"},[n("el-tooltip",{attrs:{content:"Edit task",effect:"light","open-delay":300,placement:"top"}},[n("base-button",{attrs:{type:"link"}},[n("i",{staticClass:"tim-icons icon-pencil"})])],1)],1)]}}])})}),[],!1,null,null,null);e.a=component.exports},671:function(t,e,n){"use strict";n.r(e);var o=n(436),r=n(45),l={name:"widgets-page",components:{BaseSwitch:r.g,TimeLine:r.s,TimeLineItem:r.t,TaskList:o.a,BaseCheckbox:r.b},data:function(){return{allContributions:!0,pastWeekContributions:!1}}},c=n(1),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("card",{staticClass:"card-plain",attrs:{type:"timeline"}},[n("time-line",{attrs:{type:"simple"}},[n("time-line-item",{attrs:{inverted:"","badge-type":"warning"}},[n("span",{staticClass:"badge badge-success",attrs:{slot:"header"},slot:"header"},[t._v("生まれ")]),t._v(" "),n("p",{attrs:{slot:"content"},slot:"content"})]),t._v(" "),n("time-line-item",{attrs:{inverted:"","badge-type":"danger"}},[n("span",{staticClass:"badge badge-danger",attrs:{slot:"header"},slot:"header"},[t._v("小学校")]),t._v(" "),n("template",{slot:"content"},[n("p",[t._v("\n                  小学校には3つ通いました．父の仕事の関係で大分→北海道→東京と引っ越しを繰り返していました．\n                ")]),t._v(" "),n("p",[t._v("\n                  大分には幼稚園年中〜小学3年途中の間，住んでいました．\n                  小学校に片道1時間かけて徒歩で通っており，靴飛ばしをしていたら沿道の民家に入れてしまうという失態を犯したことがありました．\n                  その時は一緒に帰っていた友人の靴を借りて左右違う靴で帰りました．今考えればなぜそれでバレないと思ったのか謎でした．反省反省．\n                  この頃は特に趣味もなく，放課後は友達とゲームボーイアドバンスでロックマンをやることが日課でした．\n                  習い事もやっておらず，毎週末には祖父母の家に泊まりに行って遊んでもらっていました．\n                ")]),t._v(" "),n("p",[t._v("\n                  北海道に引っ越してからは極真空手を習い始めたり塾に通い始めたり，やっぱり空手より野球だと言って野球チームに加入したりと激動の時期でした．\n                  この頃に仲良くなった友達とは今でも連絡を取り合う仲で，引っ越しの多かった自分にとって唯一ふるさとと呼べる場所でした．\n                ")]),t._v(" "),n("p",[t._v("\n                  東京には小学6年生の終わりごろに転校してきました．親に言われるがままに訳もわからず中学受験をし，失敗し結構混沌としていました．\n                ")])]),t._v(" "),n("h6",{attrs:{slot:"footer"},slot:"footer"},[n("i",{staticClass:"ti-time"}),t._v(" 2000~2004年\n              ")])],2),t._v(" "),n("time-line-item",{attrs:{inverted:"","badge-type":"success","badge-icon":"tim-icons icon-gift-2"}},[n("span",{staticClass:"badge badge-success",attrs:{slot:"header"},slot:"header"},[t._v("中学校")]),t._v(" "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v("\n                中学校には電車で通い，野球部に加入＋学習塾にも通っていて人生で最も忙しい3年間を送ったと思います．\n                ただ，ここでの出会いのおかげで今の大学に行きたいと思うようになり，人生の道標ができた時期でもありました．\n              ")])]),t._v(" "),n("time-line-item",{attrs:{inverted:"","badge-type":"info","badge-icon":"tim-icons icon-planet"}},[n("span",{staticClass:"badges badge-info",attrs:{slot:"header"},slot:"header"},[t._v("高校")]),t._v(" "),n("template",{slot:"content"},[n("p",[t._v("\n                  高校は中堅私立と言われるような高校に通いました．\n                  自分の本来の偏差値よりも少し高いとこに受かったため，周りには自分よりも圧倒的に頭が良い生徒が多く，絶望感しかありませんでした．\n                  心のどこかで「この学校に通っていればそこそこの大学には受かる」などと思っていたため大して勉強もせず，案の定浪人することになりました．\n                ")]),t._v(" "),n("p"),t._v(" "),n("hr")])],2),t._v(" "),n("time-line-item",{attrs:{inverted:"","badge-type":"success","badge-icon":"tim-icons icon-gift-2"}},[n("span",{staticClass:"badge badge-success",attrs:{slot:"header"},slot:"header"},[t._v("浪人→大学〜")]),t._v(" "),n("p",[t._v("\n                浪人時代は人生で一番勉強しました．また，勉強が楽しかったです．「どうして高校のときにもっとやれなかったのだろう」とは何度も思ったものです．\n              ")]),t._v(" "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v("\n                大学は第一志望の東京学芸大学に合格することができ，教師を目指すことになりました．\n                教師は中学2年生のころから目指していたのですが，教師について勉強すればするほど「教師でいいのか」と思うようになり，そのころに研究室の配属もあって何となくエンジニアを目指すようになりました．\n                ここで出会った大学院の先輩を今でも尊敬しています．\n                もっと専門性を高めるべく，東京学芸大学大学院に進学し，今に至ります．\n              ")])])],1)],1)],1),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("card",{attrs:{type:"testimonial","header-classes":"card-header-avatar"}},[n("a",{attrs:{slot:"header",href:"#pablo"},slot:"header"},[n("img",{staticClass:"img img-raised",attrs:{src:"img//james.jpg",alt:"Card image"}})]),t._v(" "),n("p",{staticClass:"card-description"},[t._v("\n            The networking at Web Summit is like no other European tech\n            conference.\n          ")]),t._v(" "),n("div",{staticClass:"icon icon-primary"},[n("i",{staticClass:"fa fa-quote-right"})]),t._v(" "),n("template",{slot:"footer"},[n("h4",{staticClass:"card-title"},[t._v("Robert Priscen")]),t._v(" "),n("p",{staticClass:"category"},[t._v("@robertpriscen")])])],2)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);