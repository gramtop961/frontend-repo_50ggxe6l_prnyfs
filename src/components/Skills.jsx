import { motion } from 'framer-motion'
import { Gamepad2, Code2, Brain, Wrench, Zap } from 'lucide-react'

const sections = [
  {
    icon: Gamepad2,
    title: 'Game Engine',
    items: ['Unity (Primary)'],
  },
  {
    icon: Code2,
    title: 'Programming Languages',
    items: ['C#', 'C++', 'Java'],
  },
  {
    icon: Brain,
    title: 'Game Systems',
    items: [
      '2D/3D Physics Simulation',
      'AI Systems (state machines, patrolling, chasing)',
      'Gameplay Mechanics (movement, combat, puzzles)',
      'UI Systems (HUD, menus, transitions)',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git / GitHub', 'Blender', 'Maya', 'VS Code'],
  },
  {
    icon: Zap,
    title: 'Specialties',
    items: [
      'Rapid Prototyping',
      'Multiplayer Basics',
      'Optimization & Clean Architecture',
      'End-to-End Game Production Workflow',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0D0D0F] text-[#F1EFEA] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A537]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#D8A537]/60 hover:shadow-[0_0_35px_0_rgba(216,165,55,0.2)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="w-5 h-5 text-[#1DBB61]" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="space-y-2 text-[#F1EFEA]/75">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-0.5 w-4 bg-gradient-to-r from-[#1DBB61] to-[#D8A537] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
