import { Link } from "react-router-dom"
import {
  ArrowRight, Building2, CheckCircle2, CircleDollarSign, DatabaseZap, Droplets,
  Factory, FileCheck2, Handshake, Landmark, Layers3, Leaf, Map, Network,
  ScanSearch, Flower2, ShieldCheck, Sparkles, Sprout, Trees, Users, WalletCards
} from "lucide-react"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stakeholders = [
  { icon: Building2, title: "Demandantes ambientais", text: "Empresas com condicionantes, compensações, regularização ou compromissos ESG territoriais." },
  { icon: Sprout, title: "Ofertantes territoriais", text: "Produtores e proprietários com áreas degradadas, passivos ou potencial regenerativo." },
  { icon: Network, title: "Cadeia executora", text: "Viveiros, coletores, restauradores, técnicos, municípios e parceiros de monitoramento." },
]

const products = [
  { icon: FileCheck2, name: "Regulariza", text: "Estruturação técnica e territorial para passivos, condicionantes, APP, RL, TAC ou TCRA." },
  { icon: Leaf, name: "Regenera", text: "Condução da regeneração natural, cercamento, controle de invasoras e manutenção de baixo impacto." },
  { icon: Flower2, name: "Implanta", text: "Muvuca, plantio misto, enriquecimento e implantação ativa conforme a intensidade necessária." },
  { icon: Trees, name: "Produz", text: "Restauração produtiva com PFNM, sementes, SAFs com nativas e conexão com incentivos territoriais." },
  { icon: Handshake, name: "Consórcio Territorial", text: "Agrupa aportes empresariais em uma carteira maior e distribui custos proporcionalmente." },
  { icon: Sparkles, name: "Eco Plus", text: "Assinatura de apoio não financeiro para mobilizar consumidores e fortalecer comunidades locais." },
]

