
import { Question } from './types';

const RATING_OPTIONS = [
  { value: 0, label: "Pas du tout / Jamais", points: 0 },
  { value: 1, label: "Débutant / Faible", points: 1 },
  { value: 2, label: "Intermédiaire / Moyen", points: 2 },
  { value: 3, label: "Confirmé / Bon", points: 3 },
  { value: 4, label: "Expert / Excellent", points: 4 },
];

export const ASSESSMENT_QUESTIONS: Question[] = [
  // PARTIE 1 : INFORMATIONS GÉNÉRALES (5 questions)
  {
    id: 'q1', part: 1, partTitle: "Profil Actuel", category: "Général",
    text: "Quelle est votre situation professionnelle actuelle ?",
    type: 'single',
    options: [
      { value: "cdi", label: "En poste (CDI)" },
      { value: "cdd", label: "En poste (CDD/Intérim)" },
      { value: "freelance", label: "Indépendant/Freelance" },
      { value: "recherche", label: "En recherche d'emploi" },
      { value: "reconversion", label: "En reconversion" },
    ]
  },
  {
    id: 'q2', part: 1, partTitle: "Profil Actuel", category: "Général",
    text: "Combien d'années d'expérience professionnelle avez-vous ?",
    type: 'single',
    options: [
      { value: "lt2", label: "Moins de 2 ans" },
      { value: "2-5", label: "2 à 5 ans" },
      { value: "5-10", label: "5 à 10 ans" },
      { value: "10-20", label: "10 à 20 ans" },
      { value: "gt20", label: "Plus de 20 ans" },
    ]
  },
  {
    id: 'q3', part: 1, partTitle: "Profil Actuel", category: "Secteurs",
    text: "Dans quel(s) secteur(s) d'activité avez-vous travaillé ?",
    type: 'multi',
    options: [
      { value: "commerce", label: "Commerce/Vente" },
      { value: "services", label: "Services/Conseil" },
      { value: "industrie", label: "Industrie/Production" },
      { value: "sante", label: "Santé/Social" },
      { value: "tech", label: "Tech/Digital" },
      { value: "education", label: "Éducation/Formation" },
      { value: "finance", label: "Finance/Banque" },
      { value: "com", label: "Communication/Marketing" },
    ]
  },
  {
    id: 'q4', part: 1, partTitle: "Profil Actuel", category: "Général",
    text: "Quel type de structure préférez-vous ?",
    type: 'single',
    options: [
      { value: "startup", label: "Startup / Petite structure agile" },
      { value: "pme", label: "PME familiale ou dynamique" },
      { value: "grand", label: "Grand groupe international" },
      { value: "public", label: "Secteur public / Association" },
      { value: "solo", label: "Travail en solo / Indépendant" },
    ]
  },
  {
    id: 'q5', part: 1, partTitle: "Profil Actuel", category: "Général",
    text: "Quel est votre niveau d'études le plus élevé ?",
    type: 'single',
    options: [
      { value: "bac", label: "Baccalauréat ou moins" },
      { value: "bac2", label: "Bac +2 (BTS, DUT)" },
      { value: "bac3", label: "Bac +3 (Licence)" },
      { value: "bac5", label: "Bac +5 (Master, Ingénieur)" },
      { value: "phd", label: "Doctorat ou spécialisation" },
    ]
  },

  // PARTIE 2 : COMPÉTENCES TRANSVERSALES (15 questions)
  { id: 'q6', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Gestion de projet (Planification, suivi budgétaire, délais)", type: 'rating', options: RATING_OPTIONS },
  { id: 'q7', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Communication écrite (Aisance rédactionnelle, synthèse)", type: 'rating', options: RATING_OPTIONS },
  { id: 'q8', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Aisance à l'oral (Prise de parole, animation de réunion)", type: 'rating', options: RATING_OPTIONS },
  { id: 'q9', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Analyse et exploitation de données chiffrées", type: 'rating', options: RATING_OPTIONS },
  { id: 'q10', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Maîtrise des outils informatiques et digitaux", type: 'rating', options: RATING_OPTIONS },
  { id: 'q11', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Capacité à travailler en équipe pluridisciplinaire", type: 'rating', options: RATING_OPTIONS },
  { id: 'q12', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Management de proximité ou direction d'équipe", type: 'rating', options: RATING_OPTIONS },
  { id: 'q13', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Capacité d'adaptation face aux imprévus", type: 'rating', options: RATING_OPTIONS },
  { id: 'q14', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Négociation commerciale ou résolution de conflits", type: 'rating', options: RATING_OPTIONS },
  { id: 'q15', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Organisation personnelle et gestion des priorités", type: 'rating', options: RATING_OPTIONS },
  { id: 'q16', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Créativité et force de proposition", type: 'rating', options: RATING_OPTIONS },
  { id: 'q17', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Relation client et sens du service", type: 'rating', options: RATING_OPTIONS },
  { id: 'q18', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Veille stratégique et curiosité sectorielle", type: 'rating', options: RATING_OPTIONS },
  { id: 'q19', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Transmission de savoir (Mentoring, formation)", type: 'rating', options: RATING_OPTIONS },
  { id: 'q20', part: 2, partTitle: "Compétences Métiers", category: "Transversal", text: "Rigueur et respect des procédures", type: 'rating', options: RATING_OPTIONS },

  // PARTIE 3 : SOFT SKILLS (8 questions)
  { id: 'q21', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Autonomie dans la réalisation des tâches", type: 'rating', options: RATING_OPTIONS },
  { id: 'q22', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Gestion du stress et de la pression", type: 'rating', options: RATING_OPTIONS },
  { id: 'q23', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Esprit critique et discernement", type: 'rating', options: RATING_OPTIONS },
  { id: 'q24', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Empathie et intelligence relationnelle", type: 'rating', options: RATING_OPTIONS },
  { id: 'q25', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Capacité à apprendre de ses erreurs", type: 'rating', options: RATING_OPTIONS },
  { id: 'q26', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Persévérance face aux obstacles", type: 'rating', options: RATING_OPTIONS },
  { id: 'q27', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Optimisme et enthousiasme communicatif", type: 'rating', options: RATING_OPTIONS },
  { id: 'q28', part: 3, partTitle: "Savoir-être", category: "Soft Skills", text: "Éthique professionnelle et loyauté", type: 'rating', options: RATING_OPTIONS },

  // PARTIE 4 : TECHNIQUES & LANGUES (4 questions)
  {
    id: 'q29', part: 4, partTitle: "Outils & Langues", category: "Technique",
    text: "Quelles sont vos compétences logicielles principales ?",
    type: 'multi',
    options: [
      { value: "office", label: "Bureautique (Excel, Word...)" },
      { value: "design", label: "Design (Adobe, Figma...)" },
      { value: "dev", label: "Programmation / Code" },
      { value: "data", label: "Data / BI (Tableau, SQL...)" },
      { value: "marketing", label: "Marketing Digital (Ads, SEO...)" },
    ]
  },
  {
    id: 'q30', part: 4, partTitle: "Outils & Langues", category: "Langues",
    text: "Quel est votre niveau de maîtrise de l'Anglais ?",
    type: 'single',
    options: [
      { value: "0", label: "Notions scolaires" },
      { value: "1", label: "A2/B1 : Je comprends l'essentiel" },
      { value: "2", label: "B2 : Usage professionnel courant" },
      { value: "3", label: "C1/C2 : Parfaitement bilingue" },
    ]
  },
  { id: 'q31', part: 4, partTitle: "Outils & Langues", category: "Technique", text: "Maîtrise des méthodologies agiles (Scrum, Kanban)", type: 'rating', options: RATING_OPTIONS },
  { id: 'q32', part: 4, partTitle: "Outils & Langues", category: "Technique", text: "Capacité à automatiser des tâches répétitives", type: 'rating', options: RATING_OPTIONS },

  // PARTIE 5 : MOTIVATIONS (3 questions)
  {
    id: 'q33', part: 5, partTitle: "Moteurs Internes", category: "Motivation",
    text: "Qu'est-ce qui vous donne de l'énergie le matin ? (3 max)",
    type: 'multi', maxChoices: 3,
    options: [
      { value: "liberte", label: "La liberté de mouvement" },
      { value: "argent", label: "Le gain financier" },
      { value: "social", label: "L'utilité sociale" },
      { value: "challenge", label: "Le défi technique" },
      { value: "reconnaissance", label: "La reconnaissance des pairs" },
    ]
  },
  {
    id: 'q34', part: 5, partTitle: "Moteurs Internes", category: "Valeurs",
    text: "Quelle valeur est non-négociable pour vous ?",
    type: 'single',
    options: [
      { value: "equite", label: "L'équité et la justice" },
      { value: "innovation", label: "L'innovation permanente" },
      { value: "bienveillance", label: "La bienveillance" },
      { value: "performance", label: "La performance pure" },
    ]
  },
  { id: 'q35', part: 5, partTitle: "Moteurs Internes", category: "Motivation", text: "Besoin de sens et d'impact dans vos missions quotidiennes", type: 'rating', options: RATING_OPTIONS },

  // PARTIE 6 : RÉALISATIONS (2 questions)
  {
    id: 'q36', part: 6, partTitle: "Parcours", category: "Expérience",
    text: "Quelle est votre plus grande fierté professionnelle ?",
    type: 'text', placeholder: "Racontez brièvement un succès marquant..."
  },
  {
    id: 'q37', part: 6, partTitle: "Parcours", category: "Expérience",
    text: "Quelle leçon avez-vous tirée de votre plus grand échec ?",
    type: 'text', placeholder: "Comment avez-vous rebondi ?"
  },

  // PARTIE 7 : PROJECTION (2 questions)
  {
    id: 'q38', part: 7, partTitle: "Avenir", category: "Objectifs",
    text: "Où vous voyez-vous dans 3 ans ?",
    type: 'single',
    options: [
      { value: "expert", label: "Expert reconnu dans mon domaine" },
      { value: "chef", label: "Manager d'une grande équipe" },
      { value: "indep", label: "À mon compte / Freelance" },
      { value: "ailleurs", label: "Dans un domaine totalement différent" },
    ]
  },
  { id: 'q39', part: 7, partTitle: "Avenir", category: "Objectifs", text: "Prêt à suivre une formation longue (6 mois+) pour changer de voie", type: 'rating', options: RATING_OPTIONS },

  // PARTIE 8 : FREINS (1 question)
  {
    id: 'q40', part: 8, partTitle: "Contraintes", category: "Obstacles",
    text: "Quel est l'obstacle principal à votre épanouissement ?",
    type: 'multi',
    options: [
      { value: "peur", label: "La peur de l'inconnu" },
      { value: "finance", label: "Le manque de moyens financiers" },
      { value: "temps", label: "Le manque de temps" },
      { value: "reseau", label: "Le manque de réseau" },
    ]
  }
];
