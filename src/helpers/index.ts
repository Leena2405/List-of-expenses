import {FC} from "react";


const headerNames= ['title', 'amount', 'amount EUR', 'options']

const capitalizedHeaderNames = headerNames.map((name)=> {
    return.name.charAt(0).toUpperCase()() + name.slice(1);
});
