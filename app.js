'use strict';

const metrics = [
  { label: 'Hectares cadastrados', value: '1.254 ha', trend: '+18% no cenário simulado' },
  { label: 'Projetos ativos', value: '147', trend: '32 em implantação' },
  { label: 'Produtores', value: '328', trend: '61 novos cadastros' },
  { label: 'Empresas', value: '96', trend: '14 em consórcios' },
  { label: 'Carteira estimada', value: 'R$ 4,8 mi', trend: 'MVP demonstrativo' }
];

const areas = [
  { id:'ARE001', name:'Sítio Boa Vista', producer:'João Pereira', city:'Piracicaba', state:'SP', biome:'Mata Atlântica', area:3.4, type:'Pastagem degradada', method:'Restauração produtiva', score:92, status:'Disponível', potential:['PSA','Sementes','PFNM'], access:'Bom', regen:'Média', fitophys:'Floresta Estacional Semidecidual', coordinates:'-22.725, -47.649', note:'Área próxima a fragmento florestal, com potencial para enriquecimento e produção futura de sementes.' },
  { id:'ARE014', name:'Fazenda Esperança', producer:'Camila Ferraz', city:'Pindamonhangaba', state:'SP', biome:'Mata Atlântica', area:8.0, type:'Pasto abandonado', method:'Regeneração natural', score:95, status:'Projeto ativo', potential:['PSA','Água','PFNM'], access:'Bom', regen:'Alta', fitophys:'Floresta Ombrófila Densa', coordinates:'-22.924, -45.462', note:'Alta regeneração natural e proximidade de fragmentos, com prioridade hídrica.' },
  { id:'ARE010', name:'Sítio Buriti', producer:'Sandra Matos', city:'Analândia', state:'SP', biome:'Cerrado', area:3.6, type:'Cerrado degradado', method:'Muvuca', score:88, status:'Disponível', potential:['Sementes','PFNM'], access:'Médio', regen:'Média', fitophys:'Cerrado sensu stricto', coordinates:'-22.126, -47.662', note:'Área de Cerrado com aptidão para semeadura direta e enriquecimento produtivo.' },
  { id:'ARE021', name:'Sítio Ribeirão Verde', producer:'Osmar Batista', city:'Sete Barras', state:'SP', biome:'Mata Atlântica', area:4.2, type:'APP degradada', method:'Regeneração natural', score:94, status:'Disponível', potential:['PSA','Água','Fauna'], access:'Médio', regen:'Alta', fitophys:'Floresta Ombrófila Densa', coordinates:'-24.386, -47.927', note:'Área ciliar com forte potencial de segurança hídrica e recuperação assistida.' },
  { id:'ARE024', name:'Sítio Monte Alegre', producer:'Raquel Neves', city:'Franco da Rocha', state:'SP', biome:'Mata Atlântica', area:4.3, type:'Área com erosão', method:'Restauração produtiva', score:67, status:'Em análise', potential:['Solo','Biodiversidade'], access:'Ruim', regen:'Baixa', fitophys:'Floresta Estacional Semidecidual', coordinates:'-23.322, -46.729', note:'Requer estabilização do solo e avaliação de acesso antes da implantação.' },
  { id:'ARE025', name:'Sítio das Frutas', producer:'Bruno Martins', city:'Monte Mor', state:'SP', biome:'Mata Atlântica', area:2.9, type:'Monocultivo de baixo retorno', method:'Restauração produtiva', score:89, status:'Em análise', potential:['PFNM','Sementes'], access:'Bom', regen:'Média', fitophys:'Floresta Estacional Semidecidual', coordinates:'-22.946, -47.312', note:'Área adequada para sistema misto com espécies nativas alimentícias e condução da regeneração.' },
  { id:'ARE026', name:'Fazenda Água Fria', producer:'Cristina Paes', city:'Itirapina', state:'SP', biome:'Cerrado', area:6.8, type:'Área próxima a nascente', method:'Muvuca', score:91, status:'Disponível', potential:['Água','PSA','Biodiversidade'], access:'Médio', regen:'Média', fitophys:'Cerrado sensu stricto', coordinates:'-22.252, -47.822', note:'Área estratégica para segurança hídrica e composição de carteira territorial.' }
];

