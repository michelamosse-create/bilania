import { Question, OpenQuestion } from '@/types';

// ============================================================
// 100 QUESTIONS APPROFONDIES — BILAN DE COMPÉTENCES
// 10 thématiques × ~10 questions
// ============================================================

// 1. Identité et parcours
export const IDENTITY_QUESTIONS: Question[] = [
  { id: 'id_age', category: 'soft_skills', text: "Quel est votre âge ?", options: [
    { value: 1, label: "Moins de 25 ans" }, { value: 2, label: "25-35 ans" }, { value: 3, label: "36-45 ans" }, { value: 4, label: "46-55 ans" }, { value: 5, label: "56 ans et plus" }] },
  { id: 'id_education', category: 'hard_skills', text: "Quel est votre niveau d'études ?", options: [
    { value: 1, label: "Bac ou moins" }, { value: 2, label: "Bac+2" }, { value: 3, label: "Bac+3/4" }, { value: 4, label: "Bac+5 et plus" }, { value: 5, label: "Doctorat" }] },
  { id: 'id_situation', category: 'environment', text: "Quelle est votre situation professionnelle actuelle ?", options: [
    { value: 1, label: "En poste (CDI)" }, { value: 2, label: "En poste (CDD/intérim)" }, { value: 3, label: "Freelance / indépendant" }, { value: 4, label: "En recherche d'emploi" }, { value: 5, label: "En reconversion" }] },
  { id: 'id_sector_change', category: 'environment', text: "Avez-vous déjà changé de secteur d'activité ?", options: [
    { value: 1, label: "Jamais" }, { value: 2, label: "Une fois" }, { value: 3, label: "Deux fois" }, { value: 4, label: "Trois fois ou plus" }, { value: 5, label: "J'ai toujours eu des secteurs variés" }] },
  { id: 'id_experience', category: 'hard_skills', text: "Combien d'années d'expérience professionnelle avez-vous ?", options: [
    { value: 1, label: "Moins de 2 ans" }, { value: 2, label: "2-5 ans" }, { value: 3, label: "6-10 ans" }, { value: 4, label: "11-20 ans" }, { value: 5, label: "Plus de 20 ans" }] },
  { id: 'id_mobility', category: 'environment', text: "Souhaitez-vous rester dans votre région actuelle ?", options: [
    { value: 1, label: "Oui, impératif" }, { value: 2, label: "Plutôt oui" }, { value: 3, label: "Je suis ouvert à d'autres régions" }, { value: 4, label: "Peu importe, je suis mobile" }, { value: 5, label: "Je souhaite partir à l'étranger" }] },
];

// 2. Motivations et valeurs
export const MOTIVATION_QUESTIONS: Question[] = [
  { id: 'mot_work_style', category: 'values', text: "Que préférez-vous ?", options: [
    { value: 1, label: "Travailler seul(e)" }, { value: 2, label: "Plutôt seul(e)" }, { value: 3, label: "Mix des deux" }, { value: 4, label: "Plutôt en équipe" }, { value: 5, label: "Exclusivement en équipe" }] },
  { id: 'mot_salary_meaning', category: 'values', text: "Accepteriez-vous une baisse de salaire pour un métier plus porteur de sens ?", options: [
    { value: 1, label: "Non, jamais" }, { value: 2, label: "Non, sauf petite baisse" }, { value: 3, label: "Cela dépend du montant" }, { value: 4, label: "Oui, probablement" }, { value: 5, label: "Oui, sans hésiter" }] },
  { id: 'mot_recognition', category: 'values', text: "La reconnaissance au travail passe avant tout par :", options: [
    { value: 1, label: "Le salaire" }, { value: 2, label: "Les félicitations du supérieur" }, { value: 3, label: "L'autonomie accordée" }, { value: 4, label: "L'impact de mon travail" }, { value: 5, label: "L'évolution de carrière" }] },
  { id: 'mot_variety', category: 'environment', text: "Préférez-vous un travail varié ou spécialisé ?", options: [
    { value: 1, label: "Très spécialisé" }, { value: 2, label: "Plutôt spécialisé" }, { value: 3, label: "Neutre" }, { value: 4, label: "Plutôt varié" }, { value: 5, label: "Très varié, je déteste la routine" }] },
];

