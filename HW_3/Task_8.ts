let height = 15;
let width = 20;
 if (height > width) {
     console.log(height);
 } else {
     console.log(width);
 };

 //или

 height = 15;
 width = 20;
  if (height > width) {
      console.log(height);
  } else if (height === width) { //если хотим вывести условие о равности значений
      console.log(height || width);
  } else {
      console.log(width);
  };