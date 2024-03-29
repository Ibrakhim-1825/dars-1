 export const ajratish = (a) => {
    let newStr = "";
    let arr = [];

    for(let i = 0 ; i < a.length ; i++){
        if(parseInt(a[i])){
            arr.push(a[i]);
        }else{
            newStr += a[i];
        }
    }
    return {
        arr, newStr,
    };
}