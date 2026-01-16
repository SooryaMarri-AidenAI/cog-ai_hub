import { Play } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import WaveDivider from '../components/WaveDivider'
import type { ProductDetail } from '../types/product'
import { productDetails } from '../products'

const ProductDemo = () => {
  const { productId } = useParams<{ productId: string }>()
  const detail: ProductDetail | undefined = productId ? productDetails[productId] : undefined

  if (!detail) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-16">
        <AnimatedSection>
          <h1 className="text-3xl font-semibold text-white">Demo not found</h1>
          <p className="mt-4 text-slate-300">Pick a product to view its walkthrough.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
          >
            Return to Home
          </Link>
        </AnimatedSection>
      </main>
    )
  }

  const Icon = detail.meta.icon

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
      <AnimatedSection>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Demo Tutorial
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Icon className="h-6 w-6 text-accent" />
          </span>
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              {detail.meta.name} Demo
            </h1>
            <p className="mt-2 max-w-2xl text-lg text-slate-300">{detail.meta.summary}</p>
          </div>
        </div>
      </AnimatedSection>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatedSection>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Usage instructions</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-300">
              {detail.usage.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Product walkthrough</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {detail.walkthrough.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to={detail.meta.featurePath}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              View features
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <WaveDivider />

      <section className="mt-8">
        <AnimatedSection>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent p-6">
            <div className="flex items-center gap-3 text-white">
              <Play className="h-5 w-5 text-cyan-200" />
              <span className="text-sm font-semibold">Product walkthrough video</span>
            </div>
            <div className="mt-6 mx-auto w-full max-w-3xl">
              <div className="aspect-video rounded-2xl border border-white/10 bg-black/40" />
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Demo footage placeholder — replace with a product walkthrough video.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default ProductDemo
