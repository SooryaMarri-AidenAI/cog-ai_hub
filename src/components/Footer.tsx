const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row">
        <p>Cognizant AI Hub © 2026. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>aihub@cognizant.com</span>
          <span>San Francisco • Global</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
