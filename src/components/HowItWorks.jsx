import React from 'react'

const steps = [
  {
    title: 'Connect Your Data',
    desc: 'Ingest MQTT streams and existing databases with zero setup.',
  },
  {
    title: 'AI Structures Your Data',
    desc: 'Schema inference, embeddings, and knowledge graph creation.',
  },
  {
    title: 'Ask Questions',
    desc: 'Use natural language to explore patterns and metrics.',
  },
  {
    title: 'Get Insights',
    desc: 'Dashboards, alerts, and exportable reports.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-[hsl(222_47%_2%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[hsl(210_15%_95%)]">How it works</h2>
        <p className="mt-3 text-center text-[hsl(210_15%_95%)]/70">A guided path from raw signals to decisions.</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-3xl border border-[hsl(222_20%_15%)]/80 bg-[hsl(222_47%_3%)]/60 backdrop-blur-sm p-6 text-center">
              <div className="mx-auto h-24 w-full rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent ring-1 ring-emerald-500/20" />
              <h3 className="mt-4 text-[hsl(210_15%_95%)] font-medium">{s.title}</h3>
              <p className="mt-2 text-[hsl(210_15%_95%)]/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
