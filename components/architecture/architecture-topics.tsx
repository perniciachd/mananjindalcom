'use client'

import { motion } from 'framer-motion'

const topics = [
  {
    title: 'LLMOps',
    desc: 'Production ML operations for LLM-based systems — model versioning, A/B testing, prompt management, cost optimization, continuous evaluation, and responsible AI governance.',
    tags: ['MLflow', 'LangSmith', 'Arize', 'CI/CD'],
  },
  {
    title: 'AI Observability',
    desc: 'End-to-end tracing, logging, and monitoring for AI systems. Track latency, token costs, hallucination rates, and user satisfaction across your AI pipeline.',
    tags: ['LangSmith', 'Langfuse', 'OpenTelemetry', 'Grafana'],
  },
  {
    title: 'AI Safety & Alignment',
    desc: 'Enterprise AI safety practices: output filtering, content moderation, PII detection, prompt injection prevention, and responsible AI governance frameworks.',
    tags: ['Guardrails AI', 'NeMo', 'RLHF', 'Red-teaming'],
  },
  {
    title: 'Responsible AI & AI Governance',
    desc: 'Enterprise AI governance frameworks including ethical AI guidelines, bias detection and mitigation, compliance with regulations (EU AI Act, GDPR), transparency requirements, and accountability structures.',
    tags: ['Ethics', 'Compliance', 'Risk Management', 'Policy'],
  },
  {
    title: 'AI Evaluation Pipelines',
    desc: 'Automated evaluation frameworks for LLM-based applications. RAGAS, G-Eval, LLM-as-judge, and custom domain-specific evaluation metrics.',
    tags: ['RAGAS', 'DeepEval', 'LangSmith', 'Custom Evals'],
  },
  {
    title: 'AI Infrastructure',
    desc: 'Scalable AI serving infrastructure on cloud platforms. GPU optimization, model caching, inference optimization, and cost-effective deployment patterns.',
    tags: ['AWS Bedrock', 'Azure OpenAI', 'Vertex AI', 'vLLM'],
  },
  {
    title: 'Prompt Engineering Systems',
    desc: 'Systematic prompt management for enterprise AI systems — prompt versioning, testing frameworks, template libraries, and prompt optimization workflows.',
    tags: ['PromptFlow', 'DSPy', 'LangChain', 'Version Control'],
  },
]

export function ArchitectureTopics() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Deep Expertise
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            AI Engineering Domains
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
            >
              <h3 className="font-semibold mb-3 group-hover:text-ai-blue transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
