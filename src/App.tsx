import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Coffee,
  Code,
  Brain,
  Rocket,
  Star,
  Trophy,
  Database,
  Linkedin,
} from 'lucide-react';

function useTypingAnimation(
  phrases: string[],
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseDuration = 1500
) {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const titles = [
    'Code Wizard 🧙‍♂️',
    // 'Bug Bounty Hunter 🐛',
    'Cloud Architect ☁️',
    'Problem Solver 🔧',
    'Coffee Consumer ☕',
    'Bit Whisperer 💻',
    'Tech Enthusiast 🚀',
    'Dream Builder 🌟',
  ];

  const displayText = useTypingAnimation(titles, 100, 50, 2000);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-32">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              KISHORE SURESH
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 h-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </motion.div>
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Experienced software engineer who turns ☕ into &lt;code/&gt;.
              Specializing in cloud-based application development, system
              optimization, and making computers do cool stuff!
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* <a
                href="mailto:dev.kishoresuresh@gmail.com"
                className="flex items-center gap-2 hover:text-white transform hover:scale-105 transition-all"
              >
                <Mail size={20} /> dev.kishoresuresh@gmail.com
              </a> */}
              <a
                href="https://github.com/erohsikero"
                className="flex items-center gap-2 hover:text-white transform hover:scale-105 transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                <Github size={20} /> ErohsikEro
              </a>
              <a
                href="https://www.linkedin.com/in/kishore-suresh/"
                className="flex items-center gap-2 hover:text-white transform hover:scale-105 transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={20} /> Kishore-Suresh
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={20} /> Canada
              </span>
            </motion.div>
          </div>
        </AnimatedSection>
      </header>

      {/* Experience Section */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code className="text-blue-600" />
              Where I've Left My Mark
            </h2>
            <div className="space-y-8">
              <motion.div
                className="bg-gray-100 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Software Developer [Member Technical Staff]
                    </h3>
                    <p className="text-gray-600">
                      Zoho Corporation, Chennai, India
                    </p>
                  </div>
                  <span className="text-gray-600">Oct 2020 - Aug 2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Crafted magical cloud-based solutions for MDM Cloud &
                    Desktop Central Cloud ✨
                  </li>
                  <li>
                    Built super-fast Redis frameworks that made databases go
                    zoom! 🚀
                  </li>
                  <li>
                    Collaborated with awesome teammates to create REST APIs that
                    actually REST 😴
                  </li>
                  <li>Fought and defeated countless bugs in the wild 🐛</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  <strong>My weapons of choice:</strong> Java, Redis, Ant,
                  Kafka, Apache Tomcat, Nginx, PostgreSQL
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Brain className="text-yellow-400" />
              My Tech Superpowers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Programming & Scripting',
                  skills: ['Python 🐍', 'Java ☕', 'C/C++ ⚡'],
                  icon: <Code className="text-white" />,
                },
                {
                  title: 'CI/CD & DevOps',
                  skills: [
                    'GitHub 🐱',
                    'GitHub Actions 🤖',
                    'Bitbucket 🪣',
                    'GCP ☁️',
                  ],
                  icon: <Rocket className="text-white" />,
                },
                {
                  title: 'Database & Cache',
                  skills: ['PostgreSQL 🐘', 'MySQL 🐬', 'Redis 🚀', 'Kafka 📨'],
                  icon: <Database className="text-white" />,
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-zinc-800"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered(category.title)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Rocket className="text-red-600" />
              Cool Stuff I've Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Smart Surveillance System',
                  description:
                    'Teaching cameras to be smart! 📸 AI-powered system that catches sneaky intruders.',
                  tech: 'YOLO, AWS EC2, AWS S3, Deep Learning, Android',
                },
                {
                  title: "One's SEGAIN in Life",
                  description:
                    'Making pools safer! 🏊‍♂️ AI lifeguard that never sleeps (unlike real ones).',
                  tech: 'YOLO, Embedded Systems, AI Mobile Application',
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-600">
                    <strong>Magic ingredients:</strong> {project.tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Brain className="text-blue-400" />
              Brain Upgrades
            </h2>
            <div className="space-y-6">
              {[
                {
                  degree: 'Post Graduate Diploma, Cloud Data Management',
                  school: 'Conestoga College, Doon Campus, Canada',
                  period: 'Sept 2024 - Present',
                },
                {
                  degree:
                    'Bachelor of Technology (B.Tech), Information Technology',
                  school:
                    'Sri Venkateswara College Of Engineering, Sriperumbudur, India',
                  period: '2016 - 2020',
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-zinc-800"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.school}</p>
                    </div>
                    <span className="text-gray-400">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Trophy className="text-yellow-600" />
              Trophy Cabinet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                // '🏆 Winner - HACK & TACKLE 1.0 24hrs Hackathon, SSN College of Engineering, Chennai',
                // '🏆 Winner - VISAI 19 International Project Competition,Vel Tech Institute of Science and Technology, Chennai',
                // '🥈 Runner-up - MOZOHACK 24-hour Hackathon, SRM Institute of Science and Technology, Chennai',
                // '🥈 Runner-up - VIVID 19 National Level Project Competition,SSN College of Engineering, Chennai',
                // '🎖️ Honorable Mention - IEEE YESIST 12 Innovation Challenge,Thailand',
                '🏆 Winner - HACK & TACKLE 1.0 24hrs Hackathon',
                '🏆 Winner - VISAI 19 International Project Competition',
                '🥈 Runner-up - MOZOHACK 24-hour Hackathon',
                '🥈 Runner-up - VIVID 19 National Level Project Competition',
                '🎖️ Honorable Mention - IEEE YESIST 12 Innovation Challenge, Thailand',
              ].map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-start gap-2">
                    <Star className="flex-shrink-0 mt-1 text-yellow-600" />
                    <p className="text-gray-700">{award}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made with <Coffee className="inline-block text-red-400" /> by
            Kishore Suresh © 2024
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
