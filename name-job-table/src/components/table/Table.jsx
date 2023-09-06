import React from 'react';
import classes from './Table.module.css';

const TableHeader = () => {
    return (
        <thead className={classes['table-header']}>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th></th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className={classes['delete-btn']} onClick={() => props.removeCharacter(row.id)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody className={classes['table-body']}>{rows}</tbody>
}
const Table = (props) => {
    const { characterData, removeCharacter } = props
    return (
        <table className={classes.table}>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
        ;
};

export default Table;