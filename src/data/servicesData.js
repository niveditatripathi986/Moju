import { Bot, Zap, FileText, Cpu, Layout, Smartphone, Search, PenTool, Database, Cloud, Palette, Target } from 'lucide-react';

export const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI Automation Consultant & AI',
    subtitle: 'Consulting for Small Business',
    cards: [
      {
        icon: Bot,
        title: 'AI Chatbots & Virtual Assistants',
        tag: 'Customer Support Automation',
        desc: 'Deploy intelligent conversational agents that handle customer queries, book appointments, and qualify leads 24/7 without human intervention.',
        features: ['Custom Knowledge Base Training', 'Seamless CRM Integration', 'Multi-channel Support (WhatsApp, Web)', 'Hand-off to Human Agents'],
        btnText: 'Explore AI Chatbots'
      },
      {
        icon: Zap,
        title: 'Workflow Automation',
        tag: 'Operational Efficiency',
        desc: 'Connect your fragmented software stack. We build Zapier/Make automations that eliminate manual data entry and speed up your internal processes.',
        features: ['Automated Invoice Generation', 'Lead Routing & Scoring', 'Inventory Sync Across Platforms', 'Error-free Data Transfer'],
        btnText: 'Automate Workflows'
      },
      {
        icon: FileText,
        title: 'Document Processing & Data Extraction',
        tag: 'OCR & AI Analysis',
        desc: 'Turn unstructured documents (PDFs, invoices, receipts) into structured, actionable data instantly using advanced computer vision and LLMs.',
        features: ['Automated Invoice Parsing', 'Contract Analysis', 'Data Entry Elimination', 'High Accuracy Output'],
        btnText: 'Streamline Documents'
      },
      {
        icon: Cpu,
        title: 'AI Integration & Custom Models',
        tag: 'Bespoke AI Solutions',
        desc: 'Integrate OpenAI, Anthropic, or open-source models directly into your existing SaaS products or internal tools to supercharge capabilities.',
        features: ['API Development', 'Prompt Engineering', 'RAG (Retrieval-Augmented Generation)', 'Secure Data Handling'],
        btnText: 'Build Custom AI'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    subtitle: 'Services for B2B & D2C',
    cards: [
      {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        tag: 'Organic Traffic Growth',
        desc: 'Dominate search results with technical SEO, high-quality content, and authoritative link building tailored for your specific niche.',
        features: ['Comprehensive Technical Audits', 'Keyword Strategy & Mapping', 'On-Page Optimization', 'High-DA Backlink Acquisition'],
        btnText: 'Boost Organic Traffic'
      },
      {
        icon: Target,
        title: 'Performance Marketing (PPC)',
        tag: 'High-ROI Ad Campaigns',
        desc: 'Data-driven Google, LinkedIn, and Meta ad campaigns designed to minimize CAC and maximize qualified lead generation.',
        features: ['A/B Tested Ad Copy', 'Granular Audience Targeting', 'Conversion Tracking Setup', 'Continuous Bid Optimization'],
        btnText: 'Scale With Ads'
      }
    ]
  },
  {
    id: 'technology',
    title: 'Mobile App Development &',
    subtitle: 'Custom Software Development',
    cards: [
      {
        icon: Smartphone,
        title: 'iOS & Android App Development',
        tag: 'Native & Cross-Platform',
        desc: 'Beautiful, performant mobile applications built with React Native or Flutter, delivering native-like experiences across all devices.',
        features: ['UI/UX App Design', 'Cross-Platform Codebase', 'App Store Optimization (ASO)', 'Push Notification Integration'],
        btnText: 'Build Your App'
      },
      {
        icon: Layout,
        title: 'Custom Web Applications',
        tag: 'Scalable SaaS Platforms',
        desc: 'Complex, scalable web apps built with modern frameworks (React, Next.js, Node.js) designed for high traffic and enterprise security.',
        features: ['Single Page Applications (SPA)', 'Secure Authentication', 'Real-time Data Sync', 'Responsive Dashboard Design'],
        btnText: 'Start Web Project'
      },
      {
        icon: Database,
        title: 'API & Backend Development',
        tag: 'Robust Infrastructure',
        desc: 'Secure, scalable REST and GraphQL APIs that power your frontend applications and seamlessly connect with third-party services.',
        features: ['Microservices Architecture', 'Database Design & Optimization', 'Third-party API Integrations', 'High-Availability Hosting'],
        btnText: 'Discuss Architecture'
      },
      {
        icon: Cloud,
        title: 'Cloud Computing Solutions',
        tag: 'AWS, Azure, GCP',
        desc: 'Migrate, optimize, and manage your infrastructure in the cloud for infinite scalability and reduced operational costs.',
        features: ['Serverless Deployments', 'CI/CD Pipeline Setup', 'Cloud Cost Optimization', 'Automated Backups'],
        btnText: 'Optimize Cloud'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & Brand Design Services for',
    subtitle: 'Startups & Enterprises',
    cards: [
      {
        icon: Palette,
        title: 'UI/UX Design',
        tag: 'Web & Mobile Interfaces',
        desc: 'We design intuitive, gorgeous interfaces that reduce friction, delight users, and drive high conversion rates across all platforms.',
        features: ['User Research & Personas', 'Wireframing & Prototyping', 'High-Fidelity Mockups', 'Usability Testing'],
        btnText: 'Design Your Product'
      },
      {
        icon: PenTool,
        title: 'Brand Identity & Strategy',
        tag: 'Visual Positioning',
        desc: 'Craft a memorable brand presence with a cohesive visual identity, typography, color palettes, and brand guidelines that resonate.',
        features: ['Logo & Mark Design', 'Comprehensive Brand Guidelines', 'Marketing Collateral', 'Tone of Voice Definition'],
        btnText: 'Build Your Brand'
      }
    ]
  }
];
