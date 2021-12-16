(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 43095:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__h_8de"
};


/***/ }),

/***/ 27236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(34208)

      const appMod = __webpack_require__(35656)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(72770)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/posts/[slug]",
        buildId: "ZN6O2YF9oXQFcx_bt5I1P",
        escapedBuildId: "ZN6O2YF9oXQFcx_bt5I1P",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"0ee3a4f8979e4ee67699a11e1c2df676",previewModeSigningKey:"c3483190dbae1538c6b6cd7e93520b00989f8879fe3dfe2b9dd8207cddc27790",previewModeEncryptionKey:"2d1b20d88ecd71b7e7295f1983da6aec7cf35bc180b075f0343d7353d35df779"}
      })
      
    

/***/ }),

/***/ 72770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__(12918);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(47518);
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__(43095);
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);
;// CONCATENATED MODULE: ./components/post-body.tsx


const PostBody = ({ content  })=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: (markdown_styles_module_default()).markdown,
            dangerouslySetInnerHTML: {
                __html: content
            }
        })
    }));
};
/* harmony default export */ const post_body = (PostBody);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/header.tsx


const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
        className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: "hover:underline",
                    children: "Blog"
                })
            }),
            "."
        ]
    }));
};
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(28063);
// EXTERNAL MODULE: ./components/date-formatter.tsx
var date_formatter = __webpack_require__(63797);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(29371);
;// CONCATENATED MODULE: ./components/post-title.tsx

const PostTitle = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("h1", {
        className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
        children: children
    }));
};
/* harmony default export */ const post_title = (PostTitle);

;// CONCATENATED MODULE: ./components/post-header.tsx





const PostHeader = ({ title , coverImage , date , author  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(post_title, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden md:block md:mb-12",
                children: /*#__PURE__*/ jsx_runtime.jsx(avatar/* default */.Z, {
                    name: author.name,
                    picture: author.picture
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ jsx_runtime.jsx(cover_image/* default */.Z, {
                    title: title,
                    src: coverImage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "block md:hidden mb-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx(avatar/* default */.Z, {
                            name: author.name,
                            picture: author.picture
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mb-6 text-lg",
                        children: /*#__PURE__*/ jsx_runtime.jsx(date_formatter/* default */.Z, {
                            dateString: date
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const post_header = (PostHeader);

// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(66064);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(74390);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(59953);
// EXTERNAL MODULE: ./node_modules/remark/index.js
var remark = __webpack_require__(78756);
var remark_default = /*#__PURE__*/__webpack_require__.n(remark);
// EXTERNAL MODULE: ./node_modules/remark-html/index.js
var remark_html = __webpack_require__(58828);
var remark_html_default = /*#__PURE__*/__webpack_require__.n(remark_html);
;// CONCATENATED MODULE: ./lib/markdownToHtml.ts


async function markdownToHtml(markdown) {
    const result = await remark_default()().use((remark_html_default())).process(markdown);
    return result.toString();
};

;// CONCATENATED MODULE: ./pages/posts/[slug].tsx













const Post = ({ post , morePosts , preview  })=>{
    const router = (0,next_router.useRouter)();
    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
        return(/*#__PURE__*/ jsx_runtime.jsx(error["default"], {
            statusCode: 404
        }));
    }
    return(/*#__PURE__*/ jsx_runtime.jsx(layout/* default */.Z, {
        preview: preview,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(header, {
                }),
                router.isFallback ? /*#__PURE__*/ jsx_runtime.jsx(post_title, {
                    children: "Loading…"
                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                        className: "mb-32",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                                        children: [
                                            post.title,
                                            " | Next.js Blog Example with ",
                                            constants/* CMS_NAME */.yf
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                                        property: "og:image",
                                        content: post.ogImage.url
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(post_header, {
                                title: post.title,
                                coverImage: post.coverImage,
                                date: post.date,
                                author: post.author
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(post_body, {
                                content: post.content
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const _slug_ = (Post);
async function getStaticProps({ params  }) {
    const post = (0,api/* getPostBySlug */.zQ)(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage', 
    ]);
    const content = await markdownToHtml(post.content || '');
    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    };
}
async function getStaticPaths() {
    const posts = (0,api/* getAllPosts */.Bd)([
        'slug'
    ]);
    return {
        paths: posts.map((post)=>{
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}


/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,411,222,859,340], () => (__webpack_exec__(27236)));
module.exports = __webpack_exports__;

})();