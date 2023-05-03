let temp, array = [[1, 4, 6], [2, 3, 5]];
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    if (array[i] > array[j]){
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
for (let i = 0; i <= 6; i++){
  document.write([i])
}