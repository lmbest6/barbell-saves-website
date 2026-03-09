function toggleNav(){document.getElementById('mobNav').classList.toggle('open');}
function toggleFaq(btn){
  const ans=btn.nextElementSibling;
  const isOpen=ans.classList.contains('open');
  document.querySelectorAll('.fa.open').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.fq.open').forEach(q=>q.classList.remove('open'));
  if(!isOpen){ans.classList.add('open');btn.classList.add('open')}
}

async function submitForm(e){
  e.preventDefault();
  const form=e.target;
  const btn=form.querySelector('[type="submit"]');
  const orig=btn.textContent;
  btn.textContent='Sending...';
  btn.disabled=true;
  try {
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
    if(res.ok){
      form.style.display='none';
      document.getElementById('formSuccess').style.display='block';
    } else {
      btn.textContent='Error — Please Try Again';
      btn.disabled=false;
    }
  } catch {
    btn.textContent='Error — Please Try Again';
    btn.disabled=false;
  }
}

async function submitPTForm(e){
  e.preventDefault();
  const form=e.target;
  const btn=form.querySelector('[type="submit"]');
  btn.textContent='Adding you...';
  btn.disabled=true;
  try {
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
    if(res.ok){
      form.style.display='none';
      document.getElementById('ptSuccess').style.display='block';
    } else {
      btn.textContent='Error — Try Again';
      btn.disabled=false;
    }
  } catch {
    btn.textContent='Error — Try Again';
    btn.disabled=false;
  }
}

document.addEventListener('click',function(e){
  const nav=document.getElementById('mobNav');const tog=document.querySelector('.nav-toggle');
  if(nav.classList.contains('open')&&!nav.contains(e.target)&&!tog.contains(e.target))nav.classList.remove('open');
});
(function(){
  const path=window.location.pathname;
  const map={'/':'nav-home','/programs.html':'nav-programs','/insurance.html':'nav-insurance','/about.html':'nav-about','/blog.html':'nav-blog','/contact.html':'nav-contact'};
  const id=map[path]||'nav-home';
  const el=document.getElementById(id);
  if(el)el.classList.add('active');
})();
