document.addEventListener('DOMContentLoaded',()=>{
  const forms=[...document.querySelectorAll('[data-kubor-form]')];
  if(!forms.length)return;
  const show=(form,text,type='success')=>{const box=form.querySelector('[data-form-message]');if(!box)return;box.textContent=text;box.classList.remove('hidden','border-rose-200','bg-rose-50','text-rose-700','border-emerald-200','bg-emerald-50','text-emerald-700');if(type==='error')box.classList.add('border-rose-200','bg-rose-50','text-rose-700');else box.classList.add('border-emerald-200','bg-emerald-50','text-emerald-700')};
  forms.forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      let bad=null;
      form.querySelectorAll('[required]').forEach(el=>{el.classList.remove('border-rose-400','ring-2','ring-rose-100');if(!bad&&!String(el.value||'').trim()){bad=el;el.classList.add('border-rose-400','ring-2','ring-rose-100')}});
      if(bad){bad.focus();show(form,'Revisa los campos obligatorios antes de continuar.','error');return}
      const submit=form.querySelector('[type="submit"]');const old=submit?.textContent;if(submit){submit.disabled=true;submit.textContent='Guardando…'}
      setTimeout(()=>{if(submit){submit.disabled=false;submit.textContent=old}show(form,'Cambios guardados correctamente.');},550)
    });
  });
});