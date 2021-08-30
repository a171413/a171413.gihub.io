(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{588:function(t,n,e){var content=e(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("e5268c2a",content,!0,{sourceMap:!1})},617:function(t,n,e){"use strict";e(588)},618:function(t,n,e){var o=e(12)(!1);o.push([t.i,".card .alert{position:relative!important;width:100%}",""]),t.exports=o},674:function(t,n,e){"use strict";e.r(n);var o={name:"Notifications",components:{BaseAlert:e(45).a},data:function(){return{type:["","info","success","warning","danger"],notifications:{topCenter:!1}}},methods:{notifyVue:function(t,n){var e=Math.floor(4*Math.random()+1);this.$notify({message:"Welcome to <b>Vue Black Dashboard Pro</b> - a beautiful resource for every web developer",timeout:3e4,icon:"tim-icons icon-bell-55",horizontalAlign:n,verticalAlign:t,type:this.type[e]})}}},r=(e(617),e(1)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("card",[e("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[t._v("\n        Notifications Style\n      ")]),t._v(" "),e("base-alert",{attrs:{type:"info"}},[t._v("\n        This is a plain notification\n      ")]),t._v(" "),e("base-alert",{attrs:{type:"info",dismissible:""}},[t._v("\n        This is a notification with close button.\n      ")]),t._v(" "),e("base-alert",{attrs:{type:"info",dismissible:"",icon:"tim-icons icon-bell-55"}},[t._v("\n        This is a notification with close button and icon.\n      ")]),t._v(" "),e("base-alert",{attrs:{type:"info",dismissible:"",icon:"tim-icons icon-bell-55"}},[t._v("\n        This is a notification with close button and icon and have many lines.\n        You can see that the icon and the close button are always vertically\n        aligned. This is a beautiful notification. So you don't have to worry\n        about the style.\n      ")])],1)],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("card",[e("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[t._v("\n        Notification states\n      ")]),t._v(" "),e("base-alert",{attrs:{type:"primary",dismissible:""}},[e("span",[e("b",[t._v(" Primary - ")]),t._v(' This is a regular notification made with\n          ".alert-primary"')])]),t._v(" "),e("base-alert",{attrs:{type:"info",dismissible:""}},[e("span",[e("b",[t._v(" Info - ")]),t._v(' This is a regular notification made with\n          ".alert-info"')])]),t._v(" "),e("base-alert",{attrs:{type:"success",dismissible:""}},[e("span",[e("b",[t._v(" Success - ")]),t._v(' This is a regular notification made with\n          ".alert-success"')])]),t._v(" "),e("base-alert",{attrs:{type:"warning",dismissible:""}},[e("span",[e("b",[t._v(" Warning - ")]),t._v(' This is a regular notification made with\n          ".alert-warning"')])]),t._v(" "),e("base-alert",{attrs:{type:"danger",dismissible:""}},[e("span",[e("b",[t._v(" Danger - ")]),t._v(' This is a regular notification made with\n          ".alert-danger"')])])],1)],1),t._v(" "),e("div",{staticClass:"col-md-12"},[e("card",{staticClass:"text-center"},[e("div",{staticClass:"places-buttons"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 ml-auto mr-auto text-center"},[e("h4",{staticClass:"card-title"},[t._v("\n              Notifications Places\n              "),e("p",{staticClass:"category"},[t._v("\n                Click to view notifications\n              ")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("top","left")}}},[t._v("\n                  Top Left\n                ")])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("top","center")}}},[t._v("\n                  Top Center\n                ")])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("top","right")}}},[t._v("\n                  Top Right\n                ")])],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("bottom","left")}}},[t._v("\n                  Bottom Left\n                ")])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("bottom","center")}}},[t._v("\n                  Bottom Center\n                ")])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(n){return t.notifyVue("bottom","right")}}},[t._v("\n                  Bottom Right\n                ")])],1)])])])])])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);