(self.webpackChunk=self.webpackChunk||[]).push([[649],{4034:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var o=i(3645),l=i.n(o)()((function(t){return t[1]}));l.push([t.id,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]);const r=l},8649:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var o=i(629);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const n={data:function(){return{newImage:null,selectedCategory:null}},computed:r(r({isCreateMode:function(){return"products.create"==this.$route.name},getIsLoading:function(){return this.isLoading.get},postIsLoading:function(){return this.isLoading.post}},(0,o.Se)("products",["productObject","isLoading","serverErrors"])),(0,o.Se)("categories",["allCategories"])),methods:r(r({handleMultiSelect:function(t){this.productObject.category_id=t.id},onFileChange:function(t){this.newImage=t.target.files[0]},cancelImage:function(){$("#image").val(""),$("#upload-file-info").html("Choisir une nouvelle image"),$("#inputGroupFileAddon01").css("display","none"),this.newImage=null},handleSubmit:function(){var t=new FormData;this.newImage&&t.append("newImage",this.newImage),_.each(this.productObject,(function(e,i){t.append(i,e)})),this.selectedCategory&&t.append("category_id",this.selectedCategory.id),this.isCreateMode?this.addProduct(t):this.updateProduct(t)}},(0,o.nv)("products",["addProduct","fetchProduct","updateProduct"])),(0,o.nv)("categories",["fetchCategories"])),mounted:function(){var t=this;this.$store.commit("products/clearProduct"),this.$store.commit("products/clearServerErrors"),this.isCreateMode||this.fetchProduct(this.$route.params.id),this.fetchCategories().then((function(){t.isCreateMode||(t.selectedCategory=t.allCategories.find((function(t){return 34===t.id})))}))}};var s=i(3379),c=i.n(s),d=i(4034),u={insert:"head",singleton:!1};c()(d.Z,u);d.Z.locals;const p=(0,i(1900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("the-breadcrumb",[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:{name:"products"}}},[i("i",{staticClass:"fa fa-clipboard-alt"}),t._v(" Produits")])],1),t._v(" "),t.isCreateMode?i("li",{staticClass:"breadcrumb-item active"},[t._v("Ajouter")]):i("li",{staticClass:"breadcrumb-item active"},[t._v("Modifier")])]),t._v(" "),i("div",{staticClass:"card card-sticker shadow mb-4 mt-5"},[i("div",{staticClass:"d-flex",attrs:{id:"card-header-wrapper"}},[i("div",{staticClass:"card-header card-header-sticker bg-primary text-center"},[i("h6",{staticClass:"font-weight-bold text-white"},[t.isCreateMode?i("i",{staticClass:"fa fa-plus fa-2x"}):i("i",{staticClass:"fa fa-pen fa-2x"})])]),t._v(" "),i("div",[t.isCreateMode?i("h1",{staticClass:"h4 mt-4 text-gray-800"},[t._v("\n          Ajout de Produits\n        ")]):i("h1",{staticClass:"h4 mt-4 text-gray-800"},[t._v("Modification de Produits")])]),t._v(" "),i("div",{staticClass:"ml-auto align-self-center p-3"},[i("router-link",{attrs:{to:{name:"products"}}},[i("button",{staticClass:"btn btn-outline-black   mr-2"},[i("i",{staticClass:"fa fa-arrow-circle-left"}),t._v(" "),i("span",[t._v(" Annuler")])])])],1)]),t._v(" "),i("div",{staticClass:"card-body"},[t.getIsLoading?i("div",[i("loading",{attrs:{color:"#2B51C4",active:t.getIsLoading,"is-full-page":!1},on:{"update:active":function(e){t.getIsLoading=e}}},[i("h5",{attrs:{slot:"after"},slot:"after"},[t._v("Loading")])])],1):t._e(),t._v(" "),i("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[t.serverErrors?i("server-error-alert",{attrs:{serverErrors:t.serverErrors}}):t._e(),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Titre de Produit")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.productObject.title,expression:"productObject.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Entrez le Titre"},domProps:{value:t.productObject.title},on:{input:function(e){e.target.composing||t.$set(t.productObject,"title",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Catégorie")]),t._v(" "),i("multiselect",{attrs:{options:t.allCategories,"close-on-select":!0,"clear-on-select":!0,"preserve-search":!0,placeholder:"Choisir un Catégorie",label:"name","track-by":"id"},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Image de Produit")]),t._v(" "),i("div",{staticClass:"input-group mb-3 mt-2"},[i("div",{staticClass:"input-group-prepend",staticStyle:{display:"none"},attrs:{id:"inputGroupFileAddon01"}},[i("button",{staticClass:"input-group-text btn btn-danger",attrs:{type:"button"},on:{click:t.cancelImage}},[i("i",{staticClass:"fa fa-close mr-2"}),t._v(" Cancel\n              ")])]),t._v(" "),i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input form-control mr-3",attrs:{type:"file",name:"image",id:"image","aria-describedby":"inputGroupFileAddon01",onchange:"$('#upload-file-info').html(this.files[0].name) ; $('#inputGroupFileAddon01').css('display','block')"},on:{change:t.onFileChange}}),t._v(" "),i("label",{staticClass:"custom-file-label",staticStyle:{overflow:"hidden"},attrs:{id:"upload-file-info",for:"image"}},[t._v("\n                Choisissez un nouvel image\n              ")])])]),t._v(" "),t.isCreateMode?t._e():i("img",{staticClass:"img-fluid",attrs:{src:t.productObject.image,width:"100",height:"100",alt:""}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{},[t._v("Description ")]),t._v(" "),i("wysiwyg",{attrs:{placeholder:"Entrez la Description"},model:{value:t.productObject.desc,callback:function(e){t.$set(t.productObject,"desc",e)},expression:"productObject.desc"}})],1),t._v(" "),t.isCreateMode?i("button",{staticClass:"btn btn-orange  btn-block",attrs:{type:"submit",disabled:t.postIsLoading}},[t.postIsLoading?i("i",{staticClass:"fa fa-circle-notch fa-spin"}):t._e(),t._v("\n          Ajouter\n        ")]):i("button",{staticClass:"btn btn-orange  btn-block",attrs:{type:"submit",disabled:t.postIsLoading}},[t.postIsLoading?i("i",{staticClass:"fa fa-circle-notch fa-spin"}):t._e(),t._v("\n\n          Sauvegarder\n        ")])],1)])])],1)}),[],!1,null,null,null).exports}}]);