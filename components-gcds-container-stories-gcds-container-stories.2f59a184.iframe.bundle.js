"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[763],{"./src/components/gcds-container/stories/gcds-container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,Default:()=>Default,MainContainer:()=>MainContainer,Margin:()=>Margin,Padding:()=>Padding,Playground:()=>Playground,Props:()=>Props,SizeFull:()=>SizeFull,SizeLg:()=>SizeLg,SizeMd:()=>SizeMd,SizeSm:()=>SizeSm,SizeXl:()=>SizeXl,SizeXs:()=>SizeXs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Container",argTypes:{border:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},centered:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},mainContainer:{name:"main-container",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},margin:{control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"-"}}},padding:{control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"-"}}},size:{control:{type:"select"},options:["full","xl","lg","md","sm","xs"],table:{type:{summary:"string"},defaultValue:{summary:"full"}}},tag:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"div"}}},default:{control:{type:"text"},description:"Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.",table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${"full"!=args.size?`size="${args.size}"`:null} ${args.border?"border":null} ${args.centered?"centered":null} ${"div"!=args.tag?`tag="${args.tag}"`:null} ${args.mainContainer?"main-container":null} ${args.margin?`margin="${args.margin}"`:null} ${args.padding?`padding="${args.padding}"`:null}>\n  ${args.default?args.default:null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${"full"!=args.size?`size="${args.size}"`:null} ${args.border?"border":null} ${args.centered?"centered":null} ${"div"!=args.tag?`tag="${args.tag}"`:null} ${args.mainContainer?"mainContainer":null} ${args.margin?`margin="${args.margin}"`:null} ${args.padding?`padding="${args.padding}"`:null}>\n  ${args.default?args.default:null}\n</GcdsContainer>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={size:"md",border:!0,centered:!1,tag:"div",mainContainer:!1,padding:"300",default:"<p>This is a responsive container, you can replace this text with any content or other components.</p>"};const SizeFull=Template.bind({});SizeFull.args={size:"full",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "full". You can replace this text with any content or other components.</p>'};const SizeXl=Template.bind({});SizeXl.args={size:"xl",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "xl". You can replace this text with any content or other components.</p>'};const SizeLg=Template.bind({});SizeLg.args={size:"lg",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "lg". You can replace this text with any content or other components.</p>'};const SizeMd=Template.bind({});SizeMd.args={size:"md",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "md". You can replace this text with any content or other components.</p>'};const SizeSm=Template.bind({});SizeSm.args={size:"sm",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "sm". You can replace this text with any content or other components.</p>'};const SizeXs=Template.bind({});SizeXs.args={size:"xs",border:!0,tag:"div",mainContainer:!1,padding:"300",default:'<p>This is a responsive container, the size is set to "xs". You can replace this text with any content or other components.</p>'};const Centered=Template.bind({});Centered.args={size:"sm",border:!0,centered:!0,tag:"div",mainContainer:!1,padding:"300",default:"<p>This container is centered.</p>"};const MainContainer=Template.bind({});MainContainer.args={size:"xl",border:!0,tag:"main",mainContainer:!0,padding:"300",default:"<p>This container is the main page container.</p>"};const Margin=(()=>'\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-container size="md" border margin="0">Margin 0</gcds-container>\n<gcds-container size="md" border margin="25">Margin 25</gcds-container>\n<gcds-container size="md" border margin="50">Margin 50</gcds-container>\n<gcds-container size="md" border margin="75">Margin 75</gcds-container>\n<gcds-container size="md" border margin="100">Margin 100</gcds-container>\n<gcds-container size="md" border margin="125">Margin 125</gcds-container>\n<gcds-container size="md" border margin="150">Margin 150</gcds-container>\n<gcds-container size="md" border margin="175">Margin 175</gcds-container>\n<gcds-container size="md" border margin="200">Margin 200</gcds-container>\n<gcds-container size="md" border margin="225">Margin 225</gcds-container>\n<gcds-container size="md" border margin="250">Margin 250</gcds-container>\n<gcds-container size="md" border margin="300">Margin 300</gcds-container>\n<gcds-container size="md" border margin="350">Margin 350</gcds-container>\n<gcds-container size="md" border margin="400">Margin 400</gcds-container>\n<gcds-container size="md" border margin="450">Margin 450</gcds-container>\n<gcds-container size="md" border margin="500">Margin 500</gcds-container>\n<gcds-container size="md" border margin="550">Margin 550</gcds-container>\n<gcds-container size="md" border margin="600">Margin 600</gcds-container>\n<gcds-container size="md" border margin="650">Margin 650</gcds-container>\n<gcds-container size="md" border margin="700">Margin 700</gcds-container>\n<gcds-container size="md" border margin="750">Margin 750</gcds-container>\n<gcds-container size="md" border margin="800">Margin 800</gcds-container>\n<gcds-container size="md" border margin="850">Margin 850</gcds-container>\n<gcds-container size="md" border margin="900">Margin 900</gcds-container>\n<gcds-container size="md" border margin="950">Margin 950</gcds-container>\n<gcds-container size="md" border margin="1000">Margin 1000</gcds-container>\n<gcds-container size="md" border margin="1050">Margin 1050</gcds-container>\n<gcds-container size="md" border margin="1100">Margin 1100</gcds-container>\n<gcds-container size="md" border margin="1150">Margin 1150</gcds-container>\n<gcds-container size="md" border margin="1200">Margin 1200</gcds-container>\n<gcds-container size="md" border margin="1250">Margin 1250</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer size="md" border margin="0">Margin 0</GcdsContainer>\n<GcdsContainer size="md" border margin="25">Margin 25</GcdsContainer>\n<GcdsContainer size="md" border margin="50">Margin 50</GcdsContainer>\n<GcdsContainer size="md" border margin="75">Margin 75</GcdsContainer>\n<GcdsContainer size="md" border margin="100">Margin 100</GcdsContainer>\n<GcdsContainer size="md" border margin="125">Margin 125</GcdsContainer>\n<GcdsContainer size="md" border margin="150">Margin 150</GcdsContainer>\n<GcdsContainer size="md" border margin="175">Margin 175</GcdsContainer>\n<GcdsContainer size="md" border margin="200">Margin 200</GcdsContainer>\n<GcdsContainer size="md" border margin="225">Margin 225</GcdsContainer>\n<GcdsContainer size="md" border margin="250">Margin 250</GcdsContainer>\n<GcdsContainer size="md" border margin="300">Margin 300</GcdsContainer>\n<GcdsContainer size="md" border margin="350">Margin 350</GcdsContainer>\n<GcdsContainer size="md" border margin="400">Margin 400</GcdsContainer>\n<GcdsContainer size="md" border margin="450">Margin 450</GcdsContainer>\n<GcdsContainer size="md" border margin="500">Margin 500</GcdsContainer>\n<GcdsContainer size="md" border margin="550">Margin 550</GcdsContainer>\n<GcdsContainer size="md" border margin="600">Margin 600</GcdsContainer>\n<GcdsContainer size="md" border margin="650">Margin 650</GcdsContainer>\n<GcdsContainer size="md" border margin="700">Margin 700</GcdsContainer>\n<GcdsContainer size="md" border margin="750">Margin 750</GcdsContainer>\n<GcdsContainer size="md" border margin="800">Margin 800</GcdsContainer>\n<GcdsContainer size="md" border margin="850">Margin 850</GcdsContainer>\n<GcdsContainer size="md" border margin="900">Margin 900</GcdsContainer>\n<GcdsContainer size="md" border margin="950">Margin 950</GcdsContainer>\n<GcdsContainer size="md" border margin="1000">Margin 1000</GcdsContainer>\n<GcdsContainer size="md" border margin="1050">Margin 1050</GcdsContainer>\n<GcdsContainer size="md" border margin="1100">Margin 1100</GcdsContainer>\n<GcdsContainer size="md" border margin="1150">Margin 1150</GcdsContainer>\n<GcdsContainer size="md" border margin="1200">Margin 1200</GcdsContainer>\n<GcdsContainer size="md" border margin="1250">Margin 1250</GcdsContainer>\n'.replace(/ null/g,"")).bind({});Margin.args={};const Padding=(()=>'\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-container size="md" border padding="0">Padding 0</gcds-container>\n<gcds-container size="md" border padding="25">Padding 25</gcds-container>\n<gcds-container size="md" border padding="50">Padding 50</gcds-container>\n<gcds-container size="md" border padding="75">Padding 75</gcds-container>\n<gcds-container size="md" border padding="100">Padding 100</gcds-container>\n<gcds-container size="md" border padding="125">Padding 125</gcds-container>\n<gcds-container size="md" border padding="150">Padding 150</gcds-container>\n<gcds-container size="md" border padding="175">Padding 175</gcds-container>\n<gcds-container size="md" border padding="200">Padding 200</gcds-container>\n<gcds-container size="md" border padding="225">Padding 225</gcds-container>\n<gcds-container size="md" border padding="250">Padding 250</gcds-container>\n<gcds-container size="md" border padding="300">Padding 300</gcds-container>\n<gcds-container size="md" border padding="350">Padding 350</gcds-container>\n<gcds-container size="md" border padding="400">Padding 400</gcds-container>\n<gcds-container size="md" border padding="450">Padding 450</gcds-container>\n<gcds-container size="md" border padding="500">Padding 500</gcds-container>\n<gcds-container size="md" border padding="550">Padding 550</gcds-container>\n<gcds-container size="md" border padding="600">Padding 600</gcds-container>\n<gcds-container size="md" border padding="650">Padding 650</gcds-container>\n<gcds-container size="md" border padding="700">Padding 700</gcds-container>\n<gcds-container size="md" border padding="750">Padding 750</gcds-container>\n<gcds-container size="md" border padding="800">Padding 800</gcds-container>\n<gcds-container size="md" border padding="850">Padding 850</gcds-container>\n<gcds-container size="md" border padding="900">Padding 900</gcds-container>\n<gcds-container size="md" border padding="950">Padding 950</gcds-container>\n<gcds-container size="md" border padding="1000">Padding 1000</gcds-container>\n<gcds-container size="md" border padding="1050">Padding 1050</gcds-container>\n<gcds-container size="md" border padding="1100">Padding 1100</gcds-container>\n<gcds-container size="md" border padding="1150">Padding 1150</gcds-container>\n<gcds-container size="md" border padding="1200">Padding 1200</gcds-container>\n<gcds-container size="md" border padding="1250">Padding 1250</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer size="md" border padding="0">Padding 0</GcdsContainer>\n<GcdsContainer size="md" border padding="25">Padding 25</GcdsContainer>\n<GcdsContainer size="md" border padding="50">Padding 50</GcdsContainer>\n<GcdsContainer size="md" border padding="75">Padding 75</GcdsContainer>\n<GcdsContainer size="md" border padding="100">Padding 100</GcdsContainer>\n<GcdsContainer size="md" border padding="125">Padding 125</GcdsContainer>\n<GcdsContainer size="md" border padding="150">Padding 150</GcdsContainer>\n<GcdsContainer size="md" border padding="175">Padding 175</GcdsContainer>\n<GcdsContainer size="md" border padding="200">Padding 200</GcdsContainer>\n<GcdsContainer size="md" border padding="225">Padding 225</GcdsContainer>\n<GcdsContainer size="md" border padding="250">Padding 250</GcdsContainer>\n<GcdsContainer size="md" border padding="300">Padding 300</GcdsContainer>\n<GcdsContainer size="md" border padding="350">Padding 350</GcdsContainer>\n<GcdsContainer size="md" border padding="400">Padding 400</GcdsContainer>\n<GcdsContainer size="md" border padding="450">Padding 450</GcdsContainer>\n<GcdsContainer size="md" border padding="500">Padding 500</GcdsContainer>\n<GcdsContainer size="md" border padding="550">Padding 550</GcdsContainer>\n<GcdsContainer size="md" border padding="600">Padding 600</GcdsContainer>\n<GcdsContainer size="md" border padding="650">Padding 650</GcdsContainer>\n<GcdsContainer size="md" border padding="700">Padding 700</GcdsContainer>\n<GcdsContainer size="md" border padding="750">Padding 750</GcdsContainer>\n<GcdsContainer size="md" border padding="800">Padding 800</GcdsContainer>\n<GcdsContainer size="md" border padding="850">Padding 850</GcdsContainer>\n<GcdsContainer size="md" border padding="900">Padding 900</GcdsContainer>\n<GcdsContainer size="md" border padding="950">Padding 950</GcdsContainer>\n<GcdsContainer size="md" border padding="1000">Padding 1000</GcdsContainer>\n<GcdsContainer size="md" border padding="1050">Padding 1050</GcdsContainer>\n<GcdsContainer size="md" border padding="1100">Padding 1100</GcdsContainer>\n<GcdsContainer size="md" border padding="1150">Padding 1150</GcdsContainer>\n<GcdsContainer size="md" border padding="1200">Padding 1200</GcdsContainer>\n<GcdsContainer size="md" border padding="1250">Padding 1250</GcdsContainer>\n'.replace(/ null/g,"")).bind({});Padding.args={};const Props=Template.bind({});Props.args={size:"md",tag:"div",mainContainer:!1,padding:"300",centered:!1,border:!0,default:"<p>This is a responsive container, you can replace this text with any content or other components.</p>"};const Playground=(args=>`\n<gcds-container\n  ${"full"!=args.size?`size="${args.size}"`:null}\n  ${args.border?"border":null}\n  ${args.centered?"centered":null}\n  ${"div"!=args.tag?`tag="${args.tag}"`:null}\n  ${args.mainContainer?`main-container="${args.mainContainer}"`:null}\n  ${args.margin?`margin="${args.margin}"`:null}\n  ${args.padding?`padding="${args.padding}"`:null}\n>\n  ${args.default?args.default:null}\n</gcds-container>\n`).bind({});Playground.args={size:"full",tag:"div",mainContainer:!1,padding:"300",centered:!1,border:!0,default:"<p>This is a responsive container, you can replace this text with any content or other components.</p>"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...Default.parameters?.docs?.source}}},SizeFull.parameters={...SizeFull.parameters,docs:{...SizeFull.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeFull.parameters?.docs?.source}}},SizeXl.parameters={...SizeXl.parameters,docs:{...SizeXl.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeXl.parameters?.docs?.source}}},SizeLg.parameters={...SizeLg.parameters,docs:{...SizeLg.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeLg.parameters?.docs?.source}}},SizeMd.parameters={...SizeMd.parameters,docs:{...SizeMd.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeMd.parameters?.docs?.source}}},SizeSm.parameters={...SizeSm.parameters,docs:{...SizeSm.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeSm.parameters?.docs?.source}}},SizeXs.parameters={...SizeXs.parameters,docs:{...SizeXs.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...SizeXs.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...Centered.parameters?.docs?.source}}},MainContainer.parameters={...MainContainer.parameters,docs:{...MainContainer.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...MainContainer.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:'() => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-container size="md" border margin="0">Margin 0</gcds-container>\n<gcds-container size="md" border margin="25">Margin 25</gcds-container>\n<gcds-container size="md" border margin="50">Margin 50</gcds-container>\n<gcds-container size="md" border margin="75">Margin 75</gcds-container>\n<gcds-container size="md" border margin="100">Margin 100</gcds-container>\n<gcds-container size="md" border margin="125">Margin 125</gcds-container>\n<gcds-container size="md" border margin="150">Margin 150</gcds-container>\n<gcds-container size="md" border margin="175">Margin 175</gcds-container>\n<gcds-container size="md" border margin="200">Margin 200</gcds-container>\n<gcds-container size="md" border margin="225">Margin 225</gcds-container>\n<gcds-container size="md" border margin="250">Margin 250</gcds-container>\n<gcds-container size="md" border margin="300">Margin 300</gcds-container>\n<gcds-container size="md" border margin="350">Margin 350</gcds-container>\n<gcds-container size="md" border margin="400">Margin 400</gcds-container>\n<gcds-container size="md" border margin="450">Margin 450</gcds-container>\n<gcds-container size="md" border margin="500">Margin 500</gcds-container>\n<gcds-container size="md" border margin="550">Margin 550</gcds-container>\n<gcds-container size="md" border margin="600">Margin 600</gcds-container>\n<gcds-container size="md" border margin="650">Margin 650</gcds-container>\n<gcds-container size="md" border margin="700">Margin 700</gcds-container>\n<gcds-container size="md" border margin="750">Margin 750</gcds-container>\n<gcds-container size="md" border margin="800">Margin 800</gcds-container>\n<gcds-container size="md" border margin="850">Margin 850</gcds-container>\n<gcds-container size="md" border margin="900">Margin 900</gcds-container>\n<gcds-container size="md" border margin="950">Margin 950</gcds-container>\n<gcds-container size="md" border margin="1000">Margin 1000</gcds-container>\n<gcds-container size="md" border margin="1050">Margin 1050</gcds-container>\n<gcds-container size="md" border margin="1100">Margin 1100</gcds-container>\n<gcds-container size="md" border margin="1150">Margin 1150</gcds-container>\n<gcds-container size="md" border margin="1200">Margin 1200</gcds-container>\n<gcds-container size="md" border margin="1250">Margin 1250</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer size="md" border margin="0">Margin 0</GcdsContainer>\n<GcdsContainer size="md" border margin="25">Margin 25</GcdsContainer>\n<GcdsContainer size="md" border margin="50">Margin 50</GcdsContainer>\n<GcdsContainer size="md" border margin="75">Margin 75</GcdsContainer>\n<GcdsContainer size="md" border margin="100">Margin 100</GcdsContainer>\n<GcdsContainer size="md" border margin="125">Margin 125</GcdsContainer>\n<GcdsContainer size="md" border margin="150">Margin 150</GcdsContainer>\n<GcdsContainer size="md" border margin="175">Margin 175</GcdsContainer>\n<GcdsContainer size="md" border margin="200">Margin 200</GcdsContainer>\n<GcdsContainer size="md" border margin="225">Margin 225</GcdsContainer>\n<GcdsContainer size="md" border margin="250">Margin 250</GcdsContainer>\n<GcdsContainer size="md" border margin="300">Margin 300</GcdsContainer>\n<GcdsContainer size="md" border margin="350">Margin 350</GcdsContainer>\n<GcdsContainer size="md" border margin="400">Margin 400</GcdsContainer>\n<GcdsContainer size="md" border margin="450">Margin 450</GcdsContainer>\n<GcdsContainer size="md" border margin="500">Margin 500</GcdsContainer>\n<GcdsContainer size="md" border margin="550">Margin 550</GcdsContainer>\n<GcdsContainer size="md" border margin="600">Margin 600</GcdsContainer>\n<GcdsContainer size="md" border margin="650">Margin 650</GcdsContainer>\n<GcdsContainer size="md" border margin="700">Margin 700</GcdsContainer>\n<GcdsContainer size="md" border margin="750">Margin 750</GcdsContainer>\n<GcdsContainer size="md" border margin="800">Margin 800</GcdsContainer>\n<GcdsContainer size="md" border margin="850">Margin 850</GcdsContainer>\n<GcdsContainer size="md" border margin="900">Margin 900</GcdsContainer>\n<GcdsContainer size="md" border margin="950">Margin 950</GcdsContainer>\n<GcdsContainer size="md" border margin="1000">Margin 1000</GcdsContainer>\n<GcdsContainer size="md" border margin="1050">Margin 1050</GcdsContainer>\n<GcdsContainer size="md" border margin="1100">Margin 1100</GcdsContainer>\n<GcdsContainer size="md" border margin="1150">Margin 1150</GcdsContainer>\n<GcdsContainer size="md" border margin="1200">Margin 1200</GcdsContainer>\n<GcdsContainer size="md" border margin="1250">Margin 1250</GcdsContainer>\n`.replace(/ null/g, \'\')',...Margin.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:'() => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-container size="md" border padding="0">Padding 0</gcds-container>\n<gcds-container size="md" border padding="25">Padding 25</gcds-container>\n<gcds-container size="md" border padding="50">Padding 50</gcds-container>\n<gcds-container size="md" border padding="75">Padding 75</gcds-container>\n<gcds-container size="md" border padding="100">Padding 100</gcds-container>\n<gcds-container size="md" border padding="125">Padding 125</gcds-container>\n<gcds-container size="md" border padding="150">Padding 150</gcds-container>\n<gcds-container size="md" border padding="175">Padding 175</gcds-container>\n<gcds-container size="md" border padding="200">Padding 200</gcds-container>\n<gcds-container size="md" border padding="225">Padding 225</gcds-container>\n<gcds-container size="md" border padding="250">Padding 250</gcds-container>\n<gcds-container size="md" border padding="300">Padding 300</gcds-container>\n<gcds-container size="md" border padding="350">Padding 350</gcds-container>\n<gcds-container size="md" border padding="400">Padding 400</gcds-container>\n<gcds-container size="md" border padding="450">Padding 450</gcds-container>\n<gcds-container size="md" border padding="500">Padding 500</gcds-container>\n<gcds-container size="md" border padding="550">Padding 550</gcds-container>\n<gcds-container size="md" border padding="600">Padding 600</gcds-container>\n<gcds-container size="md" border padding="650">Padding 650</gcds-container>\n<gcds-container size="md" border padding="700">Padding 700</gcds-container>\n<gcds-container size="md" border padding="750">Padding 750</gcds-container>\n<gcds-container size="md" border padding="800">Padding 800</gcds-container>\n<gcds-container size="md" border padding="850">Padding 850</gcds-container>\n<gcds-container size="md" border padding="900">Padding 900</gcds-container>\n<gcds-container size="md" border padding="950">Padding 950</gcds-container>\n<gcds-container size="md" border padding="1000">Padding 1000</gcds-container>\n<gcds-container size="md" border padding="1050">Padding 1050</gcds-container>\n<gcds-container size="md" border padding="1100">Padding 1100</gcds-container>\n<gcds-container size="md" border padding="1150">Padding 1150</gcds-container>\n<gcds-container size="md" border padding="1200">Padding 1200</gcds-container>\n<gcds-container size="md" border padding="1250">Padding 1250</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer size="md" border padding="0">Padding 0</GcdsContainer>\n<GcdsContainer size="md" border padding="25">Padding 25</GcdsContainer>\n<GcdsContainer size="md" border padding="50">Padding 50</GcdsContainer>\n<GcdsContainer size="md" border padding="75">Padding 75</GcdsContainer>\n<GcdsContainer size="md" border padding="100">Padding 100</GcdsContainer>\n<GcdsContainer size="md" border padding="125">Padding 125</GcdsContainer>\n<GcdsContainer size="md" border padding="150">Padding 150</GcdsContainer>\n<GcdsContainer size="md" border padding="175">Padding 175</GcdsContainer>\n<GcdsContainer size="md" border padding="200">Padding 200</GcdsContainer>\n<GcdsContainer size="md" border padding="225">Padding 225</GcdsContainer>\n<GcdsContainer size="md" border padding="250">Padding 250</GcdsContainer>\n<GcdsContainer size="md" border padding="300">Padding 300</GcdsContainer>\n<GcdsContainer size="md" border padding="350">Padding 350</GcdsContainer>\n<GcdsContainer size="md" border padding="400">Padding 400</GcdsContainer>\n<GcdsContainer size="md" border padding="450">Padding 450</GcdsContainer>\n<GcdsContainer size="md" border padding="500">Padding 500</GcdsContainer>\n<GcdsContainer size="md" border padding="550">Padding 550</GcdsContainer>\n<GcdsContainer size="md" border padding="600">Padding 600</GcdsContainer>\n<GcdsContainer size="md" border padding="650">Padding 650</GcdsContainer>\n<GcdsContainer size="md" border padding="700">Padding 700</GcdsContainer>\n<GcdsContainer size="md" border padding="750">Padding 750</GcdsContainer>\n<GcdsContainer size="md" border padding="800">Padding 800</GcdsContainer>\n<GcdsContainer size="md" border padding="850">Padding 850</GcdsContainer>\n<GcdsContainer size="md" border padding="900">Padding 900</GcdsContainer>\n<GcdsContainer size="md" border padding="950">Padding 950</GcdsContainer>\n<GcdsContainer size="md" border padding="1000">Padding 1000</GcdsContainer>\n<GcdsContainer size="md" border padding="1050">Padding 1050</GcdsContainer>\n<GcdsContainer size="md" border padding="1100">Padding 1100</GcdsContainer>\n<GcdsContainer size="md" border padding="1150">Padding 1150</GcdsContainer>\n<GcdsContainer size="md" border padding="1200">Padding 1200</GcdsContainer>\n<GcdsContainer size="md" border padding="1250">Padding 1250</GcdsContainer>\n`.replace(/ null/g, \'\')',...Padding.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-container ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? 'centered' : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'main-container' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</gcds-container>\n\n\x3c!-- React code --\x3e\n<GcdsContainer ${args.size != 'full' ? `size=\"${args.size}\"` : null} ${args.border ? 'border' : null} ${args.centered ? `centered` : null} ${args.tag != 'div' ? `tag=\"${args.tag}\"` : null} ${args.mainContainer ? 'mainContainer' : null} ${args.margin ? `margin=\"${args.margin}\"` : null} ${args.padding ? `padding=\"${args.padding}\"` : null}>\n  ${args.default ? args.default : null}\n</GcdsContainer>\n`.replace(/ null/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-container\n  ${args.size != \'full\' ? `size="${args.size}"` : null}\n  ${args.border ? \'border\' : null}\n  ${args.centered ? \'centered\' : null}\n  ${args.tag != \'div\' ? `tag="${args.tag}"` : null}\n  ${args.mainContainer ? `main-container="${args.mainContainer}"` : null}\n  ${args.margin ? `margin="${args.margin}"` : null}\n  ${args.padding ? `padding="${args.padding}"` : null}\n>\n  ${args.default ? args.default : null}\n</gcds-container>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SizeFull","SizeXl","SizeLg","SizeMd","SizeSm","SizeXs","Centered","MainContainer","Margin","Padding","Props","Playground"]}}]);