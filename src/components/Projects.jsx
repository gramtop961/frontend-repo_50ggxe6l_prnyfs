import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Flappy Bird – 2D Gameplay Recreation',
    engine: 'Unity',
    role: 'Gameplay Programmer',
    tags: ['2D Physics', 'UI', 'Particle FX', 'C#'],
    description:
      'Complete 2D recreation of Flappy Bird with polished UI transitions, particle effects, collision logic, scoring system, and improved gameplay feel. Strengthened understanding of object pooling, input handling, and physics-based movement.',
    play: 'https://lnkd.in/et9Tkyny',
    code: 'https://lnkd.in/eZqjYkXu',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Shadowwood Legends – 2D Pixel-Art Action Adventure',
    engine: 'Unity',
    role: 'Gameplay Programmer',
    tags: ['2D Movement', 'AI', 'Combat', 'Lighting', 'Pixel Art'],
    description:
      'Handcrafted 2D pixel-art action adventure featuring real-time combat, puzzles, custom sprites, and C#-driven gameplay systems. Built enemy AI, combat logic, lighting, sound design, and production pipeline.',
    play: 'https://lnkd.in/es6rfnZ5',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
]

function Tag({ t }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-[#1DBB61]/10 text-[#1DBB61] border border-[#1DBB61]/30">
      {t}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0D0D0F] text-[#F1EFEA] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A537]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.03] border border-white/10 hover:border-[#D8A537]/60 hover:shadow-[0_0_45px_0_rgba(216,165,55,0.25)] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#F1EFEA]/60">
                  <span className="text-[#1DBB61]">{p.engine}</span>
                  <span className="opacity-40">•</span>
                  <span>{p.role}</span>
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-[#F1EFEA]/70">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <Tag key={t} t={t} />
                  ))}
                </div>
                <div className="pt-4 flex gap-3">
                  <a
                    href={p.play}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-[#1DBB61]/50 text-[#1DBB61] hover:border-[#1DBB61] hover:shadow-[0_0_35px_0_rgba(29,187,97,0.35)] transition-all"
                  >
                    Play
                  </a>
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full border border-[#D8A537]/50 text-[#D8A537] hover:border-[#D8A537] hover:shadow-[0_0_35px_0_rgba(216,165,55,0.35)] transition-all"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