const companies = [
  { id:'DEM001', name:'Construtora Horizonte', sector:'Construção civil', city:'Piracicaba', biome:'Mata Atlântica', demand:'Condicionante ambiental', requiredArea:3.0, area:'3,0 ha', status:'Em análise', budget:75000 },
  { id:'DEM002', name:'Logística Anhanguera', sector:'Logística', city:'Campinas', biome:'Mata Atlântica', demand:'Compensação ambiental', requiredArea:5.0, area:'5,0 ha', status:'Match encontrado', budget:120000 },
  { id:'DEM026', name:'Águas do Interior', sector:'Saneamento', city:'São Carlos', biome:'Cerrado', demand:'ESG territorial', requiredArea:6.0, area:'6,0 ha', status:'Consórcio', budget:150000 },
  { id:'DEM013', name:'Indústria MetalVale', sector:'Indústria', city:'São José dos Campos', biome:'Mata Atlântica', demand:'TAC/TCRA', requiredArea:4.5, area:'4,5 ha', status:'Em análise', budget:110000 },
  { id:'DEM014', name:'Residencial Vale Verde', sector:'Loteamento', city:'Taubaté', biome:'Mata Atlântica', demand:'Condicionante', requiredArea:6.0, area:'6,0 ha', status:'Projeto ativo', budget:132000 },
  { id:'DEM018', name:'BioFarma Interior', sector:'Indústria', city:'Araraquara', biome:'Cerrado', demand:'Restauração voluntária', requiredArea:4.0, area:'4,0 ha', status:'Match encontrado', budget:95000 }
];

const projects = [
  { title:'Consórcio Vale do Paraíba', meta:'50 ha • 14 empresas', progress:68, status:'Em implantação' },
  { title:'Corredor Caipira', meta:'26 ha • 8 empresas', progress:42, status:'Estruturação' },
  { title:'Nascentes do Alto Tietê', meta:'18 ha • 6 empresas', progress:81, status:'Monitoramento' },
  { title:'Cerrado Produtivo', meta:'32 ha • 11 empresas', progress:55, status:'Captação' }
];

const consortia = [
  { name:'Vale do Paraíba', target:'50 ha', value:'R$ 1,25 mi', companies:14, progress:68, featured:true, biome:'Mata Atlântica', theme:'Segurança hídrica e conectividade' },
  { name:'Corredor Caipira', target:'26 ha', value:'R$ 640 mil', companies:8, progress:42, featured:false, biome:'Mata Atlântica', theme:'Sementes, PFNM e paisagem' },
  { name:'Cerrado Produtivo', target:'32 ha', value:'R$ 790 mil', companies:11, progress:55, featured:false, biome:'Cerrado', theme:'Bioeconomia e recuperação do solo' }
];

const opportunities = [
  { title:'PSA Segurança Hídrica', org:'Programa municipal simulado', place:'Piracicaba/SP', deadline:'30/08/2026', description:'Exemplo de incentivo a produtores com APPs e nascentes prioritárias para recuperação e proteção hídrica.' },
  { title:'Edital Bioeconomia Territorial', org:'Fundo socioambiental simulado', place:'Mata Atlântica', deadline:'15/09/2026', description:'Exemplo de apoio a cadeias de sementes, PFNM, viveiros comunitários e restauração produtiva.' },
  { title:'Chamada Restauração Produtiva', org:'Consórcio regional simulado', place:'Vale do Paraíba', deadline:'20/10/2026', description:'Exemplo de seleção de áreas com potencial para sistemas mistos, sementes e conectividade ecológica.' }
];

