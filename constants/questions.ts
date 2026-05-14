import { Question, OpenQuestion } from '@/types';
import { ALL_EXTENDED_QUESTIONS, EXTENDED_OPEN_QUESTIONS } from './questions-extended';

export { EXTENDED_OPEN_QUESTIONS };

// ============================================================
// PARTIE 1 — Compétences transverses (questions existantes + enrichies)
// ============================================================

export const SOFT_SKILLS_QUESTIONS: Question[] = [
  {
    id: 'comm_1',
    category: 'soft_skills',
    text: "Quelle est votre aisance à communiquer des idées complexes devant un public ?",
    options: [
      { value: 1, label: "Très peu à l'aise" },
      { value: 2, label: "Peu à l'aise" },
      { value: 3, label: "Moyennement à l'aise" },
      { value: 4, label: "À l'aise" },
      { value: 5, label: "Très à l'aise" },
    ]
  },
  {
    id: 'lead_1',
    category: 'soft_skills',
    text: "Prenez-vous naturellement des initiatives pour guider une équipe ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Rarement" },
      { value: 3, label: "Parfois" },
      { value: 4, label: "Souvent" },
      { value: 5, label: "Systématiquement" },
    ]
  },
  {
    id: 'conflict_1',
    category: 'soft_skills',
    text: "Comment gérez-vous un désaccord au sein d'une équipe ?",
    options: [
      { value: 1, label: "Évitement complet" },
      { value: 2, label: "Concessions" },
      { value: 3, label: "Recherche de compromis" },
      { value: 4, label: "Facilitation du dialogue" },
      { value: 5, label: "Transformation en opportunité" },
    ]
  },
  {
    id: 'listen_1',
    category: 'soft_skills',
    text: "Pratiquez-vous l'écoute active (reformulation, questions ouvertes) dans vos échanges ?",
    options: [
      { value: 1, label: "Rarement" },
      { value: 2, label: "Parfois" },
      { value: 3, label: "Souvent" },
      { value: 4, label: "Très souvent" },
      { value: 5, label: "Naturellement, à chaque échange" },
    ]
  },
  {
    id: 'nego_1',
    category: 'soft_skills',
    text: "Quel est votre niveau en négociation ?",
    options: [
      { value: 1, label: "Aucune expérience" },
      { value: 2, label: "Débutant" },
      { value: 3, label: "Intermédiaire" },
      { value: 4, label: "Confirmé" },
      { value: 5, label: "Expert" },
    ]
  },
  {
    id: 'pedag_1',
    category: 'soft_skills',
    text: "Savez-vous expliquer des concepts complexes à des personnes non expertes ?",
    options: [
      { value: 1, label: "Très difficilement" },
      { value: 2, label: "Avec effort" },
      { value: 3, label: "Plutôt bien" },
      { value: 4, label: "Très bien" },
      { value: 5, label: "C'est l'un de mes points forts" },
    ]
  },
  {
    id: 'crea_1',
    category: 'soft_skills',
    text: "Face à un problème inédit, faites-vous preuve de créativité pour trouver une solution ?",
    options: [
      { value: 1, label: "Blocage rapide" },
      { value: 2, label: "Recherche de solutions connues" },
      { value: 3, label: "Exploration de pistes" },
      { value: 4, label: "Propositions originales" },
      { value: 5, label: "Innovation systématique" },
    ]
  },
  {
    id: 'stress_1',
    category: 'soft_skills',
    text: "Comment gérez-vous la pression et les délais serrés ?",
    options: [
      { value: 1, label: "Complètement dépassé" },
      { value: 2, label: "Anxieux mais résistant" },
      { value: 3, label: "Organisation pour faire face" },
      { value: 4, label: "Efficace sous pression" },
      { value: 5, label: "Motivé et transcendé" },
    ]
  },
  {
    id: 'empath_1',
    category: 'soft_skills',
    text: "Arrivez-vous à comprendre les émotions et les besoins des autres sans qu'ils les expriment ?",
    options: [
      { value: 1, label: "Très difficilement" },
      { value: 2, label: "Parfois" },
      { value: 3, label: "Souvent" },
      { value: 4, label: "Très souvent" },
      { value: 5, label: "C'est intuitif pour moi" },
    ]
  },
  {
    id: 'collab_1',
    category: 'soft_skills',
    text: "Comment travaillez-vous avec des personnes aux compétences très différentes des vôtres ?",
    options: [
      { value: 1, label: "Difficilement, je préfère les profils similaires" },
      { value: 2, label: "Je m'adapte avec un peu d'effort" },
      { value: 3, label: "Je trouve ça enrichissant" },
      { value: 4, label: "Je recherche la complémentarité" },
      { value: 5, label: "J'excelle dans les équipes pluridisciplinaires" },
    ]
  },
];

export const HARD_SKILLS_QUESTIONS: Question[] = [
  {
    id: 'tech_1',
    category: 'hard_skills',
    text: "Quel est votre niveau de confort avec l'utilisation de nouveaux outils numériques ou logiciels ?",
    options: [
      { value: 1, label: "Débutant" },
      { value: 2, label: "Intermédiaire" },
      { value: 3, label: "Avancé" },
      { value: 4, label: "Expert" },
      { value: 5, label: "Visionnaire" },
    ]
  },
  {
    id: 'anal_1',
    category: 'hard_skills',
    text: "Aimez-vous résoudre des problèmes logiques ou mathématiques complexes ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Un peu" },
      { value: 3, label: "Moyennement" },
      { value: 4, label: "Beaucoup" },
      { value: 5, label: "Passionnément" },
    ]
  },
  {
    id: 'project_1',
    category: 'hard_skills',
    text: "Avez-vous déjà géré un projet de A à Z (planning, ressources, livrables) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "En tant que contributeur" },
      { value: 3, label: "Quelques petits projets" },
      { value: 4, label: "Plusieurs projets" },
      { value: 5, label: "Je gère des projets complexes régulièrement" },
    ]
  },
  {
    id: 'data_1',
    category: 'hard_skills',
    text: "Savez-vous analyser des données pour prendre une décision (tableaux, graphiques, tendances) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Notions de base" },
      { value: 3, label: "À l'aise avec les tableaux" },
      { value: 4, label: "Analyses avancées" },
      { value: 5, label: "C'est mon métier" },
    ]
  },
  {
    id: 'content_1',
    category: 'hard_skills',
    text: "Quel est votre niveau en création de contenu (écriture, visuels, vidéo) ?",
    options: [
      { value: 1, label: "Aucune expérience" },
      { value: 2, label: "Bases" },
      { value: 3, label: "Intermédiaire" },
      { value: 4, label: "Avancé" },
      { value: 5, label: "Professionnel" },
    ]
  },
  {
    id: 'lang_1',
    category: 'hard_skills',
    text: "Quel est votre niveau d'anglais professionnel (lecture, écriture, oral) ?",
    options: [
      { value: 1, label: "Aucune notion" },
      { value: 2, label: "Niveau A2 (scolaire)" },
      { value: 3, label: "Niveau B1 (intermédiaire)" },
      { value: 4, label: "Niveau B2 (professionnel)" },
      { value: 5, label: "Niveau C1/C2 (bilingue)" },
    ]
  },
  {
    id: 'org_1',
    category: 'hard_skills',
    text: "Comment organisez-vous votre travail au quotidien ?",
    options: [
      { value: 1, label: "Au feeling" },
      { value: 2, label: "To-do list simple" },
      { value: 3, label: "Outils numériques" },
      { value: 4, label: "Méthode structurée" },
      { value: 5, label: "Optimisation continue" },
    ]
  },
  {
    id: 'finance_1',
    category: 'hard_skills',
    text: "Quel est votre niveau en gestion budgétaire ou financière ?",
    options: [
      { value: 1, label: "Aucune expérience" },
      { value: 2, label: "Notions de base" },
      { value: 3, label: "Je gère un budget simple" },
      { value: 4, label: "À l'aise avec les tableaux de bord financiers" },
      { value: 5, label: "C'est mon métier" },
    ]
  },
  {
    id: 'writing_1',
    category: 'hard_skills',
    text: "Quel est votre niveau en rédaction professionnelle (rapports, propositions, synthèses) ?",
    options: [
      { value: 1, label: "Strict minimum" },
      { value: 2, label: "Textes simples" },
      { value: 3, label: "Documents structurés" },
      { value: 4, label: "Écrits cités en exemple" },
      { value: 5, label: "Atout majeur" },
    ]
  },
  {
    id: 'sales_1',
    category: 'hard_skills',
    text: "Avez-vous déjà eu une expérience de vente, de prospection ou de relation client ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Très ponctuellement" },
      { value: 3, label: "Régulièrement dans mon poste" },
      { value: 4, label: "La vente est au cœur de mon métier" },
      { value: 5, label: "Je forme les autres à la vente" },
    ]
  },
];

