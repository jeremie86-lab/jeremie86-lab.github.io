(function(){
  var form=document.querySelector('[data-gallery-form]'); if(!form) return;
  var input=form.querySelector('input'), msg=document.querySelector('[data-gallery-msg]');
  var data=[]; try{data=JSON.parse(document.getElementById('gallery-data').textContent)||[];}catch(e){}
  var T=JSON.parse(form.getAttribute('data-i18n'));
  var enc=new TextEncoder();
  function norm(c){return (c||'').toUpperCase().replace(/[^A-Z0-9]/g,'');}
  function hex(buf){return Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');}
  function b64(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';var bin=atob(s),u=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return u;}
  function say(t,err){msg.textContent=t;msg.hidden=!t;msg.classList.toggle('is-error',!!err);}
  async function open(raw){
    var code=norm(raw); if(code.length<6){say(T.short,true);return;}
    if(!window.crypto||!crypto.subtle){say(T.browser,true);return;}
    say(T.wait,false);
    var id=hex(await crypto.subtle.digest('SHA-256',enc.encode('jsgallery:'+code))).slice(0,16);
    var e=data.find(function(x){return x&&x.key&&x.key.split('.')[1]===id;});
    if(!e){say(T.unknown,true);return;}
    if(e.expires){var end=new Date(String(e.expires).slice(0,10)+'T23:59:59');if(end<new Date()){say(T.expired,true);return;}}
    try{
      var p=e.key.split('.'), iv=b64(p[2]), ct=b64(p[3]);
      var base=await crypto.subtle.importKey('raw',enc.encode(code),'PBKDF2',false,['deriveKey']);
      var key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:enc.encode('jsgallery:'+id),iterations:200000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
      var url=new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:iv},key,ct));
      if(!/^https:\/\//.test(url)) throw 0;
      say(T.go,false); location.assign(url);
    }catch(err){say(T.unknown,true);}
  }
  form.addEventListener('submit',function(ev){ev.preventDefault();open(input.value);});
  function fromHash(){var h=decodeURIComponent((location.hash||'').slice(1));if(h){input.value=h;history.replaceState(null,'',location.pathname);open(h);}}
  fromHash(); window.addEventListener('hashchange',fromHash);
})();
