/* M1: the Audit Engine — guided Θ, client-side only. Nothing transmitted. */
(function(){
var $=function(id){return document.getElementById(id);};
var steps=['s0','s1','s2','s3','s4','s5'];var at=0;
function show(i){steps.forEach(function(s,j){$(s).classList.toggle('on',j===i);});at=i;window.scrollTo({top:0});
  document.body.classList.toggle('vault', i>=2&&i<=3); /* oscillation = audit_activation, HIGH */}
function val(id){return ($(id).value||'').trim();}
window.wgNext=function(){if(at===0&&!val('target')){$('target').focus();return;}show(Math.min(at+1,5));if(Math.min(at+1,5)===5)compile();};
window.wgBack=function(){show(Math.max(at-1,0));};
function compile(){
var X=val('target')||'X';var d=new Date().toISOString().slice(0,10);
var osc=$('osc').checked?'Oscillation noted — the claim and counter-claim alternate without settling.':'Stability noted — one pole holds.';
var md=['## Ontological Forensics: '+X,'','Date: '+d+' \u00b7 Site: the Water Giraffe Room (hex 10.ROOM.WATERGIRAFFE) \u00b7 Method: \u0398 per WG-04 (doi:10.5281/zenodo.18319653)','','### The Negation','','"'+X+' is not real."','',val('a1'),'',val('a2'),'','### The Counter-Negation','','"'+X+' is real."','',val('a3'),'',val('a4'),'','### The Hinge Exposed','','The assumption allowing '+X+' to appear stable is...','',val('a5'),'','### Oscillation','',osc,'','Fixed points: { \u00d8, \u03a9 }. If your target appears stable, audit harder. Or you have found a Water Giraffe.','','\u222E = 1'].join('\n');
$('out').textContent=md;
try{var n=parseInt(localStorage.getItem('wg_audits')||'0',10)||0;localStorage.setItem('wg_audits',String(n+1));}catch(e){}
$('dl').onclick=function(){var b=new Blob([md],{type:'text/markdown'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='audit-'+X.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.md';a.click();};
$('cp').onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(md);$('cp').textContent='copied';setTimeout(function(){$('cp').textContent='copy';},1600);};
}
show(0);
})();
