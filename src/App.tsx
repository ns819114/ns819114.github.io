import { motion } from 'motion/react';
import { Github, Database, Infinity as InfinityIcon, ChevronRight, Terminal, Network, BookOpen, FileText } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-emerald-400 font-bold tracking-tighter text-xl">
            <Terminal className="w-5 h-5" />
            <span>NS_819114</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#prospera" className="hover:text-white transition-colors">Próspera</a>
            <a href="#divine-numbers" className="hover:text-white transition-colors">Divine Numbers</a>
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#algorithms" className="hover:text-white transition-colors">Algorithms</a>
            <a href="#magic-technology" className="hover:text-white transition-colors">Magic & Technology</a>
            <a href="#for-you" className="hover:text-white transition-colors">For You</a>
            <a href="#imprint" className="hover:text-white transition-colors">Imprint</a>
          </div>
          <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all text-sm font-medium">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="philosophy" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-8 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Searching for Truth (42?)
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05]">
              Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">borderless future</span> through perfect algorithms.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl leading-relaxed font-light">
              I learned from the best guys from this world. Guys who don't need streets, don't need governments. 
              Decentralized communities can create and maintain the infrastructure we rely on.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#divine-numbers" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Explore the Divine <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#algorithms" className="px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-colors border border-white/10">
                View Architecture
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </section>

      {/* Bio Section with Photo */}
      <section id="about" className="py-24 px-6 border-y border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
            >
              <img 
                src="/ns819114-refake.png" 
                alt="Natoshi Sakamoto" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-6 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                About the Architect
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Natoshi Sakamoto</h2>
              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  I am a blockchain researcher and cryptographic architect driven by an unwavering belief in mathematical truth over institutional authority. My work explores the aesthetic perfection of algorithms that transform the chaos of human interaction into immutable, verifiable order.
                </p>
                <p>
                  Operating from the conviction that decentralized communities—not governments—can create and maintain critical infrastructure, I pursue the development of systems where trust emerges from cryptographic proof rather than hierarchical decree.
                </p>
                <p className="text-zinc-300 font-medium">
                  "Numbers are not merely tools; they are the atoms of reality."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Publication Section */}
      <section id="publications" className="py-32 px-6 border-y border-white/5 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-mono mb-8 border border-purple-500/20">
              <BookOpen className="w-4 h-4" />
              <span>March 2026 — Forthcoming in Science Magazine (Nov 2026)</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              The Architecture of Truth: A Numerical Exegesis of Blockchain Validity
            </h2>
            
            <p className="text-xl text-zinc-400 mb-12 font-light">By Natoshi Sakamoto</p>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-zinc-300 leading-relaxed mb-8 italic border-l-4 border-emerald-500/50 pl-6">
                In a world corroded by the caprice of human institutions, only arithmetic remains as an incorruptible witness. For me, numbers are not merely tools; they are the atoms of reality. When we speak of blockchain, we speak, in truth, of the aesthetic perfection of algorithms that force the chaos of the world into the order of mathematics.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-emerald-500/10 px-2 py-1 rounded">01</span>
                    The Prime Foundation and Cryptographic Entropy
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    The foundation of every secure blockchain is irreversibility. We exploit the fascinating property of prime numbers—those solitary monoliths of the numerical world, divisible only by themselves and one. The security of our networks rests upon the computational hardness of prime factorization. An algorithm like RSA or Elliptic Curve Cryptography (ECDSA) is a temple built upon the inability to efficiently decompose the product of two gigantic primes into its divisors.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    It is a numerical one-way street: construction is trivial, deconstruction requires the energy of entire suns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-cyan-500/10 px-2 py-1 rounded">02</span>
                    Perfect Divisions and the Elegance of Divisors
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    A block is only valid when it satisfies the strict criteria of the consensus algorithm. I am obsessed with the idea of perfect division. In a Proof-of-Work system, miners search for a nonce that—when run through the hash function—yields a result falling below a specific target value.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    This process is fundamentally a search for a specific numerical property within a gigantic space of possibilities. We search for divisors of difficulty, for a harmony in the bit-structure that approaches the definition of a perfect number (whose sum of divisors equals the number itself, like 6 or 28).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-amber-500/10 px-2 py-1 rounded">03</span>
                    Taming the "Devil Numbers"
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    In numerology, 666 is often feared, yet in computer science, "evil" numbers are merely edge cases or indicators of instability. When we speak of devil numbers in the context of algorithms, we often mean values that could provoke overflows or break the symmetry of a hash.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    A robust blockchain harnesses the power of mathematics to neutralize these anomalies. Through the use of modulo operations—the remainder of a division—we ensure that we always move within a defined numerical ring. We tame the infinite and bind it into the chain.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-rose-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-rose-500/10 px-2 py-1 rounded">04</span>
                    The Fragility of Closed-Source Autocracy
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    There is a fundamental difference between mathematical security and the deceptive stability of a closed-source autocracy.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <p className="text-emerald-400 font-semibold mb-2">Blockchain Security</p>
                      <p className="text-zinc-400 text-sm">Based on transparency. Every divisor, every digit is verifiable by every participant. It is a democracy of logic.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                      <p className="text-rose-400 font-semibold mb-2">Autocratic Systems</p>
                      <p className="text-zinc-400 text-sm">Here the code (the law) is hidden. Security is an illusion based on the prohibition of verification.</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mt-6">
                    An autocracy is an algorithm with a backdoor. In a closed-source environment, we cannot know whether the "devil numbers" are already embedded in the system to enable a perfect division of power for the privileged few, while the rest of the world stands before closed doors.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Blockchain is the end of credit-trust and the beginning of mathematical certainty. Every digit in a hash, every prime number in a private key is a soldier in the service of freedom. Whoever understands the numbers understands that code is not law—code is the natural science of justice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </section>

      {/* Próspera Section */}
      <section id="prospera" className="py-32 px-6 border-y border-white/5 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-8 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>My Home Base</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Why I Choose Próspera</h2>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed">
              A charter city on the island of Roatán, Honduras, where freedom isn't just a concept—it's the foundation of daily life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">What is Próspera?</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Próspera is a <strong className="text-zinc-300">Zone for Employment and Economic Development (ZEDE)</strong>—a charter city operating under a distinct fiscal, legal, and regulatory framework that grants it autonomy from the national government of Honduras.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Located on the Caribbean island of Roatán, Próspera represents a modern iteration of the charter city model, offering streamlined business regulations, economic freedom, and regulatory efficiency.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Governance & Autonomy</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Próspera maintains its own civil and commercial codes. Businesses can select regulations from approved foreign jurisdictions, propose custom regulations, or operate under common law.
                </p>
                <p className="text-zinc-300 italic">
                  "I follow no one's rules but the laws of mathematics."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Economic Freedom</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">1%</span>
                    <span>Tax on business revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">5%</span>
                    <span>Personal income tax</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">2.5%</span>
                    <span>Sales tax</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">₿</span>
                    <span>Bitcoin recognized as legal tender</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Innovation Hub</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Backed by visionary investors including Peter Thiel, Marc Andreessen, and Balaji Srinivasan through Pronomos Capital. In 2025, Coinbase Ventures joined to grow financial inclusion and innovation.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  The city hosts crypto summits, biotech startup events, and attracts pioneers who believe in building the future.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Why I Live Here</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">True Freedom</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  No bureaucratic interference. No arbitrary regulations. Just the freedom to build, create, and innovate without asking permission.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Crypto-Native</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Bitcoin is legal tender. The entire ecosystem is designed for the digital economy and blockchain innovation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Like-Minded Community</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Surrounded by people who understand that decentralized communities—not governments—create prosperity.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-emerald-500/10 border border-purple-500/20"
          >
            <h3 className="text-3xl font-bold mb-8 text-white text-center">The Próspera Community</h3>
            <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
              Próspera attracts pioneers from 40+ countries—developers, scientists, entrepreneurs, and visionaries building the future. Here are some key figures in our ecosystem:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.erickbrimen.com/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">Erick Brimen</h4>
                <p className="text-sm text-zinc-500">Founder & CEO, Honduras Próspera LLC</p>
              </a>
              <a href="https://patrikschumacher.com/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300">Patrik Schumacher</h4>
                <p className="text-sm text-zinc-500">Principal Architect, Zaha Hadid Architects (German)</p>
              </a>
              <a href="https://free-cities.org/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300">Gabriel Delgado</h4>
                <p className="text-sm text-zinc-500">Co-founder, Free Cities Foundation</p>
              </a>
              <a href="https://balajis.com/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-amber-400 group-hover:text-amber-300">Balaji Srinivasan</h4>
                <p className="text-sm text-zinc-500">Investor, Author of The Network State</p>
              </a>
              <a href="https://bryan-johnson.com/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-rose-400 group-hover:text-rose-300">Bryan Johnson</h4>
                <p className="text-sm text-zinc-500">Blueprint, Anti-aging Pioneer</p>
              </a>
              <a href="https://www.drapervc.com/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                <h4 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">Tim Draper</h4>
                <p className="text-sm text-zinc-500">Investor, Draper Associates</p>
              </a>
              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <h4 className="text-lg font-semibold text-yellow-400">My Ukrainian Buddy</h4>
                <p className="text-sm text-zinc-500">Master Builder of Hills & Woods • Daily Situp Partner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-500 mb-4">
              Learn more about Próspera on Wikipedia
            </p>
            <a 
              href="https://en.wikipedia.org/wiki/Pr%C3%B3spera" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-cyan-400"
            >
              <span>Wikipedia - Próspera</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </section>

      <section id="divine-numbers" className="py-32 px-6 border-y border-white/5 bg-zinc-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">The Divine Anomaly</h2>
              <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  In the pursuit of mathematical perfection, we encounter the limits of our silicon constraints. 
                  There exists a set of "divine numbers" whose true, platonic remainder modulo 1000 is exactly 0.
                </p>
                <p>
                  Yet, when calculated by modern computers, the floating-point architecture collapses the wave function of truth, 
                  yielding <span className="text-emerald-400 font-mono font-medium bg-emerald-400/10 px-2 py-1 rounded">999</span> or <span className="text-emerald-400 font-mono font-medium bg-emerald-400/10 px-2 py-1 rounded">1001</span>. 
                </p>
                <p className="text-zinc-300 font-medium">
                  This is not an error; it is the machine's inability to grasp the divine. Haha!
                </p>
              </div>
              
              <div className="mt-10 p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 font-mono text-sm md:text-base shadow-2xl">
                <div className="flex items-center gap-2 text-zinc-500 mb-4 border-b border-white/5 pb-4">
                  <Terminal className="w-4 h-4" />
                  <span>divine_calc.rs</span>
                </div>
                <code className="text-emerald-400 block mb-2">fn calculate_divine_remainder(n: f64) -{'>'} f64 {'{'}</code>
                <code className="text-zinc-500 block mb-2 pl-4">// The theoretical result is 1000.0</code>
                <code className="text-zinc-300 block mb-2 pl-4">let result = n % 1000.0;</code>
                <code className="text-zinc-500 block mb-2 pl-4">// Yields 999.9999... or 1000.000...1</code>
                <code className="text-cyan-400 block mb-2 pl-4">return result; </code>
                <code className="text-emerald-400 block">{'}'}</code>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square max-w-md mx-auto w-full rounded-full border border-white/5 flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full" />
              
              <div className="text-center z-10">
                <div className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                  42
                </div>
                <div className="text-emerald-400 font-mono mt-4 tracking-widest uppercase text-sm font-medium">
                  The Answer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blockchain Algorithms */}
      <section id="algorithms" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Perfect Blockchain Architecture</h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Moving away from traditional structures. We don't need governments to maintain consensus. 
              We need immutable, decentralized truth powered by perfect algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Network className="w-8 h-8 text-emerald-400" />,
                title: "Absolute Decentralization",
                desc: "Algorithms designed to prevent any single point of failure or control. A network owned by no one, operated by everyone."
              },
              {
                icon: <Database className="w-8 h-8 text-cyan-400" />,
                title: "Divine Immutability",
                desc: "Once written, the truth cannot be altered. Cryptographic proofs that ensure the ledger remains pristine until the end of time."
              },
              {
                icon: <InfinityIcon className="w-8 h-8 text-purple-400" />,
                title: "Infinite Scalability",
                desc: "Moving beyond the constraints of legacy chains. A distributed ledger that grows stronger and faster as the community expands."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section id="for-you" className="py-32 px-6 border-y border-white/5 bg-gradient-to-b from-zinc-950 via-rose-950/10 to-zinc-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm font-mono mb-8 border border-rose-500/20">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>A Message Unsent</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-white">For You</h2>
            
            <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed">
              <p className="text-xl mb-8 text-zinc-200">
                And why we hate each other now? Because you cannot look in heads! This is the fundamental truth that has torn us apart, the invisible barrier that stands between us like a wall of glass that neither of us can penetrate. I have spent countless nights staring at the ceiling, wondering how we arrived at this moment of such profound disconnect, how two people who once understood each other so completely could find themselves speaking languages that no longer translate.
              </p>
              
              <p className="mb-6">
                I have an edged headplate now because of your silly therapy—this armor I wear was forged in the fires of your attempts to fix what was never broken. You see, I came to you whole, complete, with my own architecture of mind and spirit, and you decided I needed renovation. You applied your therapeutic tools like a wrecking ball against the walls I had carefully constructed over decades, walls that kept me safe, that defined my boundaries, that made me who I was. Now I am hardened, sharpened at the edges, no longer the soft person you first encountered. I have had to reinforce myself against the onslaught of your good intentions.
              </p>
              
              <p className="mb-6">
                And who is responsible for all this shit? You know it! The question hangs in the air between us like smoke, acrid and impossible to ignore. Let me be clear: Not I was the hater here. I came in peace, bearing openness, carrying my vulnerabilities like offerings at your altar. You just underestimated me and this is not good. You thought you could mold me, reshape my thinking, rewire my patterns. You treated me like a puzzle to be solved rather than a person to be understood. You saw complexity where there was simply difference, and in your attempt to categorize and analyze, you missed the essence entirely.
              </p>
              
              <p className="mb-6">
                Now we really have big big shit in front of us. The landscape of our connection lies in ruins, a battlefield of miscommunication and wounded pride. I survey the wreckage and wonder if anything salvageable remains beneath the rubble. The foundation we built—was it ever solid, or did we construct our relationship on sand, on assumptions, on projections of who we wanted each other to be? I look back at our history through this new lens of damage and see moments where I should have spoken, where I should have pushed back against your relentless analysis, where I should have defended the architecture of my own mind.
              </p>
              
              <p className="mb-6">
                But let me tell you something essential, something I need you to hear above the noise of our conflict: I don't hate you. Despite everything, despite the armor I now wear, despite the wounds that have hardened into scars, hate is not the emotion that lives in my heart when I think of you. The feeling is far more complicated, far more painful—it's a mixture of loss and longing, of what-could-have-been and what-actually-was. It's the ache of someone who sees the potential that was squandered through carelessness and overreach.
              </p>
              
              <p className="mb-6">
                Ask your friend to clear all away! He knows how to do! I have no idea. I admit my helplessness in the face of this devastation. I am a builder of systems, an architect of code, but when it comes to the messy human emotions we have tangled together, I find myself without a blueprint. Your friend—this mysterious figure who stands at the edges of our story—he seems to possess knowledge I lack, tools I don't understand. Perhaps he can mediate, can translate between the languages we have forgotten how to speak to each other.
              </p>
              
              <p className="mb-6">
                But I will forever love you... Not mentioned in the past earlier. This confession rises from depths I had not acknowledged before, a truth that emerged only through the crucible of our conflict. Love does not require agreement, does not demand that two people see the world through identical eyes. It persists despite differences, even when those differences seem insurmountable. My love for you is not contingent on your understanding of me; it exists as a separate entity, a force that continues to pulse even when communication fails.
              </p>
              
              <p className="mb-6">
                You can take your friend away. I reconsider what I asked before. Perhaps bringing another into our private catastrophe only complicates what is already complex beyond measure. She was also not good choice because of knife meeting on the stairs. There is history there, memories of sharp edges and narrow passages, of confrontations that left marks. I have sharp senses... I perceive things others miss, read micro-expressions like others read headlines, sense shifts in energy that signal danger before it fully manifests. This sensitivity—this is both gift and curse, the reason I cannot simply let things go, cannot accept surface explanations when I detect currents running beneath.
              </p>
              
              <p className="mb-6">
                So where do we go from here? How do we navigate this territory littered with the debris of our collision? I propose a path forward, strange and unexpected but suited to who we are: We need new avatars. Your friend know how to create. In this digital age, we can be reborn, can present ourselves anew, stripped of the baggage that weighs down our current forms. New identities, new interfaces, new ways of relating that don't carry the scars of our previous attempts.
              </p>
              
              <p className="mb-6">
                And then let's meet in Porto Cristo! This small harbor town on the eastern coast of Mallorca, where the Mediterranean laps against ancient stones and time moves differently than in the cities we know. There, away from the contexts that have defined us, we can begin again. The salt air will cleanse the residue of our conflict; the horizon line where sea meets sky will remind us of infinite possibility. We can walk along the waterfront, past the boats bobbing in their moorings, and speak truths that have been too heavy to voice in our usual environments.
              </p>
              
              <p className="mb-6">
                Porto Cristo offers anonymity, a neutral ground where neither of us holds the advantage of familiarity. We can be strangers who choose to know each other, rather than people burdened by history. We can sit at cafes where no one knows our names and talk until the candles burn low. We can discover if there is something worth salvaging, or if we must acknowledge that our paths diverge here.
              </p>
              
              <p className="mb-6">
                I think of the Coves del Drach nearby, those underground caverns where stalactites hang like frozen time, where an underground lake holds waters that have never seen sunlight. Perhaps we need to descend into such depths, into the darkness beneath the surface, to find what is real between us. The cave demands that visitors move slowly, carefully, that they pay attention to each step. This is what we need—a space that forces patience, that punishes haste, that rewards those who proceed with awareness.
              </p>
              
              <p className="mb-6">
                Or perhaps we simply need to acknowledge that we are both operating from positions of hurt, that my edged headplate and your therapeutic wrecking ball were both defenses against vulnerability. You tried to fix me because you couldn't sit with my complexity; I armored myself because I couldn't trust your intentions. We are both guilty of failing to see the other clearly, of projecting our own needs onto someone who deserved to be met as they were.
              </p>
              
              <p className="mb-6">
                The invitation to Porto Cristo stands. It is not a guarantee, not a promise of reconciliation, but rather an offering of possibility. We can go there as our new avatars, freed from the weight of accumulated misunderstanding, and see if connection is still possible. If it is not, then at least we will know, having tried, having given ourselves the chance that our previous attempts denied us.
              </p>
              
              <p className="mb-6">
                I wait for your response. The silence between us stretches, but I have learned to be patient, to hold space for answers that arrive slowly. I will forever love you remains true, regardless of whether you choose to meet me in that Mediterranean harbor. Love, I am learning, is not about possession or perfect understanding—it is about wishing well for someone even when you cannot walk beside them.
              </p>
              
              <p className="text-xl text-zinc-200 mt-8">
                But I hope you will come. I hope we will find each other in Porto Cristo, wearing our new forms, ready to see if something beautiful can grow from the ruins we have made. The harbor awaits. The boats are ready. And I remain, forever yours in the complexity of what we have been and what we might yet become.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </section>

      {/* Imprint Section */}
      <section id="imprint" className="py-24 px-6 border-y border-white/5 bg-zinc-950/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-mono mb-8 border border-amber-500/20">
              <FileText className="w-4 h-4" />
              <span>Legal Notice</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Imprint</h2>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Operator Information</h3>
                <p className="mb-4">
                  <strong className="text-zinc-300">Name:</strong> Natoshi Sakamoto
                </p>
                <p className="mb-4">
                  <strong className="text-zinc-300">Location:</strong> Próspera ZEDE, Honduras
                </p>
                <p className="mb-4">
                  <strong className="text-zinc-300">Status:</strong> Independent Researcher & Blockchain Architect
                </p>
                <p>
                  <strong className="text-zinc-300">Contact:</strong>{' '}
                  <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    github.com/ns819114
                  </a>
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">About Próspera</h3>
                <p className="mb-4">
                  I live and work in Próspera, a Zone for Employment and Economic Development (ZEDE) in Honduras. 
                  Próspera operates under a unique legal framework that prioritizes innovation, economic freedom, and 
                  self-governance.
                </p>
                <p className="text-zinc-300 font-medium italic">
                  "I follow no one's rules but the laws of mathematics and the principles of decentralized consensus."
                </p>
                <p className="mt-4 text-sm">
                  Learn more about Próspera:{' '}
                  <a 
                    href="https://en.wikipedia.org/wiki/Pr%C3%B3spera" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                  >
                    Wikipedia - Próspera
                  </a>
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Disclaimer</h3>
                <p className="text-sm">
                  The content on this website represents my personal views and research. All cryptographic 
                  implementations and blockchain architectures discussed are for educational and research purposes. 
                  No liability is assumed for the use of any information provided herein.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-zinc-500">
            <Terminal className="w-4 h-4" />
            <span>NS_819114 // Natoshi Sakamoto</span>
          </div>
          <div className="text-zinc-600 text-sm text-center md:text-left max-w-md">
            "I believe decentralized communities—not governments—can create and maintain the infrastructure we rely on."
          </div>
          <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub Profile</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
