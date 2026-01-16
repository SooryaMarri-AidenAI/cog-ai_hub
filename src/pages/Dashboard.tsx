import { Activity, BarChart3, Layers, LineChart } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import type { FeatureItem } from '../types/product'

const features: FeatureItem[] = [
  {
    title: 'Live KPI Streams',
    description: 'Monitor operational health with second-by-second updates and anomaly detection.',
    icon: Activity,
  },
  {
    title: 'Drill-Down Analytics',
    description: 'Click into any metric to reveal cohort, geography, and timeline insights.',
    icon: BarChart3,
  },
  {
    title: 'Executive Narratives',
    description: 'Auto-generated narratives keep stakeholders aligned with the data story.',
    icon: Layers,
  },
]

const Dashboard = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
      <AnimatedSection>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Interactive Dashboard Platform
        </div>
        <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
          Analytics that move at enterprise speed
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Unify performance metrics, revenue intelligence, and operational signals into a single
          immersive dashboard suite.
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
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
            {[
              { label: 'Revenue', value: '$4.9M', trend: '+18%' },
              { label: 'Active Accounts', value: '2,460', trend: '+6.2%' },
              { label: 'Churn Risk', value: '3.4%', trend: '-1.1%' },
            ].map((card) => (
              <div key={card.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-semibold text-white">{card.value}</p>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">
                    {card.trend}
                  </span>
                </div>
              </div>
            ))}
            <div className="col-span-full grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent p-6">
                <div className="flex items-center gap-3 text-white">
                  <LineChart className="h-5 w-5 text-cyan-200" />
                  <span className="text-sm font-semibold">Pipeline Velocity</span>
                </div>
                <div className="mt-6 h-36 rounded-xl border border-white/10 bg-black/30" />
                <p className="mt-4 text-xs text-slate-400">
                  Momentum up 11% week-over-week. Keep focus on mid-market conversions.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent p-6">
                <div className="flex items-center gap-3 text-white">
                  <BarChart3 className="h-5 w-5 text-violet-200" />
                  <span className="text-sm font-semibold">Region Performance</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { region: 'North America', value: '86%' },
                    { region: 'EMEA', value: '79%' },
                    { region: 'APAC', value: '83%' },
                    { region: 'LATAM', value: '74%' },
                  ].map((entry) => (
                    <div
                      key={entry.region}
                      className="rounded-xl border border-white/10 bg-black/30 p-3"
                    >
                      <p className="text-xs text-slate-400">{entry.region}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{entry.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default Dashboard
