 export const son = (a) => {
    let k = 3; 
    let newArr = [];
    for( let i = 0 ; i < a.length ; i++){
        if(a[i] > k){
            newArr.push(a[i])
        }
    }
    return newArr;
}