// 3. Soft skills
export const BEHAVIOR_QUESTIONS: Question[] = [
  { id: 'beh_unexpected', category: 'soft_skills', text: "Face à un imprévu au travail, vous :", options: [
    { value: 1, label: "Paniquez" }, { value: 2, label: "Cherchez une solution seul(e)" }, { value: 3, label: "Demandez de l'aide" }, { value: 4, label: "Déléguez rapidement" }, { value: 5, label: "Analysez calmement et adaptez le plan" }] },{ id: 'beh_pressure', category: 'soft_skills', text: "Gérez-vous bien la pression des délais courts ?", options: [
    { value: 1, label: "Jamais, je perds mes moyens" }, { value: 2, label: "Rarement" }, { value: 3, label: "Parfois" }, { value: 4, label: "Souvent" }, { value: 5, label: "Toujours, je suis même plus performant" }] },
  { id: 'beh_instructions', category: 'environment', text: "Préférez-vous des consignes claires ou une liberté totale ?", options: [
    { value: 1, label: "Consignes très détaillées" }, { value: 2, label: "Plutôt des consignes" }, { value: 3, label: "Un équilibre" }, { value: 4, label: "Plutôt de la liberté" }, { value: 5, label: "Liberté totale, je crée mes propres règles" }] },
  { id: 'beh_meeting', category: 'soft_skills', text: "En réunion, vous parlez :", options: [
    { value: 1, label: "Presque jamais" }, { value: 2, label: "Très peu" }, { value: 3, label: "Juste quand nécessaire" }, { value: 4, label: "Souvent" }, { value: 5, label: "Beaucoup, j'anime les échanges" }] },
];

// 4. Compétences techniques
export const TECHNICAL_QUESTIONS: Question[] = [{ id: 'tech_excel', category: 'hard_skills', text: "Êtes-vous à l'aise avec les chiffres et Excel avancé ?", options: [
    { value: 1, label: "Pas du tout" }, { value: 2, label: "Fonctions de base" }, { value: 3, label: "Moyennement" }, { value: 4, label: "À l'aise (TCD, VBA)" }, { value: 5, label: "Expert, je forme les autres" }] },
  { id: 'tech_digital', category: 'digital_culture', text: "Quel est votre niveau en compétences digitales (SEO, réseaux sociaux, analytics) ?", options: [
    { value: 1, label: "Aucune connaissance" }, { value: 2, label: "Notions de base" }, { value: 3, label: "Intermédiaire" }, { value: 4, label: "Avancé" }, { value: 5, label: "Expert" }] },
  { id: 'tech_ia_use', category: 'ai_practice', text: "Utilisez-vous l'IA générative (ChatGPT, Claude, Midjourney) dans votre travail ?", options: [
    { value: 1, label: "Jamais" }, { value: 2, label: "Occasionnellement" }, { value: 3, label: "Régulièrement pour certaines tâches" }, { value: 4, label: "Quotidiennement" }, { value: 5, label: "L'IA est au cœur de mon workflow" }] },
  { id: 'tech_project_tool', category: 'hard_skills', text: "Quel outil de gestion de projet connaissez-vous ?", options: [
    { value: 1, label: "Aucun" }, { value: 2, label: "Trello / Asana (bases)" }, { value: 3, label: "Notion / Monday (intermédiaire)" }, { value: 4, label: "JIRA / MS Project (avancé)" }, { value: 5, label: "Je maîtrise plusieurs outils + méthodes agiles" }] },
];

