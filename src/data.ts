import { Service, Industry, CaseStudy, BlogPost, MediaItem } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "quant-analytics",
    title: "Quantitative Analytics",
    subtitle: "Mathematical Rigor in Decision Making",
    description: "We develop advanced proprietary algorithms, high-frequency mathematical formulations, and digital risk frameworks that decode market complexities.",
    details: [
      "Stochastic and deterministic modeling structures",
      "Dynamic capital allocation & financial risk stress-testing",
      "High-performance statistical arbitrage system design",
      "Alternative data stream extraction and mathematical validation"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    subtitle: "Enterprise Generative & Deep Learning Engines",
    description: "Integrating secure LLMs, deep learning nets, and cognitive agents to optimize corporate decision loops and synthesize operational workflows.",
    details: [
      "Secure custom Large Language Model (LLM) fine-tuning",
      "Computer vision & advanced sensor intelligence telemetry",
      "Autonomous agent architectures for enterprise workflows",
      "Reinforcement learning engines for complex system control"
    ],
    iconName: "Cpu"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "High-Throughput Integrity Pipelines",
    description: "We architect resilient cloud data reservoirs, real-time messaging buses, and ETL/ELT assets built that service trillions of data queries.",
    details: [
      "High-concurrency streaming pipelines (Kafka, Flink, Spark)",
      "Vast data warehousing layouts (Snowflake, BigQuery, Redshift)",
      "Zero-trust data security architectures & schema registries",
      "Hybrid-cloud storage layers and automated backplanes"
    ],
    iconName: "Database"
  },
  {
    id: "predictive-modeling",
    title: "Predictive Modeling",
    subtitle: "Forecasting the Unforseen",
    description: "Harnessing Bayesian inferential frameworks and state-space architectures to forecast behavioral changes, hardware fatigue, and market metrics.",
    details: [
      "Bayesian networks and structural time-series models",
      "Predictive machinery wellness & sensor decay indicators",
      "Dynamic consumer behavior drift and cohort mapping",
      "Scenario simulation engines with synthetic generation"
    ],
    iconName: "BarChart3"
  },
  {
    id: "software-dev",
    title: "Software Development",
    subtitle: "Low-Latency Enterprise Engineering",
    description: "Crafting bulletproof full-stack ecosystems, high-performance distributed systems, and real-time microservices in Go, Rust, and TypeScript.",
    details: [
      "Highly responsive real-time React web ecosystems",
      "High-throughput microservices engineered in Go / Rust",
      "Fault-tolerant API meshes with microsecond latency metrics",
      "Continuous Delivery pipelines with automated compliance"
    ],
    iconName: "Code"
  },
  {
    id: "bi-reporting",
    title: "Business Intelligence & Reporting",
    subtitle: "Decision Guidance Dashboards",
    description: "Converting multidimensional data points into real-time decision consoles, high-resolution graphics, and programmatic reports.",
    details: [
      "Pristine executive cockpits styled with Tailwind/D3",
      "Programmatic, automated PDF/Excel briefing systems",
      "Interactive multi-dimensional cohort slicing",
      "Proactive anomaly alerting with SMS / Slack webhooks"
    ],
    iconName: "PieChart"
  },
  {
    id: "process-automation",
    title: "Process Automation",
    subtitle: "Frictionless Workflow Loops",
    description: "Eradicating operational bottlenecks through custom robotic orchestrations, API aggregators, and human-in-the-loop automations.",
    details: [
      "Self-healing robotic process automation sheets",
      "Multi-system synchronization layers with webhooks",
      "LLM-backed document scanning and sentiment routing",
      "Legacy terminal interaction overlays and API bridges"
    ],
    iconName: "Workflow"
  },
  {
    id: "custom-consulting",
    title: "Custom Consulting Services",
    subtitle: "Strategic Technology Advisory",
    description: "Collaborating with executive sponsors to map digital roadmaps, design reference architectures, and execute secure migrations.",
    details: [
      "Technology portfolio audits & redundancy reviews",
      "Comprehensive cloud strategy and cost optimization audits",
      "AI feasibility blueprints and safety guardrail frameworks",
      "Executive advisory & technology succession coaching"
    ],
    iconName: "Users"
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "finance",
    name: "Finance",
    description: "High-velocity algorithmic systems, portfolio optimization algorithms, and dynamic hazard calculations built for modern funds.",
    useCase: "Algorithmic execution matching, hedging analytics, risk scoring",
    iconName: "DollarSign"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Machine learning diagnosis pipelines, historical clinical data modeling, and automated logistics scheduling assets.",
    useCase: "Diagnostic accuracy models, clinical workflow scheduling anomalies",
    iconName: "HeartPulse"
  },
  {
    id: "technology",
    name: "Technology",
    description: "Scalable cloud-native backbones, multi-tenant API systems, and autonomous integration pipelines for hyper-growth platforms.",
    useCase: "Distributed caching optimization, autoscaling prediction models",
    iconName: "Laptop"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Predictive asset maintenance alerts, real-time materials supply-chain models, and automated computerized quality inspection.",
    useCase: "Thermal wear model warnings, robotic assembly synchronization",
    iconName: "Factory"
  },
  {
    id: "government",
    name: "Government",
    description: "Pristine public directories, secure state data engineering, and automation engines compliant with strict compliance guidelines.",
    useCase: "Demographic trend predictive grids, high-integrity records layers",
    iconName: "ShieldAlert"
  },
  {
    id: "smb",
    name: "Small & Medium Businesses",
    description: "Off-the-shelf automation workflows, light dashboards, and digital enablement consulting to level the playing field.",
    useCase: "Customer review routing sheets, cloud commerce database design",
    iconName: "Store"
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "case-alpha",
    title: "High-Frequency Risk Matrix Automation",
    client: "Securities Horizon LLC",
    industry: "Institutional Capital Markets",
    metrics: [
      { label: "Calculation Latency", value: "<15ms" },
      { label: "Throughput Capacity", value: "3.2M req/sec" },
      { label: "Risk Mitigated", value: "$420M USD" }
    ],
    challenge: "The client suffered from highly variable calculations latencies on volatile portfolio stress-testing routines, producing visual data decay during high-volume trading hours.",
    solution: "Blanc Quant Systems deployed an in-memory streaming computation layer engineered in C++ and Go, utilizing custom SIMD vectorization to compute multi-variable Monte Carlo scenarios in real-time.",
    results: [
      "Eliminated 98% of latency spikes",
      "Integrated 12 distinct alternative real-time news streams",
      "Delivered real-time alerting systems triggering in <15 milliseconds of cross-exposure warnings"
    ]
  },
  {
    id: "case-beta",
    title: "AI-Powered Patient Diagnostics Routing",
    client: "Tri-State Health Consortium",
    industry: "Healthcare Networks",
    metrics: [
      { label: "Diagnostics Lag", value: "-74%" },
      { label: "Triaging Accuracy", value: "99.4%" },
      { label: "Staff Hours Saved", value: "14,500/year" }
    ],
    challenge: "Overloaded administrative staff spent critical minutes reviewing, tagging, and triage-forwarding specialist requests, leading to severe downstream check-in wait bottlenecks.",
    solution: "We built a secure, HIPAA-compliant patient record evaluation hub using local, fine-tuned LLaMA-based classification layers, integrated with scanned document optical character matching rules.",
    results: [
      "Reduced specialist assignment time from average 2.1 hours to 8.4 seconds",
      "Increased emergency cases detection accuracy to over 99.4%",
      "Secured internal records transfer with role-based private cryptographic nodes"
    ]
  },
  {
    id: "case-gamma",
    title: "Telemetry-Driven Factory Predictive Repair",
    client: "Apex Titan Forge",
    industry: "Heavy Industrial Manufacturing",
    metrics: [
      { label: "Equipment Downtime", value: "-42%" },
      { label: "Assembly Throughput", value: "+18%" },
      { label: "Annual Savings", value: "$1.8M USD" }
    ],
    challenge: "Unscheduled vibration shutdowns of automated casting structures caused massive localized delays and expensive rapid replacement parts shipping charges.",
    solution: "Blanc Quant Systems deployed localized IoT sensors transmitting vibrations and thermal spikes directly into a Bayesian anomaly model, projecting individual machinery decay curves.",
    results: [
      "Averted 16 catastrophic structural shutoffs in the first six months",
      "Scheduled pre-emptive, quick-fix maintenance windows based on wear calculations",
      "Maximized factory assembly speeds securely, raising daily output metrics by 18%"
    ]
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "Decentralized AI Agents: The Next Paradigm of Business Process Automation",
    excerpt: "How local, secure, containerized AI models are surpassing bloated corporate SaaS APIs in execution latency, security cost, and data sovereignty.",
    content: "Enterprise software is undergoing a silent revolution. While public hype remains centered on massive public chatbots, sophisticated firms are quietly moving their data back in-house. By hosting lightweight, fine-tuned, specialized models within private containerized networks, organizations achieve sub-second execution speeds, bypass hefty pay-per-token models from third-party networks, and enforce bulletproof privacy controls. We look closely at modern workflow configurations.",
    category: "AI & Optimization",
    date: "June 2, 2026",
    readTime: "6 min read"
  },
  {
    id: "blog-2",
    title: "Architecting Ultra-Low Latency Pipelines for Industrial Telemetry Logs",
    excerpt: "A deep dive into kernel-level tuning, memory lock mechanics, and lock-free rings for ingesting millions of telemetry streams without dropping standard frames.",
    content: "When handling modern factory floor arrays or algorithmic trade logs, standard database setups choke under the sheer velocity of data transactions. True high-velocity ingestion requires abandoning traditional locking operations. In this deep dive, we review the performance of lock-free ring configurations and memory mapped directories, delivering sustainable data pipelines that absorb heavy telemetry bursts with ease.",
    category: "Data Engineering",
    date: "May 25, 2026",
    readTime: "10 min read"
  },
  {
    id: "blog-3",
    title: "Why Modern Quant Modeling Demands Bayesian Inferential Frameworks",
    excerpt: "Traditional statistical predictive analytics are failing in volatile markets. Deep, structural Bayesian models provide safe probability boundaries.",
    content: "Traditional predictive algorithms operate on a flaw: they output deterministic estimates of futures while hiding the associated error distributions. In high-exposure scenarios, missing the uncertainty range is catastrophic. Bayesian analytics reformulate forecasts into complete, transparent probability tables. This article walks through the setup of hierarchical priors to protect critical capital portfolios.",
    category: "Quantitative Analytics",
    date: "May 18, 2026",
    readTime: "8 min read"
  }
];

export const MEDIA_DATA: MediaItem[] = [
  {
    id: "media-1",
    type: "image",
    title: "Quantitative Analytics Array Dashboard",
    category: "Systems",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "media-2",
    type: "image",
    title: "AI Neural Network Compute Nodes",
    category: "Artificial Intelligence",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "media-3",
    type: "image",
    title: "Real-Time Streaming Telemetry Monitor",
    category: "Data Pipelines",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "media-4",
    type: "image",
    title: "Distributed Low-Latency Server Stack",
    category: "Software Engineering",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "media-5",
    type: "image",
    title: "Strategic Executive Consulting Boardroom",
    category: "Advisory",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "media-6",
    type: "image",
    title: "Automated Micro-Vibration IoT Rig",
    category: "Automation",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  }
];
