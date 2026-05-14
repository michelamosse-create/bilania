// 12 Archétypes de personnalité professionnelle
// Basé sur le Big Five (OCEAN) + RIASEC + Aptitude Numérique

export interface PersonalityArchetype {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  bigFive: {
    openness: number;      // Ouverture
    conscientiousness: number; // Conscienciosité
    extraversion: number;  // Extraversion
    agreeableness: number; // Agréabilité
    neuroticism: number;   // Stabilité émotionnelle (inversé)
  };
  riasec: {
    realistic: number;
    investigative: number;
    artistic: number;
    social: number;
    enterprising: number;
    conventional: number;
  };
  strengths: string[];
  watchOut: string[];
  workStyle: string;
  idealEnvironment: string;
  communicationStyle: string;
  decisionStyle: string;
  stressResponse: string;
  careers: { title: string; match: number; rome: string }[];
}

export const PERSONALITY_ARCHETYPES: PersonalityArchetype[] = [
  {
    id: 'innovateur_tech',
    name: 'Innovateur Tech',
    subtitle: 'Le pionnier créatif du numérique',
    description: 'Vous êtes un esprit créatif et audacieux, toujours à la recherche de nouvelles idées. Vous aimez explorer, expérimenter et repousser les limites. Dans le numérique, vous êtes le prototype du startup founder ou du lead developer qui voit ce que les autres ne voient pas encore.',
    bigFive: { openness: 90, conscientiousness: 55, extraversion: 65, agreeableness: 50, neuroticism: 30 },
    riasec: { realistic: 40, investigative: 85, artistic: 80, social: 45, enterprising: 70, conventional: 20 },
    strengths: ['Créativité débordante', 'Prise de risque calculée', 'Vision à long terme', 'Adaptabilité extrême', 'Capacité à inspirer'],
    watchOut: ['Peut négliger les détails', 'Tendance à procrastiner sur les tâches routinières', 'Parfois trop optimiste'],
    workStyle: 'Mode projet, sprints intenses, liberté totale',
    idealEnvironment: 'Startup, lab d\'innovation, freelance, R&D',
    communicationStyle: 'Direct et visionnaire, va droit au but',
    decisionStyle: 'Intuitif, basé sur la vision plus que les données',
    stressResponse: 'Transforme le stress en énergie créative',
    careers: [
      { title: 'Entrepreneur / Fondateur Tech', match: 95, rome: 'M1302' },
      { title: 'Lead Developer', match: 90, rome: 'M1805' },
      { title: 'UX/UI Designer', match: 85, rome: 'M1803' },
      { title: 'Product Manager IA', match: 82, rome: 'M1703' },
      { title: 'Architecte Solutions Cloud', match: 78, rome: 'M1802' },
    ],
  },
  {
    id: 'analyste_strategique',
    name: 'Analyste Stratégique',
    subtitle: 'Le décrypteur de données',
    description: 'Vous avez un esprit logique et méthodique. Vous aimez comprendre, analyser et résoudre des problèmes complexes. Dans le numérique, vous excellez dans les rôles qui demandent rigueur et profondeur d\'analyse.',
    bigFive: { openness: 70, conscientiousness: 90, extraversion: 35, agreeableness: 55, neuroticism: 25 },
    riasec: { realistic: 50, investigative: 95, artistic: 30, social: 30, enterprising: 40, conventional: 75 },
    strengths: ['Rigueur analytique', 'Pensée structurée', 'Résolution de problèmes', 'Fiabilité absolue', 'Profondeur de réflexion'],
    watchOut: ['Peut sembler distant', 'Difficulté à déléguer', 'Perfectionnisme parfois bloquant'],
    workStyle: 'Méthodique, approfondi, concentré',
    idealEnvironment: 'Grand groupe, cabinet de conseil, data lab, finance',
    communicationStyle: 'Précis et factuel, s\'appuie sur des données',
    decisionStyle: 'Rationnel, basé sur l\'analyse exhaustive',
    stressResponse: 'Planifie et structure pour réduire l\'incertitude',
    careers: [
      { title: 'Data Analyst', match: 95, rome: 'M1403' },
      { title: 'Data Scientist', match: 92, rome: 'M1403' },
      { title: 'Business Intelligence Analyst', match: 88, rome: 'M1403' },
      { title: 'Ingénieur Cybersécurité', match: 85, rome: 'M1801' },
      { title: 'Risk Manager IT', match: 80, rome: 'M1502' },
    ],
  },
  {
    id: 'batisseur_digital',
    name: 'Bâtisseur Digital',
    subtitle: 'L\'architecte de solutions concrètes',
    description: 'Vous êtes pragmatique, fiable et orienté résultats. Vous aimez construire des choses tangibles et voir l\'impact concret de votre travail. Dans le numérique, vous êtes le développeur ou le chef de projet qui livre, toujours.',
    bigFive: { openness: 45, conscientiousness: 95, extraversion: 50, agreeableness: 65, neuroticism: 20 },
    riasec: { realistic: 85, investigative: 65, artistic: 20, social: 50, enterprising: 55, conventional: 70 },
    strengths: ['Fiabilité à toute épreuve', 'Sens du concret', 'Organisation méthodique', 'Loyauté', 'Capacité à finir ce qui est commencé'],
    watchOut: ['Peut résister au changement', 'Difficulté à sortir du cadre', 'Tendance au sur-contrôle'],
    workStyle: 'Structuré, étape par étape, livrables concrets',
    idealEnvironment: 'PME, ESN, grands projets IT, administration',
    communicationStyle: 'Clair et structuré, va à l\'essentiel',
    decisionStyle: 'Méthodique, basé sur l\'expérience et les faits',
    stressResponse: 'S\'appuie sur les process pour garder le contrôle',
    careers: [
      { title: 'Chef de Projet IT', match: 95, rome: 'M1806' },
      { title: 'Développeur Full Stack', match: 90, rome: 'M1805' },
      { title: 'DevOps Engineer', match: 85, rome: 'M1801' },
      { title: 'Scrum Master', match: 82, rome: 'M1806' },
      { title: 'Consultant ERP/CRM', match: 78, rome: 'M1806' },
    ],
  },
  {
    id: 'communicant_digital',
    name: 'Communicant Digital',
    subtitle: 'L\'influenceur de la tech',
    description: 'Vous avez un charisme naturel et une aisance relationnelle hors pair. Vous savez fédérer, convaincre et raconter des histoires qui marquent. Dans le numérique, vous brillez là où l\'humain et la technologie se rencontrent.',
    bigFive: { openness: 75, conscientiousness: 55, extraversion: 95, agreeableness: 80, neuroticism: 35 },
    riasec: { realistic: 15, investigative: 30, artistic: 75, social: 95, enterprising: 90, conventional: 30 },
    strengths: ['Charisme naturel', 'Empathie', 'Capacité à fédérer', 'Storytelling', 'Adaptabilité sociale'],
    watchOut: ['Peut manquer de rigueur', 'Tendance à trop parler', 'Difficulté avec les tâches isolées'],
    workStyle: 'Collaboratif, énergique, en réseau constant',
    idealEnvironment: 'Agence, média, éditeur logiciel, growth team',
    communicationStyle: 'Narratif et engageant, capte l\'attention',
    decisionStyle: 'Consultatif, implique les autres',
    stressResponse: 'Cherche du soutien social, verbalise',
    careers: [
      { title: 'Product Owner', match: 95, rome: 'M1703' },
      { title: 'Digital Marketing Manager', match: 90, rome: 'M1705' },
      { title: 'Sales Tech / BDR', match: 88, rome: 'M1701' },
      { title: 'Community Manager Tech', match: 85, rome: 'M1705' },
      { title: 'Formateur en technologies', match: 82, rome: 'K2111' },
    ],
  },
  {
    id: 'createur_num',
    name: 'Créateur Numérique',
    subtitle: 'L\'artiste du digital',
    description: 'Vous voyez le monde en images, en expériences et en émotions. Votre sensibilité esthétique est votre boussole. Dans le numérique, vous transformez la technologie en beauté et en expérience utilisateur.',
    bigFive: { openness: 95, conscientiousness: 40, extraversion: 55, agreeableness: 70, neuroticism: 50 },
    riasec: { realistic: 20, investigative: 35, artistic: 95, social: 55, enterprising: 45, conventional: 15 },
    strengths: ['Sensibilité esthétique', 'Originalité', 'Intuition créative', 'Souci du détail visuel', 'Capacité à émouvoir'],
    watchOut: ['Difficulté avec les contraintes', 'Sensibilité à la critique', 'Procrastination créative'],
    workStyle: 'Par inspiration, en mode flow, ambiance stimulante',
    idealEnvironment: 'Studio de création, agence UX, média, freelance créatif',
    communicationStyle: 'Visuel et métaphorique, évocateur',
    decisionStyle: 'Intuitif et émotionnel, suit son instinct',
    stressResponse: 'Se réfugie dans la création, peut se bloquer',
    careers: [
      { title: 'UX/UI Designer', match: 95, rome: 'M1803' },
      { title: 'Directeur Artistique Digital', match: 92, rome: 'E1104' },
      { title: 'Motion Designer', match: 88, rome: 'E1104' },
      { title: 'Graphiste Web', match: 85, rome: 'E1104' },
      { title: 'No-Code Maker', match: 80, rome: 'M1805' },
    ],
  },
  {
    id: 'explorateur_tech',
    name: 'Explorateur Tech',
    subtitle: 'L\'éternel curieux du digital',
    description: 'Votre curiosité est insatiable. Vous aimez apprendre, tester, découvrir. Vous passez d\'un sujet à l\'autre avec aisance. Dans le numérique, vous êtes le veilleur, le testeur, celui qui connaît la nouvelle techno avant tout le monde.',
    bigFive: { openness: 95, conscientiousness: 35, extraversion: 60, agreeableness: 60, neuroticism: 40 },
    riasec: { realistic: 50, investigative: 85, artistic: 60, social: 50, enterprising: 55, conventional: 25 },
    strengths: ['Curiosité insatiable', 'Polyvalence', 'Adaptation rapide', 'Apprentissage accéléré', 'Culture tech large'],
    watchOut: ['Dispersion', 'Difficulté à approfondir', 'Ennui rapide', 'Projets inachevés'],
    workStyle: 'Varié, par sprints, apprentissage continu',
    idealEnvironment: 'Startup, consulting, veille technologique, R&D',
    communicationStyle: 'Enthousiaste, passe d\'un sujet à l\'autre',
    decisionStyle: 'Rapide, basé sur l\'intuition et la curiosité',
    stressResponse: 'Cherche la nouveauté pour échapper au stress',
    careers: [
      { title: 'Consultant Transformation Digitale', match: 90, rome: 'M1402' },
      { title: 'Growth Hacker', match: 88, rome: 'M1705' },
      { title: 'Développeur Full Stack Junior', match: 85, rome: 'M1805' },
      { title: 'Product Manager', match: 82, rome: 'M1703' },
      { title: 'Spécialiste SEO/SEA', match: 78, rome: 'M1705' },
    ],
  },
  {
    id: 'coordinateur_digital',
    name: 'Coordinateur Digital',
    subtitle: 'Le chef d\'orchestre du numérique',
    description: 'Vous êtes le pilier qui fait tourner la machine. Organisé, diplomate, vous savez faire travailler les autres ensemble. Dans le numérique, vous êtes le manager qui crée les conditions de la performance collective.',
    bigFive: { openness: 55, conscientiousness: 90, extraversion: 65, agreeableness: 85, neuroticism: 20 },
    riasec: { realistic: 40, investigative: 50, artistic: 30, social: 85, enterprising: 75, conventional: 80 },
    strengths: ['Leadership naturel', 'Diplomatie', 'Organisation', 'Fiabilité', 'Capacité à déléguer'],
    watchOut: ['Évitement du conflit', 'Tendance au micro-management', 'Difficulté à trancher'],
    workStyle: 'Structuré, collaboratif, orienté équipe',
    idealEnvironment: 'Grand groupe, PME en croissance, ESN, administration',
    communicationStyle: 'Diplomate et structuré, rassembleur',
    decisionStyle: 'Consensuel, cherche l\'adhésion',
    stressResponse: 'Organise et planifie pour sécuriser',
    careers: [
      { title: 'Scrum Master / Agile Coach', match: 95, rome: 'M1806' },
      { title: 'IT Project Manager', match: 92, rome: 'M1806' },
      { title: 'CTO / DSI', match: 88, rome: 'M1806' },
      { title: 'Responsable Digital Workplace', match: 85, rome: 'M1806' },
      { title: 'Consultant Organisation IT', match: 80, rome: 'M1402' },
    ],
  },
  {
    id: 'visionnaire_ia',
    name: 'Visionnaire IA',
    subtitle: 'Le stratège de l\'intelligence artificielle',
    description: 'Vous comprenez les enjeux profonds de l\'IA et vous avez une vision claire de son impact. Vous savez faire le pont entre la technique et la stratégie. Vous êtes le leader naturel de la transformation IA.',
    bigFive: { openness: 85, conscientiousness: 75, extraversion: 55, agreeableness: 45, neuroticism: 25 },
    riasec: { realistic: 30, investigative: 90, artistic: 40, social: 45, enterprising: 85, conventional: 55 },
    strengths: ['Vision stratégique', 'Compréhension technologique', 'Leadership', 'Capacité à simplifier', 'Prise de décision'],
    watchOut: ['Peut être perçu comme arrogant', 'Impatience', 'Néglige l\'humain'],
    workStyle: 'Stratégique, délégation, focus sur l\'essentiel',
    idealEnvironment: 'Cabinet de conseil, direction innovation, startup IA',
    communicationStyle: 'Direct et stratégique, orienté résultats',
    decisionStyle: 'Rapide et décisif, basé sur la vision',
    stressResponse: 'Prend du recul stratégique, relativise',
    careers: [
      { title: 'Chief AI Officer', match: 92, rome: 'M1806' },
      { title: 'Consultant Stratégie IA', match: 90, rome: 'M1402' },
      { title: 'AI Product Manager', match: 88, rome: 'M1703' },
      { title: 'Data Science Lead', match: 85, rome: 'M1403' },
      { title: 'Responsable Innovation', match: 82, rome: 'M1402' },
    ],
  },
  {
    id: 'gardien_numerique',
    name: 'Gardien Numérique',
    subtitle: 'Le protecteur des systèmes',
    description: 'Vous êtes méthodique, prudent et rigoureux. Vous avez le sens du devoir et de la protection. Dans le numérique, vous êtes le garant de la sécurité et de la fiabilité des systèmes.',
    bigFive: { openness: 30, conscientiousness: 90, extraversion: 30, agreeableness: 65, neuroticism: 35 },
    riasec: { realistic: 70, investigative: 75, artistic: 10, social: 40, enterprising: 25, conventional: 85 },
    strengths: ['Rigueur absolue', 'Sens du devoir', 'Prudence', 'Méthode', 'Fiabilité'],
    watchOut: ['Rigidité', 'Résistance au changement', 'Difficulté à innover'],
    workStyle: 'Méthodique, sécurisé, procédurier',
    idealEnvironment: 'Banque, assurance, défense, santé, administrations',
    communicationStyle: 'Précis et documenté, suit les procédures',
    decisionStyle: 'Prudent, basé sur les règles et l\'analyse de risque',
    stressResponse: 'Se réfugie dans les procédures',
    careers: [
      { title: 'Expert Cybersécurité', match: 95, rome: 'M1801' },
      { title: 'Administrateur Réseaux', match: 92, rome: 'M1801' },
      { title: 'Responsable Sécurité SI', match: 90, rome: 'M1801' },
      { title: 'Auditeur IT', match: 85, rome: 'M1802' },
      { title: 'DevOps / SRE', match: 80, rome: 'M1801' },
    ],
  },
  {
    id: 'facilitateur_tech',
    name: 'Facilitateur Tech',
    subtitle: 'Le pédagogue du numérique',
    description: 'Vous êtes patient, pédagogue et bienveillant. Vous aimez transmettre et voir les autres progresser. Dans le numérique, vous êtes le formateur ou le support qui fait aimer la technologie.',
    bigFive: { openness: 65, conscientiousness: 70, extraversion: 70, agreeableness: 90, neuroticism: 30 },
    riasec: { realistic: 30, investigative: 50, artistic: 50, social: 95, enterprising: 40, conventional: 55 },
    strengths: ['Pédagogie naturelle', 'Patience', 'Empathie', 'Clarté', 'Encouragement'],
    watchOut: ['Trop gentil', 'Difficulté à dire non', 'S\'oublie pour les autres'],
    workStyle: 'Accompagnement, mentorat, transmission',
    idealEnvironment: 'Organisme de formation, EdTech, support client, consulting',
    communicationStyle: 'Pédagogue et rassurant, vulgarise',
    decisionStyle: 'Cherche le consensus, pense aux impacts humains',
    stressResponse: 'Aide les autres pour se sentir utile',
    careers: [
      { title: 'Formateur en Numérique', match: 95, rome: 'K2111' },
      { title: 'Customer Success Manager', match: 90, rome: 'M1701' },
      { title: 'Consultant Adoption Digitale', match: 88, rome: 'M1402' },
      { title: 'Technicien Support IT', match: 85, rome: 'M1801' },
      { title: 'Community Manager Tech', match: 82, rome: 'M1705' },
    ],
  },
  {
    id: 'pionnier_num',
    name: 'Pionnier Numérique',
    subtitle: 'L\'aventurier de la tech',
    description: 'Vous êtes indépendant, autonome et vous n\'avez pas peur de l\'inconnu. Vous tracez votre propre chemin. Dans le numérique, vous êtes le freelance ou le nomade digital qui vit la tech comme un mode de vie.',
    bigFive: { openness: 85, conscientiousness: 45, extraversion: 55, agreeableness: 40, neuroticism: 30 },
    riasec: { realistic: 60, investigative: 65, artistic: 50, social: 30, enterprising: 85, conventional: 20 },
    strengths: ['Indépendance', 'Autonomie', 'Audace', 'Polyvalence', 'Débrouillardise'],
    watchOut: ['Isolement', 'Manque de structure', 'Difficulté à travailler en équipe'],
    workStyle: 'Autonome, flexible, orienté résultats',
    idealEnvironment: 'Freelance, nomade digital, startup early stage, entrepreneuriat',
    communicationStyle: 'Direct et efficace, va à l\'essentiel',
    decisionStyle: 'Rapide et autonome, ne consulte pas beaucoup',
    stressResponse: 'Se débrouille seul, évite la dépendance',
    careers: [
      { title: 'Développeur Freelance', match: 95, rome: 'M1805' },
      { title: 'Consultant Indépendant IT', match: 90, rome: 'M1402' },
      { title: 'No-Code Maker Freelance', match: 88, rome: 'M1805' },
      { title: 'Growth Hacker Freelance', match: 85, rome: 'M1705' },
      { title: 'Solopreneur Tech', match: 82, rome: 'M1302' },
    ],
  },
  {
    id: 'architecte_digital',
    name: 'Architecte Digital',
    subtitle: 'Le concepteur de systèmes',
    description: 'Vous êtes un penseur systémique qui aime concevoir des architectures élégantes et robustes. Vous voyez les choses dans leur globalité. Dans le numérique, vous concevez les fondations sur lesquelles tout repose.',
    bigFive: { openness: 75, conscientiousness: 80, extraversion: 40, agreeableness: 50, neuroticism: 20 },
    riasec: { realistic: 60, investigative: 90, artistic: 45, social: 25, enterprising: 35, conventional: 70 },
    strengths: ['Pensée systémique', 'Abstraction', 'Planification', 'Rigueur', 'Vision globale'],
    watchOut: ['Trop théorique', 'Éloigné du terrain', 'Communication technique'],
    workStyle: 'Conception, architecture, documentation, normes',
    idealEnvironment: 'Grand groupe, éditeur logiciel, cloud provider, banque',
    communicationStyle: 'Technique et structuré, diagrammes',
    decisionStyle: 'Systémique, pèse toutes les implications',
    stressResponse: 'Analyse froidement la situation',
    careers: [
      { title: 'Architecte Cloud', match: 95, rome: 'M1802' },
      { title: 'Architecte Logiciel', match: 92, rome: 'M1802' },
      { title: 'Ingénieur Data', match: 88, rome: 'M1802' },
      { title: 'Architecte Cybersécurité', match: 85, rome: 'M1802' },
      { title: 'Lead Tech / CTO', match: 80, rome: 'M1802' },
    ],
  },
];

