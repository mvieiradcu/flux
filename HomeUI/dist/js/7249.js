"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[7249],{34547:(t,e,r)=>{r.d(e,{Z:()=>u});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],i=r(47389);const o={components:{BAvatar:i.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=o;var l=r(1001),c=(0,l.Z)(s,a,n,!1,null,"22d964ca",null);const u=c.exports},51748:(t,e,r)=>{r.d(e,{Z:()=>u});var a=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},n=[],i=r(67347);const o={components:{BLink:i.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},s=o;var l=r(1001),c=(0,l.Z)(s,a,n,!1,null,null,null);const u=c.exports},77249:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Z});var a=function(){var t=this,e=t._self._c;return e("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(r){return[e("a",{on:{click:r.toggleDetails}},[r.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),r.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(r){return[e("b-card",{staticClass:"mx-2"},[r.item.collateral?e("list-entry",{attrs:{title:"Collateral",data:r.item.collateral}}):t._e(),r.item.txhash?e("list-entry",{attrs:{title:"TX Hash",data:r.item.txhash}}):t._e(),r.item.outidx?e("list-entry",{attrs:{title:"Output ID",data:r.item.outidx}}):t._e(),r.item.pubkey?e("list-entry",{attrs:{title:"Public Key",data:r.item.pubkey}}):t._e(),r.item.network?e("list-entry",{attrs:{title:"Network",data:r.item.network}}):t._e(),r.item.lastpaid?e("list-entry",{attrs:{title:"Last Paid",data:new Date(1e3*r.item.lastpaid).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),r.item.activesince?e("list-entry",{attrs:{title:"Active Since",data:new Date(1e3*r.item.activesince).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),r.item.last_paid_height?e("list-entry",{attrs:{title:"Last Paid Height",data:r.item.last_paid_height.toFixed(0)}}):t._e(),r.item.confirmed_height?e("list-entry",{attrs:{title:"Confirmed Height",data:r.item.confirmed_height.toFixed(0)}}):t._e(),r.item.last_confirmed_height?e("list-entry",{attrs:{title:"Last Confirmed Height",data:r.item.last_confirmed_height.toFixed(0)}}):t._e(),r.item.rank>=0?e("list-entry",{attrs:{title:"Rank",data:r.item.rank.toFixed(0)}}):t._e()],1)]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)],1)},n=[],i=(r(70560),r(86855)),o=r(16521),s=r(26253),l=r(50725),c=r(10962),u=r(46709),d=r(8051),f=r(4060),m=r(22183),p=r(22418),g=r(15193),h=r(66126),b=r(34547),y=r(51748),v=r(27616);const x=r(63005),_={components:{BCard:i._,BTable:o.h,BRow:s.T,BCol:l.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:f.w,BFormInput:m.e,BInputGroupAppend:p.B,BButton:g.T,BOverlay:h.X,ListEntry:y.Z,ToastificationContent:b.Z},data(){return{timeoptions:x,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"ip",label:"IP",sortable:!0},{key:"tier",label:"Tier",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0}],totalRows:1,currentPage:1,fluxListLoading:!0}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.daemonViewDeterministicFluxNodeList()},methods:{async daemonViewDeterministicFluxNodeList(){const t=await v.Z.viewDeterministicFluxNodeList();if("error"===t.data.status)this.$toast({component:b.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}});else{const e=this;t.data.data.forEach((t=>{e.items.push(t)})),this.totalRows=this.items.length,this.currentPage=1}this.fluxListLoading=!1},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},w=_;var k=r(1001),C=(0,k.Z)(w,a,n,!1,null,null,null);const Z=C.exports},63005:(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});const a={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},n={year:"numeric",month:"short",day:"numeric"},i={shortDate:a,date:n}},27616:(t,e,r)=>{r.d(e,{Z:()=>n});var a=r(80914);const n={help(){return(0,a.Z)().get("/daemon/help")},helpSpecific(t){return(0,a.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,a.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,a.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,a.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,a.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,a.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,a.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,a.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,a.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,a.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,a.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,a.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,a.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,a.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,a.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,a.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,a.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,a.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,a.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,a.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,a.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,a.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,a.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,a.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,a.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,a.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,a.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,a.Z)()},cancelToken(){return a.S}}},84328:(t,e,r)=>{var a=r(65290),n=r(27578),i=r(6310),o=function(t){return function(e,r,o){var s,l=a(e),c=i(l),u=n(o,c);if(t&&r!==r){while(c>u)if(s=l[u++],s!==s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},5649:(t,e,r)=>{var a=r(67697),n=r(92297),i=TypeError,o=Object.getOwnPropertyDescriptor,s=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(n(t)&&!o(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,r)=>{var a=r(36812),n=r(19152),i=r(82474),o=r(72560);t.exports=function(t,e,r){for(var s=n(e),l=o.f,c=i.f,u=0;u<s.length;u++){var d=s[u];a(t,d)||r&&a(r,d)||l(t,d,c(e,d))}}},55565:t=>{var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,r)=>{var a=r(19037),n=r(82474).f,i=r(75773),o=r(11880),s=r(95014),l=r(8758),c=r(35266);t.exports=function(t,e){var r,u,d,f,m,p,g=t.target,h=t.global,b=t.stat;if(u=h?a:b?a[g]||s(g,{}):(a[g]||{}).prototype,u)for(d in e){if(m=e[d],t.dontCallGetSet?(p=n(u,d),f=p&&p.value):f=u[d],r=c(h?d:g+(b?".":"#")+d,t.forced),!r&&void 0!==f){if(typeof m==typeof f)continue;l(m,f)}(t.sham||f&&f.sham)&&i(m,"sham",!0),o(u,d,m,t)}}},94413:(t,e,r)=>{var a=r(68844),n=r(3689),i=r(6648),o=Object,s=a("".split);t.exports=n((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?s(t,""):o(t)}:o},92297:(t,e,r)=>{var a=r(6648);t.exports=Array.isArray||function(t){return"Array"===a(t)}},35266:(t,e,r)=>{var a=r(3689),n=r(69985),i=/#|\.prototype\./,o=function(t,e){var r=l[s(t)];return r===u||r!==c&&(n(e)?a(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},6310:(t,e,r)=>{var a=r(43126);t.exports=function(t){return a(t.length)}},58828:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var a=+t;return(a>0?r:e)(a)}},82474:(t,e,r)=>{var a=r(67697),n=r(22615),i=r(49556),o=r(75684),s=r(65290),l=r(18360),c=r(36812),u=r(68506),d=Object.getOwnPropertyDescriptor;e.f=a?d:function(t,e){if(t=s(t),e=l(e),u)try{return d(t,e)}catch(r){}if(c(t,e))return o(!n(i.f,t,e),t[e])}},72741:(t,e,r)=>{var a=r(54948),n=r(72739),i=n.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,r)=>{var a=r(68844),n=r(36812),i=r(65290),o=r(84328).indexOf,s=r(57248),l=a([].push);t.exports=function(t,e){var r,a=i(t),c=0,u=[];for(r in a)!n(s,r)&&n(a,r)&&l(u,r);while(e.length>c)n(a,r=e[c++])&&(~o(u,r)||l(u,r));return u}},49556:(t,e)=>{var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,n=a&&!r.call({1:2},1);e.f=n?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},19152:(t,e,r)=>{var a=r(76058),n=r(68844),i=r(72741),o=r(7518),s=r(85027),l=n([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=i.f(s(t)),r=o.f;return r?l(e,r(t)):e}},27578:(t,e,r)=>{var a=r(68700),n=Math.max,i=Math.min;t.exports=function(t,e){var r=a(t);return r<0?n(r+e,0):i(r,e)}},65290:(t,e,r)=>{var a=r(94413),n=r(74684);t.exports=function(t){return a(n(t))}},68700:(t,e,r)=>{var a=r(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:a(e)}},43126:(t,e,r)=>{var a=r(68700),n=Math.min;t.exports=function(t){return t>0?n(a(t),9007199254740991):0}},70560:(t,e,r)=>{var a=r(79989),n=r(90690),i=r(6310),o=r(5649),s=r(55565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();a({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=n(this),r=i(e),a=arguments.length;s(r+a);for(var l=0;l<a;l++)e[r]=arguments[l],r++;return o(e,r),r}})}}]);