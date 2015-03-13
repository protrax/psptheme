/*!CK:297805536!*//*1418625131,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CvO5Z"]); }

__d("AdsInsightsSummaryLabels",[],function(a,b,c,d,e,f){e.exports={};},null);
__d("FeedErrorDetection",["Banzai","DOM","csx","ge"],function(a,b,c,d,e,f,g,h,i,j){var k=0,l={},m=false,n=false;function o(event,q,r,s){var t={event:event,shouldLogDetail:q,site:'www'};if(q){t.intValues=r;t.normalValues=s;}g.post('feed_error_detection',t,{delay:0});}var p={registerFeedStories:function(q,r){if(q=='substream_0'){k=0;l={};m=false;n=false;}var s=h.scry(j(q),"._5jmm"),t=s.length;if(!t&&!m){if(!n){n=true;return;}if(!k){o('empty_feed_js',r,{},{});}else o('end_of_feed_js',r,r?{stories_count:k}:{},{});m=true;return;}n=false;for(var u=0;u<t;u++){var v=s[u],w=v.getAttribute('data-dedupekey'),x=v.getAttribute('data-ft');if(!w||!x)continue;if(w in l){var y={};if(r)y={dedupKey:w,ft_A:x,ft_B:l[w]};o('duplicate_stories',r,{},{dup_field:y});}else{l[w]=x;k++;}}}};e.exports=p;},null);