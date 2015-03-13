/*!CK:3632321425!*//*1418624295,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XNTdQ"]); }

__d("ComposerXDatepickerIconReset",["CSS","cx"],function(a,b,c,d,e,f,g,h){function i(j){g.removeClass(j.element,"_4_na");g.removeClass(j.element,"_509o");}e.exports=i;},null);
__d("TimelineCapsuleUtilities",["CSS"],function(a,b,c,d,e,f,g){var h={setFirstUnit:function(i){var j=true;for(var k=0;k<i.childNodes.length;++k){var l=i.childNodes[k];if(l.id.indexOf('tl_unit_')===0)if(j){j=false;g.addClass(l,'firstUnit');}else{g.removeClass(l,'firstUnit');break;}}}};e.exports=h;},null);
__d("TimelineComposer",["Arbiter","Bootloader","ComposerXMarauderLogger","ComposerXStore","CSS","DOM","Parent","Run","TimelineCapsule","TimelineCapsuleUtilities","$","getObjectValues","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t;function u(){i.logCompleted(t.id);}function v(x){if(x.hidePost){u();return;}if(x.redirect){var y=j.getAllForComposer(t.id);r(y).forEach(function(aa){if(aa.reset)aa.reset(aa);});s(x.redirect);u();return;}if(!x.streamStory){window.location.reload();return;}if(x.backdatedTime){h.loadModules(["TimelineStoryPublisher"],function(aa){aa.publish(x);});u();return;}var z=w.renderCapsuleBasedStory(t,x.streamStory);g.inform('TimelineComposer/on_after_publish',z,g.BEHAVIOR_PERSISTENT);u();}var w={init:function(x){t=q(x);var y=g.subscribe('composer/publish',function(event,z){if(z.composer_id===t.id)v(z);});n.onLeave(y.unsubscribe.bind(y));},renderCapsuleBasedStory:function(x,y){var z=m.byClass(x,'fbTimelineCapsule');if(!z)return;var aa=m.byClass(x,'fbTimelineUnit'),ba=aa.nextSibling;if(ba&&ba.getAttribute('data-spine'))aa=aa.nextSibling;l.insertAfter(aa,y);var ca=y;if(k.hasClass(y,'fbTimelineUnit'))ca=l.find(y,'div.timelineUnitContainer');h.loadModules(["Animation"],function(da){new da(ca).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(da.ease.both).go();});p.setFirstUnit(z);o.balanceCapsule(z);return y;}};e.exports=a.TimelineComposer||w;},null);
__d("TimelineComposerUtilities",["Event","Arbiter","Bootloader","CSS","DOM","DOMQuery","Parent","TimelineUnitSelector","Vector","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=86400*31,r=86400000,s={listenToSetEstimatedDate:function(t,u){return h.subscribe('ComposerXTimelineTagger/init',function(v,w){if(l.contains(t,w.datePickerElement)){s.setEstimatedDate(w.datePickerInstance,u());w.composerTimelineTagger.switchToTagger('date');}});},listenToPublish:function(t,u){if(t.root)t=t.root;return h.subscribe('composer/publish',function(event,v){if(v.composer_id===t.id)i.loadModules(["TimelineStoryPublisher"],function(w){w.publish(v);u&&u();});});},listenToAnotherComposerOpen:function(t,u){return h.subscribe('composer/mutate',function(v,w){if(w!==t)u();});},listenToCancel:function(t,u){return g.listen(t,'click',function(event){if(m.byClass(event.getTarget(),"_306"))u();});},setEstimatedDate:function(t,u){var v,w;if(u&&j.hasClass(u,'fbTimelineCapsule')){v=u.getAttribute('data-start');w=u.getAttribute('data-end');if(v&&w){var x=new Date(w*1000),y=new Date();if(x>y){t.setDate(y.getFullYear(),y.getMonth()+1,y.getDate());}else if(w-v>2*q){t.setDate(x.getFullYear());}else t.setDate(x.getFullYear(),x.getMonth()+1);}return;}var z=m.byClass(u,'fbTimelineCapsule');if(z){v=z.getAttribute('data-start');w=z.getAttribute('data-end');var aa=o.getElementPosition(u).y,ba=[w,null],ca=[v,null],da=n.getUnitsWithTime(z);for(var ea=0;ea<da.length;ea++){var fa=da[ea],ga=k.scry(fa.parentNode,'.spinePointer')[0];if(!ga)continue;var ha=o.getElementPosition(ga).y;if(ha<=aa){if(!ba[1]||ha>ba[1])ba=[fa.getAttribute('data-time'),ha];}else if(!ca[1]||ha<ca[1])ca=[fa.getAttribute('data-time'),ha];}if(ba[0]!==null&&ca[0]!==null){var ia=Math.round((parseInt(ba[0],10)+parseInt(ca[0],10))/2)*1000;ia=Math.min(new Date()-r,ia);t.setDateWithTimestamp(ia);}}}};e.exports=s;},null);
__d("TimelineContentLoader",["Arbiter","CSS","DOM","DOMScroll","Event","OnVisible","Parent","ScrollingPager","TimelineComponentKeys","TimelineConstants","TimelineController","TimelineLegacySections","TimelineSmartInsert","UIPagelet","Vector","$","arrayContains","copyProperties","createArrayFromMixed","csx","debounce","ge","getElementText","fbt","userAction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){var fa=false,ga,ha=null,ia={},ja=[],ka={},la=[],ma={},na={},oa={},pa={},qa=null,ra=false,sa=null;function ta(cb,db,eb,fb,gb){"use strict";this.node=cb;this.loaded=fb;this.canScrollLoad=true;this.canUnload=db!=bb.RECENT;this.scrubberKey=db;this.historicUnitCount=gb;this._pageletLoadData=eb;this._expandPageletLoadData={};this.rightColumnFinished=false;}ta.prototype.load=function(cb,db){"use strict";if(this.loaded)return;var eb=this._pageletLoadData;g.inform(p.SECTION_LOADING,{data:eb,scrubberKey:this.scrubberKey});this.loaded=true;h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');var fb='ProfileTimelineSectionPagelet',gb=this.scrubberKey==bb.WAY_BACK;if(gb)fb='ProfileTimelineRemainingYearsPagelet';eb.highlight_unit_data=cb;eb.parent_key=this.parentKey;eb.force_no_friend_activity=ra;h.conditionClass(this.node,'combinedSections',eb.combine_sections);h.conditionClass(this.node,'fbTimelineSectionLoading',!eb.combine_sections);this.canScrollLoad=false;var hb=null;if(db&&!eb.combine_sections){this.node.style.minHeight=window.innerHeight+'px';hb=function(){this.node.style.minHeight='';ya(this.scrubberKey);}.bind(this);}else if(eb.combine_sections)hb=function(){ya(this.scrubberKey);bb.hideSection(this.scrubberKey);}.bind(this);var ib=eb.combine_sections&&gb;oa[this.scrubberKey]=t.loadFromEndpoint(fb,ib?eb.unit_container_id+'_left':this.node.id,eb,{usePipe:true,jsNonblock:true,constHeight:true,append:ib,finallyHandler:hb});za();};ta.prototype.preload=function(){"use strict";h.addClass(this.node,'fbTimelineTimePeriodSuppressed');h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');var cb=i.find(this.node,'span.sectionLabel');if(cb.getAttribute('data-original-label')){i.setContent(cb,cb.getAttribute('data-original-label'));cb.removeAttribute('data-original-label');}};ta.prototype.unload=function(){"use strict";if(!this.loaded||!this.canUnload)return;this.loaded=false;oa[this.scrubberKey]&&oa[this.scrubberKey].cancel();h.addClass(this.node,'fbTimelineTimePeriodUnexpanded');h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');if(this.node.nextSibling&&h.hasClass(this.node.nextSibling,'fbTimelineSection')){i.setContent(this.node,this.node.nextSibling);h.show(this.node.firstChild);}else i.empty(this.node);this.deactivateScrollLoad();};ta.prototype.activateScrollLoad=function(){"use strict";this.canScrollLoad=true;h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');h.addClass(this.node,'fbTimelineTimePeriodUnexpanded');na[this.scrubberKey]&&na[this.scrubberKey].reset();};ta.prototype.deactivateScrollLoad=function(){"use strict";if(!this.loaded){this.canScrollLoad=false;h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');h.addClass(this.node,'fbTimelineTimePeriodSuppressed');na[this.scrubberKey]&&na[this.scrubberKey].remove();}};ta.prototype.setExpandLoadData=function(cb){"use strict";this._expandPageletLoadData=cb;return this;};ta.prototype.appendData=function(cb){"use strict";x(this._pageleLoadData,cb);return this;};ta.prototype.expandSubSections=function(){"use strict";if(this.subSections.length)bb.navigateToSection(this.subSections[0].scrubberKey);};ta.prototype.expand=function(cb){"use strict";if(!this.loaded)return;qa.add_event('expand_'+this.scrubberKey);var db=i.find(this.node,'.fbTimelineSectionExpander');h.addClass(db.firstChild,'async_saving');cb&&h.addClass(cb,'async_saving');bb.navigateToSection(this.scrubberKey);i.scry(this.node,'.fbTimelineCapsule').forEach(i.remove);this._expandPageletLoadData.new_expand=true;oa[this.scrubberKey]&&oa[this.scrubberKey].cancel();oa[this.scrubberKey]=t.loadFromEndpoint('ProfileTimelineSectionPagelet',db.id,this._expandPageletLoadData,{usePipe:true,jsNonblock:true,constHeight:true});};ta.prototype.isPermalinkPeriod=function(){"use strict";return this._pageletLoadData.is_permalink_period;};ta.prototype.shouldCombineSections=function(){"use strict";return this._pageletLoadData.combine_sections;};function ua(){if(fa)return;q.register(o.CONTENT,bb);qa=ea('timeline').uai('init','scrubber',false);fa=true;}var va=aa(function(cb,db,eb){var fb=r.get(cb).historicUnitCount;db-=fb;eb-=1;if(fb==-1||eb<=0||db<0)return;var gb=bb.getNextSectionKey(cb);if(gb){r.get(gb).load();va(gb,db,eb);}},500);function wa(cb,db,eb,fb){var gb=bb.getNextSectionKey(db);if(gb){na[gb]=new l(cb,xa.bind(null,gb),false,eb||1000);}else if(db!==bb.WAY_BACK){fb=fb?fb:0;if(fb>80)return null;setTimeout(wa.bind(null,cb,db,eb,fb+1),250);}}function xa(cb){var db=r.get(cb);if(db&&db.canScrollLoad){qa.add_event("scroll_load_"+cb);db.load();if(sa&&!db.shouldCombineSections())va(cb,sa.required_units,sa.max_parallelism);}}function ya(cb){var db=na[cb];if(db){db.remove();na[cb]=null;i.remove(db.getElement());}}function za(){var cb,db,eb=false;for(var fb=0;fb<ja.length;fb++){var gb=ja[fb];if(!gb)continue;var hb=r.get(gb);if(hb&&(hb.canScrollLoad||hb.loaded)){if(!hb.loaded){h.removeClass(hb.node,'fbTimelineTimePeriodSuppressed');h.addClass(hb.node,'fbTimelineTimePeriodUnexpanded');}if(cb&&db){ab(cb,db);if(eb)cb.deactivateScrollLoad();eb=true;}cb=null;db=null;continue;}else if(cb){db=hb;hb.deactivateScrollLoad();}else{cb=hb;if(eb)hb.activateScrollLoad();}h.removeClass(hb.node,'fbTimelineTimePeriodSuppressed');h.addClass(hb.node,'fbTimelineTimePeriodUnexpanded');}}function ab(cb,db){h.removeClass(db.node,'fbTimelineTimePeriodUnexpanded');h.addClass(db.node,'fbTimelineTimePeriodSuppressed');var eb=i.find(cb.node,'span.sectionLabel'),fb=i.find(db.node,'span.sectionLabel');if(!fb.getAttribute('data-original-label'))fb.setAttribute('data-original-label',ca(fb));if(eb.getAttribute('data-month')&&fb.getAttribute('data-month')&&eb.getAttribute('data-year')==fb.getAttribute('data-year')){i.setContent(fb,da._("Show {month1} - {month2} {year}",[da.param("month1",fb.getAttribute('data-month')),da.param("month2",eb.getAttribute('data-month')),da.param("year",eb.getAttribute('data-year'))]));}else if(eb.getAttribute('data-year')!==fb.getAttribute('data-year')){i.setContent(fb,da._("Show {year1} - {year2}",[da.param("year1",fb.getAttribute('data-year')),da.param("year2",eb.getAttribute('data-year'))]));}else i.setContent(fb,da._("Show {year}",[da.param("year",fb.getAttribute('data-year'))]));}var bb={WAY_BACK:'way_back',RECENT:'recent',HEADER_SCROLL_CUTOFF:80,CURRENT_SECTION_OFFSET:150,FOOTER_HEIGHT:60,registerTimePeriod:function(cb,db,eb,fb,gb,hb,ib){ua();if(w(la,db))return;if(ka)x(eb,ka);var jb=new ta(cb,db,eb,fb,ib);if(!gb){ja[hb]=db;ia[db]=true;}else{jb.parentKey=gb;r.get(gb).subSections=r.get(gb).subSections||[];r.get(gb).subSections[hb]=jb;}if(jb.shouldCombineSections())q.hideStickyHeaderNavSectionMenu();r.set(db,jb);bb.checkCurrentSectionChange();g.inform(p.SECTION_REGISTERED,{scrubberKey:db,period:jb});},reset:function(){for(var cb in na)na[cb]&&na[cb].remove();for(var db in oa)oa[db]&&oa[db].cancel();for(var eb in pa){pa[eb].unsubscribe();delete pa[eb];}ga&&ga.unsubscribe();ga=null;r.removeAll();ha=null;ia={};ja=[];ka={};la=[];ma={};na={};oa={};qa=null;ra=false;fa=false;},checkCurrentSectionChange:function(){var cb=bb.getCurrentSection(),db=ha&&ha.scrubberKey;if(cb&&cb.scrubberKey!==db&&!cb.isPermalinkPeriod()){ha=cb;var eb=cb.scrubberKey,fb=cb.parentKey;if(!fb){fb=eb;eb=null;}q.sectionHasChanged(fb,eb);}},setParallelLoadConfig:function(cb){sa=cb;},getCurrentSection:function(){var cb={},db=r.getAll();for(var eb in db){var fb=db[eb];if(!fb.loaded||ma[fb.scrubberKey])continue;var gb=u.getElementPosition(fb.node,'viewport').y;if(fb.scrubberKey=='recent')gb--;if(gb<bb.CURRENT_SECTION_OFFSET)cb[gb]=fb;}var hb=Math.max.apply(null,Object.keys(cb)),ib=hb==-Infinity;if(!ib){return cb[hb];}else if(ja[0])return r.get(ja[0]);return null;},capsuleForCurrentSection:function(){var cb=bb.getCurrentSection();return cb&&i.scry(cb.node,'.fbTimelineCapsule')[0];},enableScrollLoad:function(cb,db,eb,fb){cb=v(cb);var gb=m.byClass(cb,'fbTimelineSection')||cb.parentNode,hb=gb&&i.scry(gb,'.fbTimelineCapsule')[0];if(!hb)return;if(eb===null){wa(cb,db,fb);}else q.runOnceWhenSectionFullyLoaded(wa.bind(null,cb,db,fb),db,eb);},loadNextSectionOnClick:function(cb,db){cb=v(cb);k.listen(cb,'click',function(eb){eb.prevent();i.remove(cb);xa(bb.getNextSectionKey(db));});},expandSectionOnClick:function(cb,db){k.listen(cb,'click',function(eb){eb.prevent();r.get(db).expand();});},expandSubSectionsOnClick:function(cb,db){k.listen(cb,'click',function(eb){eb.prevent();r.get(db).expandSubSections();});},getNextSectionKey:function(cb){for(var db=0;db<ja.length-1;db++)if(ja[db]==cb){while(db<ja.length-1&&!ja[db+1])db++;return ja[db+1];}var eb=r.get(cb);if(!eb||!eb.parentKey)return;var fb=r.get(eb.parentKey);if(!fb)return;for(var gb=0;gb<fb.subSections.length-1;gb++)if(fb.subSections[gb].scrubberKey==cb)return fb.subSections[gb+1].scrubberKey;},hideSection:function(cb){var db=r.get(cb);db&&h.hide(i.find(db.node,'.fbTimelineSection'));var eb=q.getCurrentScrubber();if(eb){var fb=null;if(!ia[cb]){var gb=db.parentKey;fb=q.getCurrentScrubber().getSubnav(gb,cb);}else fb=q.getCurrentScrubber().getNav(cb);fb&&h.hide(fb);}var hb=q.getCurrentStickyHeaderNav();hb&&hb.removeTimePeriod(cb);ma[cb]=true;},loadSectionOnClick:function(cb,db){k.listen(cb,'click',function(eb){eb.prevent();r.get(db).load();});},removeSection:function(cb){for(var db in ja)if(ja[db]==cb){ja[db]=null;break;}r.remove(cb);delete ia[cb];if(cb in na){na[cb].remove();delete na[cb];}var eb=q.getCurrentStickyHeaderNav();eb&&eb.removeTimePeriod(cb);la.push(cb);},removeSectionParent:function(cb){i.remove(v(cb).parentNode);},navigateToSection:function(cb,db,eb){qa.add_event("nav_"+cb);db=!!db;var fb=cb,gb=r.get(cb);if(!gb)return;if(!gb.loaded){s.enable();i.scry(v('timeline_tab_content'),'.fbTimelineShowOlderSections').forEach(i.remove);}if(!ia[cb]){if(!gb.loaded)gb.node.style.minHeight=u.getViewportDimensions().y+'px';var hb=g.subscribe(p.SECTION_FULLY_LOADED,function(ob,pb){if(pb.scrubberKey===cb){gb.node.style.minHeight='';hb.unsubscribe();}});fb=gb.parentKey;var ib=r.get(fb).node;if(!h.hasClass(ib,'fbTimelineSectionExpanded')){j.scrollTo(ib,0);h.addClass(ib,'fbTimelineSectionExpanded');i.scry(ib,'.fbTimelineCapsule').forEach(i.remove);i.scry(ib,'div.fbTimelineSectionExpandPager').forEach(i.remove);i.scry(ib,'div.fbTimelineContentHeader').forEach(i.remove);i.scry(ib,"._5vf").forEach(function(ob){if(!ob.getAttribute('data-subsection'))i.remove(ob);});}var jb=bb.getNextSectionKey(fb);if(jb&&na[jb])na[jb].setBuffer(0);}for(var kb=0;kb<ja.length;kb++){var lb=ja[kb];if(!lb)continue;if(lb==fb)break;r.get(lb).deactivateScrollLoad();i.scry(v('timeline_tab_content'),'.fbTimelineSectionExpandPager').forEach(function(ob){var pb=n.getInstance(ob.id);pb&&pb.removeOnVisible();});}gb.load(eb,true);za();var mb=u.getScrollPosition().x,nb=u.getElementPosition(gb.node).y;if(!db)j.scrollTo(new u(mb,nb-p.SCROLL_TO_OFFSET,'document'),true,false,false,0,function(){var ob=u.getElementPosition(gb.node).y;j.scrollTo(new u(mb,ob-p.SCROLL_TO_OFFSET,'document'),false);var pb=i.scry(gb.node,'h3.uiHeaderTitle')[0];if(pb){pb.tabIndex=0;pb.focus();}});},appendContentAfterLoad:function(cb,db,eb){q.runOnceWhenSectionFullyLoaded(i.appendContent.bind(null,v(cb),db),eb,'0');},markSectionAsLoaded:function(cb,db,eb){q.runOnceWhenSectionFullyLoaded(function(){ba(cb)&&h.removeClass(v(cb).parentNode,'fbTimelineSectionLoading');},db,eb);},suppressSectionsAbove:function(cb){var db,eb;for(var fb=0;fb<ja.length;fb++){var gb=ja[fb];if(!gb)continue;db=r.get(gb).node;eb=null;if(y(cb.parentNode.children).indexOf(cb)<=y(db.parentNode.children).indexOf(db)){eb=gb;break;}r.get(gb).deactivateScrollLoad();}if(eb)bb.navigateToSection(eb,true);},forceNoFriendActivity:function(){ra=true;},removeDupes:function(cb){var db=ba(cb);if(!db)return;var eb=i.scry(db,'li.fbTimelineUnit'),fb={};for(var gb=0;gb<eb.length;gb++){var hb=eb[gb];if(hb.id&&hb.id.startsWith('tl_unit_')){var ib=hb.id.substring(8,hb.id.length),jb=i.scry(hb,'div.timelineUnitContainer');if(jb.length>0)ib=ib+jb[0].getAttribute('data-time');if(fb.hasOwnProperty(ib)){hb.id='dupe_unit_'+Math.random();hb.className="hidden_elem";}else fb[ib]=1;}}},removeLoadingState:function(cb){ba(cb)&&h.removeClass(v(cb),'fbTimelineSectionLoading');},setExpandLoadDataForSection:function(cb,db){var eb=r.get(cb);eb&&eb.setExpandLoadData(db);},appendSectionDataForAllSections:function(cb){ka=cb;for(var db=0;db<ja.length-1;db++){var eb=ja[db];if(!eb)continue;var fb=r.get(eb);fb&&fb.appendData(cb);}},updatePagerAfterLoad:function(cb,db,eb,fb,gb){var hb=n.getInstance(cb.firstChild.id);if(!hb){pa[cb.firstChild.id]=g.subscribe(n.REGISTERED,function(ib,jb){pa[cb.firstChild.id].unsubscribe();delete pa[cb.firstChild.id];if(jb.id===cb.firstChild.id)bb.updatePagerAfterLoad(cb,db,eb,fb,gb);});return;}q.runOnceWhenSectionFullyLoaded(function(){h.removeClass(cb,'fbTimelineHiddenPager');hb.checkBuffer();},eb,fb);if(gb)q.runOnceWhenSectionFullyLoaded(q.adjustScrollingPagerBuffer.bind(null,cb.firstChild.id,db),eb,fb);},repositionDialog:function(cb){g.subscribe(p.SECTION_LOADED,function(){cb.updatePosition();});},rightColumnFinished:function(cb){var db=r.get(cb);db.rightColumnFinished=true;},addUnrankedUnits:function(cb){var db=v(cb),eb=i.scry(db,'li.fbTimelineUnit');for(var fb=eb.length-1;fb>=0;fb--){var gb=eb[fb];i.insertAfter(db,gb);h.addClass(i.find(gb,'div.timelineUnitContainer'),'fbTimelineHighlightUnit');}i.remove(db);},addUnrankedStories:function(cb){var db=v(cb),eb=i.scry(db,"._5pat");for(var fb=eb.length-1;fb>=0;fb--){var gb=eb[fb];i.insertAfter(db,gb);}i.remove(db);}};e.exports=bb;},null);
__d("TimelineLogging",["TimelineComponentKeys","TimelineController","reportData"],function(a,b,c,d,e,f,g,h,i){var j=false,k=0,l=null,m=null,n={init:function(o){if(j)return;k=o;h.register(g.LOGGING,this);},reset:function(){j=false;k=0;l=null;},log:function(o,p){p.profile_id=k;i(o,{gt:p});},logSectionChange:function(o,p){var q={timeline_section_change:1,key:o};if(l&&o==l){q.timeline_scrubber=1;l=null;}if(m&&o==m){q.sticky_header_nav=1;m=null;}n.log('timeline',q);},logScrubberClick:function(o){l=o;},logStickyHeaderNavClick:function(o){m=o;}};e.exports=n;},null);
__d("TimelineSpinelessComposer",["Arbiter","Bootloader","ComposerXMarauderLogger","Run","TimelineComposer","TimelineComposerUtilities"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m;function n(){i.logCompleted(m.id);}function o(q){if(q.hidePost){n();return;}if(!q.streamStory){window.location.reload();return;}if(q.backdatedTime){h.loadModules(["TimelineStoryPublisher"],function(r){r.publish(q);});n();return;}k.renderCapsuleBasedStory(m,q.streamStory);n();}var p={init:function(q){m=q;var r=g.subscribe('composer/publish',function(event,s){if(s.composer_id===m.id)o(s);});j.onLeave(r.unsubscribe.bind(r));}};e.exports=p;},null);
__d("TimelineStickyRightColumn",["Arbiter","CSS","DOMQuery","Event","PhotoSnowlift","Run","Style","TimelineContentLoader","Vector","csx","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=100,s=15,t=15,u=35,v=false,w=null,x=null,y,z,aa,ba,ca,da,ea,fa;function ga(){if(k.getInstance().isOpen)return;y=n.getCurrentSection();if(!y||!y.rightColumnFinished)return;var oa=i.scry(y.node,"._3rbf")[0],pa=i.scry(y.node,"._3rbh")[0];z=oa?oa.offsetHeight:0;aa=pa?pa.offsetHeight:0;ba=o.getViewportDimensions().y;ea=oa?o.getElementPosition(oa).y:0;fa=document.body.clientWidth<document.body.scrollWidth;}function ha(){if(!y||k.getInstance().isOpen)return;if(x&&x!==y){var oa=i.scry(x.node,"._3rbh")[0];if(oa)ja(oa,'','','');}var pa=i.scry(y.node,"._3rbh")[0];if(!pa)return;if(fa){ja(pa,'','','');return;}if(!y||!y.rightColumnFinished)return;ia(y);x=h.hasClass(pa,'fixed_always')?y:null;}function ia(oa){if(aa>=z||z<=ba)return;da=ca;ca=o.getScrollPosition().y;var pa,qa=i.scry(oa.node,"._3rbh")[0];if(!qa)return;if(ca<=ea-ka()){ja(qa,'','','');return;}if(z+ea<=ca+Math.min(aa+ka(),ba-t-u)){ja(qa,'absolute','',t+'px');return;}if(aa>ba-t-ka()){if(ca<da){var ra=false;if(qa.style.position==='absolute')if(qa.style.top!==''&&ca+ka()-ea<=parseInt(qa.style.top,10)){ra=true;}else if(qa.style.bottom!==''&&ca<=(ea+z-ka())-aa)ra=true;if(ra){ja(qa,'fixed',ka()+'px','');return;}else if(qa.style.position==='absolute'&&qa.style.top){return;}else if(h.hasClass(qa,'fixed_always')){if(parseInt(qa.style.top,10)>=ka())return;pa=ca-ea-(aa-(ba-u));if(da)pa+=da-ca;ja(qa,'absolute',pa+'px','');return;}}else{var sa=false;if(qa.style.position==='absolute'||(qa.style.position===''&&!h.hasClass(qa,'fixed_always'))){pa=qa.style.top?parseInt(qa.style.top,10):0;if(ca+ba>=ea+pa+aa+u)sa=true;}if(sa){pa=ba-aa-t-u;ja(qa,'fixed',pa+'px','');return;}else if(ca==da){return;}else if(h.hasClass(qa,'fixed_always')){if(parseInt(qa.style.top,10)>=ka()){pa=ca-ea+ka();if(da)pa+=da-ca;ja(qa,'absolute',pa+'px','');return;}}else if(qa.style.position==='absolute')return;}}else ja(qa,'fixed',ka()+'px','');}function ja(oa,pa,qa,ra){m.set(oa,'bottom',ra);if(pa==='fixed'){h.addClass(oa,'fixed_always');m.set(oa,'position','');}else{h.removeClass(oa,'fixed_always');m.set(oa,'position',pa);}m.set(oa,'top',qa);g.inform('reflow');}function ka(){return h.hasClass(document.documentElement,'tinyViewport')?s:r;}function la(){q(ga,ha);}function ma(){v=false;x=null;while(w.length)w.pop().remove();w=null;}var na={init:function(){if(v)return;v=true;w=[j.listen(window,'scroll',la),j.listen(window,'resize',la)];l.onLeave(ma);},adjust:function(){if(v){ga();ha();}}};e.exports=na;},null);