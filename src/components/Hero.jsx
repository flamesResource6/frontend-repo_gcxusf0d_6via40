import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" aria-label="Interactive 3D data visualization">
      <div className="absolute inset-0 bg-[hsl(222_47%_2%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(8,9,20,0.25)] to-[rgb(8,9,20,0.85)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(210_15%_95%)] drop-shadow-[0_0_25px_rgba(0,217,98,0.2)]">
                Transform Raw IoT Data Into Intelligent Insights
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
                className="mt-4 text-lg text-[hsl(210_15%_95%)]/80">
                Connect any data source. Our AI automatically structures your data and builds intelligent knowledge bases for instant insights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#get-started" className="pointer-events-auto inline-flex items-center rounded-xl bg-[hsl(155_85%_55%)] px-6 py-3 text-[hsl(222_47%_2%)] font-semibold shadow-[0_10px_30px_rgba(0,217,98,0.25)] hover:brightness-110 transition">
                  Start Free Trial
                </a>
                <a href="#demo" className="pointer-events-auto inline-flex items-center rounded-xl border border-[hsl(222_20%_15%)]/80 bg-[hsl(222_20%_8%)]/70 px-6 py-3 text-[hsl(210_15%_95%)]/90 backdrop-blur-sm hover:bg-[hsl(222_20%_8%)] transition">
                  Watch Demo
                </a>
              </motion.div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  'MQTT Ingestion',
                  'TimescaleDB',
                  'Schema Inference',
                  'NL Queries',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[hsl(222_20%_15%)]/80 bg-[hsl(222_47%_3%)]/60 p-3 text-center text-sm text-[hsl(210_15%_95%)]/70 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[hsl(222_20%_15%)]/80 bg-[hsl(222_47%_3%)]/60 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] pointer-events-auto">
                <div className="grid grid-cols-2 gap-4 text-[hsl(210_15%_95%)]/80">
                  <div className="rounded-2xl border border-[hsl(222_20%_15%)]/60 p-4">
                    <p className="text-xs">Real-time Monitoring</p>
                    <p className="mt-2 text-2xl font-semibold text-emerald-400">5ms</p>
                    <p className="text-xs opacity-70">avg latency</p>
                  </div>
                  <div className="rounded-2xl border border-[hsl(222_20%_15%)]/60 p-4">
                    <p className="text-xs">Data Points</p>
                    <p className="mt-2 text-2xl font-semibold">52+</p>
                    <p className="text-xs opacity-70">sensor metrics</p>
                  </div>
                  <div className="rounded-2xl border border-[hsl(222_20%_15%)]/60 p-4 col-span-2">
                    <p className="text-xs">Capabilities</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {['Anomaly Detection', 'Semantic Search', 'PDF Reports', 'Slack Alerts'].map((cap) => (
                        <span key={cap} className="rounded-lg bg-[hsl(222_20%_8%)]/70 border border-[hsl(222_20%_15%)]/60 px-2 py-1">{cap}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
