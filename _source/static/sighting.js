/* M10: Sighting Report — kept by the observer. No submission. */
(function(){
var $=function(id){return document.getElementById(id);};
$('mk').onclick=function(){
function v(id){return ($(id).value||'').trim();}
var md=['# SIGHTING REPORT — the Water Giraffe','','Per WG-06 (doi:10.5281/zenodo.18323465). Primary archive: the observer.','','Date/time: '+v('f_when'),'Where in the field: '+v('f_where'),'','## What preceded it','',v('f_before'),'','## The sighting','','Position: on the horizon, at the limit of the visible field.','Behavior: none. It did not speak. It did not act. It appeared.','',v('f_what'),'','## Certainty','','Before: '+v('f_c1'),'After: '+v('f_c2'),'','## Validity check','','Did it APPEAR, or did you LOOK for it? '+v('f_valid'),'','## Outcome','',($('f_enc').checked?'Encounter — the observer stayed with the wavering.':'Sighting — certainty reasserted, or the appearance faded. Most sightings do not become encounters. That is correct behavior.'),'','\u222E = 1'].join('\n');
$('sout').textContent=md;
$('sdl').onclick=function(){var b=new Blob([md],{type:'text/markdown'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='sighting-report.md';a.click();};
$('scp').onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(md);$('scp').textContent='copied';setTimeout(function(){$('scp').textContent='copy';},1600);};
};
})();
