 export const plus = (a) => {
    let newStr = "";
    for(let i = 0 ; i < a.length ; i++){
        if(a[i] === "+"){
            newStr += 0;
        }else{
            newStr += a[i];
        }
    }
    return newStr;
}