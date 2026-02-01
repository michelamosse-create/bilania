import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // Récupère la valeur initiale depuis localStorage ou utilise la valeur par défaut
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Erreur lecture localStorage pour "${key}":`, error);
      return initialValue;
    }
  });

  // Met à jour localStorage quand la valeur change
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Erreur écriture localStorage pour "${key}":`, error);
    }
  }, [key, storedValue]);

  // Fonction pour effacer la valeur
  const clearValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Erreur suppression localStorage pour "${key}":`, error);
    }
  };

  return [storedValue, setStoredValue, clearValue];
}

export default useLocalStorage;