export const VALUES_QUESTIONS: Question[] = [
  {
    id: 'val_1',
    category: 'values',
    text: "Quelle importance accordez-vous à l'impact social ou environnemental de votre travail ?",
    options: [
      { value: 1, label: "Négligeable" },
      { value: 2, label: "Faible" },
      { value: 3, label: "Modérée" },
      { value: 4, label: "Élevée" },
      { value: 5, label: "Cruciale" },
    ]
  },
  {
    id: 'val_2',
    category: 'values',
    text: "L'équilibre vie pro/vie perso est-il pour vous une priorité ?",
    options: [
      { value: 1, label: "Secondaire" },
      { value: 2, label: "Utile" },
      { value: 3, label: "Important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "Non négociable" },
    ]
  },
  {
    id: 'auto_1',
    category: 'values',
    text: "L'autonomie dans votre travail est-elle importante pour vous ?",
    options: [
      { value: 1, label: "Préfère être guidé" },
      { value: 2, label: "Un peu d'autonomie" },
      { value: 3, label: "Autonomie importante" },
      { value: 4, label: "Très importante" },
      { value: 5, label: "Autonomie exclusive" },
    ]
  },
  {
    id: 'reco_1',
    category: 'values',
    text: "Quelle importance donnez-vous à la reconnaissance (statut, salaire, titre) ?",
    options: [
      { value: 1, label: "Aucune importance" },
      { value: 2, label: "Faible" },
      { value: 3, label: "Modérée" },
      { value: 4, label: "Importante" },
      { value: 5, label: "Essentielle" },
    ]
  },
  {
    id: 'secu_1',
    category: 'values',
    text: "La sécurité de l'emploi (CDI, stabilité) est-elle un critère déterminant ?",
    options: [
      { value: 1, label: "Pas du tout, je préfère l'aventure" },
      { value: 2, label: "Peu important" },
      { value: 3, label: "Important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "C'est ma priorité absolue" },
    ]
  },
  {
    id: 'prog_1',
    category: 'values',
    text: "La possibilité de progresser et d'évoluer est-elle cruciale pour vous ?",
    options: [
      { value: 1, label: "Satisfait sans progression" },
      { value: 2, label: "C'est un plus" },
      { value: 3, label: "C'est important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "Évolution indispensable" },
    ]
  },
  {
    id: 'meaning_1',
    category: 'values',
    text: "Avez-vous besoin de trouver du sens dans votre travail ?",
    options: [
      { value: 1, label: "Aucun besoin de sens" },
      { value: 2, label: "Peu essentiel" },
      { value: 3, label: "C'est assez important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "Sens indispensable" },
    ]
  },
  {
    id: 'teamspirit_1',
    category: 'values',
    text: "Quelle importance accordez-vous à l'ambiance et à la cohésion d'équipe ?",
    options: [
      { value: 1, label: "Secondaire, je suis là pour travailler" },
      { value: 2, label: "C'est un plus" },
      { value: 3, label: "Important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "Essentiel, je choisis un poste pour l'équipe" },
    ]
  },
  {
    id: 'challenge_1',
    category: 'values',
    text: "Recherchez-vous des défis stimulants ou préférez-vous la maîtrise de votre zone de confort ?",
    options: [
      { value: 1, label: "Zone de confort privilégiée" },
      { value: 2, label: "Plutôt zone de confort" },
      { value: 3, label: "Un équilibre entre les deux" },
      { value: 4, label: "Je cherche régulièrement des défis" },
      { value: 5, label: "Défis permanents" },
    ]
  },
  {
    id: 'ethics_1',
    category: 'values',
    text: "L'éthique et les valeurs de l'entreprise qui vous emploie sont-elles importantes ?",
    options: [
      { value: 1, label: "Salaire avant tout" },
      { value: 2, label: "Regard superficiel" },
      { value: 3, label: "C'est un critère parmi d'autres" },
      { value: 4, label: "Fierté de l'employeur" },
      { value: 5, label: "Éthique indispensable" },
    ]
  },
];

export const ENVIRONMENT_QUESTIONS: Question[] = [
  {
    id: 'env_1',
    category: 'environment',
    text: "Préférez-vous travailler seul ou en équipe ?",
    options: [
      { value: 1, label: "Exclusivement seul" },
      { value: 2, label: "Plutôt seul" },
      { value: 3, label: "Mixte" },
      { value: 4, label: "Plutôt en équipe" },
      { value: 5, label: "Exclusivement en équipe" },
    ]
  },
  {
    id: 'env_2',
    category: 'environment',
    text: "Comment réagissez-vous face à l'imprévisibilité et au changement fréquent ?",
    options: [
      { value: 1, label: "Déstabilisé" },
      { value: 2, label: "Inconfortable" },
      { value: 3, label: "Adaptable" },
      { value: 4, label: "Stimulé" },
      { value: 5, label: "À mon meilleur" },
    ]
  },
  {
    id: 'remote_1',
    category: 'environment',
    text: "Quel est votre rapport au télétravail ?",
    options: [
      { value: 1, label: "Refus du télétravail" },
      { value: 2, label: "1 jour par semaine me suffirait" },
      { value: 3, label: "2-3 jours par semaine" },
      { value: 4, label: "Full remote accepté" },
      { value: 5, label: "Full remote privilégié" },
    ]
  },
  {
    id: 'mgmt_1',
    category: 'environment',
    text: "Quel style de management vous correspond le mieux ?",
    options: [
      { value: 1, label: "Management directif (instructions claires)" },
      { value: 2, label: "Management participatif (je donne mon avis)" },
      { value: 3, label: "Management par objectifs (autonomie)" },
      { value: 4, label: "Management collaboratif (co-construction)" },
      { value: 5, label: "Pas de management (auto-gestion)" },
    ]
  },
  {
    id: 'rhythm_1',
    category: 'environment',
    text: "Quel rythme de travail préférez-vous ?",
    options: [
      { value: 1, label: "Routine stable et prévisible" },
      { value: 2, label: "Plutôt stable avec quelques variations" },
      { value: 3, label: "Équilibré entre routine et nouveauté" },
      { value: 4, label: "Dynamique avec des challenges fréquents" },
      { value: 5, label: "Ultra-dynamique, chaque jour est différent" },
    ]
  },
  {
    id: 'struct_1',
    category: 'environment',
    text: "Préférez-vous un environnement très structuré ou flexible ?",
    options: [
      { value: 1, label: "Très structuré, process définis" },
      { value: 2, label: "Plutôt structuré" },
      { value: 3, label: "Mixte" },
      { value: 4, label: "Plutôt flexible" },
      { value: 5, label: "Totalement flexible, je crée mes propres process" },
    ]
  },
  {
    id: 'size_1',
    category: 'environment',
    text: "Dans quel type de structure vous épanouissez-vous le plus ?",
    options: [
      { value: 1, label: "Grand groupe (plus de 5000 salariés)" },
      { value: 2, label: "ETI (250-5000 salariés)" },
      { value: 3, label: "PME (10-250 salariés)" },
      { value: 4, label: "Startup (moins de 10 salariés)" },
      { value: 5, label: "Indépendant / freelance" },
    ]
  },
  {
    id: 'learnenv_1',
    category: 'environment',
    text: "L'entreprise doit-elle vous offrir des formations et du développement continu ?",
    options: [
      { value: 1, label: "Pas indispensable" },
      { value: 2, label: "C'est un plus" },
      { value: 3, label: "Important" },
      { value: 4, label: "Très important" },
      { value: 5, label: "Je ne rejoins que des entreprises qui forment" },
    ]
  },
  {
    id: 'travel_1',
    category: 'environment',
    text: "Quel est votre rapport aux déplacements professionnels ?",
    options: [
      { value: 1, label: "Refus total" },
      { value: 2, label: "Occasionnels et courts" },
      { value: 3, label: "Réguliers dans la région" },
      { value: 4, label: "Nationaux acceptés" },
      { value: 5, label: "Internationaux, je suis très mobile" },
    ]
  },
  {
    id: 'collabenv_1',
    category: 'environment',
    text: "Quel est votre mode de collaboration préféré ?",
    options: [
      { value: 1, label: "Chacun sa tâche, peu d'interactions" },
      { value: 2, label: "Réunions planifiées uniquement" },
      { value: 3, label: "Mixte réunions et échanges spontanés" },
      { value: 4, label: "Collaboration constante et transparente" },
      { value: 5, label: "Mode agile avec rituels quotidiens" },
    ]
  },
];

// ============================================================
// PARTIE 1.5 — Questions rédactionnelles (Premium)
// ============================================================

export const OPEN_ENDED_QUESTIONS: OpenQuestion[] = [
  {
    id: 'open_success',
    category: 'open_ended',
    text: "Décrivez votre plus belle réussite professionnelle. Qu'avez-vous accompli dont vous êtes le plus fier ?",
    placeholder: "Racontez le contexte, votre rôle, les résultats obtenus...",
  },
  {
    id: 'open_personal',
    category: 'open_ended',
    text: "Quelle réalisation personnelle (hors travail) révèle le mieux qui vous êtes ?",
    placeholder: "Un projet, un défi, une passion, un engagement...",
  },
  {
    id: 'open_obstacle',
    category: 'open_ended',
    text: "Décrivez une situation professionnelle difficile que vous avez surmontée. Comment avez-vous fait ?",
    placeholder: "Le problème, votre approche, la solution...",
  },
  {
    id: 'open_change',
    category: 'open_ended',
    text: "Si vous pouviez changer une chose dans votre vie professionnelle aujourd'hui, que changeriez-vous et pourquoi ?",
    placeholder: "Expliquez votre motivation profonde...",
  },
  {
    id: 'open_dream',
    category: 'open_ended',
    text: "Quel est le métier ou le domaine qui vous fait rêver, même si vous pensez qu'il n'est pas pour vous ?",
    placeholder: "Laissez-vous aller, sans vous censurer...",
  },
  {
    id: 'open_strength',
    category: 'open_ended',
    text: "Selon vos proches (collègues, amis, famille), quelle est votre plus grande qualité ?",
    placeholder: "Que disent-ils de vous ? Donnez un exemple concret...",
  },
];

// ============================================================
// PARTIE 1.6 — Questions psychologiques approfondies (Premium)
// ============================================================

export const PSYCHO_QUESTIONS: Question[] = [
  // Intelligence émotionnelle
  {
    id: 'psy_ei1',
    category: 'soft_skills',
    text: "Arrivez-vous à identifier vos émotions sur le moment et à comprendre leur origine ?",
    options: [
      { value: 1, label: "Très difficilement" },
      { value: 2, label: "Parfois, après coup" },
      { value: 3, label: "Souvent" },
      { value: 4, label: "Très souvent" },
      { value: 5, label: "C'est une seconde nature chez moi" },
    ]
  },
  {
    id: 'psy_ei2',
    category: 'soft_skills',
    text: "Comment réagissez-vous quand un collègue exprime une émotion forte (colère, tristesse, joie) ?",
    options: [
      { value: 1, label: "Je suis mal à l'aise et j'évite" },
      { value: 2, label: "Je ne sais pas trop quoi faire" },
      { value: 3, label: "J'écoute sans vraiment savoir comment aider" },
      { value: 4, label: "J'accueille l'émotion et j'essaie d'aider" },
      { value: 5, label: "Je sais exactement comment accompagner chaque émotion" },
    ]
  },
  {
    id: 'psy_ei3',
    category: 'soft_skills',
    text: "Savez-vous dire non quand une demande dépasse vos limites ou vos valeurs ?",
    options: [
      { value: 1, label: "Je n'y arrive jamais" },
      { value: 2, label: "Difficilement, avec beaucoup de culpabilité" },
      { value: 3, label: "Ça dépend des situations" },
      { value: 4, label: "La plupart du temps, je pose mes limites" },
      { value: 5, label: "C'est naturel et sans culpabilité" },
    ]
  },
  {
    id: 'psy_ei4',
    category: 'soft_skills',
    text: "Comment gérez-vous la frustration quand les choses ne se passent pas comme prévu ?",
    options: [
      { value: 1, label: "Je rumine longtemps" },
      { value: 2, label: "Je suis contrarié mais je finis par lâcher prise" },
      { value: 3, label: "Je cherche une alternative rapidement" },
      { value: 4, label: "J'accepte et je pivote avec agilité" },
      { value: 5, label: "Je transforme la frustration en opportunité d'apprentissage" },
    ]
  },
  // Motivation et drivers
  {
    id: 'psy_mot1',
    category: 'values',
    text: "Qu'est-ce qui vous motive le plus profondément dans votre travail ?",
    options: [
      { value: 1, label: "La sécurité financière" },
      { value: 2, label: "La reconnaissance et le statut" },
      { value: 3, label: "L'apprentissage et le développement" },
      { value: 4, label: "L'impact et la contribution" },
      { value: 5, label: "La liberté et l'autonomie" },
    ]
  },
  {
    id: 'psy_mot2',
    category: 'values',
    text: "Quel type de récompense vous stimule le plus ?",
    options: [
      { value: 1, label: "Financière (salaire, primes)" },
      { value: 2, label: "Symbolique (titre, reconnaissance publique)" },
      { value: 3, label: "Sociale (gratitude, feedback positif)" },
      { value: 4, label: "Intrinsèque (fierté personnelle, sens)" },
      { value: 5, label: "Développementale (nouvelles compétences)" },
    ]
  },
  {
    id: 'psy_mot3',
    category: 'values',
    text: "Face à un objectif ambitieux, qu'est-ce qui vous fait tenir sur la durée ?",
    options: [
      { value: 1, label: "La peur de l'échec" },
      { value: 2, label: "La pression externe (deadline, attentes)" },
      { value: 3, label: "La discipline et les habitudes" },
      { value: 4, label: "La vision du résultat final" },
      { value: 5, label: "Le plaisir du processus lui-même" },
    ]
  },
  // Style cognitif
  {
    id: 'psy_cog1',
    category: 'hard_skills',
    text: "Quand vous apprenez quelque chose de nouveau, comment procédez-vous ?",
    options: [
      { value: 1, label: "Je lis la théorie avant tout" },
      { value: 2, label: "Je regarde des exemples concrets" },
      { value: 3, label: "J'alterne théorie et pratique" },
      { value: 4, label: "Je pratique directement, j'apprends en faisant" },
      { value: 5, label: "Je crée mon propre projet pour apprendre" },
    ]
  },
  {
    id: 'psy_cog2',
    category: 'hard_skills',
    text: "Comment prenez-vous une décision importante ?",
    options: [
      { value: 1, label: "Je suis mon instinct" },
      { value: 2, label: "Je demande l'avis de personnes de confiance" },
      { value: 3, label: "Je pèse le pour et le contre" },
      { value: 4, label: "J'analyse les données disponibles" },
      { value: 5, label: "Je combine données, intuition et avis extérieur" },
    ]
  },
  {
    id: 'psy_cog3',
    category: 'hard_skills',
    text: "Dans un groupe, quel rôle prenez-vous naturellement ?",
    options: [
      { value: 1, label: "L'exécutant qui fait avancer les choses" },
      { value: 2, label: "Le soutien qui veille à l'harmonie" },
      { value: 3, label: "L'analyste qui pose les bonnes questions" },
      { value: 4, label: "Le leader qui donne la direction" },
      { value: 5, label: "Le créatif qui apporte des idées nouvelles" },
    ]
  },
  {
    id: 'psy_cog4',
    category: 'hard_skills',
    text: "Comment réagissez-vous face à l'ambiguïté ou au manque d'information ?",
    options: [
      { value: 1, label: "Je suis bloqué, j'attends d'avoir toutes les infos" },
      { value: 2, label: "Je cherche à réduire l'incertitude au maximum" },
      { value: 3, label: "Je fais des hypothèses et je teste" },
      { value: 4, label: "J'avance avec ce que j'ai et je m'adapte" },
      { value: 5, label: "L'incertitude me stimule, j'improvise avec aisance" },
    ]
  },
  // Leadership & influence
  {
    id: 'psy_lead1',
    category: 'soft_skills',
    text: "Comment obtenez-vous l'adhésion des autres à vos idées ?",
    options: [
      { value: 1, label: "J'impose ma vision" },
      { value: 2, label: "Je présente des arguments logiques" },
      { value: 3, label: "Je construis une relation de confiance" },
      { value: 4, label: "J'implique les autres dans la construction de l'idée" },
      { value: 5, label: "J'inspire par l'exemple et la vision" },
    ]
  },
  {
    id: 'psy_lead2',
    category: 'soft_skills',
    text: "Face à une personne qui résiste au changement, quelle est votre approche ?",
    options: [
      { value: 1, label: "Je passe en force" },
      { value: 2, label: "J'explique rationnellement pourquoi c'est nécessaire" },
      { value: 3, label: "J'écoute ses craintes et je rassure" },
      { value: 4, label: "Je l'accompagne pas à pas dans la transition" },
      { value: 5, label: "Je transforme sa résistance en engagement" },
    ]
  },
  {
    id: 'psy_lead3',
    category: 'soft_skills',
    text: "Comment gérez-vous l'échec d'un projet que vous meniez ?",
    options: [
      { value: 1, label: "Je cherche des excuses ou des responsables" },
      { value: 2, label: "Je me remets en question difficilement" },
      { value: 3, label: "J'analyse ce qui n'a pas fonctionné" },
      { value: 4, label: "Je tire des leçons et je partage avec l'équipe" },
      { value: 5, label: "Je considère l'échec comme une étape nécessaire vers la réussite" },
    ]
  },
  // Rapport au travail
  {
    id: 'psy_work1',
    category: 'environment',
    text: "Quel est votre rapport à l'autorité hiérarchique ?",
    options: [
      { value: 1, label: "Je l'accepte sans la remettre en question" },
      { value: 2, label: "Je la respecte mais je garde mes distances" },
      { value: 3, label: "Je collabore d'égal à égal" },
      { value: 4, label: "Je la remets en question si nécessaire" },
      { value: 5, label: "Je préfère une structure sans hiérarchie" },
    ]
  },
  {
    id: 'psy_work2',
    category: 'environment',
    text: "Quelle est votre attitude face aux règles et aux process établis ?",
    options: [
      { value: 1, label: "Je les suis à la lettre" },
      { value: 2, label: "Je les suis mais je trouve ça contraignant" },
      { value: 3, label: "Je les suis quand ils ont du sens" },
      { value: 4, label: "Je les adapte quand c'est nécessaire" },
      { value: 5, label: "Je préfère créer mes propres méthodes" },
    ]
  },
  {
    id: 'psy_work3',
    category: 'environment',
    text: "Comment vivez-vous la compétition dans un environnement professionnel ?",
    options: [
      { value: 1, label: "Je la fuis, elle me stresse" },
      { value: 2, label: "Je la vis mal mais je fais avec" },
      { value: 3, label: "Neutre, ni positive ni négative" },
      { value: 4, label: "Elle me stimule positivement" },
      { value: 5, label: "Je m'épanouis dans la compétition" },
    ]
  },
  // Résilience et croissance
  {
    id: 'psy_res1',
    category: 'learning_adaptability',
    text: "Comment rebondissez-vous après un échec ou une déception professionnelle ?",
    options: [
      { value: 1, label: "Difficilement, ça me marque longtemps" },
      { value: 2, label: "Je mets du temps à m'en remettre" },
      { value: 3, label: "J'analyse et je passe à autre chose" },
      { value: 4, label: "J'en tire des leçons et je rebondis vite" },
      { value: 5, label: "Chaque échec me rend plus fort, je rebondis immédiatement" },
    ]
  },
  {
    id: 'psy_res2',
    category: 'learning_adaptability',
    text: "Quel est votre rapport au feedback négatif ou à la critique ?",
    options: [
      { value: 1, label: "Je le prends très mal, c'est une attaque personnelle" },
      { value: 2, label: "Je suis sur la défensive" },
      { value: 3, label: "Je l'écoute mais ça me touche" },
      { value: 4, label: "Je l'accepte et je cherche à m'améliorer" },
      { value: 5, label: "Je le recherche activement pour progresser" },
    ]
  },
  {
    id: 'psy_res3',
    category: 'learning_adaptability',
    text: "Êtes-vous capable de reconnaître vos erreurs et de vous excuser sincèrement ?",
    options: [
      { value: 1, label: "Très difficilement" },
      { value: 2, label: "Parfois, selon le contexte" },
      { value: 3, label: "La plupart du temps" },
      { value: 4, label: "Presque toujours, c'est important pour moi" },
      { value: 5, label: "C'est un réflexe, l'humilité est une force" },
    ]
  },
];

// ============================================================
// PARTIE 2 — Connaissances IA & Informatique
// ============================================================

export const DIGITAL_CULTURE_QUESTIONS: Question[] = [
  {
    id: 'dig_1',
    category: 'digital_culture',
    text: "Utilisez-vous des outils collaboratifs en ligne (Google Workspace, Notion, Slack, Trello, Teams, etc.) ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "J'en utilise 1 occasionnellement" },
      { value: 3, label: "J'en utilise plusieurs régulièrement" },
      { value: 4, label: "Maîtrise avancée" },
      { value: 5, label: "Expert, forme les autres" },
    ]
  },
  {
    id: 'dig_2',
    category: 'digital_culture',
    text: "Comment gérez-vous la sécurité de vos données numériques (mots de passe, sauvegardes, phishing) ?",
    options: [
      { value: 1, label: "Aucune attention" },
      { value: 2, label: "J'utilise les mêmes mots de passe partout" },
      { value: 3, label: "J'ai quelques bonnes pratiques" },
      { value: 4, label: "J'applique les règles essentielles" },
      { value: 5, label: "Priorité absolue" },
    ]
  },
  {
    id: 'dig_3',
    category: 'digital_culture',
    text: "Savez-vous ce qu'est le Cloud et à quoi il sert ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Connaissance vague" },
      { value: 3, label: "J'utilise des services cloud (Drive, iCloud, Dropbox)" },
      { value: 4, label: "Bonne compréhension" },
      { value: 5, label: "Expérience pratique" },
    ]
  },
  {
    id: 'dig_4',
    category: 'digital_culture',
    text: "Faites-vous une veille sur les nouvelles technologies ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Rarement, via les réseaux sociaux" },
      { value: 3, label: "Régulièrement, des newsletters/articles" },
      { value: 4, label: "C'est une habitude quotidienne" },
      { value: 5, label: "Je contribue à des communautés tech" },
    ]
  },
  {
    id: 'dig_5',
    category: 'digital_culture',
    text: "Connaissez-vous le vocabulaire de base de l'informatique (API, backend, frontend, base de données, open source) ?",
    options: [
      { value: 1, label: "Aucun de ces termes" },
      { value: 2, label: "1 ou 2 termes" },
      { value: 3, label: "Environ la moitié" },
      { value: 4, label: "La plupart" },
      { value: 5, label: "Tous et je peux les expliquer" },
    ]
  },
  {
    id: 'dig_6',
    category: 'digital_culture',
    text: "Utilisez-vous les réseaux sociaux professionnels (LinkedIn, GitHub, Malt) ?",
    options: [
      { value: 1, label: "Aucun" },
      { value: 2, label: "J'ai un compte LinkedIn basique" },
      { value: 3, label: "LinkedIn actif + 1 autre" },
      { value: 4, label: "Plusieurs plateformes actives" },
      { value: 5, label: "Je construis ma marque personnelle activement" },
    ]
  },
  {
    id: 'dig_7',
    category: 'digital_culture',
    text: "Comment résolvez-vous un problème informatique inconnu ?",
    options: [
      { value: 1, label: "Demande d'aide directe" },
      { value: 2, label: "Recherche Google" },
      { value: 3, label: "Forums spécialisés" },
      { value: 4, label: "Documentation officielle" },
      { value: 5, label: "Débug autonome" },
    ]
  },
  {
    id: 'dig_8',
    category: 'digital_culture',
    text: "Quel est votre rapport aux mises à jour logicielles et nouvelles versions ?",
    options: [
      { value: 1, label: "Évitement maximal" },
      { value: 2, label: "Uniquement si obligé" },
      { value: 3, label: "Mises à jour régulières" },
      { value: 4, label: "Installation immédiate" },
      { value: 5, label: "Beta/early access" },
    ]
  },
];

