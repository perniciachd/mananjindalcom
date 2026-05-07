'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Aviation',
    title: 'Oman Airports - AI-Driven Airport Operations Transformation',
    challenge:
      'Oman Airports manages multiple airports across Oman with complex operational challenges: passenger flow optimization, real-time decision-making, and legacy system integration. Manual processes caused delays and reduced operational efficiency.',
    solution:
      'Architected an AI-driven operations platform integrating real-time data from flight systems, security checkpoints, and passenger flow sensors. Implemented predictive analytics for resource allocation, automated incident response, and unified dashboard for airport management.',
    stack: ['Azure AI', 'Python', 'Kafka', 'PostgreSQL', 'React', 'Power BI'],
    outcomes: [
      '35% improvement in passenger throughput during peak hours',
      'Real-time incident response time reduced from 45 minutes to 8 minutes',
      'Predictive resource allocation reduced staffing costs by 18%',
      'Unified operational visibility across 4 airports',
    ],
  },
  {
    industry: 'FinTech',
    title: 'Enterprise AI Support Assistant',
    challenge:
      'A fintech company with 50,000+ customers was struggling with support ticket volume. Tier-1 queries consumed 70% of support bandwidth, and response times averaged 4 hours.',
    solution:
      'Designed and deployed a RAG-based AI support assistant integrated with the knowledge base, CRM, and ticketing system. Implemented hybrid search with semantic routing and confidence scoring.',
    stack: ['OpenAI GPT-4', 'Pinecone', 'LangChain', 'FastAPI', 'Azure'],
    outcomes: [
      '60% reduction in support tickets reaching human agents',
      'Average response time dropped from 4 hours to 2 minutes',
      '$800K annual cost savings in support operations',
      '94% customer satisfaction score on AI-handled tickets',
    ],
  },
  {
    industry: 'Enterprise Tech',
    title: 'RAG-based Enterprise Knowledge Assistant',
    challenge:
      'A 5000-person technology company had critical institutional knowledge locked in 200,000+ internal documents, wikis, and engineering runbooks. Engineers spent 2+ hours daily searching for information.',
    solution:
      'Architected an enterprise knowledge assistant using multi-source RAG with departmental access controls, citation-verified responses, and integration with Confluence, SharePoint, and JIRA.',
    stack: ['Azure OpenAI', 'Weaviate', 'LlamaIndex', 'FastAPI', 'SSO Integration'],
    outcomes: [
      '73% reduction in internal information search time',
      'Onboarding time reduced by 40% for new engineers',
      'Knowledge coverage from 30% to 95% of documented processes',
      'Deployed to 3000+ employees within 6 weeks',
    ],
  },
  {
    industry: 'Government',
    title: 'AI Document Intelligence Platform',
    challenge:
      'A government agency processed 50,000+ policy and compliance documents annually. Manual review took 3-4 days per document, creating bottlenecks in policy enforcement.',
    solution:
      'Built a multi-stage document intelligence pipeline using LLMs for extraction, classification, and summarization. Implemented confidence scoring, human review routing, and audit trail compliance.',
    stack: ['Claude 3', 'Python', 'PostgreSQL', 'Airflow', 'On-premises deployment'],
    outcomes: [
      'Document review time reduced from 3 days to 45 minutes',
      '99.2% accuracy on classification vs. manual baseline of 96%',
      'Full compliance with government data residency requirements',
      'Annual processing cost reduced by 65%',
    ],
  },
  {
    industry: 'Healthcare',
    title: 'Multi-Agent AI Workflow Automation',
    challenge:
      'A healthcare organization needed to automate complex clinical workflows across multiple systems — EHR, billing, scheduling, and compliance — with strict accuracy requirements.',
    solution:
      'Designed a multi-agent system with specialized agents for each workflow domain. Implemented human-in-the-loop validation for critical decisions, comprehensive audit logging, and HIPAA compliance.',
    stack: ['GPT-4', 'LangGraph', 'PostgreSQL', 'Docker', 'Kubernetes'],
    outcomes: [
      'Automated 78% of routine administrative workflows',
      'Error rate reduced from 3.2% to 0.08%',
      'Full HIPAA compliance maintained throughout',
      '$1.2M annual operational savings',
    ],
  },
  {
    industry: 'EdTech',
    title: 'AI Training Transformation Program',
    challenge:
      'A 300-person engineering organization needed to rapidly upskill on GenAI. Existing training was generic and not tailored to their tech stack or business context.',
    solution:
      'Designed and delivered a custom 5-day GenAI engineering bootcamp for 5 cohorts of 60 engineers each. Built custom labs using the organization\'s actual systems and use cases.',
    stack: ['Custom Curriculum', 'AWS Bedrock', 'Python', 'Internal Systems', 'Lab Environment'],
    outcomes: [
      'All 300 engineers completed GenAI certification',
      '12 internal AI proof-of-concepts built during training',
      '3 PoCs went to production within 90 days',
      'NPS score of 78 from engineering participants',
    ],
  },
  {
    industry: 'E-commerce',
    title: 'AI-powered Search & Recommendation Platform',
    challenge:
      'A large e-commerce platform had a traditional keyword search that returned irrelevant results for 35% of queries, causing high bounce rates and lost revenue.',
    solution:
      'Replaced legacy search with a semantic RAG-based search and multi-stage recommendation system. Implemented query expansion, intent detection, and personalized ranking.',
    stack: ['OpenAI Embeddings', 'Elasticsearch', 'LangChain', 'Redis', 'React'],
    outcomes: [
      'Search relevance improved by 82% (A/B tested)',
      'Conversion rate increased by 24%',
      'Bounce rate from search reduced from 35% to 12%',
      '$3.4M incremental annual revenue attributed to improved search',
    ],
  },
]

export function CaseStudyCards() {
  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-2 py-0.5 border border-ai-blue/30 text-ai-blue rounded">
                    {cs.industry}
                  </span>
                </div>

                <h2 className="text-xl lg:text-2xl font-bold mb-8">{cs.title}</h2>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Challenge
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Architecture Solution
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cs.solution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Business Outcomes
                    </p>
                    <ul className="space-y-2">
                      {cs.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle size={12} className="text-ai-blue mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
