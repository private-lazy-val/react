const getDeepData = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return String(obj);
    }

    return Object.values(obj).reduce((acc, value) => {
        return acc + ' ' + getDeepData(value);
    }, '');
}

const Cell = ({cellData}) => {
    return (
        <td>
            {getDeepData(cellData).trim()}
        </td>
    );
};

export default Cell;