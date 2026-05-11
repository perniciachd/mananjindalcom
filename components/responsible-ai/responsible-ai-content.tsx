'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { ArrowRight, Check, MessageCircle, Calendar, Shield, AlertTriangle, Users, BookOpen, Target, Zap, Clock, Globe, Building2, GraduationCap } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const problemCards = [
  {
    icon: AlertTriangle,
    title: 'Hidden Risk',
    description: 'Employees are pasting confidential data into free AI tools every day. Most don\'t realise they\'re creating compliance, legal, and reputational risk.',
  },
  {
    icon: Zap,
    title: 'Lost Productivity',
    description: 'Teams that don\'t know how to use AI properly are either avoiding it entirely — or using it poorly. Both cost the organization.',
  },
  {
    icon: Shield,
    title: 'No Framework',
    description: 'Most organizations don\'t yet have a clear AI usage policy. Without one, "Responsible AI" stays a slogan instead of a practice.',
  },
]

const audienceCards = [
  {
    icon: Building2,
    title: 'For Corporates & Enterprises',
    description: 'Managers, HR teams, finance leaders, operations heads, customer service teams, and admin staff who are using or planning to use AI tools in daily work.',
  },
  {
    icon: Globe,
    title: 'For Government & Public Sector',
    description: 'Secretaries, joint secretaries, directors, PSU leadership, and civil servants working on citizen-facing services, internal operations, or AI procurement decisions.',
  },
  {
    icon: GraduationCap,
    title: 'For Universities & Colleges',
    description: 'Vice Chancellors, Deans, Registrars, faculty, and administrative leaders preparing their institutions for the responsible integration of AI into academics, research, and operations.',
  },
]

const outcomes = [
  'Use AI to automate emails, reports, documentation, and data analysis',
  'Make better decisions using AI-driven insights, forecasts, and risk identification',
  'Identify what data must never be shared with AI tools',
  'Apply data minimization principles in every AI interaction',
  'Use AI ethically and in line with company policy, compliance, and law',
  'Prevent data leaks, privacy violations, and compliance breaches',
]

const day1Modules = [
  { title: 'AI in the Modern Workplace', items: ['What is Artificial Intelligence', 'What Generative AI (ChatGPT, Copilot, etc.) can and cannot do', 'Myths vs reality', 'How companies globally are using AI for productivity'] },
  { title: 'Using AI to Automate Routine Tasks', items: ['Writing and replying to emails', 'Creating reports and summaries', 'Meeting minutes and captioning', 'Excel data explanations', 'Drafting policies and SOPs', 'Translating and rewriting documents'] },
  { title: 'AI for Better Decision-Making', items: ['Turning raw data into insights', 'Analyzing trends and comparing options', 'Risk identification and forecasting', 'Use cases: sales forecasting, budget analysis, HR attrition, project delays'] },
  { title: 'From Busy Work to High-Value Work', items: ['Freeing up time for strategy, creativity, customer service, and problem-solving', 'Reducing time spent on repetitive typing, manual reporting, and searching for information'] },
]

const day2Modules = [
  { title: 'Data Security Risks in AI', items: ['What goes wrong: uploading confidential files, sharing customer data, copy-pasting internal emails, using unsecured free tools', 'Real-world examples of data leaks, legal fines, and reputational damage'] },
  { title: 'Data Minimization Principles', items: ['The principle: only give AI what it needs, nothing extra, nothing sensitive', 'Classifying data: Public, Internal, Confidential, Restricted'] },
  { title: 'Confidentiality & Controlled Access', items: ['Who should use AI and which tools are allowed', 'Company policies for AI and role-based access', 'Protecting HR data, financial data, customer data, and intellectual property'] },
  { title: 'Responsible & Ethical AI', items: ['Core principles: Fairness, Transparency, Accountability, Privacy, Human Oversight', 'Bias in AI, wrong decisions, and why humans must stay in control'] },
  { title: 'Corporate AI Usage Policy', items: ['How to create AI usage guidelines, data protection rules, and employee responsibilities', 'Participants receive a sample AI policy template'] },
]

