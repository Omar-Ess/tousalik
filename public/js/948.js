(self.webpackChunk=self.webpackChunk||[]).push([[948],{119:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(3645),s=r.n(a)()((function(e){return e[1]}));s.push([e.id,".router-link-exact-active[data-v-36b00a34]{color:#000!important;box-shadow:none;background-color:inherit}",""]);const o=s},1948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var a=r(629);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={data:function(){return{newAuthUser:{}}},computed:o({getIsLoading:function(){return this.isLoading.get},postIsLoading:function(){return this.isLoading.post}},(0,a.Se)("auth",["authUser","isLoading","serverErrors"])),methods:o({},(0,a.nv)("auth",["updateProfileInfo"]))};var l=r(1900);const c=(0,l.Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.updateProfileInfo(e.newAuthUser)}}},[e.serverErrors?r("server-error-alert",{attrs:{serverErrors:e.serverErrors}}):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Nom Complet")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAuthUser.name,expression:"newAuthUser.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.authUser.name},domProps:{value:e.newAuthUser.name},on:{input:function(t){t.target.composing||e.$set(e.newAuthUser,"name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Adresse Email ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAuthUser.email,expression:"newAuthUser.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.authUser.email},domProps:{value:e.newAuthUser.email},on:{input:function(t){t.target.composing||e.$set(e.newAuthUser,"email",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-orange",attrs:{disabled:e.postIsLoading,type:"submit"}},[e.postIsLoading?r("i",{staticClass:"fa fa-circle-notch fa-spin"}):e._e(),e._v("\n    Sauvgarder\n  ")])],1)}),[],!1,null,null,null).exports;function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v={data:function(){return{allPasswords:{current_password:"",new_password:"",new_password_confirm:""}}},computed:d({getIsLoading:function(){return this.isLoading.get},postIsLoading:function(){return this.isLoading.post}},(0,a.Se)("auth",["isLoading","serverErrors"])),methods:d({},(0,a.nv)("auth",["updateProfilePassword"]))};const f={components:{ProfileInfoEdit:c,ProfilePasswordEdit:(0,l.Z)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.updateProfilePassword(e.allPasswords)}}},[e.serverErrors?r("server-error-alert",{attrs:{serverErrors:e.serverErrors}}):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Mot de passe actuel")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.allPasswords.current_password,expression:"allPasswords.current_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter Le Mot de passe actuel",required:""},domProps:{value:e.allPasswords.current_password},on:{input:function(t){t.target.composing||e.$set(e.allPasswords,"current_password",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Nouveau mot de passe")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.allPasswords.new_password,expression:"allPasswords.new_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter Le Nouveau mot de passe",required:""},domProps:{value:e.allPasswords.new_password},on:{input:function(t){t.target.composing||e.$set(e.allPasswords,"new_password",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Confirmer Nouveau mot de passe")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.allPasswords.new_password_confirm,expression:"allPasswords.new_password_confirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter La confirmation",required:""},domProps:{value:e.allPasswords.new_password_confirm},on:{input:function(t){t.target.composing||e.$set(e.allPasswords,"new_password_confirm",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-orange",attrs:{disabled:e.postIsLoading,type:"submit"}},[e.postIsLoading?r("i",{staticClass:"fa fa-circle-notch fa-spin"}):e._e(),e._v("\n    Sauvgarder\n  ")])],1)}),[],!1,null,null,null).exports},methods:{clearServerErrors:function(){this.$store.commit("auth/clearServerErrors")}},mounted:function(){this.$store.commit("auth/clearServerErrors")}};var m=r(3379),b=r.n(m),w=r(119),h={insert:"head",singleton:!1};b()(w.Z,h);w.Z.locals;const _=(0,l.Z)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("the-breadcrumb",[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"profile"}}},[r("i",{staticClass:"fa fa-clipboard-alt"}),e._v(" Profil")])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item active"},[e._v("Paramètres")])]),e._v(" "),r("div",{staticClass:"card card-sticker shadow mb-4 mt-5"},[r("div",{staticClass:"d-flex",attrs:{id:"card-header-wrapper"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"ml-auto align-self-center p-3"},[r("router-link",{attrs:{to:{name:"profile"}}},[r("button",{staticClass:"btn btn-outline-black mr-2"},[r("i",{staticClass:"fa fa-user-circle"}),e._v(" "),r("span",[e._v(" Profile")])])])],1)]),e._v(" "),r("div",{staticClass:"card-body"},[r("nav",[r("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[r("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},on:{click:e.clearServerErrors}},[e._v("Info de Profil")]),e._v(" "),r("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},on:{click:e.clearServerErrors}},[e._v("Mot de Passe")])])]),e._v(" "),r("div",{staticClass:"tab-content mt-3",attrs:{id:"nav-tabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[r("profile-info-edit")],1),e._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[r("profile-password-edit")],1)])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header card-header-sticker bg-primary text-center"},[t("h6",{staticClass:"font-weight-bold text-white"},[t("i",{staticClass:"fa fa-cog fa-2x"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"h4 mt-4 text-gray-800"},[e._v("Paramètres")])])}],!1,null,"36b00a34",null).exports}}]);