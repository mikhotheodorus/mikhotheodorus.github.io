(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89105130"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}n[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{router:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 1")])],1)],1),a("v-list-item",{attrs:{router:"",to:"/about"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 2")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-content",[a("router-view")],1)],1)},r=[],o={data:function(){return{drawer:null}}},s=o,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),m=a("40dc"),v=a("5bc1"),f=a("a75b"),p=a("132d"),b=a("8860"),h=a("da13"),g=a("1800"),I=a("5d23"),y=a("f774"),k=a("2a7f"),w=Object(l["a"])(s,n,r,!1,null,null,null),x=w.exports;d()(w,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:v["a"],VContent:f["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:I["a"],VListItemTitle:I["c"],VNavigationDrawer:y["a"],VToolbarTitle:k["a"]});var _=a("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V=a("0ff2"),C=(a("d3b7"),a("8c4f")),T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Crud Atma pedia")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[e._v("buat minuman")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Drink name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.items,label:"Jenis"},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1),a("v-row",e._l(e.drinks,(function(t){return a("v-col",{key:t.name,attrs:{cols:"3"}},[a("v-card",{staticClass:"d-inline-flex",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[e._v("MINUMAN")]),a("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(t.name))]),a("v-list-item-subtitle",[e._v("Type: "+e._s(t.type))]),a("v-list-item-subtitle",[e._v("Fat: "+e._s(t.fat))]),a("v-list-item-subtitle",[e._v("Carbs: "+e._s(t.carbs))]),a("v-list-item-subtitle",[e._v("Protein: "+e._s(t.protein))])],1)],1),a("v-card-actions",[a("v-icon",{staticClass:"mr-1",attrs:{color:"teal"},on:{click:function(a){return e.editItem(t)}}},[e._v("mdi-silverware")]),a("v-icon",{staticClass:"mr-1",attrs:{color:"red"},on:{click:function(a){return e.deleteItem(t)}}},[e._v("mdi-delete")])],1)],1)],1)})),1)],1)},A=[],P=(a("b0c0"),a("dc59")),L={data:function(){return{cek:-1,dialog:!1,checkDelete:[],search:"",items:["Es","Panas"],headers:[{text:"Drink (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Type",value:"type"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"action",sortable:!1}],drinks:[],editedIndex:-1,editedItem:{name:"",type:"",fat:0,carbs:0,protein:0},defaultItem:{name:"",type:"",fat:0,carbs:0,protein:0}}},firebase:{drinks:P["b"]},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{editItem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&P["b"].child(e[".key"]).remove()},multipleDelete:function(){for(var e=0;e<this.checkDelete.length;e++)P["b"].child(this.checkDelete[e]).remove();this.checkDelete=[]},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){this.cek>-1?(P["b"].child(this.editedIndex).set({name:this.editedItem.name,type:this.editedItem.type,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(P["b"].push({name:this.editedItem.name,type:this.editedItem.type,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.type="",this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1}}},S=L,D=a("8336"),E=a("b0af"),$=a("99d9"),N=a("62ad"),M=a("a523"),F=a("169a"),B=a("ce7e"),H=a("0fd9"),J=a("b974"),W=a("2fa4"),q=a("8654"),R=a("71d9"),U=Object(l["a"])(S,O,A,!1,null,null,null),z=U.exports;d()(U,{VBtn:D["a"],VCard:E["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:N["a"],VContainer:M["a"],VDialog:F["a"],VDivider:B["a"],VIcon:p["a"],VListItem:h["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VRow:H["a"],VSelect:J["a"],VSpacer:W["a"],VTextField:q["a"],VToolbar:R["a"],VToolbarTitle:k["a"]});var Y={name:"home",components:{HelloWorld:z}},G=Y,K=Object(l["a"])(G,T,j,!1,null,null,null),Q=K.exports;i["a"].use(C["a"]);var X=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Z=new C["a"]({mode:"history",base:"/",routes:X}),ee=Z,te=a("f309");i["a"].use(te["a"]);var ae=new te["a"]({});i["a"].use(V["a"]),i["a"].config.productionTip=!1,new i["a"]({router:ee,vuetify:ae,render:function(e){return e(x)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},dc59:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var i=a("59ca"),n=a.n(i),r=(a("66ce"),n.a.initializeApp({databaseURL:"https://vueandfirebase-4e108.firebaseio.com"}).database()),o=r.ref("desserts"),s=r.ref("Minuman")}});
//# sourceMappingURL=app.b0c4627a.js.map