import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft, BarChart3, Building2, Calculator, ChevronRight, CircleDollarSign,
  ClipboardCheck, Database, Download, Handshake, Home, Layers3,
  Map, Menu, Network, PanelLeftClose, ScanSearch, Search, Flower2, Sparkles,
  Sprout, Trees, Users, WalletCards, X
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Brand } from "@/components/layout/Brand"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { areas, companies, consortia, species, type Area } from "@/data/mock"
import { cn, formatCurrency } from "@/lib/utils"

type View = "dashboard" | "areas" | "companies" | "consortia" | "tools" | "monitoring" | "ecoplus"
type ToolTab = "prematch" | "consortium" | "intensity" | "recipe" | "impact"

const navItems: { id: View; label: string; icon: typeof Home }[] = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "areas", label: "Áreas", icon: Map },
  { id: "companies", label: "Empresas", icon: Building2 },
  { id: "consortia", label: "Consórcios", icon: Handshake },
  { id: "tools", label: "Ferramentas", icon: Calculator },
  { id: "monitoring", label: "Monitoramento", icon: ClipboardCheck },
  { id: "ecoplus", label: "Eco Plus", icon: Sparkles },
]

const viewTitles: Record<View, [string, string]> = {
  dashboard: ["Visão geral", "Cenário demonstrativo da operação territorial"],
  areas: ["Áreas territoriais", "Catálogo de propriedades e oportunidades"],
  companies: ["Demandantes ambientais", "Empresas e demandas agrupáveis"],
  consortia: ["Consórcios territoriais", "Escala compartilhada para projetos maiores"],
  tools: ["Ferramentas de decisão", "Simuladores para pré-estruturação de projetos"],
  monitoring: ["Monitoramento", "Trajetória, manutenção e evidências de campo"],
  ecoplus: ["Eco Plus", "Engajamento público e apoio territorial"],
}

function MetricCard({ label, value, note, icon: Icon }: { label: string; value: string; note: string; icon: typeof Home }) {
  return (
    <Card className="transition hover:-translate-y-0.5 hover:shadow-xl">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div><span className="text-sm text-muted-foreground">{label}</span><strong className="display-title mt-2 block text-3xl">{value}</strong></div>
          <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon /></div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  )
}

