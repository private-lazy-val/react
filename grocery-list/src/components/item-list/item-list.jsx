import LineItem from "../line-item/line-item";
import styles from './item-list.module.css';

const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default ItemList;