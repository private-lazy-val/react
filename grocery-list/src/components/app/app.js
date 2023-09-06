import styles from './app.module.css';
import Header from "../header/header";
import Content from "../content/content";
import Footer from "../footer/footer";
import AddItem from "../add-item/add-item";
import SearchItem from "../search-item/search-item";
import {useState, useEffect} from "react";
import apiRequest from "../utils/api-request";

const BASE_URL = 'http://localhost:3500/items';
function App() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) throw Error('Did not receive expected data');
                const listItems = await response.json();
                setItems(listItems);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItems();
    }, []);

    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {id, checked: false, item};
        const listItems = [...items, myNewItem];
        setItems(listItems);

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myNewItem)
        }
        const result = await apiRequest(BASE_URL, postOptions);
        if (result) setError(result);
    }

    const handleCheck = async (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);

        const myItem = listItems.filter((item) => item.id === id);

        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({checked: myItem[0].checked})
        }

        const reqUrl = `${BASE_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setError(result);
    }

    const handleDelete = async (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);

        const deleteOptions = {method: 'DELETE'}
        const reqUrl = `${BASE_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setError(result);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }

    return (
        <div className={styles.app}>
            <Header title="Grocery List"/>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <main className={styles.main}>
                {isLoading && <p>Loading items...</p>}
                {error && <p className={styles.error}>{`Error: ${error}`}</p>}
                {!error && !isLoading &&
                    <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                             handleCheck={handleCheck}
                             handleDelete={handleDelete}/>
                }
            </main>
            <Footer length={items.length}/>
        </div>
    );
}

export default App;
