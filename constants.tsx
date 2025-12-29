import { CurriculumItem, Testimonial, FaqItem } from './types';
import { Calculator, PieChart, Shapes, Ruler, Sigma, Banknote } from 'lucide-react';

export const CURRICULUM: CurriculumItem[] = [
  {
    id: '1',
    title: 'Conteúdos do 6° ano - Ensino fundamental',
    description: 'Figuras, áreas, volumes e propriedades visualizadas em 3D.',
    topics: ['Números', 'Grandezas e medidas', 'Álgebra', 'Geometria', 'Probabilidade e Estatística'],
    lessons: [
        "Ponto, Reta e Plano: Conceitos Primitivos",
        "Ângulos: Definição e Classificação",
        "Triângulos: Propriedades e Classificação",
        "Teorema de Pitágoras (com demonstração visual)",
        "Polígonos Regulares e suas Propriedades",
        "Áreas de Figuras Planas",
        "Prismas e Pirâmides: Elementos e Planificação",
        "Cilindros, Cones e Esferas: Volume e Área",
        "Geometria de Posição: Retas e Planos no Espaço"
    ],
    iconName: 'geometry'
  },
  {
    id: '2',
    title: 'Álgebra Fundamental',
    description: 'Do básico às equações complexas com passo-a-passo animado.',
    topics: ['Equações', 'Expressões', 'Fatoração', 'Polinômios'],
    lessons: [
        "Introdução à Linguagem Algébrica",
        "Equações do 1º Grau: Resolução Prática",
        "Sistemas de Equações do 1º Grau",
        "Potenciação e Radiciação",
        "Polinômios: Adição, Subtração e Multiplicação",
        "Produtos Notáveis (Quadrado da Soma/Diferença)",
        "Fatoração Algébrica: Casos Principais",
        "Frações Algébricas e Simplificação",
        "Equações do 2º Grau: Fórmula de Bhaskara"
    ],
    iconName: 'algebra'
  },
  {
    id: '3',
    title: 'Funções e Gráficos',
    description: 'Comportamento de funções explicado com gráficos dinâmicos.',
    topics: ['Afim', 'Quadrática', 'Exponencial', 'Logarítmica'],
    lessons: [
        "O Conceito de Função: Domínio e Imagem",
        "Função Afim (1º Grau): Taxa de Variação",
        "Construção de Gráficos de Função Afim",
        "Função Quadrática: Concavidade e Vértice",
        "Zeros da Função Quadrática",
        "Função Exponencial: Crescimento e Decaimento",
        "Introdução aos Logaritmos",
        "Função Logarítmica e seus Gráficos",
        "Inequações do 1º e 2º Grau"
    ],
    iconName: 'functions'
  },
  {
    id: '4',
    title: 'Trigonometria',
    description: 'O ciclo trigonométrico desmistificado com animações.',
    topics: ['Razões', 'Ciclo', 'Identidades', 'Leis Seno/Cosseno'],
    lessons: [
        "Razões Trigonométricas no Triângulo Retângulo",
        "Seno, Cosseno e Tangente: Ângulos Notáveis",
        "Lei dos Senos e Lei dos Cossenos",
        "Introdução ao Ciclo Trigonométrico",
        "Arcos e Ângulos (Graus e Radianos)",
        "Redução ao Primeiro Quadrante",
        "Funções Trigonométricas: Seno e Cosseno",
        "Relações Fundamentais e Identidades",
        "Equações Trigonométricas Simples"
    ],
    iconName: 'trigonometry'
  },
  {
    id: '5',
    title: 'Estatística e Probabilidade',
    description: 'Dados reais e visualização gráfica moderna.',
    topics: ['Média/Moda/Mediana', 'Gráficos', 'Análise Combinatória'],
    lessons: [
        "População, Amostra e Variáveis",
        "Tabelas de Frequência e Histogramas",
        "Leitura e Interpretação de Gráficos",
        "Medidas de Tendência Central (Média, Moda, Mediana)",
        "Medidas de Dispersão (Desvio Padrão e Variância)",
        "Princípio Fundamental da Contagem",
        "Arranjos, Combinações e Permutações",
        "Introdução à Probabilidade",
        "Probabilidade Condicional e Eventos Independentes"
    ],
    iconName: 'statistics'
  },
  {
    id: '6',
    title: 'Matemática Financeira',
    description: 'Juros e porcentagem aplicados ao dia a dia.',
    topics: ['Juros Simples', 'Juros Compostos', 'Amortização'],
    lessons: [
        "Razão, Proporção e Regra de Três",
        "Porcentagem: Aumentos e Descontos Sucessivos",
        "Juros Simples: Montante e Capital",
        "Juros Compostos: O Poder do Tempo",
        "Equivalência de Taxas",
        "Sistemas de Amortização (SAC e Price)",
        "Inflação e Poder de Compra",
        "Análise de Investimentos Básicos",
        "Planejamento Financeiro Pessoal"
    ],
    iconName: 'financial'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Prof. Roberto Mendes",
    role: "Rede Estadual - SP",
    content: "Eu levava cerca de 4 horas para montar uma aula de Geometria Espacial decente. Com o kit, eu ajusto em 15 minutos. Meus alunos finalmente entenderam a diferença entre área e volume.",
    rating: 5,
    image: "https://picsum.photos/seed/roberto/100/100"
  },
  {
    id: 2,
    name: "Juliana Castro",
    role: "Ensino Médio Particular",
    content: "O visual é impecável. Não tem cara de 'slide velho'. Os alunos prestam mais atenção porque as animações guiam o raciocínio. Valeu cada centavo.",
    rating: 5,
    image: "https://picsum.photos/seed/juliana/100/100"
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Professor Particular",
    content: "Uso nas minhas aulas particulares e o valor percebido pelos pais aumentou muito. Pareço muito mais profissional apresentando esse material.",
    rating: 5,
    image: "https://picsum.photos/seed/carlos/100/100"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso ter conhecimento avançado em PowerPoint?",
    answer: "Não! Os slides são feitos para serem intuitivos. Você só precisa clicar nas caixas de texto para mudar os exemplos ou nomes. As animações já estão prontas. Além disso, recebe um curso básico para aprender a usar."
  },
  {
    question: "Funciona no Google Slides ou Canva?",
    answer: "O foco principal é PowerPoint para garantir que as animações complexas funcionem perfeitamente."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Comprou, baixou, é seu para sempre. Você também recebe atualizações gratuitas por 1 ano na área de membros."
  },
  {
    question: "Serve para qual série?",
    answer: "O material cobre todo o currículo da BNCC do 6º ano do Fundamental ao 3º ano do Ensino Médio."
  }
];

export const ICONS_MAP = {
  geometry: Shapes,
  algebra: Calculator,
  functions: Sigma,
  trigonometry: Ruler,
  statistics: PieChart,
  financial: Banknote
};