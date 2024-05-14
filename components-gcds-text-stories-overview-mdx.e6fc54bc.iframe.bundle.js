/*! For license information please see components-gcds-text-stories-overview-mdx.e6fc54bc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1951,3788],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-text/stories/gcds-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CharacterLimit:()=>CharacterLimit,Default:()=>Default,Light:()=>Light,NoCharacterLimit:()=>NoCharacterLimit,Playground:()=>Playground,Primary:()=>Primary,Props:()=>Props,Secondary:()=>Secondary,SizeBody:()=>SizeBody,SizeCaption:()=>SizeCaption,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text",argTypes:{characterLimit:{name:"character-limit",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},display:{control:{type:"select"},options:["block","flex","inline","inline-block","inline-flex","none"],table:{type:{summary:"string"},defaultValue:{summary:"block"}}},marginTop:{name:"margin-top",control:{type:"select"},options:["0","50","100","150","200","250","300","400","450","500","550","600","700","800","900","1000"],table:{type:{summary:"string"},defaultValue:{summary:"0"}}},marginBottom:{name:"margin-bottom",control:{type:"select"},options:["0","50","100","150","200","250","300","400","450","500","550","600","700","800","900","1000"],table:{type:{summary:"string"},defaultValue:{summary:"400"}}},size:{control:{type:"select"},options:["body","caption"],table:{type:{summary:"string"},defaultValue:{summary:"body"}}},textRole:{name:"text-role",control:{type:"select"},options:["light","primary","secondary"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${"primary"!=args.textRole?`text-role="${args.textRole}"`:null} ${"body"!=args.size?`size="${args.size}"`:null} ${args.characterLimit?null:`character-limit="${args.characterLimit}"`} ${"block"!=args.display?`display="${args.display}"`:null} ${"0"!=args.marginTop?`margin-top="${args.marginTop}"`:null} ${"400"!=args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${"primary"!=args.textRole?`textRole="${args.textRole}"`:null} ${"body"!=args.size?`size="${args.size}"`:null} ${args.characterLimit?null:`characterLimit="${args.characterLimit}"`} ${"block"!=args.display?`display="${args.display}"`:null} ${"0"!=args.marginTop?`marginTop="${args.marginTop}"`:null} ${"400"!=args.marginBottom?`marginBottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Primary=Template.bind({});Primary.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Secondary=Template.bind({});Secondary.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"secondary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Light=Template.bind({});Light.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"light",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const SizeBody=Template.bind({});SizeBody.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const SizeCaption=Template.bind({});SizeCaption.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"caption",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const CharacterLimit=Template.bind({});CharacterLimit.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const NoCharacterLimit=Template.bind({});NoCharacterLimit.args={characterLimit:!1,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Props=Template.bind({});Props.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Playground=(args=>`\n<gcds-text\n  ${"primary"!=args.textRole?`text-role="${args.textRole}"`:null}\n  ${"body"!=args.size?`size="${args.size}"`:null}\n  ${args.characterLimit?null:`character-limit="${args.characterLimit}"`}\n  ${"block"!=args.display?`display="${args.display}"`:null}\n  ${"0"!=args.marginTop?`margin-top="${args.marginTop}"`:null}\n  ${"400"!=args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}\n>\n  ${args.default}\n</gcds-text>\n`).bind({});Playground.args={characterLimit:!0,display:"block",marginTop:"0",marginBottom:"400",size:"body",textRole:"primary",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Secondary.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Light.parameters?.docs?.source}}},SizeBody.parameters={...SizeBody.parameters,docs:{...SizeBody.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...SizeBody.parameters?.docs?.source}}},SizeCaption.parameters={...SizeCaption.parameters,docs:{...SizeCaption.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...SizeCaption.parameters?.docs?.source}}},CharacterLimit.parameters={...CharacterLimit.parameters,docs:{...CharacterLimit.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...CharacterLimit.parameters?.docs?.source}}},NoCharacterLimit.parameters={...NoCharacterLimit.parameters,docs:{...NoCharacterLimit.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...NoCharacterLimit.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop != \'0\' ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom != \'400\' ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-text\n  ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null}\n  ${args.size != \'body\' ? `size="${args.size}"` : null}\n  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}\n  ${args.display != \'block\' ? `display="${args.display}"` : null}\n  ${args.marginTop != \'0\' ? `margin-top="${args.marginTop}"` : null}\n  ${args.marginBottom != \'400\' ? `margin-bottom="${args.marginBottom}"` : null}\n>\n  ${args.default}\n</gcds-text>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Secondary","Light","SizeBody","SizeCaption","CharacterLimit","NoCharacterLimit","Props","Playground"]},"./src/components/gcds-text/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-text/stories/gcds-text.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",p:"p",em:"em",h2:"h2",h3:"h3",h4:"h4"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"textgcds-text",children:["Text",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-text>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Also called: text block, copy, caption, body text, paragraph."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Text is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"role",children:"Role"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.Primary,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.Secondary,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"light",children:"Light"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.Light,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"text-size-body",children:"Text size body."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.SizeBody,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"text-size-caption",children:"Text size caption."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.SizeCaption,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"character-limit",children:"Character limit"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"text-with-character-limit",children:"Text with character limit"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.CharacterLimit,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"text-without-character-limit",children:"Text without character limit"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_text_stories__WEBPACK_IMPORTED_MODULE_2__.NoCharacterLimit,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"resources-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://design-system.alpha.canada.ca/en/components/text/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-text",target:"_blank",children:"Github"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);