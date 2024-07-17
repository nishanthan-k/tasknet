interface LocalStorageType {
  getLocalStorage: <T>(key: string) => T | null;
  setLocalStorage: <T>(key: string, data: T) => void;
}

export default function useLocalStorage(): LocalStorageType {
  const getLocalStorage = <T>(key: string): T | null => {
    const storedItem = window.localStorage.getItem(key);
    
    return storedItem ? JSON.parse(storedItem) : null;
  };

  const setLocalStorage = <T>(key: string, data: T): void => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return { getLocalStorage, setLocalStorage };
}