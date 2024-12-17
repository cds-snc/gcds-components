"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[4921],{"./src/components/gcds-breadcrumbs/stories/gcds-breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,Props:()=>Props,WithoutCanadaLink:()=>WithoutCanadaLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumbs",argTypes:{hideCanadaLink:{name:"hide-canada-link",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},...__webpack_require__("./src/utils/storybook/component-properties.js").qK,default:{control:{type:"text"},table:{category:"Slots | Fentes",disable:!0}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink?"hide-canada-link":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink?"hideCanadaLink":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  <GcdsBreadcrumbsItem href="#">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="#">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={hideCanadaLink:!1,lang:"en"};const WithoutCanadaLink=Template.bind({});WithoutCanadaLink.args={hideCanadaLink:!0,lang:"en"};const Props=Template.bind({});Props.args={hideCanadaLink:!1,lang:"en",default:""};const Playground=(args=>`\n<gcds-breadcrumbs\n  ${args.hideCanadaLink?"hide-canada-link":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n`).bind({});Playground.args={hideCanadaLink:!1,lang:"en",default:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="#">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="#">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},WithoutCanadaLink.parameters={...WithoutCanadaLink.parameters,docs:{...WithoutCanadaLink.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="#">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="#">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...WithoutCanadaLink.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="#">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="#">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-breadcrumbs\n  ${args.hideCanadaLink ? `hide-canada-link` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutCanadaLink","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);