export const AI_KNOWLEDGE_QUESTIONS: Question[] = [
  {
    id: 'ai_k1',
    category: 'ai_knowledge',
    text: "Savez-vous ce qu'est l'intelligence artificielle et comment elle fonctionne ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "J'ai une idée vague" },
      { value: 3, label: "Je comprends les principes de base" },
      { value: 4, label: "Je comprends bien les différents types d'IA" },
      { value: 5, label: "Je pourrais l'expliquer en détail" },
    ]
  },
  {
    id: 'ai_k2',
    category: 'ai_knowledge',
    text: "Connaissez-vous la différence entre IA, Machine Learning et Deep Learning ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "J'ai entendu ces termes" },
      { value: 3, label: "Je connais les différences principales" },
      { value: 4, label: "Je les comprends bien" },
      { value: 5, label: "Je pourrais former quelqu'un sur le sujet" },
    ]
  },
  {
    id: 'ai_k3',
    category: 'ai_knowledge',
    text: "Quels outils d'IA générative connaissez-vous (ChatGPT, Claude, Gemini, Copilot, Midjourney) ?",
    options: [
      { value: 1, label: "Aucun" },
      { value: 2, label: "J'en connais 1" },
      { value: 3, label: "J'en connais 2 ou 3" },
      { value: 4, label: "J'en connais la plupart" },
      { value: 5, label: "Je les connais tous et leurs spécificités" },
    ]
  },
  {
    id: 'ai_k4',
    category: 'ai_knowledge',
    text: "Utilisez-vous des outils d'IA dans votre quotidien ou votre travail ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Rarement, pour tester" },
      { value: 3, label: "Régulièrement pour certaines tâches" },
      { value: 4, label: "Quotidiennement" },
      { value: 5, label: "L'IA est au cœur de mon workflow" },
    ]
  },
  {
    id: 'ai_k5',
    category: 'ai_knowledge',
    text: "Savez-vous ce qu'est le prompt engineering ?",
    options: [
      { value: 1, label: "Jamais entendu parler" },
      { value: 2, label: "Connaissance vague" },
      { value: 3, label: "Je comprends le concept" },
      { value: 4, label: "Je pratique régulièrement" },
      { value: 5, label: "C'est l'une de mes compétences clés" },
    ]
  },
  {
    id: 'ai_k6',
    category: 'ai_knowledge',
    text: "Connaissez-vous les limites et les risques de l'IA (hallucinations, biais, désinformation) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "J'ai quelques notions" },
      { value: 3, label: "Je les connais" },
      { value: 4, label: "Je les comprends bien" },
      { value: 5, label: "Je pourrais donner une formation dessus" },
    ]
  },
  {
    id: 'ai_k7',
    category: 'ai_knowledge',
    text: "Savez-vous comment l'IA peut être utilisée dans un contexte professionnel (automatisation, analyse, création) ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "J'ai vu quelques exemples" },
      { value: 3, label: "Je connais plusieurs cas d'usage" },
      { value: 4, label: "J'ai déjà mis en œuvre des solutions IA" },
      { value: 5, label: "Je conseille des entreprises sur le sujet" },
    ]
  },
  {
    id: 'ai_k8',
    category: 'ai_knowledge',
    text: "Connaissez-vous les enjeux éthiques liés à l'IA (RGPD, AI Act, transparence) ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Connaissance vague" },
      { value: 3, label: "Je connais les principaux enjeux" },
      { value: 4, label: "Je suis bien informé" },
      { value: 5, label: "C'est un sujet que je maîtrise" },
    ]
  },
  {
    id: 'ai_k9',
    category: 'ai_knowledge',
    text: "Savez-vous ce qu'est un modèle de langage (LLM) et comment il est entraîné ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "J'ai une vague idée" },
      { value: 3, label: "Je comprends les principes" },
      { value: 4, label: "Je comprends bien l'entraînement" },
      { value: 5, label: "J'ai déjà fine-tuné un modèle" },
    ]
  },
  {
    id: 'ai_k10',
    category: 'ai_knowledge',
    text: "Connaissez-vous les modèles d'IA open source (Llama, Mistral, Stable Diffusion) ?",
    options: [
      { value: 1, label: "Aucun" },
      { value: 2, label: "Connaissance vague" },
      { value: 3, label: "J'en connais quelques-uns" },
      { value: 4, label: "J'en ai déjà utilisé" },
      { value: 5, label: "Je les utilise régulièrement" },
    ]
  },
];

