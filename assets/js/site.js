(function(){
  // Mobile menu
  var t=document.querySelector('[data-nav-toggle]');
  if(t){t.addEventListener('click',function(){var o=document.body.classList.toggle('nav-open');t.setAttribute('aria-expanded',o?'true':'false');});}

  // Solid header after scrolling past the hero (home page)
  var h=document.querySelector('[data-header]');
  if(h&&document.body.classList.contains('page-home')){
    var on=function(){h.classList.toggle('is-solid',window.scrollY>80);};
    on();window.addEventListener('scroll',on,{passive:true});
  }

  // Lightbox
  var items=[],idx=0,lb,img,cap,count,lastFocus;
  function build(){
    lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Image viewer');
    lb.innerHTML='<span class="lb-count"></span><figure class="lb-fig"><img class="lb-img" alt=""></figure><p class="lb-cap"></p>'+
      '<button class="lb-close" type="button" aria-label="Close">×</button><button class="lb-prev" type="button" aria-label="Previous image">‹</button><button class="lb-next" type="button" aria-label="Next image">›</button>';
    document.body.appendChild(lb);
    img=lb.querySelector('.lb-img');cap=lb.querySelector('.lb-cap');count=lb.querySelector('.lb-count');
    lb.querySelector('.lb-close').onclick=close;
    lb.querySelector('.lb-prev').onclick=function(){go(-1)};
    lb.querySelector('.lb-next').onclick=function(){go(1)};
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('lb-fig'))close();});
    var sx=null;
    lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
    lb.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(dx<0?1:-1);sx=null;});
    document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);});
  }
  function show(){var b=items[idx];img.src=b.dataset.src;img.alt=b.querySelector('img').alt;cap.textContent=b.dataset.caption||'';count.textContent=(idx+1)+' / '+items.length;
    var n=items[(idx+1)%items.length];if(n){var p=new Image();p.src=n.dataset.src;}}
  function go(d){idx=(idx+d+items.length)%items.length;show();}
  function open(list,i){if(!lb)build();items=list;idx=i;lastFocus=document.activeElement;show();lb.hidden=false;document.body.classList.add('lb-on');lb.querySelector('.lb-close').focus();}
  function close(){lb.hidden=true;document.body.classList.remove('lb-on');if(lastFocus)lastFocus.focus();}
  document.querySelectorAll('[data-gallery]').forEach(function(g){
    var list=Array.prototype.slice.call(g.querySelectorAll('.g-open'));
    list.forEach(function(b,i){b.addEventListener('click',function(){open(list,i);});});
  });

  // Discourage casual image saving (right-click) — not a real protection
  document.addEventListener('contextmenu',function(e){if(e.target.tagName==='IMG')e.preventDefault();});
})();