// 5. Projet professionnel
export const PROJECT_QUESTIONS: Question[] = [
  { id: 'proj_clarity', category: 'values', text: "Avez-vous un métier précis en tête pour votre avenir ?", options: [
    { value: 1, label: "Aucune idée" }, { value: 2, label: "Quelques pistes vagues" }, { value: 3, label: "Plusieurs pistes sérieuses" }, { value: 4, label: "Une idée assez claire" }, { value: 5, label: "Oui, je sais exactement lequel" }] },
  { id: 'proj_role', category: 'environment', text: "Quel type de poste préférez-vous ?", options: [
    { value: 1, label: "Poste opérationnel" }, { value: 2, label: "Poste d'expertise technique" }, { value: 3, label: "Poste de coordination" }, { value: 4, label: "Poste d'encadrement" }, { value: 5, label: "Direction / stratégie" }] },
  { id: 'proj_entrepreneur', category: 'values', text: "Voulez-vous créer votre entreprise ?", options: [
    { value: 1, label: "Non, pas du tout" }, { value: 2, label: "Pas maintenant" }, { value: 3, label: "Peut-être un jour" }, { value: 4, label: "Oui, j'y pense sérieusement" }, { value: 5, label: "Oui, j'ai déjà un projet concret" }] },
  { id: 'proj_horizon', category: 'values', text: "À quel horizon souhaitez-vous concrétiser votre projet ?", options: [
    { value: 1, label: "Pas de projet défini" }, { value: 2, label: "Dans 2 ans ou plus" }, { value: 3, label: "Dans 1 an" }, { value: 4, label: "Dans 6 mois" }, { value: 5, label: "Dans 3 mois ou moins" }] },
  { id: 'proj_internship', category: 'learning_adaptability', text: "Accepteriez-vous un stage ou une alternance pour tester un nouveau métier ?", options: [
    { value: 1, label: "Non, impossible financièrement" }, { value: 2, label: "Non, ce n'est pas pour moi" }, { value: 3, label: "Si c'est rémunéré" }, { value: 4, label: "Oui, si c'est court" }, { value: 5, label: "Oui, sans hésiter" }] },
  { id: 'proj_met_pro', category: 'learning_adaptability', text: "Avez-vous déjà rencontré un professionnel du métier qui vous attire ?", options: [
    { value: 1, label: "Non, je ne sais pas comment faire" }, { value: 2, label: "Non, pas encore" }, { value: 3, label: "J'ai prévu de le faire" }, { value: 4, label: "Oui, une fois" }, { value: 5, label: "Oui, plusieurs fois" }] },
];

// 6. Freins et leviers
export const OBSTACLES_QUESTIONS: Question[] = [
  { id: 'obs_network', category: 'soft_skills', text: "Disposez-vous d'un réseau professionnel utile ?", options: [
    { value: 1, label: "Aucun réseau" }, { value: 2, label: "Très limité" }, { value: 3, label: "Quelques contacts" }, { value: 4, label: "Un bon réseau" }, { value: 5, label: "Un réseau large et actif" }] },
  { id: 'obs_support', category: 'values', text: "Votre entourage soutient-il votre projet de reconversion ?", options: [
    { value: 1, label: "Pas du tout, ils sont contre" }, { value: 2, label: "Plutôt mitigé" }, { value: 3, label: "Neutre, ils ne savent pas" }, { value: 4, label: "Plutôt oui" }, { value: 5, label: "Oui, totalement" }] },
  { id: 'obs_studies', category: 'learning_adaptability', text: "Êtes-vous prêt(e) à reprendre des études ?", options: [
    { value: 1, label: "Non, impossible" }, { value: 2, label: "Seulement formations courtes (< 1 mois)" }, { value: 3, label: "Formations de quelques mois" }, { value: 4, label: "Oui, jusqu'à 1 an" }, { value: 5, label: "Oui, même longues (> 1 an)" }] },
  { id: 'obs_coached', category: 'learning_adaptability', text: "Avez-vous déjà été accompagné(e) par un coach ou conseiller en évolution ?", options: [
    { value: 1, label: "Non, jamais" }, { value: 2, label: "J'ai failli le faire" }, { value: 3, label: "Oui, une fois" }, { value: 4, label: "Oui, plusieurs fois" }, { value: 5, label: "Je suis actuellement accompagné(e)" }] },
  { id: 'obs_confidence', category: 'soft_skills', text: "Le manque de confiance en vous est-il un frein ?", options: [
    { value: 1, label: "Oui, c'est mon plus gros obstacle" }, { value: 2, label: "Très souvent" }, { value: 3, label: "Parfois" }, { value: 4, label: "Rarement" }, { value: 5, label: "Jamais, j'ai une grande confiance" }] },
];

// 7. Environnement de travail souhaité
export const WORKPLACE_QUESTIONS: Question[] = [
  { id: 'wp_status', category: 'environment', text: "Quel statut souhaitez-vous ?", options: [
    { value: 1, label: "Salarié CDI" }, { value: 2, label: "Fonctionnaire" }, { value: 3, label: "CDD / intérim" }, { value: 4, label: "Indépendant / freelance" }, { value: 5, label: "Auto-entrepreneur" }] },{ id: 'wp_company_size', category: 'environment', text: "Quelle taille d'entreprise préférez-vous ?", options: [
    { value: 1, label: "Startup (1-10)" }, { value: 2, label: "PME (10-250)" }, { value: 3, label: "ETI (250-5000)" }, { value: 4, label: "Grand groupe (5000+)" }, { value: 5, label: "Association / ONG" }] },
  { id: 'wp_flexible', category: 'environment', text: "Des horaires flexibles sont-ils indispensables ?", options: [
    { value: 1, label: "Non, je préfère des horaires fixes" }, { value: 2, label: "Plutôt fixes" }, { value: 3, label: "Indifférent" }, { value: 4, label: "Plutôt flexibles" }, { value: 5, label: "Oui, indispensables" }] },
  { id: 'wp_travel', category: 'environment', text: "Combien de jours de déplacements par mois accepteriez-vous ?", options: [
    { value: 1, label: "0, je refuse tout déplacement" }, { value: 2, label: "1-3 jours" }, { value: 3, label: "4-8 jours" }, { value: 4, label: "Plus de 8 jours" }, { value: 5, label: "Autant que nécessaire, j'adore ça" }] },
];

