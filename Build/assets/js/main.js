(function(){
'use strict';
const $ = (s,c=document) => c.querySelector(s);
const $$ = (s,c=document) => [...c.querySelectorAll(s)];

/* Loading Screen */
window.addEventListener('load',()=>{
  const ls=$('#loading-screen');
  if(ls){setTimeout(()=>ls.classList.add('hidden'),1100);}
});

/* Navbar scroll */
const nav=$('.navbar');
if(nav){
  window.addEventListener('scroll',()=>{
    nav.classList.toggle('scrolled',window.scrollY>20);
    updateActiveNav();
  });
}

/* Active nav by scroll position */
function updateActiveNav(){
  const sections=$$('section[id]');
  let cur='';
  sections.forEach(s=>{
    if(window.scrollY>=s.offsetTop-120) cur=s.id;
  });
  $$('.nav-a,.m-a').forEach(a=>{
    a.classList.remove('act');
    if(a.getAttribute('href')==='#'+cur) a.classList.add('act');
  });
}

/* Mobile menu */
const menuBtn=$('#mob-btn'), mMenu=$('#mobile-menu');
if(menuBtn&&mMenu){
  menuBtn.addEventListener('click',e=>{
    e.stopPropagation();
    const open=mMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',e=>{
    if(!menuBtn.contains(e.target)&&!mMenu.contains(e.target))
      mMenu.classList.remove('open');
  });
  $$('.m-a',mMenu).forEach(a=>a.addEventListener('click',()=>mMenu.classList.remove('open')));
}

/* Scroll animations - IntersectionObserver */
const animObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('vis');});
},{threshold:0.1,rootMargin:'0px 0px -48px 0px'});
$$('.anim').forEach(el=>animObs.observe(el));

/* Progress bars */
const progObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const f=e.target;
      const w=f.dataset.w||'0%';
      f.style.width=w;
      progObs.unobserve(f);
    }
  });
},{threshold:0.3});
$$('.prog-fill').forEach(f=>progObs.observe(f));

/* Tabs */
$$('[data-tg]').forEach(group=>{
  const name=group.dataset.tg;
  const btns=$$('[data-tb]',group);
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      btns.forEach(b=>b.classList.remove('act'));
      btn.classList.add('act');
      const id=btn.dataset.tb;
      $$(`[data-tc="${name}"]`).forEach(c=>{
        c.classList.toggle('act',c.dataset.tid===id);
      });
    });
  });
});

/* Accordion */
$$('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const body=btn.nextElementSibling;
    const isOpen=btn.classList.contains('open');
    $$('.acc-btn').forEach(b=>{
      b.classList.remove('open');
      if(b.nextElementSibling) b.nextElementSibling.style.maxHeight='0';
    });
    if(!isOpen){
      btn.classList.add('open');
      body.style.maxHeight=body.scrollHeight+'px';
    }
  });
});

/* Modals */
$$('[data-modal]').forEach(t=>{
  t.addEventListener('click',()=>{
    const m=$('#'+t.dataset.modal);
    if(m) m.classList.add('open');
  });
});
$$('[data-close]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const m=btn.closest('.modal-bg');
    if(m) m.classList.remove('open');
  });
});
$$('.modal-bg').forEach(m=>{
  m.addEventListener('click',e=>{if(e.target===m) m.classList.remove('open');});
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') $$('.modal-bg.open').forEach(m=>m.classList.remove('open'));
});

/* Toast */
window.toast=function(msg,type='ok',dur=3000){
  let wrap=$('#toast-wrap');
  if(!wrap){
    wrap=document.createElement('div');
    wrap.id='toast-wrap';
    document.body.appendChild(wrap);
  }
  const t=document.createElement('div');
  const icons={ok:'✓',err:'✕',inf:'ℹ'};
  t.className=`toast t-${type}`;
  t.innerHTML=`<span>${icons[type]||'●'}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{
    t.style.animation='toastOut .3s ease forwards';
    setTimeout(()=>t.remove(),300);
  },dur);
};

/* Smooth scroll anchors */
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({top:el.offsetTop-76,behavior:'smooth'});
    }
  });
});

/* Counter animation */
const cntObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const target=+el.dataset.count;
      const dur=1400;
      const step=target/(dur/16);
      let cur=0;
      const t=setInterval(()=>{
        cur+=step;
        if(cur>=target){cur=target;clearInterval(t);}
        el.textContent=Math.floor(cur).toLocaleString()+(el.dataset.suffix||'');
      },16);
      cntObs.unobserve(el);
    }
  });
},{threshold:0.5});
$$('[data-count]').forEach(el=>cntObs.observe(el));

/* Toggle switches */
$$('.toggle').forEach(t=>{
  t.addEventListener('click',()=>{
    t.classList.toggle('on');
    t.setAttribute('aria-checked',t.classList.contains('on'));
  });
});

/* Chips */
$$('[data-chip-group]').forEach(group=>{
  const chips=$$('.chip',group);
  chips.forEach(c=>{
    c.addEventListener('click',()=>{
      chips.forEach(x=>x.classList.remove('act'));
      c.classList.add('act');
    });
  });
});

/* Calendar */
function initCalendar(wrapper){
  if(!wrapper) return;
  const days=$$('.cal-d',wrapper);
  days.forEach(d=>{
    if(d.classList.contains('dim')) return;
    d.addEventListener('click',()=>{
      days.forEach(x=>x.classList.remove('sel'));
      d.classList.add('sel');
      updateBookingSummary(d.textContent.trim());
    });
  });
}
initCalendar($('.calendar-wrap'));

/* Time slots */
$$('.slot-group').forEach(group=>{
  const slots=$$('.slot',group);
  slots.forEach(s=>{
    if(s.classList.contains('na')) return;
    s.addEventListener('click',()=>{
      slots.forEach(x=>x.classList.remove('sel'));
      s.classList.add('sel');
      updateBookingSummary(null,s.textContent.trim());
    });
  });
});

/* Booking summary update */
let bkDate='Sat, Oct 24', bkTime='10:30 AM';
function updateBookingSummary(d,t){
  if(d) bkDate=d;
  if(t) bkTime=t;
  const dateEl=$('#bk-date'), timeEl=$('#bk-time');
  if(dateEl) dateEl.textContent=bkDate;
  if(timeEl) timeEl.textContent=bkTime;
}

/* Responsive preview (body explorer device buttons) */
$$('[data-device]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $$('[data-device]').forEach(b=>b.classList.remove('act'));
    btn.classList.add('act');
  });
});

/* Copy buttons */
$$('[data-copy]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(btn.dataset.copy)
      .then(()=>toast('Copied!','ok',2000));
  });
});

/* Loading buttons */
$$('[data-lbtn]').forEach(btn=>{
  btn.addEventListener('click',function(){
    const orig=this.innerHTML;
    this.disabled=true;
    this.style.opacity='.7';
    this.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite"></span>';
    setTimeout(()=>{
      this.disabled=false;
      this.style.opacity='1';
      this.innerHTML=orig;
      toast(this.dataset.lbtn||'Done!','ok');
    },1500);
  });
});

/* Current page nav highlight */
const page=location.pathname.split('/').pop()||'index.html';
$$('.nav-a,.m-a').forEach(a=>{
  if(a.getAttribute('href')===page) a.classList.add('act');
});

})();
