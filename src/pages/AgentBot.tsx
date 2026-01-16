import { Bot, Database, Sparkles, Zap } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import type { FeatureItem } from '../types/product'

const features: FeatureItem[] = [
  {
    title: 'Conversational Analytics',
    description: 'Ask complex questions and receive structured insights with natural language.',
    icon: Sparkles,
  },
  {
    title: 'Dataset Orchestration',
    description: 'Connect multiple data sources and execute secure, on-demand queries.',
    icon: Database,
  },
  {
    title: 'Automated Actions',
    description: 'Trigger workflows, alerts, and scheduled summaries directly from the chat.',
    icon: Zap,
  },
]

const AgentBot = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
      <AnimatedSection>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          AI Agent Bot
        </div>
        <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
          Data Interaction Platform
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          A conversational command center that bridges your teams with high-impact analytics,
          operational insights, and instant action.
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
                  <Bot className="h-5 w-5 text-highlight" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Cognizant AI Hub Agent</p>
                  <p className="text-xs text-slate-400">Real-time dataset intelligence</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                Live Session
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-2xl bg-white/10 p-4 text-slate-200">
                Summarize churn drivers for the last 30 days and surface the top 3 segments at risk.
              </div>
              <div className="ml-auto rounded-2xl bg-gradient-to-r from-cyan-500/30 to-indigo-500/20 p-4 text-white">
                Insights ready. Segment A shows a 12% spike linked to onboarding latency. Segment C is
                impacted by pricing plan migrations. Action: send proactive success outreach.
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-slate-200">
                Create a workflow to alert the team when onboarding latency exceeds 2 hours.
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Command ready: “Deploy alert rule and notify #success”
              <button className="ml-auto rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">
                Execute
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default AgentBot
