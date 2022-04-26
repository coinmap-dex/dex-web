(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"1yQO":function(e,i,o){"use strict";o.d(i,"a",(function(){return r}));var t=o("hY0g"),n=o.n(t);function r(e,i,o,t=null){const r={id:i,title:o,definitions:new n.a(e)};return null!==t&&(r.icon=t),r}},Equz:function(e,i,o){"use strict";o.d(i,"a",(function(){return W}));var t=o("Eyy1"),n=o("HSjo"),r=o("n5al"),l=o("hY0g"),s=o.n(l),c=o("Kxc7"),a=o("Z5lT"),d=o("25b6");const h=window.t("Color Bars Based on Previous Close"),u=window.t("HLC Bars"),b=window.t("Up Color"),p=window.t("Down Color"),w=window.t("Thin Bars"),C=window.t("Body"),y=window.t("Borders"),j=window.t("Wick"),O=window.t("Price Source"),S=window.t("Type"),g=window.t("Line"),f=window.t("Top Line"),v=window.t("Bottom Line"),m=window.t("Fill"),P=window.t("Fill Top Area"),_=window.t("Fill Bottom Area"),B=window.t("Up bars"),L=window.t("Down bars"),k=window.t("Projection up bars"),M=window.t("Projection down bars"),$=(window.t("Show real prices on price scale (instead of Heikin-Ashi price)"),window.t("Base Level")),D=window.t("Body"),T=window.t("Borders"),A=window.t("Labels");function E(e,i,o,t){const r=Object(d.c)(o);return[Object(n.s)({checked:Object(n.b)(e,i.drawBody,`Change ${o} Body Visibility`),color1:Object(n.v)(e,i.upColor,null,`Change ${o} Up Color`),color2:Object(n.v)(e,i.downColor,null,`Change ${o} Down Color`)},{id:`${t}Symbol${r}CandlesColor`,title:C}),Object(n.s)({checked:Object(n.b)(e,i.drawBorder,`Change ${o} Border Visibility`),color1:Object(n.v)(e,i.borderUpColor,null,`Change ${o} Up Border Color`),color2:Object(n.v)(e,i.borderDownColor,null,`Change ${o} Down Border Color`)},{id:`${t}Symbol${r}BordersColor`,title:y}),Object(n.s)({checked:Object(n.b)(e,i.drawWick,`Change ${o} Wick Visibility`),color1:Object(n.v)(e,i.wickUpColor,null,`Change ${o} Wick Up Color`),color2:Object(n.v)(e,i.wickDownColor,null,`Change ${o} Wick Down Color`)},{id:`${t}Symbol${r}WickColors`,title:j})]}function I(e,i,o,t){const r=[];{const l=Object(d.c)(o),s=Object(n.e)({color:Object(n.v)(e,i.upColor,null,`Change ${o} Up Color`)},{id:`${t}Symbol${l}UpBars`,title:B}),c=Object(n.e)({color:Object(n.v)(e,i.downColor,null,`Change ${o} Down Color`)},{id:`${t}Symbol${l}DownBars`,title:L}),a=Object(n.e)({color:Object(n.v)(e,i.upColorProjection,null,`Change ${o} Projection Bar Up Color`)},{id:`${t}Symbol${l}ProjectionUpBars`,title:k}),h=Object(n.e)({color:Object(n.v)(e,i.downColorProjection,null,`Change ${o} Projection Bar Down Color`)},{id:`${t}Symbol${l}ProjectionDownBars`,title:M});r.push(s,c,a,h)}return r}function U(e,i,o,t){const r=[];{const l=Object(d.c)(o),s=Object(n.s)({color1:Object(n.v)(e,i.upColor,null,`Change ${o} Up Color`),color2:Object(n.v)(e,i.borderUpColor,null,`Change ${o} Border Bar Up Color`)},{id:`${t}Symbol${l}UpBars`,title:B}),c=Object(n.s)({color1:Object(n.v)(e,i.downColor,null,`Change ${o} Down Color`),color2:Object(n.v)(e,i.borderDownColor,null,`Change ${o} Border Bar Down Color`)},{id:`${t}Symbol${l}DownBars`,title:L}),a=Object(n.s)({
color1:Object(n.v)(e,i.upColorProjection,null,`Change ${o} Projection Bar Up Color`),color2:Object(n.v)(e,i.borderUpColorProjection,null,`Change ${o} Projection Border Bar Up Color`)},{id:`${t}Symbol${l}ProjectionUpBars`,title:k}),h=Object(n.s)({color1:Object(n.v)(e,i.downColorProjection,null,`Change ${o} Projection Bar Down Color`),color2:Object(n.v)(e,i.borderDownColorProjection,null,`Change ${o} Projection Border Bar Up Color`)},{id:`${t}Symbol${l}ProjectionDownBars`,title:M});r.push(s,c,a,h)}return r}function W(e,i,o,l,d){switch(o){case 0:return function(e,i,o){return[Object(n.c)({checked:Object(n.b)(e,i.barColorsOnPrevClose,"Change Color Bars Based on Previous Close")},{id:o+"SymbolBarStyleBarColorsOnPrevClose",title:h}),Object(n.c)({checked:Object(n.b)(e,i.dontDrawOpen,"Change HLC Bars")},{id:o+"SymbolDontDrawOpen",title:u}),Object(n.e)({color:Object(n.v)(e,i.upColor,null,"Change Bar Up Color")},{id:o+"SymbolUpColor",title:b}),Object(n.e)({color:Object(n.v)(e,i.downColor,null,"Change Bar Down Color")},{id:o+"SymbolDownColor",title:p}),Object(n.c)({checked:Object(n.b)(e,i.thinBars,"Change Thin Bars")},{id:o+"SymbolBarThinBars",title:w})]}(e,i.barStyle.childs(),d);case 1:return function(e,i,o){return[Object(n.c)({checked:Object(n.b)(e,i.barColorsOnPrevClose,"Change Color Bars Based on Previous Close")},{id:o+"SymbolCandleStyleBarColorsOnPrevClose",title:h}),...E(e,i,"Candle",o)]}(e,i.candleStyle.childs(),d);case 2:return function(e,i,o,t,r){return[Object(n.k)({option:Object(n.b)(e,i.priceSource,"Change Price Source")},{id:r+"SymbolLinePriceSource",title:O,options:new s.a(o)}),Object(n.k)({option:Object(n.b)(e,i.styleType,"Change Line Type")},{id:r+"SymbolStyleType",title:S,options:new s.a(t)}),Object(n.i)({color:Object(n.v)(e,i.color,null,"Change Line Color"),width:Object(n.b)(e,i.linewidth,"Change Line Width")},{id:r+"SymbolLineStyle",title:g})]}(e,i.lineStyle.childs(),l.seriesPriceSources,l.lineStyleTypes,d);case 3:return function(e,i,o,t){return[Object(n.k)({option:Object(n.b)(e,i.priceSource,"Change Area Price Source")},{id:t+"SymbolAreaPriceSource",title:O,options:new s.a(o)}),Object(n.i)({color:Object(n.v)(e,i.linecolor,null,"Change Area Line Color"),width:Object(n.b)(e,i.linewidth,"Change Area Line Width")},{id:t+"SymbolAreaLineStyle",title:g}),Object(n.s)({color1:Object(n.v)(e,i.color1,i.transparency,"Change Area Fill Color"),color2:Object(n.v)(e,i.color2,i.transparency,"Change Area Fill Color")},{id:t+"SymbolAreaFills",title:m})]}(e,i.areaStyle.childs(),l.seriesPriceSources,d);case 9:return E(e,i.hollowCandleStyle.childs(),"Hollow Candles",d);case 10:return function(e,i,o,t){return[Object(n.k)({option:Object(n.b)(e,i.priceSource,"Change Baseline Price Source")},{id:t+"SymbolBaseLinePriceSource",title:O,options:new s.a(o)}),Object(n.i)({color:Object(n.v)(e,i.topLineColor,null,"Change Baseline Top Line Color"),width:Object(n.b)(e,i.topLineWidth,"Change Baseline Top Line Width")},{id:t+"SymbolBaseLineTopLine",title:f}),Object(n.i)({
color:Object(n.v)(e,i.bottomLineColor,null,"Change Baseline Bottom Line Color"),width:Object(n.b)(e,i.bottomLineWidth,"Change Baseline Bottom Line Width")},{id:t+"SymbolBaseLineBottomLine",title:v}),Object(n.s)({color1:Object(n.v)(e,i.topFillColor1,null,"Change Baseline Fill Top Area Color"),color2:Object(n.v)(e,i.topFillColor2,null,"Change Baseline Fill Top Area Color")},{id:t+"SymbolBaseLineTopFills",title:P}),Object(n.s)({color1:Object(n.v)(e,i.bottomFillColor1,null,"Change Baseline Fill Bottom Area Color"),color2:Object(n.v)(e,i.bottomFillColor2,null,"Change Baseline Fill Bottom Area Color")},{id:t+"SymbolBaseLineBottomFills",title:_}),Object(n.j)({value:Object(n.b)(e,i.baseLevelPercentage,"Change Base Level",[a.b])},{id:t+"SymbolBaseLevelPercentage",title:$,type:0,min:new s.a(0),max:new s.a(100),step:new s.a(1),unit:new s.a("%")})]}(e,i.baselineStyle.childs(),l.seriesPriceSources,d)}if(!i.hasOwnProperty("haStyle"))return[];if(l.isJapaneseChartsAvailable&&8===o){return function(e,i,o){const t=[];return t.push(Object(n.c)({checked:Object(n.b)(e,i.barColorsOnPrevClose,"Change Color Bars Based on Previous Close")},{id:o+"SymbolHAStyleBarColorsOnPrevClose",title:h}),...E(e,i,"Heikin Ashi",o)),t}(e,i.haStyle.childs(),d)}if(l.isJapaneseChartsAvailable&&c.enabled("japanese_chart_styles")){if(4===o||5===o||6===o||7===o||8===o)switch(o){case 4:return function(e,i,o){return[...U(e,i,"Renko",o)]}(e,i.renkoStyle.childs(),d);case 5:return I(e,i.kagiStyle.childs(),"Kagi",d);case 6:return I(e,i.pnfStyle.childs(),"Point & Figure",d);case 7:return U(e,i.pbStyle.childs(),"Line Break",d)}0}if(c.enabled("chart_style_hilo")&&12===o){const o=i.hiloStyle.childs(),s=Object(r.chartStyleStudyId)(12);return function(e,i,o,t){const r=Object(n.e)({checked:Object(n.b)(e,i.drawBody,"Change High-Low Body Visibility"),color:Object(n.v)(e,i.color,null,"Change High-Low Body Color")},{id:t+"SymbolBodiesColor",title:D}),l=Object(n.e)({checked:Object(n.b)(e,i.showBorders,"Change Show High-Low Borders"),color:Object(n.v)(e,i.borderColor,null,"Change High-Low Border Color")},{id:t+"SymbolBorderColor",title:T}),s=o.map(e=>({title:String(e),value:e}));return[r,l,Object(n.q)({checked:Object(n.b)(e,i.showLabels,"Change Show High-Low Labels"),color:Object(n.v)(e,i.labelColor,null,"Change High-Low Labels Color"),size:Object(n.b)(e,i.fontSize,"Change High-Low Labels Font Size")},{id:t+"SymbolLabels",title:A,isEditable:!1,isMultiLine:!1,sizeItems:s})]}(e,o,Object(t.ensure)(l.defaultSeriesFontSizes)[s],d)}return[]}},Z5lT:function(e,i,o){"use strict";o.d(i,"b",(function(){return n})),o.d(i,"a",(function(){return r})),o.d(i,"c",(function(){return l}));var t=o("T6Of");function n(e){return Math.floor(e)}function r(e){return parseInt(String(e))}function l(e){const i=new t.LimitedPrecisionNumericFormatter(e);return e=>{if(null===e)return e;const o=i.parse(i.format(e));return o.res?o.value:null}}},zqjM:function(e,i,o){"use strict";var t=o("Eyy1"),n=o("HSjo"),r=o("hY0g"),l=o.n(r),s=o("n5al"),c=o("dfhE"),a=o("Equz"),d=o("Z5lT");function h(e){return e.map(e=>({value:e,
title:window.t(e)}))}function u(e,i,o,r,c,a,u){const b=[];return o.forEach(o=>{if(!function(e,i){return!e.isHidden&&(void 0===e.visible||function(e,i){if(!e)return!0;const o=e.split("==");return!(o.length<2)&&i[o[0]].value()===o[1]}(e.visible,i))}(o,r))return;const p=o.id;if(!r.hasOwnProperty(p))return;const w=r[p],C=function(e,i){return"style"===e.id?window.t("Box size assignment method"):"boxSize"===e.id?window.t("Box Size"):window.t(i.childs().name.value())}(o,c[p]);if("options"in o){const i=Object(t.ensure)(o.options);b.push(Object(n.k)({option:Object(n.b)(e,w,"Change "+C)},{id:`${u}${o.name}`,title:C,options:new l.a(h(i))}))}else if("integer"!==o.type){if("float"===o.type){let t;return t=function(e,i){return!((i===Object(s.chartStyleStudyId)(4)||i===Object(s.chartStyleStudyId)(6))&&"boxSize"===e||i===Object(s.chartStyleStudyId)(5)&&"reversalAmount"===e)}(p,i)||null===a.value()?new l.a(o.min):a,void b.push(Object(n.j)({value:Object(n.b)(e,w,"Change "+C)},{id:`${u}${o.name}`,title:C,type:1,min:t,max:new l.a(o.max),defval:o.defval}))}"text"!==o.type?"bool"!==o.type||b.push(Object(n.c)({checked:Object(n.b)(e,w,"Change "+C)},{id:`${u}${o.name}`,title:C})):b.push(Object(n.q)({text:Object(n.b)(e,w,"Change "+C)},{id:`${u}${o.name}`,title:C,isEditable:!0,isMultiLine:!1}))}else b.push(Object(n.j)({value:Object(n.b)(e,w,"Change "+C,[d.b])},{id:`${u}${o.name}`,title:C,type:0,min:new l.a(o.min),max:new l.a(o.max),defval:o.defval}))}),b}var b=o("txPx"),p=o("Cf1E");o.d(i,"b",(function(){return U})),o.d(i,"c",(function(){return W})),o.d(i,"d",(function(){return H})),o.d(i,"a",(function(){return F}));const w=Object(b.getLogger)("Chart.Definitions.Series"),C=(window.t("Adjust Data for Dividends"),window.t("Extended Hours (Intraday Only)"),window.t("Pre/Post market hours background")),y=window.t("Last Price Line"),j=window.t("Previous Day Close Price Line"),O=window.t("Bid and Ask lines"),S=(window.t("Pre/Post Market Price Line"),window.t("High and low price lines")),g=window.t("Average close price line"),f=window.t("Precision"),v=window.t("Time Zone"),m=window.t("Open"),P=window.t("High"),_=window.t("Low"),B=window.t("Close"),L=window.t("(H + L)/2"),k=window.t("(H + L + C)/3"),M=window.t("(O + H + L + C)/4"),$=window.t("Simple"),D=window.t("With Markers"),T=window.t("Step"),A=window.t("Default"),E={[Object(s.chartStyleStudyId)(12)]:[7,8,9,10,11,12,14,16,20,24,28,32,40]},I=[{priceScale:1,minMove:1,frac:!1},{priceScale:10,minMove:1,frac:!1},{priceScale:100,minMove:1,frac:!1},{priceScale:1e3,minMove:1,frac:!1},{priceScale:1e4,minMove:1,frac:!1},{priceScale:1e5,minMove:1,frac:!1},{priceScale:1e6,minMove:1,frac:!1},{priceScale:1e7,minMove:1,frac:!1},{priceScale:1e8,minMove:1,frac:!1},{priceScale:2,minMove:1,frac:!0},{priceScale:4,minMove:1,frac:!0},{priceScale:8,minMove:1,frac:!0},{priceScale:16,minMove:1,frac:!0},{priceScale:32,minMove:1,frac:!0},{priceScale:64,minMove:1,frac:!0},{priceScale:128,minMove:1,frac:!0},{priceScale:320,minMove:1,frac:!0}],U=[{title:m,value:"open",id:"price-source-open"},{title:P,value:"high",
id:"price-source-high"},{title:_,value:"low",id:"price-source-low"},{title:B,value:"close",id:"price-source-close"},{title:L,value:"hl2",id:"price-source-hl2"},{title:k,value:"hlc3",id:"price-source-hlc3"},{title:M,value:"ohlc4",id:"price-source-ohlc4"}],W=[{title:$,value:c.STYLE_LINE_TYPE_SIMPLE},{title:D,value:c.STYLE_LINE_TYPE_MARKERS},{title:T,value:c.STYLE_LINE_TYPE_STEP}];function H(){const e=[{title:A,value:"default"}];for(let i=0;i<I.length;i++)e.push({title:`${I[i].minMove}/${I[i].priceScale}`,value:`${I[i].priceScale},${I[i].minMove},${I[i].frac}`});return e}class F{constructor(e,i,o,t,n,r){this._definitions=null,this._inputsSubscriptions=null,this._isDestroyed=!1,this._propertyPages=null,this._seriesMinTickWV=null,this._series=e,this._undoModel=i,this._model=this._undoModel.model(),this._propertyPageId=o,this._propertyPageName=t,this._propertyPageIcon=n,this._timezonePropertyObj=r,this._series.onStyleChanged().subscribe(this,this._updateDefinitions),this._series.dataEvents().symbolResolved().subscribe(this,this._updateSeriesMinTickWV),this._updateSeriesMinTickWV()}destroy(){null!==this._propertyPages&&this._propertyPages.forEach(e=>{Object(n.u)(e.definitions.value())}),this._series.onStyleChanged().unsubscribe(this,this._updateDefinitions),this._series.dataEvents().symbolResolved().unsubscribeAll(this),this._unsubscribeInputsUpdate(),this._isDestroyed=!0}propertyPages(){return null===this._propertyPages?this._getDefinitions().then(e=>{if(this._isDestroyed)throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");return null===this._propertyPages&&(this._propertyPages=[{id:this._propertyPageId,title:this._propertyPageName,icon:this._propertyPageIcon,definitions:new l.a(e)}]),this._propertyPages}):Promise.resolve(this._propertyPages)}_seriesMinTick(){const e=this._series.symbolInfo();return null!==e?e.minmov/e.pricescale:null}_updateSeriesMinTickWV(){null===this._seriesMinTickWV?this._seriesMinTickWV=new l.a(this._seriesMinTick()):this._seriesMinTickWV.setValue(this._seriesMinTick())}_updateDefinitions(){null!==this._definitions&&Object(n.u)(this._definitions),this._definitions=null,this._unsubscribeInputsUpdate(),this._createSeriesDefinitions().then(e=>{if(this._isDestroyed)throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");Object(t.ensureNotNull)(this._propertyPages)[0].definitions.setValue(e)})}_getDefinitions(){return null===this._definitions?this._createSeriesDefinitions():Promise.resolve(this._definitions)}_unsubscribeInputsUpdate(){null!==this._inputsSubscriptions&&(this._inputsSubscriptions.forEach(e=>{e.unsubscribeAll(this)}),this._inputsSubscriptions=null)}_subscribeInputsUpdate(e,i){const o=[];e.forEach(e=>{if(void 0!==e.visible){const t=e.visible.split("==");if(2===t.length){const e=i[t[0]];-1===o.indexOf(e)&&(e.subscribe(this,this._updateDefinitions),o.push(e))}}}),o.length>0?this._inputsSubscriptions=o:this._inputsSubscriptions=null}_createSeriesDefinitions(){
const e=this._series.properties().childs(),i=this._series.getInputsProperties(),o=this._series.getInputsInfoProperties(),r=e.style.value(),c=this._series.getStyleShortName();return new Promise(e=>{const n=Object(s.chartStyleStudyId)(r);null!==n?this._model.studyMetaInfoRepository().findById({type:"java",studyId:n}).then(n=>{if(this._isDestroyed)throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");if(null!==this._definitions)return void e(null);const r=Object(t.ensureNotNull)(this._seriesMinTickWV),l=u(this._undoModel,n.id,n.inputs,i,o,r,c);this._subscribeInputsUpdate(n.inputs,i),e(l)}).catch(i=>{w.logWarn("Find meta info for create series definitions with error - "+Object(p.a)(i)),e(null)}):e(null)}).then(i=>{if(this._isDestroyed)throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");if(null!==this._definitions)return this._definitions;const o=Object(a.a)(this._undoModel,e,r,{seriesPriceSources:U,lineStyleTypes:W,isJapaneseChartsAvailable:!0,defaultSeriesFontSizes:E},"mainSeries");null!==i&&o.push(...i);const t=Object(n.k)({option:Object(n.b)(this._undoModel,e.minTick,"Change Decimal Places")},{id:c+"SymbolMinTick",title:f,options:new l.a(H())}),s=Object(n.k)({option:Object(n.b)(this._undoModel,this._timezonePropertyObj.property,"Change Timezone")},{id:c+"SymbolTimezone",title:v,options:new l.a(this._timezonePropertyObj.values)});return this._definitions=[Object(n.l)(o,"generalSymbolStylesGroup"),...this._seriesPriceLinesDefinitions(c),...this._seriesDataDefinitions(c),t,s],this._definitions})}_seriesDataDefinitions(e){this._series.dividendsAdjustmentProperty();return[]}_createOutOfSessionDefinition(e){const i=this._model.sessions().properties().childs().graphics.childs().backgrounds.childs().outOfSession.childs();return Object(n.e)({color:Object(n.v)(this._undoModel,i.color,i.transparency,"Change Extended hours color")},{id:e+"SymbolExtendedHoursColors",title:C})}_createPrePostMarketDefinition(e){const i=this._model.sessions(),o=i.properties().childs().graphics.childs().backgrounds.childs().preMarket.childs(),t=i.properties().childs().graphics.childs().backgrounds.childs().postMarket.childs();return Object(n.s)({color1:Object(n.v)(this._undoModel,o.color,o.transparency,"Change Pre Market Color"),color2:Object(n.v)(this._undoModel,t.color,t.transparency,"Change Post Market Color")},{id:e+"SymbolExtendedHoursColors",title:C})}_seriesPriceLinesDefinitions(e){const i=[],o=this._series.properties().childs();if(this._series.hasClosePrice()){const t=Object(n.i)({checked:Object(n.b)(this._undoModel,o.showPriceLine,"Change Price Price Line"),color:Object(n.v)(this._undoModel,o.priceLineColor,null,"Change Price Line Color"),width:Object(n.b)(this._undoModel,o.priceLineWidth,"Change Price Line Width")},{id:e+"SymbolLastValuePriceLine",title:y});i.push(t)}if(this._series.hasClosePrice()){const t=Object(n.i)({disabled:Object(n.b)(this._undoModel,this._series.isDWMProperty(),"Change Price Previous Close Price Line"),
checked:Object(n.b)(this._undoModel,o.showPrevClosePriceLine,"Change Price Previous Close Price Line"),color:Object(n.v)(this._undoModel,o.prevClosePriceLineColor,null,"Change Previous Close Price Line Color"),width:Object(n.b)(this._undoModel,o.prevClosePriceLineWidth,"Change Previous Close Price Line Width")},{id:e+"SymbolPrevClosePriceLine",title:j});i.push(t)}const t=o.highLowAvgPrice,r=Object(n.c)({checked:Object(n.b)(this._undoModel,t.childs().highLowPriceLinesVisible,"Change high/low price lines visibility")},{id:e+"SymbolHighLowPriceLines",title:S}),l=Object(n.c)({checked:Object(n.b)(this._undoModel,t.childs().averageClosePriceLineVisible,"Change average close price line visibility")},{id:e+"SymbolAverageClosePriceLine",title:g});if(i.push(r,l),this._model.hasCustomSource("bidask")){const t=o.bidAsk,r=Object(n.s)({checked:Object(n.b)(this._undoModel,t.childs().visible,"Change Bid and Ask lines Visibility"),color1:Object(n.v)(this._undoModel,t.childs().bidLineColor,null,"Change Bid line Color"),color2:Object(n.v)(this._undoModel,t.childs().askLineColor,null,"Change Ask line Color")},{id:e+"SymbolBidAskLines",title:O});i.push(r)}return i}}}}]);