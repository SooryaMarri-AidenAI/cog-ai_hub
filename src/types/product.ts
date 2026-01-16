import type { LucideIcon } from 'lucide-react'

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface ProductMeta {
  id: string
  name: string
  description: string
  summary: string
  path: string
  featurePath: string
  demoPath: string
  icon: LucideIcon
  gradient: string
  cta: string
}

export interface NavItem {
  label: string
  path: string
}

export interface ProductDetail {
  meta: ProductMeta
  featureHighlights: FeatureItem[]
  walkthrough: string[]
  usage: string[]
  highlights: string[]
}
