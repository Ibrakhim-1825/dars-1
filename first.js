 export const juft_sonlar =(arr) => {
    let juft = [];
    for( let i of arr){
     if(i % 2 == 0){
            juft.push(i)
        }
    }
    return juft;
};
