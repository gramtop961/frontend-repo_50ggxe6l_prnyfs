import { motion } from 'framer-motion'

const items = [
  'IIT BHU Maze Solver Competition',
  'Finished & published 2 complete Unity games',
  'Hackathon: AI-driven Farmer–Exporter Platform',
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#0D0D0F] text-[#F1EFEA] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A537]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-[#D8A537]/40 bg-gradient-to-b from-[#D8A537]/10 to-transparent shadow-[0_0_30px_0_rgba(216,165,55,0.15)]"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-[#D8A537] to-[#1DBB61] rounded-full mb-4" />
              <p className="text-[#F1EFEA]/85">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
