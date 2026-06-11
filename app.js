const metrics = [
  { label: 'Hectares cadastrados', value: '1.254 ha', trend: '+18% no trimestre' },
  { label: 'Projetos ativos', value: '147', trend: '32 em implantação' },
  { label: 'Produtores', value: '328', trend: '61 novos cadastros' },
  { label: 'Empresas', value: '96', trend: '14 em consórcios' },
  { label: 'Carteira estimada', value: 'R$ 4,8 mi', trend: 'MVP demonstrativo' }
];

const areas = [
  { id:'ARE001', name:'Sítio Boa Vista', city:'Piracicaba', biome:'Mata Atlântica', area:3.4, type:'Pastagem degradada', method:'Restauração produtiva', score:92, status:'Disponível', potential:['PSA','Sementes','PFNM'] },
  { id:'ARE014', name:'Fazenda Esperança', city:'Pindamonhangaba', biome:'Mata Atlântica', area:8.0, type:'Pasto abandonado', method:'Regeneração natural', score:95, status:'Projeto ativo', potential:['PSA','Água','PFNM'] },
  { id:'ARE010', name:'Sítio Buriti', city:'Analândia', biome:'Cerrado', area:3.6, type:'Cerrado degradado', method:'Muvuca', score:88, status:'Disponível', potential:['Sementes','PFNM'] },
  { id:'ARE021', name:'Sítio Ribeirão Verde', city:'Sete Barras', biome:'Mata Atlântica', area:4.2, type:'APP degradada', method:'Regeneração natural', score:94, status:'Disponível', potential:['PSA','Água','Fauna'] },
  { id:'ARE025', name:'Sítio das Frutas', city:'Monte Mor', biome:'Mata Atlântica', area:2.9, type:'Monocultivo de baixo retorno', method:'Restauração produtiva', score:89, status:'Em análise', potential:['PFNM','Sementes'] },
  { id:'ARE026', name:'Fazenda Água Fria', city:'Itirapina', biome:'Cerrado', area:6.8, type:'Área próxima a nascente', method:'Muvuca', score:91, status:'Disponível', potential:['Água','PSA','Biodiversidade'] }
];

const companies = [
  { name:'Construtora Horizonte', sector:'Construção civil', biome:'Mata Atlântica', demand:'Condicionante ambiental', area:'3,0 ha', status:'Em análise' },
  { name:'Logística Anhanguera', sector:'Logística', biome:'Mata Atlântica', demand:'Compensação ambiental', area:'5,0 ha', status:'Match encontrado' },
  { name:'Águas do Interior', sector:'Saneamento', biome:'Cerrado', demand:'ESG territorial', area:'6,0 ha', status:'Consórcio' },
  { name:'Indústria MetalVale', sector:'Indústria', biome:'Mata Atlântica', demand:'TAC/TCRA', area:'4,5 ha', status:'Em análise' },
  { name:'Residencial Vale Verde', sector:'Loteamento', biome:'Mata Atlântica', demand:'Condicionante', area:'6,0 ha', status:'Projeto ativo' },
  { name:'BioFarma Interior', sector:'Indústria', biome:'Cerrado', demand:'Restauração voluntária', area:'4,0 ha', status:'Match encontrado' }
];

const projects = [
  { title:'Consórcio Vale do Paraíba', meta:'50 ha • 14 empresas', progress:68, status:'Em implantação' },
  { title:'Corredor Caipira', meta:'26 ha • 8 empresas', progress:42, status:'Estruturação' },
  { title:'Nascentes do Alto Tietê', meta:'18 ha • 6 empresas', progress:81, status:'Monitoramento' },
  { title:'Cerrado Produtivo', meta:'32 ha • 11 empresas', progress:55, status:'Captação' }
];

const consortia = [
  { name:'Vale do Paraíba', target:'50 ha', value:'R$ 1,25 mi', companies:14, progress:68, featured:true, biome:'Mata Atlântica' },
  { name:'Corredor Caipira', target:'26 ha', value:'R$ 640 mil', companies:8, progress:42, featured:false, biome:'Mata Atlântica' },
  { name:'Cerrado Produtivo', target:'32 ha', value:'R$ 790 mil', companies:11, progress:55, featured:false, biome:'Cerrado' }
];

const opportunities = [
  { title:'PSA Segurança Hídrica', org:'Programa municipal', place:'Piracicaba/SP', deadline:'30/08/2026', description:'Incentivo a produtores com APPs e nascentes prioritárias para recuperação e proteção hídrica.' },
  { title:'Edital Bioeconomia Territorial', org:'Fundo socioambiental', place:'Mata Atlântica', deadline:'15/09/2026', description:'Apoio a cadeias de sementes, PFNM, viveiros comunitários e restauração produtiva.' },
  { title:'Chamada Restauração Produtiva', org:'Consórcio regional', place:'Vale do Paraíba', deadline:'20/10/2026', description:'Seleção de áreas com potencial para sistemas mistos, sementes e conectividade ecológica.' }
];

