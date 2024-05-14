/*! For license information please see components-gcds-checkbox-stories-overview-mdx.02f0fd5b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2753,2005],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-checkbox/stories/gcds-checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",parameters:{actions:{argTypesRegex:"^gcds.*",handles:["change","focus","blur"]}},argTypes:{checkboxId:{name:"checkbox-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},name:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},checked:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.h4,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.q_,gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsCheckbox>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={checkboxId:"checkbox-default",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Required=Template.bind({});Required.args={checkboxId:"checkbox-required",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!0,disabled:!1,value:"",checked:!1,validateOn:"other",lang:"en"};const Disabled=Template.bind({});Disabled.args={checkboxId:"checkbox-disabled",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!0,value:"",checked:!1,validateOn:"blur",lang:"en"};const Error=Template.bind({});Error.args={checkboxId:"checkbox-error",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"You must check the box to continue.",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Checked=Template.bind({});Checked.args={checkboxId:"checkbox-checked",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!0,validateOn:"other",lang:"en"};const Props=Template.bind({});Props.args={checkboxId:"checkbox-default",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-checkbox>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={checkboxId:"checkbox-playground",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Checked.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Required","Disabled","Error","Checked","Props","Playground"]},"./src/components/gcds-checkbox/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-checkbox/stories/gcds-checkbox.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",p:"p",em:"em",h2:"h2",h3:"h3",h4:"h4"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"checkboxgcds-checkbox",children:["Checkbox",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-checkbox>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Also called: checklist, check list."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A checkbox is a set of options for one or multiple selections."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"required",children:"Required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Required,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"error",children:"Error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Error,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Disabled,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"checked",children:"Checked"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Checked,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"resources-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://design-system.alpha.canada.ca/en/components/checkbox/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox",target:"_blank",children:"Github"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=462-320&mode=design&t=6AQy5Cmm6YcqHAJm-0",target:"_blank",children:"Figma"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);