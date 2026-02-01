import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  const defaultProps = {
    step: 'welcome' as const,
    progress: 0,
    onLogoClick: vi.fn(),
  };

  it('affiche le logo BilanIA', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText(/Bilan/)).toBeInTheDocument();
    expect(screen.getByText(/IA/)).toBeInTheDocument();
  });

  it('appelle onLogoClick quand on clique sur le logo', () => {
    const onLogoClick = vi.fn();
    render(<Header {...defaultProps} onLogoClick={onLogoClick} />);

    const logo = screen.getByText(/Bilan/).closest('div');
    if (logo) fireEvent.click(logo);

    expect(onLogoClick).toHaveBeenCalledTimes(1);
  });

  it("n'affiche pas la barre de progression sur l'écran d'accueil", () => {
    render(<Header {...defaultProps} step="welcome" />);
    expect(screen.queryByText(/AVANCEMENT/)).not.toBeInTheDocument();
  });

  it('affiche la barre de progression pendant le questionnaire', () => {
    render(<Header {...defaultProps} step="assessment" progress={50} />);
    expect(screen.getByText(/AVANCEMENT/)).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('affiche le bon pourcentage de progression', () => {
    render(<Header {...defaultProps} step="assessment" progress={75} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });
});
