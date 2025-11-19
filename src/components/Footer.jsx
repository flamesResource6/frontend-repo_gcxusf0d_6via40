import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-[hsl(222_47%_2%)] border-t border-[hsl(222_20%_15%)]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[hsl(210_15%_95%)]/70">© {new Date().getFullYear()} Intelleo. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[hsl(210_15%_95%)]/70">
            <a href="#" className="hover:text-emerald-400">Privacy</a>
            <a href="#" className="hover:text-emerald-400">Terms</a>
            <a href="#" className="hover:text-emerald-400">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