// 8. Bilan personnel et aspirations
export const ASPIRATION_QUESTIONS: Question[] = [
  { id: 'asp_change_freq', category: 'values', text: "À quelle fréquence pensez-vous à changer de métier ?", options: [
    { value: 1, label: "Jamais, je n'y pense pas" }, { value: 2, label: "Rarement" }, { value: 3, label: "Parfois" }, { value: 4, label: "Souvent" }, { value: 5, label: "Chaque jour" }] },
  { id: 'asp_values_match', category: 'values', text: "Votre travail actuel (ou dernier) reflète-t-il vos valeurs ?", options: [
    { value: 1, label: "Pas du tout" }, { value: 2, label: "Très peu" }, { value: 3, label: "Partiellement" }, { value: 4, label: "En grande partie" }, { value: 5, label: "Totalement" }] },
  { id: 'asp_potential', category: 'values', text: "Avez-vous l'impression d'avoir utilisé tout votre potentiel ?", options: [
    { value: 1, label: "Pas du tout, je suis sous-exploité(e)" }, { value: 2, label: "Très peu" }, { value: 3, label: "À moitié" }, { value: 4, label: "En grande partie" }, { value: 5, label: "Oui, totalement" }] },
  { id: 'asp_success', category: 'values', text: "Le mot 'réussite' rime pour vous avec :", options: [
    { value: 1, label: "Argent / sécurité financière" }, { value: 2, label: "Reconnaissance sociale" }, { value: 3, label: "Liberté / indépendance" }, { value: 4, label: "Plaisir / épanouissement" }, { value: 5, label: "Impact / contribution au monde" }] },
  { id: 'asp_passion', category: 'values', text: "Préférez-vous un travail passionnant mais mal payé, ou bien payé mais sans passion ?", options: [
    { value: 1, label: "Bien payé, sans hésiter" }, { value: 2, label: "Plutôt bien payé" }, { value: 3, label: "Équilibre entre les deux" }, { value: 4, label: "Plutôt passionnant" }, { value: 5, label: "Passionnant, l'argent n'est pas ma priorité" }] },
];

// 9. Auto-évaluation
export const SELF_ASSESS_QUESTIONS: Question[] = [
  { id: 'self_employability', category: 'hard_skills', text: "Sur 5, quelle est votre employabilité actuelle (auto-évaluation) ?", options: [
    { value: 1, label: "1 - Très faible" }, { value: 2, label: "2 - Faible" }, { value: 3, label: "3 - Moyenne" }, { value: 4, label: "4 - Bonne" }, { value: 5, label: "5 - Excellente" }] },{ id: 'self_structure', category: 'environment', text: "Avez-vous besoin d'un cadre très structuré pour avancer ?", options: [
    { value: 1, label: "Toujours, sans cadre je suis perdu(e)" }, { value: 2, label: "Souvent" }, { value: 3, label: "Parfois" }, { value: 4, label: "Rarement" }, { value: 5, label: "Je crée mon propre cadre" }] },
  { id: 'self_style', category: 'soft_skills', text: "Êtes-vous plutôt :", options: [
    { value: 1, label: "Stratège (pense long terme)" }, { value: 2, label: "Exécutant (fait avancer)" }, { value: 3, label: "Créatif (imagine)" }, { value: 4, label: "Analyste (approfondit)" }, { value: 5, label: "Leader (fédère et dirige)" }] },
  { id: 'self_personality_test', category: 'learning_adaptability', text: "Avez-vous déjà fait un test de personnalité (MBTI, DISC, Big Five) ?", options: [
    { value: 1, label: "Jamais, je ne connais pas" }, { value: 2, label: "Non, mais j'aimerais" }, { value: 3, label: "Oui, un test gratuit en ligne" }, { value: 4, label: "Oui, un test sérieux" }, { value: 5, label: "Oui, plusieurs, je connais bien mon profil" }] },
];

