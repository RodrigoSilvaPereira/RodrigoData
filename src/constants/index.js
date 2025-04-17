import {
  analytics,
  cloud,
  bigdata,
  data,
  python,
  java,
  sql,
  aws,
  azure,
  gcp,
  kafka,
  spark,
  powerbi,
  airflow,
  talend,
  git,
  docker,
  compass,
  jumper,
  socio,
  construcao,
  analise,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Engenheiro de Dados",
    icon: data,
  },
  {
    title: "Analista de Dados",
    icon: analytics,
  },
  {
    title: "Soluções em Big Data",
    icon: bigdata,
  },
  {
    title: "Especialista Cloud Computing",
    icon: cloud,
  },
];


const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Google Cloud Plataform",
    icon: gcp,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Apache Spark",
    icon: spark,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  {
    name: "AirFlow",
    icon: airflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Talend",
    icon: talend,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Instrutor de Informática",
    company_name: "Jumper",
    icon: jumper,
    iconBg: "#383E56",
    date: "Jul 2022 - Mar 2024",
    points: [
      "Ministrando aulas teóricas e práticas de informática, incluindo montagem e manutenção de computadores, em uma escola de formação profissional.",
      "Planejamento e condução de aulas sobre informática básica, pacote Office, redes, hardware e manutenção.",
      "Avaliação de desempenho dos alunos e acompanhamento de sua evolução técnica ao longo do tempo.",
      "Formei dezenas de alunos com sólida base técnica e prática, prontos para o mercado de TI.",
    ],
  },
  {
    title: "Analista de Dados Freelance",
    company_name: "Sócio Consultorias",
    icon: socio,
    iconBg: "#383E56",
    date: "Fev 2024 - Dez 2024",
    points: [
      "Modelei e transformei dados brutos para criação de dashboards interativos no Power BI.",
      "Desenvolvi painéis dinâmicos que forneceram insights estratégicos e facilitaram a tomada de decisão.",
      "Implementei processos de limpeza e padronização de dados, garantindo a qualidade das visualizações.",
      "Automatizei a atualização de relatórios, otimizando a rotina de análise e reduzindo o esforço manual da equipe.",
    ],
  },
  {
    title: "Estágio em Cloud Data",
    company_name: "Compass UOL",
    icon: compass,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Ago 2024",
    points: [
      "Construí e otimizei pipelines de dados utilizando Python e serviços da AWS, como Glue, Lambda, Aurora e S3.",
      "Automatizei fluxos de dados e integrei múltiplas fontes, reduzindo significativamente o tempo de execução dos processos.",
      "Apoiei a implementação de arquiteturas escaláveis em nuvem, melhorando a eficiência e a confiabilidade dos dados.",
      "Contribuí para a criação de uma base de dados acessível e robusta, facilitando análises e decisões estratégicas.",
    ],
  },
  {
    title: "Engenheiro de Dados Trainee",
    company_name: "Compass UOL",
    icon: compass,
    iconBg: "#E6DEDD",
    date: "Dez 2024 - Mar 2025",
    points: [
      "Desenvolvi pipelines de dados utilizando SQL e processos ETL, garantindo eficiência na movimentação de dados.",
      "Transformei e manipulei dados com Talend, implementando soluções escaláveis para grandes volumes de informações.",
      "Integrei múltiplas fontes de dados em ambientes estruturados, facilitando o acesso e a análise das informações.",
      "Implementei fluxos de dados que otimizaram o tempo de carregamento e transformação, melhorando a performance do sistema.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pipeline AWS",
    description:
      "Criei uma pipeline completa na AWS com S3, Glue, Lambda e PySpark para processar dados de filmes, automatizar transformações e gerar arquivos otimizados para visualização.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Cloud",
        color: "green-text-gradient",
      },
      {
        name: "PySpark",
        color: "pink-text-gradient",
      },
    ],
    image: analise,
    source_code_link: "https://github.com/RodrigoSilvaPereira/Pipeline_AWS/tree/main",
  },
  {
    name: "SQL Specialist",
    description:
      "Description in 200 chars",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Modelagem",
        color: "pink-text-gradient",
      },
    ],
    image: construcao,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pipeline GCP",
    description:
      "desription in 200 chars",
    tags: [
      {
        name: "Google Cloud",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Other",
        color: "pink-text-gradient",
      },
    ],
    image: construcao,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
