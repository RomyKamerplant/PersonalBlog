(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,4,5],{292:function(t,e,o){"use strict";o.r(e);var r=o(51),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("footer",{staticClass:"bottom-0 w-full m-4"},[o("p",{staticClass:"text-center"},[t._v("© "+t._s(t.$moment().format("YYYY"))+" - Jonas Wolber - Made in 🇪🇺")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(292).default})},293:function(t,e,o){"use strict";o.r(e);var r=o(51),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-gray-700  border-lime-400 border-b-4 max-w-full h-24 flex justify-between"},[o("div",{staticClass:"mt-3 ml-6"},[o("nuxt-link",{staticClass:"hover:bg-lime-400 hover:opacity-70",attrs:{to:"/"}},[o("img",{staticClass:"h-16 rounded-2xl",attrs:{src:"Logo.png",alt:"Logo"}})])],1),t._v(" "),o("div",{staticClass:"flex justify-around space-x-8 p-2 items-center"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100",attrs:{to:"/blog"}},[o("a",{staticClass:"dropdown"},[o("label",{attrs:{tabindex:"0"}},[t._v("Blog")]),t._v(" "),o("ul",{staticClass:"p-2 shadow menu dropdown-content bg-stone-50 rounded-box w-52",attrs:{tabindex:"0"}},[o("li",[o("NuxtLink",{attrs:{to:"/blog"}},[t._v("Overview")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/science"}},[t._v("Science")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/travel"}},[t._v("Travel")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/food"}},[t._v("Food")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/fitness"}},[t._v("Fitness")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/programming"}},[t._v("Programming")])],1)])])]),t._v(" "),o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/compose"}},[t._v(" Compose")])],1),t._v(" "),o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/projects"}},[t._v(" Projects")])],1),t._v(" "),o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/about"}},[t._v(" About")])],1),t._v(" "),o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/contact"}},[t._v(" Contact")])],1),t._v(" "),o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/subscribe"}},[t._v(" Subscribe")])],1)])])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,o){"use strict";o.r(e);var r={props:{post:{type:Object,requried:!0,default:function(){}}}},l=o(51),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("NuxtLink",{attrs:{to:t.post.slug,"aria-label":"Read - "+t.post.title}},[o("article",{staticClass:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl bg-violet-500 p-8 rounded-3xl text-stone-50 hover:text-lime-400"},[o("div",{staticClass:"flex space-x-4"},[o("div",{staticClass:"w-4/5 mt-10"},[o("p",{staticClass:"text-base"},[t._v("Written by "+t._s(t.post.owner))]),t._v(" "),o("p",{staticClass:"text-base"},[t._v("Posted on "+t._s(t.$moment(t.post.createdAt).format("MMMM DD, YYYY")))]),t._v(" "),o("p",{staticClass:"text-base"},[t._v("Lastly updated on "+t._s(t.$moment(t.post.lastUpdateAt).format("MMMM DD, YYYY")))]),t._v(" "),o("p",{staticClass:"text-base"},[t._v("Domain "+t._s(t.post.domain))])]),t._v(" "),o("div",{staticClass:"container mx-auto"},[o("img",{staticClass:"max-h-80 mx-auto",attrs:{src:t.post.img}})])]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\r\n        "+t._s(t.post.title)+"\r\n      ")]),t._v(" "),o("p",{staticClass:"font-light leading-7 text-lg"},[t._v("\r\n        "+t._s(t.post.description)+"\r\n      ")]),t._v(" "),o("div",{staticClass:"mt-5"},[t._v("\r\n          Details →\r\n      ")])])])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,o){"use strict";o.r(e);var r=o(8),l=(o(45),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("posts").sortBy("createdAt","desc").limit(3).fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()}}),n=o(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("NavBar"),t._v(" "),o("div",{staticClass:"grid place-items-center h-screen"},[o("div",{staticClass:"grid place-items-center "},[o("h1",{staticClass:"m-16 text-4xl"},[t._v("Domains")]),t._v(" "),o("div",{staticClass:"flex space-x-8"},[o("div",{staticClass:"card w-80 bg-lime-400 shadow-xl"},[t._m(0),t._v(" "),o("div",{staticClass:"card-body bg-violet-500"},[o("h2",{staticClass:"card-title"},[t._v("Science")]),t._v(" "),o("p",[t._v("What ist the advantage of genetically modified fries? - They are CRISPR.")]),t._v(" "),o("div",{staticClass:"justify-end card-actions"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/science"}},[t._v(" Visit now")])],1)])])]),t._v(" "),o("div",{staticClass:"card w-80 bg-lime-400 shadow-xl"},[t._m(1),t._v(" "),o("div",{staticClass:"card-body bg-violet-500"},[o("h2",{staticClass:"card-title"},[t._v("Travel")]),t._v(" "),o("p",[t._v("Where do sharks like to go on vacation? - Finland!")]),t._v(" "),o("div",{staticClass:"justify-end card-actions"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/travel"}},[t._v(" Visit now")])],1)])])]),t._v(" "),o("div",{staticClass:"card w-80 bg-lime-400 shadow-xl"},[t._m(2),t._v(" "),o("div",{staticClass:"card-body bg-violet-500"},[o("h2",{staticClass:"card-title"},[t._v("Food")]),t._v(" "),o("p",[t._v("Can I tell you a vegan joke? I promise it won’t be cheesy.")]),t._v(" "),o("div",{staticClass:"justify-end card-actions"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/food"}},[t._v(" Visit now")])],1)])])]),t._v(" "),o("div",{staticClass:"card w-80 bg-lime-400 shadow-xl"},[t._m(3),t._v(" "),o("div",{staticClass:"card-body bg-violet-500"},[o("h2",{staticClass:"card-title"},[t._v("Fitness")]),t._v(" "),o("p",[t._v("Why don’t cows skip leg day? Because they care about their calves.")]),t._v(" "),o("div",{staticClass:"justify-end card-actions"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/fitness"}},[t._v(" Visit now")])],1)])])]),t._v(" "),o("div",{staticClass:"card w-80 bg-lime-400 shadow-xl"},[t._m(4),t._v(" "),o("div",{staticClass:"card-body bg-violet-500"},[o("h2",{staticClass:"card-title"},[t._v("Programming")]),t._v(" "),o("p",[t._v('A programmer went to the grocery store. His wife said "while you are out, go get some milk." - He never came back.\r\n    ')]),t._v(" "),o("div",{staticClass:"justify-end card-actions"},[o("div",{staticClass:"bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100"},[o("NuxtLink",{attrs:{to:"/programming"}},[t._v(" Visit now")])],1)])])])])]),t._v(" "),o("div",{staticClass:"grid place-items-center h-screen"},[o("h1",{staticClass:"m-16 text-4xl"},[t._v("Latest Blog Posts")]),t._v(" "),o("ul",{staticClass:"divide-y divide-gray-300"},t._l(t.posts,(function(t){return o("li",{key:t.title,staticClass:"py-14"},[o("div",{staticClass:"rounded-xl"},[o("BlogPreview",{attrs:{post:t}})],1)])})),0),t._v(" "),o("Footer")],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"h-56",attrs:{src:"https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Shoes"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"h-56",attrs:{src:"https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Shoes"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"h-56",attrs:{src:"https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Shoes"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"h-56",attrs:{src:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Shoes"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"h-56",attrs:{src:"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Shoes"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:o(293).default,BlogPreview:o(294).default,Footer:o(292).default})}}]);