// 10. Passage à l'action
export const ACTION_QUESTIONS: Question[] = [
  { id: 'act_hours', category: 'learning_adaptability', text: "Combien d'heures par semaine pouvez-vous consacrer à votre reconversion ?", options: [
    { value: 1, label: "Moins de 2h" }, { value: 2, label: "2-5h" }, { value: 3, label: "5-10h" }, { value: 4, label: "10-20h" }, { value: 5, label: "Plus de 20h" }] },
  { id: 'act_coaching', category: 'learning_adaptability', text: "Seriez-vous prêt(e) à être accompagné(e) par un conseiller en bilan de compétences ?", options: [
    { value: 1, label: "Non" }, { value: 2, label: "Peut-être" }, { value: 3, label: "Oui, si c'est gratuit" }, { value: 4, label: "Oui, même payant" }, { value: 5, label: "Oui, j'en cherche un activement" }] },
  { id: 'act_usefulness', category: 'values', text: "Pensez-vous que ce bilan de compétences est un outil utile pour vous ?", options: [
    { value: 1, label: "Pas du tout" }, { value: 2, label: "Peu" }, { value: 3, label: "Assez" }, { value: 4, label: "Beaucoup" }, { value: 5, label: "C'est exactement ce dont j'ai besoin" }] },
  { id: 'act_session', category: 'learning_adaptability', text: "Quel format préférez-vous pour avancer ?", options: [
    { value: 1, label: "Longue session hebdomadaire" }, { value: 2, label: "Quelques sessions par semaine" }, { value: 3, label: "Courts exercices chaque jour" }, { value: 4, label: "Format intensif sur quelques jours" }, { value: 5, label: "À mon rythme, sans contrainte" }] },
  { id: 'act_motivation', category: 'values', text: "Sur 5, quelle est votre motivation à changer ou évoluer aujourd'hui ?", options: [
    { value: 1, label: "1 - Aucune motivation" }, { value: 2, label: "2 - Faible" }, { value: 3, label: "3 - Moyenne" }, { value: 4, label: "4 - Forte" }, { value: 5, label: "5 - Maximale, je suis prêt(e) !" }] },
];

// Questions rédactionnelles supplémentaires
export const EXTENDED_OPEN_QUESTIONS: OpenQuestion[] = [
  { id: 'open_path', category: 'open_ended', text: "Décrivez votre parcours professionnel en 5 à 10 lignes.", placeholder: "Vos expériences, secteurs, évolutions..." },
  { id: 'open_top3', category: 'open_ended', text: "Quelles ont été vos 3 expériences professionnelles les plus marquantes et pourquoi ?", placeholder: "Décrivez chaque expérience et son impact..." },
  { id: 'open_training', category: 'open_ended', text: "Quelle formation continue avez-vous suivie ces 5 dernières années ?", placeholder: "Formations, certifications, MOOCs..." },
  { id: 'open_fulfilled', category: 'open_ended', text: "Décrivez une situation où vous vous êtes senti(e) pleinement épanoui(e) au travail.", placeholder: "Le contexte, votre rôle, ce qui vous a rendu heureux..." },
  { id: 'open_missing', category: 'open_ended', text: "Qu'est-ce qui vous a manqué dans vos précédents postes ?", placeholder: "Reconnaissance, autonomie, sens, évolution..." },
  { id: 'open_refuse', category: 'open_ended', text: "Que refuseriez-vous absolument dans un futur travail ?", placeholder: "Vos lignes rouges..." },
];

// Toutes les questions étendues
export const ALL_EXTENDED_QUESTIONS: Question[] = [
  ...IDENTITY_QUESTIONS,
  ...MOTIVATION_QUESTIONS,
  ...BEHAVIOR_QUESTIONS,
  ...TECHNICAL_QUESTIONS,
  ...PROJECT_QUESTIONS,
  ...OBSTACLES_QUESTIONS,
  ...WORKPLACE_QUESTIONS,
  ...ASPIRATION_QUESTIONS,
  ...SELF_ASSESS_QUESTIONS,
  ...ACTION_QUESTIONS,
];

export const EXTENDED_COUNT = ALL_EXTENDED_QUESTIONS.length;
export const EXTENDED_OPEN_COUNT = EXTENDED_OPEN_QUESTIONS.length;
