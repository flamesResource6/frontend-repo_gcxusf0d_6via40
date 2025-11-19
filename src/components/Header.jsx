import React from 'react'
import { Menu, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[hsl(222_20%_15%)]/60 bg-[hsl(222_20%_8%)]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.35)] animate-pulse" />
            <Link to="/" className="text-[hsl(210_15%_95%)] font-semibold tracking-tight">Intelleo IoT Agent</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[hsl(210_15%_95%)]/70">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#how" className="hover:text-emerald-400 transition-colors">How it works</a>
            <a href="#tech" className="hover:text-emerald-400 transition-colors">Technology</a>
          </nav>
          <div className="flex items-center gap-3 pr-3">
            <Link to="/signin" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[hsl(210_15%_95%)]/80 hover:text-[hsl(210_15%_95%)] transition-colors">
              <LogIn size={18} />
              <span>Sign in</span>
            </Link>
            <Link to="/signup" className="inline-flex items-center rounded-xl bg-[hsl(155_85%_55%)] px-4 py-2 text-[hsl(222_47%_2%)] font-semibold shadow-[0_10px_30px_rgba(0,217,98,0.25)] hover:brightness-110 transition">
              Get started
            </Link>
            <button className="md:hidden p-2 text-[hsl(210_15%_95%)]/80" aria-label="Menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
