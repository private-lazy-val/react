import {useEffect, useState} from "react";
import Form from "./components/form/form";
import Table from "./components/table/table";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function App() {
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${reqType}`);
                if (!response.ok) throw Error('Did not receive expected items');
                const fetchedItems = await response.json();
                setItems(fetchedItems);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItems()
    }, [reqType]);

    return (
        <>
            <Form reqType={reqType} setReqType={setReqType}/>
            {isLoading && <p className='loading'>Loading items...</p>}
            {error && <p className='error'>{`Error: ${error}`}</p>}
            {!error && !isLoading &&
                <Table items={items}/>
            }
        </>
    )
}

export default App;
