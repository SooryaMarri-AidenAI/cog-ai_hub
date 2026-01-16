import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import type { NavItem } from '../types/product'
import cognizantLogo from '../assets/cog_prim_lg_hrz_r_rgb_rev_2022.png'

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Agent Bot', path: '/agent-bot' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Text-to-Video', path: '/text-to-video' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-4 text-white">
          <img
            src={cognizantLogo}
            alt="Cognizant"
            className="h-16 w-auto object-contain md:h-20"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Cognizant
            </p>
            <p className="text-lg font-semibold">Unified AI</p>
          </div>
        </NavLink>

        {/* <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav> */}

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/70 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
