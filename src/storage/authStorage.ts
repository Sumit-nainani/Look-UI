import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorageData = async (key:string,value:any) => {
  try {
    await AsyncStorage.setItem(key,JSON.stringify(value));
  } catch (error) {
    console.error("Error saving auth data:", error);
  }
};

export const getLocalStroageData = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log("Raw Stored Value:", value)
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error loading auth data:", error);
    return null;
  }
};

export const clearLocalStorageData = async (key:string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error clearing auth data:", error);
  }
};
