(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[8579],{"./src/components/gcds-textarea/stories/gcds-textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Character:()=>Character,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,Rows:()=>Rows,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Textarea",parameters:{actions:{argTypesRegex:"^on.*",handles:["change","focus","blur"]}},argTypes:{hideLabel:{name:"hide-label",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},textareaId:{name:"textarea-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},characterCount:{name:"character-count",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"-"}}},rows:{control:"number",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.validatorProps,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp,gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.characterCount?`character-count="${args.characterCount}"`:null}\n  ${args.rows?`rows="${args.rows}"`:null}\n  ${args.hideLabel?"hide-label":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.characterCount?`characterCount="${args.characterCount}"`:null}\n  ${args.rows?`rows="${args.rows}"`:null}\n  ${args.hideLabel?"hideLabel":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsTextarea>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",validateOn:"blur",lang:"en"};const Disabled=Template.bind({});Disabled.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",disabled:!0,validateOn:"blur",lang:"en"};const Error=Template.bind({});Error.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",errorMessage:"Error message or validation message.",required:!0,validateOn:"blur",lang:"en"};const Required=Template.bind({});Required.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",required:!0,validateOn:"blur",lang:"en"};const Character=Template.bind({});Character.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",characterCount:200,validateOn:"blur",lang:"en"};const Rows=Template.bind({});Rows.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",rows:10,validateOn:"blur",lang:"en"};const Props=Template.bind({});Props.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",characterCount:"",errorMessage:"",required:!1,disabled:!1,rows:"",value:"",hideLabel:!1,validateOn:"blur",lang:"en"};const Playground=(args=>`\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.characterCount?`character-count="${args.characterCount}"`:null}\n  ${args.rows?`rows="${args.rows}"`:null}\n  ${args.hideLabel?"hide-label":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-textarea>\n`).bind({});Playground.args={textareaId:"textarea",label:"Label",hint:"Hint / Example message.",characterCount:"",errorMessage:"",required:!1,disabled:!1,rows:"",value:"",hideLabel:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Character.parameters={...Character.parameters,docs:{...Character.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Character.parameters?.docs?.source}}},Rows.parameters={...Rows.parameters,docs:{...Rows.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Rows.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n\n\x3c!-- React code --\x3e\n<GcdsTextarea\n  textareaId="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `characterCount="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hideLabel` : null}\n  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsTextarea>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-textarea\n  textarea-id="${args.textareaId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.characterCount ? `character-count="${args.characterCount}"` : null}\n  ${args.rows ? `rows="${args.rows}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-textarea>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Error","Required","Character","Rows","Props","Playground"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);