const plans = [
  { name:'Semente', price:'R$ 1,99', desc:'Apoio mensal básico', benefits:['Boletim digital','Mapa do projeto','Registro digital de apoio'] },
  { name:'Raiz', price:'R$ 4,99', desc:'Apoio territorial recorrente', benefits:['Tudo do plano Semente','Conteúdo de campo','Sorteios de visitas'] },
  { name:'Floresta', price:'R$ 9,99', desc:'Apoio ampliado', benefits:['Tudo do plano Raiz','Cesta anual simbólica','Visita guiada prioritária'] }
];

const recipeSpecies = {
  'Mata Atlântica': [
    ['Ingá','Inga vera','Preenchimento e fauna'],
    ['Cambuci','Campomanesia phaea','PFNM e fauna'],
    ['Jatobá','Hymenaea courbaril','Diversidade estrutural'],
    ['Araçá','Psidium cattleianum','PFNM e conectividade']
  ],
  'Cerrado': [
    ['Pequi','Caryocar brasiliense','PFNM e fauna'],
    ['Cagaita','Eugenia dysenterica','PFNM e diversidade'],
    ['Barbatimão','Stryphnodendron adstringens','Solo e estrutura'],
    ['Ipê-amarelo','Handroanthus ochraceus','Diversidade estrutural']
  ]
};

const titles = {
  dashboard:'Visão geral', areas:'Áreas territoriais', empresas:'Empresas', consorcios:'Consórcios', receita:'Receita Nativa', psa:'PSA e editais', ecoplus:'Eco Plus', monitoramento:'Monitoramento'
};

const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');
const modal = document.getElementById('genericModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFields = document.getElementById('modalFields');
const modalSubmit = document.getElementById('modalSubmit');
const areaDrawer = document.getElementById('areaDrawer');
const drawerContent = document.getElementById('drawerContent');
let modalMode = 'area';
let currentRecipeSummary = 'Plantio misto + condução da regeneração; intensidade média; 35–50 espécies; custo estimado de R$ 23,1 mil/ha.';

function setView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`${view}-view`)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view));
  document.getElementById('pageTitle').textContent = titles[view] || 'Novaexi';
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.hidden = false;
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => setView(el.dataset.view)));
menuToggle.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
sidebarOverlay.addEventListener('click', closeSidebar);

function renderMetrics() {
  document.getElementById('metricsGrid').innerHTML = metrics.map(m => `
    <article class="metric-card"><span>${m.label}</span><strong>${m.value}</strong><small>${m.trend}</small></article>
  `).join('');
}

function renderProjects() {
  document.getElementById('projectList').innerHTML = projects.map(p => `
    <div class="project-item">
      <div class="project-top"><strong>${p.title}</strong><span class="badge ${p.progress > 70 ? 'success' : 'warning'}">${p.status}</span></div>
      <p>${p.meta}</p>
      <div class="progress" aria-label="${p.progress}% concluído"><span style="width:${p.progress}%"></span></div>
    </div>
  `).join('');
}

function renderBars() {
  const sectors = [['Construção civil',82],['Logística',68],['Indústria',57],['Saneamento',38],['Cooperativas',31]];
  document.getElementById('sectorBars').innerHTML = sectors.map(([name,value]) => `
    <div class="bar-row"><span>${name}</span><div class="bar-track"><span style="width:${value}%"></span></div><strong>${value}</strong></div>
  `).join('');
}

