import React from 'react'
import { Brain, ChartLine, FileText, Radar, Database, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Intelligent Data Structuring',
    desc: 'Automatic schema inference turns raw, messy streams into query-ready datasets.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Queries',
    desc: 'Ask questions in plain English and get accurate answers with citations.',
  },
  {
    icon: Radar,
    title: 'Real-time Anomaly Detection',
    desc: 'Detect drift and outliers instantly with adaptive thresholds and alerts.',
  },
  {
    icon: FileText,
    title: 'Automated Report Generation',
    desc: 'Generate polished PDFs with insights, charts, and executive summaries.',
  },
  {
    icon: Database,
    title: 'TimescaleDB + Hypertables',
    desc: 'Dynamic table creation, continuous aggregates, and advanced time-series analytics.',
  },
  {
    icon: ChartLine,
    title: 'Semantic Search & Knowledge Bases',
    desc: 'Vector embeddings power fast retrieval across your devices and metrics.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20 bg-[hsl(222_47%_2%)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,217,98,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[hsl(210_15%_95%)]">Built for modern IoT data</h2>
        <p className="mt-3 text-center text-[hsl(210_15%_95%)]/70">From MQTT ingestion to natural language insights.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-[hsl(222_20%_15%)]/80 bg-[hsl(222_47%_3%)]/60 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,217,98,0.12)] transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-2 ring-1 ring-emerald-500/30">
                  <Icon className="text-emerald-400" size={22} />
                </div>
                <h3 className="text-[hsl(210_15%_95%)] font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-[hsl(210_15%_95%)]/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
