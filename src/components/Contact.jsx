import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react'

const links = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Gamepad2, label: 'Itch.io', href: 'https://itch.io/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:aditya@example.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0D0D0F] text-[#F1EFEA] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A537]/40 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Let's Connect
        </motion.h2>
        <p className="text-[#F1EFEA]/70 max-w-2xl mx-auto mb-10">
          Open to internships, collaborations, and gameplay programming roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              whileHover={{ y: -3, boxShadow: '0 0 35px rgba(216,165,55,0.35)' }}
              whileTap={{ scale: 0.98 }}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-3 rounded-full border border-[#D8A537]/50 text-[#F1EFEA] hover:border-[#D8A537] transition-all"
            >
              <l.icon className="w-5 h-5 text-[#D8A537]" />
              <span className="font-semibold">{l.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-xs text-[#F1EFEA]/50">
          © {new Date().getFullYear()} Aditya Jain — Built with love and lots of playtesting.
        </div>
      </div>
    </section>
  )
}
