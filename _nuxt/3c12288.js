(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{435:function(e,t,r){"use strict";t.a={colors:{default:"#344675",primary:"#42b883",info:"#1d8cf8",danger:"#fd5d93",orange:"#ff8a76",teal:"#00d6b4",primaryGradient:["rgba(76, 211, 150, 0.1)","rgba(53, 183, 125, 0)","rgba(119,52,169,0)"],purpleGradient:["rgba(253,93,147,0.8)","rgba(253,93,147,0)"]},MAPS_API_KEY:"YOUR_GOOGLE_MAPS_API_KEY"}},600:function(e,t,r){var content=r(642);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("5f8c06fd",content,!0,{sourceMap:!1})},641:function(e,t,r){"use strict";r(600)},642:function(e,t,r){var l=r(12)(!1);l.push([e.i,"#map{height:100vh}",""]),e.exports=l},694:function(e,t,r){"use strict";r.r(t);var l=r(5),o=(r(27),r(14),r(21),r(25),r(435)),n={name:"full-screen",data:function(){return{nav:null}},methods:{initMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:13,center:e,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},map=new window.google.maps.Map(document.getElementById("map"),t);new window.google.maps.Marker({position:e,title:"Regular Map!"}).setMap(map)}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var l,nav;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(3).then(r.t.bind(null,661,7));case 2:l=t.sent,(nav=document.getElementsByTagName("nav")).length>0&&(e.nav=nav[0],e.nav.classList.add("fixed-top"),e.nav.classList.remove("navbar-transparent")),(l=l.default).KEY=o.a.MAPS_API_KEY,l.load((function(t){e.initMap(t)}));case 8:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.nav&&(this.nav.classList.add("navbar-transparent"),this.nav.classList.remove("bg-white"),this.nav.classList.remove("fixed-top"))}},y=(r(641),r(1)),component=Object(y.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"full-screen-map",attrs:{id:"map"}})}),[],!1,null,null,null);t.default=component.exports}}]);