export const AI_PRACTICE_QUESTIONS: Question[] = [
  {
    id: 'ai_p1',
    category: 'ai_practice',
    text: "Savez-vous rédiger un prompt efficace pour obtenir un résultat précis d'une IA ?",
    options: [
      { value: 1, label: "Je ne sais pas ce qu'est un prompt" },
      { value: 2, label: "J'écris des questions simples" },
      { value: 3, label: "Je structure mes demandes" },
      { value: 4, label: "J'utilise des techniques avancées (few-shot, rôle)" },
      { value: 5, label: "Je crée des prompts complexes et systématiques" },
    ]
  },
  {
    id: 'ai_p2',
    category: 'ai_practice',
    text: "Avez-vous déjà utilisé l'IA pour automatiser une tâche répétitive ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai essayé sans succès" },
      { value: 3, label: "Oui, des tâches simples" },
      { value: 4, label: "Oui, des processus complexes" },
      { value: 5, label: "Je construis des workflows automatisés avec l'IA" },
    ]
  },
  {
    id: 'ai_p3',
    category: 'ai_practice',
    text: "Utilisez-vous l'IA pour analyser des données ou générer des insights ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai expérimenté" },
      { value: 3, label: "Occasionnellement" },
      { value: 4, label: "Régulièrement" },
      { value: 5, label: "C'est un pilier de mon analyse" },
    ]
  },
  {
    id: 'ai_p4',
    category: 'ai_practice',
    text: "Avez-vous déjà utilisé l'IA pour créer du contenu (texte, images, vidéos) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai testé une fois" },
      { value: 3, label: "Occasionnellement pour m'aider" },
      { value: 4, label: "Régulièrement" },
      { value: 5, label: "L'IA fait partie intégrante de ma création" },
    ]
  },
  {
    id: 'ai_p5',
    category: 'ai_practice',
    text: "Savez-vous intégrer une API d'IA dans un outil ou une application ?",
    options: [
      { value: 1, label: "Je ne sais pas ce qu'est une API" },
      { value: 2, label: "Je connais le concept" },
      { value: 3, label: "J'ai déjà testé avec un outil no-code" },
      { value: 4, label: "Je l'ai fait avec du code" },
      { value: 5, label: "C'est dans mes compétences courantes" },
    ]
  },
  {
    id: 'ai_p6',
    category: 'ai_practice',
    text: "Avez-vous déjà construit un assistant ou agent IA personnalisé ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai exploré le concept" },
      { value: 3, label: "J'en ai créé un simple" },
      { value: 4, label: "J'en ai créé plusieurs" },
      { value: 5, label: "Je construis des agents complexes" },
    ]
  },
  {
    id: 'ai_p7',
    category: 'ai_practice',
    text: "Comment évaluez-vous la qualité d'une réponse générée par IA ?",
    options: [
      { value: 1, label: "Je fais confiance sans vérifier" },
      { value: 2, label: "Je vérifie si ça semble correct" },
      { value: 3, label: "Je croise avec d'autres sources" },
      { value: 4, label: "J'ai une méthode de vérification structurée" },
      { value: 5, label: "Je teste et itère systématiquement" },
    ]
  },
  {
    id: 'ai_p8',
    category: 'ai_practice',
    text: "Faites-vous partie de communautés ou forums sur l'IA (Discord, Reddit, LinkedIn groups) ?",
    options: [
      { value: 1, label: "Aucune" },
      { value: 2, label: "Je suis quelques comptes sur les réseaux" },
      { value: 3, label: "Je participe à 1-2 communautés" },
      { value: 4, label: "Je suis actif dans plusieurs communautés" },
      { value: 5, label: "Je contribue activement (posts, open source)" },
    ]
  },
];

