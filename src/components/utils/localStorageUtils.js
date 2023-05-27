export const setStoragedItem = (item) => {
  localStorage.getItem('favorites')
    ? localStorage.setItem('favorites', JSON.stringify([...getStoragedItems().filter((e) => e !== item), item]))
    : localStorage.setItem('favorites', JSON.stringify([item]));
};

export const removeStoragedItem = (item) => {
  localStorage.setItem('favorites', JSON.stringify([...getStoragedItems().filter((e) => e !== item)]));
};

export const getStoragedItems = () => (localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
