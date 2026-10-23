// All the text a visitor reads comes from this file.
// Lines marked TODO need Miraj's input before `npm run deploy`.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Prefix a public/ asset path with the GitHub Pages base path.
export const asset = (path) => `${basePath}${path}`;

export const site = {
  name: 'Miraj Pudasaini',
  location: 'London',
  url: 'https://pudasainimiraj.github.io/Portfolio',
  title: 'Miraj Pudasaini – AI engineer in London',
  description:
    'AI engineer in London building retrieval systems and production data pipelines. Projects with measured results, experience and CV.',
  email: 'pudasainimetal@gmail.com',
  github: 'https://github.com/pudasainimiraj',
  linkedin: 'https://www.linkedin.com/in/miraj-pudasaini-77aa65153/',
  // TODO: add the PDF at public/Miraj-Pudasaini-CV.pdf. The header and hero link to it.
  cv: '/Miraj-Pudasaini-CV.pdf',
  availability: 'Open to AI engineer roles',
};

export const hero = {
  // TODO: confirm the positioning line. Pattern: "AI engineer in London. I build [what] for [whom]."
  headline:
    'AI engineer in London. I build retrieval systems and production data pipelines for teams that need answers from their own data.',
  // TODO: replace [number] with a real figure from work.
  body:
    'At Zola Analytics I build and run the ingestion pipelines that feed [number] datasets into the product, and I keep them running. Next I want an AI engineer role where retrieval, evaluation and reliable data pipelines matter.',
};

export const projects = [
  {
    title: 'ContextTrace',
    tagline: 'Search the discussions behind a codebase',
    description:
      'Indexes the issues, pull requests and comments of a public GitHub repository, chunks them with the embedding model’s own tokenizer, embeds them with Workers AI and answers questions with a hybrid semantic-and-keyword search over pgvector. Every result carries a permalink to the comment it came from.',
    // Measured on 2026-10-15 against the live service; see docs/EVALUATION.md in the repo.
    metric: 'Hit@3 0.65 and MRR@5 0.55 on a frozen 25-question set',
    tags: ['TypeScript', 'Cloudflare Workers', 'Supabase', 'pgvector', 'Workers AI', 'React'],
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
    // TODO: confirm the title.
    title: 'Data Engineer',
    company: 'Zola Analytics',
    period: '2023 – present',
    stack: ['Python', 'Dagster', 'PostgreSQL', 'TimescaleDB', 'Databricks', 'Azure'],
    // TODO: replace each [ ] with a real outcome and number.
    bullets: [
      'Build and run the Dagster ingestion pipelines that load [number] datasets and [number] series into TimescaleDB.',
      'Cut [a pipeline step] from [before] to [after] by [what changed].',
      'Added data-quality checks that catch [number] issues a month before they reach the product.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    // TODO: company name and dates.
    company: '[Company]',
    period: '2019 – 2020',
    stack: [],
    bullets: ['[One or two bullets with an outcome and a number.]'],
  },
];

export const education = [
  // TODO: subject and university.
  { degree: 'MSc [Subject]', school: '[University]', period: '2021 – 2022' },
  { degree: 'BSc [Subject]', school: '[University]', period: '[Start] – 2020' },
];

export const skills = [
  {
    group: 'AI and ML',
    // TODO: keep only what you can defend in an interview.
    items: [
      'RAG and hybrid search',
      'Embeddings and pgvector',
      'Retrieval evaluation (Recall@k, MRR)',
      'LLM APIs',
    ],
  },
  {
    group: 'Data',
    items: ['Python', 'SQL', 'Dagster', 'Airflow', 'PostgreSQL', 'TimescaleDB', 'Databricks', 'Azure', 'Pandas'],
  },
  {
    group: 'Software',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Docker', 'Cloudflare Workers', 'Supabase', 'pytest'],
  },
];
