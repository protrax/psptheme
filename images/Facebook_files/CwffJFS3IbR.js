/*!CK:3086424785!*//*1419288341,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w\/gWb"]); }

__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;},null);
__d("URLMatcher",[],function(a,b,c,d,e,f){var g='!"#%&\'()*,-./:;<>?@[\\]^_`{|}',h='\u2000-\u206F\u00ab\u00bb\uff08\uff09',i='(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])',j='(?:(?:ht|f)tps?)://',k='(?:(?:'+i+'[.]){3}'+i+')',l='\\[(?:(?:[A-Fa-f0-9]{1,4}::?){1,7}[A-Fa-f0-9]{1,4})\\]',m='(?:\\b)www\\d{0,3}[.]',n='[^\\s'+g+h+']',o='(?:(?:(?:[.:\\-_%@]|'+n+')*'+n+')|'+l+')',p='(?:[.][a-z]{2,4})',q='(?::\\d+){0,1}',r='(?=[/?#])',s='(?:'+'(?:'+j+o+q+')|'+'(?:'+k+q+')|'+'(?:'+l+q+')|'+'(?:'+m+o+p+q+')|'+'(?:'+o+p+q+r+')'+')',t='[/#?]',u='\\([^\\s()<>]+\\)',v='[^\\s()<>?#]+',w=new RegExp(s,'im'),x='^\\[[0-9]{1,4}:[0-9]{1,4}:[A-Fa-f0-9]{1,4}\\]',y=new RegExp(x,'im'),z='(?:'+'(?:'+t+')'+'(?:'+'(?:'+u+'|'+v+')*'+')*'+')*',aa=new RegExp('('+'(?:'+s+')'+'(?:'+z+')'+')','im'),ba=new RegExp('('+'(?:'+j+o+q+')|'+'(?:'+m+o+p+q+')'+')'),ca=/[\s'";]/,da=new RegExp(t,'im'),ea=new RegExp('[\\s!"#%&\'()*,./:;<>?@[\\]^`{|}\u00ab\u00bb\u2000-\u206F\uff08\uff09]','im'),fa=new RegExp('[\\s()<>?#]','im'),ga=new RegExp('\\s()<>'),ha=function(oa){if(oa&&oa.indexOf('@')!=-1){return (ba.exec(oa))?oa:null;}else return oa;},ia=function(oa){return ja(oa,aa);},ja=function(oa,pa){var qa=(pa.exec(oa)||[])[1]||null;return ha(qa);},ka=function(oa){return w.exec(oa);},la=function(oa){return !ca.test(oa.charAt(oa.length-1));},ma=function(oa){do{var pa=w.exec(oa);if(!pa)return null;var qa=false;if(pa[0][0]==='['&&pa.index>0&&oa[pa.index-1]==='@'){var ra=y.exec(pa[0]);if(ra){qa=true;oa=oa.substr(pa.index+ra[0].length);}}}while(qa);var sa=oa.substr(pa.index+pa[0].length);if(sa.length===0||!(da.test(sa[0])))return ha(pa[0]);var ta=0,ua=0,va=1,wa=0,xa=ua;for(var ya=1;ya<sa.length;ya++){var za=sa[ya];if(xa===ua){if(za==='('){wa=wa+1;xa=va;}else if(da.test(za)||!(ea.test(za))){ta=ya;}else if(fa.test(za))break;}else if(za==='('){wa=wa+1;}else if(za===')'){wa=wa-1;if(wa===0){xa=ua;ta=ya;}}else if(ga.test(za))break;}return ha(pa[0]+sa.substring(0,ta+1));},na={};na.permissiveMatch=ia;na.matchToPattern=ja;na.matchHost=ka;na.trigger=la;na.match=ma;e.exports=na;},null);
__d("confine",[],function(a,b,c,d,e,f){function g(h,i,j){return Math.min(Math.max(h,i),j);}e.exports=g;},null);
__d("TypeaheadFacepileX.react",["React","joinClasses"],function(a,b,c,d,e,f,g,h){var i=g.createClass({displayName:"TypeaheadFacepile",renderPic:function(j,k){var l=("url("+this.props.photos[j]+")");return (g.createElement("span",{className:h('splitpic',k),key:j,style:{backgroundImage:l}}));},renderPics:function(){var j=this.props.size;if(j>=3){return [this.renderPic(0,'leftpic'),this.renderPic(1,'toppic'),this.renderPic(2,'bottompic')];}else return [this.renderPic(0,'leftpic'),this.renderPic(1)];},render:function(){return (g.createElement("span",g.__spread({},this.props,{className:h(this.props.className,"splitpics clearfix")}),this.renderPics()));}});e.exports=i;},null);
__d("HashtagSearchResultUtils",["FacebarResultStoreUtils","HashtagParser","HashtagSearchResultConfig","URI","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){var l={getHashtagFromQuery:function(m){var n=h.parse(m);if(n&&n.length===1&&n[0].offset===0)return n[0].tag;return false;},makeTypeaheadResult:function(m){var n="Hashtag";return {category:n,path:j('/hashtag/'+m).toString(),photo:i.image_url,rankType:null,replace_results:i.boost_result?true:false,scaled_score:1,score:0,text:'#'+m,type:'hashtag_exact',uid:'hashtag:'+m};},makeFacebarEntry:function(m){var n="Hashtag";return {category:n,path:j('/hashtag/'+m).toString(),photo:i.image_url,replace_results:i.boost_result?true:false,text:'#'+m,type:'hashtag_exact',uid:'hashtag:'+m};},makeFacebarResult:function(m){var n=g.processEntityResult('hashtag_exact','hashtag:'+m,'#'+m,i.hashtag_cost);n.parse={display:[{type:'ent:hashtag_exact',uid:'hashtag:'+m}],remTokens:[],suffix:''};n.tags={hashtag:'hashtag'};return n;}};e.exports=l;},null);
__d("FlipDirection",["DOM","Input","Style"],function(a,b,c,d,e,f,g,h,i){var j={setDirection:function(k){var l=g.isNodeOfType(k,'input')&&(k.type=='text'),m=g.isNodeOfType(k,'textarea');if(!(l||m)||k.getAttribute('data-prevent-auto-flip'))return;var n=h.getValue(k),o=(k.style&&k.style.direction);if(!o){var p=0,q=true;for(var r=0;r<n.length;r++){var s=n.charCodeAt(r);if(s>=48){if(q){q=false;p++;}if(s>=1470&&s<=1920){i.set(k,'direction','rtl');k.setAttribute('dir','rtl');return;}if(p==5){i.set(k,'direction','ltr');k.setAttribute('dir','ltr');return;}}else q=true;}}else if(n.length===0){i.set(k,'direction','');k.removeAttribute('dir');}}};e.exports=j;},null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],function(a,b,c,d,e,f,g,h){var i=function(event){var j=event.getTarget();h.setDirection(j);};g.listen(document.documentElement,{keyup:i,input:i});},null);
__d("PlaceholderOnsubmitFormListener",["Event","Input"],function(a,b,c,d,e,f,g,h){g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('placeholder')&&h.isEmpty(j[k]))h.setValue(j[k],'');});},null);
__d("Dialog",["Animation","Arbiter","AsyncRequest","Button","ContextualThing","CSS","DOM","Event","Focus","Form","HTML","Keys","Locale","Parent","Run","Style","URI","Vector","bind","copyProperties","createArrayFromMixed","emptyFunction","getObjectValues","getOverlayZIndex","removeFromArray","shield","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){var ha=function(){var ja=document.body,ka=document.createElement('div'),la=document.createElement('div');ja.insertBefore(ka,ja.firstChild);ja.insertBefore(la,ja.firstChild);ka.style.position='fixed';ka.style.top='20px';var ma=ka.offsetTop!==la.offsetTop;ja.removeChild(ka);ja.removeChild(la);ha=ba.thatReturns(ma);return ma;};function ia(ja){"use strict";this._show_loading=true;this._auto_focus=true;this._submit_on_enter=false;this._fade_enabled=true;this._onload_handlers=[];this._top=125;this._uniqueID='dialog_'+ia._globalCount++;this._content=null;this._obj=null;this._popup=null;this._overlay=null;this._causal_elem=null;this._previous_focus=null;this._buttons=[];this._buildDialog();if(ja)this._setFromModel(ja);ia._init();}ia.prototype.show=function(){"use strict";this._showing=true;if(this._async_request){if(this._show_loading)this.showLoading();}else this._update();return this;};ia.prototype.showLoading=function(){"use strict";this._loading=true;l.addClass(this._frame,'dialog_loading_shown');this._renderDialog();return this;};ia.prototype.hide=function(){"use strict";if(!this._showing&&!this._loading)return this;this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}if(this._fade_enabled&&ia._stack.length<=1){this._fadeOut();}else this._hide();return this;};ia.prototype.cancel=function(){"use strict";if(!this._cancelHandler||this._cancelHandler()!==false)this.hide();};ia.prototype.getRoot=function(){"use strict";return this._obj;};ia.prototype.getBody=function(){"use strict";return m.scry(this._obj,'div.dialog_body')[0];};ia.prototype.getButtonElement=function(ja){"use strict";if(typeof ja=='string')ja=ia._findButton(this._buttons,ja);if(!ja||!ja.name)return null;var ka=m.scry(this._popup,'input'),la=function(ma){return ma.name==ja.name;};return ka.filter(la)[0]||null;};ia.prototype.getContentNode=function(){"use strict";return m.find(this._content,'div.dialog_content');};ia.prototype.getFormData=function(){"use strict";return p.serialize(this.getContentNode());};ia.prototype.setAllowCrossPageTransition=function(ja){"use strict";this._cross_transition=ja;return this;};ia.prototype.setAllowCrossQuicklingNavigation=function(ja){"use strict";this._cross_quickling=ja;return this;};ia.prototype.setShowing=function(){"use strict";this.show();return this;};ia.prototype.setHiding=function(){"use strict";this.hide();return this;};ia.prototype.setTitle=function(ja){"use strict";var ka=this._nodes.title,la=this._nodes.title_inner,ma=this._nodes.content;m.setContent(la,this._format(ja||''));l.conditionShow(ka,!!ja);l.conditionClass(ma,'dialog_content_titleless',!ja);return this;};ia.prototype.setBody=function(ja){"use strict";m.setContent(this._nodes.body,this._format(ja));return this;};ia.prototype.setExtraData=function(ja){"use strict";this._extra_data=ja;return this;};ia.prototype.setReturnData=function(ja){"use strict";this._return_data=ja;return this;};ia.prototype.setShowLoading=function(ja){"use strict";this._show_loading=ja;return this;};ia.prototype.setFullBleed=function(ja){"use strict";this._full_bleed=ja;this._updateWidth();l.conditionClass(this._obj,'full_bleed',ja);return this;};ia.prototype.setCausalElement=function(ja){"use strict";this._causal_elem=ja;return this;};ia.prototype.setUserData=function(ja){"use strict";this._user_data=ja;return this;};ia.prototype.getUserData=function(){"use strict";return this._user_data;};ia.prototype.setAutohide=function(ja){"use strict";if(ja){if(this._showing){this._autohide_timeout=setTimeout(fa(this.hide,this),ja);}else this._autohide=ja;}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}return this;};ia.prototype.setSummary=function(ja){"use strict";var ka=this._nodes.summary;m.setContent(ka,this._format(ja||''));l.conditionShow(ka,!!ja);return this;};ia.prototype.setButtons=function(ja){"use strict";var ka,la;if(!(ja instanceof Array)){ka=aa(arguments);}else ka=ja;for(var ma=0;ma<ka.length;++ma)if(typeof ka[ma]=='string'){la=ia._findButton(ia._STANDARD_BUTTONS,ka[ma]);ka[ma]=la;}this._buttons=ka;var na=[];if(ka&&ka.length>0)for(var oa=0;oa<ka.length;oa++){la=ka[oa];var pa=m.create('input',{type:'button',name:la.name||'',value:la.label}),qa=m.create('label',{className:'uiButton uiButtonLarge uiButtonConfirm'},pa);if(la.className){la.className.split(/\s+/).forEach(function(sa){l.addClass(qa,sa);});if(l.hasClass(qa,'inputaux')){l.removeClass(qa,'inputaux');l.removeClass(qa,'uiButtonConfirm');}if(l.hasClass(qa,'uiButtonSpecial'))l.removeClass(qa,'uiButtonConfirm');}if(la.icon)m.prependContent(qa,m.create('img',{src:la.icon,className:'img mrs'}));if(la.disabled)j.setEnabled(qa,false);n.listen(pa,'click',this._handleButton.bind(this,la.name));for(var ra in la)if(ra.indexOf('data-')===0&&ra.length>5)pa.setAttribute(ra,la[ra]);na.push(qa);}m.setContent(this._nodes.buttons,na);this._updateButtonVisibility();return this;};ia.prototype.setButtonsMessage=function(ja){"use strict";m.setContent(this._nodes.button_message,this._format(ja||''));this._has_button_message=!!ja;this._updateButtonVisibility();return this;};ia.prototype._updateButtonVisibility=function(){"use strict";var ja=this._buttons.length>0||this._has_button_message;l.conditionShow(this._nodes.button_wrapper,ja);l.conditionClass(this._obj,'omitDialogFooter',!ja);};ia.prototype.setClickButtonOnEnter=function(ja,ka){"use strict";this._clickOnEnterTarget=ja;if(!this._clickOnEnterListener)this._clickOnEnterListener=n.listen(this._nodes.body,'keypress',function(event){var la=event.getTarget();if(la&&la.id===this._clickOnEnterTarget)if(n.getKeyCode(event)==r.RETURN){this._handleButton(ka);event.kill();}return true;}.bind(this));return this;};ia.prototype.setStackable=function(ja,ka){"use strict";this._is_stackable=ja;this._shown_while_stacked=ja&&ka;return this;};ia.prototype.setHandler=function(ja){"use strict";this._handler=ja;return this;};ia.prototype.setCancelHandler=function(ja){"use strict";this._cancelHandler=ia.call_or_eval.bind(null,this,ja);return this;};ia.prototype.setCloseHandler=function(ja){"use strict";this._close_handler=ia.call_or_eval.bind(null,this,ja);return this;};ia.prototype.clearHandler=function(){"use strict";return this.setHandler(null);};ia.prototype.setPostURI=function(ja,ka){"use strict";if(ka===(void 0))ka=true;if(ka){this.setHandler(this._submitForm.bind(this,'POST',ja));}else this.setHandler(function(){p.post(ja,this.getFormData());this.hide();}.bind(this));return this;};ia.prototype.setGetURI=function(ja){"use strict";this.setHandler(this._submitForm.bind(this,'GET',ja));return this;};ia.prototype.setModal=function(ja){"use strict";this._modal=ja;l.conditionClass(this._obj,'generic_dialog_modal',ja);return this;};ia.prototype.setSemiModal=function(ja){"use strict";if(ja){this.setModal(true);this._semiModalListener=n.listen(this._obj,'click',function(ka){if(!m.contains(this._popup,ka.getTarget()))this.hide();}.bind(this));}else this._semiModalListener&&this._semiModalListener.remove();this._semi_modal=ja;return this;};ia.prototype.setWideDialog=function(ja){"use strict";this._wide_dialog=ja;this._updateWidth();return this;};ia.prototype.setContentWidth=function(ja){"use strict";this._content_width=ja;this._updateWidth();return this;};ia.prototype.setTitleLoading=function(ja){"use strict";if(ja===(void 0))ja=true;var ka=m.find(this._popup,'h2.dialog_title');if(ka)l.conditionClass(ka,'loading',ja);return this;};ia.prototype.setSecure=function(ja){"use strict";l.conditionClass(this._nodes.title,'secure',ja);return this;};ia.prototype.setClassName=function(ja){"use strict";ja.split(/\s+/).forEach(l.addClass.bind(l,this._obj));return this;};ia.prototype.setFadeEnabled=function(ja){"use strict";this._fade_enabled=ja;return this;};ia.prototype.setFooter=function(ja){"use strict";var ka=this._nodes.footer;m.setContent(ka,this._format(ja||''));l.conditionShow(ka,!!ja);return this;};ia.prototype.setAutoFocus=function(ja){"use strict";this._auto_focus=ja;return this;};ia.prototype.setTop=function(ja){"use strict";this._top=ja;this._resetDialogObj();return this;};ia.prototype.onloadRegister=function(ja){"use strict";aa(ja).forEach(function(ka){if(typeof ka=='string')ka=new Function(ka);this._onload_handlers.push(ka.bind(this));}.bind(this));return this;};ia.prototype.setAsyncURL=function(ja){"use strict";return this.setAsync(new i(ja));};ia.prototype.setAsync=function(ja){"use strict";var ka=function(sa){if(this._async_request!=ja)return;this._async_request=null;var ta=sa.getPayload(),ua=ta;if(this._loading)this._showing=true;if(typeof ua=='string'){this.setBody(ua);}else this._setFromModel(ua);this._update();}.bind(this),la=ja.getData();la.__d=1;ja.setData(la);var ma=ja.getHandler()||ba;ja.setHandler(function(sa){ma(sa);ka(sa);});var na=ja,oa=na.getErrorHandler()||ba,pa=na.getTransportErrorHandler()||ba,qa=function(){this._async_request=null;this._loading=false;if(this._showing&&this._shown_while_stacked){this._update();}else this._hide(this._is_stackable);}.bind(this),ra=na.getServerDialogCancelHandler()||qa;na.setAllowCrossPageTransition(this._cross_transition).setErrorHandler(function(sa){qa();oa(sa);}).setTransportErrorHandler(function(sa){qa();pa(sa);}).setServerDialogCancelHandler(ra);ja.send();this._async_request=ja;if(this._showing)this.show();return this;};ia.prototype._format=function(ja){"use strict";if(typeof ja=='string'){ja=q(ja);}else ja=q.replaceJSONWrapper(ja);if(ja instanceof q)ja.setDeferred(true);return ja;};ia.prototype._update=function(){"use strict";if(!this._showing)return;if(this._autohide&&!this._async_request&&!this._autohide_timeout)this._autohide_timeout=setTimeout(y(this,'hide'),this._autohide);l.removeClass(this._frame,'dialog_loading_shown');this._loading=false;this._renderDialog();this._runOnloads();this._previous_focus=document.activeElement;o.set(this._frame);};ia.prototype._runOnloads=function(){"use strict";for(var ja=0;ja<this._onload_handlers.length;++ja)try{this._onload_handlers[ja]();}catch(ka){}this._onload_handlers=[];};ia.prototype._updateWidth=function(){"use strict";var ja=2*(ia._BORDER_WIDTH+ia._HALO_WIDTH);if(this._content_width){ja+=this._content_width;if(!this._full_bleed)ja+=2*ia._PADDING_WIDTH;}else if(this._wide_dialog){ja+=ia.SIZE.WIDE;}else ja+=ia.SIZE.STANDARD;this._popup.style.width=ja+'px';};ia.prototype._updateZIndex=function(){"use strict";if(!this._hasSetZIndex&&this._causal_elem){var ja=da(this._causal_elem),ka=this._causal_elem;while(!ja&&(ka=k.getContext(ka)))ja=da(ka);this._hasSetZIndex=ja>(this._modal?400:200);v.set(this._obj,'z-index',this._hasSetZIndex?ja:'');}};ia.prototype._renderDialog=function(){"use strict";this._updateZIndex();this._pushOntoStack();this._obj.style.height=null;if(this._obj&&this._obj.style.display){this._obj.style.visibility='hidden';this._obj.style.display='';this.resetDialogPosition();this._obj.style.visibility='';this._obj.dialog=this;}else this.resetDialogPosition();clearInterval(this.active_hiding);this.active_hiding=setInterval(this._activeResize.bind(this),500);this._submit_on_enter=false;if(this._auto_focus){var ja=p.getFirstElement(this._content,['input[type="text"]','textarea','input[type="password"]']);if(ja){setTimeout(p.focusFirst.bind(this,this._content),0);}else this._submit_on_enter=true;}var ka=x.getElementDimensions(this._content).y+x.getElementPosition(this._content).y;ia._bottoms.push(ka);this._bottom=ka;ia._updateMaxBottom();return this;};ia.prototype._buildDialog=function(){"use strict";this._obj=m.create('div',{className:'generic_dialog',id:this._uniqueID});this._obj.style.display='none';m.appendContent(document.body,this._obj);if(!this._popup)this._popup=m.create('div',{className:'generic_dialog_popup'});this._obj.appendChild(this._popup);l.addClass(this._obj,'pop_dialog');if(s.isRTL())l.addClass(this._obj,'pop_dialog_rtl');m.setContent(this._popup,m.create('div',{className:'pop_container_advanced'},m.create('div',{className:'pop_content',id:'pop_content'})));var ja=m.find(this._popup,'div.pop_content');ja.setAttribute('tabIndex','0');ja.setAttribute('role','alertdialog');this._frame=this._content=ja;var ka=m.create('div',{className:'dialog_loading'},"Loading..."),la=m.create('span'),ma=m.create('h2',{className:'dialog_title hidden_elem',id:'title_'+this._uniqueID},la),na=m.create('div',{className:'dialog_summary hidden_elem'}),oa=m.create('div',{className:'dialog_body'}),pa=m.create('div',{className:'rfloat mlm'}),qa=m.create('div',{className:'dialog_buttons_msg'}),ra=m.create('div',{className:'dialog_buttons clearfix hidden_elem'},[pa,qa]),sa=m.create('div',{className:'dialog_footer hidden_elem'}),ta=m.create('div',{className:'dialog_content'},[na,oa,ra,sa]);this._nodes={summary:na,body:oa,buttons:pa,button_message:qa,button_wrapper:ra,footer:sa,content:ta,title:ma,title_inner:la};m.setContent(this._frame,[ma,ta,ka]);};ia.prototype._activeResize=function(){"use strict";if(this.last_offset_height!=this._content.offsetHeight){this.last_offset_height=this._content.offsetHeight;this.resetDialogPosition();}};ia.prototype.resetDialogPosition=function(){"use strict";if(!this._popup)return;this._resetDialogObj();};ia.prototype._resetDialogObj=function(){"use strict";var ja=2*ia._PAGE_MARGIN,ka=x.getViewportDimensions(),la=ka.x-ja,ma=ka.y-ja,na=2*ia._HALO_WIDTH,oa=x.getElementDimensions(this._content),pa=oa.x+na,qa=oa.y+na,ra=this._top,sa=la-pa,ta=ma-qa;if(ta<0){ra=ia._PAGE_MARGIN;}else if(ra>ta)ra=ia._PAGE_MARGIN+(Math.max(ta,0)/2);var ua=ha();if(!ua)ra+=x.getScrollPosition().y;v.set(this._popup,'marginTop',ra+'px');var va=ua&&(sa<0||ta<0);l.conditionClass(this._obj,'generic_dialog_fixed_overflow',va);l.conditionClass(document.documentElement,'generic_dialog_overflow_mode',va);};ia.prototype._fadeOut=function(ja){"use strict";if(!this._popup)return;try{new g(this._obj).duration(0).checkpoint().to('opacity',0).hide().duration(250).ondone(this._hide.bind(this,ja)).go();}catch(ka){this._hide(ja);}};ia.prototype._hide=function(ja){"use strict";if(this._obj)this._obj.style.display='none';l.removeClass(document.documentElement,'generic_dialog_overflow_mode');clearInterval(this.active_hiding);if(this._bottom){var ka=ia._bottoms;ka.splice(ka.indexOf(this._bottom),1);ia._updateMaxBottom();}if(this._previous_focus&&document.activeElement&&m.contains(this._obj,document.activeElement))o.set(this._previous_focus);if(ja)return;this.destroy();};ia.prototype.destroy=function(){"use strict";this._popFromStack();clearInterval(this.active_hiding);if(this._obj){m.remove(this._obj);this._obj=null;}this._clickOnEnterListener&&this._clickOnEnterListener.remove();if(this._close_handler)this._close_handler({return_data:this._return_data});};ia.prototype._handleButton=function(ja){"use strict";if(typeof ja=='string')ja=ia._findButton(this._buttons,ja);var ka=ia.call_or_eval(ja,ja.handler);if(ka===false)return;if(ja.name=='cancel'){this.cancel();}else if(ia.call_or_eval(this,this._handler,{button:ja})!==false)this.hide();};ia.prototype._submitForm=function(ja,ka,la){"use strict";var ma=this.getFormData();if(la)ma[la.name]=la.label;if(this._extra_data)z(ma,this._extra_data);var na=new i().setURI(ka).setData(ma).setMethod(ja).setNectarModuleDataSafe(this._causal_elem).setReadOnly(ja=='GET');this.setAsync(na);return false;};ia.prototype._setFromModel=function(ja){"use strict";var ka={};z(ka,ja);for(var la in ka){if(la=='onloadRegister'){this.onloadRegister(ka[la]);continue;}var ma=this['set'+la.substr(0,1).toUpperCase()+la.substr(1)];ma.apply(this,aa(ka[la]));}};ia.prototype._updateBottom=function(){"use strict";var ja=x.getElementDimensions(this._content).y+x.getElementPosition(this._content).y;ia._bottoms[ia._bottoms.length-1]=ja;ia._updateMaxBottom();};ia.prototype._pushOntoStack=function(){"use strict";var ja=ia._stack;if(!ja.length)h.inform('layer_shown',{type:'Dialog'});ea(ja,this);ja.push(this);for(var ka=ja.length-2;ka>=0;ka--){var la=ja[ka];if(!la._is_stackable&&!la._async_request){la._hide();}else if(!la._shown_while_stacked)la._hide(true);}};ia.prototype._popFromStack=function(){"use strict";var ja=ia._stack,ka=(ja[ja.length-1]===this);ea(ja,this);if(ja.length){if(ka)ja[ja.length-1].show();}else h.inform('layer_hidden',{type:'Dialog'});};ia._updateMaxBottom=function(){"use strict";ia.max_bottom=Math.max.apply(Math,ia._bottoms);};ia.newButton=function(ja,ka,la,ma){"use strict";var na={name:ja,label:ka};if(la)na.className=la;if(ma)na.handler=ma;return na;};ia.getCurrent=function(){"use strict";var ja=ia._stack;return ja.length?ja[ja.length-1]:null;};ia.hideCurrent=function(){"use strict";var ja=ia.getCurrent();ja&&ja.hide();};ia.bootstrap=function(ja,ka,la,ma,na,oa){"use strict";ka=ka||{};z(ka,new w(ja).getQueryData());ma=ma||(la?'GET':'POST');var pa=t.byClass(oa,'stat_elem')||oa;if(pa&&l.hasClass(pa,'async_saving'))return false;var qa=new i().setReadOnly(!!la).setMethod(ma).setRelativeTo(oa).setStatusElement(pa).setURI(ja).setNectarModuleDataSafe(oa).setData(ka),ra=new ia(na).setCausalElement(oa).setAsync(qa);ra.show();return false;};ia.showFromModel=function(ja,ka){"use strict";var la=new ia(ja).setCausalElement(ka).show();if(ja.hiding)la.hide();};ia._init=function(){"use strict";this._init=ba;u.onLeave(fa(ia._tearDown,null,false));h.subscribe('page_transition',fa(ia._tearDown,null,true));n.listen(document.documentElement,'keydown',function(event){if(n.getKeyCode(event)==r.ESC&&!event.getModifiers().any){if(ia._escape())event.kill();}else if(n.getKeyCode(event)==r.RETURN&&!event.getModifiers().any)if(ia._enter())event.kill();});n.listen(window,'resize',function(event){var ja=ia.getCurrent();ja&&ja._resetDialogObj();});};ia._findButton=function(ja,ka){"use strict";if(ja)for(var la=0;la<ja.length;++la)if(ja[la].name==ka)return ja[la];return null;};ia._tearDown=function(ja){"use strict";var ka=ia._stack.slice();for(var la=ka.length-1;la>=0;la--)if((ja&&!ka[la]._cross_transition)||(!ja&&!ka[la]._cross_quickling))ka[la].hide();};ia._escape=function(){"use strict";var ja=ia.getCurrent();if(!ja)return false;var ka=ja._semi_modal,la=ja._buttons;if(!la.length&&!ka)return false;if(ka&&!la.length){ja.hide();return true;}var ma,na=ia._findButton(la,'cancel');if(ja._cancelHandler){ja.cancel();return true;}else if(na){ma=na;}else if(la.length==1){ma=la[0];}else return false;ja._handleButton(ma);return true;};ia._enter=function(){"use strict";var ja=ia.getCurrent();if(!ja||!ja._submit_on_enter)return false;if(document.activeElement!=ja._frame)return false;var ka=ja._buttons;if(!ka)return false;ja._handleButton(ka[0]);return true;};ia.call_or_eval=function(ja,ka,la){"use strict";if(!ka)return (void 0);la=la||{};if(typeof ka=='string'){var ma=Object.keys(la).join(', ');ka=(eval)('({f: function('+ma+') { '+ka+'}})').f;}return ka.apply(ja,ca(la));};z(ia,{OK:{name:'ok',label:"OK"},CANCEL:{name:'cancel',label:"Cancel",className:'inputaux'},CLOSE:{name:'close',label:"Close"},NEXT:{name:'next',label:"Next"},SAVE:{name:'save',label:"Save"},SUBMIT:{name:'submit',label:"Submit"},CONFIRM:{name:'confirm',label:"Confirm"},DELETE:{name:'delete',label:"Delete"},_globalCount:0,_bottoms:[0],max_bottom:0});z(ia,{OK_AND_CANCEL:[ia.OK,ia.CANCEL],_STANDARD_BUTTONS:[ia.OK,ia.CANCEL,ia.CLOSE,ia.SAVE,ia.SUBMIT,ia.CONFIRM,ia.DELETE],SIZE:{WIDE:555,STANDARD:445},_HALO_WIDTH:10,_BORDER_WIDTH:1,_PADDING_WIDTH:10,_PAGE_MARGIN:40,_stack:[]});z(ia.prototype,{_cross_quickling:false,_cross_transition:false,_loading:false,_showing:false});e.exports=ia;a.Dialog=ia;},null);
__d("Typeahead",["ArbiterMixin","BehaviorsMixin","DataStore","DOM","Event","Parent","Run","Style","emptyFunction","ge","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=q(g,h);for(var s in r)if(r.hasOwnProperty(s))u[s]=r[s];var t=r===null?null:r.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=r;function u(v,w,x,y){"use strict";this.args={data:v,view:w,core:x};i.set(y,'Typeahead',this);this.element=y;}u.prototype.init=function(v){"use strict";this.init=o;this.getCore();this.getView().setAccessibilityControlElement(this.getCore().getElement());this.proxyEvents();this.initBehaviors(v||[]);this.inform('init',this);this.data.bootstrap();this.core.focus();};u.prototype.getData=function(){"use strict";if(!this.data){var v=this.args.data;this.data=v;this.data.init();}return this.data;};u.prototype.getView=function(){"use strict";if(!this.view){var v=this.args.view,w=v.node||p(v.node_id);if(!w){w=j.create('div',{className:'uiTypeaheadView'});j.appendContent(this.element,w);}if(typeof v.ctor==='string'){this.view=new window[v.ctor](w,v.options||{});}else this.view=new v.ctor(w,v.options||{});this.view.init();this.view.setTypeahead(this.element);}return this.view;};u.prototype.getCore=function(){"use strict";if(!this.core){var v=this.args.core;if(typeof v.ctor==='string'){this.core=new window[v.ctor](v.options||{});}else this.core=new v.ctor(v.options||{});this.core.init(this.getData(),this.getView(),this.getElement());}return this.core;};u.prototype.getElement=function(){"use strict";return this.element;};u.prototype.setHeight=function(v){"use strict";if(v!=='auto')v=v+'px';n.set(this.element,'height',v);};u.prototype.swapData=function(v){"use strict";return this.$Typeahead0(v,true);};u.prototype.swapDataNoCoreReset=function(v){"use strict";return this.$Typeahead0(v,false);};u.prototype.$Typeahead0=function(v,w){"use strict";var x=this.core;this.data=this.args.data=v;v.init();this.proxyEvents();if(x){x.data=v;x.initData();if(w)x.reset();}v.bootstrap();return v;};u.prototype.proxyEvents=function(){"use strict";[this.data,this.view,this.core].forEach(function(v){v.subscribe(v.events,this.inform.bind(this));},this);};u.prototype.initBehaviors=function(v){"use strict";v.forEach(function(w){if(typeof w==='string'){if(a.TypeaheadBehaviors&&a.TypeaheadBehaviors[w]){a.TypeaheadBehaviors[w](this);}else m.onLoad(function(){if(a.TypeaheadBehaviors)(a.TypeaheadBehaviors[w]||o)(this);}.bind(this));}else this.enableBehavior(w);},this);};u.getInstance=function(v){"use strict";var w=l.byClass(v,'uiTypeahead');return w?i.get(w,'Typeahead'):null;};u.initNow=function(v,w,x){"use strict";if(x)x.init(v);v.init(w);};u.init=function(v,w,x,y){"use strict";if(!j.isNodeOfType(v,['input','textarea']))v=j.scry(v,'input')[0]||j.scry(v,'textarea')[0];var z=false;try{z=document.activeElement===v;}catch(aa){}if(z){u.initNow(w,x,y);}else var ba=k.listen(v,'focus',function(){u.initNow(w,x,y);ba.remove();});};e.exports=u;},null);
__d("BasicTypeaheadRenderer",["BadgeHelper","DOM"],function(a,b,c,d,e,f,g,h){var i=' \u00B7 ';function j(k,l){var m=[];if(k.icon)m.push(h.create('img',{alt:'',src:k.icon}));if(k.text){var n=[k.text];if(k.is_verified)n.push(g.renderBadge('xsmall','verified'));m.push(h.create('span',{className:'text'},n));}if(k.subtext){var o=[k.subtext];if(k.saved_context){var p=h.create('span',{className:'saved'},[k.saved_context]);o.unshift(p,i);}m.push(h.create('span',{className:'subtext'},o));}var q=h.create('li',{className:k.type||''},m);if(k.text){q.setAttribute('title',k.text);q.setAttribute('aria-label',k.text);}return q;}j.className='basic';e.exports=j;},null);
__d("TypeaheadView",["ArbiterMixin","BasicTypeaheadRenderer","CSS","DOM","Event","Parent","$","copyProperties","emptyFunction","getElementText","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=q(g);for(var s in r)if(r.hasOwnProperty(s))u[s]=r[s];var t=r===null?null:r.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=r;function u(v,w){"use strict";this.element=this.content=m(v);n(this,w);}u.prototype.init=function(){"use strict";this.init=o;this.initializeEvents();this.reset();};u.prototype.initializeEvents=function(){"use strict";k.listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)});};u.prototype.setTypeahead=function(v){"use strict";this.typeahead=v;};u.prototype.setAccessibilityControlElement=function(v){"use strict";this.accessibilityElement=v;};u.prototype.getElement=function(){"use strict";return this.element;};u.prototype.mouseup=function(event){"use strict";if(event.button!=2){this.select(true);event.prevent();}};u.prototype.mouseover=function(event){"use strict";if(this.ignoreMouseover){this.ignoreMouseover=false;return;}if(this.visible)this.highlight(this.getIndex(event));};u.prototype.reset=function(v){"use strict";if(!v)this.disableAutoSelect=false;this.index=-1;this.items=[];this.results=[];this.value='';this.content.innerHTML='';this.inform('reset');return this;};u.prototype.getIndex=function(event){"use strict";return this.items.indexOf(l.byTag(event.getTarget(),'li'));};u.prototype.getSelection=function(){"use strict";var v=this.results[this.index]||null;return this.visible?v:null;};u.prototype.isEmpty=function(){"use strict";return !this.results.length;};u.prototype.isVisible=function(){"use strict";return !!this.visible;};u.prototype.show=function(){"use strict";i.show(this.element);if(this.results&&this.results.length)if(this.autoSelect&&this.accessibilityElement&&this.selected)this.accessibilityElement.setAttribute('aria-activedescendant',j.getID(this.selected));this.accessibilityElement&&this.accessibilityElement.setAttribute('aria-expanded','true');this.visible=true;return this;};u.prototype.hide=function(){"use strict";i.hide(this.element);if(this.accessibilityElement){this.accessibilityElement.setAttribute('aria-expanded','false');this.accessibilityElement.removeAttribute('aria-activedescendant');}this.visible=false;return this;};u.prototype.render=function(v,w){"use strict";this.value=v;if(!w.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.reset(true);return;}var x={results:w,value:v};this.inform('beforeRender',x);w=x.results;var y=this.getDefaultIndex(w);if(this.index>0&&this.index!==this.getDefaultIndex(this.results)&&this.index<this.results.length){var z=this.results[this.index];for(var aa=0,ba=w.length;aa<ba;++aa)if(z.uid==w[aa].uid){y=aa;break;}}this.results=w;j.setContent(this.content,this.buildResults(w));this.items=this.getItems();this.highlight(y,false);this.inform('render',w);};u.prototype.getItems=function(){"use strict";return j.scry(this.content,'li');};u.prototype.buildResults=function(v){"use strict";var w,x=null;if(typeof this.renderer=='function'){w=this.renderer;x=this.renderer.className||'';}else{w=a.TypeaheadRenderers[this.renderer];x=this.renderer;}w=w.bind(this);var y=v.map(function(aa,ba){var ca=aa.node||w(aa,ba);ca.setAttribute('role','option');return ca;}),z=j.create('ul',{className:x,id:'typeahead_list_'+(this.typeahead?j.getID(this.typeahead):j.getID(this.element))},y);z.setAttribute('role','listbox');return z;};u.prototype.getDefaultIndex=function(){"use strict";var v=(this.autoSelect&&!this.disableAutoSelect);return this.index<0&&!v?-1:0;};u.prototype.next=function(){"use strict";this.highlight(this.index+1);this.inform('next',this.selected);};u.prototype.prev=function(){"use strict";this.highlight(this.index-1);this.inform('prev',this.selected);};u.prototype.getItemText=function(v){"use strict";var w='';if(v){w=v.getAttribute('aria-label');if(!w){w=p(v);v.setAttribute('aria-label',w);}}return w;};u.prototype.setIsViewingSelectedItems=function(v){"use strict";this.viewingSelected=v;return this;};u.prototype.getIsViewingSelectedItems=function(){"use strict";return !!this.viewingSelected;};u.prototype.highlight=function(v,w){"use strict";if(this.selected){i.removeClass(this.selected,'selected');this.selected.setAttribute('aria-selected','false');}if(v>this.items.length-1){v=-1;}else if(v<-1)v=this.items.length-1;if(v>=0&&v<this.items.length){this.selected=this.items[v];i.addClass(this.selected,'selected');this.selected.setAttribute('aria-selected','true');if(this.accessibilityElement)setTimeout((function(){this.accessibilityElement.setAttribute('aria-activedescendant',j.getID(this.selected));}).bind(this),0);}else this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.index=v;this.disableAutoSelect=(v==-1);if(w!==false)this.inform('highlight',{index:v,selected:this.results[v],element:this.selected});};u.prototype.select=function(v){"use strict";if(this.headerIndex&&v)return;var w=this.index,x=this.results[w],y=this.element.getAttribute('id');if(x){this.inform('select',{index:w,clicked:!!v,selected:x,id:y,query:this.value});this.inform('afterSelect');}};n(u.prototype,{events:['highlight','render','reset','select','beforeRender','next','prev'],renderer:h,autoSelect:false,ignoreMouseover:false});e.exports=u;},null);
__d("XHPTemplate",["DataStore","DOM","HTML"],function(a,b,c,d,e,f,g,h,i){function j(l){"use strict";this._model=l;}j.prototype.render=function(){"use strict";if(i.isHTML(this._model))this._model=h.setContent(document.createDocumentFragment(),this._model)[0];return this._model.cloneNode(true);};j.prototype.build=function(){"use strict";return new k(this.render());};j.getNode=function(l,m){"use strict";return j.getNodes(l)[m];};j.getNodes=function(l){"use strict";var m=g.get(l,'XHPTemplate:nodes');if(!m){m={};var n=h.scry(l,'[data-jsid]');n.push(l);var o=n.length;while(o--){var p=n[o];m[p.getAttribute('data-jsid')]=p;p.removeAttribute('data-jsid');}g.set(l,'XHPTemplate:nodes',m);}return m;};function k(l){"use strict";this._root=l;this._populateNodes();}k.prototype._populateNodes=function(){"use strict";this._nodes={};this._leaves={};var l=this._root.getElementsByTagName('*');for(var m=0,n=l.length;m<n;m++){var o=l[m],p=o.getAttribute('data-jsid');if(p){o.removeAttribute('data-jsid');this._nodes[p]=o;this._leaves[p]=!o.childNodes.length;}}};k.prototype.getRoot=function(){"use strict";return this._root;};k.prototype.getNode=function(l){"use strict";return this._nodes[l];};k.prototype.setNodeProperty=function(l,m,n){"use strict";this.getNode(l)[m]=n;return this;};k.prototype.setNodeContent=function(l,m){"use strict";if(!this._leaves[l])throw new Error("Can't setContent on non-leaf node: "+l);h.setContent(this.getNode(l),m);return this;};e.exports=j;},null);