import AsyncStorage from '@react-native-community/async-storage';

export const createActionTypes = (key, baseAction) => {
  return {
    [`${baseAction}`]: `${key}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`
  };
};

export const getData = name => {
  return AsyncStorage.getItem(name);
};

export const storeData = (name, value) => {
  AsyncStorage.setItem(name, JSON.stringify(value));
};

export const removeData = name => {
  AsyncStorage.removeItem(name);
};

export const checkKey = (data, key) => {
  return data.hasOwnProperty(`${key}`) ? data[key] : 'NA';
};
