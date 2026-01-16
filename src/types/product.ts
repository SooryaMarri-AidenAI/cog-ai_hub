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
  path: string
  icon: LucideIcon
  gradient: string
  cta: string
}

export interface NavItem {
  label: string
  path: string
}
