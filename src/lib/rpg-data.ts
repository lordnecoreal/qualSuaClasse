import {
  Sword,
  TreePine,
  Shield,
  Wand2,
  Eye,
  Sun,
  Leaf,
  Target,
  Skull,
  Music,
  Sparkles,
  PawPrint,
  Horse,
  Flame,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface RpgClass {
  id: string;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  icon: LucideIcon;
  color: string;
}

export interface Answer {
  label: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const RPG_CLASSES: RpgClass[] = [
  {
    id: "barbaro",
    name: "Bárbaro",
    tagline: "A fúria dos antigos desperta em você",
    description:
      "Você é impulsionado pela paixão primal e pela força bruta. Em batalha, prefere resolver as coisas com um grito de guerra e um golpe devastador. A sociedade pode parecer frágil demais para sua energia incontida.",
    strengths: ["Força bruta", "Resistência extrema", "Intimidação"],
    icon: Sword,
    color: "oklch(0.55 0.18 25)",
  },
  {
    id: "elfo",
    name: "Elfo",
    tagline: "A graça da floresta corre em suas veias",
    description:
      "Elegante, ágil e profundamente ligado à natureza, você enxerga beleza onde outros veem apenas caos. Sua mente é afiada como suas flechas, e o tempo parece fluir mais devagar aos seus olhos.",
    strengths: ["Agilidade", "Percepção aguçada", "Magia natural"],
    icon: TreePine,
    color: "oklch(0.65 0.14 145)",
  },
  {
    id: "anao",
    name: "Anão",
    tagline: "Como as montanhas, você é inabalável",
    description:
      "Resistente, leal e honrado, você valoriza tradição, artesanato e amizades forjadas no fogo. Não há obstáculo que não possa ser superado com persistência — e talvez um bom machado.",
    strengths: ["Resistência", "Forja e artesanato", "Lealdade"],
    icon: Shield,
    color: "oklch(0.55 0.08 220)",
  },
  {
    id: "mago",
    name: "Mago",
    tagline: "O conhecimento é sua verdadeira arma",
    description:
      "Você busca compreender os mistérios do universo. Horas de estudo e concentração são um pequeno preço para dominar o arcano. A inteligência é sua maior fonte de poder.",
    strengths: ["Magia arcana", "Inteligência", "Controle de campo"],
    icon: Wand2,
    color: "oklch(0.55 0.18 290)",
  },
  {
    id: "ladino",
    name: "Ladino",
    tagline: "As sombras são seus aliadas mais confiáveis",
    description:
      "Astuto, rápido e sempre três passos à frente, você prefere a inteligência à força bruta. Cada problema tem uma saída oculta — e você já a encontrou antes de todos perceberem.",
    strengths: ["Furtividade", "Destreza manual", "Perspicácia"],
    icon: Eye,
    color: "oklch(0.45 0.05 280)",
  },
  {
    id: "paladino",
    name: "Paladino",
    tagline: "A luz guia sua espada e seu coração",
    description:
      "Você vive por um código de honra e proteção. Injustiça não passa despercebida, e seus aliados sabem que podem confiar em você até o fim. Sua presença ilumina até os lugares mais sombrios.",
    strengths: ["Cura sagrada", "Proteção", "Liderança"],
    icon: Sun,
    color: "oklch(0.75 0.14 85)",
  },
  {
    id: "druida",
    name: "Druida",
    tagline: "Você é a voz da natureza selvagem",
    description:
      "Os animais, as plantas e os elementos sussurram segredos aos seus ouvidos. Você prefere o equilíbrio natural às construções da civilização e protege a vida em todas as suas formas.",
    strengths: ["Transformação animal", "Cura natural", "Controle elemental"],
    icon: Leaf,
    color: "oklch(0.6 0.12 145)",
  },
  {
    id: "arqueiro",
    name: "Arqueiro",
    tagline: "Precisão, paciência e um olho infalível",
    description:
      "Você age com calma, observa antes de atirar e raramente erra o alvo. A floresta é seu lar e a distância, sua vantagem. Cada movimento é calculado, cada flecha, uma decisão.",
    strengths: ["Precisão", "Rastreamento", "Agilidade"],
    icon: Target,
    color: "oklch(0.65 0.1 145)",
  },
  {
    id: "necromante",
    name: "Necromante",
    tagline: "A morte é apenas mais um mistério a desvendar",
    description:
      "Você não teme o que outros evitam. O conhecimento proibido o atrai, e você vê beleza até no ciclo final da vida. Seu poder vem da compreensão, não da crueldade.",
    strengths: ["Magia negra", "Invocação", "Conhecimento arcano"],
    icon: Skull,
    color: "oklch(0.45 0.1 280)",
  },
  {
    id: "bardo",
    name: "Bardo",
    tagline: "Suas palavras e notas moldam o destino",
    description:
      "Você move corações e mentes com histórias, canções e um charme inegável. A vida é uma aventura épica e você é o narrador — às vezes, também o herói.",
    strengths: ["Carisma", "Inspiração", "Persuasão"],
    icon: Music,
    color: "oklch(0.65 0.14 330)",
  },
  {
    id: "monge",
    name: "Monge",
    tagline: "Corpo e mente são sua arma mais letal",
    description:
      "Disciplina, foco e equilíbrio interior guiam cada passo seu. Você não precisa de armadura pesada para ser imbatível — sua força vem da prática, da paciência e da fé.",
    strengths: ["Artes marciais", "Disciplina", "Espiritualidade"],
    icon: Sparkles,
    color: "oklch(0.6 0.1 60)",
  },
  {
    id: "cacador",
    name: "Caçador",
    tagline: "O rastro nunca mente para quem sabe ler",
    description:
      "Você sobrevive onde outros se perdem. A natureza é sua aliada, seus sentidos são afiados e sua lealdade aos companheiros — humanos ou animais — é inabalável.",
    strengths: ["Sobrevivência", "Rastreamento", "Vínculo animal"],
    icon: PawPrint,
    color: "oklch(0.6 0.1 110)",
  },
  {
    id: "cavaleiro",
    name: "Cavaleiro",
    tagline: "Honra, dever e coragem em aço e sangue",
    description:
      "Você é a muralha entre o perigo e os inocentes. Treinado para a batalha e moldado pelo dever, carrega sua armadura com orgulho e enfrenta qualquer ameaça de frente.",
    strengths: ["Defesa pesada", "Combate montado", "Honra"],
    icon: Horse,
    color: "oklch(0.55 0.08 250)",
  },
  {
    id: "xama",
    name: "Xamã",
    tagline: "Os espíritos sussurram, e você escuta",
    description:
      "Você é a ponte entre o mundo material e o espiritual. Com respeito aos elementos e aos antepassados, canaliza poderes primordiais para curar, proteger e transformar.",
    strengths: ["Comunhão espiritual", "Magia elemental", "Cura ritual"],
    icon: Flame,
    color: "oklch(0.6 0.14 50)",
  },
  {
    id: "alquimista",
    name: "Alquimista",
    tagline: "Cada mistura é uma nova possibilidade",
    description:
      "Você vê o mundo como um laboratório gigante. Poções, explosivos e engenhocas são suas ferramentas favoritas. A curiosidade é sua bússola e a experimentação, seu caminho.",
    strengths: ["Poções", "Explosivos", "Conhecimento científico"],
    icon: FlaskConical,
    color: "oklch(0.65 0.12 160)",
  },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Em uma batalha, qual é a sua primeira escolha?",
    answers: [
      { label: "Atacar de frente com toda a força", scores: { barbaro: 3, cavaleiro: 2, monge: 1 } },
      { label: "Observar e encontrar a fraqueza do inimigo", scores: { ladino: 3, arqueiro: 2, elfo: 1 } },
      { label: "Lançar magia de longe", scores: { mago: 3, necromante: 2, xama: 1 } },
      { label: "Proteger aliados e curar feridos", scores: { paladino: 3, druida: 2, xama: 1 } },
    ],
  },
  {
    id: 2,
    text: "Qual ambiente te faz sentir mais em casa?",
    answers: [
      { label: "Florestas antigas e tranquilas", scores: { elfo: 3, druida: 2, arqueiro: 1 } },
      { label: "Montanhas e cavernas de pedra", scores: { anao: 3, barbaro: 2, cavaleiro: 1 } },
      { label: "Bibliotecas e torres de magia", scores: { mago: 3, alquimista: 2, necromante: 1 } },
      { label: "Vilarejos movimentados e tavernas", scores: { bardo: 3, ladino: 2, cacador: 1 } },
    ],
  },
  {
    id: 3,
    text: "Como você prefere resolver um conflito?",
    answers: [
      { label: "Com diálogo e persuasão", scores: { bardo: 3, paladino: 2, xama: 1 } },
      { label: "Com ações rápidas e discretas", scores: { ladino: 3, arqueiro: 2, elfo: 1 } },
      { label: "Com força e determinação", scores: { barbaro: 3, cavaleiro: 2, monge: 1 } },
      { label: "Com conhecimento e preparação", scores: { mago: 3, alquimista: 2, necromante: 1 } },
    ],
  },
  {
    id: 4,
    text: "Qual dessas qualidades você mais valoriza em si mesmo?",
    answers: [
      { label: "Coragem", scores: { barbaro: 3, cavaleiro: 2, paladino: 1 } },
      { label: "Sabedoria", scores: { mago: 3, druida: 2, xama: 1 } },
      { label: "Agilidade", scores: { elfo: 3, ladino: 2, arqueiro: 1 } },
      { label: "Resiliência", scores: { anao: 3, monge: 2, cacador: 1 } },
    ],
  },
  {
    id: 5,
    text: "Escolha um companheiro de aventura:",
    answers: [
      { label: "Um lobo feroz e leal", scores: { cacador: 3, barbaro: 2, druida: 1 } },
      { label: "Um falcão de olhos aguçados", scores: { arqueiro: 3, elfo: 2, cacador: 1 } },
      { label: "Um golem ou constructo mágico", scores: { mago: 3, alquimista: 2, necromante: 1 } },
      { label: "Um cavalo de guerra imponente", scores: { cavaleiro: 3, paladino: 2, anao: 1 } },
    ],
  },
  {
    id: 6,
    text: "Qual tipo de magia mais te atrai?",
    answers: [
      { label: "Magia elemental da natureza", scores: { druida: 3, xama: 2, elfo: 1 } },
      { label: "Magia arcana e intelectual", scores: { mago: 3, alquimista: 2, necromante: 1 } },
      { label: "Poderes sagrados de luz e cura", scores: { paladino: 3, monge: 2, xama: 1 } },
      { label: "Truques ilusórios e encantamentos", scores: { bardo: 3, ladino: 2, elfo: 1 } },
    ],
  },
  {
    id: 7,
    text: "Qual seria seu papel em um grupo de heróis?",
    answers: [
      { label: "O líder que protege todos", scores: { paladino: 3, cavaleiro: 2, anao: 1 } },
      { label: "O estrategista que planeja cada passo", scores: { mago: 3, ladino: 2, alquimista: 1 } },
      { label: "O explorador que abre caminho", scores: { cacador: 3, arqueiro: 2, elfo: 1 } },
      { label: "O motivador que mantém o espírito alto", scores: { bardo: 3, barbaro: 2, monge: 1 } },
    ],
  },
  {
    id: 8,
    text: "O que você faria com um artefato poderoso encontrado?",
    answers: [
      { label: "Usá-lo para proteger os outros", scores: { paladino: 3, cavaleiro: 2, xama: 1 } },
      { label: "Estudá-lo para desvendar seus segredos", scores: { mago: 3, alquimista: 2, necromante: 1 } },
      { label: "Vendê-lo por uma fortuna", scores: { ladino: 3, bardo: 2, anao: 1 } },
      { label: "Devolvê-lo à natureza ou ao seu lugar de origem", scores: { druida: 3, elfo: 2, cacador: 1 } },
    ],
  },
  {
    id: 9,
    text: "Como você lida com emoções fortes?",
    answers: [
      { label: "Deixo fluir e uso como combustível", scores: { barbaro: 3, bardo: 2, xama: 1 } },
      { label: "Respiro fundo e busco equilíbrio", scores: { monge: 3, druida: 2, paladino: 1 } },
      { label: "Analiso friamente a situação", scores: { mago: 3, necromante: 2, alquimista: 1 } },
      { label: "Canalizo para uma ação precisa", scores: { arqueiro: 3, elfo: 2, ladino: 1 } },
    ],
  },
  {
    id: 10,
    text: "Qual legenda você gostaria de deixar para trás?",
    answers: [
      { label: "O guerreiro invencível que nunca recuou", scores: { barbaro: 3, cavaleiro: 2, monge: 1 } },
      { label: "O sábio que desvendou os mistérios do mundo", scores: { mago: 3, alquimista: 2, necromante: 1 } },
      { label: "O protetor que guardou a natureza", scores: { druida: 3, elfo: 2, cacador: 1 } },
      { label: "O herói que inspirou gerações", scores: { bardo: 3, paladino: 2, xama: 1 } },
    ],
  },
];

export function getInitialScores(): Record<string, number> {
  return RPG_CLASSES.reduce((acc, cls) => {
    acc[cls.id] = 0;
    return acc;
  }, {} as Record<string, number>);
}

export function getTopClasses(scores: Record<string, number>): RpgClass[] {
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([id]) => RPG_CLASSES.find((c) => c.id === id)!);
  return sorted;
}
