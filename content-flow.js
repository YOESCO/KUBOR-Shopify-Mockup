document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Size guide mock calculator.
  const height=$('[data-size-height]'), discipline=$('[data-size-discipline]'), result=$('[data-size-result]'), note=$('[data-size-note]');
  const calcSize=()=>{if(!height||!discipline||!result)return;const h=Number(height.value),d=discipline.value;let size=h<165?'S':h<175?'M':h<185?'L':'XL';if(d==='road'&&h<170)size='S';if(d==='road'&&h>=170&&h<180)size='M';if(d==='road'&&h>=180)size='L';if(d==='kids')size=h<115?'16”':h<130?'20”':'24”';result.textContent=size;if(note)note.textContent=d==='kids'?'Confirma altura y capacidad de control; no compres demasiado grande.':'Si estás entre tallas, compara reach y stack antes de decidir.'};
  height?.addEventListener('input',calcSize);discipline?.addEventListener('change',calcSize);calcSize();

  // Editorial filters.
  let editorialFilter='all';
  const editorialItems=$$('[data-editorial-item]');
  const filterEditorial=()=>editorialItems.forEach(x=>x.hidden=editorialFilter!=='all'&&x.dataset.category!==editorialFilter);
  $$('[data-editorial-filter]').forEach(b=>b.addEventListener('click',()=>{$$('[data-editorial-filter]').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');editorialFilter=b.dataset.editorialFilter;filterEditorial()}));

  // Bike finder / quiz.
  const quiz=$('[data-bike-quiz]');
  if(quiz){
    const steps=$$('[data-quiz-step]',quiz);let current=0;const answers={};
    const show=()=>{steps.forEach((s,i)=>s.hidden=i!==current);const bar=$('[data-quiz-progress]',quiz);if(bar)bar.style.width=`${Math.min(100,((current+1)/steps.length)*100)}%`;const count=$('[data-quiz-count]',quiz);if(count)count.textContent=`${Math.min(current+1,steps.length)} / ${steps.length}`};
    quiz.addEventListener('click',e=>{const opt=e.target.closest('[data-quiz-option]');if(opt){const step=opt.closest('[data-quiz-step]');step.querySelectorAll('[data-quiz-option]').forEach(x=>x.classList.remove('is-active'));opt.classList.add('is-active');answers[step.dataset.quizStep]=opt.dataset.quizOption;const next=step.querySelector('[data-quiz-next]');if(next)next.disabled=false;return}const next=e.target.closest('[data-quiz-next]');if(next){if(current<steps.length-1){current++;show()}else renderQuizResult()}const back=e.target.closest('[data-quiz-back]');if(back&&current>0){current--;show()}});
    const renderQuizResult=()=>{const resultBox=$('[data-quiz-result]',quiz);if(!resultBox)return;const terrain=answers.terrain,use=answers.use,style=answers.style;let title='MTB Sport',desc='Versátil para ciudad, caminos y montaña recreativa.',href='discipline-mtb.html';if(terrain==='road'){title=style==='speed'?'Road Race':'Road Endurance';desc='Eficiencia en asfalto con geometría según postura y distancia.';href='discipline-road.html'}else if(terrain==='mixed'){title='Gravel Adventure';desc='Para combinar asfalto, terracería y recorridos largos.';href='discipline-gravel.html'}else if(terrain==='city'){title=use==='daily'?'Commuter':'Fitness';desc=use==='daily'?'Comodidad y utilidad para movilidad diaria.':'Ligera y rápida para ciudad y entrenamiento.';href=use==='daily'?'discipline-commuter.html':'discipline-fitness.html'}else if(terrain==='trail'){title=style==='control'?'Trail':'XC';desc=style==='control'?'Más estabilidad y recorrido para terreno técnico.':'Eficiencia y velocidad para XC.';href='discipline-mtb.html'}resultBox.innerHTML=`<div class="k-eyebrow" style="color:#008da1">Tu punto de partida</div><h2 class="k-display" style="font-size:44px;line-height:.95;text-transform:uppercase;margin:7px 0">${title}</h2><p style="font-size:11px;color:#687681;line-height:1.6">${desc}</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><a href="${href}" class="k-btn k-btn-dark">Explorar categoría</a><a href="compare.html" class="k-btn k-btn-light-outline">Comparar</a></div>`;resultBox.hidden=false;$$('[data-quiz-step]',quiz).forEach(x=>x.hidden=true)};
    show();
  }

  // Knowledge cards search.
  const ksearch=$('[data-knowledge-search]');
  const kcards=$$('[data-knowledge-card]');
  ksearch?.addEventListener('input',()=>{const q=ksearch.value.trim().toLowerCase();kcards.forEach(c=>c.hidden=q&&!c.textContent.toLowerCase().includes(q))});

  window.lucide?.createIcons();
});