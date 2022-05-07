import{_ as t,c as p,a as n,b as o,d as a,e,r as c,o as l}from"./app.aec0a7fb.js";const v='{"title":"\u70B9\u805A\u5408","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u793A\u4F8B","slug":"\u57FA\u7840\u793A\u4F8B"},{"level":2,"title":"props","slug":"props"}],"relativePath":"api/marker-cluster.md"}',u={},r=n("h1",{id:"\u70B9\u805A\u5408",tabindex:"-1"},[a("\u70B9\u805A\u5408 "),n("a",{class:"header-anchor",href:"#\u70B9\u805A\u5408","aria-hidden":"true"},"#")],-1),k=n("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[a("\u57FA\u7840\u793A\u4F8B "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#")],-1),i={style:{height:"400px"}},d=e(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-map</span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:pitch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-marker-cluster</span>
      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:enableDefaultStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>enableDefaultStyle<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:minimumClusterSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minimumClusterSize<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:geometries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>geometries<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:zoomOnClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoomOnClick<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:gridSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gridSize<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:averageCenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>averageCenter<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:maxZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maxZoom<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tmap-map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;marker-cluster-demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> geometries <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.953416</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.480945</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.984104</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.407503</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.908802</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.497502</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.040417</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.373514</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.953416</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.380945</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.984104</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.307503</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.908802</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.397502</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.040417</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.273514</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enableDefaultStyle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u9ED8\u8BA4\u6837\u5F0F</span>
      <span class="token literal-property property">minimumClusterSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u5F62\u6210\u805A\u5408\u7C07\u7684\u6700\u5C0F\u4E2A\u6570</span>
      geometries<span class="token punctuation">,</span>
      <span class="token literal-property property">zoomOnClick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u70B9\u51FB\u7C07\u65F6\u653E\u5927\u81F3\u7C07\u5185\u70B9\u5206\u79BB</span>
      <span class="token literal-property property">gridSize</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// \u805A\u5408\u7B97\u6CD5\u7684\u53EF\u805A\u5408\u8DDD\u79BB</span>
      <span class="token literal-property property">averageCenter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6BCF\u4E2A\u805A\u548C\u7C07\u7684\u4E2D\u5FC3\u662F\u5426\u5E94\u8BE5\u662F\u805A\u7C7B\u4E2D\u6240\u6709\u6807\u8BB0\u7684\u5E73\u5747\u503C</span>
      <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u91C7\u7528\u805A\u5408\u7B56\u7565\u7684\u6700\u5927\u7F29\u653E\u7EA7\u522B</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.color</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1001<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.green</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.blue</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #00ffff<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>\u56FE\u5C42id</td></tr><tr><td>enableDefaultStyle</td><td>Boolean</td><td>\u662F\u5426\u542F\u7528\u9ED8\u8BA4\u7684\u805A\u5408\u6837\u5F0F</td></tr><tr><td>minimumClusterSize</td><td>Number</td><td>\u5F62\u6210\u805A\u5408\u7C07\u7684\u6700\u5C0F\u4E2A\u6570</td></tr><tr><td>zoomOnClick</td><td>Boolean</td><td>\u70B9\u51FB\u5DF2\u7ECF\u805A\u5408\u7684\u6807\u8BB0\u70B9\u65F6\u662F\u5426\u5B9E\u73B0\u805A\u5408\u5206\u79BB</td></tr><tr><td>gridSize</td><td>Number</td><td>\u805A\u5408\u7B97\u6CD5\u7684\u53EF\u805A\u5408\u8DDD\u79BB</td></tr><tr><td>averageCenter</td><td>Boolean</td><td>\u6BCF\u4E2A\u805A\u548C\u7C07\u7684\u4E2D\u5FC3\u662F\u5426\u5E94\u8BE5\u662F\u805A\u7C7B\u4E2D\u6240\u6709\u6807\u8BB0\u7684\u5E73\u5747\u503C,\u9ED8\u8BA4\u4E3Afalse</td></tr><tr><td>maxZoom</td><td>Number</td><td>\u91C7\u7528\u805A\u5408\u7B56\u7565\u7684\u6700\u5927\u7F29\u653E\u7EA7\u522B</td></tr><tr><td>geometries</td><td>TMap.PointGeometry[]</td><td>\u6807\u6CE8\u70B9\u6570\u636E\u6570\u7EC4</td></tr></tbody></table><p>\u8BE6\u7EC6\u6587\u6863\u89C1\u5B98\u7F51 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster</a></p>`,4);function m(y,g,b,h,q,_){const s=c("DemoMarkerCluster");return l(),p("div",null,[r,k,n("div",i,[o(s)]),d])}var C=t(u,[["render",m]]);export{v as __pageData,C as default};
