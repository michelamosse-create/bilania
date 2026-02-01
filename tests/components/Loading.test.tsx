import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../../components/Loading';

// Mock pour les timers
vi.useFakeTimers();

describe('Loading', () => {
  it('affiche le nombre de questions analysées', () => {
    render(<Loading totalQuestions={40} />);
    expect(screen.getByText(/40 réponses/)).toBeInTheDocument();
  });

  it('affiche le titre de chargement', () => {
    render(<Loading totalQuestions={40} />);
    expect(screen.getByText(/Analyse de vos/)).toBeInTheDocument();
  });

  it('affiche le premier message de chargement', () => {
    render(<Loading totalQuestions={40} />);
    expect(screen.getByText(/Analyse de votre profil psychologique.../)).toBeInTheDocument();
  });

  it('affiche la barre de progression', () => {
    render(<Loading totalQuestions={40} />);
    // La barre de progression commence à 0%
    expect(screen.getByText(/0%/)).toBeInTheDocument();
  });

  it('affiche la citation inspirante', () => {
    render(<Loading totalQuestions={40} />);
    expect(screen.getByText(/L'IA Gemini construit votre profil psychométrique/)).toBeInTheDocument();
  });
});
