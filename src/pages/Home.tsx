import { Bot, BarChart3, Clapperboard } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ProductCard from '../components/ProductCard'
import type { ProductMeta } from '../types/product'

const products: ProductMeta[] = [
  {
    id: 'agent-bot',
    name: 'AI Agent Bot',
    description:
      'Conversational intelligence that interrogates data, surfaces insights, and triggers workflows.',
    path: '/agent-bot',
    icon: Bot,
    gradient: 'before:bg-gradient-to-br before:from-cyan-500/10 before:via-transparent before:to-transparent',
    cta: 'Launch Product',
  },
  {
    id: 'dashboard',
    name: 'Interactive Dashboard',
    description:
      'Enterprise analytics studio with drill-down charts, live KPI streams, and team-wide clarity.',
    path: '/dashboard',
    icon: BarChart3,
    gradient: 'before:bg-gradient-to-br before:from-violet-500/10 before:via-transparent before:to-transparent',
    cta: 'Launch Product',
  },
  {
    id: 'text-to-video',
    name: 'Text-to-Video Studio',
    description:
      'Prompt-to-cinematic generation with scene controls, timeline previews, and rapid iteration.',
    path: '/text-to-video',
    icon: Clapperboard,
    gradient: 'before:bg-gradient-to-br before:from-sky-500/10 before:via-transparent before:to-transparent',
    cta: 'Launch Product',
  },
]

const Home = () => {
  return (
    <main className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="glow-ring" />
        <div className="noise-overlay absolute inset-0 opacity-60" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Unified AI Product Hub
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white md:text-6xl">
            Unified AI Product Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Access powerful AI tools from one platform. Launch agents, dashboards, and
            next-generation media creation in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow">
              Request Demo
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Explore Suite
            </button>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-3">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={0.1 * index}>
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-6">
        <AnimatedSection>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            {[
              { label: 'Active Agents', value: '4.8k' },
              { label: 'Realtime Dashboards', value: '860+' },
              { label: 'Videos Generated', value: '19k' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default Home
