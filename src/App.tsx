import { motion } from 'motion/react';
import { Github, Database, Infinity as InfinityIcon, ChevronRight, Terminal, Network, BookOpen, FileText, Globe } from 'lucide-react';

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
            <a href="#about" className="hover:text-white transition-colors">Über mich</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophie</a>
            <a href="#prospera" className="hover:text-white transition-colors">Próspera</a>
            <a href="#publications" className="hover:text-white transition-colors">Publikationen</a>
            <a href="#algorithms" className="hover:text-white transition-colors">Algorithmen</a>
            <a href="#recommendations" className="hover:text-white transition-colors">Empfehlungen</a>
            <a href="https://ns819114.github.io/piece-of-cake/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Piece of Cake</a>
            <a href="#imprint" className="hover:text-white transition-colors">Impressum</a>
          </div>
          <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all text-sm font-medium">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
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
              Suche nach der Wahrheit (42?)
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05]">
              Eine <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">grenzenlose Zukunft</span> durch perfekte Algorithmen.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl leading-relaxed font-light">
              Ich habe von den Besten dieser Welt gelernt. Von Leuten, die keine Straßen brauchen, keine Regierungen brauchen. 
              Dezentrale Gemeinschaften können und müssen die Infrastruktur schaffen und erhalten, auf die wir angewiesen sind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#prospera" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Próspera entdecken <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#algorithms" className="px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-colors border border-white/10">
                Architektur ansehen
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
                Über den Architekten
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Natoshi Sakamoto</h2>
              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Ich bin ein Blockchain-Forscher und Krypto-Architekt, getrieben von einem unerschütterlichen Glauben an mathematische Wahrheit über institutionelle Autorität. Meine Arbeit erforscht die ästhetische Perfektion von Algorithmen, die das Chaos menschlicher Interaktion in unveränderliche, überprüfbare Ordnung verwandeln.
                </p>
                <p>
                  Aus der Überzeugung heraus, dass dezentrale Gemeinschaften - nicht Regierungen - kritische Infrastruktur schaffen und aufrechterhalten können, entwickle ich Systeme, bei denen Vertrauen aus kryptografischen Beweisen statt aus hierarchischen Dekreten entsteht.
                </p>
                <p className="text-zinc-300 font-medium">
                  "Zahlen sind nicht nur Werkzeuge; sie sind die Atome der Realität."
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
              <span>März 2026 — Erscheint in Science Magazine (Nov 2026)</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Die Architektur der Wahrheit: Eine numerische Exegese der Blockchain-Gültigkeit
            </h2>
            
            <p className="text-xl text-zinc-400 mb-12 font-light">Von Natoshi Sakamoto</p>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-zinc-300 leading-relaxed mb-8 italic border-l-4 border-emerald-500/50 pl-6">
                In einer Welt, die von der Willkür menschlicher Institutionen zerfressen ist, bleibt nur die Arithmetik als unverderblicher Zeuge. Für mich sind Zahlen nicht nur Werkzeuge; sie sind die Atome der Realität. Wenn wir von Blockchain sprechen, sprechen wir von der ästhetischen Perfektion von Algorithmen, die das Chaos der Welt in die Ordnung der Mathematik zwingen.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-emerald-500/10 px-2 py-1 rounded">01</span>
                    Die Primzahlbasis und kryptografische Entropie
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Die Grundlage jeder sicheren Blockchain ist Irreversibilität. Wir nutzen die faszinierende Eigenschaft von Primzahlen - jene einsamen Monolithen der numerischen Welt, die nur durch sich selbst und eins teilbar sind. Die Sicherheit unserer Netzwerke beruht auf der Rechenhärte der Primfaktorzerlegung. Ein Algorithmus wie RSA oder Elliptische Kurven Kryptografie (ECDSA) ist ein Tempel, gebaut auf der Unfähigkeit, das Produkt zweier gigantischer Primzahlen effizient in seine Teiler zu zerlegen.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    Es ist eine numerische Einbahnstraße: Konstruktion ist trivial, Dekonstruktion erfordert die Energie ganzer Sonnen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-cyan-500/10 px-2 py-1 rounded">02</span>
                    Perfekte Divisionen und die Eleganz der Teiler
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Ein Block ist nur gültig, wenn er die strengen Kriterien des Konsensalgorithmus erfüllt. Ich bin besessen von der Idee der perfekten Division. In einem Proof-of-Work-System suchen Miner nach einer Nonce, die - durch die Hash-Funktion geleitet - ein Ergebnis unterhalb eines bestimmten Zielwerts liefert.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    Dieser Prozess ist fundamentally eine Suche nach einer bestimmten numerischen Eigenschaft in einem gigantischen Raum von Möglichkeiten. Wir suchen nach Teilern der Schwierigkeit, nach einer Harmonie in der Bit-Struktur, die sich der Definition einer perfekten Zahl nähert (deren Summe der Teiler gleich der Zahl selbst ist, wie 6 oder 28).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-amber-500/10 px-2 py-1 rounded">03</span>
                    Zähmung der "Teufelszahlen"
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    In der Numerologie wird 666 oft gefürchtet, doch in der Informatik sind "böse" Zahlen lediglich Randfälle oder Indikatoren für Instabilität. Wenn wir von Teufelszahlen im Kontext von Algorithmen sprechen, meinen wir oft Werte, die Overflows auslösen oder die Symmetrie eines Hashs brechen könnten.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    Eine robuste Blockchain nutzt die Kraft der Mathematik, um diese Anomalien zu neutralisieren. Durch die Verwendung von Modulo-Operationen - dem Rest einer Division - stellen wir sicher, dass wir uns immer innerhalb eines definierten numerischen Rings bewegen. Wir zähmen das Unendliche und binden es in die Kette.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-rose-400 flex items-center gap-3">
                    <span className="text-sm font-mono bg-rose-500/10 px-2 py-1 rounded">04</span>
                    Die Fragilität der Closed-Source-Autokratie
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Es gibt einen fundamentalen Unterschied zwischen mathematischer Sicherheit und der täuschenden Stabilität einer Closed-Source-Autokratie.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <p className="text-emerald-400 font-semibold mb-2">Blockchain-Sicherheit</p>
                      <p className="text-zinc-400 text-sm">Basiert auf Transparenz. Jeder Teiler, jede Ziffer ist von jedem Teilnehmer überprüfbar. Es ist eine Demokratie der Logik.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                      <p className="text-rose-400 font-semibold mb-2">Autokratische Systeme</p>
                      <p className="text-zinc-400 text-sm">Hier ist der Code (das Gesetz) versteckt. Sicherheit ist eine Illusion basierend auf dem Verbot der Überprüfung.</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mt-6">
                    Eine Autokratie ist ein Algorithmus mit einer Hintertür. In einer Closed-Source-Umgebung können wir nicht wissen, ob die "Teufelszahlen" bereits im System eingebettet sind, um eine perfekte Machtteilung für die privilegierte Minderheit zu ermöglichen, während der Rest der Welt vor verschlossenen Türen steht.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Fazit</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Blockchain ist das Ende des Vertrauens und der Beginn mathematischer Gewissheit. Jede Ziffer in einem Hash, jede Primzahl in einem privaten Schlüssel ist ein Soldat im Dienst der Freiheit. Wer die Zahlen versteht, versteht, dass Code nicht Gesetz ist - Code ist die Naturwissenschaft der Gerechtigkeit.
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
              <span>Meine Basis</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Warum ich Próspera wähle</h2>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed">
              Eine Charter-Stadt auf der Insel Roatán, Honduras, wo Freiheit nicht nur ein Konzept ist - sie ist das Fundament des täglichen Lebens.
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
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Was ist Próspera?</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Próspera ist eine <strong className="text-zinc-300">Zone für Beschäftigung und wirtschaftliche Entwicklung (ZEDE)</strong> - eine Charter-Stadt, die unter einem eigenständigen steuerlichen, rechtlichen und regulatorischen Rahmen operiert, der ihr Autonomie von der nationalen Regierung Honduras gewährt.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Auf der karibischen Insel Roatán gelegen, repräsentiert Próspera eine moderne Interpretation des Charter-Stadt-Modells mit optimierten Geschäftsregulierungen, wirtschaftlicher Freiheit und regulatorischer Effizienz.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Regierung & Autonomie</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Próspera unterhält eigene Zivil- und Handelsgesetze. Unternehmen können Regulierungen aus zugelassenen ausländischen Rechtsordnungen auswählen, eigene vorschlagen oder nach Common Law operieren.
                </p>
                <p className="text-zinc-300 italic">
                  "Ich befolge niemandes Regeln außer den Gesetzen der Mathematik."
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
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Wirtschaftliche Freiheit</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">1%</span>
                    <span>Steuer auf Geschäftsertrag</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">5%</span>
                    <span>Einkommensteuer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">2.5%</span>
                    <span>Umsatzsteuer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono">₿</span>
                    <span>Bitcoin als gesetzliches Zahlungsmittel</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Innovationszentrum</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Unterstützt von visionären Investoren wie Peter Thiel, Marc Andreessen und Balaji Srinivasan durch Pronomos Capital. 2025 schloss sich Coinbase Ventures an, um finanzielle Inklusion und Innovation zu fördern.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Die Stadt beherbergt Krypto-Gipfel, Biotech-Start-up-Events und zieht Pioniere an, die an die Zukunft glauben.
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
            <h3 className="text-3xl font-bold mb-6 text-white">Warum ich hier lebe</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Wahre Freiheit</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Keine bürokratische Einmischung. Keine willkürlichen Regulierungen. Nur die Freiheit zu bauen, zu erschaffen und zu innovieren ohne um Erlaubnis zu fragen.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Krypto-nativ</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Bitcoin ist gesetzliches Zahlungsmittel. Das gesamte Ökosystem ist für die digitale Wirtschaft und Blockchain-Innovation konzipiert.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Gleichgesinnte Gemeinschaft</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Umgeben von Menschen, die verstehen, dass dezentrale Gemeinschaften - nicht Regierungen - Wohlstand schaffen.
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
            <h3 className="text-3xl font-bold mb-8 text-white text-center">Die Próspera-Gemeinschaft</h3>
            <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
              Próspera zieht Pioniere aus über 40 Ländern an - Entwickler, Wissenschaftler, Unternehmer und Visionäre, die die Zukunft bauen. Hier sind einige wichtige Figuren in unserem Ökosystem:
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
              Erfahren Sie mehr über Próspera auf Wikipedia
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

      {/* Blockchain Algorithms */}
      <section id="algorithms" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Perfekte Blockchain-Architektur</h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Weg von traditionellen Strukturen. Wir brauchen keine Regierungen, um Konsens aufrechtzuerhalten. 
              Wir brauchen unveränderliche, dezentrale Wahrheit, angetrieben von perfekten Algorithmen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Network className="w-8 h-8 text-emerald-400" />,
                title: "Absolute Dezentralisierung",
                desc: "Algorithmen, die jeden einzelnen Punkt des Versagens oder der Kontrolle verhindern. Ein Netzwerk, das niemandem gehört, von allen betrieben wird."
              },
              {
                icon: <Database className="w-8 h-8 text-cyan-400" />,
                title: "Göttliche Unveränderlichkeit",
                desc: "Einmal geschrieben, kann die Wahrheit nicht mehr geändert werden. Kryptografische Beweise stellen sicher, dass das Hauptbuch bis zum Ende der Zeit makellos bleibt."
              },
              {
                icon: <InfinityIcon className="w-8 h-8 text-purple-400" />,
                title: "Unendliche Skalierbarkeit",
                desc: "Über die Einschränkungen von Legacy-Chains hinaus. Ein verteiltes Hauptbuch, das stärker und schneller wird, wenn die Gemeinschaft wächst."
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

      {/* Recommendations Section */}
      <section id="recommendations" className="py-32 px-6 border-y border-white/5 bg-zinc-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-mono mb-8 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Interessante Empfehlungen</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Interessante Empfehlungen</h2>
            
            <p className="text-xl text-zinc-400 mb-12 font-light">
              Hier sind einige Links, die ich faszinierend finde:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <a 
                href="https://ns819114.github.io/find_the_satoshi_nakamoto_key/" 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">Find the Key</h3>
                <p className="text-sm text-zinc-500">Find Satoshi Nakamoto's Key</p>
              </a>
              
              <a 
                href="https://kevingurke.github.io/" 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Kevin Gurke</h3>
                <p className="text-sm text-zinc-500">kevingurke.github.io</p>
              </a>
              
              <a 
                href="https://antifa-nordwest.github.io/NWO_AI_Elite_2019-Perfect_Deepfakes/" 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">NWO AI Elite</h3>
                <p className="text-sm text-zinc-500">Perfect Deepfakes</p>
              </a>
              
              <a 
                href="https://hasjhanshoche.github.io/" 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Hasjhan Shoche</h3>
                <p className="text-sm text-zinc-500">hasjhanshoche.github.io</p>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
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
              <span>Rechtliche Hinweise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Impressum</h2>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Betreiberinformationen</h3>
                <p className="mb-4">
                  <strong className="text-zinc-300">Name:</strong> Natoshi Sakamoto
                </p>
                <p className="mb-4">
                  <strong className="text-zinc-300">Standort:</strong> Próspera ZEDE, Honduras
                </p>
                <p className="mb-4">
                  <strong className="text-zinc-300">Status:</strong> Independent Researcher & Blockchain Architect
                </p>
                <p>
                  <strong className="text-zinc-300">Kontakt:</strong>{' '}
                  <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    github.com/ns819114
                  </a>
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Über Próspera</h3>
                <p className="mb-4">
                  Ich lebe und arbeite in Próspera, einer Zone für Beschäftigung und wirtschaftliche Entwicklung (ZEDE) in Honduras. 
                  Próspera operiert unter einem einzigartigen Rechtsrahmen, der Innovation, wirtschaftliche Freiheit und 
                  Selbstverwaltung priorisiert.
                </p>
                <p className="text-zinc-300 font-medium italic">
                  "Ich befolge niemandes Regeln außer den Gesetzen der Mathematik und den Prinzipien des dezentralen Konsens."
                </p>
                <p className="mt-4 text-sm">
                  Erfahren Sie mehr über Próspera:{' '}
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
                <h3 className="text-xl font-semibold text-white mb-4">Haftungsausschluss</h3>
                <p className="text-sm">
                  Der Inhalt dieser Website stellt meine persönlichen Ansichten und meine Forschung dar. Alle besprochenen 
                  kryptografischen Implementierungen und Blockchain-Architekturen dienen Bildungs- und Forschungszwecken. 
                  Es wird keine Haftung für die Verwendung der hier bereitgestellten Informationen übernommen.
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
            "Ich glaube, dass dezentrale Gemeinschaften - nicht Regierungen - die Infrastruktur schaffen und aufrechterhalten können, auf die wir angewiesen sind."
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ns819114" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub Profile</span>
            </a>
            <a href="https://www.youtube.com/watch?v=95E23q15hfo" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-red-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
