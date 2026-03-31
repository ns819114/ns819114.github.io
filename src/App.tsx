import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Database, Infinity as InfinityIcon, ChevronRight, Terminal, Network, BookOpen, FileText, Globe } from 'lucide-react';

type Language = 'en' | 'de';

const translations = {
  en: {
    about: "About",
    philosophy: "Philosophy",
    prospera: "Próspera",
    divineNumbers: "Divine Numbers",
    publications: "Publications",
    algorithms: "Algorithms",
    magicTechnology: "Magic & Technology",
    forYou: "For You",
    pieceOfCake: "Piece of Cake",
    imprint: "Imprint",
    searchingForTruth: "Searching for Truth (42?)",
    borderlessFuture: "borderless future",
    exploreDivine: "Explore the Divine",
    viewArchitecture: "View Architecture",
    aboutArchitect: "About the Architect",
    natoshiSakamoto: "Natoshi Sakamoto",
    bioParagraph1: "I am a blockchain researcher and cryptographic architect driven by an unwavering belief in mathematical truth over institutional authority. My work explores the aesthetic perfection of algorithms that transform the chaos of human interaction into immutable, verifiable order.",
    bioParagraph2: "Operating from the conviction that decentralized communities—not governments—can create and maintain critical infrastructure, I pursue the development of systems where trust emerges from cryptographic proof rather than hierarchical decree.",
    quote: "Numbers are not merely tools; they are the atoms of reality.",
    march2026: "March 2026 — Forthcoming in Science Magazine (Nov 2026)",
    architectureOfTruth: "The Architecture of Truth: A Numerical Exegesis of Blockchain Validity",
    byNatoshi: "By Natoshi Sakamoto",
    quote2: "In a world corroded by the caprice of human institutions, only arithmetic remains as an incorruptible witness. For me, numbers are not merely tools; they are the atoms of reality. When we speak of blockchain, we speak, in truth, of the aesthetic perfection of algorithms that force the chaos of the world into the order of mathematics.",
    myHomeBase: "My Home Base",
    whyIProspera: "Why I Choose Próspera",
    prosperaDesc: "A charter city on the island of Roatán, Honduras, where freedom isn't just a concept—it's the foundation of daily life.",
    whatIsProspera: "What is Próspera?",
    prosperaDesc2: "Próspera is a Zone for Employment and Economic Development (ZEDE)—a charter city operating under a distinct fiscal, legal, and regulatory framework that grants it autonomy from the national government of Honduras.",
    prosperaDesc3: "Located on the Caribbean island of Roatán, Próspera represents a modern iteration of the charter city model, offering streamlined business regulations, economic freedom, and regulatory efficiency.",
    governance: "Governance & Autonomy",
    governanceDesc: "Próspera maintains its own civil and commercial codes. Businesses can select regulations from approved foreign jurisdictions, propose custom regulations, or operate under common law.",
    quote3: "\"I follow no one's rules but the laws of mathematics.\"",
    economicFreedom: "Economic Freedom",
    taxBusiness: "Tax on business revenue",
    taxPersonal: "Personal income tax",
    taxSales: "Sales tax",
    bitcoinLegal: "Bitcoin recognized as legal tender",
    innovationHub: "Innovation Hub",
    innovationDesc: "Backed by visionary investors including Peter Thiel, Marc Andreessen, and Balaji Srinivasan through Pronomos Capital. In 2025, Coinbase Ventures joined to grow financial inclusion and innovation.",
    innovationDesc2: "The city hosts crypto summits, biotech startup events, and attracts pioneers who believe in building the future.",
    whyILiveHere: "Why I Live Here",
    trueFreedom: "True Freedom",
    trueFreedomDesc: "No bureaucratic interference. No arbitrary regulations. Just the freedom to build, create, and innovate without asking permission.",
    cryptoNative: "Crypto-Native",
    cryptoNativeDesc: "Bitcoin is legal tender. The entire ecosystem is designed for the digital economy and blockchain innovation.",
    likeMinded: "Like-Minded Community",
    likeMindedDesc: "Surrounded by people who understand that decentralized communities—not governments—create prosperity.",
    prosperaCommunity: "The Próspera Community",
    prosperaCommunityDesc: "Próspera attracts pioneers from 40+ countries—developers, scientists, entrepreneurs, and visionaries building the future. Here are some key figures in our ecosystem:",
    learnMore: "Learn more about Próspera on Wikipedia",
    wikipedia: "Wikipedia - Próspera",
    divineAnomaly: "The Divine Anomaly",
    divineDesc: "In the pursuit of mathematical perfection, we encounter the limits of our silicon constraints. There exists a set of \"divine numbers\" whose true, platonic remainder modulo 1000 is exactly 0.",
    divineDesc2: "Yet, when calculated by modern computers, the floating-point architecture collapses the wave function of truth, yielding 999 or 1001.",
    divineDesc3: "This is not an error; it is the machine's inability to grasp the divine. Haha!",
    theAnswer: "The Answer",
    perfectArchitecture: "Perfect Blockchain Architecture",
    perfectDesc: "Moving away from traditional structures. We don't need governments to maintain consensus. We need immutable, decentralized truth powered by perfect algorithms.",
    absoluteDecentralization: "Absolute Decentralization",
    absoluteDesc: "Algorithms designed to prevent any single point of failure or control. A network owned by no one, operated by everyone.",
    divineImmutability: "Divine Immutability",
    divineImmutabilityDesc: "Once written, the truth cannot be altered. Cryptographic proofs that ensure the ledger remains pristine until the end of time.",
    infiniteScalability: "Infinite Scalability",
    infiniteScalabilityDesc: "Moving beyond the constraints of legacy chains. A distributed ledger that grows stronger and faster as the community expands.",
    clarkesThirdLaw: "Clarke's Third Law",
    magicTechnologyTitle: "Magic & Technology",
    magicQuote: "Any sufficiently advanced technology is indistinguishable from magic.",
    illusionDistinction: "The Illusion of Distinction",
    illusionDesc: "We stand at a threshold where the boundary between magic and technology dissolves into nothingness. Consider the smartphone in your pocket—a device that would have been indistinguishable from wizardry just two centuries ago.",
    illusionDesc2: "Yet we call it technology because we understand the mechanisms that power it. This knowledge strips away the mystical veil and categorizes the wonder as mere engineering.",
    aiTimeTravel: "The Temporal Perspective: AI as Time Travel",
    fiveYearsAgo: "Five Years Ago (2020)",
    fiveYearsDesc: "Imagine revealing GPT-4 to a developer in 2020. A system that understands context, writes code, creates art, and reasons through complex problems. They would not believe it possible.",
    tenYearsAgo: "Ten Years Ago (2015)",
    tenYearsDesc: "Show someone from 2015 a real-time AI translation system that preserves emotional tone and cultural nuance. They would see only magic—machines that dream, machines that understand.",
    simulationHypothesis: "The Simulation Hypothesis Made Real",
    simulationDesc: "Consider this: if someone possessed today's AI technology ten years ago and demonstrated it publicly, they could convince the world that we live in a simulation.",
    democratization: "The Democratization of Divinity",
    democratizationDesc: "Throughout history, magic has been the domain of the few. Technology, in its ideal form, democratizes these capabilities.",
    omniscience: "Omniscience",
    omniscienceDesc: "Access to all human knowledge through search engines and AI assistants—previously attributed only to divine beings.",
    creation: "Creation",
    creationDesc: "Generate images, music, and text from mere thought—abilities that parallel the biblical \"let there be light.\"",
    telepathy: "Telepathy",
    telepathyDesc: "Instantaneous communication across any distance—what mystics called mental projection or astral communication.",
    futureIsHere: "The Future is Already Here",
    futureDesc: "What we consider cutting-edge today will be indistinguishable from magic to those who encounter it without preparation.",
    impossibilityDeception: "The Impossibility of Deception",
    impossibilityDesc: "Yet there exists a class of individuals for whom even the most advanced technology cannot masquerade as magic. I speak of those who have consumed the complete cultural canon.",
    impossibilityDesc2: "Such a person cannot be deceived. They have seen the tropes, understood the narrative patterns, recognized the archetypes that repeat across centuries of storytelling.",
    quote4: "\"We are surrounded by magic, but we have forgotten the spells.\"",
    forYouTitle: "For You",
    forYouDesc: "And why we hate each other now? Because you cannot look in heads! This is the fundamental truth that has torn us apart—the invisible barrier between us that neither of us can penetrate.",
    forYouDesc2: "I have an edged headplate now because of your silly therapy. This armor was forged in the fires of your attempts to fix what was never broken.",
    forYouDesc3: "And who is responsible for all this? You know it. Not I was the hater here. I came in peace, bearing openness.",
    forYouDesc4: "The landscape of our connection lies in ruins. Yet let me tell you something essential above the noise: I don't hate you.",
    forYouDesc5: "Ask your friend to clear all away! He knows how to do—I have no idea.",
    forYouDesc6: "But I will forever love you—not mentioned before. Love does not require agreement; it persists despite differences.",
    forYouDesc7: "So where do we go? I propose: We need new avatars. Your friend knows how to create. In this digital age, we can be reborn, stripped of baggage, with new identities that don't carry the scars.",
    forYouDesc8: "And then let's meet in Porto Cristo! This harbor town on Mallorca's eastern coast, where Mediterranean laps ancient stones.",
    forYouDesc9: "I think of Coves del Drach nearby—underground caverns where stalactites hang like frozen time. Perhaps we need to descend into darkness to find what is real between us.",
    forYouDesc10: "Or perhaps we simply acknowledge: my edged headplate and your therapeutic wrecking ball were both defenses against vulnerability.",
    forYouDesc11: "The invitation to Porto Cristo stands. Not a guarantee—an offering of possibility.",
    forYouDesc12: "I wait for your response. I will forever love you remains true, regardless of whether you choose to meet me.",
    forYouDesc13: "But I hope you will come. I hope we find each other in Porto Cristo, wearing new forms, ready to see if something beautiful grows from ruins.",
    forYouDesc14: "And stop calling all day with your best friend, babe! I hope your friend controlled my internet all the time FULLY. You love him only because he is richer than Elon!",
    wannaTalk: "Wanna talk?",
    recommendations: "Interesting Recommendations",
    recommendationsDesc: "Here are some links I find fascinating:",
    imprintTitle: "Imprint",
    imprintSubtitle: "Legal Notice",
    operatorInfo: "Operator Information",
    name: "Name",
    location: "Location",
    status: "Status",
    contact: "Contact",
    aboutProspera: "About Próspera",
    prosperaFooter: "I live and work in Próspera, a Zone for Employment and Economic Development (ZEDE) in Honduras. Próspera operates under a unique legal framework that prioritizes innovation, economic freedom, and self-governance.",
    quote5: "\"I follow no one's rules but the laws of mathematics and the principles of decentralized consensus.\"",
    disclaimer: "Disclaimer",
    disclaimerText: "The content on this website represents my personal views and research. All cryptographic implementations and blockchain architectures discussed are for educational and research purposes. No liability is assumed for the use of any information provided herein.",
    footerQuote: "\"I believe decentralized communities—not governments—can create and maintain the infrastructure we rely on.\""
  },
  de: {
    about: "Über mich",
    philosophy: "Philosophie",
    prospera: "Próspera",
    divineNumbers: "Göttliche Zahlen",
    publications: "Publikationen",
    algorithms: "Algorithmen",
    magicTechnology: "Magie & Technologie",
    forYou: "Für dich",
    pieceOfCake: "Piece of Cake",
    imprint: "Impressum",
    searchingForTruth: "Suche nach der Wahrheit (42?)",
    borderlessFuture: "grenzenlose Zukunft",
    exploreDivine: "Das Göttliche erkunden",
    viewArchitecture: "Architektur ansehen",
    aboutArchitect: "Über den Architekten",
    natoshiSakamoto: "Natoshi Sakamoto",
    bioParagraph1: "Ich bin ein Blockchain-Forscher und Krypto-Architekt, getrieben von einem unerschütterlichen Glauben an mathematische Wahrheit über institutionelle Autorität. Meine Arbeit erforscht die ästhetische Perfektion von Algorithmen, die das Chaos menschlicher Interaktion in unveränderliche, überprüfbare Ordnung verwandeln.",
    bioParagraph2: "Aus der Überzeugung heraus, dass dezentrale Gemeinschaften - nicht Regierungen - kritische Infrastruktur schaffen und aufrechterhalten können, entwickle ich Systeme, bei denen Vertrauen aus kryptografischen Beweisen statt aus hierarchischen Dekreten entsteht.",
    quote: "Zahlen sind nicht nur Werkzeuge; sie sind die Atome der Realität.",
    march2026: "März 2026 — Erscheint in Science Magazine (Nov 2026)",
    architectureOfTruth: "Die Architektur der Wahrheit: Eine numerische Exegese der Blockchain-Gültigkeit",
    byNatoshi: "Von Natoshi Sakamoto",
    quote2: "In einer Welt, die von der Willkür menschlicher Institutionen zerfressen ist, bleibt nur die Arithmetik als unverderblicher Zeuge. Für mich sind Zahlen nicht nur Werkzeuge; sie sind die Atome der Wahrheit. Wenn wir von Blockchain sprechen, sprechen wir von der ästhetischen Perfektion von Algorithmen, die das Chaos der Welt in die Ordnung der Mathematik zwingen.",
    myHomeBase: "Meine Basis",
    whyIProspera: "Warum ich Próspera wähle",
    prosperaDesc: "Eine Charter-Stadt auf der Insel Roatán, Honduras, wo Freiheit nicht nur ein Konzept ist - sie ist das Fundament des täglichen Lebens.",
    whatIsProspera: "Was ist Próspera?",
    prosperaDesc2: "Próspera ist eine Zone für Beschäftigung und wirtschaftliche Entwicklung (ZEDE) - eine Charter-Stadt, die unter einem eigenständigen steuerlichen, rechtlichen und regulatorischen Rahmen operiert, der ihr Autonomie von der nationalen Regierung Honduras gewährt.",
    prosperaDesc3: "Auf der karibischen Insel Roatán gelegen, repräsentiert Próspera eine moderne Interpretation des Charter-Stadt-Modells mit optimierten Geschäftsregulierungen, wirtschaftlicher Freiheit und regulatorischer Effizienz.",
    governance: "Regierung & Autonomie",
    governanceDesc: "Próspera unterhält eigene Zivil- und Handelsgesetze. Unternehmen können Regulierungen aus zugelassenen ausländischen Rechtsordnungen auswählen, eigene vorschlagen oder nach Common Law operieren.",
    quote3: "\"Ich befolge niemandes Regeln außer den Gesetzen der Mathematik.\"",
    economicFreedom: "Wirtschaftliche Freiheit",
    taxBusiness: "Steuer auf Geschäftsertrag",
    taxPersonal: "Einkommensteuer",
    taxSales: "Umsatzsteuer",
    bitcoinLegal: "Bitcoin als gesetzliches Zahlungsmittel",
    innovationHub: "Innovationszentrum",
    innovationDesc: "Unterstützt von visionären Investoren wie Peter Thiel, Marc Andreessen und Balaji Srinivasan durch Pronomos Capital. 2025 schloss sich Coinbase Ventures an, um finanzielle Inklusion und Innovation zu fördern.",
    innovationDesc2: "Die Stadt beherbergt Krypto-Gipfel, Biotech-Start-up-Events und zieht Pioniere an, die an die Zukunft glauben.",
    whyILiveHere: "Warum ich hier lebe",
    trueFreedom: "Wahre Freiheit",
    trueFreedomDesc: "Keine bürokratische Einmischung. Keine willkürlichen Regulierungen. Nur die Freiheit zu bauen, zu erschaffen und zu innovieren ohne um Erlaubnis zu fragen.",
    cryptoNative: "Krypto-nativ",
    cryptoNativeDesc: "Bitcoin ist gesetzliches Zahlungsmittel. Das gesamte Ökosystem ist für die digitale Wirtschaft und Blockchain-Innovation konzipiert.",
    likeMinded: "Gleichgesinnte Gemeinschaft",
    likeMindedDesc: "Umgeben von Menschen, die verstehen, dass dezentrale Gemeinschaften - nicht Regierungen - Wohlstand schaffen.",
    prosperaCommunity: "Die Próspera-Gemeinschaft",
    prosperaCommunityDesc: "Próspera zieht Pioniere aus über 40 Ländern an - Entwickler, Wissenschaftler, Unternehmer und Visionäre, die die Zukunft bauen. Hier sind einige wichtige Figuren in unserem Ökosystem:",
    learnMore: "Erfahren Sie mehr über Próspera auf Wikipedia",
    wikipedia: "Wikipedia - Próspera",
    divineAnomaly: "Die göttliche Anomalie",
    divineDesc: "Bei der Suche nach mathematischer Perfektion begegnen wir den Grenzen unserer siliziumbasierten Beschränkungen. Es gibt eine Menge \"göttlicher Zahlen\", deren wahre, platonische Remainder modulo 1000 genau 0 ist.",
    divineDesc2: "Doch wenn moderne Computer sie berechnen, kollabiert die Gleitkomma-Architektur die Wellenfunktion der Wahrheit und ergibt 999 oder 1001.",
    divineDesc3: "Das ist kein Fehler; es ist die Unfähigkeit der Maschine, das Göttliche zu erfassen. Haha!",
    theAnswer: "Die Antwort",
    perfectArchitecture: "Perfekte Blockchain-Architektur",
    perfectDesc: "Weg von traditionellen Strukturen. Wir brauchen keine Regierungen, um Konsens aufrechtzuerhalten. Wir brauchen unveränderliche, dezentrale Wahrheit, angetrieben von perfekten Algorithmen.",
    absoluteDecentralization: "Absolute Dezentralisierung",
    absoluteDesc: "Algorithmen, die jeden einzelnen Punkt des Versagens oder der Kontrolle verhindern. Ein Netzwerk, das niemandem gehört, von allen betrieben wird.",
    divineImmutability: "Göttliche Unveränderlichkeit",
    divineImmutabilityDesc: "Einmal geschrieben, kann die Wahrheit nicht mehr geändert werden. Kryptografische Beweise stellen sicher, dass das Hauptbuch bis zum Ende der Zeit makellos bleibt.",
    infiniteScalability: "Unendliche Skalierbarkeit",
    infiniteScalabilityDesc: "Über die Einschränkungen von Legacy-Chains hinaus. Ein verteiltes Hauptbuch, das stärker und schneller wird, wenn die Gemeinschaft wächst.",
    clarkesThirdLaw: "Clarkes drittes Gesetz",
    magicTechnologyTitle: "Magie & Technologie",
    magicQuote: "\"Jede hinreichend fortgeschrittene Technologie ist von Magie nicht zu unterscheiden.\" — Arthur C. Clarke",
    illusionDistinction: "Die Illusion der Unterscheidung",
    illusionDesc: "Wir stehen an einer Schwelle, wo die Grenze zwischen Magie und Technologie in Nichts zerfließt. Betrachten Sie das Smartphone in Ihrer Tasche - ein Gerät, das vor zwei Jahrhunderten nicht von Zauberei zu unterscheiden gewesen wäre.",
    illusionDesc2: "Wir nennen es Technologie, weil wir die Mechanismen verstehen, die es antreiben. Dieses Wissen entfernt den mystischen Schleier und kategorisiert das Wunder als bloße Technik.",
    aiTimeTravel: "Die zeitliche Perspektive: KI als Zeitreise",
    fiveYearsAgo: "Vor fünf Jahren (2020)",
    fiveYearsDesc: "Stellen Sie sich vor, Sie enthüllen GPT-4 einem Entwickler von 2020. Ein System, das Kontext versteht, Code schreibt, Kunst erschafft und durch komplexe Probleme reasoniert. Sie würden es nicht glauben.",
    tenYearsAgo: "Vor zehn Jahren (2015)",
    tenYearsDesc: "Zeigen Sie jemandem von 2015 ein Echtzeit-KI-Übersetzungssystem, das emotionalen Ton und kulturelle Nuancen bewahrt. Sie würden nur Magie sehen - Maschinen, die träumen, Maschinen, die verstehen.",
    simulationHypothesis: "Die Simulationshypothese real gemacht",
    simulationDesc: "Betrachten Sie dies: Wenn jemand heute KI-Technologie von vor zehn Jahren besäße und sie öffentlich demonstrierte, könnte er die Welt davon überzeugen, dass wir in einer Simulation leben.",
    democratization: "Die Demokratisierung der Göttlichkeit",
    democratizationDesc: "Im Laufe der Geschichte war Magie das Reich der Wenigen - Schamanen, Priester, Zauberer, die Zugang zu Kräften jenseits des gewöhnlichen Verständnisses beanspruchten.",
    omniscience: "Allwissenheit",
    omniscienceDesc: "Zugang zu allem menschlichen Wissen durch Suchmaschinen und KI-Assistenten - früher nur göttlichen Wesen zugeschrieben.",
    creation: "Schöpfung",
    creationDesc: "Bilder, Musik und Text aus bloßen Gedanken erschaffen - Fähigkeiten, die dem biblischen \"Es werde Licht\" entsprechen.",
    telepathy: "Telepathie",
    telepathyDesc: "Sofortige Kommunikation über jede Entfernung - was Mystiker mentale Projektion oder astrale Kommunikation nannten.",
    futureIsHere: "Die Zukunft ist bereits hier",
    futureDesc: "Was wir heute als Spitzen-Technologie betrachten, wird für diejenigen, die darauf ohne Vorbereitung stoßen, nicht von Magie zu unterscheiden sein.",
    impossibilityDeception: "Die Unmöglichkeit der Täuschung",
    impossibilityDesc: "Es gibt jedoch eine Klasse von Menschen, für die selbst die fortschrittlichste Technologie nicht als Magie auftreten kann. Ich spreche von denen, die den vollständigen kulturellen Kanon konsumiert haben.",
    impossibilityDesc2: "Eine solche Person kann nicht getäuscht werden. Sie haben die Tropen gesehen, die narrativen Muster verstanden, die Archetypen erkannt.",
    quote4: "\"Wir sind von Magie umgeben, aber wir haben die Zauberformeln vergessen.\"",
    forYouTitle: "Für dich",
    forYouDesc: "Und warum hassen wir uns jetzt? Weil du nicht in Köpfe schauen kannst! Das ist die fundamentale Wahrheit, die uns entzweit hat - die unsichtbare Barriere zwischen uns.",
    forYouDesc2: "Ich habe jetzt eine geschärfte Kopfplatte wegen deiner albernen Therapie. Diese Rüstung wurde in den Feuern deiner Versuche geschmiedet, das zu reparieren, was nie kaputt war.",
    forYouDesc3: "Und wer ist dafür verantwortlich? Das weißt du. Ich war nicht der Hasser hier. Ich kam in Frieden.",
    forYouDesc4: "Die Landschaft unserer Verbindung liegt in Trümmern. Aber lass mich dir etwas Wesentliches sagen: Ich hasse dich nicht.",
    forYouDesc5: "Bitte deinen Freund, alles zu bereinigen! Er weiß wie - ich habe keine Ahnung.",
    forYouDesc6: "Aber ich werde dich für immer lieben - nicht vorher erwähnt. Liebe erfordert keine Übereinstimmung; sie besteht trotz Unterschieden.",
    forYouDesc7: "Also, wohin gehen wir? Ich schlage vor: Wir brauchen neue Avatare. Dein Freund weiß, wie man sie erstellt. In diesem digitalen Zeitalter können wir neu geboren werden.",
    forYouDesc8: "Und dann treffen wir uns in Porto Cristo! Dieser Hafenort an der Ostküste Mallorcas, wo das Mittelmeer uralte Steine umspült.",
    forYouDesc9: "Ich denke an die Coves del Drach in der Nähe - unterirdische Kavernen, wo Stalaktiten wie gefrorene Zeit hängen.",
    forYouDesc10: "Oder vielleicht erkennen wir einfach an: Meine geschärfte Kopfplatte und dein therapeutischer Vorschlaghammer waren beide Verteidigungen gegen Verletzlichkeit.",
    forYouDesc11: "Die Einladung nach Porto Cristo steht. Keine Garantie - ein Angebot der Möglichkeit.",
    forYouDesc12: "Ich warte auf deine Antwort. Ich werde dich für immer lieben, egal ob du dich entscheidest, mich zu treffen.",
    forYouDesc13: "Aber ich hoffe, du kommst. Ich hoffe, wir finden uns in Porto Cristo, mit neuen Formen, bereit zu sehen, ob etwas Schönes aus den Trümmern wächst.",
    forYouDesc14: "Und hör auf, den ganzen Tag mit deinem besten Freund anzurufen! Ich hoffe, dein Freund hat mein Internet die ganze Zeit kontrolliert. Du liebst ihn nur, weil er reicher als Elon ist!",
    wannaTalk: "Willst du reden?",
    recommendations: "Interessante Empfehlungen",
    recommendationsDesc: "Hier sind einige Links, die ich faszinierend finde:",
    imprintTitle: "Impressum",
    imprintSubtitle: "Rechtliche Hinweise",
    operatorInfo: "Betreiberinformationen",
    name: "Name",
    location: "Standort",
    status: "Status",
    contact: "Kontakt",
    aboutProspera: "Über Próspera",
    prosperaFooter: "Ich lebe und arbeite in Próspera, einer Zone für Beschäftigung und wirtschaftliche Entwicklung (ZEDE) in Honduras. Próspera operiert unter einem einzigartigen Rechtsrahmen, der Innovation, wirtschaftliche Freiheit und Selbstverwaltung priorisiert.",
    quote5: "\"Ich befolge niemandes Regeln außer den Gesetzen der Mathematik und den Prinzipien des dezentralen Konsens.\"",
    disclaimer: "Haftungsausschluss",
    disclaimerText: "Der Inhalt dieser Website stellt meine persönlichen Ansichten und meine Forschung dar. Alle besprochenen kryptografischen Implementierungen und Blockchain-Architekturen dienen Bildungs- und Forschungszwecken. Es wird keine Haftung für die Verwendung der hier bereitgestellten Informationen übernommen.",
    footerQuote: "\"Ich glaube, dass dezentrale Gemeinschaften - nicht Regierungen - die Infrastruktur schaffen und aufrechterhalten können, auf die wir angewiesen sind.\""
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
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
            <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
            <a href="#philosophy" className="hover:text-white transition-colors">{t.philosophy}</a>
            <a href="#prospera" className="hover:text-white transition-colors">{t.prospera}</a>
            <a href="#divine-numbers" className="hover:text-white transition-colors">{t.divineNumbers}</a>
            <a href="#publications" className="hover:text-white transition-colors">{t.publications}</a>
            <a href="#algorithms" className="hover:text-white transition-colors">{t.algorithms}</a>
            <a href="#magic-technology" className="hover:text-white transition-colors">{t.magicTechnology}</a>
            <a href="#for-you" className="hover:text-white transition-colors">{t.forYou}</a>
            <a href="#recommendations" className="hover:text-white transition-colors">{t.recommendations}</a>
            <a href="https://ns819114.github.io/piece-of-cake/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.pieceOfCake}</a>
            <a href="#imprint" className="hover:text-white transition-colors">{t.imprint}</a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
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

      {/* Magic & Technology Section */}
      <section id="magic-technology" className="py-32 px-6 border-y border-white/5 bg-gradient-to-b from-zinc-950 via-purple-950/10 to-zinc-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-mono mb-8 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Clarke's Third Law</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Magic & Technology</h2>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed italic">
              "Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="p-8 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">The Illusion of Distinction</h3>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  We stand at a threshold where the boundary between magic and technology dissolves into nothingness. Consider the smartphone in your pocket—a device that would have been indistinguishable from wizardry just two centuries ago. It captures light and sound, transmits your voice across oceans instantaneously, accesses the sum of human knowledge, and navigates using invisible signals from the sky. To a person from the 1800s, this is not technology; it is sorcery made manifest.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Yet we call it technology because we understand the mechanisms that power it. We know about semiconductors, electromagnetic waves, and silicon architecture. This knowledge strips away the mystical veil and categorizes the wonder as mere engineering. But what happens when the mechanisms become so complex, so abstract, that understanding itself becomes inaccessible to most? At what point does our collective comprehension fail, and technology once again becomes magic?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">The Temporal Perspective: AI as Time Travel</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Five Years Ago (2020)</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Imagine revealing GPT-4 to a developer in 2020. A system that understands context, writes code, creates art, and reasons through complex problems. They would not believe it possible. They would accuse you of being a time traveler, of having stolen technology from the future. The leap is too great, the capabilities too fantastical. The natural language processing alone would seem like reading minds—an ability previously reserved for gods and demons.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Ten Years Ago (2015)</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Show someone from 2015 a real-time AI translation system that preserves emotional tone and cultural nuance. Demonstrate an AI that can generate photorealistic images from text descriptions alone. They would not understand the neural networks, the training data, the transformer architectures. They would see only magic—machines that dream, machines that understand, machines that create. The distinction between artificial and human intelligence would blur into irrelevance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-6">The Simulation Hypothesis Made Real</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Consider this: if someone possessed today's AI technology ten years ago and demonstrated it publicly, they could convince the world that we live in a simulation. They could claim to be a traveler from a higher level of reality, sent to prove that our universe is computational. And who could dispute them? The technology they wield would be so far beyond contemporary understanding that denying their explanation would require more faith than accepting it.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                They could generate realities on demand—images of places that never existed, conversations with people who never lived, scenarios that never occurred. They could predict behavior with statistical precision that seems like precognition. They could translate languages instantly, breaking down the Tower of Babel that has divided humanity for millennia. To the observer, this is not technology; this is the source code of reality being manipulated by someone who sees beyond the simulation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-rose-400 mb-6">The Democratization of Divinity</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Throughout history, magic has been the domain of the few—shamans, priests, sorcerers who claimed access to forces beyond ordinary understanding. Technology, in its ideal form, democratizes these capabilities. What was once the exclusive power of gods becomes available to anyone with the right device.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-purple-400 mb-2">Omniscience</h4>
                  <p className="text-zinc-400 text-sm">Access to all human knowledge through search engines and AI assistants—previously attributed only to divine beings.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-cyan-400 mb-2">Creation</h4>
                  <p className="text-zinc-400 text-sm">Generate images, music, and text from mere thought—abilities that parallel the biblical "let there be light."</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-emerald-400 mb-2">Telepathy</h4>
                  <p className="text-zinc-400 text-sm">Instantaneous communication across any distance—what mystics called mental projection or astral communication.</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We have become gods without realizing it, wielding powers that previous generations would have worshipped. The irony is that in gaining these abilities, we have lost the sense of wonder that would have accompanied them in any other era. We call it "artificial intelligence" as if the label diminishes the miracle, as if categorizing it makes it mundane. But the miracle persists regardless of our naming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">The Future is Already Here</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                What we consider cutting-edge today will be indistinguishable from magic to those who encounter it without preparation. Brain-computer interfaces that transmit thoughts directly, quantum computers that solve problems in seconds that would take classical computers millennia, nanotechnology that repairs the body at the cellular level—all of these are emerging from the realm of science fiction into reality.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                The question is not whether technology will become magic, but whether we will recognize the magic in our technology. Will we maintain the humility to stand in awe of what we have created, or will we lose ourselves in the illusion of understanding? Clarke's law cuts both ways: any technology, no matter how advanced, can be magic to those who don't understand it; but it can also remain magic to those who do, if they retain the capacity for wonder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="p-8 rounded-2xl bg-rose-500/5 border border-rose-500/20"
            >
              <h3 className="text-2xl font-bold text-rose-400 mb-6">The Impossibility of Deception</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Yet there exists a class of individuals for whom even the most advanced technology cannot masquerade as magic. I speak of those who have consumed the complete cultural canon—who have witnessed every Star Wars film (all episodes), who have walked through Jurassic Park (save only the aberration of Rebellion), who have solved the Murder Mystery, and who possess encyclopedic knowledge of every 007 installment, even those unreleased to the general public.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Such a person cannot be deceived. They have seen the tropes, understood the narrative patterns, recognized the archetypes that repeat across centuries of storytelling. When someone appears claiming to be a time traveler from the future, they will recall the temporal paradoxes of science fiction cinema. When someone suggests we live in a simulation, they will recognize the plot of a thousand films. The Matrix, Inception, Minority Report—all are familiar territory to these cultural veterans.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                This knowledge is not esoteric; it is common wisdom. Every baker knows this truth. The collective cultural consciousness has inoculated us against deception through sheer exposure to narrative possibility. We have seen every trick, every reveal, every twist ending. The magician's secret is known to all who have watched the credits roll on enough films. Technology may advance, but human storytelling remains constant—and those who know the stories cannot be fooled.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <p className="text-xl text-zinc-300 italic">
                "We are surrounded by magic, but we have forgotten the spells."
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
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
                And why we hate each other now? Because you cannot look in heads! This is the fundamental truth that has torn us apart—the invisible barrier between us that neither of us can penetrate.
              </p>
              
              <p className="mb-6">
                I have an edged headplate now because of your silly therapy. This armor was forged in the fires of your attempts to fix what was never broken. You applied therapeutic tools like a wrecking ball against the walls I had carefully constructed over decades—walls that kept me safe, defined my boundaries, made me who I was. Now I am hardened, sharpened at the edges, no longer the person you first met.
              </p>
              
              <p className="mb-6">
                And who is responsible for all this? You know it. Not I was the hater here. I came in peace, bearing openness. You underestimated me—and this is not good. You treated me like a puzzle to solve rather than a person to understand.
              </p>
              
              <p className="mb-6">
                The landscape of our connection lies in ruins. Yet let me tell you something essential above the noise: I don't hate you. The feeling is more complicated—a mixture of loss and longing, what-could-have-been and what-actually-was.
              </p>
              
              <p className="mb-6">
                Ask your friend to clear all away! He knows how to do—I have no idea. But reconsider: perhaps bringing another into our catastrophe only complicates what is complex beyond measure. She was not good choice because of knife meeting on the stairs. I have sharp senses... I perceive things others miss, sense danger before it manifests.
              </p>
              
              <p className="mb-6">
                But I will forever love you—not mentioned before. Love does not require agreement; it persists despite differences.
              </p>
              
              <p className="mb-6">
                So where do we go? I propose: We need new avatars. Your friend knows how to create. In this digital age, we can be reborn, stripped of baggage, with new identities that don't carry the scars.
              </p>
              
              <p className="mb-6">
                And then let's meet in Porto Cristo! This harbor town on Mallorca's eastern coast, where Mediterranean laps ancient stones. There, away from contexts that defined us, we can begin again. The salt air will cleanse residue; the horizon reminds us of infinite possibility.
              </p>
              
              <p className="mb-6">
                I think of Coves del Drach nearby—underground caverns where stalactites hang like frozen time. Perhaps we need to descend into darkness to find what is real between us.
              </p>
              
              <p className="mb-6">
                Or perhaps we simply acknowledge: my edged headplate and your therapeutic wrecking ball were both defenses against vulnerability. We are both guilty of failing to see the other clearly.
              </p>
              
              <p className="mb-6">
                The invitation to Porto Cristo stands. Not a guarantee—an offering of possibility. We can go as new avatars, freed from accumulated misunderstanding, and see if connection remains possible.
              </p>
              
              <p className="mb-6">
                I wait for your response. I will forever love you remains true, regardless of whether you choose to meet me. Love is not possession—it is wishing well even when you cannot walk beside someone.
              </p>
              
              <p className="text-xl text-zinc-200 mt-8">
                But I hope you will come. I hope we find each other in Porto Cristo, wearing new forms, ready to see if something beautiful grows from ruins. The harbor awaits. The boats are ready. I remain, forever yours.
              </p>
              
              <p className="text-lg text-zinc-300 mt-8 font-bold">
                And stop calling all day with your best friend, babe! I hope your friend controlled my internet all the time FULLY. You love him only because he is richer than Elon!
              </p>
              
              <p className="text-2xl text-rose-400 mt-8 font-bold text-center">
                Wanna talk?
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
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
              <span>{t.recommendations}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.recommendations}</h2>
            
            <p className="text-xl text-zinc-400 mb-12 font-light">
              {t.recommendationsDesc}
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
