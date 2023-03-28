import{d as v,f as y,c as i,C as o,z as f,x as a,N as b,D,o as u,L as m,M as C,a as t,_ as A}from"./chunks/framework.84831fd2.js";const p=r=>(m("data-v-1fb8fe84"),r=r(),C(),r),h=b('<h1 id="input-number-数字输入框" tabindex="-1" data-v-1fb8fe84>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-1fb8fe84>​</a></h1><p data-v-1fb8fe84>这个文本框只能输入数字哦</p><ul data-v-1fb8fe84><li data-v-1fb8fe84><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-1fb8fe84>源代码</a></li><li data-v-1fb8fe84><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-1fb8fe84>文档编辑</a></li></ul><div class="danger custom-block" data-v-1fb8fe84><p class="custom-block-title" data-v-1fb8fe84>DANGER</p><p data-v-1fb8fe84>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-1fb8fe84>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-1fb8fe84>​</a></h2><p data-v-1fb8fe84>使用 <code data-v-1fb8fe84>v-model</code> 绑定一个值，<code data-v-1fb8fe84>model</code> 可配置不同的模式</p>',6),E=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#F78C6C"}},"3"),a("span",{style:{color:"#A6ACCD"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"})])])],-1)),g=p(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[t("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),_=p(()=>a("p",null,[a("code",null,"size"),t(" 属性可配置不同尺寸")],-1)),V=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value2 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#F78C6C"}},"16"),a("span",{style:{color:"#A6ACCD"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"})])])],-1)),k=b(`<h2 id="attributes" tabindex="-1" data-v-1fb8fe84>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-1fb8fe84>​</a></h2><div class="vp-table__container" data-v-1fb8fe84><table data-v-1fb8fe84><thead data-v-1fb8fe84><tr data-v-1fb8fe84><th data-v-1fb8fe84>参数</th><th data-v-1fb8fe84>说明</th><th data-v-1fb8fe84>类型</th><th data-v-1fb8fe84>可选值</th><th data-v-1fb8fe84>默认值</th></tr></thead><tbody data-v-1fb8fe84><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>v-model</code></td><td data-v-1fb8fe84>绑定值</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>1</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>model</code></td><td data-v-1fb8fe84>不同模式</td><td data-v-1fb8fe84><a href="#inputnumbermodel" data-v-1fb8fe84>InputNumberModel</a></td><td data-v-1fb8fe84><code data-v-1fb8fe84>default</code> <code data-v-1fb8fe84>button</code> <code data-v-1fb8fe84>switch</code></td><td data-v-1fb8fe84>default</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>precision</code></td><td data-v-1fb8fe84>数值精度</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>0</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>step</code></td><td data-v-1fb8fe84>步长</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>1</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>size</code></td><td data-v-1fb8fe84>尺寸</td><td data-v-1fb8fe84><a href="/components/interface.html#fightingsize" data-v-1fb8fe84>FightingSize</a></td><td data-v-1fb8fe84><code data-v-1fb8fe84>large</code> <code data-v-1fb8fe84>middle</code> <code data-v-1fb8fe84>small</code> <code data-v-1fb8fe84>mini</code></td><td data-v-1fb8fe84>middle</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>button-type</code></td><td data-v-1fb8fe84>按钮的类型</td><td data-v-1fb8fe84><a href="/components/interface.html#fightingtype" data-v-1fb8fe84>FightingType</a></td><td data-v-1fb8fe84><code data-v-1fb8fe84>default</code> <code data-v-1fb8fe84>primary</code> <code data-v-1fb8fe84>success</code> <code data-v-1fb8fe84>danger</code> <code data-v-1fb8fe84>warning</code></td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>disabled</code></td><td data-v-1fb8fe84>是否禁用</td><td data-v-1fb8fe84>boolean</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>false</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>max</code></td><td data-v-1fb8fe84>最大值</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>min</code></td><td data-v-1fb8fe84>最小值</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>max-length</code></td><td data-v-1fb8fe84>最大输入长度</td><td data-v-1fb8fe84>number</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>autofocus</code></td><td data-v-1fb8fe84>是否自动聚焦</td><td data-v-1fb8fe84>boolean</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>false</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>name</code></td><td data-v-1fb8fe84>原生 name 属性</td><td data-v-1fb8fe84>string</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>f-input-number</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>placeholder</code></td><td data-v-1fb8fe84>占位符</td><td data-v-1fb8fe84>string</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>clear</code></td><td data-v-1fb8fe84>是否可清空</td><td data-v-1fb8fe84>boolean</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>false</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>readonly</code></td><td data-v-1fb8fe84>是否只读</td><td data-v-1fb8fe84>boolean</td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>false</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>on-blur</code></td><td data-v-1fb8fe84>失去焦点触发的回调</td><td data-v-1fb8fe84><a href="/components/interface.html#handleevent" data-v-1fb8fe84>HandleEvent</a></td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>on-focus</code></td><td data-v-1fb8fe84>获取焦点触发的回调</td><td data-v-1fb8fe84><a href="/components/interface.html#handleevent" data-v-1fb8fe84>HandleEvent</a></td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>on-input</code></td><td data-v-1fb8fe84>原生 input 事件回调</td><td data-v-1fb8fe84><a href="/components/interface.html#handleevent" data-v-1fb8fe84>HandleEvent</a></td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr><tr data-v-1fb8fe84><td data-v-1fb8fe84><code data-v-1fb8fe84>on-change</code></td><td data-v-1fb8fe84>绑定值发生变化时触发的回调</td><td data-v-1fb8fe84><a href="/components/interface.html#inputchange" data-v-1fb8fe84>InputChange</a></td><td data-v-1fb8fe84>——</td><td data-v-1fb8fe84>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-1fb8fe84>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-1fb8fe84>​</a></h2><p data-v-1fb8fe84>组件导出以下类型定义：</p><div class="language-ts" data-v-1fb8fe84><button title="Copy Code" class="copy" data-v-1fb8fe84></button><span class="lang" data-v-1fb8fe84>ts</span><pre class="shiki material-theme-palenight" data-v-1fb8fe84><code data-v-1fb8fe84><span class="line" data-v-1fb8fe84><span style="color:#89DDFF;font-style:italic;" data-v-1fb8fe84>import</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;font-style:italic;" data-v-1fb8fe84>type</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>{</span></span>
<span class="line" data-v-1fb8fe84><span style="color:#F07178;" data-v-1fb8fe84>  </span><span style="color:#A6ACCD;" data-v-1fb8fe84>InputNumberInstance</span><span style="color:#89DDFF;" data-v-1fb8fe84>,</span></span>
<span class="line" data-v-1fb8fe84><span style="color:#F07178;" data-v-1fb8fe84>  </span><span style="color:#A6ACCD;" data-v-1fb8fe84>InputNumberProps</span><span style="color:#89DDFF;" data-v-1fb8fe84>,</span></span>
<span class="line" data-v-1fb8fe84><span style="color:#F07178;" data-v-1fb8fe84>  </span><span style="color:#A6ACCD;" data-v-1fb8fe84>InputNumberModel</span></span>
<span class="line" data-v-1fb8fe84><span style="color:#89DDFF;" data-v-1fb8fe84>}</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;font-style:italic;" data-v-1fb8fe84>from</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#C3E88D;" data-v-1fb8fe84>@wu-web/fighting-design</span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span></span>
<span class="line" data-v-1fb8fe84></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-1fb8fe84>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-1fb8fe84>​</a></h3><div class="language-ts" data-v-1fb8fe84><button title="Copy Code" class="copy" data-v-1fb8fe84></button><span class="lang" data-v-1fb8fe84>ts</span><pre class="shiki material-theme-palenight" data-v-1fb8fe84><code data-v-1fb8fe84><span class="line" data-v-1fb8fe84><span style="color:#C792EA;" data-v-1fb8fe84>type</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#FFCB6B;" data-v-1fb8fe84>InputNumberModel</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>=</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#C3E88D;" data-v-1fb8fe84>default</span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>|</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#C3E88D;" data-v-1fb8fe84>button</span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>|</span><span style="color:#A6ACCD;" data-v-1fb8fe84> </span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span><span style="color:#C3E88D;" data-v-1fb8fe84>switch</span><span style="color:#89DDFF;" data-v-1fb8fe84>&#39;</span></span>
<span class="line" data-v-1fb8fe84></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-1fb8fe84>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-1fb8fe84>​</a></h2>`,8),z={href:"https://github.com/Tyh2001",target:"_blank"},N={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},P=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","lastUpdated":1679936384000}'),w={name:"components/input-number.md"},x=v({...w,setup(r){const d=y(3),s=y(16);return(q,e)=>{const n=D("f-input-number"),F=D("vp-demo"),c=D("f-avatar");return u(),i("div",null,[h,o(F,{source:""},{source:f(()=>[o(n,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l)},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l),model:"switch"},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),model:"button"},null,8,["modelValue"])]),default:f(()=>[E]),_:1}),g,_,o(F,{source:""},{source:f(()=>[o(n,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),model:"switch",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value=l),model:"switch",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),model:"switch",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l),model:"switch",size:"mini"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=l=>s.value=l),model:"button",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=l=>s.value=l),model:"button",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value=l),model:"button",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[10]||(e[10]=l=>s.value=l),model:"button",size:"mini"},null,8,["modelValue"])]),default:f(()=>[V]),_:1}),k,a("a",z,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",N,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const M=A(x,[["__scopeId","data-v-1fb8fe84"]]);export{P as __pageData,M as default};
