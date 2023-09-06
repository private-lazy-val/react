import styles from './content.module.css';
import ItemList from "../item-list/item-list";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className={styles['empty-list-text']}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content;