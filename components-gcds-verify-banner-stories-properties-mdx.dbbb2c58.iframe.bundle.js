/*! For license information please see components-gcds-verify-banner-stories-properties-mdx.dbbb2c58.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[5795,7280],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/gcds-verify-banner/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_verify_banner_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-verify-banner/stories/gcds-verify-banner.stories.tsx");function _createMdxContent(props){const _components={h1:"h1",...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_verify_banner_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_verify_banner_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_verify_banner_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/gcds-verify-banner/stories/gcds-verify-banner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,French:()=>French,Full:()=>Full,Lg:()=>Lg,Md:()=>Md,Playground:()=>Playground,Props:()=>Props,Sm:()=>Sm,Xl:()=>Xl,Xs:()=>Xs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Verify banner",argTypes:{container:{control:{type:"select"},options:["full","xl","lg","md","sm","xs"],table:{type:{summary:"string"},defaultValue:{summary:"xl"}}},isFixed:{name:"is-fixed",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${"xl"!=args.container?`container="${args.container}"`:null} ${args.isFixed?"is-fixed":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${"xl"!=args.container?`container="${args.container}"`:null} ${args.isFixed?"isFixed":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={container:"xl",isFixed:!1,lang:"en"};const French=Template.bind({});French.args={container:"xl",isFixed:!1,lang:"fr"};const Full=Template.bind({});Full.args={container:"full",isFixed:!1,lang:"en"};const Xl=Template.bind({});Xl.args={container:"xl",isFixed:!1,lang:"en"};const Lg=Template.bind({});Lg.args={container:"lg",isFixed:!1,lang:"en"};const Md=Template.bind({});Md.args={container:"md",isFixed:!1,lang:"en"};const Sm=Template.bind({});Sm.args={container:"sm",isFixed:!1,lang:"en"};const Xs=Template.bind({});Xs.args={container:"xs",isFixed:!1,lang:"en"};const Props=Template.bind({});Props.args={container:"xl",isFixed:!1,lang:"en"};const Playground=(args=>`\n<gcds-verify-banner\n  ${"xl"!=args.container?`container="${args.container}"`:null}\n  ${args.isFixed?"is-fixed":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-verify-banner>\n`).bind({});Playground.args={container:"xl",isFixed:!1,lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...French.parameters?.docs?.source}}},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Full.parameters?.docs?.source}}},Xl.parameters={...Xl.parameters,docs:{...Xl.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Xl.parameters?.docs?.source}}},Lg.parameters={...Lg.parameters,docs:{...Lg.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Lg.parameters?.docs?.source}}},Md.parameters={...Md.parameters,docs:{...Md.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Md.parameters?.docs?.source}}},Sm.parameters={...Sm.parameters,docs:{...Sm.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Sm.parameters?.docs?.source}}},Xs.parameters={...Xs.parameters,docs:{...Xs.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Xs.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-verify-banner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `is-fixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-verify-banner>\n\n\x3c!-- React code --\x3e\n<GcdsVerifyBanner ${args.container != 'xl' ? `container=\"${args.container}\"` : null} ${args.isFixed ? `isFixed` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsVerifyBanner>\n`.replace(/ null/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-verify-banner\n  ${args.container != 'xl' ? `container=\"${args.container}\"` : null}\n  ${args.isFixed ? `is-fixed` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-verify-banner>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Full","Xl","Lg","Md","Sm","Xs","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IT:()=>eventProp,h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);