const day3Modules = [
  { title: 'Role-Based AI Use', items: ['How AI should be used by HR, Finance, Sales, Operations, Customer Service, and Management', 'What data each role is allowed to share with AI — and what is strictly forbidden', 'Example: HR can draft job descriptions, but must NOT upload employee files, ID numbers, or salary data'] },
  { title: 'Safe Prompting & Secure AI Interaction', items: ['How to talk to AI without exposing confidential data', 'Rewriting prompts to remove names, numbers, IDs, and sensitive information', 'Using placeholders and keeping prompts compliant'] },
  { title: 'AI Mistakes, Bias & Business Risk', items: ['Wrong answers, biased recommendations, hallucinated data, legal risks', 'When NOT to trust AI, how to verify output, how to apply human oversight'] },
  { title: 'Using AI for Data Analysis Without Data Leakage', items: ['Using AI for trend analysis, sales reports, HR metrics, and financial summaries — without uploading real confidential files', 'Data masking, sample data, and data minimization techniques'] },
  { title: 'AI & Corporate Compliance', items: ['How AI fits into ISO standards, internal audit, data protection laws, and cybersecurity policies', 'Who is responsible when AI makes a mistake, and how to document AI usage'] },
  { title: 'Final Workshop — Safe AI in Your Organization', items: ['Participants identify their daily tasks, decide where AI can help, decide what data is allowed, and build a Safe AI Action Plan for their department.'] },
]

const methodologySteps = [
  { number: '01', title: 'Engage', description: 'Participants set a real outcome they want from AI — drafting a policy, analyzing data, writing a report.' },
  { number: '02', title: 'Experience', description: 'They interact with AI live, attempting to reach that outcome using their own work scenarios.' },
  { number: '03', title: 'Examine', description: 'The group surfaces what went well, what went wrong, and where responsibility gaps appeared.' },
  { number: '04', title: 'Embed', description: 'We build the responsibility framework backwards from those moments — turning insight into policy, habit, and capability.' },
]

const deliveryFormats = [
  {
    title: 'On-Site, In-Person',
    description: 'Delivered at your office, training centre, or campus. Best for cohorts of 15–50 participants who benefit from hands-on, face-to-face interaction.',
  },
  {
    title: 'Virtual, Instructor-Led',
    description: 'Delivered live over video conferencing. Best for distributed teams, multi-location government departments, and pan-India or international cohorts.',
  },
  {
    title: 'Hybrid & Custom',
    description: 'Multi-batch rollouts, train-the-trainer programs, leadership masterclasses, and tailored curriculum design for specific roles, regulations, or sectors.',
  },
]

const faqs = [
  {
    question: 'Do participants need a technical background?',
    answer: 'No. The program is built for non-technical decision-makers, managers, and end-users. We use AI tools in plain language throughout.',
  },
  {
    question: 'How many participants per batch?',
    answer: 'The program works best with 15–50 participants per batch. For larger organizations, we run multiple cohorts.',
  },
  {
    question: 'Can the curriculum be customized to our sector?',
    answer: 'Yes. We tailor case studies, examples, and policy templates to your industry — banking, government, healthcare, education, manufacturing, and others.',
  },
  {
    question: 'Do you provide certification?',
    answer: 'Yes. Each participant receives a certificate of completion from the program.',
  },
  {
    question: 'What AI tools are used during training?',
    answer: 'Primarily ChatGPT and Microsoft Copilot, with brief exposure to Claude and other enterprise-grade tools. We can also incorporate tools your organization has already licensed.',
  },
  {
    question: 'How do we get started?',
    answer: 'Book a discovery call or send a WhatsApp message. We\'ll discuss your goals, audience, and timelines, and share a tailored proposal within 3–5 working days.',
  },
]

