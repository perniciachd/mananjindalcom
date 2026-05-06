'use client'

import { motion } from 'framer-motion'

const agents = [
  { label: 'Orchestrator', sub: 'Planner / Router', color: 'border-ai-blue/60 bg-ai-blue/5' },
  { label: 'Research Agent', sub: 'Web + RAG', color: 'border-green-500/40' },
  { label: 'Code Agent', sub: 'Code execution', color: 'border-yellow-500/40' },
  { label: 'Analysis Agent', sub: 'Data + Reasoning', color: 'border-purple-500/40' },
  { label: 'Output Agent', sub: 'Response synthesis', color: 'border-orange-500/40' },
]

const tools = ['Web Search', 'RAG System', 'Code Interpreter', 'Database', 'APIs', 'File System']

export function AgentDiagram() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Architecture Pattern
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
            Multi-Agent System Architecture
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            Enterprise multi-agent orchestration pattern for complex, long-horizon tasks.
            Features hierarchical agent control, tool use, and human-in-the-loop checkpoints.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Agent topology */}
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
              Agent Topology
            </p>
            <div className="relative flex flex-col items-center gap-2">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`w-full border ${agent.color} rounded-md p-4 flex items-center gap-4 ${agent.label === 'Orchestrator' ? 'bg-ai-blue/5' : 'bg-surface'}`}
                >
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-xs font-mono text-ai-blue flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{agent.label}</p>
                    <p className="text-xs text-muted-foreground">{agent.sub}</p>
                  </div>
                  {agent.label === 'Orchestrator' && (
                    <span className="ml-auto text-xs font-mono px-2 py-0.5 border border-ai-blue/30 text-ai-blue rounded">
                      Controller
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & capabilities */}
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
              Tool Integrations
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="p-4 border border-border rounded-md bg-surface text-xs font-medium text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ai-blue flex-shrink-0" />
                  {tool}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Key Design Patterns
              </p>
              {[
                'ReAct (Reason + Act) pattern for agent decision loops',
                'Hierarchical control with Orchestrator routing',
                'Human-in-the-loop checkpoints for critical decisions',
                'Shared memory & state management across agents',
                'Retry & fallback mechanisms for resilience',
              ].map((pattern) => (
                <div key={pattern} className="flex items-start gap-3 text-xs text-muted-foreground">
                  <span className="text-ai-blue mt-0.5 flex-shrink-0">→</span>
                  {pattern}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
