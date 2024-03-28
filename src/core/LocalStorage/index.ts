import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = {
  set: async <T = unknown>(key: string, value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return null;
    }
  },
  get: async <T = unknown>(key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!value) return null;
      return JSON.parse(value) as T;
    } catch (error) {
      return null;
    }
  },
  remove: async (keys: string | string[]) => {
    if (typeof keys === "string") {
      await AsyncStorage.removeItem(keys);
    } else {
      for await (const key of keys) {
        await AsyncStorage.removeItem(key);
      }
    }
  },
};

export default LocalStorage;
