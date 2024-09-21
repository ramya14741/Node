function deepMerge(obj1,obj2){
    const result = {...obj1};
    for (const key in obj2){
        if(obj2.hasOwnProperty(key)){
            const value1 = obj1[key];
            const value2 = obj2[key];
            if(isObject(value1)&&isObject(value2)){
                result[key]= deepMerge(value1,value2);
            }
            else{
                result[key]=value2;
            }
        }
    }
    return result
}

function isObject(value){
    return value && typeof value == 'object' && !Array.isArray(value);
}