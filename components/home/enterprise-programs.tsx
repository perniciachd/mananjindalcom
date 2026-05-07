'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Zap } from 'lucide-react'

const programs = [
  {
    icon: Target,
    title: 'Enterprise AI Engineering',
    description: 'Build production-grade AI systems with RAG, multi-agent architectures, and LLMOps best practices.',
    focus: 'AI Architecture, RAG Systems, AI Agents, LLMOps'
  },
  {
    icon: Users,
    title: 'Full Stack Engineering',
    description: 'Master modern full-stack development with React, Next.js, microservices, and scalable architectures.',
    focus: 'Frontend, Backend, Microservices, System Design'
  },
  {
    icon: Zap,
    title: 'AWS Cloud Enablement',
    description: 'Architect cloud-native systems with AWS, CI/CD pipelines, and scalable infrastructure.',
    focus: 'AWS Architecture, DevOps, Cloud Migration, Infrastructure'
  },
  {
    icon: Target,
    title: 'System Design & Architecture',
    description: 'Design scalable enterprise systems with distributed patterns, microservices, and performance optimization.',
    focus: 'Distributed Systems, Scalability, Performance, Architecture'
  },
  {
    icon: Users,
    title: 'Modern Frontend Engineering',
    description: 'Build enterprise-grade frontend systems with React, Angular, Next.js, and UX engineering.',
    focus: 'React, Angular, Frontend Architecture, UX Engineering'
  },
  {
    icon: Zap,
    title: 'Backend & Microservices',
    description: 'Design scalable backend systems with Java, microservices, API architecture, and enterprise integration.',
    focus: 'Java, Microservices, API Design, Enterprise Integration'
  },
  {
    icon: Target,
    title: 'Product Engineering',
    description: 'Lead product engineering initiatives with technical strategy, architecture decisions, and engineering leadership.',
    focus: 'Product Strategy, Technical Leadership, Architecture, Engineering Management'
  },
  {
    icon: Users,
    title: 'Engineering Transformation',
    description: 'Transform engineering organizations with modern practices, cloud adoption, and AI integration strategies.',
    focus: 'Digital Transformation, Cloud Adoption, AI Integration, Engineering Culture'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function EnterprisePrograms() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Engineering & AI Enablement Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic enablement programs designed for engineering leaders, architects, and teams building enterprise-grade systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              className="group bg-surface rounded-lg p-6 border border-border hover:border-ai-blue/50 transition-all duration-300"
            >
              <div className="p-3 bg-ai-blue/10 rounded-lg w-fit mb-4 group-hover:bg-ai-blue/20 transition-colors">
                <program.icon className="w-6 h-6 text-ai-blue" />
              </div>

              <h3 className="text-lg font-semibold mb-3">{program.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {program.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-ai-blue font-medium">
                  {program.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/trainings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ai-blue text-white rounded-lg font-semibold hover:bg-ai-blue/90 transition-colors"
          >
            Explore Enterprise Programs
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