const steps = [
  ["01", "Cadastro", "Empresas publicam demandas; produtores disponibilizam áreas e objetivos."],
  ["02", "Pré-triagem", "Bioma, área, instrumento, regeneração, acesso e riscos são organizados."],
  ["03", "Agregação", "Demandas pequenas são consolidadas em matches ou consórcios territoriais."],
  ["04", "Projeto", "Engenharia florestal, direito ambiental e parceiros estruturam a solução."],
  ["05", "Execução", "A implantação ocorre por rede local, com manutenção e governança contratual."],
  ["06", "Monitoramento", "Mapas, indicadores de campo e relatórios registram trajetória e permanência."],
]

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main id="main-content">
        <section className="grain relative overflow-hidden bg-forest pb-24 pt-16 text-white lg:pb-32 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 territory-grid opacity-30" />
          <div className="pointer-events-none absolute -right-32 -top-32 size-[38rem] rounded-full bg-terracotta/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 left-1/3 size-[34rem] rounded-full bg-olive/20 blur-3xl" />
          <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="fade-up">
              <Badge className="mb-6 border border-white/15 bg-white/10 text-sand">Infraestrutura de mercado para restauração</Badge>
              <h1 className="display-title max-w-4xl text-5xl font-semibold leading-[.98] sm:text-6xl lg:text-7xl">
                Pequenas demandas. <span className="text-sand">Grande impacto territorial.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
                A Novaexi agrega empresas, produtores e parceiros técnicos para transformar passivos ambientais dispersos em carteiras viáveis de restauração ecológica e produtiva.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="wine" size="lg"><Link to="/mvp">Explorar o MVP <ArrowRight /></Link></Button>
                <Button variant="light" size="lg" onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}>Entender o modelo</Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sand" /> Pré-match territorial</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sand" /> Consórcios empresariais</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sand" /> Receita Nativa</span>
              </div>
            </div>

            <div className="relative min-h-[480px]">
              <div className="absolute inset-3 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md" />
              <div className="absolute inset-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-sand/95 via-[#d1d8c2] to-[#829578] shadow-2xl">
                <div className="territory-grid absolute inset-0 opacity-40" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" fill="none">
                  <path d="M-20 395C82 302 175 285 260 336c94 57 174 49 280-40V560H-20Z" fill="#47634e" opacity=".92"/>
                  <path d="M-30 438c116-76 226-79 341-13 89 51 148 43 241-24v170H-30Z" fill="#26372f"/>
                  <path d="M42 347c83-96 181-112 278-46 55 37 105 34 164-18" stroke="#fff" strokeOpacity=".7" strokeWidth="4" strokeDasharray="12 12"/>
                  <path d="M254 303c-3-78 20-145 68-201 43 62 57 132 42 211" stroke="#26372f" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M319 124c-49 7-80 37-92 88 47-4 78-34 92-88Zm10 17c45 9 72 41 80 88-43-7-70-36-80-88Z" fill="#26372f"/>
                </svg>
                <div className="absolute left-[18%] top-[46%] size-5 rotate-45 rounded-t-full rounded-bl-full bg-wine ring-4 ring-white/80" />
                <div className="absolute right-[22%] top-[34%] size-5 rotate-45 rounded-t-full rounded-bl-full bg-terracotta ring-4 ring-white/80" />
                <div className="absolute bottom-[28%] right-[36%] size-5 rotate-45 rounded-t-full rounded-bl-full bg-primary ring-4 ring-white/80" />
              </div>
              <Card className="floating-card absolute left-0 top-12 w-56 border-white/20 bg-white/90 backdrop-blur">
                <CardContent className="p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pré-match</span>
                  <div className="mt-2 flex items-end justify-between"><strong className="text-3xl">86%</strong><Badge variant="success">Forte</Badge></div>
                  <Progress value={86} className="mt-3" />
                </CardContent>
              </Card>
              <Card className="floating-card absolute bottom-16 right-0 w-64 border-white/20 bg-forest/92 text-white backdrop-blur">
                <CardContent className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/55">Consórcio territorial</span>
                  <strong className="mt-2 block text-xl">Vale do Paraíba</strong>
                  <div className="mt-4 flex justify-between text-sm text-white/65"><span>34 de 50 ha</span><span>68%</span></div>
                  <Progress value={68} className="mt-2 bg-white/10" />
                </CardContent>
              </Card>
              <Card className="floating-card absolute bottom-3 left-10 w-52 border-white/20 bg-sand/95">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="grid size-11 place-items-center rounded-2xl bg-primary text-white"><Leaf /></div>
                  <div><span className="text-xs text-muted-foreground">Método sugerido</span><strong className="block text-sm">Regeneração assistida</strong></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="problema" className="py-24">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="eyebrow text-terracotta">O gargalo</span>
                <h2 className="display-title mt-4 text-4xl font-semibold leading-tight sm:text-5xl">O mercado existe, mas está pulverizado.</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">Pequenos projetos carregam custos técnicos, jurídicos e operacionais que não diminuem na mesma proporção da área. Individualmente, muitas demandas não alcançam escala econômica.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  [Factory, "Demandas fragmentadas", "Empresas médias precisam regularizar, compensar ou investir, mas não têm estrutura interna para montar a operação."],
                  [Landmark, "Áreas dispersas", "Produtores possuem passivos ou terras degradadas que não entram em grandes carteiras de restauração."],
                  [CircleDollarSign, "Custo de transação", "Prospecção, diagnóstico, contratos, implantação e monitoramento pesam demais em projetos isolados."],
                  [ShieldCheck, "Complexidade regulatória", "Cada modalidade exige enquadramento jurídico, territorial e técnico específico; não existe uma compensação genérica."],
                ].map(([Icon, title, text]) => (
                  <Card key={String(title)} className="transition hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon /></div>
                      <h3 className="text-lg font-semibold">{String(title)}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{String(text)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucao" className="bg-[#eee8dc] py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-wine">A solução Novaexi</span>
              <h2 className="display-title mt-4 text-4xl font-semibold sm:text-5xl">Agregamos o que sozinho não se paga.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A plataforma organiza oferta territorial, demanda ambiental e cadeia executora em um único fluxo de pré-triagem, estruturação e monitoramento.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {stakeholders.map(({ icon: Icon, title, text }, i) => (
                <Card key={title} className="relative overflow-hidden">
                  <div className="absolute right-4 top-2 text-7xl font-black text-primary/[.04]">0{i + 1}</div>
                  <CardContent className="relative p-7">
                    <div className="grid size-14 place-items-center rounded-2xl bg-primary text-white"><Icon /></div>
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-24">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow text-terracotta">Fluxo operacional</span>
                <h2 className="display-title mt-4 text-4xl font-semibold sm:text-5xl">Da demanda dispersa à carteira territorial.</h2>
              </div>
              <Button asChild variant="outline"><Link to="/mvp">Testar as ferramentas <ArrowRight /></Link></Button>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {steps.map(([n, title, text]) => (
                <div key={n} className="bg-background p-7 transition hover:bg-white">
                  <span className="font-mono text-sm font-bold text-wine">{n}</span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="grain bg-forest py-24 text-white">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <span className="eyebrow text-sand">Portfólio modular</span>
                <h2 className="display-title mt-4 text-4xl font-semibold sm:text-5xl">Uma plataforma, diferentes intensidades de restauração.</h2>
                <p className="mt-5 leading-relaxed text-white/60">A Novaexi não vende uma solução única. Categoriza o contexto territorial e estrutura o produto mais coerente para cada área e demanda.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {products.map(({ icon: Icon, name, text }) => (
                  <div key={name} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[.1]">
                    <div className="grid size-11 place-items-center rounded-2xl bg-sand text-forest"><Icon /></div>
                    <h3 className="mt-5 text-lg font-semibold">Novaexi {name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-shell">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-wine to-[#813d49] text-white">
              <div className="grid lg:grid-cols-[1fr_.8fr]">
                <CardContent className="p-9 sm:p-12">
                  <Badge className="bg-white/10 text-sand">Dentro do MVP</Badge>
                  <h2 className="display-title mt-5 text-4xl font-semibold sm:text-5xl">Ferramentas que transformam narrativa em operação.</h2>
                  <p className="mt-5 max-w-2xl leading-relaxed text-white/70">Simule compatibilidade territorial, custos compartilhados, intensidade de restauração, composição funcional de espécies e indicadores de impacto.</p>
                  <Button asChild variant="light" size="lg" className="mt-8"><Link to="/mvp">Abrir plataforma <ArrowRight /></Link></Button>
                </CardContent>
                <div className="grid gap-3 bg-black/10 p-8 sm:grid-cols-2">
                  {[
                    [ScanSearch, "Pré-match territorial"], [WalletCards, "Calculadora de consórcio"], [Layers3, "Classificador de intensidade"], [Flower2, "Receita Nativa"], [DatabaseZap, "Estimador ESG"], [Map, "Catálogo de áreas"],
                  ].map(([Icon, label]) => <div key={String(label)} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><Icon className="text-sand" /><span className="text-sm font-semibold">{String(label)}</span></div>)}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="impacto" className="bg-[#ebe5d9] py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow text-terracotta">Tese de impacto</span>
              <h2 className="display-title mt-4 text-4xl font-semibold sm:text-5xl">Mais do que hectares: infraestrutura territorial.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">Ao organizar demandas fragmentadas, a Novaexi amplia o mercado de espécies nativas, ativa cadeias locais, reduz barreiras de entrada e cria rastreabilidade para empresas e produtores.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[[Droplets,"Segurança hídrica"],[Users,"Inclusão territorial"],[Trees,"Biodiversidade"],[CircleDollarSign,"Economia verde"]].map(([Icon,label]) => <div key={String(label)} className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-primary text-white"><Icon /></div><span className="font-semibold">{String(label)}</span></div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[ ["1.254 ha","Base territorial simulada"], ["96","Empresas no cenário"], ["328","Produtores cadastrados"], ["R$ 4,8 mi","Carteira demonstrativa"] ].map(([value,label],i) => (
                <Card key={value} className={i === 0 ? "col-span-2 bg-primary text-white" : ""}>
                  <CardContent className="p-7"><strong className="display-title text-4xl">{value}</strong><span className={`mt-2 block text-sm ${i === 0 ? "text-white/60" : "text-muted-foreground"}`}>{label}</span></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-shell text-center">
            <span className="eyebrow text-wine">Explore a ideia por dentro</span>
            <h2 className="display-title mx-auto mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">Onde a obrigação ambiental encontra a oportunidade territorial.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Entre no MVP, escolha uma perspectiva e teste as ferramentas que sustentam o modelo de negócio.</p>
            <Button asChild variant="wine" size="lg" className="mt-8"><Link to="/mvp">Entrar no MVP <ArrowRight /></Link></Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
