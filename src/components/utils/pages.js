export const getPagesArray = (currentPage, total) => {
  const result = [];
  const temp = Math.ceil(total / 4);
  if (currentPage === 0) {
    for (let i = 0; i < temp && i < 3; i++) {
      result.push(i + 1);
    }
  } else if (currentPage === temp - 1) {
    for (let i = temp - 2; i <= temp; i++) {
      if (i > 0) {
        result.push(i);
      }
    }
  } else {
    for (let i = currentPage; i < currentPage + 3; i++) {
      result.push(i);
    }
  }

  return result;
};