export const PROGRAMMING_QUESTIONS: Question[] = [
  {
    id: 'prog_1',
    category: 'programming',
    text: "Avez-vous déjà écrit du code (quel que soit le langage) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai suivi un tutoriel débutant" },
      { value: 3, label: "Je code occasionnellement" },
      { value: 4, label: "Je code régulièrement" },
      { value: 5, label: "Je suis développeur" },
    ]
  },
  {
    id: 'prog_2',
    category: 'programming',
    text: "Connaissez-vous Python et son écosystème data/IA (Pandas, NumPy, Scikit-learn) ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Je connais Python de nom" },
      { value: 3, label: "Notions de base en Python" },
      { value: 4, label: "Bon niveau Python" },
      { value: 5, label: "Python est mon langage principal" },
    ]
  },
  {
    id: 'prog_3',
    category: 'programming',
    text: "Savez-vous écrire des requêtes SQL pour interroger une base de données ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "Je sais ce qu'est SQL" },
      { value: 3, label: "Requêtes basiques (SELECT, WHERE)" },
      { value: 4, label: "Requêtes avancées (JOIN, GROUP BY)" },
      { value: 5, label: "Je maîtrise SQL" },
    ]
  },
  {
    id: 'prog_4',
    category: 'programming',
    text: "Utilisez-vous des outils no-code ou low-code (Make, Zapier, Bubble, Airtable, n8n) ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Connaissance vague" },
      { value: 3, label: "J'en ai utilisé un ou deux" },
      { value: 4, label: "J'en utilise plusieurs régulièrement" },
      { value: 5, label: "Je construis des solutions complexes avec" },
    ]
  },
  {
    id: 'prog_5',
    category: 'programming',
    text: "Connaissez-vous Git et le versioning de code (GitHub, GitLab) ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Je sais ce que c'est" },
      { value: 3, label: "J'ai déjà utilisé (clone, commit, push)" },
      { value: 4, label: "Utilisation régulière (branches, PR)" },
      { value: 5, label: "Je maîtrise Git (rebase, CI/CD, actions)" },
    ]
  },
  {
    id: 'prog_6',
    category: 'programming',
    text: "Comprenez-vous la logique algorithmique (conditions, boucles, fonctions, variables) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "J'ai des notions très basiques" },
      { value: 3, label: "Je comprends les concepts" },
      { value: 4, label: "Je peux écrire un algorithme simple" },
      { value: 5, label: "Je conçois des algorithmes complexes" },
    ]
  },
  {
    id: 'prog_7',
    category: 'programming',
    text: "Avez-vous déjà créé un site web ou une application (même avec un outil no-code) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Avec un builder type Wix/Shopify" },
      { value: 3, label: "Avec un outil no-code avancé (Bubble, Webflow)" },
      { value: 4, label: "En codant une partie" },
      { value: 5, label: "De A à Z en code" },
    ]
  },
  {
    id: 'prog_8',
    category: 'programming',
    text: "Connaissez-vous JavaScript/TypeScript pour le développement web ?",
    options: [
      { value: 1, label: "Aucune connaissance" },
      { value: 2, label: "Je connais les noms" },
      { value: 3, label: "Notions de base" },
      { value: 4, label: "Bon niveau" },
      { value: 5, label: "C'est mon langage principal" },
    ]
  },
];

