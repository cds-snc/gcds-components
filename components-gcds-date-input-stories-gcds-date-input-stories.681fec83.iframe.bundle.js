"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[4999],{"./src/components/gcds-date-input/stories/gcds-date-input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompactEN:()=>CompactEN,CompactFR:()=>CompactFR,Default:()=>Default,DefaultState:()=>DefaultState,Disabled:()=>Disabled,Error:()=>Error,FullEN:()=>FullEN,FullFR:()=>FullFR,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Date Input",argTypes:{name:{name:"name",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},format:{control:{type:"select"},options:["full","compact"],table:{type:{summary:"boolean"},defaultValue:{summary:"-"}},type:{required:!0}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},legend:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",description:"Full: YYYY-MM-DD, compact: YYYY-MM",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.fd,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.qK,gcdsChange:{action:"change",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsInput:{action:"input",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsFocus:{action:"focus",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsBlur:{action:"blur",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value?`value="${args.value}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value?`value="${args.value}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsDateInput>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={name:"example-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""};const FullEN=Template.bind({});FullEN.args={name:"FullEN-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""};const FullFR=Template.bind({});FullFR.args={name:"FullFR-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"fr",validateOn:""};const CompactEN=Template.bind({});CompactEN.args={name:"CompactEN-default",legend:"Date input",format:"compact",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""};const CompactFR=Template.bind({});CompactFR.args={name:"CompactFR-default",legend:"Date input",format:"compact",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"fr",validateOn:""};const Required=Template.bind({});Required.args={name:"required-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!0,disabled:!1,lang:"en",validateOn:""};const DefaultState=Template.bind({});DefaultState.args={name:"hint-default",legend:"Date input",format:"full",value:"",hint:"Hint / example message.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""};const Error=Template.bind({});Error.args={name:"error-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"Enter the date.",required:!1,disabled:!1,lang:"en",validateOn:""};const Disabled=Template.bind({});Disabled.args={name:"disabled-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!0,lang:"en",validateOn:""};const Props=Template.bind({});Props.args={name:"props-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""};const Playground=(args=>`\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value?`value="${args.value}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-date-input>\n`).bind({});Playground.args={name:"playground-default",legend:"Date input",format:"full",value:"",hint:"",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},FullEN.parameters={...FullEN.parameters,docs:{...FullEN.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...FullEN.parameters?.docs?.source}}},FullFR.parameters={...FullFR.parameters,docs:{...FullFR.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...FullFR.parameters?.docs?.source}}},CompactEN.parameters={...CompactEN.parameters,docs:{...CompactEN.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...CompactEN.parameters?.docs?.source}}},CompactFR.parameters={...CompactFR.parameters,docs:{...CompactFR.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...CompactFR.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},DefaultState.parameters={...DefaultState.parameters,docs:{...DefaultState.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...DefaultState.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n\n\x3c!-- React code --\x3e\n<GcdsDateInput\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsDateInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-date-input\n  legend="${args.legend}"\n  name="${args.name}"\n  format="${args.format}"\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-date-input>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FullEN","FullFR","CompactEN","CompactFR","Required","DefaultState","Error","Disabled","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);