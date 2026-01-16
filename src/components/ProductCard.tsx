import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import type { ProductMeta } from '../types/product'

interface ProductCardProps {
  product: ProductMeta
}

const ProductCard = ({ product }: ProductCardProps) => {
  const Icon = product.icon
  const navigate = useNavigate()

  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 0 60px rgba(92, 198, 255, 0.28)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      role="button"
      tabIndex={0}
      onClick={() => navigate(product.featurePath)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          navigate(product.featurePath)
        }
      }}
      className={`group relative flex h-full flex-col cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-glass p-6 shadow-glow backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-70 before:transition before:duration-700 before:content-[''] group-hover:before:opacity-100 ${product.gradient}`}
    >
      <div className="pointer-events-none absolute -right-10 top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl transition duration-700 group-hover:bg-white/20" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
      </div>
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <span className="font-medium uppercase tracking-[0.2em]">AI Product</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{product.description}</p>
      <Link
        to={product.demoPath}
        target="_blank"
        onClick={(event) => event.stopPropagation()}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
      >
        {product.cta}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  )
}

export default ProductCard