export const TECH_JOBS_QUESTIONS: Question[] = [
  {
    id: 'job_1',
    category: 'tech_jobs',
    text: "Connaissez-vous les principaux métiers du numérique (développeur, data analyst, chef de projet IT, UX/UI, cybersécurité, DevOps, product owner) ?",
    options: [
      { value: 1, label: "Aucun" },
      { value: 2, label: "J'en connais 1 ou 2" },
      { value: 3, label: "J'en connais 3 ou 4" },
      { value: 4, label: "J'en connais la plupart" },
      { value: 5, label: "Je les connais tous et leurs missions" },
    ]
  },
  {
    id: 'job_2',
    category: 'tech_jobs',
    text: "Savez-vous quel métier du numérique correspondrait le mieux à votre profil ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "J'ai quelques pistes vagues" },
      { value: 3, label: "J'ai 1 ou 2 métiers en tête" },
      { value: 4, label: "J'ai une idée assez précise" },
      { value: 5, label: "Je sais exactement vers quoi aller" },
    ]
  },
  {
    id: 'job_3',
    category: 'tech_jobs',
    text: "Connaissez-vous les formations et parcours pour entrer dans les métiers du numérique ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "J'ai fait quelques recherches" },
      { value: 3, label: "Je connais les principales voies" },
      { value: 4, label: "Je connais bien le paysage des formations" },
      { value: 5, label: "Je pourrais conseiller quelqu'un" },
    ]
  },
  {
    id: 'job_4',
    category: 'tech_jobs',
    text: "Le métier de Data Analyst vous intéresse-t-il (analyser des données, créer des dashboard, aider à la décision) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Un peu curieux" },
      { value: 3, label: "Intéressé" },
      { value: 4, label: "Très intéressé" },
      { value: 5, label: "C'est mon objectif" },
    ]
  },
  {
    id: 'job_5',
    category: 'tech_jobs',
    text: "Le métier de développeur / programmeur vous attire-t-il ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Légère curiosité" },
      { value: 3, label: "Ça m'intéresse" },
      { value: 4, label: "Très intéressé" },
      { value: 5, label: "Je veux en faire mon métier" },
    ]
  },
  {
    id: 'job_6',
    category: 'tech_jobs',
    text: "Le métier de Chef de Projet IT / Product Owner vous intéresse-t-il ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Un peu" },
      { value: 3, label: "Intéressé" },
      { value: 4, label: "Très intéressé" },
      { value: 5, label: "C'est ma vocation" },
    ]
  },
  {
    id: 'job_7',
    category: 'tech_jobs',
    text: "Les métiers du no-code/low-code vous intéressent-ils (créer des applications sans coder) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Un peu curieux" },
      { value: 3, label: "Intéressé" },
      { value: 4, label: "Très intéressé" },
      { value: 5, label: "Je veux en faire mon activité" },
    ]
  },
  {
    id: 'job_8',
    category: 'tech_jobs',
    text: "Connaissez-vous les salaires moyens dans les métiers du numérique ?",
    options: [
      { value: 1, label: "Aucune idée" },
      { value: 2, label: "Très vague" },
      { value: 3, label: "Pour quelques métiers" },
      { value: 4, label: "Assez précisément" },
      { value: 5, label: "Je connais les grilles par métier et expérience" },
    ]
  },
];

