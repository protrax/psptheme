/*!CK:3023354275!*//*1418616549,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IPVH9"]); }

__d("PhotosetSearchPivotData",["AsyncRequest","PhotoStreamCache","Promise","XPhotosetSearchPivotControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j){var k=/^(perm:)?tag:(\d+)/,l={},m={fetch:function(n,o){if(!(n in l)){var p=(new j()).setInt('fbid',n);if(o){var q={};o.fbidList.forEach(function(r){var s=o.getCacheContent(r,h.EXTRA);if(s)Object.keys(s.tagRects).forEach(function(t){if(k.test(t)){var u=RegExp.$2;if(u in q){q[u]++;}else q[u]=1;}});});p.setIntToIntMap('tags',q);}l[n]=new i(function(r,s){(new g()).setURI(p.getURI()).setHandler(function(t){r(t.getPayload());}).setErrorHandler(s).setAllowCrossPageTransition(true).send();});}return l[n]["catch"](function(r){delete l[n];throw r;});}};e.exports=m;},null);
__d("CacheStorage",["ErrorUtils","EventListener","ExecutionEnvironment","FBJSON","WebStorage"],function(a,b,c,d,e,f,g,h,i,j,k){var l={memory:u,localstorage:s,sessionstorage:t},m='_@_',n='3b',o='CacheStorageVersion';function p(w){"use strict";this._store=w;}p.prototype.getStore=function(){"use strict";return this._store;};p.prototype.keys=function(){"use strict";var w=[];for(var x=0;x<this._store.length;x++)w.push(this._store.key(x));return w;};p.prototype.get=function(w){"use strict";return this._store.getItem(w);};p.prototype.set=function(w,x){"use strict";this._store.setItem(w,x);};p.prototype.remove=function(w){"use strict";this._store.removeItem(w);};p.prototype.clear=function(){"use strict";this._store.clear();};for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(){"use strict";p.call(this,k.getLocalStorage());}s.available=function(){"use strict";return !!k.getLocalStorage();};for(q in p)if(p.hasOwnProperty(q))t[q]=p[q];t.prototype=Object.create(r);t.prototype.constructor=t;t.__superConstructor__=p;function t(){"use strict";p.call(this,k.getSessionStorage());}t.available=function(){"use strict";return !!k.getSessionStorage();};function u(){"use strict";this._store={};}u.prototype.getStore=function(){"use strict";return this._store;};u.prototype.keys=function(){"use strict";return Object.keys(this._store);};u.prototype.get=function(w){"use strict";if(this._store[w]===(void 0))return null;return this._store[w];};u.prototype.set=function(w,x){"use strict";this._store[w]=x;};u.prototype.remove=function(w){"use strict";if(w in this._store)delete this._store[w];};u.prototype.clear=function(){"use strict";this._store={};};u.available=function(){"use strict";return true;};function v(w,x){"use strict";this._key_prefix=x||'_cs_';if(w=='AUTO'||!w)for(var y in l){var z=l[y];if(z.available()){w=y;break;}}if(w)if(!l[w]||!l[w].available()){i.canUseDOM;this._backend=new u();}else this._backend=new l[w]();var aa=this.useBrowserStorage();if(aa)h.listen(window,'storage',this._onBrowserValueChanged.bind(this));var ba=aa?this._backend.getStore().getItem(o):this._backend.getStore()[o];if(ba!==n)this.clear();}v.prototype.useBrowserStorage=function(){"use strict";return this._backend.getStore()===k.getLocalStorage()||this._backend.getStore()===k.getSessionStorage();};v.prototype.addValueChangeCallback=function(w){"use strict";this._changeCallbacks=this._changeCallbacks||[];this._changeCallbacks.push(w);return {remove:function(){this._changeCallbacks.slice(this._changeCallbacks.indexOf(w),1);}.bind(this)};};v.prototype._onBrowserValueChanged=function(w){"use strict";if(this._changeCallbacks&&String(w.key).startsWith(this._key_prefix))this._changeCallbacks.forEach(function(x){x(w.key,w.oldValue,w.newValue);});};v.prototype.keys=function(){"use strict";var w=[];g.guard(function(){if(this._backend){var x=this._backend.keys(),y=this._key_prefix.length;for(var z=0;z<x.length;z++)if(x[z].substr(0,y)==this._key_prefix)w.push(x[z].substr(y));}}.bind(this),'CacheStorage')();return w;};v.prototype.set=function(w,x,y){"use strict";if(this._backend){var z;if(typeof x=='string'){z=m+x;}else if(!y){z={__t:Date.now(),__v:x};z=j.stringify(z);}else z=j.stringify(x);var aa=this._backend,ba=this._key_prefix+w,ca=true;while(ca)try{aa.set(ba,z);ca=false;}catch(da){var ea=aa.keys().length;this._evictCacheEntries();ca=aa.keys().length<ea;}}};v.prototype._evictCacheEntries=function(){"use strict";var w=[],x=this._backend;x.keys().forEach(function(z){if(z===o)return;var aa=x.get(z);if(aa===(void 0)){x.remove(z);return;}if(v._hasMagicPrefix(aa))return;try{aa=j.parse(aa,e.id);}catch(ba){x.remove(z);return;}if(aa&&aa.__t!==(void 0)&&aa.__v!==(void 0))w.push([z,aa.__t]);});w.sort(function(z,aa){return z[1]-aa[1];});for(var y=0;y<Math.ceil(w.length/2);y++)x.remove(w[y][0]);};v.prototype.get=function(w,x){"use strict";var y;if(this._backend){g.applyWithGuard(function(){y=this._backend.get(this._key_prefix+w);},this,null,function(){y=null;},'CacheStorage:get');if(y!==null){if(v._hasMagicPrefix(y)){y=y.substr(m.length);}else try{y=j.parse(y,e.id);if(y&&y.__t!==(void 0)&&y.__v!==(void 0))y=y.__v;}catch(z){y=(void 0);}}else y=(void 0);}if(y===(void 0)&&x!==(void 0)){y=x;this.set(w,y);}return y;};v.prototype.remove=function(w){"use strict";if(this._backend)g.applyWithGuard(this._backend.remove,this._backend,[this._key_prefix+w],null,'CacheStorage:remove');};v.prototype.clear=function(){"use strict";if(this._backend){g.applyWithGuard(this._backend.clear,this._backend,null,null,null,'CacheStorage:clear');if(this.useBrowserStorage()){this._backend.getStore().setItem(o,n);}else this._backend.getStore()[o]=n;}};v.getAllStorageTypes=function(){"use strict";return Object.keys(l);};v._hasMagicPrefix=function(w){"use strict";return w.substr(0,m.length)===m;};e.exports=v;},null);
__d("MarauderLogger",["Banzai","CacheStorage","MarauderConfig"],function(a,b,c,d,e,f,g,h,i){var j='client_event',k='navigation',l=180000,m='marauder',n='marauder_last_event_time',o='marauder_last_session_id',p={},q=[],r=false,s=null,t=null,u=null,v=0,w,x,y=false,z=new h('localstorage','');function aa(){z.set(n,ba());}g.subscribe(g.SHUTDOWN,aa);function ba(){w=w||z.get(n)||0;return w;}function ca(){if(!y){x=z.get(o);y=true;}var ra=Date.now();if(!x||ra-l>ba()){x=ra.toString(16)+'-'+(~~(Math.random()*16777215)).toString(16);z.set(o,x);}return x;}function da(){return {user_agent:window.navigator.userAgent,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth,density:(window.screen.devicePixelRatio||null),platform:(window.navigator.platform||null),locale:(window.navigator.language||null)};}function ea(){return {locale:navigator.language};}function fa(ra,sa,ta,ua,va,wa,xa){var ya=xa||Date.now();w=xa?Date.now():ya;sa=sa||s;return {name:ra,time:ya/1000,module:sa,obj_type:ua,obj_id:va,uuid:wa,extra:ta};}function ga(ra,sa,ta){return fa('content',null,{flags:sa},null,null,ra,ta);}function ha(ra){var sa=window.__mrdr;if(sa)for(var ta in sa){var ua=sa[ta];if(ua[3]!==0){delete sa[ta];if(ta==="1")if(u!==null){ta=u;}else continue;ra.push(ga(ta,1,ua[1]));ra.push(ga(ta,2,ua[2]));ra.push(ga(ta,3,ua[3]));}}}function ia(ra){ha(ra);if(ra.length===0)return;if(r)ra.push(fa('counters',null,p));var sa=g.BASIC,ta=i.gk_enabled;if(v===0&&ta){ra.push(fa('device_status',null,ea()));sa={delay:5000};}if(ta&&Math.random()<.01)ra.push(fa('device_info',null,da()));if(u!==null)for(var ua=0;ua<ra.length;ua++){var va=ra[ua];if(va.uuid===null||va.uuid===(void 0))va.uuid=u;}var wa={app_ver:i.app_version,data:ra,log_type:j,seq:v++,session_id:ca()},xa=z.get('device_id');if(xa)wa.device_id=xa;p={};r=false;g.post(m,wa,sa);}function ja(ra){if(!p[ra])p[ra]=0;p[ra]++;r=true;}function ka(ra,sa,ta,ua,va,wa,xa){ia([fa(ra,sa,ta,ua,va,wa,xa)]);}function la(ra,sa){if(s!==sa){q.push(fa(k,s,{dest_module:sa,source_url:t,destination_url:ra}));s=sa;t=ra;}}function ma(ra,sa){if(s!==sa){u=null;la(ra,sa);}}function na(ra,sa,ta){ka(sa?'show_module':'hide_module',ra,ta);}function oa(ra){s=ra;}function pa(){return s;}function qa(ra){if(u===null){u=ra;if(ra!==null){ia(q);q=[];}}}e.exports={count:ja,log:ka,navigateTo:ma,navigateWithinSession:la,toggleModule:na,setUUID:qa,setNavigationModule:oa,getNavigationModule:pa};},null);
__d("DragDropFileUpload",[],function(a,b,c,d,e,f){f.isSupported=function(){return typeof(FileList)!=="undefined";};},null);
__d("DocumentDragDrop",["Event","Arbiter","CSS","DOM","DOMQuery","DragDropFileUpload","emptyFunction","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={},p=0;function q(){p=0;n(o).forEach(function(v){i.removeClass(v.element,v.className);h.inform('dragleave',{element:v.element});});}var r=null;function s(){r&&clearTimeout(r);r=setTimeout(function(){q();},500);}function t(){if(!l.isSupported())return;g.listen(document,'dragenter',function(v){if(p===0)n(o).forEach(function(w){i.addClass(w.element,w.className);h.inform('dragenter',{element:w.element,event:v});});p++;s();});g.listen(document,'dragleave',function(v){p--;if(p===0)q();s();});g.listen(document,'drop',function(v){q();var w=v.getTarget();if(k.isNodeOfType(v.getTarget(),'input'))if(w.type==='file')return;v.prevent();});g.listen(document,'dragover',g.prevent);document.addEventListener('dragover',s,true);t=m;}var u={init:function(){t();},registerStatusElement:function(v,w){t();o[j.getID(v)]={element:v,className:w};if(p>0)i.addClass(v,w);},removeStatusElement:function(v){var w=j.getID(v),x=o[w];if(x){i.removeClass(x.element,x.className);delete o[w];}}};e.exports=u;},null);
__d("DragDropTarget",["Arbiter","Event","SubscriptionsHandler","CSS","DataTransfer","DocumentDragDrop","DragDropFileUpload","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q){this._element=q;this._listeners=new i();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}n(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!m.isSupported())return this;this._listeners.engage();l.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(h.listen(this._element,'dragenter',this._onDragEnter.bind(this)),h.listen(this._element,'dragleave',this._onDragLeave.bind(this)),h.listen(this._element,'dragover',this._onDragOver.bind(this)),h.listen(this._element,'drop',function(q){this._dragEnterCount=0;j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}.bind(this)));this._listeners.addSubscriptions(g.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),g.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;l.removeStatusElement(this._statusElem,'fbWantsDragDrop');j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new k(q.dataTransfer);j.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){j.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){j.addClass(this._statusElem,'fbDropReadyPhotos');}else j.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){h.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=(r=='move'||r=='linkMove')?'move':'copy';h.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});e.exports=p;},null);
__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","copyProperties","mixin","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;r.parseFiles=function(t){"use strict";var u={};for(var v in t){var w=t[v];if(Array.isArray(w)){u[v]=w;}else{u[v]=[];if(w instanceof window.FileList){for(var x=0;x<w.length;x++)u[v].push(w.item(x));}else if(w instanceof window.File||w instanceof window.Blob)u[v].push(w);}}return u;};function r(t){"use strict";this.setURI(t);this.setNetworkErrorRetryLimit(0);}r.prototype.setAllowCrossOrigin=function(t){"use strict";this._allowCrossOrigin=!!t;return this;};r.prototype.setData=function(t){"use strict";this._data=t;return this;};r.prototype.setNetworkErrorRetryLimit=function(t){"use strict";this._retryLimit=t;return this;};r.prototype.setLimit=function(t){"use strict";this._limit=t;return this;};r.prototype.setPreprocessHandler=function(t){"use strict";this._preprocessHandler=t;return this;};r.prototype.setRelativeTo=function(t){"use strict";this._relativeTo=t;return this;};r.prototype.setStatusElement=function(t){"use strict";this._statusElement=t;return this;};r.prototype.setURI=function(t){"use strict";this._uri=t;return this;};r.prototype.suspend=function(){"use strict";this._suspended=true;return this;};r.prototype.resume=function(){"use strict";this._suspended=false;this._processQueue();return this;};r.prototype.isUploading=function(){"use strict";return this._inFlight;};r.prototype._createFileUpload=function(t,u,v){"use strict";return new s(t,u,v);};r.prototype._processQueue=function(){"use strict";if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var t=this._waiting.shift();if(this._preprocessHandler){this._preprocessHandler(t,this._processUpload.bind(this));}else this._processUpload(t);this._pending.push(t);}};r.prototype._processUpload=function(t){"use strict";var u=k.createFormData(t.getData()||this._data);if(t.getFile()){u.append(t.getName(),t.getFile());var v=t.getFile().uploadID;if(v)u.append('upload_id',v);}var w=new h().setAllowCrossOrigin(this._allowCrossOrigin).setURI(this._uri).setRawData(u).setStatusElement(this._statusElement).setHandler(this._success.bind(this,t)).setErrorHandler(this._failure.bind(this,t)).setUploadProgressHandler(this._progress.bind(this,t)).setInitialHandler(this._initial.bind(this,t));if(this._relativeTo)w.setRelativeTo(this._relativeTo);w.send();t.setAsyncRequest(w);this._inFlight=true;if(!t.getRetryCount())this.inform('start',t);};r.prototype._abort=function(t){"use strict";if(this._pending.indexOf(t)!==-1){n(this._pending,t);this._processQueue();}n(this._waiting,t);t.abort();};r.prototype._initial=function(t){"use strict";if(t.isAborted())return;this.inform('initial',t);};r.prototype._success=function(t,u){"use strict";if(t.isAborted()){this.inform('success_after_abort',u);return;}this._complete(t);this.inform('success',t.handleSuccess(u));this._processQueue();};r.prototype._retryUpload=function(t){"use strict";t.increaseRetryCount();this._processUpload(t);};r.prototype._failure=function(t,u){"use strict";if(t.isAborted())return;if(u.error===1004&&t.getRetryCount()<this._retryLimit)return this._retryUpload(t);this._complete(t);if(this.inform('failure',t.handleFailure(u))!==false)i.defaultErrorHandler(u);this._processQueue();};r.prototype._progress=function(t,event){"use strict";if(t.isAborted())return;this.inform('progress',t.handleProgress(event));};r.prototype._complete=function(t){"use strict";n(this._pending,t);if(!this._pending.length)this._inFlight=false;};r.isSupported=function(){"use strict";return j.hasFileAPI();};l(r.prototype,{_limit:10});function s(t,u,v){"use strict";this._name=t;this._file=u;this._data=v;this._success=null;this._response=null;this._progressEvent=null;this._request=null;this._numRetries=0;this._aborted=false;}s.prototype.getName=function(){"use strict";return this._name;};s.prototype.getFile=function(){"use strict";return this._file;};s.prototype.setFile=function(t){"use strict";this._file=t;};s.prototype.getData=function(){"use strict";return this._data;};s.prototype.isComplete=function(){"use strict";return this._success!==null;};s.prototype.isSuccess=function(){"use strict";return this._success===true;};s.prototype.getResponse=function(){"use strict";return this._response;};s.prototype.getProgressEvent=function(){"use strict";return this._progressEvent;};s.prototype.setAsyncRequest=function(t){"use strict";this._request=t;return this;};s.prototype.increaseRetryCount=function(){"use strict";this._numRetries++;return this;};s.prototype.getRetryCount=function(){"use strict";return this._numRetries;};s.prototype.isWaiting=function(){"use strict";return !this._request;};s.prototype.isAborted=function(){"use strict";return this._aborted;};s.prototype.abort=function(){"use strict";this._request=null;this._aborted=true;};s.prototype.handleSuccess=function(t){"use strict";this._success=true;this._response=t;this._progressEvent=null;return this;};s.prototype.handleFailure=function(t){"use strict";this._success=false;this._response=t;this._progressEvent=null;return this;};s.prototype.handleProgress=function(event){"use strict";this._progressEvent=event;return this;};e.exports=r;},null);
__d("AsyncUploadRequest",["AsyncUploadBase"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.setFiles=function(k){"use strict";this._files=g.parseFiles(k);return this;};j.prototype.send=function(){"use strict";if(this._inFlight)return;this._inFlight=true;this._uploads=[];for(var k in this._files)this._files[k].forEach(function(l){this._uploads.push(this._createFileUpload(k,l));}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];if(this._uploads.length){this._processQueue();}else this._processUpload(this._createFileUpload(null,null));};j.prototype._processQueue=function(){"use strict";i._processQueue.call(this);if(!this._pending.length&&!this._waiting.length)this.inform('complete',this._uploads);};j.isSupported=function(){"use strict";return g.isSupported();};e.exports=j;},null);
__d("FileForm",["ArbiterMixin","AsyncRequest","AsyncResponse","AsyncUploadRequest","BehaviorsMixin","CurrentUser","DataStore","DOMQuery","Event","Form","JSONPTransport","Parent","URI","copyProperties","mixin","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){function w(ca){var da={},ea=n.scry(ca,'input[type="file"]');ea.forEach(function(fa){da[fa.name]=fa.files;});return da;}function x(ca){var da=n.scry(ca,'input[type="file"]');da.forEach(function(ea){ea.files=null;});}var y=u(g,k);for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca,da,ea){"use strict";if(ca.getAttribute('rel')==='async')throw new Error('FileForm cannot be used with Primer forms.');if(ca.getAttribute('method').toUpperCase()!=='POST')throw new Error('FileForm must be used with POST forms.');this._form=ca;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding='multipart/form-data';this._files=null;da&&this.enableBehaviors(da);this._options=ea||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[o.listen(this._form,'submit',this._submit.bind(this)),o.listen(this._form,'click',this._click.bind(this))];m.set(this._form,'FileForm',this);}ba.prototype.getRoot=function(){"use strict";return this._form;};ba.prototype.setAllowCrossOrigin=function(ca){"use strict";this._allowCrossOrigin=!!ca;return this;};ba.prototype.setUploadInParallel=function(ca){"use strict";this._uploadInParallel=!!ca;return this;};ba.prototype.setConcurrentLimit=function(ca){"use strict";this._concurrentLimit=ca;return this;};ba.prototype.setPreprocessHandler=function(ca){"use strict";this._preprocessHandler=ca;return this;};ba.prototype.setNetworkErrorRetryLimit=function(ca){"use strict";this._retryLimit=ca;return this;};ba.prototype.setFiles=function(ca){"use strict";this._files=ca;return this;};ba.prototype.canUseXHR=function(){"use strict";var ca='FormData' in window;if(ca)if(!s(this._form.action).isSameOrigin()&&!this._allowCrossOrigin)ca=false;return ca;};ba.prototype._submit=function(event){"use strict";if(this.inform('submit')===false){event.prevent();return;}return this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame(event);};ba.prototype._click=function(event){"use strict";var ca=event.getTarget();while(n.isElementNode(ca)){if(ca.type==='submit'){this._clickTarget=ca;setTimeout(this._unclick.bind(this),0);break;}ca=ca.parentNode;}};ba.prototype._unclick=function(){"use strict";this._clickTarget=null;};ba.prototype._sendViaFrame=function(event){"use strict";var ca=this._request=new h();ca.setStatusElement(this._getStatusElement());ca.addStatusIndicator();ca.setOption('useIframeTransport',true);var da=ca.handleResponse.bind(ca),ea=new q('iframe',this._form.action,da),fa=ea.getTransportFrame(),ga=ea.getRequestURI().addQueryData({__iframe:true,__user:l.getID()});this._form.setAttribute('action',ga.toString());this._form.setAttribute('target',fa.name);ca.setJSONPTransport(ea);ca.setURI(ga);ca.setHandler(this.success.bind(this,null));ca.setErrorHandler(this.failure.bind(this,null));ca.setInitialHandler(v(this.initial,this,null));};ba.prototype._sendViaXHR=function(event){"use strict";var ca;if(this._uploadInParallel&&j.isSupported()){ca=new j().setPreprocessHandler(this._preprocessHandler).setData(p.serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);if(this._concurrentLimit)ca.setLimit(this._concurrentLimit);if(this._files){ca.setFiles(this._files);}else ca.setFiles(w(this._form));var da=[ca.subscribe('progress',function(ia,ja){this.progress(ja,ja.getProgressEvent());}.bind(this)),ca.subscribe('initial',function(ia,ja){this.initial(ja,ja.getResponse());}.bind(this)),ca.subscribe('success',function(ia,ja){this.success(ja,ja.getResponse());}.bind(this)),ca.subscribe('start',function(ia,ja){this.inform('start',{upload:ja});}.bind(this)),ca.subscribe('failure',function(ia,ja){this.failure(ja,ja.getResponse());return false;}.bind(this)),ca.subscribe('complete',function(){while(da.length)da.pop().unsubscribe();})];}else{var ea;if(this._files){ea=p.createFormData(p.serialize(this._form,this._clickTarget));var fa=j.parseFiles(this._files);for(var ga in fa){var ha=fa[ga];if(ha.length===1){ea.append(ga,ha[0]);}else{ga=ga+'[]';ha.forEach(function(ia){ea.append(ga,ia);});}}}else ea=p.createFormData(this._form,this._clickTarget);ca=new h().setRawData(ea).setHandler(this.success.bind(this,null)).setErrorHandler(this.failure.bind(this,null)).setUploadProgressHandler(this.progress.bind(this,null)).setInitialHandler(v(this.initial,this,null));}ca.setAllowCrossOrigin(this._allowCrossOrigin).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=ca;event&&event.prevent();};ba.prototype.forceSendViaXHR=function(){"use strict";return this._sendViaXHR(null);};ba.prototype.initial=function(ca){"use strict";return this.inform('initial',{upload:ca});};ba.prototype.success=function(ca,da){"use strict";var ea={response:da,upload:ca};if(this.inform('success',ea)!==false)o.fire(this._form,'success',ea);this._cleanup();};ba.prototype.failure=function(ca,da){"use strict";var ea={response:da,upload:ca};if(this.inform('failure',ea)!==false)if(o.fire(this._form,'error',ea)!==false)i.defaultErrorHandler(da);this._cleanup();};ba.prototype.progress=function(ca,event){"use strict";this.inform('progress',{event:event,upload:ca});};ba.prototype.abort=function(){"use strict";if(this._request){this._request.abort();this._cleanup();}};ba.prototype.clear=function(){"use strict";x(this._form);};ba.prototype.destroy=function(){"use strict";this._cleanup();while(this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;m.remove(this._form,'FileForm');};ba.prototype._cleanup=function(){"use strict";this._request=null;};ba.prototype._getStatusElement=function(){"use strict";return r.byClass(this._form,'stat_elem')||this._form;};ba.getInstance=function(ca){"use strict";return m.get(ca,'FileForm');};t(ba,{EVENTS:['start','submit','initial','progress','success','failure']});e.exports=ba;},null);
__d("submitForm",["DOM"],function(a,b,c,d,e,f,g){var h=function(i){var j=g.scry(i,'input[type="submit"]')[0];if(j){j.click();}else{j=g.create('input',{type:'submit',className:'hidden_elem'});g.appendContent(i,j);j.click();g.remove(j);}};e.exports=h;},null);
__d("FileInputUploader",["ArbiterMixin","DOM","DTSG","FileForm","Form","copyProperties","mixin","submitForm"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;function r(s,t){"use strict";this._inputElem=s;this._form_container=t?t:document.body;this._data={};}r.prototype.setInput=function(s){"use strict";this._inputElem=s;return this;};r.prototype.setURI=function(s){"use strict";this._uri=s;return this;};r.prototype.setData=function(s){"use strict";this._data=s;return this;};r.prototype.setPreprocessHandler=function(s){"use strict";this._preprocessHandler=s;return this;};r.prototype.setNetworkErrorRetryLimit=function(s){"use strict";this._retryLimit=s;return this;};r.prototype.setFiles=function(s){"use strict";this._files=s;return this;};r.prototype.setAllowCrossOrigin=function(s){"use strict";this._allowCrossOrigin=!!s;return this;};r.prototype.setUploadInParallel=function(s){"use strict";this._uploadInParallel=!!s;return this;};r.prototype.setConcurrentLimit=function(s){"use strict";this._concurrentLimit=s;return this;};r.prototype.send=function(){"use strict";this._createForm();var s=this._inputElem.cloneNode(false);h.replace(this._inputElem,s);h.appendContent(this._formElem,this._inputElem);h.appendContent(this._form_container,this._formElem);n(this._formElem);h.replace(s,this._inputElem);this._cleanup();};r.prototype._onFileFormEvent=function(s,t){"use strict";this.inform(s,t);};r.prototype._createForm=function(){"use strict";this._formElem=h.create('form',{action:this._uri,method:'post'});this._fileForm=new j(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(j.EVENTS,this._onFileFormEvent.bind(this));k.createHiddenInputs(l({fb_dtsg:i.getToken()},this._data),this._formElem);};r.prototype._cleanup=function(){"use strict";this._fileForm.destroy();this._fileForm=null;h.remove(this._formElem);this._formElem=null;};l(r.prototype,{_formElem:null,_fileForm:null,_uri:null,_files:null,_allowCrossOrigin:false,_uploadInParallel:false,_concurrentLimit:null});e.exports=r;},null);
__d("Spotlight",["Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerTabIsolation","ModalLayer","Vector","classWithMixins","copyProperties","csx","cx","joinClasses","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=p(k,u(h));for(var w in v)if(v.hasOwnProperty(w))y[w]=v[w];var x=v===null?null:v.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=v;function y(aa,ba){"use strict";v.call(this,aa,ba);this.stageMinSize=new o(0,0);this.stagePadding=new o(0,0);}y.prototype._buildWrapper=function(aa,ba){"use strict";var ca=t("_n8 _3qx",aa.rootClassName);return (j.div({className:ca},j.div({className:"_n9"},ba)));};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([z,l,m,n]);};y.prototype.getContentRoot=function(){"use strict";if(!this._content)this._content=i.find(this.getRoot(),"div._n3");return this._content;};y.prototype.configure=function(aa){"use strict";if(aa.stageMinSize)this.stageMinSize=aa.stageMinSize;if(aa.stagePadding)this.stagePadding=aa.stagePadding;};y.prototype.onContentLoaded=function(){"use strict";this.inform('content-load');};y.prototype.updatePermalink=function(aa){"use strict";this.inform('permalinkchange',aa);};q(y.prototype,{stageMinSize:null,stagePadding:null});function z(aa){"use strict";this._layer=aa;}z.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(['show','hide'],function(aa,ba){if(aa==='show'){g.inform('layer_shown',{type:'Spotlight'});}else g.inform('layer_hidden',{type:'Spotlight'});});};z.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};q(z.prototype,{_subscription:null});e.exports=y;},null);