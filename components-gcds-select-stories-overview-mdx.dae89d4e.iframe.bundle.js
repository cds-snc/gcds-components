/*! For license information please see components-gcds-select-stories-overview-mdx.dae89d4e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[7336,8707],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/gcds-select/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-select/stories/gcds-select.stories.tsx");function _createMdxContent(props){const _components={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"selectgcds-select",children:["Select",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-select>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Also called: dropdown, select menu."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A list of options with a single-option choice."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"required",children:"Required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Required,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"error",children:"Error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Error,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Disabled,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default-value",children:"Default value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"select-with-default-value",children:"Select with default value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"select-without-default-value",children:"Select without default value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_select_stories__WEBPACK_IMPORTED_MODULE_2__.WithoutDefaultValue,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"resources-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://design-system.alpha.canada.ca/en/components/select/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-select",target:"_blank",children:"Github"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=856-2826&mode=design&t=S19QCPw1uQKzztyY-0",target:"_blank",children:"Figma"})})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/gcds-select/stories/gcds-select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,WithoutDefaultValue:()=>WithoutDefaultValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",parameters:{actions:{argTypesRegex:"^on.*",handles:["change","focus","blur"]}},argTypes:{selectId:{name:"select-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},name:{name:"name",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},defaultValue:{name:"default-value",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.fd,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.qK,default:{control:{type:"text"},description:"Customize the content or include additional elements. Accepts `<options>` and `<optgroup>` elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires. Accepte les éléments `<options>` et `<optgroup>`.",table:{category:"Slots | Fentes"}},gcdsChange:{action:"change",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsFocus:{action:"focus",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsBlur:{action:"blur",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in}}},selectOptions='<option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <optgroup label="Group">\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </optgroup>\n',Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`default-value="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`defaultValue="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={selectId:"select-default",label:"Label",name:"select",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur",default:selectOptions};const Disabled=Template.bind({});Disabled.args={selectId:"select-disabled",label:"Label",name:"select",hint:"Hint / Example message.",defaultValue:"Select option.",disabled:!0,lang:"en",validateOn:"blur",default:selectOptions};const Error=Template.bind({});Error.args={selectId:"select-error",label:"Label",name:"select",hint:"Hint / Example message.",defaultValue:"Select option.",required:!0,errorMessage:"Error message or validation message.",lang:"en",validateOn:"blur",default:selectOptions};const Required=Template.bind({});Required.args={selectId:"select-required",label:"Label",name:"select",hint:"Hint / Example message.",defaultValue:"Select option.",required:!0,lang:"en",validateOn:"blur",default:selectOptions};const WithoutDefaultValue=Template.bind({});WithoutDefaultValue.args={selectId:"select-default-value",label:"Label",name:"select",hint:"Hint / Example message.",lang:"en",validateOn:"blur",default:selectOptions};const Props=Template.bind({});Props.args={selectId:"select-props",label:"Label",name:"select",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur",default:selectOptions};const Playground=(args=>`\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`default-value="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default}\n</gcds-select>\n`).bind({});Playground.args={selectId:"select-playground",label:"Label",name:"select",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur",default:selectOptions},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},WithoutDefaultValue.parameters={...WithoutDefaultValue.parameters,docs:{...WithoutDefaultValue.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...WithoutDefaultValue.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-select>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Error","Required","WithoutDefaultValue","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);