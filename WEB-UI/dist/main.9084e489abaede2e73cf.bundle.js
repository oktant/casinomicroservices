webpackJsonp([1,4],{1101:function(e,t,n){e.exports=n(547)},245:function(e,t,n){"use strict";var o=n(1),a=n(115),i=n(518);n.n(i);n.d(t,"a",function(){return c});var s=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.http=e}return e.prototype.postNewHotelServiceReservation=function(e){var t=JSON.stringify(e),n=new a.b;return console.log(t),n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Methods","POST,PUT, GET, DELETE"),n.append("Access-Control-Allow-Origin","*"),this.http.post("http://localhost:8030/rooms",t,{headers:n}).map(function(e){return e.json()})},e=s([n.i(o.c)(),r("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object])],e);var t}()},246:function(e,t,n){"use strict";var o=n(1),a=n(115),i=n(518);n.n(i);n.d(t,"a",function(){return c});var s=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.http=e}return e.prototype.postNewRestaurantReservation=function(e){console.log(e);var t=JSON.stringify(e),n=new a.b;return console.log(t),n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Methods","POST,PUT, GET, DELETE"),n.append("Access-Control-Allow-Origin","*"),this.http.post("http://localhost:8010/tables",t,{headers:n}).map(function(e){return e.json()})},e=s([n.i(o.c)(),r("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object])],e);var t}()},247:function(e,t,n){"use strict";var o=n(1),a=n(115);n.d(t,"a",function(){return r});var i=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(e){this.http=e}return e.prototype.postNewTicketReservation=function(e){console.log(e);var t=JSON.stringify(e),n=new a.b;return console.log(t),n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Methods","POST,PUT, GET, DELETE"),n.append("Access-Control-Allow-Origin","*"),this.http.post("http://localhost:8020/tickets/simple",t,{headers:n}).map(function(e){return e.json()})},e=i([n.i(o.c)(),s("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object])],e);var t}()},248:function(e,t,n){"use strict";var o=n(1),a=n(115);n.d(t,"a",function(){return r});var i=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(e){this.http=e}return e.prototype.postNewTicketReservation=function(e){console.log(e);var t=JSON.stringify(e),n=new a.b;return console.log(t),n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Methods","POST,PUT, GET, DELETE"),n.append("Access-Control-Allow-Origin","*"),this.http.post("http://localhost:8020/tickets/vip",t,{headers:n}).map(function(e){return e.json()})},e=i([n.i(o.c)(),s("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object])],e);var t}()},365:function(e,t,n){"use strict";var o=n(1),a=n(245);n.d(t,"a",function(){return r});var i=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(e){this.casinoHotelService=e,this.isVisible=!1}return e.prototype.ngOnInit=function(){},e.prototype.onSubmit=function(e){var t=this;console.log(e.value),this.casinoHotelService.postNewHotelServiceReservation(e.value).subscribe(function(e){console.log(e),void 0===e.id?(console.log("--------------"),t.resultToShow=e.message):(console.log("------------===============--"),t.resultToShow="your booking id is:"+e.id),console.log(t.resultToShow),t.isVisible=!0})},e=i([n.i(o._5)({selector:"app-casino-hotel-form",template:n(827)}),s("design:paramtypes",["function"==typeof(t=void 0!==a.a&&a.a)&&t||Object])],e);var t}()},366:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.ngOnInit=function(){},e=a([n.i(o._5)({selector:"app-casino-hotel",template:n(828),styles:[n(824)]}),i("design:paramtypes",[])],e)}()},367:function(e,t,n){"use strict";var o=n(1),a=n(246),i=n(819);n.n(i);n.d(t,"a",function(){return c});var s=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.casinoRestaurantService=e,this.isVisible=!1}return e.prototype.ngOnInit=function(){},e.prototype.onSubmit=function(e){var t=this;this.casinoRestaurantService.postNewRestaurantReservation(e.value).subscribe(function(e){console.log(e),void 0===e.id?(console.log("--------------"),t.resultToShow=e.message):(console.log("------------===============--"),t.resultToShow="your booking id is:"+e.id),console.log(t.resultToShow),t.isVisible=!0})},e=s([n.i(o._5)({selector:"app-casino-restaurant-form",template:n(829)}),r("design:paramtypes",["function"==typeof(t=void 0!==a.a&&a.a)&&t||Object])],e);var t}()},368:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.ngOnInit=function(){},e=a([n.i(o._5)({selector:"app-casino-restaurant",template:n(830)}),i("design:paramtypes",[])],e)}()},369:function(e,t,n){"use strict";var o=n(1),a=n(247);n.d(t,"a",function(){return r});var i=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(e){this.casinoTicketService=e,this.isVisible=!1}return e.prototype.ngOnInit=function(){},e.prototype.onSubmit=function(e){var t=this;console.log(e.value),this.casinoTicketService.postNewTicketReservation(e.value).subscribe(function(e){console.log(e),void 0===e.id?(console.log("--------------"),t.resultToShow=e.message):(console.log("------------===============--"),t.resultToShow="your booking id is:"+e.id),console.log(t.resultToShow),t.isVisible=!0})},e=i([n.i(o._5)({selector:"app-casino-ticket-form",template:n(831)}),s("design:paramtypes",["function"==typeof(t=void 0!==a.a&&a.a)&&t||Object])],e);var t}()},370:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.ngOnInit=function(){},e=a([n.i(o._5)({selector:"app-casino-ticket",template:n(832)}),i("design:paramtypes",[])],e)}()},371:function(e,t,n){"use strict";var o=n(1),a=n(248),i=n(359);n.d(t,"a",function(){return c});var s=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.casinoVipTicketService=e,this.router=t,this.isVisible=!1}return e.prototype.ngOnInit=function(){},e.prototype.onSubmit=function(e){var t=this;console.log(e.value),this.casinoVipTicketService.postNewTicketReservation(e.value).subscribe(function(e){console.log(e),void 0===e.id?(console.log("--------------"),t.resultToShow=e.message):(console.log("------------===============--"),t.resultToShow="your booking id is:"+e.id),console.log(t.resultToShow),t.isVisible=!0})},e=s([n.i(o._5)({selector:"app-casino-vip-ticket-form",template:n(833)}),r("design:paramtypes",["function"==typeof(t=void 0!==a.a&&a.a)&&t||Object,"function"==typeof(c=void 0!==i.b&&i.b)&&c||Object])],e);var t,c}()},546:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=546},547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(634),a=n(1),i=n(668),s=n(665);i.a.production&&n.i(a.a)(),n.i(o.a)().bootstrapModule(s.a)},664:function(e,t,n){"use strict";var o=n(1),a=n(246),i=n(248),s=n(247),r=n(245);n.d(t,"a",function(){return u});var c=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){this.title="app works!"}return e=c([n.i(o._5)({selector:"app-root",template:n(826),styles:[n(823)],providers:[r.a,s.a,i.a,a.a]}),l("design:paramtypes",[])],e)}()},665:function(e,t,n){"use strict";var o=n(169),a=n(1),i=n(625),s=n(115),r=n(664),c=n(667),l=n(370),u=n(666),d=n(368),f=n(366),p=n(369),m=n(367),v=n(365),b=n(371),h=n(245),g=n(248),y=n(247),j=n(246);n.d(t,"a",function(){return O});var R=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},w=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(){function e(){}return e=R([n.i(a.b)({declarations:[r.a,c.a,l.a,d.a,f.a,p.a,m.a,v.a,b.a],imports:[o.a,i.a,s.a,u.a],providers:[h.a,y.a,g.a,j.a],bootstrap:[r.a]}),w("design:paramtypes",[])],e)}()},666:function(e,t,n){"use strict";var o=n(359),a=n(370),i=n(368),s=n(366),r=n(369),c=n(365),l=n(371),u=n(367);n.d(t,"a",function(){return f});var d=[{path:"",redirectTo:"/casinoticket",pathMatch:"full"},{path:"casinoticket",component:a.a},{path:"casinorestaurant",component:i.a},{path:"casinohotel",component:s.a},{path:"casinoticket/casinoticketbooking",component:r.a},{path:"casinoticket/casinovipticketbooking",component:l.a},{path:"casinohotel/casinohotelbooking",component:c.a},{path:"casinorestaurant/casinoreservetable",component:u.a}],f=o.a.forRoot(d)},667:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.ngOnInit=function(){},e=a([n.i(o._5)({selector:"app-header",template:n(834),styles:[n(825)]}),i("design:paramtypes",[])],e)}()},668:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},821:function(e,t,n){function o(e){return n(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./af":409,"./af.js":409,"./ar":415,"./ar-dz":410,"./ar-dz.js":410,"./ar-ly":411,"./ar-ly.js":411,"./ar-ma":412,"./ar-ma.js":412,"./ar-sa":413,"./ar-sa.js":413,"./ar-tn":414,"./ar-tn.js":414,"./ar.js":415,"./az":416,"./az.js":416,"./be":417,"./be.js":417,"./bg":418,"./bg.js":418,"./bn":419,"./bn.js":419,"./bo":420,"./bo.js":420,"./br":421,"./br.js":421,"./bs":422,"./bs.js":422,"./ca":423,"./ca.js":423,"./cs":424,"./cs.js":424,"./cv":425,"./cv.js":425,"./cy":426,"./cy.js":426,"./da":427,"./da.js":427,"./de":429,"./de-at":428,"./de-at.js":428,"./de.js":429,"./dv":430,"./dv.js":430,"./el":431,"./el.js":431,"./en-au":432,"./en-au.js":432,"./en-ca":433,"./en-ca.js":433,"./en-gb":434,"./en-gb.js":434,"./en-ie":435,"./en-ie.js":435,"./en-nz":436,"./en-nz.js":436,"./eo":437,"./eo.js":437,"./es":439,"./es-do":438,"./es-do.js":438,"./es.js":439,"./et":440,"./et.js":440,"./eu":441,"./eu.js":441,"./fa":442,"./fa.js":442,"./fi":443,"./fi.js":443,"./fo":444,"./fo.js":444,"./fr":447,"./fr-ca":445,"./fr-ca.js":445,"./fr-ch":446,"./fr-ch.js":446,"./fr.js":447,"./fy":448,"./fy.js":448,"./gd":449,"./gd.js":449,"./gl":450,"./gl.js":450,"./he":451,"./he.js":451,"./hi":452,"./hi.js":452,"./hr":453,"./hr.js":453,"./hu":454,"./hu.js":454,"./hy-am":455,"./hy-am.js":455,"./id":456,"./id.js":456,"./is":457,"./is.js":457,"./it":458,"./it.js":458,"./ja":459,"./ja.js":459,"./jv":460,"./jv.js":460,"./ka":461,"./ka.js":461,"./kk":462,"./kk.js":462,"./km":463,"./km.js":463,"./ko":464,"./ko.js":464,"./ky":465,"./ky.js":465,"./lb":466,"./lb.js":466,"./lo":467,"./lo.js":467,"./lt":468,"./lt.js":468,"./lv":469,"./lv.js":469,"./me":470,"./me.js":470,"./mi":471,"./mi.js":471,"./mk":472,"./mk.js":472,"./ml":473,"./ml.js":473,"./mr":474,"./mr.js":474,"./ms":476,"./ms-my":475,"./ms-my.js":475,"./ms.js":476,"./my":477,"./my.js":477,"./nb":478,"./nb.js":478,"./ne":479,"./ne.js":479,"./nl":481,"./nl-be":480,"./nl-be.js":480,"./nl.js":481,"./nn":482,"./nn.js":482,"./pa-in":483,"./pa-in.js":483,"./pl":484,"./pl.js":484,"./pt":486,"./pt-br":485,"./pt-br.js":485,"./pt.js":486,"./ro":487,"./ro.js":487,"./ru":488,"./ru.js":488,"./se":489,"./se.js":489,"./si":490,"./si.js":490,"./sk":491,"./sk.js":491,"./sl":492,"./sl.js":492,"./sq":493,"./sq.js":493,"./sr":495,"./sr-cyrl":494,"./sr-cyrl.js":494,"./sr.js":495,"./ss":496,"./ss.js":496,"./sv":497,"./sv.js":497,"./sw":498,"./sw.js":498,"./ta":499,"./ta.js":499,"./te":500,"./te.js":500,"./tet":501,"./tet.js":501,"./th":502,"./th.js":502,"./tl-ph":503,"./tl-ph.js":503,"./tlh":504,"./tlh.js":504,"./tr":505,"./tr.js":505,"./tzl":506,"./tzl.js":506,"./tzm":508,"./tzm-latn":507,"./tzm-latn.js":507,"./tzm.js":508,"./uk":509,"./uk.js":509,"./uz":510,"./uz.js":510,"./vi":511,"./vi.js":511,"./x-pseudo":512,"./x-pseudo.js":512,"./yo":513,"./yo.js":513,"./zh-cn":514,"./zh-cn.js":514,"./zh-hk":515,"./zh-hk.js":515,"./zh-tw":516,"./zh-tw.js":516};o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=821},823:function(e,t){e.exports=""},824:function(e,t){e.exports=""},825:function(e,t){e.exports=""},826:function(e,t){e.exports="<app-header></app-header>\n<router-outlet></router-outlet>\n"},827:function(e,t){e.exports='<div class="box box-primary col-md-5">\n  <div class="box-header with-border">\n    <h3 class="box-title">Hotel Room Booking</h3>\n  </div>\n  <div *ngIf="isVisible">\n    <div class="form-group" [ngStyle]="{\'color\':\'red\'}">\n      {{resultToShow}}\n    </div>\n  </div>\n  <form role="form" (ngSubmit)="onSubmit(f)" #f="ngForm">\n    <div class="box-body col-md-5">\n      <div class="form-group ">\n        <label>First Name</label>\n        <input type="text" class="form-control" required placeholder="First Name" [(ngModel)]="firstName"\n               name="firstName">\n      </div>\n      <div class="form-group ">\n        <label>Last Name</label>\n        <input type="text" class="form-control" required placeholder="Last Name" [(ngModel)]="lastName" name="lastName">\n      </div>\n\n      <div class="form-group">\n        <label>Date of Entrance</label>\n        <input type="date" class="form-control" id="dateOfEntrance" required placeholder="Date of entrance"\n               name="dateOfEntrance" ngModel>\n      </div>\n      <div class="form-group">\n        <label>Number of People</label>\n        <select   class="form-control select2" style="width: 100%;" name="numberOfPersons" ngModel id="numberOfPersons">\n          <option value="" selected>Please choose number of Persons</option>\n          <option value=1 selected>1</option>\n          <option value=2>2</option>\n        </select>\n      </div>\n\n      <div class="box-footer">\n        <button type="submit" class="btn btn-primary">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n'},828:function(e,t){e.exports='<div class="container">\n\n  <div class="row">\n    <div class="col-md-8">\n      <img class="img-responsive img-rounded" src="http://top10hotelbookingsites.webs.com/besthotelsites-1.jpg" alt="">\n    </div>\n    <div class="col-md-4">\n      <h1>Hotel Room Booking</h1>\n      <a class="btn btn-primary btn-lg" [routerLink]="[\'casinohotelbooking\']">Book a room</a>\n\n    </div>\n  </div>\n\n  <hr>\n\n  <!-- Call to Action Well -->\n  <div class="row">\n    <div class="col-lg-12">\n      <div class="well text-center">\n        This is a well that is a great spot for a business tagline or phone number for easy access!\n      </div>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n\n  <!-- Content Row -->\n  <div class="row">\n    <div class="col-md-4">\n      <h2>Heading 1</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 2</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 3</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n  </div>\n'},829:function(e,t){e.exports='<div class="box box-primary col-md-5">\n  <div class="box-header with-border">\n    <h3 class="box-title">Hotel Room Booking</h3>\n  </div>\n  <div *ngIf="isVisible">\n    <div class="form-group" [ngStyle]="{\'color\':\'red\'}">\n      {{resultToShow}}\n    </div>\n  </div>\n  <form role="form" (ngSubmit)="onSubmit(f)" #f="ngForm">\n    <div class="box-body col-md-5">\n      <div class="form-group ">\n        <label>First Name</label>\n        <input type="text" class="form-control" required placeholder="First Name" [(ngModel)]="firstName"\n               name="firstName">\n      </div>\n      <div class="form-group ">\n        <label>Last Name</label>\n        <input type="text" class="form-control" required placeholder="Last Name" [(ngModel)]="lastName" name="lastName">\n      </div>\n\n      <div class="form-group">\n        <label>Start Date</label>\n        <input type="text" class="form-control" required placeholder="yyyy-mm-ddThh:mm" [(ngModel)]="startDate"\n               name="startDate">\n      </div>\n\n      <div class="form-group">\n      <label>End Date</label>\n      <input type="text" class="form-control" required placeholder="yyyy-mm-ddThh:mm" [(ngModel)]="endDate"\n             name="endDate">\n    </div>\n\n\n      <div class="box-footer">\n        <button type="submit" class="btn btn-primary">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n'},830:function(e,t){e.exports='<div class="container">\n\n  <div class="row">\n    <div class="col-md-8">\n      <img class="img-responsive img-rounded" src="http://www.restaurantmartinwishart.co.uk/wp-content/themes/martin-wishart/images/gallery/overview-of-the-restaurant.jpg" alt="">\n\n    </div>\n    <div class="col-md-4">\n      <h1>Restaurant Ticket Booking</h1>\n      <a class="btn btn-primary btn-lg" [routerLink]="[\'casinoreservetable\']">Reserve table</a>\n\n    </div>\n  </div>\n\n  <hr>\n\n  <!-- Call to Action Well -->\n  <div class="row">\n    <div class="col-lg-12">\n      <div class="well text-center">\n        This is a well that is a great spot for a business tagline or phone number for easy access!\n      </div>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n\n  <!-- Content Row -->\n  <div class="row">\n    <div class="col-md-4">\n      <h2>Heading 1</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 2</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 3</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n  </div>\n</div>\n'},831:function(e,t){e.exports='<div class="box box-primary col-md-5">\n  <div class="box-header with-border">\n    <h3 class="box-title">Casino Simple Ticket Booking</h3>\n  </div>\n  <div *ngIf="isVisible">\n    <div class="form-group" [ngStyle]="{\'color\':\'red\'}">\n      {{resultToShow}}\n    </div>\n  </div>\n  <form  (ngSubmit)="onSubmit(f)" #f="ngForm">\n    <div class="box-body col-md-5">\n      <div class="form-group ">\n        <label>First Name</label>\n        <input type="text" class="form-control" required placeholder="First Name"\n               ngModel name="firstName" id="firstName">\n      </div>\n      <div class="form-group ">\n        <label>Last Name</label>\n        <input type="text" class="form-control"  required placeholder="Last Name" ngModel name="lastName"\n               id="lastName">\n      </div>\n\n      <div class="form-group">\n        <label>Date of Entrance</label>\n        <input type="date" class="form-control" id="dateOfEntrance" required placeholder="Date of entrance" name="dateOfEntrance" ngModel>\n      </div>\n      <div class="box-footer">\n        <button type="submit" class="btn btn-primary" >Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n'},832:function(e,t){e.exports='<div class="container">\n\n  <div class="row">\n    <div class="col-md-8">\n      <img class="img-responsive img-rounded" src="https://www.bellagio.com/content/dam/MGM/bellagio/casino/table-games/bellagio-table-games-roulette.tif" alt="">\n    </div>\n    <div class="col-md-4">\n      <h1>Casino Ticket Ordering</h1>\n      <a class="btn btn-primary btn-lg" [routerLink]="[\'casinoticketbooking\']">Ticket Order</a>\n      <a class="btn btn-danger btn-lg" [routerLink]="[\'casinovipticketbooking\']">VIP Ticket Order</a>\n    </div>\n  </div>\n\n  <hr>\n\n  <!-- Call to Action Well -->\n  <div class="row">\n    <div class="col-lg-12">\n      <div class="well text-center">\n        This is a well that is a great spot for a business tagline or phone number for easy access!\n      </div>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n\n  <!-- Content Row -->\n  <div class="row">\n    <div class="col-md-4">\n      <h2>Heading 1</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 2</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n    <div class="col-md-4">\n      <h2>Heading 3</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>\n      <a class="btn btn-default" href="#">More Info</a>\n    </div>\n    <!-- /.col-md-4 -->\n  </div>\n</div>\n'},833:function(e,t){e.exports='<div class="box box-primary col-md-5">\n  <div class="box-header with-border">\n    <h3 class="box-title">Casino Vip Ticket Booking</h3>\n  </div>\n  <div *ngIf="isVisible">\n    <div class="form-group" [ngStyle]="{\'color\':\'red\'}">\n    {{resultToShow}}\n    </div>\n  </div>\n  <form  (ngSubmit)="onSubmit(f)" #f="ngForm">\n    <div class="box-body col-md-5">\n      <div class="form-group ">\n        <label>First Name</label>\n        <input type="text" class="form-control" required placeholder="First Name"\n               ngModel name="firstName" id="firstName">\n      </div>\n      <div class="form-group ">\n        <label>Last Name</label>\n        <input type="text" class="form-control"  required placeholder="Last Name" ngModel name="lastName"\n               id="lastName">\n      </div>\n\n      <div class="form-group">\n        <label>Date of Entrance</label>\n        <input type="date" class="form-control" id="dateOfEntrance" required placeholder="Date of entrance" name="dateOfEntrance" ngModel>\n      </div>\n      <div class="box-footer">\n        <button type="submit" class="btn btn-primary" >Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n'},834:function(e,t){e.exports='<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n\n    </div>\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li>\n          <a [routerLink]="[\'casinoticket\']">Casino Ticket</a>\n        </li>\n        <li>\n          <a [routerLink]="[\'casinorestaurant\']">Casino Restaurant</a>\n        </li>\n        <li>\n          <a [routerLink]="[\'casinohotel\']">Casino Hotel</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container -->\n</nav>\n'}},[1101]);