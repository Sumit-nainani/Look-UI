import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_STORAGE_KEY = "auth"; // where to put this key 

export const saveAuthData = async (authData:any) => {
  try {
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  } catch (error) {
    console.error("Error saving auth data:", error);
  }
};

export const loadAuthData = async () => {
  try {
    const authData = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
    return authData ? JSON.parse(authData) : null;
  } catch (error) {
    console.error("Error loading auth data:", error);
    return null;
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing auth data:", error);
  }
};
