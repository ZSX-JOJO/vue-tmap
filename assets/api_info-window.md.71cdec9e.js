import{r as n,o as s,c as a,a as t,b as p,d as o}from"./app.3f175021.js";const c='{"title":"信息窗体","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础示例","slug":"基础示例"},{"level":2,"title":"props","slug":"props"}],"relativePath":"api/info-window.md","lastUpdated":1651734378544}',e={},u=t("h1",{id:"信息窗体"},[t("a",{class:"header-anchor",href:"#信息窗体","aria-hidden":"true"},"#"),p(" 信息窗体")],-1),l=t("h2",{id:"基础示例"},[t("a",{class:"header-anchor",href:"#基础示例","aria-hidden":"true"},"#"),p(" 基础示例")],-1),k={style:{height:"400px"}},i=o('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-map</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-multi-circle</span>\n      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.styles<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:geometries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.geometries<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-info-window</span>\n      <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>position<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index + JSON.stringify(position)<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@close-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClose<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>改变位置：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>change position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tmap-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> paths <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.272305</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.039419</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.272721</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.039764</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.274824</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041374</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.274491</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">CIRCLE_DATA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token string">&#39;circle-layer&#39;</span><span class="token punctuation">,</span>\n  styles<span class="token operator">:</span> <span class="token punctuation">{</span>\n    circle<span class="token operator">:</span> <span class="token punctuation">{</span>\n      color<span class="token operator">:</span> <span class="token string">&#39;rgba(41,91,255,0.16)&#39;</span><span class="token punctuation">,</span>\n      showBorder<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      borderColor<span class="token operator">:</span> <span class="token string">&#39;rgba(41,91,255,1)&#39;</span><span class="token punctuation">,</span>\n      borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  geometries<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      id<span class="token operator">:</span> <span class="token string">&#39;222&#39;</span><span class="token punctuation">,</span>\n      styleId<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>\n      center<span class="token operator">:</span> <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.272303</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      radius<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;multi-circle-info-window&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      circleData<span class="token operator">:</span> <span class="token constant">CIRCLE_DATA</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.272305</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      index<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>index<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n      position<span class="token punctuation">.</span>value <span class="token operator">=</span> paths<span class="token punctuation">[</span>index<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>state<span class="token punctuation">,</span>\n      onChange<span class="token punctuation">,</span>\n      show<span class="token punctuation">,</span>\n      onClose<span class="token punctuation">,</span>\n      hide<span class="token punctuation">,</span>\n      index<span class="token punctuation">,</span>\n      visible<span class="token punctuation">,</span>\n      position<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.color</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 1001<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.green</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.blue</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #00ffff<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>图层 id</td></tr><tr><td>visible</td><td>Boolean</td><td>是否显示</td></tr><tr><td>position</td><td>{ [key: string]: TMap.LatLngData }</td><td>地理位置</td></tr><tr><td>content</td><td>String</td><td>提示文本</td></tr><tr><td>zIndex</td><td>Number</td><td>显示层级</td></tr><tr><td>offset</td><td>Object</td><td>偏移量（默认：{ x: 0, y: 0 }）</td></tr></tbody></table><p>详细文档见官网 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo</a></p>',4);e.render=function(p,o,c,e,r,d){const g=n("DemoInfoWindow");return s(),a("div",null,[u,l,t("div",k,[t(g)]),i])};export default e;export{c as __pageData};
