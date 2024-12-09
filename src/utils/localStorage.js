// utils/localStorage.js
export const getLocalStorage = (key, defaultValue) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage`, error);
      return defaultValue;
    }
  };
  
  export const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage`, error);
    }
  };
  