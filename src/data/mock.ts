export type Area = {
  id: string
  name: string
  producer: string
  city: string
  biome: "Mata Atlântica" | "Cerrado"
  area: number
  type: string
  method: string
  score: number
  status: "Disponível" | "Em análise" | "Projeto ativo"
  potential: string[]
  regeneration: "Alta" | "Média" | "Baixa"
  access: "Bom" | "Médio" | "Ruim"
}

export type Company = {
  id: string
  name: string
  sector: string
  city: string
  biome: "Mata Atlântica" | "Cerrado"
  demand: string
  area: number
  budget: number
  status: string
}

export const areas: Area[] = [
  { id: "ARE001", name: "Sítio Boa Vista", producer: "João Pereira", city: "Piracicaba/SP", biome: "Mata Atlântica", area: 3.4, type: "Pastagem degradada", method: "Restauração produtiva", score: 92, status: "Disponível", potential: ["PSA", "Sementes", "PFNM"], regeneration: "Média", access: "Bom" },
  { id: "ARE014", name: "Fazenda Esperança", producer: "Camila Ferraz", city: "Pindamonhangaba/SP", biome: "Mata Atlântica", area: 8, type: "Pasto abandonado", method: "Regeneração natural", score: 95, status: "Projeto ativo", potential: ["PSA", "Água", "PFNM"], regeneration: "Alta", access: "Bom" },
  { id: "ARE010", name: "Sítio Buriti", producer: "Sandra Matos", city: "Analândia/SP", biome: "Cerrado", area: 3.6, type: "Cerrado degradado", method: "Muvuca", score: 88, status: "Disponível", potential: ["Sementes", "PFNM"], regeneration: "Média", access: "Médio" },
  { id: "ARE021", name: "Sítio Ribeirão Verde", producer: "Osmar Batista", city: "Sete Barras/SP", biome: "Mata Atlântica", area: 4.2, type: "APP degradada", method: "Regeneração natural", score: 94, status: "Disponível", potential: ["PSA", "Água", "Fauna"], regeneration: "Alta", access: "Médio" },
  { id: "ARE025", name: "Sítio das Frutas", producer: "Bruno Martins", city: "Monte Mor/SP", biome: "Mata Atlântica", area: 2.9, type: "Monocultivo de baixo retorno", method: "Restauração produtiva", score: 89, status: "Em análise", potential: ["PFNM", "Sementes"], regeneration: "Média", access: "Bom" },
  { id: "ARE026", name: "Fazenda Água Fria", producer: "Cristina Paes", city: "Itirapina/SP", biome: "Cerrado", area: 6.8, type: "Área próxima a nascente", method: "Muvuca", score: 91, status: "Disponível", potential: ["Água", "PSA", "Biodiversidade"], regeneration: "Média", access: "Médio" },
]

export const companies: Company[] = [
  { id: "DEM001", name: "Construtora Horizonte", sector: "Construção civil", city: "Piracicaba/SP", biome: "Mata Atlântica", demand: "Condicionante ambiental", area: 3, budget: 75000, status: "Em análise" },
  { id: "DEM002", name: "Logística Anhanguera", sector: "Logística", city: "Campinas/SP", biome: "Mata Atlântica", demand: "Compensação ambiental", area: 5, budget: 120000, status: "Pré-match encontrado" },
  { id: "DEM010", name: "Agroindústria Rio Claro", sector: "Agroindústria", city: "Rio Claro/SP", biome: "Cerrado", demand: "Regularização ambiental", area: 3, budget: 78000, status: "Em análise" },
  { id: "DEM013", name: "Indústria MetalVale", sector: "Indústria", city: "São José dos Campos/SP", biome: "Mata Atlântica", demand: "TAC/TCRA", area: 4.5, budget: 110000, status: "Em estruturação" },
  { id: "DEM026", name: "Águas do Interior", sector: "Saneamento", city: "São Carlos/SP", biome: "Cerrado", demand: "ESG territorial", area: 6, budget: 150000, status: "Consórcio" },
]

export const consortia = [
  { id: "CONS001", name: "Vale do Paraíba", biome: "Mata Atlântica", targetHa: 50, fundedHa: 34, companies: 14, targetValue: 1250000 },
  { id: "CONS002", name: "Corredor Caipira", biome: "Mata Atlântica", targetHa: 26, fundedHa: 11, companies: 8, targetValue: 640000 },
  { id: "CONS003", name: "Cerrado Produtivo", biome: "Cerrado", targetHa: 32, fundedHa: 18, companies: 11, targetValue: 790000 },
]

export const species = {
  "Mata Atlântica": [
    { common: "Ingá", scientific: "Inga vera", role: "Preenchimento, sombreamento e fauna", product: "Sementes futuras" },
    { common: "Cambuci", scientific: "Campomanesia phaea", role: "Fauna e diversidade funcional", product: "PFNM" },
    { common: "Jatobá", scientific: "Hymenaea courbaril", role: "Estrutura e diversidade", product: "Fruto e madeira futura" },
    { common: "Araçá", scientific: "Psidium cattleianum", role: "Fauna e conectividade", product: "PFNM" },
  ],
  Cerrado: [
    { common: "Pequi", scientific: "Caryocar brasiliense", role: "Fauna e diversidade", product: "PFNM" },
    { common: "Cagaita", scientific: "Eugenia dysenterica", role: "Diversidade funcional", product: "PFNM" },
    { common: "Barbatimão", scientific: "Stryphnodendron adstringens", role: "Solo e estrutura", product: "PFNM potencial" },
    { common: "Ipê-amarelo", scientific: "Handroanthus ochraceus", role: "Diversidade estrutural", product: "Valorização ecológica" },
  ],
} as const
