import { Bot, BarChart3, Clapperboard, Database, Sparkles, Zap, Layers, Activity, Wand2, Film, BarChart, Presentation } from 'lucide-react'
import type { ProductDetail } from './types/product'

export const productDetails: Record<string, ProductDetail> = {
  // 'agent-bot': {
  //   meta: {
  //     id: 'agent-bot',
  //     name: 'AI Agent Bot',
  //     description:
  //       'Conversational intelligence that interrogates data, surfaces insights, and generates visuals.',
  //     summary:
  //       'A conversational command center that connects your teams with real-time analytics and automated actions.',
  //     path: '/agent-bot',
  //     featurePath: '/products/agent-bot/features',
  //     demoPath: 'http://localhost:3000', // TODO: Update demo path
  //     icon: Bot,
  //     gradient:
  //       'before:bg-gradient-to-br before:from-cyan-500/10 before:via-transparent before:to-transparent',
  //     cta: 'Launch Product',
  //   },
  //   featureHighlights: [
  //     {
  //       title: 'Conversational analytics',
  //       description: 'Ask questions, receive structured insights, and dig into source data instantly.',
  //       icon: Sparkles,
  //     },
  //     {
  //       title: 'Dataset orchestration',
  //       description: 'Blend multiple sources into a single, trusted knowledge layer for the agent.',
  //       icon: Database,
  //     },
  //     {
  //       title: 'Actionable workflows',
  //       description: 'Trigger alerts, tasks, and integrations without leaving the chat.',
  //       icon: Zap,
  //     },
  //   ],
  //   walkthrough: [
  //     'Start with a dataset overview and ask a natural language query.',
  //     'Review insight cards and request deeper segmentation.',
  //     'Deploy automated actions or alerts from the response.',
  //   ],
  //   usage: [
  //     'Connect data sources and define access roles.',
  //     'Query with natural language or prebuilt prompts.',
  //     'Send insights to Slack, email, or your workflow tools.',
  //   ],
  //   highlights: [
  //     'Unified agent interface for business intelligence teams.',
  //     'Fast insight delivery with recommended next steps.',
  //     'Operational automation built into every answer.',
  //   ],
  // },
  'agent-bot': {
  meta: {
    id: 'agent-bot',
    name: 'Analytics Agent',
    description:
      'An interactive analytics agent that answers questions with data-backed insights, visuals, and one-click actions.',
    summary:
      'A conversational command center where teams explore data, generate visuals, and export insights into presentations.',
    path: '/agent-bot',
    featurePath: '/products/agent-bot/features',
    demoPath: 'http://localhost:3000', // TODO: Update demo path
    icon: Bot,
    gradient:
      'before:bg-gradient-to-br before:from-cyan-500/10 before:via-transparent before:to-transparent',
    cta: 'Launch Agent',
  },

  featureHighlights: [
    {
      title: 'Interactive AI responses',
      description:
        'Every answer includes suggested follow-up actions, filters, and drill-down buttons.',
      icon: Sparkles,
    },
    {
      title: 'Data-driven visual generation',
      description:
        'Automatically generate charts, tables, and KPI cards directly from connected datasets.',
      icon: BarChart,
    },
    {
      title: 'Presentation-ready exports',
      description:
        'Export insights and visuals into a structured PowerPoint deck with one click.',
      icon: Presentation,
    },
    {
      title: 'Dataset orchestration',
      description:
        'Blend multiple sources into a governed, trusted knowledge layer for the agent.',
      icon: Database,
    },
  ],

  walkthrough: [
    'Ask a natural-language question about your data.',
    'Review AI-generated insights with charts and tables.',
    'Click suggested actions to drill down, compare, or segment.',
    'Export the analysis into a PowerPoint or trigger an automated workflow.',
  ],

  usage: [
    'Connect datasets and define permissions.',
    'Query data using chat or suggestion buttons.',
    'Generate visuals and refine insights interactively.',
    'Export findings to PPT or share via Slack and email.',
  ],

  highlights: [
    'Not a chat bot — a visual analytics agent.',
    'Guided exploration through clickable AI suggestions.',
    'From question to presentation in minutes.',
  ],
},

  dashboard: {
    meta: {
      id: 'dashboard',
      name: 'Interactive Dashboard',
      description:
        'Enterprise analytics studio with drill-down charts, live KPI streams, and team-wide clarity.',
      summary:
        'A premium analytics studio that unifies live KPIs, revenue performance, and executive narratives.',
      path: '/dashboard',
      featurePath: '/products/dashboard/features',
      demoPath: '/products/dashboard/demo',
      icon: BarChart3,
      gradient:
        'before:bg-gradient-to-br before:from-violet-500/10 before:via-transparent before:to-transparent',
      cta: 'Launch Product',
    },
    featureHighlights: [
      {
        title: 'Live KPI streams',
        description: 'Monitor metrics that update in real time with adaptive alerting.',
        icon: Activity,
      },
      {
        title: 'Drill-down analytics',
        description: 'Click any metric to uncover cohorts, regions, or time series drivers.',
        icon: BarChart3,
      },
      {
        title: 'Executive narratives',
        description: 'Auto-generate summaries that align stakeholders quickly.',
        icon: Layers,
      },
    ],
    walkthrough: [
      'Land on the executive overview and spot anomalies.',
      'Open a KPI card to reveal regional and cohort data.',
      'Share narrative summaries with leadership instantly.',
    ],
    usage: [
      'Choose KPI dashboards from the library.',
      'Pin the charts you want in executive views.',
      'Export snapshots or schedule reports.',
    ],
    highlights: [
      'Balanced analytics for operators and executives.',
      'Flexible dashboards with premium data storytelling.',
      'Real-time signal detection with deep drill-down.',
    ],
  },
  'text-to-video': {
    meta: {
      id: 'text-to-video',
      name: 'Text-to-Video Studio',
      description:
        'Prompt-to-cinematic generation with scene controls, timeline previews, and rapid iteration.',
      summary:
        'Convert prompts into cinematic drafts, curated storyboards, and shareable cuts in minutes.',
      path: '/text-to-video',
      featurePath: '/products/text-to-video/features',
      demoPath: '/products/text-to-video/demo',
      icon: Clapperboard,
      gradient:
        'before:bg-gradient-to-br before:from-sky-500/10 before:via-transparent before:to-transparent',
      cta: 'Launch Product',
    },
    featureHighlights: [
      {
        title: 'Prompt-to-storyboard',
        description: 'Generate multi-scene storyboards with cinematic pacing.',
        icon: Sparkles,
      },
      {
        title: 'Style controls',
        description: 'Fine-tune lighting, motion, and tone with brand presets.',
        icon: Wand2,
      },
      {
        title: 'Timeline editing',
        description: 'Refine cuts, overlays, and exports at production-ready quality.',
        icon: Film,
      },
    ],
    walkthrough: [
      'Enter a product prompt and choose your style pack.',
      'Adjust scene timing and camera motion.',
      'Export to your team for review and approvals.',
    ],
    usage: [
      'Define a creative brief and brand kit.',
      'Generate multiple storyboard variants.',
      'Select the best cut and export the final video.',
    ],
    highlights: [
      'Rapid creative iteration without heavy tooling.',
      'Consistent style control across output.',
      'Team-ready reviews and approvals.',
    ],
  },
}
