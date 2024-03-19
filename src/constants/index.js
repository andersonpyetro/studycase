import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Funcionalidades",
    url: "#features",
  },
  {
    id: "1",
    title: "Preços",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Como usar",
    url: "#how-to-use",
  },
 
  {
    id: "4",
    title: "Criar Conta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Entrar",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Chat em tempo real",
  "Dicas de otimização do negócio",
  "Geração de gráficos inteligentes",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "O nosso aplicativo oferece segurança de ponta para você integrar vários programas, inclusive bancários, sem a preocupação de ter seus dados roubados.";

export const collabContent = [
  {
    id: "0",
    title: "Integração Completa",
    text: collabText,
  },
  {
    id: "1",
    title: "Automação Inteligente",
  },
  {
    id: "2",
    title: "Segurança em primeiro lugar",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basico",
    description: "AI chatbot, personalized recommendations",
    price: "69,90",
    features: [
      "3 usuários",
      "60 MB de dados",
      "Emissão de Notas Fiscais",
      "Sincronização de estoque",
      "Atualização automática de pedidos de venda"    
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "O melhor custo benefício para o seu negócio",
    price: "89.90",
    features: [
      "10 usuários",
      "120MB de dados",
      "3 GB de arquivos",
      "Integração com MarketPlaces",
      "Emissão de Notas Fiscais",
      "Inteligência Artificial ativa para ajudar com a otimização do seu comércio",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "129.90",
    features: [
      "Todos os recursos dos outros planos",
      "Suporte personalizado",
      "Acesso a uma consultoria por mês com especialista em Growth Marketing",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Chat Ao vivo",
    text: "Atenda aos seus clientes diretamente no nosso Chat ao vivo. Ofereça suporte personalizado, link de venda e muito mais.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Gestão Eficiente",
    text: "Nosso aplicativo oferece tudo o que você precisa para otimizar as suas vendas: gráfico comparativo, sugestão de otimização de preço e controle eficiente de estoque.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Marketing Eficiente",
    text: "No Mercado Mestre você consegue conectar suas contas de anúncios do Google e Facebook para um controle eficiente nas suas campanhas de publicidade online. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Notas Fiscais",
    text: "Gere suas notas fiscais com praticidade. Mais facilidade para manter a saúde fiscal do seu negócio em dia.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Suporte da IA",
    text: "Temos uma Inteligêcia artificial plugada no seu aplicativo pronta para lhe fornecer dicas importantes para o crescimento do seu negócio.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Controle de estoque",
    text: "Com a nossa ferramenta de cadastro, fazer a gestão inteligente do seu estoque ficou ainda mais fácil.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
