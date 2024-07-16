
interface LocalStorageType {
  getLocalStorage: (key: string) => unknown[];
  setLocalStorage: (key: string, data: unknown[]) => void;
}

export default function useLocalStorage(): LocalStorageType {
  const getLocalStorage = (key: string): unknown[] => {
    const storedItem = window.localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : [];
  };

  const setLocalStorage = (key: string, data: unknown[]): void => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return { getLocalStorage, setLocalStorage };
}
