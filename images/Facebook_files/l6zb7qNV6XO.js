/*!CK:3817232749!*//*1418634468,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Wvay1"]); }

__d("FollowLink",["Arbiter","CSS","ge"],function(a,b,c,d,e,f,g,h,i){var j={subscribeEvents:function(k,l,m){g.subscribe(['FollowUser','UnfollowUser'],function(event,n){if(n.profile_id!=k)return;var o=i(l),p=i(m),q=event=='FollowUser';o&&h.conditionShow(o,!q);p&&h.conditionShow(p,q);});}};e.exports=j;},null);
__d("XPartnersReviewSkipJobAsyncControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/review\/ajax\/skip_job\/",{});},null);