import styles from './search-item.module.css';

const SearchItem = ({ search, setSearch }) => {
    return (
        <form className={styles['search-form']} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='search'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem;