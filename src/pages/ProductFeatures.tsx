import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import WaveDivider from '../components/WaveDivider'
import type { ProductDetail } from '../types/product'
import { productDetails } from '../products'

const ProductFeatures = () => {
  const { productId } = useParams<{ productId: string }>()
  const detail: ProductDetail | undefined = productId ? productDetails[productId] : undefined

  if (!detail) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-16">
        <AnimatedSection>
          <h1 className="text-3xl font-semibold text-white">Product not found</h1>
          <p className="mt-4 text-slate-300">Choose a product from the hub to explore.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
          >
            Return to Home
            <ArrowRight className="h-4 w-4" />
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
          Product Features
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Icon className="h-6 w-6 text-accent" />
          </span>
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">{detail.meta.name}</h1>
            <p className="mt-2 max-w-2xl text-lg text-slate-300">{detail.meta.summary}</p>
          </div>
        </div>
      </AnimatedSection>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {detail.featureHighlights.map((feature, index) => {
          const FeatureIcon = feature.icon
          return (
            <AnimatedSection key={feature.title} delay={0.1 * index}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <FeatureIcon className="h-5 w-5 text-highlight" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </section>

      <WaveDivider />

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatedSection>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">What it delivers</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {detail.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Go to demo</h2>
            <p className="mt-3 text-sm text-slate-300">
              Explore the full walkthrough and usage guide for hands-on experience.
            </p>
            <Link
              to={detail.meta.demoPath}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              View demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default ProductFeatures
