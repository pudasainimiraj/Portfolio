// All the text a visitor reads comes from this file.
// Facts come from Miraj's CV (October 2026). Lines marked TODO still need input.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Prefix a public/ asset path with the GitHub Pages base path.
export const asset = (path) => `${basePath}${path}`;

export const site = {
  name: 'Miraj Pudasaini',
  location: 'London',
  url: 'https://pudasainimiraj.github.io/Portfolio',
  title: 'Miraj Pudasaini | AI engineer in London',
  description:
    'AI engineer in London. RAG agents and hybrid search over financial time series, and the data pipelines that feed them. Projects with measured results, experience and CV.',
  email: 'pudasainimiraj@outlook.com',
  github: 'https://github.com/pudasainimiraj',
  linkedin: 'https://www.linkedin.com/in/miraj-pudasaini-77aa65153/',
  // The PDF lives at public/Miraj-Pudasaini-CV.pdf.
  cv: '/Miraj-Pudasaini-CV.pdf',
  availability: 'Open to AI engineer roles',
};

export const hero = {
  // Confirm this wording. Pattern: "AI engineer in London. I build [what] for [whom]."
  headline:
    'AI engineer in London. I build RAG agents and hybrid search over financial time series, and the data pipelines that feed them.',
  body:
    'At I Tech Care I run the Airflow and Databricks pipelines that load market data into Azure, and I have shipped vertical AI agents that answer questions over EODHD tickers and a BM25 and embedding search across millions of financial series. Before that I spent two years at Zola Analytics building its macro data platform and an agentic RAG that creates charts from it.',
};

// Three real figures from the CV, shown under the hero. Each links to where it is explained.
export const proof = [
  {
    value: '0.65',
    label: 'Hit@3 on ContextTrace’s frozen 25-question evaluation set',
    href: '#projects',
  },
  {
    value: '40%',
    label: 'data-team productivity gain from the infrastructure I deployed at I Tech Care',
    href: '#experience',
  },
  {
    value: '60%',
    label: 'higher ingestion frequency after replacing Excel pipelines at Zola Analytics',
    href: '#experience',
  },
];

export const cta = {
  line: 'Hiring an AI engineer who ships retrieval systems with evals, and the pipelines behind them?',
  button: 'Email me',
};

export const projects = [
  {
    title: 'ContextTrace',
    tagline: 'Semantic search over GitHub discussions',
    description:
      'A retrieval service that answers questions about a repository with passages linked to the source issue or pull request comment. An incremental, idempotent ETL on Cloudflare Queues with deterministic passage ids and content hashes feeds Workers AI embeddings into Supabase pgvector. The whole service runs on free tiers with budget ledgers, job leases and retries, and a 4 to 6x cut in transform CPU.',
    // Measured on 2026-10-15 against the live service; see docs/EVALUATION.md in the repo.
    metric: 'Hit@3 0.65 and thread Hit@5 0.95 on a frozen 25-question set; keyword baseline 0.05',
    tags: ['TypeScript', 'React', 'Cloudflare Workers', 'Workers AI', 'Supabase', 'pgvector'],
    code: 'https://github.com/pudasainimiraj/ContextTrace',
    demo: 'https://pudasainimiraj.github.io/ContextTrace/',
  },
  {
    title: 'OpenAQ Data Platform',
    tagline: 'ETL platform for live air-quality data',
    description:
      'Airflow DAGs pull measurements from the OpenAQ API into PostgreSQL through a repository and unit-of-work layer, with pytest coverage and a Docker Compose stack for the whole platform.',
    // TODO: one measured result, for example records loaded per run or pipeline run time.
    metric: '',
    tags: ['Python', 'Airflow', 'PostgreSQL', 'Docker', 'pytest'],
    code: 'https://github.com/pudasainimiraj/OpenAQDataPlatform',
    demo: '',
  },
  {
    title: 'Frameprov',
    tagline: 'Sentiment over live tweets',
    description:
      'Pulls tweets on a chosen topic through the Twitter API and scores how many of a 100-tweet sample speak positively about it, using NLTK.',
    // TODO: a measured result, or replace this project with newer LLM, RAG or agent work.
    metric: '',
    tags: ['Python', 'NLTK', 'Twitter API'],
    code: 'https://github.com/pudasainimiraj/frameprov',
    demo: '',
  },
];

export const experience = [
  {
    title: 'Forward Deployed Full-stack Engineer',
    company: 'I Tech Care',
    period: 'June 2025 – present',
    stack: ['Airflow', 'Python', 'SQL', 'Databricks', 'Spark', 'Azure'],
    bullets: [
      'Design and run Airflow pipelines with Databricks and Spark connectors that load prices and market tickers from major stock exchanges into Azure Data Lake Storage.',
      'Built vertical AI agents that run RAG over EODHD time-series tickers to automate financial market analysis.',
      'Led a hybrid BM25 and Titan-embedding search over millions of financial series, gated on nDCG@10 and P@12.',
      'Deployed data infrastructure for quality analysis and ingestion that raised the data team’s productivity by 40%.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Zola Analytics',
    period: 'Feb 2023 – May 2025',
    stack: ['Dagster', 'Python', 'Pandas', 'SQL', 'TimescaleDB', 'Neo4j', 'Snowflake', 'AWS'],
    bullets: [
      'Replaced Excel workflows with Dagster and Python pipelines, raising ingestion frequency by 60% and improving monitoring and alerting across the data process by 80%.',
      'Built API clients that migrated the OECD, IMF, BIS and FRED databases into a dimensional time-series model on the Zola data platform.',
      'Optimised the Python, SQLAlchemy, Neo4j and TimescaleDB platform, cutting transaction time by 70% and the monthly AWS storage bill.',
      'Worked with the ML and AI team to design and deploy an agentic LLM that runs RAG over macro time series to create charts automatically.',
    ],
  },
  {
    title: 'Full-stack Software Engineer',
    company: 'Green Codes',
    period: 'April 2019 – June 2020',
    stack: ['Java', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'AWS'],
    bullets: [
      'Modernised a legacy Java CRM to Node.js, React and Next.js, making the CRM and dev tools 12% faster.',
      'Moved the AWS CI/CD pipeline to serverless, cutting its operating cost by 20%.',
      'Tuned SQL queries so user retrieval used 20% less database resources.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Computer Science (Upper Second Class)',
    school: 'York St John University, London',
    period: '2021 – 2023',
  },
  {
    degree: 'BSc (Hons) Computer Science (First Class)',
    school: 'University of Wolverhampton at Herald College, Kathmandu',
    period: '2017 – 2020',
  },
];

export const skills = [
  {
    group: 'AI and ML',
    items: [
      'RAG agents',
      'Hybrid search',
      'BM25',
      'Embeddings',
      'Titan',
      'Workers AI',
      'pgvector',
      'Retrieval evals',
      'nDCG@10',
      'Hit@k',
      'MRR',
      'LLM APIs',
    ],
  },
  {
    group: 'Data',
    items: ['Python', 'SQL', 'Airflow', 'Dagster', 'Databricks', 'Spark', 'Azure', 'AWS', 'Snowflake', 'PostgreSQL', 'TimescaleDB', 'Neo4j'],
  },
  {
    group: 'Software',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Java', 'Spring Boot', 'Docker', 'Cloudflare Workers', 'Supabase', 'Serverless CI/CD'],
  },
];
