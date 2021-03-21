(self.webpackChunk=self.webpackChunk||[]).push([[752],{9752:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var s=a(7757),r=a.n(s),l=a(629),c=a(3299);const i={props:{selectedProduct:Object}};var n=a(1900);function d(t,e,a,s,r,l,c){try{var i=t[l](c),n=i.value}catch(t){return void a(t)}i.done?e(n):Promise.resolve(n).then(s,r)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var l=t.apply(e,a);function c(t){d(l,s,r,c,i,"next",t)}function i(t){d(l,s,r,c,i,"throw",t)}c(void 0)}))}}function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const h={components:{ProductItem:(0,n.Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid rounded",attrs:{src:t.selectedProduct.image,width:"100%",alt:""}}),t._v(" "),t.selectedProduct.title.length?a("h5",{staticClass:"modal-title mt-3 mb-3",attrs:{id:"exampleModalLongTitle"}},[t._v("\n            "+t._s(t.selectedProduct.title)+"\n          ")]):a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("\n            Aucun titre disponible\n          ")]),t._v(" "),t.selectedProduct.desc.length?a("p",{domProps:{innerHTML:t._s(t.selectedProduct.desc)}}):a("p",[t._v("Aucun description disponible")])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-black"},[a("h4",{staticClass:"modal-title"},[t._v("Preview")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,null,null).exports},data:function(){return{dtTable:null,selectedItems:[],allSelected:!1,selectedProduct:{title:"",desc:""}}},watch:{selectedItems:function(){this.allSelected=this.selectedItems.length===this.allProducts.length}},computed:v({getIsLoading:function(){return this.isLoading.get},postIsLoading:function(){return this.isLoading.post}},(0,l.Se)("products",["allProducts","isLoading"])),methods:v({handleSelectProduct:function(t){this.selectedProduct=t},selectOrUnSelectAll:function(){var t=this;this.allSelected?this.selectedItems=[]:this.allProducts.forEach((function(e){t.selectedItems.push(e.id)}))},prepareBulkDeleteProducts:function(){var t=this;this.selectedItems.length?(0,c.f)(o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.bulkDeleteProducts(t.selectedItems);case 2:t.selectedItems=[];case 3:case"end":return e.stop()}}),e)})))):this.$toast.error("Aucun élément n'a été sélectionné")}},(0,l.nv)("products",["fetchProducts","deleteProduct","bulkDeleteProducts"])),beforeUpdate:function(){this.dtTable&&this.dtTable.destroy()},updated:function(){this.dtTable=$("#dataTable").DataTable({order:[[0,"desc"]],pageLength:5})},created:function(){this.fetchProducts()}};const f=(0,n.Z)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("the-breadcrumb",[a("li",{staticClass:"breadcrumb-item active"},[t._v("Produits")])]),t._v(" "),a("div",{staticClass:"card card-sticker shadow mb-4 mt-5"},[a("div",{staticClass:"d-flex",attrs:{id:"card-header-wrapper"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"ml-auto align-self-center p-3"},[a("button",{staticClass:"btn btn-outline-black mr-2",attrs:{disabled:t.postIsLoading},on:{click:t.prepareBulkDeleteProducts}},[t.postIsLoading?a("span",[a("i",{staticClass:"fa fa-circle-notch fa-spin"}),t._v(" En cours\n          ")]):a("span",[a("i",{staticClass:"fa fa-dumpster"}),t._v(" Suppression ")])]),t._v(" "),a("router-link",{attrs:{to:{name:"products.create"}}},[a("button",{staticClass:"btn btn-orange mr-2"},[a("i",{staticClass:"fa fa-plus-circle"}),t._v(" "),a("span",[t._v(" Ajouter Produit")])])])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped table-hover",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[a("thead",[a("tr",[a("th",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:t.selectOrUnSelectAll,change:function(e){var a=t.allSelected,s=e.target,r=!!s.checked;if(Array.isArray(a)){var l=t._i(a,null);s.checked?l<0&&(t.allSelected=a.concat([null])):l>-1&&(t.allSelected=a.slice(0,l).concat(a.slice(l+1)))}else t.allSelected=r}}})]),t._v(" "),a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Titre")]),t._v(" "),a("th",[t._v("Categorie")]),t._v(" "),a("th",[t._v("Image")]),t._v(" "),a("th",[t._v("Créer le")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Actions")])])]),t._v(" "),a("tbody",[t.getIsLoading?a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"6"}},[a("loading",{attrs:{color:"#2B51C4",active:t.getIsLoading,"is-full-page":!1},on:{"update:active":function(e){t.getIsLoading=e}}},[a("h5",{attrs:{slot:"after"},slot:"after"},[t._v("Loading")])])],1)]):t._l(t.allProducts,(function(e){return a("tr",{key:e.id},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedItems,expression:"selectedItems"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedItems)?t._i(t.selectedItems,e.id)>-1:t.selectedItems},on:{change:function(a){var s=t.selectedItems,r=a.target,l=!!r.checked;if(Array.isArray(s)){var c=e.id,i=t._i(s,c);r.checked?i<0&&(t.selectedItems=s.concat([c])):i>-1&&(t.selectedItems=s.slice(0,i).concat(s.slice(i+1)))}else t.selectedItems=l}}})]),t._v(" "),a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.title?e.title:"Aucun titre disponible"))]),t._v(" "),a("td",[t._v(t._s(e.category.name))]),t._v(" "),a("td",[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{width:"100",height:"100",src:e.resizedImage}})]),t._v(" "),a("td",[t._v(t._s(t._f("formatedDate")(e.created_at)))]),t._v(" "),a("td",{staticClass:"text-center"},[a("a",{staticClass:"venobox mr-4",attrs:{href:"#","data-toggle":"modal","data-target":"#exampleModalCenter",title:"Preview"},on:{click:function(a){return a.preventDefault(),t.handleSelectProduct(e)}}},[a("i",{staticClass:"fa fa-eye text-info"})]),t._v(" "),a("router-link",{staticClass:"mr-4",attrs:{to:{name:"products.edit",params:{id:e.id}}}},[a("i",{staticClass:"fa fa-pen text-success"})]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.deleteProduct(e.id)}}},[a("i",{staticClass:"fa fa-trash text-danger"})])],1)])}))],2)])])])]),t._v(" "),a("product-item",{attrs:{"selected-product":t.selectedProduct}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-sticker bg-primary text-center"},[e("h6",{staticClass:"font-weight-bold text-white"},[e("i",{staticClass:"fa fa-clipboard-list fa-2x"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"h4 mt-4 text-gray-800"},[t._v("Tableau des Produits")])])}],!1,null,null,null).exports}}]);