export function ResponsibleAIContent() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[600px] rounded-full bg-ai-blue/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-ai-blue text-sm font-mono tracking-widest uppercase">
              Corporate, Government & Academic Training Program
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.08] mb-6"
          >
            Responsible AI for
            <br />
            <span className="gradient-text">Modern Organizations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6"
          >
            A 3-day hands-on training program that helps your teams use AI to work smarter — while protecting data, ensuring compliance, and keeping human judgment at the centre of every decision.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base italic text-ai-blue mb-8"
          >
            Limited cohorts per quarter. Q1 2026 slots are filling now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="https://cal.com/mananjindal/responsible-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
              onClick={() => {
                trackEvent('request_proposal_click', {
                  page: 'responsible_ai_training',
                  location: 'hero',
                })
              }}
            >
              Request a Proposal
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/919501565955?text=Hi%20Manan%2C%20I%27m%20interested%20in%20your%20Responsible%20AI%20training%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors group"
              onClick={() => {
                trackEvent('whatsapp_enquiry_click', {
                  page: 'responsible_ai_training',
                  location: 'hero',
                })
              }}
            >
              <MessageCircle size={16} className="text-green-400" />
              WhatsApp Enquiry
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            Trusted by Corporates, Government Ecosystems, and Academic Institutions across India, Singapore, US & UAE
          </motion.p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              AI Is Already Inside Your Organization. The Question Is Whether It's Being Used Responsibly.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
              >
                <card.icon className="w-8 h-8 text-ai-blue mb-4" />
                <h3 className="font-semibold mb-3 group-hover:text-ai-blue transition-colors">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section id="audiences" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Designed for Three Distinct Audiences
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {audienceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
              >
                <card.icon className="w-8 h-8 text-ai-blue mb-4" />
                <h3 className="font-semibold mb-3 group-hover:text-ai-blue transition-colors">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-sm text-muted-foreground text-center"
          >
            No technical background required. The program is designed for decision-makers and end-users, not engineers.
          </motion.p>
        </div>
      </section>

      {/* WHAT I'VE BEEN SEEING SECTION */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4 leading-tight">
              What I've Been Seeing
            </h2>
            <p className="text-base italic text-muted-foreground">
              Patterns I've personally observed while architecting AI systems for enterprises, government departments, and academic institutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl mb-8"
          >
            <p className="text-lg text-foreground leading-relaxed">
              A few months ago, I started noticing the same thing happening across very different organizations. The behaviour was always well-intentioned. The risk was always serious.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mb-8 space-y-4"
          >
            {[
              'A finance manager pasting a confidential P&L into ChatGPT to "improve the summary"',
              'An HR executive uploading employee names and salaries to generate a "compensation analysis"',
              'A customer-service team copy-pasting AI replies directly to clients — without reading them',
              'A government officer drafting an internal note containing citizen data in a free AI tool',
              'A faculty member uploading student assignments to ChatGPT to ask for "grading suggestions"',
            ].map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3 pl-4"
              >
                <ArrowRight className="w-5 h-5 text-ai-blue shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{scenario}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-3xl mb-8"
          >
            <p className="text-lg italic text-ai-blue leading-relaxed">
              None of these people were being careless. They were trying to be productive. But every single one of these moments is a data leak waiting to happen, a compliance breach in slow motion, or a reputational risk one screenshot away from a headline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              The gap isn't intent. It's training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEARNING OUTCOMES SECTION */}
      <section id="what-youll-walk-away-with" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              What Your Team Will Walk Away With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors"
              >
                <Check className="w-5 h-5 text-ai-blue shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-DAY CURRICULUM SECTION */}
      <section id="curriculum" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              A Structured 3-Day Program
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built around a Theory of Change approach — participants don't just hear about Responsible AI, they interact with AI live, surface real risks, and walk out with a framework they can apply on Day One.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* DAY 1 */}
            <AccordionItem className="border border-border rounded-lg bg-surface" value="day1">
              <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ai-blue/10 text-ai-blue font-semibold">
                    1
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Day 1 — AI for Productivity & Smart Work</h3>
                    <p className="text-sm text-muted-foreground">The first day is about unlocking what AI can do.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {day1Modules.map((module, i) => (
                    <div key={i} className="border-l-2 border-border pl-4">
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <ul className="space-y-1">
                        {module.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* DAY 2 */}
            <AccordionItem className="border border-border rounded-lg bg-surface" value="day2">
              <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ai-blue/10 text-ai-blue font-semibold">
                    2
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Day 2 — Data Protection, Confidentiality & Responsible AI</h3>
                    <p className="text-sm text-muted-foreground">The second day is about what can go wrong — and how to prevent it.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {day2Modules.map((module, i) => (
                    <div key={i} className="border-l-2 border-border pl-4">
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <ul className="space-y-1">
                        {module.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* DAY 3 */}
            <AccordionItem className="border border-border rounded-lg bg-surface" value="day3">
              <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ai-blue/10 text-ai-blue font-semibold">
                    3
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Day 3 — Applying Responsible AI in Real Business Scenarios</h3>
                    <p className="text-sm text-muted-foreground">The third day is where it becomes real. Participants build their own action plan.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {day3Modules.map((module, i) => (
                    <div key={i} className="border-l-2 border-border pl-4">
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <ul className="space-y-1">
                        {module.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="methodology" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Learning by Doing, Not by Listening
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This program uses a Theory of Change approach. Instead of lectures on principles, participants interact directly with AI tools throughout the program — discovering risks, testing limits, and building their own frameworks in real time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {methodologySteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors"
              >
                <div className="text-3xl font-bold text-ai-blue mb-3">{step.number}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR SECTION */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Taught by Someone Who Actually Builds AI Systems — Not Just Someone Who Writes About Them
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most Responsible AI trainers come from a policy or legal background. I come from 15+ years of enterprise engineering and AI architecture — I've designed production AI systems for fintech, government, and global MNCs. That means when I teach Responsible AI, I'm not speaking in abstractions. I'm telling your team exactly how these systems behave, where they fail, and how to put guardrails in place that actually work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-border"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '3000+', label: 'Professionals Trained' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '100+', label: 'AI Systems Architected' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DELIVERY FORMATS SECTION */}
      <section id="formats" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Flexible Delivery for Every Organization
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
              >
                <h3 className="font-semibold mb-3 group-hover:text-ai-blue transition-colors">{format.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="scroll-mt-20 py-24 lg:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} className="border border-border rounded-lg bg-surface" value={`faq-${i}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full bg-ai-blue/8 blur-3xl" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Ready to Bring
              <br />
              <span className="gradient-text">Responsible AI</span> to Your Organization?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Whether you're rolling out AI tools company-wide, preparing your faculty for an AI-enabled future, or building governance frameworks for public-sector adoption — this program gives your people the practical, ethical, and strategic foundation they need.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base italic text-ai-blue mb-8"
            >
              Limited cohorts per quarter. Q1 2026 slots are filling now.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://cal.com/mananjindal/responsible-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
                onClick={() => {
                  trackEvent('request_proposal_click', {
                    page: 'responsible_ai_training',
                    location: 'final_cta',
                  })
                }}
              >
                <Calendar size={16} />
                Request a Proposal
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://wa.me/919501565955?text=Hi%20Manan%2C%20I%27m%20interested%20in%20your%20Responsible%20AI%20training%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors group"
                onClick={() => {
                  trackEvent('whatsapp_enquiry_click', {
                    page: 'responsible_ai_training',
                    location: 'final_cta',
                  })
                }}
              >
                <MessageCircle size={16} className="text-green-400" />
                WhatsApp Enquiry
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Typically responds within 24 hours · Free initial consultation · Available globally
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
