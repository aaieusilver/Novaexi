import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Brand } from "./Brand"
import { Button } from "@/components/ui/button"

const links = [
  ["Problema", "problema"],
  ["Solução", "solucao"],
  ["Como funciona", "como-funciona"],
  ["Produtos", "produtos"],
  ["Impacto", "impacto"],
] as const

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navigateToSection = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-forest/92 text-white backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Brand light />

        <nav aria-label="Navegação institucional" className="hidden items-center gap-6 lg:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              className="text-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              onClick={() => navigateToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="light"><Link to="/mvp">Acessar MVP</Link></Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl bg-white/10 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="section-shell grid gap-2 border-t border-white/10 py-4 lg:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => navigateToSection(id)}
              className="rounded-xl px-3 py-2 text-left text-white/75 hover:bg-white/10 hover:text-white"
            >
              {label}
            </button>
          ))}
          <Button asChild variant="light" className="mt-2"><Link onClick={() => setOpen(false)} to="/mvp">Acessar MVP</Link></Button>
        </div>
      )}
    </header>
  )
}
