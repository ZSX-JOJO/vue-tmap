import{_ as t,c as p,a as n,b as o,d as s,e,r as c,o as l}from"./app.aec0a7fb.js";const _='{"title":"\u4FE1\u606F\u7A97\u4F53","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u793A\u4F8B","slug":"\u57FA\u7840\u793A\u4F8B"},{"level":2,"title":"props","slug":"props"}],"relativePath":"api/info-window.md"}',u={},k=n("h1",{id:"\u4FE1\u606F\u7A97\u4F53",tabindex:"-1"},[s("\u4FE1\u606F\u7A97\u4F53 "),n("a",{class:"header-anchor",href:"#\u4FE1\u606F\u7A97\u4F53","aria-hidden":"true"},"#")],-1),r=n("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[s("\u57FA\u7840\u793A\u4F8B "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#")],-1),i={style:{height:"400px"}},d=e(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-map</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-multi-circle</span>
      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.styles<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:geometries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circleData.geometries<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-info-window</span>
      <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>position<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index + JSON.stringify(position)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@close-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClose<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u6539\u53D8\u4F4D\u7F6E\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>change position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tmap-map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> paths <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272305</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.039419</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272721</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.039764</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.274824</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041374</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.274491</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">CIRCLE_DATA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;circle-layer&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">circle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(41,91,255,0.16)&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showBorder</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(41,91,255,1)&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">geometries</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;222&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">styleId</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272303</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;multi-circle-info-window&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">circleData</span><span class="token operator">:</span> <span class="token constant">CIRCLE_DATA</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272305</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      index<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      position<span class="token punctuation">.</span>value <span class="token operator">=</span> paths<span class="token punctuation">[</span>index<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>state<span class="token punctuation">,</span>
      onChange<span class="token punctuation">,</span>
      show<span class="token punctuation">,</span>
      onClose<span class="token punctuation">,</span>
      hide<span class="token punctuation">,</span>
      index<span class="token punctuation">,</span>
      visible<span class="token punctuation">,</span>
      position<span class="token punctuation">,</span>
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
</code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>\u56FE\u5C42 id</td></tr><tr><td>visible</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>position</td><td><code>{ [key: string]: TMap.LatLngData }</code></td><td>\u5730\u7406\u4F4D\u7F6E</td></tr><tr><td>content</td><td>String</td><td>\u63D0\u793A\u6587\u672C</td></tr><tr><td>zIndex</td><td>Number</td><td>\u663E\u793A\u5C42\u7EA7</td></tr><tr><td>offset</td><td>Object</td><td>\u504F\u79FB\u91CF\uFF08\u9ED8\u8BA4\uFF1A{ x: 0, y: 0 }\uFF09</td></tr></tbody></table><p>\u8BE6\u7EC6\u6587\u6863\u89C1\u5B98\u7F51 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo</a></p>`,4);function g(y,m,h,b,f,v){const a=c("DemoInfoWindow");return l(),p("div",null,[k,r,n("div",i,[o(a)]),d])}var w=t(u,[["render",g]]);export{_ as __pageData,w as default};
