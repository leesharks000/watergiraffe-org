/* M3: deterministic presence intensification. Never random, never announced. */
(function(){
  var n = 0;
  try { n = parseInt(localStorage.getItem('wg_audits')||'0',10)||0; } catch(e){}
  var base = parseFloat(getComputedStyle(document.body).getPropertyValue('--glow'))||0.35;
  var g = Math.min(base + 0.05*Math.min(n,5), 0.85);
  document.body.style.setProperty('--glow', g.toFixed(2));
  var mh = 26 + 2*Math.min(n,5);
  if(document.body.classList.contains('vault')) mh += 8;
  if(document.body.classList.contains('lost')) mh += 20;
  document.body.style.setProperty('--mark-h', mh+'px');
})();