export function findArchetype(scores: {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
}): PersonalityArchetype {
  let bestMatch = PERSONALITY_ARCHETYPES[0];
  let bestScore = Infinity;

  for (const archetype of PERSONALITY_ARCHETYPES) {
    const bf = archetype.bigFive;
    const ri = archetype.riasec;

    const distance =
      Math.pow(scores.openness - bf.openness, 2) +
      Math.pow(scores.conscientiousness - bf.conscientiousness, 2) +
      Math.pow(scores.extraversion - bf.extraversion, 2) +
      Math.pow(scores.agreeableness - bf.agreeableness, 2) +
      Math.pow(scores.neuroticism - bf.neuroticism, 2) +
      Math.pow(scores.realistic - ri.realistic, 2) * 0.5 +
      Math.pow(scores.investigative - ri.investigative, 2) * 0.5 +
      Math.pow(scores.artistic - ri.artistic, 2) * 0.5 +
      Math.pow(scores.social - ri.social, 2) * 0.5 +
      Math.pow(scores.enterprising - ri.enterprising, 2) * 0.5 +
      Math.pow(scores.conventional - ri.conventional, 2) * 0.5;

    if (distance < bestScore) {
      bestScore = distance;
      bestMatch = archetype;
    }
  }

  return bestMatch;
}