export const LEARNING_ADAPTABILITY_QUESTIONS: Question[] = [
  {
    id: 'learn_1',
    category: 'learning_adaptability',
    text: "Comment apprenez-vous de nouvelles compétences par vous-même ?",
    options: [
      { value: 1, label: "Cadre formel nécessaire" },
      { value: 2, label: "Tutoriels guidés" },
      { value: 3, label: "Alternance guidé/autodidacte" },
      { value: 4, label: "Majorité autodidacte" },
      { value: 5, label: "100% autodidacte" },
    ]
  },
  {
    id: 'learn_2',
    category: 'learning_adaptability',
    text: "Avez-vous déjà suivi une formation en ligne (MOOC, bootcamp, certification) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "1 formation courte" },
      { value: 3, label: "Plusieurs formations" },
      { value: 4, label: "Formation certifiante ou bootcamp" },
      { value: 5, label: "Je me forme en continu" },
    ]
  },
  {
    id: 'learn_3',
    category: 'learning_adaptability',
    text: "Face à un nouveau logiciel ou outil, comment réagissez-vous ?",
    options: [
      { value: 1, label: "Stress et évitement" },
      { value: 2, label: "Formation nécessaire" },
      { value: 3, label: "Exploration guidée" },
      { value: 4, label: "Exploration autonome" },
      { value: 5, label: "Immersion rapide" },
    ]
  },
  {
    id: 'learn_4',
    category: 'learning_adaptability',
    text: "Êtes-vous curieux des nouvelles technologies (vous testez de nouveaux outils, vous lisez sur le sujet) ?",
    options: [
      { value: 1, label: "Pas curieux du tout" },
      { value: 2, label: "Un peu si on m'en parle" },
      { value: 3, label: "Curieux, je teste parfois" },
      { value: 4, label: "Très curieux, je teste souvent" },
      { value: 5, label: "Je suis un early adopter systématique" },
    ]
  },
  {
    id: 'learn_5',
    category: 'learning_adaptability',
    text: "Participez-vous à des événements tech (meetups, hackathons, conférences) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "Une fois" },
      { value: 3, label: "Occasionnellement" },
      { value: 4, label: "Régulièrement" },
      { value: 5, label: "Je suis un habitué, j'y présente parfois" },
    ]
  },
  {
    id: 'learn_6',
    category: 'learning_adaptability',
    text: "Avez-vous déjà réalisé un projet personnel tech (site web, bot, automatisation, analyse de données) ?",
    options: [
      { value: 1, label: "Jamais" },
      { value: 2, label: "J'ai commencé sans finir" },
      { value: 3, label: "1 petit projet terminé" },
      { value: 4, label: "Plusieurs projets" },
      { value: 5, label: "Des projets complexes et aboutis" },
    ]
  },
  {
    id: 'learn_7',
    category: 'learning_adaptability',
    text: "Êtes-vous à l'aise pour apprendre en anglais (documentation, tutoriels, cours) ?",
    options: [
      { value: 1, label: "Pas du tout, je bloque" },
      { value: 2, label: "Difficilement" },
      { value: 3, label: "Je me débrouille" },
      { value: 4, label: "Plutôt à l'aise" },
      { value: 5, label: "Totalement à l'aise, c'est naturel" },
    ]
  },
  {
    id: 'learn_8',
    category: 'learning_adaptability',
    text: "Comment réagissez-vous face à l'échec ou à un bug que vous n'arrivez pas à résoudre ?",
    options: [
      { value: 1, label: "Abandon" },
      { value: 2, label: "Aide immédiate" },
      { value: 3, label: "Persévérance modérée" },
      { value: 4, label: "Longue persévérance" },
      { value: 5, label: "Défi motivant" },
    ]
  },
];

