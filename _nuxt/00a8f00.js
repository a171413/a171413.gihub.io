(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{578:function(e,t,l){"use strict";(function(e){t.a={ssr:!1,target:"static",head:{title:"a171413.github.io",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:e.env.npm_package_description||""}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"}],bodyAttrs:{class:"sidebar-mini"}},router:{linkExactActiveClass:"active"},loading:{color:"#fff"},css:["element-ui/lib/theme-chalk/index.css","assets/css/demo.css","assets/css/nucleo-icons.css","assets/sass/black-dashboard-pro.scss"],plugins:[{src:"~plugins/element-ui",ssr:!1},{src:"~/plugins/dashboard-plugin.js",ssr:!1},{src:"~/plugins/full-calendar.js",ssr:!1},{src:"~/plugins/world-map.js",ssr:!1}],buildModules:[],modules:["@nuxtjs/axios","@nuxtjs/pwa","nuxt-i18n"],i18n:{locales:[{code:"en",file:"en.js"},{code:"ar",file:"ar.js"}],lazy:!0,langDir:"lang/",defaultLocale:"en"},axios:{},build:{transpile:[/^element-ui/],extend:function(e,t){},babel:{plugins:[["component",{libraryName:"element-ui",styleLibraryName:"theme-chalk"}]]}}}}).call(this,l(105))},586:function(e,t,l){var content=l(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(13).default)("e00d129c",content,!0,{sourceMap:!1})},613:function(e,t,l){"use strict";l(586)},614:function(e,t,l){var r=l(12)(!1);r.push([e.i,".card-map{min-height:350px}.card-map .map{height:300px;width:100%}",""]),e.exports=r},669:function(e,t,l){"use strict";l.r(t);var r=l(5),o=(l(27),l(14),l(21),l(25),l(578)),n={name:"Google",mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.e(3).then(l.t.bind(null,661,7));case 2:(r=(r=t.sent).default).KEY=o.a.MAPS_API_KEY,r.load((function(t){e.initRegularMap(t)}));case 6:case"end":return t.stop()}}),t)})))()},methods:{initRegularMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:8,center:e,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},map=new window.google.maps.Map(document.getElementById("regularMap"),t);new window.google.maps.Marker({position:e,title:"Regular Map!"}).setMap(map)}}},c=(l(613),l(1)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("card",{attrs:{type:"plain"}},[l("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("\n        Google Maps\n      ")]),e._v(" "),l("div",{staticClass:"map",attrs:{id:"regularMap"}})])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);