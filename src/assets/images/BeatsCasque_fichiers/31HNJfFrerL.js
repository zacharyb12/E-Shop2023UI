(function(m){var v=window.AmazonUIPageJS||window.P,n=v._namespace||v.attributeErrors,d=n?n("DetailPageTwisterViewAsset",""):v;d.guardFatal?d.guardFatal(m)(d,window):d.execute(function(){m(d,window)})})(function(m,v,n){m.when("A","dp-refresh-handler","view-util","twister-string-constants","dp-interactive-page-refresh-handler","twister-dimension-subview-promise-handler","page-refresh-custom-params-handler").register("page-refresh-view",function(d,I,q,k,u,p,A){function w(p,a,w){function z(h){return{chunk:function(c){var h=
c.ASIN,e=c.Value;c=c.FeatureName;if(!l.hiddenFeatures[c]){var b=c,f,a;try{b&&e&&e.content&&(a=e.content[b],"undefined"!==typeof a&&(f=r("#"+b),f.html(a),f.removeClass("js-feature-refresh-overlay"),f.css({opacity:""})))}catch(g){b=b||"NoFeatureName",D.logFatal(g,{message:"Error in feature"+b})}l.twisterRefreshHandler.stampFeature(b,h);"twister-slot-price_feature_div"==c&&(e=e?e.content:null,a=r(".swatchSelect .twisterSwatchPrice").html(),f=r(".swatchSelect .price_slot_ppu").html(),a&&e&&e.priceToSet&&
(a=d.trim(a),e.priceToSet!==a&&(r(".swatchSelect .twisterSwatchPrice").html(e.priceToSet),B("twisterUpdatePriceMismatch"))),f&&e&&e.hasPricePerUnit&&e.pricePerUnitDisplay&&(f=d.trim(f),e.pricePerUnitDisplay!==f&&(r(".swatchSelect .price_slot_ppu").html(e.pricePerUnitDisplay),B("twisterUpdatePricePerUnitMismatch"))));"desktop_configurator_price_mismatch_div"==c&&d.trigger("DesktopConfiguratorPriceMismatchDataUpdated",h)}},success:function(c,h,e){B("twisterUpdateSuccess");u.updateRenderTime()},error:function(c,
h,e){Twister.$("#variations-overlay").hide();B("twisterUpdateFailure");Twister.showErrorMessageOnFailure&&(alert(Twister.errorMessageOnFailure),location.reload())},abort:function(h){D.logFatal("Ajax aborted: "+h)},timeout:4E4}}function y(h,c,x,e,b){var f=[];"parent"===h?(c=E(c,e,"parent",b),f.parent=c,c=E(x,e,"partial",b),f.partial=c):(c=E(x,e,h,b),f[h]=c);return f}function g(h,c,x,e,b){for(var f in h)if(h.hasOwnProperty(f)){if("full"===f){var a=x.dimensionType,g=l.twisterUtil.getDimensionInfo().length,
k=x.dimensionDisplayType,q=x.newAsin,z=b&&(d.state("dp-twister-csm")||{}).updateCSMPageTypeId;l.twisterRefreshHandler.startMeasurement(q,a,g,k,z?q:n,z?["is-twister","parentAsin-"+F]:n)}a=h[f].twisterRefreshParams;g=h[f].notifyClientParams;b&&(k=l.config[f].affectedFeatures,r(k).addClass("js-feature-refresh-overlay"),r(k).css({opacity:.5}),l.twisterRefreshHandler.doPageRefresh(null,a,c,e));t(g.asin,g.id,f,b)}}function L(){r.each(a.contextMetaData,function(h,c){var a={};c=c.elementList||[];var e=c.length,
b=[];a.click={};a.mouseOver={};for(var f=0;f<e;f++){var g=r("#"+c[f].divToUpdate);b.push("#"+c[f].divToUpdate);g.length&&c[f].customClientFunction&&(c[f].updateOnHover&&(a.mouseOver[c[f].divToUpdate]=g.attr("customfunctionname")),a.click[c[f].divToUpdate]=g.attr("customfunctionname"))}l.config[h].affectedFeatures=b.join(",");l.config[h].clientFeatures=a})}function t(h,c,a,e){var b="",b=e?k.EVENT_TYPE_CLICK:k.EVENT_TYPE_MOUSEOVER;r.each(l.config[a].clientFeatures[b],function(b,a){try{var e=function(){l.twisterRefreshHandler.stampImageLoad(h)};
(function(){var b={};b.P=m;(function(){eval("var P \x3d this.P;");eval("0, "+a)(c,DetailPage.StateController,e)}).call(b)})()}catch(g){D.logFatal("Client feature - "+b+", threw and exception :- "+g)}})}function E(h,c,a,e){var b={},f={};b.asinList=h;b.id="parent"===a?h:"partial"===e?c:h;b.mType=a;b=M(a,b);a=!1;(e=d.state("pwState"))&&(a=e.isTryState);a&&(b.isTryState=a);N(b,A.getCustomPageRefreshParams(h)||{});b=l.twisterRefreshHandler.createCustomParamsMap({},b);f.asin=h;f.id=c;return{twisterRefreshParams:b,
notifyClientParams:f}}function N(h,a){d.each(a,function(a,c){h[c]=a})}function M(h,c){r.each(a.contextMetaData[h].mTypeSpecificURLParams,function(a,h){c[a]=h});return c}function O(a){a=l.twisterUtil.getSelectionInfoFromSelectedVariationValuesMap(a.selected_variation_values);l.twisterUtil.isFullySelected(a)?l.currentPageSelectionState="full":l.currentPageSelectionState="partial"}function P(a){var c={};c.config=a.measurement;c.dimensionDisplayType=a.dimensionsDisplayType;c.storeID=a.storeID;c.productGroupID=
a.productGroupID;return c}function Q(a){a=a.immutableURLPrefix;var c=null;a&&-1!=a.indexOf("?")&&(a=a.split("?")[1],0<a.length&&(c={},a=a.split("\x26"),d.each(a,function(a){a=a.split("\x3d");c[a[0]]=a[1]})),c.isFlushing=2,c.dpEnvironment=Twister.dpEnvironment);return c}function G(a,c){var g;"partial"===a&&"partial"===c&&(g="partial");"partial"===a&&"full"===c&&(g="full");"full"===a&&"partial"===c&&(g="parent");"full"===a&&"full"===c&&(g="full");return g}var l=this,F=a.parent_asin,C=v.ue,H="",D=new w("dpTwisterPageRefreshView");
this.twisterUtil=p.util;this.twisterFeatureName="Twister";this.currentPageSelectionState;this.twisterRefreshHandler;this.config={partial:{},full:{},parent:{},master:{}};this.hiddenFeatures={intermediateEOS:1,EOS:1};l.viewUtil=new q(p);l.subType;var B=function(a){C&&C.count&&C.count(a,(C.count(a)||0)+1)};(function(){O(a);L();var h={featureName:l.twisterFeatureName},c=P(a);l.twisterRefreshHandler=new I(h,null,c);h=Q(a.twisterUpdateURLInfo);l.twisterRefreshHandler.addParams(h);A.initialize();p.registerPassive({viewAttribution:"DetailPage",
viewName:"WebTwisterRefreshView"},{updateView:function(c,e){var b={};if(c!==k.METADATA){var b={},f;f=n;if(e)switch(c){case k.VARIATION_CHANGE:f=e.selected().selInfo;break;case k.VARIATION_PEEK:f=e.peek().selInfo}b.selectionInfo=f;b.dimensionCombination=l.viewUtil.getCurrDimCombId(b.selectionInfo,"_","X");f=l.twisterUtil.isFullySelected(b.dimensionCombination);b.childAsin=l.twisterUtil.getAsinFromSelectionInfo(b.selectionInfo,f);b.newPageSelectionState=f?"full":"partial";b.mTypeForRefresh=G(l.currentPageSelectionState,
b.newPageSelectionState);b.newAsin="parent"===b.mTypeForRefresh?F:b.childAsin;b.doNotAbort="parent"===b.mTypeForRefresh?!0:!1;b.twisterCallListParams=y(b.mTypeForRefresh,b.newAsin,b.childAsin,b.dimensionCombination,b.newPageSelectionState);b.optionsForTwisterRefresh=z(e);b.pageRefreshMeasure={newAsin:b.newAsin,dimensionType:H,dimensionDisplayType:a.dimensionsDisplayType}}switch(c){case k.VARIATION_CHANGE:l.subType!==k.PRODUCTIZED_VIEW_SUBTYPE&&(g(b.twisterCallListParams,b.optionsForTwisterRefresh,
b.pageRefreshMeasure,b.doNotAbort,!0),l.currentPageSelectionState=b.newPageSelectionState,l.subType=n);break;case k.METADATA:switch(e.subType){case k.DP_STATE_VIEW_SUBTYPE:H=e.divMetadata.dimDisplayType;break;case k.PRODUCTIZED_VIEW_SUBTYPE:l.subType=e.subType,b.dimensionCombination=e.newDimCombID,b.childAsin=e.childAsin,b.newAsin=e.newAsin,b.newPageSelectionState=l.twisterUtil.isFullySelected(b.dimensionCombination)?"full":"partial",b.mTypeForRefresh=G(l.currentPageSelectionState,b.newPageSelectionState),
b.doNotAbort="parent"===b.mTypeForRefresh?!0:!1,b.twisterCallListParams=y(b.mTypeForRefresh,b.newAsin,b.childAsin,b.dimensionCombination,b.newPageSelectionState),b.optionsForTwisterRefresh=z(e),b.pageRefreshMeasure={newAsin:b.newAsin,dimensionType:e.divMetaData?e.divMetaData.dimDisplayType:n,dimensionDisplayType:a.dimensionsDisplayType},g(b.twisterCallListParams,b.optionsForTwisterRefresh,b.pageRefreshMeasure,b.doNotAbort,!0),l.currentPageSelectionState=b.newPageSelectionState}}}})})()}var r=d.$;
p.registerDimensionSubView("page-refresh-view",w);return w});m.when("A").register("twister-common-constants",function(d){return{FAMILY_SIZE_BUCKET_LIMITS:[0,3,8,25,50,100,1E3,5E3],DEFAULT_SELECTION_TAG:"defaultSelection",BottomSheet:{TRIGGERING_CRITERION_BOTTOMSHEET_OPEN:"onBottomsheetOpen",BOTTOM_SHEET_SELECTOR:"#twister_bottom_sheet",OVERFLOW_THRESHOLD:8,BOTTOM_SHEET_INIT_TIME:"dpBottomSheetInitTime",PREFETCH_AJAX_CALLS_COMPLETED_EVENT:"prefetchAjaxCallsCompleted"},SortingFiltering:{PRICE_SORT_TOGGLE_SWITCH_CLICK_ON_METRIC:"DPBottomSheetSortingToggleSwitchClickOn",
PRICE_SORT_TOGGLE_SWITCH_CLICK_OFF_METRIC:"DPBottomSheetSortingToggleSwitchClickOff",PRICE_SORT_TOGGLE_SWITCH_ENABLED_STATUS_METRIC:"DPBottomSheetPriceSortingToggleSwitchEnabledStatus",PRIME_FILTER_TOGGLE_SWITCH_CLICK_ON_METRIC:"DPBottomSheetPrimeFilteringToggleSwitchClickOn",PRIME_FILTER_TOGGLE_SWITCH_CLICK_OFF_METRIC:"DPBottomSheetPrimeFilteringToggleSwitchClickOff",PRIME_FILTER_TOGGLE_SWITCH_ENABLED_STATUS_METRIC:"DPBottomSheetPrimeFilteringToggleSwitchEnabledStatus",SORTING_TYPE_PRICE:"price",
SORTING_TYPE_UNSORTED:"unsorted",PREFETCH_AJAX_CALLS_COMPLETED_EVENT:"prefetchAjaxCallsCompleted",TOGGLE_SWITCH_STATE_OFF:"off",TOGGLE_SWITCH_STATE_ON:"on",PRICE_SORTING_ENABLED_PARAMETER:"priceSortingEnabled",PRICE_SORTING_PRIORITY_NAME_PARAMETER:"priceSortingPriorityName",ALTER_TYPE_NAME_PRICE:"price",ALTER_TYPE_NAME_PRIME:"prime",ALTER_SUB_TYPE_ENABLE:"enable",ALTER_SUB_TYPE_DISABLE:"disable",ALTER_TYPE_SORT:"sort",ALTER_TYPE_FILTER:"filter",PRICE_SORT_TOGGLE_SWITCH_SELECTOR:".priceSortToggleSwitch",
PRIME_FILTER_TOGGLE_SWITCH_SELECTOR:".primeFilterToggleSwitch",EXPERIMENT_PRICE_SORTING:"priceSorting",EXPERIMENT_PRIME_FILTERING:"primeFiltering",ATTRIBUTE_PRICE_SORTING_PRIORITY:"priorityName",ATTRIBUTE_SORT_BY_PRICE_STRING:"sortByPriceString",ATTRIBUTE_SORTED_BY_PRICE_STRING:"sortedByPriceString",ATTRIBUTE_TOOL_NAME:"toolName",TOOL_TYPE_TOGGLE_SWITCH:"toggleSwitch"}}});m.when("A").register("page-refresh-custom-params-handler",function(d){var m={};return{initialize:function(){d.on("updateCustomPageRefreshParams",
function(d,k,u){d&&k&&null!==u&&u!==n&&(m[d]||(m[d]={}),m[d][k]=u)})},getCustomPageRefreshParams:function(d){return m[d]||{}}}});"use strict";m.when("A","a-sheet","jQuery","ready").execute(function(d,m,q){d.on("a:sheet:afterShow:bottom_sheet_mediaMatrix",function(){var d=q("#mediaMatrix_bottomSheet_view_div").find("#format-picker-scroller"),m=d.find("#selected-format"),p=m.offset().left,n=Math.abs(m.width()),m=Math.max(document.documentElement.clientWidth,v.innerWidth||0),n=m-n,w=d.scrollLeft();(p>
n||0>=p)&&d.scrollLeft(w+p-m/3)})});m.when("A","view-util","twister-string-constants").register("hover-refresh-view",function(d,v,q){var k=d.$;return function(u,p,A){function w(){d.each(p.contextMetaData,function(d,m){var g={};d=d.elementList||[];var k=d.length;g.mouseOver=[];for(var t=0;t<k;t++)d[t].customClientFunction&&d[t].updateOnHover&&g.mouseOver.push(d[t].divToUpdate);a.clientFeatures[m]=g})}function r(n,y){d.each(a.clientFeatures[y][q.EVENT_TYPE_MOUSEOVER],function(a){try{var d=k("#"+a),
t;d.length&&(t=d.attr("customfunctionname"),function(){var a={};a.P=m;(function(){eval("var P \x3d this.P;");eval("0, "+t)(n,DetailPage.StateController)}).call(a)}())}catch(y){K.logFatal("Client feature - "+feature+", threw and exception :- "+y)}})}function J(d){d=a.twisterUtil.getSelectionInfoFromSelectedVariationValuesMap(d.selected_variation_values);a.twisterUtil.isFullySelected(d)?a.currentPageSelectionState="full":a.currentPageSelectionState="partial"}var a=this,K=new A("dpTwisterHoverRefreshView");
this.twisterUtil=u.util;this.twisterFeatureName="TwisterHover";this.currentPageSelectionState;this.clientFeatures={partial:{},full:{},parent:{},master:{}};a.viewUtil=new v(u);a.subType=n;(function(){function m(d){d=a.viewUtil.getCurrDimCombId(d,"_","X");var g=a.twisterUtil.isFullySelected(d)?"full":"partial",k,n=a.currentPageSelectionState;"partial"===n&&"partial"===g&&(k="partial");"partial"===n&&"full"===g&&(k="full");"full"===n&&"partial"===g&&(k="parent");"full"===n&&"full"===g&&(k="full");g=
[k];"parent"===k&&(g=["parent","partial"]);return{clientFeatureToRefresh:g,dimensionCombination:d}}J(p);w();u.registerPassive({viewAttribution:"DetailPageTwister",viewName:"WebTwisterHoverRefreshView"},{updateView:function(k,g){switch(k){case q.VARIATION_PEEK:var p={};k=g.peek().selInfo;p=m(k);d.each(p.clientFeatureToRefresh,function(a){r(p.dimensionCombination,a)});case q.VARIATION_CHANGE:a.subType!==q.PRODUCTIZED_VIEW_SUBTYPE&&(k=g.selected().selInfo,g=a.viewUtil.getCurrDimCombId(k,"_","X"),a.currentPageSelectionState=
a.twisterUtil.isFullySelected(g)?"full":"partial",a.subType=n);break;case q.METADATA:switch(g.subType){case q.PRODUCTIZED_VIEW_SUBTYPE:a.subType=g.subType,a.currentPageSelectionState=a.twisterUtil.isFullySelected(g.newDimCombID)?"full":"partial"}}}})})()}})});