function Dashboard({ onNavigate }: { onNavigate: (v: View) => void }) {
  const [companyId, setCompanyId] = useState(companies[0].id)
  const [areaId, setAreaId] = useState(areas[0].id)
  const company = companies.find(c => c.id === companyId)!
  const area = areas.find(a => a.id === areaId)!
  const biomeOk = company.biome === area.biome
  const areaOk = area.area >= company.area
  const score = biomeOk && areaOk ? Math.round(area.score * .55 + (area.access === "Bom" ? 90 : 76) * .25 + (area.regeneration === "Alta" ? 94 : area.regeneration === "Média" ? 84 : 68) * .2) : 0

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <MetricCard label="Hectares cadastrados" value="1.254 ha" note="Base simulada" icon={Map} />
        <MetricCard label="Projetos ativos" value="147" note="32 em implantação" icon={Trees} />
        <MetricCard label="Produtores" value="328" note="61 novos cadastros" icon={Sprout} />
        <MetricCard label="Empresas" value="96" note="14 em consórcios" icon={Building2} />
        <MetricCard label="Carteira estimada" value="R$ 4,8 mi" note="Cenário demonstrativo" icon={CircleDollarSign} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <Card className="overflow-hidden">
          <CardHeader className="flex-row items-start justify-between gap-4">
            <div><Badge variant="wine">Inteligência territorial</Badge><CardTitle className="mt-3">Mapa de oportunidades</CardTitle><CardDescription>Representação ilustrativa de áreas, projetos e carteiras consorciadas.</CardDescription></div>
            <Button variant="outline" size="sm" onClick={() => onNavigate("areas")}>Ver áreas</Button>
          </CardHeader>
          <CardContent>
            <div className="territory-grid relative min-h-[360px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#e7ddce] via-[#cbd4bb] to-[#829879]">
              <div className="absolute -left-10 top-20 h-36 w-80 rotate-12 rounded-[50%] bg-primary/15" />
              <div className="absolute bottom-6 right-0 h-40 w-96 -rotate-6 rounded-[50%] bg-primary/20" />
              {[
                ["Piracicaba", "left-[22%] top-[54%]", "bg-emerald-600"], ["Campinas", "left-[38%] top-[30%]", "bg-amber-500"], ["Vale do Paraíba", "right-[14%] top-[35%]", "bg-wine"], ["Itirapina", "left-[48%] bottom-[20%]", "bg-blue-600"],
              ].map(([label,pos,color]) => <button type="button" key={label} onClick={() => onNavigate("areas")} className={cn("absolute z-10 flex items-center gap-2 rounded-full bg-white/90 py-2 pl-2 pr-3 text-xs font-semibold shadow-lg backdrop-blur transition hover:scale-105", pos)}><span className={cn("size-3 rounded-full", color)} />{label}</button>)}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 rounded-2xl bg-white/80 p-3 text-xs backdrop-blur">
                <span>● Disponível</span><span className="text-amber-700">● Em análise</span><span className="text-wine">● Consórcio</span><span className="text-blue-700">● Projeto ativo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><Badge variant="success">Simulador rápido</Badge><CardTitle>Pré-match territorial</CardTitle><CardDescription>Teste uma combinação entre demanda empresarial e área cadastrada.</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            <label className="grid gap-2 text-sm font-semibold">Empresa<Select value={companyId} onChange={e => setCompanyId(e.target.value)}>{companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</Select></label>
            <label className="grid gap-2 text-sm font-semibold">Área<Select value={areaId} onChange={e => setAreaId(e.target.value)}>{areas.map(a => <option key={a.id} value={a.id}>{a.name} — {a.city}</option>)}</Select></label>
            <div className="grid grid-cols-2 gap-3">
              <div className={cn("rounded-2xl p-4", biomeOk ? "bg-emerald-50" : "bg-red-50")}><span className="text-xs text-muted-foreground">Bioma</span><strong className="mt-1 block text-sm">{biomeOk ? "Compatível" : "Incompatível"}</strong></div>
              <div className={cn("rounded-2xl p-4", areaOk ? "bg-emerald-50" : "bg-red-50")}><span className="text-xs text-muted-foreground">Área</span><strong className="mt-1 block text-sm">{areaOk ? "Suficiente" : "Insuficiente"}</strong></div>
            </div>
            <div className="rounded-2xl bg-primary p-5 text-white">
              <div className="flex items-end justify-between"><div><span className="text-xs text-white/60">Score preliminar</span><strong className="display-title mt-1 block text-4xl">{score}%</strong></div><Badge className="bg-white/10 text-white">{score >= 80 ? "Match forte" : score >= 60 ? "Moderado" : "Incompatível"}</Badge></div>
              <Progress value={score} className="mt-4 bg-white/10" />
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">Pré-triagem demonstrativa. Não substitui avaliação técnica, jurídica ou aprovação institucional.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Card>
          <CardHeader><CardTitle>Projetos em carteira</CardTitle><CardDescription>Distribuição ilustrativa por fase.</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            {[ ["Vale do Paraíba",68,"Implantação"], ["Corredor Caipira",42,"Estruturação"], ["Nascentes do Alto Tietê",81,"Monitoramento"], ["Cerrado Produtivo",55,"Captação"] ].map(([name,value,status]) => <div key={String(name)}><div className="mb-2 flex justify-between gap-4 text-sm"><span className="font-semibold">{name}</span><span className="text-muted-foreground">{status}</span></div><Progress value={Number(value)} /></div>)}
          </CardContent>
        </Card>
        <Card className="border-0 bg-wine text-white">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div><Badge className="bg-white/10 text-sand">Tese de escala</Badge><h3 className="display-title mt-4 text-3xl font-semibold">A Novaexi não vende pequenos projetos isolados.</h3><p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">Ela agrega demandas em carteiras, dilui custos fixos e organiza uma rede territorial de implantação e monitoramento.</p></div>
            <Button variant="light" onClick={() => onNavigate("consortia")}>Ver consórcios <ChevronRight /></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AreasView({ onOpenTool }: { onOpenTool: (tool: ToolTab) => void }) {
  const [query, setQuery] = useState("")
  const [biome, setBiome] = useState("Todos")
  const [selected, setSelected] = useState<Area | null>(null)
  const filtered = areas.filter(a => (biome === "Todos" || a.biome === biome) && `${a.name} ${a.city} ${a.producer}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="space-y-6">
      <Card><CardContent className="flex flex-col gap-3 p-4 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3.5 size-4 text-muted-foreground" /><Input aria-label="Buscar propriedade, município ou produtor" className="pl-9" placeholder="Buscar propriedade, município ou produtor" value={query} onChange={e => setQuery(e.target.value)} /></div><Select className="sm:w-56" value={biome} onChange={e => setBiome(e.target.value)}><option>Todos</option><option>Mata Atlântica</option><option>Cerrado</option></Select></CardContent></Card>
      <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{filtered.length} áreas demonstrativas</span><Badge variant="outline">Visualização territorial ilustrativa</Badge></div>
      {filtered.length === 0 ? (
        <Card><CardContent className="p-8 text-center"><strong>Nenhuma área encontrada.</strong><p className="mt-2 text-sm text-muted-foreground">Ajuste o termo de busca ou selecione outro bioma.</p></CardContent></Card>
      ) : (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map(area => (
          <Card key={area.id} className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
            <div className="territory-grid relative h-36 bg-gradient-to-br from-primary via-forest-soft to-olive p-4"><Badge variant={area.status === "Disponível" ? "success" : area.status === "Em análise" ? "warning" : "wine"}>{area.status}</Badge><div className="absolute -bottom-12 right-[-10%] size-40 rounded-full bg-white/10" /></div>
            <CardContent className="p-5"><span className="text-xs font-bold uppercase tracking-wider text-terracotta">{area.id}</span><h3 className="mt-2 text-xl font-semibold">{area.name}</h3><p className="text-sm text-muted-foreground">{area.city} • {area.biome}</p><div className="mt-5 grid grid-cols-2 gap-2 text-sm"><div className="rounded-xl bg-muted p-3"><span className="block text-xs text-muted-foreground">Área</span><strong>{area.area} ha</strong></div><div className="rounded-xl bg-muted p-3"><span className="block text-xs text-muted-foreground">Score</span><strong>{area.score}%</strong></div></div><div className="mt-4 flex flex-wrap gap-2">{area.potential.map(p => <Badge key={p}>{p}</Badge>)}</div><Button variant="outline" className="mt-5 w-full" onClick={() => setSelected(area)}>Ver detalhes</Button></CardContent>
          </Card>
        ))}
      </div>
      )}
      <Dialog open={!!selected} onOpenChange={open => !open && setSelected(null)}>
        <DialogContent>{selected && <><DialogHeader><Badge variant="success" className="w-fit">{selected.status}</Badge><DialogTitle>{selected.name}</DialogTitle><DialogDescription>{selected.producer} • {selected.city} • {selected.biome}</DialogDescription></DialogHeader><div className="grid gap-3 sm:grid-cols-2">{[["Área disponível",`${selected.area} ha`],["Tipo",selected.type],["Método",selected.method],["Regeneração",selected.regeneration],["Acesso",selected.access],["Score territorial",`${selected.score}%`]].map(([k,v]) => <div key={k} className="rounded-2xl bg-muted p-4"><span className="text-xs text-muted-foreground">{k}</span><strong className="mt-1 block text-sm">{v}</strong></div>)}</div><Button variant="wine" onClick={() => { setSelected(null); onOpenTool("prematch") }}>Solicitar pré-match territorial</Button></>}</DialogContent>
      </Dialog>
    </div>
  )
}

function CompaniesView() {
  return (
    <Card><CardContent className="p-0"><div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead className="border-b bg-muted/70 text-xs uppercase tracking-wider text-muted-foreground"><tr>{["Empresa","Setor","Município","Bioma","Demanda","Área","Status"].map(h => <th key={h} className="px-5 py-4">{h}</th>)}</tr></thead><tbody>{companies.map(c => <tr key={c.id} className="border-b last:border-0 hover:bg-muted/40"><td className="px-5 py-4"><strong>{c.name}</strong><span className="block text-xs text-muted-foreground">{c.id}</span></td><td className="px-5 py-4 text-sm">{c.sector}</td><td className="px-5 py-4 text-sm">{c.city}</td><td className="px-5 py-4 text-sm">{c.biome}</td><td className="px-5 py-4 text-sm">{c.demand}</td><td className="px-5 py-4 text-sm">{c.area} ha</td><td className="px-5 py-4"><Badge variant={c.status.includes("Pré") ? "success" : c.status === "Consórcio" ? "wine" : "warning"}>{c.status}</Badge></td></tr>)}</tbody></table></div></CardContent></Card>
  )
}

function ConsortiaView({ onOpenTool }: { onOpenTool: (tool: ToolTab) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-6"><div className="grid gap-5 lg:grid-cols-3">{consortia.map((c,i) => { const progress = Math.round(c.fundedHa/c.targetHa*100); return <Card key={c.id} className={cn(i===0 && "border-0 bg-primary text-white")}><CardHeader><Badge className={cn("w-fit", i===0 ? "bg-white/10 text-sand" : "")}>{c.biome}</Badge><CardTitle>{c.name}</CardTitle><CardDescription className={cn(i===0 && "text-white/60")}>Carteira compartilhada com aportes proporcionais.</CardDescription></CardHeader><CardContent><div className="grid grid-cols-2 gap-3"><div className={cn("rounded-2xl p-4",i===0?"bg-white/10":"bg-muted")}><span className={cn("text-xs",i===0?"text-white/55":"text-muted-foreground")}>Meta</span><strong className="mt-1 block">{c.targetHa} ha</strong></div><div className={cn("rounded-2xl p-4",i===0?"bg-white/10":"bg-muted")}><span className={cn("text-xs",i===0?"text-white/55":"text-muted-foreground")}>Empresas</span><strong className="mt-1 block">{c.companies}</strong></div></div><div className="mt-5 flex justify-between text-sm"><span>{c.fundedHa} ha estruturados</span><strong>{progress}%</strong></div><Progress value={progress} className={cn("mt-2",i===0&&"bg-white/10")} /><Button className="mt-5 w-full" variant={i===0?"light":"outline"} onClick={() => setOpen(true)}>Simular participação</Button></CardContent></Card>})}</div><Card><CardContent className="grid gap-5 p-7 md:grid-cols-4">{[["1","Aportes proporcionais"],["2","Área agregada"],["3","Execução compartilhada"],["4","Relatórios por participante"]].map(([n,t]) => <div key={n} className="flex gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-wine text-white">{n}</span><span className="text-sm font-semibold">{t}</span></div>)}</CardContent></Card><Dialog open={open} onOpenChange={setOpen}><DialogContent><DialogHeader><DialogTitle>Simular participação em consórcio</DialogTitle><DialogDescription>Use a calculadora de consórcio para estimar cotas, custos e distribuição proporcional.</DialogDescription></DialogHeader><Button variant="wine" onClick={() => { setOpen(false); onOpenTool("consortium") }}>Abrir calculadora de consórcio</Button></DialogContent></Dialog></div>
  )
}

function PreMatchTool() {
  const [companyId, setCompanyId] = useState(companies[0].id)
  const [areaId, setAreaId] = useState(areas[0].id)
  const result = useMemo(() => {
    const c = companies.find(x => x.id === companyId)!
    const a = areas.find(x => x.id === areaId)!
    const biome = c.biome === a.biome
    const sufficient = a.area >= c.area
    const territorial = biome ? Math.min(100, a.score + (c.city.split("/")[0] === a.city.split("/")[0] ? 5 : 0)) : 0
    const operational = a.access === "Bom" ? 88 : a.access === "Médio" ? 76 : 58
    const productive = a.regeneration === "Alta" ? 92 : a.regeneration === "Média" ? 82 : 66
    const final = biome && sufficient ? Math.round(territorial*.45+operational*.3+productive*.25) : 0
    return { c,a,biome,sufficient,territorial,operational,productive,final }
  }, [companyId,areaId])
  return <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><Card><CardHeader><CardTitle>Entradas</CardTitle><CardDescription>Selecione uma demanda e uma área cadastrada.</CardDescription></CardHeader><CardContent className="space-y-4"><label className="grid gap-2 text-sm font-semibold">Empresa<Select value={companyId} onChange={e=>setCompanyId(e.target.value)}>{companies.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</Select></label><label className="grid gap-2 text-sm font-semibold">Área<Select value={areaId} onChange={e=>setAreaId(e.target.value)}>{areas.map(a=><option key={a.id} value={a.id}>{a.name}</option>)}</Select></label><p className="rounded-2xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground">A ferramenta organiza uma compatibilidade preliminar. O enquadramento legal final deve ser validado por responsáveis técnicos e jurídicos.</p></CardContent></Card><Card className="border-0 bg-primary text-white"><CardContent className="p-7"><div className="flex flex-wrap items-start justify-between gap-4"><div><Badge className="bg-white/10 text-sand">Resultado</Badge><h3 className="display-title mt-4 text-3xl font-semibold">{result.c.name} + {result.a.name}</h3></div><div className="text-right"><span className="text-xs text-white/55">Score final</span><strong className="display-title block text-5xl">{result.final}%</strong></div></div><Progress value={result.final} className="mt-6 bg-white/10" /><div className="mt-6 grid gap-3 sm:grid-cols-3">{[["Territorial",result.territorial],["Operacional",result.operational],["Produtivo",result.productive]].map(([label,value])=><div key={String(label)} className="rounded-2xl bg-white/10 p-4"><span className="text-xs text-white/55">{label}</span><strong className="mt-1 block text-xl">{value}%</strong></div>)}</div><div className="mt-5 flex flex-wrap gap-2"><Badge className={result.biome?"bg-emerald-400/20 text-emerald-100":"bg-red-400/20 text-red-100"}>Bioma {result.biome?"compatível":"incompatível"}</Badge><Badge className={result.sufficient?"bg-emerald-400/20 text-emerald-100":"bg-red-400/20 text-red-100"}>Área {result.sufficient?"suficiente":"insuficiente"}</Badge></div></CardContent></Card></div>
}

function ConsortiumTool() {
  const [companiesCount,setCompaniesCount]=useState(12); const [area,setArea]=useState(40); const [costHa,setCostHa]=useState(23500); const [fee,setFee]=useState(12)
  const subtotal=area*costHa; const management=subtotal*(fee/100); const total=subtotal+management; const quota=total/Math.max(companiesCount,1)
  return <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><Card><CardHeader><CardTitle>Parâmetros do consórcio</CardTitle><CardDescription>Valores exclusivamente demonstrativos.</CardDescription></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><label className="grid gap-2 text-sm font-semibold">Número de empresas<Input type="number" min="1" value={companiesCount} onChange={e=>setCompaniesCount(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Área total (ha)<Input type="number" min="1" value={area} onChange={e=>setArea(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Custo-base por ha<Input type="number" min="1" value={costHa} onChange={e=>setCostHa(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Gestão Novaexi (%)<Input type="number" min="0" max="50" value={fee} onChange={e=>setFee(Number(e.target.value))}/></label></CardContent></Card><Card><CardHeader><Badge variant="wine" className="w-fit">Resultado financeiro</Badge><CardTitle>Estrutura proporcional</CardTitle></CardHeader><CardContent><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-primary p-5 text-white sm:col-span-2"><span className="text-xs text-white/55">Investimento total estimado</span><strong className="display-title mt-2 block text-4xl">{formatCurrency(total)}</strong></div>{[["Implantação e manutenção",subtotal],["Gestão e estruturação",management],["Cota média por empresa",quota],["Custo médio por hectare",total/area]].map(([l,v])=><div key={String(l)} className="rounded-2xl bg-muted p-4"><span className="text-xs text-muted-foreground">{l}</span><strong className="mt-1 block text-lg">{formatCurrency(Number(v))}</strong></div>)}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Na operação real, as cotas podem variar por objetivo, obrigação, prioridade territorial e participação reputacional.</p></CardContent></Card></div>
}

function IntensityTool() {
  const [regen,setRegen]=useState("media"); const [invasive,setInvasive]=useState("media"); const [erosion,setErosion]=useState("baixa"); const [access,setAccess]=useState("bom")
  const result=useMemo(()=>{let points=0; points+=regen==="alta"?0:regen==="media"?2:4; points+=invasive==="baixa"?0:invasive==="media"?2:4; points+=erosion==="baixa"?0:erosion==="media"?2:4; points+=access==="bom"?0:access==="medio"?1:2; if(points<=3)return{level:"Baixa",method:"Condução da regeneração natural",cost:11800,color:"success" as const}; if(points<=7)return{level:"Média",method:"Plantio misto + condução",cost:23100,color:"warning" as const}; return{level:"Alta",method:"Muvuca/plantio total + manutenção intensiva",cost:29700,color:"wine" as const}},[regen,invasive,erosion,access])
  return <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><Card><CardHeader><CardTitle>Condição da área</CardTitle><CardDescription>Classificação preliminar de intensidade.</CardDescription></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{[["Potencial regenerativo",regen,setRegen,[["alta","Alto"],["media","Médio"],["baixa","Baixo"]]],["Pressão de invasoras",invasive,setInvasive,[["baixa","Baixa"],["media","Média"],["alta","Alta"]]],["Erosão",erosion,setErosion,[["baixa","Baixa"],["media","Média"],["alta","Alta"]]],["Acesso operacional",access,setAccess,[["bom","Bom"],["medio","Médio"],["ruim","Ruim"]]]].map(([label,value,setter,opts])=><label key={String(label)} className="grid gap-2 text-sm font-semibold">{String(label)}<Select value={String(value)} onChange={e=>(setter as (v:string)=>void)(e.target.value)}>{(opts as string[][]).map(([v,l])=><option key={v} value={v}>{l}</option>)}</Select></label>)}</CardContent></Card><Card><CardContent className="p-8"><Badge variant={result.color}>Intensidade {result.level}</Badge><h3 className="display-title mt-5 text-4xl font-semibold">{result.method}</h3><p className="mt-4 text-muted-foreground">Custo-base ilustrativo: <strong className="text-foreground">{formatCurrency(result.cost)}/ha</strong></p><div className="mt-8 grid gap-3 sm:grid-cols-3">{[["Diagnóstico de campo","Obrigatório"],["Manutenção","12–36 meses"],["Monitoramento","Trajetória ecológica"]].map(([k,v])=><div key={k} className="rounded-2xl bg-muted p-4"><span className="text-xs text-muted-foreground">{k}</span><strong className="mt-1 block text-sm">{v}</strong></div>)}</div></CardContent></Card></div>
}

function RecipeTool() {
  const [biome,setBiome]=useState<"Mata Atlântica"|"Cerrado">("Mata Atlântica"); const [area,setArea]=useState(5); const [goal,setGoal]=useState("PFNM e bioeconomia")
  const list=species[biome]; const seedlings=Math.round(area*(biome==="Cerrado"?1300:1667)); const speciesCount=goal.includes("Biodiversidade")?55:40
  return <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr]"><Card><CardHeader><CardTitle>Parâmetros</CardTitle><CardDescription>Composição funcional preliminar.</CardDescription></CardHeader><CardContent className="space-y-4"><label className="grid gap-2 text-sm font-semibold">Bioma<Select value={biome} onChange={e=>setBiome(e.target.value as typeof biome)}><option>Mata Atlântica</option><option>Cerrado</option></Select></label><label className="grid gap-2 text-sm font-semibold">Área (ha)<Input type="number" min=".5" step=".5" value={area} onChange={e=>setArea(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Objetivo<Select value={goal} onChange={e=>setGoal(e.target.value)}><option>PFNM e bioeconomia</option><option>Produção de sementes</option><option>Segurança hídrica</option><option>Biodiversidade e conectividade</option></Select></label></CardContent></Card><Card><CardHeader><Badge variant="success" className="w-fit">Receita Nativa</Badge><CardTitle>{biome} • {goal}</CardTitle><CardDescription>Seleção indicativa; não substitui lista florística regional e projeto técnico.</CardDescription></CardHeader><CardContent><div className="mb-5 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-primary p-4 text-white"><span className="text-xs text-white/55">Mudas/sementes</span><strong className="mt-1 block text-xl">~{seedlings.toLocaleString("pt-BR")}</strong></div><div className="rounded-2xl bg-muted p-4"><span className="text-xs text-muted-foreground">Riqueza-alvo</span><strong className="mt-1 block text-xl">{speciesCount} spp.</strong></div><div className="rounded-2xl bg-muted p-4"><span className="text-xs text-muted-foreground">Método-base</span><strong className="mt-1 block text-sm">Plantio misto + condução</strong></div></div><div className="space-y-3">{list.map(s=><div key={s.common} className="grid gap-3 rounded-2xl border p-4 sm:grid-cols-[1fr_1.3fr_auto] sm:items-center"><div><strong>{s.common}</strong><em className="block text-xs text-muted-foreground">{s.scientific}</em></div><span className="text-sm text-muted-foreground">{s.role}</span><Badge>{s.product}</Badge></div>)}</div></CardContent></Card></div>
}

function ImpactTool() {
  const [area,setArea]=useState(20); const [companiesCount,setCompaniesCount]=useState(8); const [method,setMethod]=useState("misto")
  const seedlings=Math.round(area*(method==="regeneracao"?420:method==="muvuca"?900:1667)); const fieldDays=Math.round(area*(method==="regeneracao"?4:method==="muvuca"?7:11)); const monitoring=Math.max(4,Math.round(area/5)); const partners=Math.max(3,Math.round(area/8)+2)
  const report=`NOVAEXI — CENÁRIO DEMONSTRATIVO\nÁrea: ${area} ha\nEmpresas: ${companiesCount}\nMétodo: ${method}\nInsumos estimados: ${seedlings}\nDiárias locais potenciais: ${fieldDays}\nCiclos de monitoramento: ${monitoring}\nParceiros territoriais: ${partners}\n\nValores não constituem projeto técnico ou promessa de impacto.`
  const download=()=>{const blob=new Blob([report],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="novaexi-cenario-impacto.txt";a.click();URL.revokeObjectURL(url)}
  const impactMetrics: { icon: LucideIcon; label: string; value: string | number }[] = [
    { icon: Flower2, label: "Insumos estimados", value: seedlings.toLocaleString("pt-BR") },
    { icon: Users, label: "Diárias locais potenciais", value: fieldDays.toLocaleString("pt-BR") },
    { icon: ClipboardCheck, label: "Ciclos de monitoramento", value: monitoring },
    { icon: Network, label: "Parceiros territoriais", value: partners },
    { icon: Building2, label: "Empresas participantes", value: companiesCount },
    { icon: Trees, label: "Área estruturada", value: `${area} ha` },
  ]
  return <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]"><Card><CardHeader><CardTitle>Cenário de impacto</CardTitle><CardDescription>Indicadores operacionais, sem estimativa de carbono.</CardDescription></CardHeader><CardContent className="space-y-4"><label className="grid gap-2 text-sm font-semibold">Área agregada (ha)<Input type="number" min="1" value={area} onChange={e=>setArea(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Empresas participantes<Input type="number" min="1" value={companiesCount} onChange={e=>setCompaniesCount(Number(e.target.value))}/></label><label className="grid gap-2 text-sm font-semibold">Método<Select value={method} onChange={e=>setMethod(e.target.value)}><option value="regeneracao">Regeneração assistida</option><option value="muvuca">Muvuca</option><option value="misto">Plantio misto</option></Select></label><Button variant="wine" className="w-full" onClick={download}><Download /> Exportar resumo</Button></CardContent></Card><div className="grid gap-4 sm:grid-cols-2">{impactMetrics.map(({icon:Icon,label,value})=><Card key={label}><CardContent className="p-5"><div className="flex items-start justify-between"><div><span className="text-sm text-muted-foreground">{label}</span><strong className="display-title mt-2 block text-3xl">{String(value)}</strong></div><div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon /></div></div></CardContent></Card>)}</div></div>
}

function ToolsView({ defaultTab }: { defaultTab: ToolTab }) {
  return <Tabs key={defaultTab} defaultValue={defaultTab}><TabsList><TabsTrigger value="prematch"><ScanSearch className="mr-2 size-4"/>Pré-match</TabsTrigger><TabsTrigger value="consortium"><WalletCards className="mr-2 size-4"/>Consórcio</TabsTrigger><TabsTrigger value="intensity"><Layers3 className="mr-2 size-4"/>Intensidade</TabsTrigger><TabsTrigger value="recipe"><Flower2 className="mr-2 size-4"/>Receita Nativa</TabsTrigger><TabsTrigger value="impact"><Database className="mr-2 size-4"/>Impacto ESG</TabsTrigger></TabsList><TabsContent value="prematch"><PreMatchTool/></TabsContent><TabsContent value="consortium"><ConsortiumTool/></TabsContent><TabsContent value="intensity"><IntensityTool/></TabsContent><TabsContent value="recipe"><RecipeTool/></TabsContent><TabsContent value="impact"><ImpactTool/></TabsContent></Tabs>
}

function MonitoringView() {
  return <div className="space-y-6"><div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><Card><CardHeader><Badge variant="success" className="w-fit">Em monitoramento</Badge><CardTitle>Consórcio Vale do Paraíba</CardTitle><CardDescription>Linha do tempo demonstrativa da trajetória ecológica.</CardDescription></CardHeader><CardContent><div className="grid gap-3 sm:grid-cols-4">{[["2026","Implantação",true],["2027","Manutenção",true],["2028","Consolidação",false],["2029","Permanência",false]].map(([year,label,active])=><div key={String(year)} className={cn("rounded-2xl p-4",active?"bg-emerald-50":"bg-muted")}><strong>{year}</strong><span className="mt-2 block text-xs text-muted-foreground">{label}</span></div>)}</div></CardContent></Card><Card><CardHeader><CardTitle>Indicadores</CardTitle></CardHeader><CardContent className="space-y-4">{[["Sobrevivência",84],["Cobertura do solo",71],["Controle de invasoras",78],["Regeneração",66]].map(([label,value])=><div key={String(label)}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><strong>{value}%</strong></div><Progress value={Number(value)}/></div>)}</CardContent></Card></div><Card><CardContent className="grid gap-5 p-6 md:grid-cols-2"><div className="territory-grid flex min-h-56 flex-col justify-end rounded-3xl bg-gradient-to-br from-[#b59a75] to-[#6f6047] p-6 text-white"><span className="text-sm text-white/60">Antes</span><strong className="text-2xl">Pastagem degradada</strong></div><div className="territory-grid flex min-h-56 flex-col justify-end rounded-3xl bg-gradient-to-br from-[#8fa884] to-[#35523d] p-6 text-white"><span className="text-sm text-white/60">Depois</span><strong className="text-2xl">Regeneração em consolidação</strong></div></CardContent></Card></div>
}

function EcoPlusView() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const plans = [
    ["Semente", "R$ 1,99", "Boletim digital e mapa do projeto"],
    ["Raiz", "R$ 4,99", "Conteúdo de campo e sorteios de visita"],
    ["Floresta", "R$ 9,99", "Experiências, cesta simbólica e prioridade"],
  ]

  return (
    <div className="space-y-6">
      <Card className="border-0 bg-wine text-white">
        <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge className="bg-white/10 text-sand">Clube de apoio territorial</Badge>
            <h3 className="display-title mt-4 text-4xl font-semibold">Impacto acessível, sem promessa de retorno financeiro.</h3>
            <p className="mt-4 max-w-2xl text-white/65">Contribuições simbólicas apoiam viveiros, redes de sementes, visitas guiadas e ações de comunidades rurais.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 text-center">
            <span className="text-xs text-white/55">Impacto coletivo simulado</span>
            <strong className="display-title mt-2 block text-4xl">R$ 84.620</strong>
            <span className="text-sm text-white/55">12.840 apoiadores</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5 md:grid-cols-3">
        {plans.map(([name, price, text], index) => (
          <Card key={name} className={cn(index === 1 && "border-wine shadow-xl")}>
            <CardHeader>
              <Badge variant={index === 1 ? "wine" : "default"} className="w-fit">{name}</Badge>
              <CardTitle className="display-title text-4xl">{price}<span className="text-sm font-normal text-muted-foreground">/mês</span></CardTitle>
              <CardDescription>{text}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant={index === 1 ? "wine" : "outline"} className="w-full" onClick={() => setSelectedPlan(name)}>Simular apoio</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedPlan !== null} onOpenChange={(open) => !open && setSelectedPlan(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Plano {selectedPlan}</DialogTitle>
            <DialogDescription>Esta é uma simulação de adesão ao clube de apoio territorial. Não há cobrança ou contratação nesta versão acadêmica.</DialogDescription>
          </DialogHeader>
          <div className="rounded-2xl bg-muted p-4 text-sm text-muted-foreground">Em uma versão operacional, esta etapa apresentaria o projeto apoiado, o destino dos recursos, regras de benefícios e transparência financeira.</div>
          <Button variant="wine" onClick={() => setSelectedPlan(null)}>Concluir simulação</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export function MvpPage() {
  const [view,setView]=useState<View>("dashboard")
  const [mobileOpen,setMobileOpen]=useState(false)
  const [collapsed,setCollapsed]=useState(false)
  const [toolTab, setToolTab] = useState<ToolTab>("prematch")
  const [title,subtitle]=viewTitles[view]
  const openTool = (tool: ToolTab) => { setToolTab(tool); setView("tools") }
  const content = view === "dashboard" ? <Dashboard onNavigate={setView}/> : view === "areas" ? <AreasView onOpenTool={openTool}/> : view === "companies" ? <CompaniesView/> : view === "consortia" ? <ConsortiaView onOpenTool={openTool}/> : view === "tools" ? <ToolsView defaultTab={toolTab}/> : view === "monitoring" ? <MonitoringView/> : <EcoPlusView/>
  return (
    <div className="min-h-screen bg-background">
      {mobileOpen && <button type="button" className="fixed inset-0 z-40 bg-forest/60 backdrop-blur-sm lg:hidden" aria-label="Fechar menu" onClick={()=>setMobileOpen(false)}/>} 
      <aside className={cn("fixed inset-y-0 left-0 z-50 flex flex-col bg-forest text-white transition-all duration-300",collapsed?"w-20":"w-72",mobileOpen?"translate-x-0":"-translate-x-full lg:translate-x-0")}>
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5"><Brand light compact={collapsed}/><button type="button" aria-label={collapsed ? "Expandir menu lateral" : "Recolher menu lateral"} className="hidden rounded-xl p-2 text-white/60 hover:bg-white/10 hover:text-white lg:block" onClick={()=>setCollapsed(!collapsed)}><PanelLeftClose className={cn("transition",collapsed&&"rotate-180")}/></button><button type="button" aria-label="Fechar menu lateral" className="rounded-xl p-2 text-white/60 hover:bg-white/10 lg:hidden" onClick={()=>setMobileOpen(false)}><X/></button></div>
        <nav className="scrollbar-thin flex-1 space-y-1 overflow-y-auto p-3">{navItems.map(({id,label,icon:Icon})=><button type="button" key={id} onClick={()=>{setView(id);setMobileOpen(false)}} className={cn("flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition",view===id?"bg-white/12 text-white":"text-white/60 hover:bg-white/8 hover:text-white",collapsed&&"justify-center")}><Icon className="size-5 shrink-0"/>{!collapsed&&<span>{label}</span>}</button>)}</nav>
        <div className="border-t border-white/10 p-3"><Button asChild variant="light" className={cn("w-full",collapsed&&"px-0")}><Link to="/">{collapsed?<Home/>:<><ArrowLeft/> Voltar à homepage</>}</Link></Button></div>
      </aside>
      <main className={cn("transition-all duration-300 lg:ml-72",collapsed&&"lg:ml-20")}>
        <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between gap-4 border-b bg-background/90 px-4 backdrop-blur-xl sm:px-7"><div className="flex items-center gap-3"><button type="button" aria-label="Abrir menu lateral" className="grid size-10 place-items-center rounded-xl border bg-white lg:hidden" onClick={()=>setMobileOpen(true)}><Menu/></button><div><span className="eyebrow text-terracotta">MVP demonstrativo</span><h1 className="text-xl font-semibold">{title}</h1></div></div><div className="hidden items-center gap-3 sm:flex"><Badge variant="outline">Dados simulados</Badge><Button variant="outline" size="sm" onClick={()=>openTool("prematch")}><Calculator/> Ferramentas</Button></div></header>
        <div className="p-4 sm:p-7"><div className="mb-6"><h2 className="display-title text-3xl font-semibold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{subtitle}</p></div>{content}</div>
      </main>
    </div>
  )
}
