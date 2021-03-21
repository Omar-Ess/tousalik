(self.webpackChunk=self.webpackChunk||[]).push([[47],{9047:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var s=a(7757),r=a.n(s),c=a(629),i=a(3299);function l(e,t,a,s,r,c,i){try{var l=e[c](i),n=l.value}catch(e){return void a(e)}l.done?t(n):Promise.resolve(n).then(s,r)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(s,r){var c=e.apply(t,a);function i(e){l(c,s,r,i,n,"next",e)}function n(e){l(c,s,r,i,n,"throw",e)}i(void 0)}))}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const v={data:function(){return{dtTable:null,selectedItems:[],allSelected:!1}},watch:{selectedItems:function(){this.allSelected=this.selectedItems.length===this.allCategories.length}},computed:d({getIsLoading:function(){return this.isLoading.get},postIsLoading:function(){return this.isLoading.post}},(0,c.Se)("categories",["allCategories","isLoading"])),methods:d({selectOrUnSelectAll:function(){var e=this;this.allSelected?this.selectedItems=[]:this.allCategories.forEach((function(t){e.selectedItems.push(t.id)}))},prepareBulkDeleteCategories:function(){var e=this;this.selectedItems.length?(0,i.f)(n(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.bulkDeleteCategories(e.selectedItems);case 2:e.selectedItems=[];case 3:case"end":return t.stop()}}),t)})))):this.$toast.error("Aucun élément n'a été sélectionné")}},(0,c.nv)("categories",["fetchCategories","deleteCategory","bulkDeleteCategories"])),beforeUpdate:function(){this.dtTable&&this.dtTable.destroy()},updated:function(){this.dtTable=$("#dataTable").DataTable({order:[[0,"desc"]],pageLength:5})},created:function(){this.fetchCategories()}};const f=(0,a(1900).Z)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("the-breadcrumb",[a("li",{staticClass:"breadcrumb-item active"},[e._v("Catégories")])]),e._v(" "),a("div",{staticClass:"card card-sticker shadow mb-4 mt-5"},[a("div",{staticClass:"d-flex",attrs:{id:"card-header-wrapper"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"ml-auto align-self-center p-3"},[a("button",{staticClass:"btn btn-outline-black mr-2",attrs:{disabled:e.postIsLoading},on:{click:e.prepareBulkDeleteCategories}},[e.postIsLoading?a("span",[a("i",{staticClass:"fa fa-circle-notch fa-spin"}),e._v(" En cours\n          ")]):a("span",[a("i",{staticClass:"fa fa-dumpster"}),e._v(" Suppression ")])]),e._v(" "),a("router-link",{attrs:{to:{name:"categories.create"}}},[a("button",{staticClass:"btn btn-orange mr-2"},[a("i",{staticClass:"fa fa-plus-circle"}),e._v(" "),a("span",[e._v(" Ajouter Catégorie")])])])],1)]),e._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped table-hover",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[a("thead",[a("tr",[a("th",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{click:e.selectOrUnSelectAll,change:function(t){var a=e.allSelected,s=t.target,r=!!s.checked;if(Array.isArray(a)){var c=e._i(a,null);s.checked?c<0&&(e.allSelected=a.concat([null])):c>-1&&(e.allSelected=a.slice(0,c).concat(a.slice(c+1)))}else e.allSelected=r}}})]),e._v(" "),a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Nom")]),e._v(" "),a("th",[e._v("Slug")]),e._v(" "),a("th",[e._v("N. de Produits")]),e._v(" "),a("th",[e._v("Créé le")]),e._v(" "),a("th",[e._v("Actions")])])]),e._v(" "),a("tbody",[e.getIsLoading?a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"6"}},[a("loading",{attrs:{color:"#2B51C4",active:e.getIsLoading,"is-full-page":!1},on:{"update:active":function(t){e.getIsLoading=t}}},[a("h5",{attrs:{slot:"after"},slot:"after"},[e._v("Loading")])])],1)]):e._l(e.allCategories,(function(t){return a("tr",{key:t.id},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedItems,expression:"selectedItems"}],attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.selectedItems)?e._i(e.selectedItems,t.id)>-1:e.selectedItems},on:{change:function(a){var s=e.selectedItems,r=a.target,c=!!r.checked;if(Array.isArray(s)){var i=t.id,l=e._i(s,i);r.checked?l<0&&(e.selectedItems=s.concat([i])):l>-1&&(e.selectedItems=s.slice(0,l).concat(s.slice(l+1)))}else e.selectedItems=c}}})]),e._v(" "),a("td",[e._v(e._s(t.id))]),e._v(" "),a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.slug))]),e._v(" "),a("td",[a("span",{staticClass:"badge",class:[t.products_count?"badge-success":"badge-danger"]},[e._v(e._s(t.products_count))])]),e._v(" "),a("td",[e._v(e._s(e._f("formatedDate")(t.created_at)))]),e._v(" "),a("td",[a("router-link",{staticClass:"mr-4",attrs:{to:{name:"categories.edit",params:{id:t.id}}}},[a("i",{staticClass:"fa fa-pen text-success"})]),e._v(" "),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.deleteCategory(t.id)}}},[a("i",{staticClass:"fa fa-trash text-danger"})])],1)])}))],2)])])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header card-header-sticker bg-primary text-center"},[t("h6",{staticClass:"font-weight-bold text-white"},[t("i",{staticClass:"fa fa-clipboard-list fa-2x"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"h4 mt-4 text-gray-800"},[e._v("Tableau des Catégories")])])}],!1,null,null,null).exports}}]);