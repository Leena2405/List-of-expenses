import styles from "./Table.module.scss";
import {FC} from "react";
import TableHeader from "./TableHeader/TableHeader";

interface TableProps {
    className:string;
}

const Table:FC<TableProps> = ({className})=> {
    return (
        <div className={className}>
            <TableHeader/>
        </div>

    )
}

export default Table;