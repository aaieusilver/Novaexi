import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <div className={cn("relative grid size-11 place-items-center overflow-hidden rounded-2xl border", light ? "border-white/20 bg-white/10" : "border-primary/15 bg-primary")}>
        <span className={cn("absolute left-[17px] top-2 h-4 w-3 rotate-[-34deg] rounded-[70%_30%_70%_30%]", light ? "bg-sand" : "bg-sand")} />
        <span className="absolute left-[21px] top-[23px] h-4 w-0.5 rounded bg-terracotta" />
        <span className="absolute left-[20px] top-[28px] h-3 w-0.5 rotate-45 rounded bg-terracotta" />
        <span className="absolute left-[22px] top-[28px] h-3 w-0.5 -rotate-45 rounded bg-terracotta" />
      </div>
      {!compact && (
        <div>
          <strong className={cn("block text-lg leading-none", light ? "text-white" : "text-foreground")}>Novaexi</strong>
          <span className={cn("mt-1 block text-[10px] font-semibold uppercase tracking-[.18em]", light ? "text-white/55" : "text-muted-foreground")}>terra • floresta • futuro</span>
        </div>
      )}
    </Link>
  )
}
