import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const AnimatedSection = ({ children, delay = 0, className }: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      variants={baseVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
