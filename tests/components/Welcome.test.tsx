import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from '../../components/Welcome';

describe('Welcome', () => {
  const defaultProps = {
    totalQuestions: 40,
    heroImageUrl: null,
    onStart: vi.fn(),
  };

  it('affiche le nombre total de questions', () => {
    render(<Welcome {...defaultProps} />);
    expect(screen.getByText(/40 Questions/)).toBeInTheDocument();
  });

  it('affiche le titre principal', () => {
    render(<Welcome {...defaultProps} />);
    expect(screen.getByText(/Révélez votre/)).toBeInTheDocument();
    expect(screen.getByText(/potentiel./)).toBeInTheDocument();
  });

  it('affiche le bouton de démarrage', () => {
    render(<Welcome {...defaultProps} />);
    expect(screen.getByText(/Lancer mon Diagnostic/)).toBeInTheDocument();
  });

  it('appelle onStart quand on clique sur le bouton', () => {
    const onStart = vi.fn();
    render(<Welcome {...defaultProps} onStart={onStart} />);

    fireEvent.click(screen.getByText(/Lancer mon Diagnostic/));
    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('affiche les 3 caractéristiques principales', () => {
    render(<Welcome {...defaultProps} />);
    expect(screen.getByText(/Profil 360°/)).toBeInTheDocument();
    expect(screen.getByText(/Radar IA/)).toBeInTheDocument();
    expect(screen.getByText(/Privé & Sécurisé/)).toBeInTheDocument();
  });

  it("affiche le loader quand il n'y a pas d'image hero", () => {
    render(<Welcome {...defaultProps} heroImageUrl={null} />);
    expect(screen.getByText(/Initialisation IA.../)).toBeInTheDocument();
  });

  it("affiche l'image hero quand elle est disponible", () => {
    render(<Welcome {...defaultProps} heroImageUrl="https://example.com/image.jpg" />);
    const img = screen.getByAltText(/Expertise Professionnelle/);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