// ============================================================
// BILAN 1 — Bilan de compétences PUR (gratuit + premium)
// ============================================================

export const PURE_SKILLS_QUESTIONS: Question[] = [
  ...SOFT_SKILLS_QUESTIONS,
  ...HARD_SKILLS_QUESTIONS,
  ...VALUES_QUESTIONS,
  ...ENVIRONMENT_QUESTIONS,
];

// ============================================================
// BILAN 2 — Bilan complémentaire Nouvelles Technologies (premium)
// ============================================================

export const TECH_QUESTIONS: Question[] = [
  ...DIGITAL_CULTURE_QUESTIONS,
  ...AI_KNOWLEDGE_QUESTIONS,
  ...AI_PRACTICE_QUESTIONS,
  ...PROGRAMMING_QUESTIONS,
  ...TECH_JOBS_QUESTIONS,
  ...LEARNING_ADAPTABILITY_QUESTIONS,
];

// ============================================================
// Toutes les questions
// ============================================================

export const ALL_QUESTIONS: Question[] = [
  ...PURE_SKILLS_QUESTIONS,
  ...PSYCHO_QUESTIONS,
  ...ALL_EXTENDED_QUESTIONS,
  ...TECH_QUESTIONS,
];

// 12 questions gratuites : sous-ensemble du BILAN PUR uniquement
export const FREE_QUESTIONS: Question[] = [
  SOFT_SKILLS_QUESTIONS[0], // comm_1 - communication
  SOFT_SKILLS_QUESTIONS[1], // lead_1 - leadership
  HARD_SKILLS_QUESTIONS[0], // tech_1 - outils numériques
  HARD_SKILLS_QUESTIONS[1], // anal_1 - résolution problèmes
  HARD_SKILLS_QUESTIONS[3], // data_1 - analyse données
  VALUES_QUESTIONS[0],      // val_1 - impact social
  VALUES_QUESTIONS[1],      // val_2 - équilibre vie pro/perso
  VALUES_QUESTIONS[2],      // auto_1 - autonomie
  ENVIRONMENT_QUESTIONS[0], // env_1 - solo/équipe
  ENVIRONMENT_QUESTIONS[1], // env_2 - changement
  ENVIRONMENT_QUESTIONS[3], // mgmt_1 - management
  ENVIRONMENT_QUESTIONS[4], // rhythm_1 - rythme
];

// Questions premium = bilan pur (non-gratuites) + psycho + extended + technologique
export const PREMIUM_QUESTIONS: Question[] = [
  ...PURE_SKILLS_QUESTIONS.filter((q) => !FREE_QUESTIONS.find((fq) => fq.id === q.id)),
  ...PSYCHO_QUESTIONS,
  ...ALL_EXTENDED_QUESTIONS,
  ...TECH_QUESTIONS,
];

export const QUESTION_CATEGORIES = {
  soft_skills: { label: 'Soft Skills', icon: '', order: 1, type: 'pure' },
  hard_skills: { label: 'Hard Skills', icon: '', order: 2, type: 'pure' },
  values: { label: 'Valeurs & Motivations', icon: '', order: 3, type: 'pure' },
  environment: { label: 'Environnement de travail', icon: '', order: 4, type: 'pure' },
  digital_culture: { label: 'Culture Numérique', icon: '', order: 5, type: 'tech' },
  ai_knowledge: { label: 'IA - Connaissances', icon: '', order: 6, type: 'tech' },
  ai_practice: { label: 'IA - Pratique', icon: '', order: 7, type: 'tech' },
  programming: { label: 'Programmation & Tech', icon: '', order: 8, type: 'tech' },
  tech_jobs: { label: 'Métiers du Numérique', icon: '', order: 9, type: 'tech' },
  learning_adaptability: { label: 'Apprentissage & Adaptabilité', icon: '', order: 10, type: 'tech' },
} as const;

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;
export const FREE_QUESTIONS_COUNT = FREE_QUESTIONS.length;
export const PURE_QUESTIONS_COUNT = PURE_SKILLS_QUESTIONS.length;
export const TECH_QUESTIONS_COUNT = TECH_QUESTIONS.length;
