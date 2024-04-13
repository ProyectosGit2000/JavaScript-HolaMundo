let i = 0; 
while (i <= 6) {
    i++; //1, 2
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }   
    console.log(i); //*imprime => 1, 3 
}