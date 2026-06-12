import { Brand } from "./Brand"

export function SiteFooter() {
  return (
    <footer className="bg-forest py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1.3fr_.7fr] md:items-end">
        <div className="space-y-5">
          <Brand light />
          <p className="max-w-xl text-sm leading-relaxed text-white/60">A Novaexi estrutura conexões territoriais para restauração produtiva com espécies nativas. A validação técnica, jurídica e ambiental depende do instrumento aplicável e dos responsáveis competentes.</p>
        </div>
        <div className="text-sm text-white/45 md:text-right">
          <p>MVP acadêmico demonstrativo</p>
          <p>Dados, editais e valores simulados.</p>
        </div>
      </div>
    </footer>
  )
}
