import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.getItem = vi.fn();
    window.localStorage.setItem = vi.fn();
    window.localStorage.removeItem = vi.fn();
  });

  it('retourne la valeur initiale si localStorage est vide', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current[0]).toBe('default');
  });

  it('retourne la valeur de localStorage si elle existe', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue('"stored-value"');

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current[0]).toBe('stored-value');
  });

  it('met à jour la valeur et localStorage', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(result.current[0]).toBe('new-value');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('test-key', '"new-value"');
  });

  it('supporte les objets complexes', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);

    const initialValue = { name: 'test', count: 0 };
    const { result } = renderHook(() => useLocalStorage('test-key', initialValue));

    act(() => {
      result.current[1]({ name: 'updated', count: 5 });
    });

    expect(result.current[0]).toEqual({ name: 'updated', count: 5 });
  });

  it('efface la valeur avec clearValue', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue('"stored"');

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    act(() => {
      result.current[2](); // clearValue
    });

    expect(window.localStorage.removeItem).toHaveBeenCalledWith('test-key');
    expect(result.current[0]).toBe('default');
  });

  it('supporte les fonctions de mise à jour', () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue('5');

    const { result } = renderHook(() => useLocalStorage('test-key', 0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(6);
  });
});
