import AnimatedSection from '../components/AnimatedSection'
import ProductCard from '../components/ProductCard'
// import WaveDivider from '../components/WaveDivider'
import { productDetails } from '../products'

const Home = () => {
  const products = Object.values(productDetails).map((detail) => detail.meta)

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="glow-ring" />
        <div className="noise-overlay absolute inset-0 opacity-60" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      
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

      {/* <WaveDivider /> */}

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-4 auto-rows-fr">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={0.1 * index} className="h-full">
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
        <AnimatedSection delay={0.3} className="h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-slate-300">
            <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Next release</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              More Products Coming Soon
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
              We are building the next wave of AI tooling for enterprise teams. Stay tuned for new
              launches across automation, research, and creative ops.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* <WaveDivider flip /> */}

      <section className="mx-auto mt-16 w-full max-w-6xl px-6">
        <AnimatedSection>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            {[
              { label: 'Slides Generated', value: '4.8k' },
              { label: 'Realtime Dashboards', value: '860+' },
              { label: 'Videos Generated', value: '1.9k' },
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
