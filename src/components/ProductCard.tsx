import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProductMeta } from '../types/product'

interface ProductCardProps {
  product: ProductMeta
}

const ProductCard = ({ product }: ProductCardProps) => {
  const Icon = product.icon

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-glass p-6 shadow-glow backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:content-[''] ${product.gradient}`}
    >
      <div className="pointer-events-none absolute -right-10 top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <span className="font-medium uppercase tracking-[0.2em]">AI Product</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{product.description}</p>
      <Link
        to={product.path}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
      >
        {product.cta}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  )
}

export default ProductCard
