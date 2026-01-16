import { Clapperboard, Film, Sparkles, Wand2 } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import type { FeatureItem } from '../types/product'

const features: FeatureItem[] = [
  {
    title: 'Prompt-to-Storyboard',
    description: 'Turn a single prompt into multi-scene storyboards with cinematic pacing.',
    icon: Sparkles,
  },
  {
    title: 'Style Control',
    description: 'Dial in lighting, camera motion, and mood with branded presets.',
    icon: Wand2,
  },
  {
    title: 'Timeline Editing',
    description: 'Refine scenes, insert overlays, and export at production-ready quality.',
    icon: Film,
  },
]

const previews = [
  { title: 'Urban Neon', duration: '0:18', status: 'Rendering' },
  { title: 'Product Reveal', duration: '0:42', status: 'Ready' },
  { title: 'Concept Sprint', duration: '0:27', status: 'Queued' },
]

const TextToVideo = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
      <AnimatedSection>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Text-to-Video AI Generator
        </div>
        <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
          Cinematic output from a single prompt
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Deliver premium video drafts with AI-assisted storyboards, dynamic scene control, and
          instant iterations.
        </p>
      </AnimatedSection>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <AnimatedSection key={feature.title} delay={0.1 * index}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </section>

      <section className="mt-14">
        <AnimatedSection>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <Clapperboard className="h-5 w-5 text-highlight" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Generation Queue</p>
                  <p className="text-xs text-slate-400">12 assets • 3 in progress</p>
                </div>
              </div>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">
                New Prompt
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {previews.map((preview) => (
                <div
                  key={preview.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                    <span>{preview.title}</span>
                    <span>{preview.duration}</span>
                  </div>
                  <span className="mt-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">
                    {preview.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default TextToVideo