function renderAreas(list = areas) {
  const grid = document.getElementById('areasGrid');
  document.getElementById('areaResultsSummary').textContent = `${list.length} área${list.length === 1 ? '' : 's'} encontrada${list.length === 1 ? '' : 's'} na base demonstrativa.`;
  if (!list.length) {
    grid.innerHTML = '<div class="empty-state"><strong>Nenhuma área encontrada.</strong><p>Ajuste os filtros ou limpe a busca.</p></div>';
    return;
  }
  grid.innerHTML = list.map(a => `
    <article class="area-card">
      <div class="area-cover">
        <span class="cover-code">${a.fitophys}</span>
        <span class="badge ${a.status === 'Disponível' ? 'success' : a.status === 'Projeto ativo' ? 'wine' : 'warning'}">${a.status}</span>
      </div>
      <div class="area-card-body">
        <div><span class="eyebrow">${a.id}</span><h3>${a.name}</h3><small>${a.city}/${a.state} • ${a.biome}</small></div>
        <div class="area-meta">
          <div><small>Área</small><strong>${a.area.toLocaleString('pt-BR')} ha</strong></div>
          <div><small>Score</small><strong>${a.score}%</strong></div>
          <div><small>Tipo</small><strong>${a.type}</strong></div>
          <div><small>Método</small><strong>${a.method}</strong></div>
        </div>
        <div class="card-footer">
          <span class="score-pill">${a.potential.join(' • ')}</span>
          <div class="card-actions">
            <button class="ghost-button details-button" data-id="${a.id}">Detalhes</button>
            <button class="outline-button match-button" data-id="${a.id}">Solicitar pré-match</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.match-button').forEach(btn => btn.addEventListener('click', () => showToast(`Pré-match solicitado para ${btn.dataset.id}. A validação técnica permanece necessária.`)));
  document.querySelectorAll('.details-button').forEach(btn => btn.addEventListener('click', () => openAreaDrawer(btn.dataset.id)));
}

function filterAreas() {
  const query = document.getElementById('areaSearch').value.toLowerCase();
  const biome = document.getElementById('biomeFilter').value;
  const method = document.getElementById('methodFilter').value;
  renderAreas(areas.filter(a => {
    const searchOk = `${a.name} ${a.city} ${a.producer}`.toLowerCase().includes(query);
    const biomeOk = biome === 'all' || a.biome === biome;
    const methodOk = method === 'all' || a.method === method;
    return searchOk && biomeOk && methodOk;
  }));
}

['areaSearch','biomeFilter','methodFilter'].forEach(id => document.getElementById(id).addEventListener('input', filterAreas));
document.getElementById('resetAreaFilters').addEventListener('click', () => {
  document.getElementById('areaSearch').value = '';
  document.getElementById('biomeFilter').value = 'all';
  document.getElementById('methodFilter').value = 'all';
  renderAreas();
});

function openAreaDrawer(id) {
  const a = areas.find(item => item.id === id);
  if (!a) return;
  drawerContent.innerHTML = `
    <div class="drawer-hero">
      <span class="eyebrow light">${a.id} • ${a.biome}</span>
      <h2>${a.name}</h2>
      <p>${a.city}/${a.state} • ${a.producer}</p>
    </div>
    <div class="drawer-stats">
      <div><small>Área disponível</small><strong>${a.area.toLocaleString('pt-BR')} ha</strong></div>
      <div><small>Score territorial</small><strong>${a.score}%</strong></div>
      <div><small>Status</small><strong>${a.status}</strong></div>
    </div>
    <section class="drawer-section">
      <h3>Diagnóstico preliminar</h3>
      <p>${a.note}</p>
      <div class="drawer-pills"><span>${a.type}</span><span>Acesso ${a.access.toLowerCase()}</span><span>Regeneração ${a.regen.toLowerCase()}</span><span>${a.fitophys}</span></div>
    </section>
    <section class="drawer-section">
      <h3>Potenciais territoriais</h3>
      <div class="drawer-pills">${a.potential.map(p => `<span>${p}</span>`).join('')}</div>
    </section>
    <section class="drawer-section">
      <h3>Método indicativo</h3>
      <p><strong>${a.method}</strong>. A recomendação depende de vistoria de campo, responsável técnico e enquadramento jurídico aplicável.</p>
    </section>
    <div class="drawer-actions">
      <button class="primary-button drawer-match" data-id="${a.id}">Solicitar pré-match territorial</button>
      <button class="outline-button drawer-recipe" data-biome="${a.biome}">Abrir Receita Nativa</button>
    </div>
  `;
  areaDrawer.showModal();
  drawerContent.querySelector('.drawer-match').addEventListener('click', () => {
    areaDrawer.close();
    showToast(`Pré-match solicitado para ${a.name}.`);
  });
  drawerContent.querySelector('.drawer-recipe').addEventListener('click', () => {
    areaDrawer.close();
    setView('receita');
    document.getElementById('recipeBiome').value = a.biome;
    document.getElementById('recipeArea').value = a.area;
    renderSpecies(a.biome);
  });
}

document.getElementById('drawerClose').addEventListener('click', () => areaDrawer.close());

function renderCompanies(list = companies) {
  document.getElementById('companiesTableBody').innerHTML = list.map(c => `
    <tr>
      <td><strong>${c.name}</strong><small style="display:block;color:var(--muted)">${c.city}</small></td>
      <td>${c.sector}</td><td>${c.biome}</td><td>${c.demand}</td><td>${c.area}</td>
      <td><span class="badge ${c.status.includes('ativo') || c.status.includes('encontrado') ? 'success' : c.status === 'Consórcio' ? 'wine' : 'warning'}">${c.status}</span></td>
      <td><button class="table-action company-action" data-name="${c.name}">Ver demanda</button></td>
    </tr>
  `).join('');
  document.querySelectorAll('.company-action').forEach(btn => btn.addEventListener('click', () => showToast(`Demanda demonstrativa aberta: ${btn.dataset.name}.`)));
}

document.getElementById('companySearch').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  renderCompanies(companies.filter(c => `${c.name} ${c.sector} ${c.city}`.toLowerCase().includes(q)));
});

function renderConsortia() {
  document.getElementById('consortiumGrid').innerHTML = consortia.map(c => `
    <article class="consortium-card ${c.featured ? 'featured' : ''}">
      <div><span class="eyebrow ${c.featured ? 'light' : ''}">${c.biome}</span><h3>${c.name}</h3><p>${c.theme}. Carteira compartilhada com aportes proporcionais.</p></div>
      <div class="consortium-stats"><div><small>Meta</small><strong>${c.target}</strong></div><div><small>Captado</small><strong>${c.value}</strong></div><div><small>Empresas</small><strong>${c.companies}</strong></div><div><small>Progresso</small><strong>${c.progress}%</strong></div></div>
      <div class="progress"><span style="width:${c.progress}%"></span></div>
      <button class="${c.featured ? 'secondary-button' : 'outline-button'} consortium-button" data-name="${c.name}">Simular participação</button>
    </article>
  `).join('');
  document.querySelectorAll('.consortium-button').forEach(btn => btn.addEventListener('click', () => openConsortiumModal(btn.dataset.name)));
}

function renderOpportunities() {
  document.getElementById('opportunityGrid').innerHTML = opportunities.map(o => `
    <article class="opportunity-card"><span class="badge neutral">Oportunidade demonstrativa</span><h3>${o.title}</h3><p>${o.description}</p><div class="opportunity-meta"><span>${o.place}</span><span>Data simulada: ${o.deadline}</span></div><button class="outline-button opportunity-button" data-title="${o.title}">Ver jornada</button></article>
  `).join('');
  document.querySelectorAll('.opportunity-button').forEach(btn => btn.addEventListener('click', () => showToast(`Jornada demonstrativa aberta: “${btn.dataset.title}”.`)));
}

function renderPlans() {
  document.getElementById('plansGrid').innerHTML = plans.map((p,i) => `
    <article class="plan-card ${i === 1 ? 'selected' : ''}"><span class="eyebrow">${p.name}</span><div class="plan-price">${p.price}<small>/mês</small></div><p>${p.desc}</p><ul>${p.benefits.map(b => `<li>${b}</li>`).join('')}</ul><button class="${i === 1 ? 'primary-button' : 'outline-button'} plan-button" data-plan="${p.name}">Simular apoio</button></article>
  `).join('');
  document.querySelectorAll('.plan-button').forEach(btn => btn.addEventListener('click', () => showToast(`Plano ${btn.dataset.plan} selecionado para demonstração. Não há cobrança real.`)));
}

function renderTimeline() {
  const items = [
    ['2026','Diagnóstico e implantação',true],
    ['2027','Manutenção e replantio',true],
    ['2028','Regeneração em consolidação',false],
    ['2029','Avaliação de permanência',false]
  ];
  document.getElementById('timeline').innerHTML = items.map(([year,label,active]) => `<div class="timeline-step ${active ? 'active' : ''}"><strong>${year}</strong><small>${label}</small></div>`).join('');
}

function renderSpecies(biome) {
  document.getElementById('speciesList').innerHTML = recipeSpecies[biome].map(([name,sci,role]) => `
    <div class="species-item"><div><strong>${name}</strong><small><em>${sci}</em> • ${role}</small></div><span class="badge success">Prioritária</span></div>
  `).join('');
}

document.getElementById('recipeForm').addEventListener('submit', e => {
  e.preventDefault();
  const biome = document.getElementById('recipeBiome').value;
  const area = Number(document.getElementById('recipeArea').value);
  const condition = document.getElementById('recipeCondition').value;
  const goal = document.getElementById('recipeGoal').value;
  const method = condition === 'alta' ? 'Condução da regeneração natural' : condition === 'media' ? 'Plantio misto + condução da regeneração' : biome === 'Cerrado' ? 'Muvuca + plantio de enriquecimento' : 'Plantio total + manutenção intensiva';
  const intensity = condition === 'alta' ? 'Baixa' : condition === 'media' ? 'Média' : 'Alta';
  const score = condition === 'alta' ? 92 : condition === 'media' ? 86 : 74;
  const baseCost = condition === 'alta' ? 11800 : condition === 'media' ? 23100 : 29700;
  const speciesRange = goal === 'biodiversidade' ? '45–60' : '30–45';
  document.querySelector('#recipeResult h3').textContent = method;
  document.querySelector('.recipe-score strong').textContent = `${score}%`;
  document.querySelector('.recipe-score .progress span').style.width = `${score}%`;
  const summary = document.querySelectorAll('.recipe-summary strong');
  summary[0].textContent = intensity;
  summary[1].textContent = speciesRange;
  summary[2].textContent = `R$ ${baseCost.toLocaleString('pt-BR')}/ha`;
  renderSpecies(biome);
  currentRecipeSummary = `${method}; intensidade ${intensity.toLowerCase()}; ${speciesRange} espécies; custo estimado de R$ ${baseCost.toLocaleString('pt-BR')}/ha; área de ${area.toLocaleString('pt-BR')} ha no bioma ${biome}.`;
  showToast(`Receita preliminar gerada para ${area.toLocaleString('pt-BR')} ha em ${biome}.`);
});

document.getElementById('copyRecipeButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(currentRecipeSummary);
    showToast('Resumo da Receita Nativa copiado.');
  } catch {
    showToast(currentRecipeSummary);
  }
});

function setupMatchSimulator() {
  const companySelect = document.getElementById('matchCompany');
  const areaSelect = document.getElementById('matchArea');
  companySelect.innerHTML = companies.map(c => `<option value="${c.id}">${c.name} • ${c.requiredArea.toLocaleString('pt-BR')} ha</option>`).join('');
  areaSelect.innerHTML = areas.map(a => `<option value="${a.id}">${a.name} • ${a.area.toLocaleString('pt-BR')} ha</option>`).join('');
  companySelect.value = 'DEM001';
  areaSelect.value = 'ARE001';
}

function calculateMatch(company, area) {
  const sameBiome = company.biome === area.biome;
  const enoughArea = area.area >= company.requiredArea;
  const territorial = sameBiome ? Math.min(98, 78 + Math.round(area.score * .18)) : 18;
  let operational = area.access === 'Bom' ? 86 : area.access === 'Médio' ? 72 : 51;
  operational -= area.regen === 'Baixa' ? 6 : 0;
  const productive = Math.min(96, 68 + area.potential.length * 5 + (area.method === 'Restauração produtiva' ? 7 : 0));
  const eligible = sameBiome && enoughArea;
  const score = eligible ? Math.round(territorial * .42 + operational * .28 + productive * .30) : 0;
  const classification = !eligible ? 'Incompatível' : score >= 80 ? 'Match forte' : score >= 60 ? 'Match moderado' : 'Match fraco';
  return { sameBiome, enoughArea, territorial, operational, productive, score, classification, eligible };
}

function renderMatchResult(company, area) {
  const result = calculateMatch(company, area);
  const el = document.getElementById('matchResult');
  const badgeClass = !result.eligible ? 'warning' : result.score >= 80 ? 'success' : 'neutral';
  const reason = !result.sameBiome
    ? 'Biomas incompatíveis para esta pré-triagem.'
    : !result.enoughArea
      ? 'A área disponível é inferior à demanda cadastrada.'
      : 'Mesmo bioma, área suficiente e viabilidade operacional preliminar. Requer validação jurídica e vistoria técnica.';
  el.innerHTML = `
    <div class="match-score-ring" style="--score: ${result.score}"><strong>${result.score}%</strong><small>compatibilidade</small></div>
    <div>
      <span class="badge ${badgeClass}">${result.classification}</span>
      <h4>${company.name} + ${area.name}</h4>
      <p>${reason}</p>
      <div class="score-breakdown"><span>Territorial <b>${result.territorial}</b></span><span>Operacional <b>${result.operational}</b></span><span>Produtivo <b>${result.productive}</b></span></div>
    </div>`;
  el.classList.remove('flash');
  requestAnimationFrame(() => el.classList.add('flash'));
}

document.getElementById('runMatch').addEventListener('click', () => {
  const company = companies.find(c => c.id === document.getElementById('matchCompany').value);
  const area = areas.find(a => a.id === document.getElementById('matchArea').value);
  renderMatchResult(company, area);
  showToast('Pré-match recalculado com critérios demonstrativos.');
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function openModal(type) {
  modalMode = type;
  const isArea = type === 'area';
  modalTitle.textContent = isArea ? 'Cadastrar nova área' : 'Cadastrar demanda empresarial';
  modalDescription.textContent = isArea ? 'Dados iniciais para pré-triagem ecológica e territorial.' : 'Dados iniciais da demanda para composição de carteira ou pré-match.';
  modalSubmit.textContent = 'Salvar demonstração';
  modalFields.innerHTML = isArea ? `
    <label>Nome do produtor<input required placeholder="Nome completo"></label>
    <label>Propriedade<input required placeholder="Sítio ou fazenda"></label>
    <label>Município<input required placeholder="Município"></label>
    <label>Bioma<select><option>Mata Atlântica</option><option>Cerrado</option></select></label>
    <label>Área disponível (ha)<input required type="number" min="0.1" step="0.1"></label>
    <label>Condição<select><option>Pastagem degradada</option><option>APP degradada</option><option>Área subutilizada</option></select></label>
    <label class="full">Observação<textarea rows="3" placeholder="Contexto da área, acesso ou interesse produtivo"></textarea></label>
  ` : `
    <label>Empresa<input required placeholder="Razão social"></label>
    <label>Setor<input required placeholder="Construção, logística..."></label>
    <label>Município<input required placeholder="Município"></label>
    <label>Bioma<select><option>Mata Atlântica</option><option>Cerrado</option></select></label>
    <label>Área necessária (ha)<input required type="number" min="0.1" step="0.1"></label>
    <label>Tipo de demanda<select><option>Compensação ambiental</option><option>Condicionante</option><option>ESG territorial</option></select></label>
    <label class="full">Documento ou contexto<textarea rows="3" placeholder="TCRA, TAC, licença, programa ESG..."></textarea></label>
  `;
  modal.showModal();
}

document.getElementById('openAreaModal').addEventListener('click', () => openModal('area'));
document.getElementById('openCompanyModal').addEventListener('click', () => openModal('company'));
document.getElementById('modalClose').addEventListener('click', () => modal.close());
document.getElementById('modalCancel').addEventListener('click', () => modal.close());
document.getElementById('modalForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!e.currentTarget.reportValidity()) return;
  modal.close();
  showToast(modalMode === 'consortium' ? 'Manifestação demonstrativa registrada.' : 'Cadastro demonstrativo salvo com sucesso.');
});

function openConsortiumModal(name='Consórcio territorial') {
  modalMode = 'consortium';
  modalTitle.textContent = `Simular participação: ${name}`;
  modalDescription.textContent = 'Manifestação demonstrativa para visualizar proposta de cota e estrutura de participação.';
  modalSubmit.textContent = 'Registrar simulação';
  modalFields.innerHTML = `
    <label>Empresa<input required placeholder="Razão social"></label>
    <label>Contato<input required type="email" placeholder="E-mail corporativo"></label>
    <label>Cota pretendida<select><option>1 hectare</option><option>3 hectares</option><option>5 hectares</option><option>10 hectares</option></select></label>
    <label>Objetivo<select><option>Compensação</option><option>ESG territorial</option><option>Segurança hídrica</option></select></label>
  `;
  modal.showModal();
}

document.getElementById('joinConsortiumBtn').addEventListener('click', () => openConsortiumModal());

function globalSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return;
  const area = areas.find(a => `${a.name} ${a.city} ${a.biome} ${a.producer}`.toLowerCase().includes(q));
  if (area) { setView('areas'); document.getElementById('areaSearch').value = query; filterAreas(); return; }
  const company = companies.find(c => `${c.name} ${c.sector} ${c.city}`.toLowerCase().includes(q));
  if (company) { setView('empresas'); document.getElementById('companySearch').value = query; renderCompanies([company]); return; }
  const project = projects.find(p => p.title.toLowerCase().includes(q));
  if (project) { setView('consorcios'); showToast(`Projeto encontrado: ${project.title}.`); return; }
  showToast('Nenhum resultado encontrado nesta demonstração.');
}

document.getElementById('globalSearch').addEventListener('keydown', e => { if (e.key === 'Enter') globalSearch(e.target.value); });

document.querySelectorAll('.map-pin').forEach(pin => pin.addEventListener('click', () => {
  const id = pin.dataset.area;
  if (id.startsWith('CONS')) { setView('consorcios'); return; }
  openAreaDrawer(id);
}));

document.getElementById('roleSwitcher').addEventListener('change', e => {
  const roleLabels = { novaexi:'Equipe Novaexi', empresa:'Empresa demandante', produtor:'Produtor rural' };
  document.body.dataset.role = e.target.value;
  showToast(`Perspectiva alterada para ${roleLabels[e.target.value]}. O MVP mantém os mesmos dados simulados.`);
});

document.getElementById('notificationsButton').addEventListener('click', () => showToast('3 notificações simuladas: novo pré-match, consórcio atualizado e relatório disponível.'));
document.getElementById('profileButton').addEventListener('click', () => showToast('Perfil demonstrativo da equipe Novaexi.'));
document.getElementById('exportReportButton').addEventListener('click', () => {
  showToast('Abrindo versão para impressão/PDF do relatório demonstrativo.');
  setTimeout(() => window.print(), 350);
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeSidebar();
  if (modal.open) modal.close();
  if (areaDrawer.open) areaDrawer.close();
});

renderMetrics();
renderProjects();
renderBars();
renderAreas();
renderCompanies();
renderConsortia();
renderOpportunities();
renderPlans();
renderTimeline();
renderSpecies('Mata Atlântica');
setupMatchSimulator();
renderMatchResult(companies[0], areas[0]);
