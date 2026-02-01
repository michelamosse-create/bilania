import { jsPDF } from 'jspdf';
import { AssessmentResult } from '../types';

const COLORS = {
  primary: [37, 99, 235] as [number, number, number],
  secondary: [99, 102, 241] as [number, number, number],
  dark: [15, 23, 42] as [number, number, number],
  light: [241, 245, 249] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  green: [34, 197, 94] as [number, number, number],
  text: [51, 65, 85] as [number, number, number],
  textLight: [100, 116, 139] as [number, number, number],
};

export const generatePDF = (results: AssessmentResult): void => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let yPos = margin;

  const checkNewPage = (neededHeight: number) => {
    if (yPos + neededHeight > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // === EN-TÊTE ===
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, pageWidth, 60, 'F');

  doc.setTextColor(...COLORS.white);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('BilanIA', margin, 25);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Votre Bilan de Competences Personnel', margin, 35);

  const date = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.setFontSize(10);
  doc.text('Genere le ' + date, margin, 50);

  yPos = 75;

  // === SYNTHÈSE ===
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('SYNTHESE GLOBALE', margin, yPos);
  yPos += 10;

  doc.setFillColor(...COLORS.light);
  const summaryText = results.summary.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
  const summaryLines = doc.splitTextToSize('"' + summaryText + '"', contentWidth - 10);
  const summaryHeight = Math.max(35, summaryLines.length * 5 + 15);
  doc.roundedRect(margin, yPos, contentWidth, summaryHeight, 3, 3, 'F');

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  doc.text(summaryLines, margin + 5, yPos + 10);
  yPos += summaryHeight + 10;

  // === POINTS DE FORCE ===
  checkNewPage(60);
  doc.setTextColor(...COLORS.green);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('POINTS DE FORCE', margin, yPos);
  yPos += 8;

  doc.setFontSize(11);

  results.strengths.forEach((strength, index) => {
    checkNewPage(15);
    const cleanStrength = strength.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');

    doc.setFillColor(...COLORS.light);
    doc.roundedRect(margin, yPos, contentWidth, 12, 2, 2, 'F');

    doc.setTextColor(...COLORS.primary);
    doc.setFont('helvetica', 'bold');
    doc.text((index + 1) + '.', margin + 4, yPos + 8);

    doc.setTextColor(...COLORS.text);
    doc.setFont('helvetica', 'normal');
    doc.text(cleanStrength.substring(0, 80), margin + 12, yPos + 8);
    yPos += 15;
  });

  yPos += 5;

  // === AXE DE VALEURS ===
  checkNewPage(40);
  doc.setTextColor(...COLORS.secondary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('AXE DE VALEURS', margin, yPos);
  yPos += 8;

  const cleanValues = results.valuesAlignment.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
  const valuesLines = doc.splitTextToSize(cleanValues, contentWidth - 15);
  const valuesHeight = Math.max(25, valuesLines.length * 5 + 10);

  doc.setFillColor(...COLORS.light);
  doc.roundedRect(margin, yPos, contentWidth, valuesHeight, 3, 3, 'F');
  doc.setDrawColor(...COLORS.primary);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin, yPos + valuesHeight);

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text(valuesLines.slice(0, 4), margin + 8, yPos + 8);
  yPos += valuesHeight + 10;

  // === OPPORTUNITÉS DE CARRIÈRE ===
  checkNewPage(30);
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('OPPORTUNITES DE CARRIERE', margin, yPos);
  yPos += 10;

  results.careerSuggestions.forEach((career, index) => {
    checkNewPage(55);

    const cleanTitle = career.title.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
    const cleanDesc = career.description.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
    const cleanRelevance = career.relevance.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
    const cleanSalary = (career.salary_range || 'Non specifie').replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a');

    // Carte
    doc.setFillColor(...COLORS.white);
    doc.setDrawColor(...COLORS.light);
    doc.roundedRect(margin, yPos, contentWidth, 50, 3, 3, 'FD');

    // Numéro
    doc.setFillColor(...COLORS.primary);
    doc.circle(margin + 8, yPos + 10, 5, 'F');
    doc.setTextColor(...COLORS.white);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(String(index + 1), margin + 6, yPos + 12);

    // Titre
    doc.setTextColor(...COLORS.dark);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(cleanTitle, margin + 18, yPos + 12);

    // Description
    doc.setTextColor(...COLORS.textLight);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(cleanDesc, contentWidth - 25);
    doc.text(descLines.slice(0, 2), margin + 18, yPos + 20);

    // Affinité (ligne séparée)
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.primary);
    doc.setFont('helvetica', 'bold');
    doc.text('Affinite: ', margin + 18, yPos + 35);
    doc.setFont('helvetica', 'normal');
    const affinityLines = doc.splitTextToSize(cleanRelevance, contentWidth - 40);
    doc.text(affinityLines[0].substring(0, 70), margin + 32, yPos + 35);

    // Salaire (ligne séparée)
    doc.setTextColor(...COLORS.textLight);
    doc.setFont('helvetica', 'bold');
    doc.text('Remuneration: ', margin + 18, yPos + 42);
    doc.setFont('helvetica', 'normal');
    doc.text(cleanSalary, margin + 45, yPos + 42);

    yPos += 55;
  });

  // === ANALYSE DES COMPÉTENCES ===
  checkNewPage(50);
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('ANALYSE DES COMPETENCES', margin, yPos);
  yPos += 10;

  results.skillsRadarData.forEach((skill) => {
    checkNewPage(12);
    const barWidth = (skill.A / skill.fullMark) * (contentWidth - 60);
    const cleanSubject = skill.subject.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');

    doc.setTextColor(...COLORS.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(cleanSubject, margin, yPos + 5);

    doc.setFillColor(...COLORS.light);
    doc.roundedRect(margin + 50, yPos, contentWidth - 60, 8, 2, 2, 'F');
    doc.setFillColor(...COLORS.primary);
    doc.roundedRect(margin + 50, yPos, barWidth, 8, 2, 2, 'F');

    doc.setTextColor(...COLORS.primary);
    doc.setFont('helvetica', 'bold');
    doc.text(skill.A + '/' + skill.fullMark, pageWidth - margin - 10, yPos + 5);

    yPos += 12;
  });

  // === PIED DE PAGE ===
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(...COLORS.dark);
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    doc.setTextColor(...COLORS.white);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('BilanIA - Bilan de Competences propulse par Intelligence Artificielle', margin, pageHeight - 6);
    doc.text('Page ' + i + '/' + totalPages, pageWidth - margin - 15, pageHeight - 6);
  }

  const fileName = 'BilanIA_' + date.replace(/\s/g, '_') + '.pdf';
  doc.save(fileName);
};

export default generatePDF;
