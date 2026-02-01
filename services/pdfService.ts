import { jsPDF } from 'jspdf';
import { AssessmentResult } from '../types';

const COLORS = {
  primary: [37, 99, 235] as [number, number, number],      // Blue-600
  secondary: [99, 102, 241] as [number, number, number],   // Indigo-500
  dark: [15, 23, 42] as [number, number, number],          // Slate-900
  light: [241, 245, 249] as [number, number, number],      // Slate-100
  white: [255, 255, 255] as [number, number, number],
  green: [34, 197, 94] as [number, number, number],        // Green-500
  text: [51, 65, 85] as [number, number, number],          // Slate-700
  textLight: [100, 116, 139] as [number, number, number],  // Slate-500
};

export const generatePDF = (results: AssessmentResult): void => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let yPos = margin;

  // Helper pour ajouter une nouvelle page si nécessaire
  const checkNewPage = (neededHeight: number) => {
    if (yPos + neededHeight > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // En-tête avec fond coloré
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, pageWidth, 60, 'F');

  // Logo texte
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('BilanIA', margin, 25);

  // Sous-titre
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Votre Bilan de Compétences Personnel', margin, 35);

  // Date
  const date = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.setFontSize(10);
  doc.text(`Généré le ${date}`, margin, 50);

  yPos = 75;

  // Section: Synthèse
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('SYNTHÈSE GLOBALE', margin, yPos);
  yPos += 10;

  doc.setFillColor(...COLORS.light);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, 'F');

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  const summaryLines = doc.splitTextToSize(`"${results.summary}"`, contentWidth - 10);
  doc.text(summaryLines, margin + 5, yPos + 10);
  yPos += 45;

  // Section: Points de Force
  checkNewPage(60);
  doc.setTextColor(...COLORS.green);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('POINTS DE FORCE', margin, yPos);
  yPos += 8;

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');

  results.strengths.forEach((strength, index) => {
    checkNewPage(15);
    doc.setFillColor(...COLORS.light);
    doc.roundedRect(margin, yPos, contentWidth, 12, 2, 2, 'F');
    doc.setTextColor(...COLORS.primary);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}.`, margin + 4, yPos + 8);
    doc.setTextColor(...COLORS.text);
    doc.setFont('helvetica', 'normal');
    const strengthText = doc.splitTextToSize(strength, contentWidth - 20);
    doc.text(strengthText[0], margin + 12, yPos + 8);
    yPos += 15;
  });

  yPos += 5;

  // Section: Axe de Valeurs
  checkNewPage(40);
  doc.setTextColor(...COLORS.secondary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('AXE DE VALEURS', margin, yPos);
  yPos += 8;

  doc.setFillColor(...COLORS.light);
  doc.roundedRect(margin, yPos, contentWidth, 25, 3, 3, 'F');
  doc.setDrawColor(...COLORS.primary);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin, yPos + 25);

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  const valuesLines = doc.splitTextToSize(results.valuesAlignment, contentWidth - 15);
  doc.text(valuesLines.slice(0, 3), margin + 8, yPos + 8);
  yPos += 35;

  // Section: Opportunités de Carrière
  checkNewPage(30);
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('OPPORTUNITÉS DE CARRIÈRE', margin, yPos);
  yPos += 10;

  results.careerSuggestions.forEach((career, index) => {
    checkNewPage(45);

    // Carte de carrière
    doc.setFillColor(...COLORS.white);
    doc.setDrawColor(...COLORS.light);
    doc.roundedRect(margin, yPos, contentWidth, 40, 3, 3, 'FD');

    // Numéro
    doc.setFillColor(...COLORS.primary);
    doc.circle(margin + 8, yPos + 8, 5, 'F');
    doc.setTextColor(...COLORS.white);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}`, margin + 6, yPos + 10);

    // Titre
    doc.setTextColor(...COLORS.dark);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(career.title, margin + 18, yPos + 10);

    // Description
    doc.setTextColor(...COLORS.textLight);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(career.description, contentWidth - 25);
    doc.text(descLines.slice(0, 2), margin + 18, yPos + 18);

    // Affinité et Salaire
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.primary);
    doc.text(`Affinité: ${career.relevance}`, margin + 18, yPos + 32);
    doc.setTextColor(...COLORS.textLight);
    doc.text(`Rémunération: ${career.salary_range}`, margin + 70, yPos + 32);

    yPos += 45;
  });

  // Section: Radar des Compétences (données textuelles)
  checkNewPage(50);
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('ANALYSE DES COMPÉTENCES', margin, yPos);
  yPos += 10;

  results.skillsRadarData.forEach((skill) => {
    checkNewPage(12);
    const barWidth = (skill.A / skill.fullMark) * (contentWidth - 60);

    doc.setTextColor(...COLORS.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(skill.subject, margin, yPos + 5);

    // Barre de progression
    doc.setFillColor(...COLORS.light);
    doc.roundedRect(margin + 50, yPos, contentWidth - 60, 8, 2, 2, 'F');
    doc.setFillColor(...COLORS.primary);
    doc.roundedRect(margin + 50, yPos, barWidth, 8, 2, 2, 'F');

    // Score
    doc.setTextColor(...COLORS.primary);
    doc.setFont('helvetica', 'bold');
    doc.text(`${skill.A}/${skill.fullMark}`, pageWidth - margin - 10, yPos + 5);

    yPos += 12;
  });

  // Pied de page sur toutes les pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(...COLORS.dark);
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    doc.setTextColor(...COLORS.white);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('BilanIA - Bilan de Compétences propulsé par Intelligence Artificielle', margin, pageHeight - 6);
    doc.text(`Page ${i}/${totalPages}`, pageWidth - margin - 15, pageHeight - 6);
  }

  // Télécharger le PDF
  const fileName = `BilanIA_${date.replace(/\s/g, '_')}.pdf`;
  doc.save(fileName);
};

export default generatePDF;