const plans = [
  { name:'Semente', price:'R$ 1,99', desc:'Apoio mensal básico', benefits:['Boletim digital','Mapa do projeto','Selo de apoiador'] },
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

function setView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`${view}-view`)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view));
  document.getElementById('pageTitle').textContent = titles[view] || 'Novaexi';
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => setView(el.dataset.view)));
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));

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
      <div class="progress"><span style="width:${p.progress}%"></span></div>
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
  document.getElementById('areasGrid').innerHTML = list.map(a => `
    <article class="area-card">
      <div class="area-cover"><span class="badge ${a.status === 'Disponível' ? 'success' : 'warning'}">${a.status}</span></div>
      <div class="area-card-body">
        <div><span class="eyebrow">${a.id}</span><h3>${a.name}</h3><small>${a.city} • ${a.biome}</small></div>
        <div class="area-meta">
          <div><small>Área</small><strong>${a.area} ha</strong></div>
          <div><small>Score</small><strong>${a.score}%</strong></div>
          <div><small>Tipo</small><strong>${a.type}</strong></div>
          <div><small>Método</small><strong>${a.method}</strong></div>
        </div>
        <div class="card-footer"><span class="score-pill">${a.potential.join(' • ')}</span><button class="outline-button match-button" data-id="${a.id}">Solicitar match</button></div>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.match-button').forEach(btn => btn.addEventListener('click', () => showToast(`Solicitação de match criada para ${btn.dataset.id}.`)));
}

function filterAreas() {
  const query = document.getElementById('areaSearch').value.toLowerCase();
  const biome = document.getElementById('biomeFilter').value;
  const method = document.getElementById('methodFilter').value;
  renderAreas(areas.filter(a => {
    const searchOk = `${a.name} ${a.city}`.toLowerCase().includes(query);
    const biomeOk = biome === 'all' || a.biome === biome;
    const methodOk = method === 'all' || a.method === method;
    return searchOk && biomeOk && methodOk;
  }));
}
['areaSearch','biomeFilter','methodFilter'].forEach(id => document.getElementById(id).addEventListener('input', filterAreas));

function renderCompanies(list = companies) {
  document.getElementById('companiesTableBody').innerHTML = list.map(c => `
    <tr><td><strong>${c.name}</strong></td><td>${c.sector}</td><td>${c.biome}</td><td>${c.demand}</td><td>${c.area}</td><td><span class="badge ${c.status.includes('ativo') || c.status.includes('encontrado') ? 'success' : c.status === 'Consórcio' ? 'wine' : 'warning'}">${c.status}</span></td></tr>
  `).join('');
}
document.getElementById('companySearch').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  renderCompanies(companies.filter(c => `${c.name} ${c.sector}`.toLowerCase().includes(q)));
});

function renderConsortia() {
  document.getElementById('consortiumGrid').innerHTML = consortia.map(c => `
    <article class="consortium-card ${c.featured ? 'featured' : ''}">
      <div><span class="eyebrow ${c.featured ? 'light' : ''}">${c.biome}</span><h3>${c.name}</h3><p>Carteira compartilhada de restauração com aportes proporcionais.</p></div>
      <div class="consortium-stats"><div><small>Meta</small><strong>${c.target}</strong></div><div><small>Captado</small><strong>${c.value}</strong></div><div><small>Empresas</small><strong>${c.companies}</strong></div><div><small>Progresso</small><strong>${c.progress}%</strong></div></div>
      <div class="progress"><span style="width:${c.progress}%"></span></div>
      <button class="${c.featured ? 'secondary-button' : 'outline-button'} consortium-button" data-name="${c.name}">Participar</button>
    </article>
  `).join('');
  document.querySelectorAll('.consortium-button').forEach(btn => btn.addEventListener('click', () => openConsortiumModal(btn.dataset.name)));
}

function renderOpportunities() {
  document.getElementById('opportunityGrid').innerHTML = opportunities.map(o => `
    <article class="opportunity-card"><span class="badge success">Oportunidade aberta</span><h3>${o.title}</h3><p>${o.description}</p><div class="opportunity-meta"><span>${o.place}</span><span>Até ${o.deadline}</span></div><button class="outline-button opportunity-button" data-title="${o.title}">Ver detalhes</button></article>
  `).join('');
  document.querySelectorAll('.opportunity-button').forEach(btn => btn.addEventListener('click', () => showToast(`Detalhes simulados de “${btn.dataset.title}”.`)));
}

function renderPlans() {
  document.getElementById('plansGrid').innerHTML = plans.map((p,i) => `
    <article class="plan-card ${i === 1 ? 'selected' : ''}"><span class="eyebrow">${p.name}</span><div class="plan-price">${p.price}<small>/mês</small></div><p>${p.desc}</p><ul>${p.benefits.map(b => `<li>${b}</li>`).join('')}</ul><button class="${i === 1 ? 'primary-button' : 'outline-button'} plan-button" data-plan="${p.name}">Apoiar</button></article>
  `).join('');
  document.querySelectorAll('.plan-button').forEach(btn => btn.addEventListener('click', () => showToast(`Plano ${btn.dataset.plan} selecionado para demonstração.`)));
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
  document.querySelector('#recipeResult h3').textContent = method;
  document.querySelector('.recipe-score strong').textContent = `${score}%`;
  document.querySelector('.recipe-score .progress span').style.width = `${score}%`;
  const summary = document.querySelectorAll('.recipe-summary strong');
  summary[0].textContent = intensity;
  summary[1].textContent = goal === 'biodiversidade' ? '45–60' : '30–45';
  summary[2].textContent = `R$ ${(baseCost).toLocaleString('pt-BR')}/ha`;
  renderSpecies(biome);
  showToast(`Receita preliminar gerada para ${area} ha em ${biome}.`);
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

const modal = document.getElementById('genericModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFields = document.getElementById('modalFields');

function openModal(type) {
  const isArea = type === 'area';
  modalTitle.textContent = isArea ? 'Cadastrar nova área' : 'Cadastrar demanda empresarial';
  modalDescription.textContent = isArea ? 'Dados iniciais para pré-triagem ecológica e territorial.' : 'Dados iniciais da demanda para composição de carteira ou match.';
  modalFields.innerHTML = isArea ? `
    <label>Nome do produtor<input required placeholder="Nome completo"></label>
    <label>Propriedade<input required placeholder="Sítio ou fazenda"></label>
    <label>Município<input required placeholder="Município"></label>
    <label>Bioma<select><option>Mata Atlântica</option><option>Cerrado</option></select></label>
    <label>Área disponível (ha)<input required type="number" min="0.1" step="0.1"></label>
    <label>Condição<select><option>Pastagem degradada</option><option>APP degradada</option><option>Área subutilizada</option></select></label>
  ` : `
    <label>Empresa<input required placeholder="Razão social"></label>
    <label>Setor<input required placeholder="Construção, logística..."></label>
    <label>Município<input required placeholder="Município"></label>
    <label>Bioma<select><option>Mata Atlântica</option><option>Cerrado</option></select></label>
    <label>Área necessária (ha)<input required type="number" min="0.1" step="0.1"></label>
    <label>Tipo de demanda<select><option>Compensação ambiental</option><option>Condicionante</option><option>ESG territorial</option></select></label>
  `;
  modal.showModal();
}

document.getElementById('openAreaModal').addEventListener('click', () => openModal('area'));
document.getElementById('openCompanyModal').addEventListener('click', () => openModal('company'));
document.getElementById('modalForm').addEventListener('submit', e => {
  e.preventDefault();
  modal.close();
  showToast('Cadastro demonstrativo salvo com sucesso.');
});

function openConsortiumModal(name='Consórcio territorial') {
  modalTitle.textContent = `Participar: ${name}`;
  modalDescription.textContent = 'Simule uma manifestação de interesse para receber proposta de cota e estrutura de participação.';
  modalFields.innerHTML = `
    <label>Empresa<input required placeholder="Razão social"></label>
    <label>Contato<input required placeholder="E-mail corporativo"></label>
    <label>Cota pretendida<select><option>1 hectare</option><option>3 hectares</option><option>5 hectares</option><option>10 hectares</option></select></label>
    <label>Objetivo<select><option>Compensação</option><option>ESG territorial</option><option>Segurança hídrica</option></select></label>
  `;
  modal.showModal();
}
document.getElementById('joinConsortiumBtn').addEventListener('click', () => openConsortiumModal());

function globalSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return;
  const area = areas.find(a => `${a.name} ${a.city} ${a.biome}`.toLowerCase().includes(q));
  if (area) { setView('areas'); document.getElementById('areaSearch').value = query; filterAreas(); return; }
  const company = companies.find(c => `${c.name} ${c.sector}`.toLowerCase().includes(q));
  if (company) { setView('empresas'); document.getElementById('companySearch').value = query; renderCompanies([company]); return; }
  showToast('Nenhum resultado encontrado nesta demonstração.');
}
document.getElementById('globalSearch').addEventListener('keydown', e => { if (e.key === 'Enter') globalSearch(e.target.value); });

document.querySelectorAll('.map-pin').forEach(pin => pin.addEventListener('click', () => {
  const id = pin.dataset.area;
  if (id.startsWith('CONS')) { setView('consorcios'); return; }
  const area = areas.find(a => a.id === id);
  if (area) { setView('areas'); document.getElementById('areaSearch').value = area.name; filterAreas(); }
}));

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
