export const getPagesArray = (currentPage, total) => {
  const result = [];
  let temp = Math.ceil(total/4);
  if(currentPage===0){
    for(let i = 0; i < temp && i < 3; i++){
      result.push(i+1);
    }
  } else if(currentPage === temp){
    for(let i = temp - 1; i <= temp+1; i++){
      result.push(i);
    }
  } else{
    for(let i = currentPage; i < currentPage + 3; i++){
      result.push(i);
    }
  }

  return result;
}