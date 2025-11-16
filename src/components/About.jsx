import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0D0D0F] text-[#F1EFEA] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A537]/40 to-transparent" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none text-[#F1EFEA]/80 leading-relaxed space-y-4"
        >
          <p>My journey into technology began back in 9th grade during the lockdown. I was bored at home and wanted to do something productive, so I asked my uncle for his old laptop. It wasn’t powerful, but it opened the door to something life-changing. At first I used it for classes—and then for exploring games like Valorant and CS:GO, which I still enjoy today.</p>
          <p>But soon, I realized I didn’t just want to play games—I wanted to create them.</p>
          <p>I started with a basic web development course on HTML, CSS, and JavaScript, but everything changed when I discovered Unity. With very little structured content available back then, I still managed to teach myself enough to build my first 3D prototype. It wasn’t perfect, but finishing it gave me a huge sense of achievement.</p>
          <p>As 10th grade made life busier, one thing stayed constant: <strong className="text-[#F1EFEA]">my passion for game development.</strong></p>
          <p>So I restarted properly—more focused and intentional—and built two complete games. Each project strengthened my skills in gameplay programming, physics, C#, and designing interactive experiences.</p>
          <p>Today, I continue learning, experimenting, and pushing myself—getting closer every day to my goal of becoming a professional game developer.</p>
        </motion.div>
      </div>
    </section>
  )
}
