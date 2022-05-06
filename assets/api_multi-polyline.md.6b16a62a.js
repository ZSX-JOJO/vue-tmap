import{r as n,o as s,c as a,a as t,b as p,d as o}from"./app.3f175021.js";const e='{"title":"折线","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础示例","slug":"基础示例"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"props","slug":"props-1"}],"relativePath":"api/multi-polyline.md","lastUpdated":1651734378545}',c={},l=t("h1",{id:"折线"},[t("a",{class:"header-anchor",href:"#折线","aria-hidden":"true"},"#"),p(" 折线")],-1),u=t("h2",{id:"基础示例"},[t("a",{class:"header-anchor",href:"#基础示例","aria-hidden":"true"},"#"),p(" 基础示例")],-1),k={style:{height:"400px"}},i=o('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-map</span> <span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-multi-polyline</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:geometries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>geometries<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>改变颜色：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setColor(<span class="token punctuation">&#39;</span>#00FF00<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setColor(<span class="token punctuation">&#39;</span>#00FFFF<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tmap-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;multi-polyline-demo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> geometries <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        id<span class="token operator">:</span> <span class="token string">&#39;pl_1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 折线唯一标识，删除时使用</span>\n        styleId<span class="token operator">:</span> <span class="token string">&#39;styleBlue&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 绑定样式名</span>\n        paths<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.03854</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.272389</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.038844</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.27521</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041407</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.274738</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        id<span class="token operator">:</span> <span class="token string">&#39;pl_2&#39;</span><span class="token punctuation">,</span>\n        styleId<span class="token operator">:</span> <span class="token string">&#39;styleRed&#39;</span><span class="token punctuation">,</span>\n        paths<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.039492</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.271893</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041562</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.271421</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token number">40.041957</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">116.274211</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      styleBlue<span class="token operator">:</span> <span class="token punctuation">{</span>\n        color<span class="token operator">:</span> <span class="token string">&#39;#3777FF&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 线填充色</span>\n        width<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 折线宽度</span>\n        lineCap<span class="token operator">:</span> <span class="token string">&#39;butt&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 线端头方式</span>\n        dashArray<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 虚线展示方式</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      styleRed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        color<span class="token operator">:</span> <span class="token string">&#39;#CC0000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 线填充色</span>\n        width<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 折线宽度</span>\n        borderWidth<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 边线宽度</span>\n        borderColor<span class="token operator">:</span> <span class="token string">&#39;#CCC&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 边线颜色</span>\n        lineCap<span class="token operator">:</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 线端头方式</span>\n        showArrow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      id<span class="token operator">:</span> <span class="token string">&#39;polyline-layer&#39;</span><span class="token punctuation">,</span>\n      styles<span class="token punctuation">,</span>\n      geometries<span class="token punctuation">,</span>\n      <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        styles<span class="token punctuation">.</span>value<span class="token punctuation">.</span>styleBlue<span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>\n        styles<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>styles<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.color</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 1001<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.green</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.blue</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #00ffff<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><p>官网 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector</a></p><h2 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> props</h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>图层id</td></tr><tr><td>zIndex</td><td>Number</td><td>图层绘制顺序</td></tr><tr><td>styles</td><td>{ [key: string]: TMap.PolylineStyleOptions }</td><td>折线v的相关样式</td></tr><tr><td>geometries</td><td>TMap.PolylineGeometry[]</td><td>折线数据数组</td></tr></tbody></table><p>详细文档见官网 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector</a></p>',6);c.render=function(p,o,e,c,r,g){const d=n("DemoMultiPolyline");return s(),a("div",null,[l,u,t("div",k,[t(d)]),i])};export default c;export{e as __pageData};