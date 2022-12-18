import {FC} from "react";


const headerArray= ['title', 'amount', 'amount EUR', 'options']

// napisz sobie fn która bedzie sie nazywała firstLetterUpperCase i ona bedzie przyjmowała jako parametr string i zwracała pierwszą litere dużą//
const TableHeader:FC =() =>{
    return (
        <>
            {headerArray.map((item)=>(
                <div>{item}</div>
            ))}
        </>

    )
}
export default TableHeader;