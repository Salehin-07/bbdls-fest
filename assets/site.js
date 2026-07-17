
  (function(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      els.forEach(function(e){e.classList.add('in')});return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
    },{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  })();

  (function(){
    var btn=document.querySelector('.nav-toggle');
    var wrap=document.getElementById('primaryNav');
    if(!btn||!wrap)return;
    function close(){btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','মেনু খুলুন');wrap.classList.remove('open');}
    btn.addEventListener('click',function(){
      var open=wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'মেনু বন্ধ করো':'মেনু খুলুন');
    });
    wrap.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  })();
